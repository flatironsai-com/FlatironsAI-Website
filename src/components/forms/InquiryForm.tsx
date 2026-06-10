'use client'

import React, { useActionState } from 'react'

import { submitInquiry, type InquiryFormState } from '@/actions/submit-inquiry'

const initialState: InquiryFormState = { status: 'idle' }

const topicOptions = [
  { label: 'Book a demo', value: 'demo' },
  { label: 'Enterprise solutions', value: 'enterprise' },
  { label: 'Testing program', value: 'test-program' },
  { label: 'Partnership', value: 'partnership' },
  { label: 'Investment', value: 'investment' },
  { label: 'Employment', value: 'employment' },
  { label: 'General inquiry', value: 'general' },
]

type Props = {
  /** Preselects and hides the topic selector (e.g. on the demo page). */
  fixedTopic?: string
  sourcePage: string
  submitLabel?: string
  /** Shown after a successful submission. */
  successTitle?: string
  successBody?: string
}

const inputClasses =
  'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 placeholder:text-ink-400 transition-colors focus:border-accent-500 focus:outline-2 focus:outline-accent-200'

export function InquiryForm({
  fixedTopic,
  sourcePage,
  submitLabel = 'Send message',
  successTitle = 'Thank you — we’ll be in touch shortly.',
  successBody = 'Your message has been received. A member of our team typically responds within one business day.',
}: Props) {
  const [state, formAction, pending] = useActionState(submitInquiry, initialState)

  if (state.status === 'success') {
    return (
      <div className="rounded-3xl border border-ink-100 bg-white p-10 text-center shadow-lg shadow-ink-900/5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-glow-500/15">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 text-glow-600"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12.5l4.5 4.5L19 7.5" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold text-ink-900">{successTitle}</h3>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink-600">{successBody}</p>
      </div>
    )
  }

  return (
    <form
      action={formAction}
      className="rounded-3xl border border-ink-100 bg-white p-8 shadow-lg shadow-ink-900/5 lg:p-10"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink-800">
            Full name <span className="text-glow-600">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink-800">
            Work email <span className="text-glow-600">*</span>
          </label>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="institution" className="mb-1.5 block text-sm font-medium text-ink-800">
            Institution
          </label>
          <input id="institution" name="institution" type="text" autoComplete="organization" className={inputClasses} />
        </div>
        <div>
          <label htmlFor="role" className="mb-1.5 block text-sm font-medium text-ink-800">
            Role
          </label>
          <input id="role" name="role" type="text" autoComplete="organization-title" className={inputClasses} />
        </div>
      </div>

      {fixedTopic ? (
        <input type="hidden" name="topic" value={fixedTopic} />
      ) : (
        <div className="mt-5">
          <label htmlFor="topic" className="mb-1.5 block text-sm font-medium text-ink-800">
            How can we help? <span className="text-glow-600">*</span>
          </label>
          <select id="topic" name="topic" required defaultValue="general" className={inputClasses}>
            {topicOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className="mt-5">
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-800">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className={inputClasses}
          placeholder="Tell us about your institution and what you’d like to see."
        />
      </div>

      {/* Honeypot — hidden from humans, irresistible to bots */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="sourcePage" value={sourcePage} />

      {state.status === 'error' && (
        <p role="alert" className="mt-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-glow-500 px-7 py-3.5 text-base font-medium text-ink-950 shadow-[0_8px_24px_-8px_rgb(238_159_69/0.6)] transition-all hover:bg-glow-400 disabled:pointer-events-none disabled:opacity-60 sm:w-auto"
      >
        {pending ? 'Sending…' : submitLabel}
      </button>
      <p className="mt-4 text-xs leading-relaxed text-ink-400">
        By submitting this form you agree to our{' '}
        <a href="/privacy-policy" className="underline underline-offset-2 hover:text-ink-600">
          privacy policy
        </a>
        . We’ll only use your details to respond to your inquiry.
      </p>
    </form>
  )
}
