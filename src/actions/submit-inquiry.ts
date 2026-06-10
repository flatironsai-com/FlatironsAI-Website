'use server'

import { getPayloadClient } from '@/lib/payload'

export type InquiryFormState = {
  status: 'idle' | 'success' | 'error'
  message?: string
}

const VALID_TOPICS = new Set([
  'demo',
  'enterprise',
  'test-program',
  'partnership',
  'investment',
  'employment',
  'general',
])

export async function submitInquiry(
  _prev: InquiryFormState,
  formData: FormData,
): Promise<InquiryFormState> {
  // Honeypot — bots fill every field; humans never see this one.
  if (formData.get('website')) {
    return { status: 'success' }
  }

  const name = String(formData.get('name') ?? '').trim()
  const email = String(formData.get('email') ?? '').trim()
  const institution = String(formData.get('institution') ?? '').trim()
  const role = String(formData.get('role') ?? '').trim()
  const message = String(formData.get('message') ?? '').trim()
  const sourcePage = String(formData.get('sourcePage') ?? '').trim()

  const rawTopic = String(formData.get('topic') ?? 'general')
  const topic = (VALID_TOPICS.has(rawTopic) ? rawTopic : 'general') as
    | 'demo'
    | 'enterprise'
    | 'test-program'
    | 'partnership'
    | 'investment'
    | 'employment'
    | 'general'

  if (!name || name.length > 200) {
    return { status: 'error', message: 'Please enter your name.' }
  }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return { status: 'error', message: 'Please enter a valid work email address.' }
  }
  if (message.length > 5000) {
    return { status: 'error', message: 'Message is too long — please keep it under 5,000 characters.' }
  }

  try {
    const payload = await getPayloadClient()
    await payload.create({
      collection: 'inquiries',
      data: {
        name,
        email,
        institution: institution || undefined,
        role: role || undefined,
        topic,
        message: message || undefined,
        sourcePage: sourcePage || undefined,
      },
    })
    return { status: 'success' }
  } catch (err) {
    console.error('Inquiry submission failed:', err)
    return {
      status: 'error',
      message: 'Something went wrong on our end. Please try again, or call us directly.',
    }
  }
}
