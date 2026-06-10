import type { Metadata } from 'next'
import React from 'react'

import { InquiryForm } from '@/components/forms/InquiryForm'
import { Icon, type IconName } from '@/components/icons'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Testing Program',
  description:
    'Join the Flatirons AI testing program: unrestricted access to our closed-loop AI platform, weekly training webinars, and a direct line into the product roadmap.',
}

const benefits: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'boundary',
    title: 'Open access',
    description:
      'Gain unrestricted access to our pre-configured compliant AI system and experience the platform in live production.',
  },
  {
    icon: 'agent',
    title: 'Real productivity',
    description:
      'Research compliance topics, generate policies, develop marketing, and run scenario analyses — actual work, not a sandbox tour.',
  },
  {
    icon: 'audit',
    title: 'Audit support',
    description:
      'Address exam questionnaires using your organization’s own policies and see the citation trail behind every answer.',
  },
  {
    icon: 'oversight',
    title: 'Competitive edge',
    description:
      'Streamline operations with AI tools ahead of your peers — and demonstrate thought leadership to your board and your examiners.',
  },
]

const steps = [
  {
    step: '01',
    title: 'Apply',
    description:
      'Tell us about your institution and your role. We review applications on a rolling basis.',
  },
  {
    step: '02',
    title: 'Get production access',
    description:
      'Accepted members receive full access to the live system as members of Flatirons Financial, our fully configured demo institution.',
  },
  {
    step: '03',
    title: 'Learn weekly, shape the roadmap',
    description:
      'Join weekly training webinars on the platform and GenAI best practices — and tell us what to build next. We listen.',
  },
]

export default function TestProgramPage() {
  return (
    <>
      <PageHero
        eyebrow="Testing program"
        title="Experience our closed-loop AI firsthand"
        lede="The testing program gives compliance practitioners unrestricted access to a compliant AI system in live production — and gives your feedback a direct line into the product."
      />

      <div className="hairline-glow" />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why join"
            title="Full access. Real workflows. Zero risk."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={(i % 2) * 90}>
                <div className="flex h-full gap-5 rounded-3xl border border-ink-100 bg-ink-50/40 p-7">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-glow-400">
                    <Icon name={benefit.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-600">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="How it works"
            title="From application to production access"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {steps.map((step, i) => (
              <Reveal key={step.step} delay={i * 90}>
                <div className="h-full rounded-3xl border border-white/8 bg-white/[0.04] p-8">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-glow-500/40 bg-glow-500/10 font-display text-sm font-semibold text-glow-400">
                    {step.step}
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ink-50 py-16 lg:py-24" id="apply">
        <Container>
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              eyebrow="Apply"
              title="Join the testing program"
              lede="Tell us about your institution and we’ll be in touch about the next cohort."
              align="center"
            />
            <Reveal delay={120} className="mt-10">
              <InquiryForm
                fixedTopic="test-program"
                sourcePage="/test-program"
                submitLabel="Apply to join"
                successTitle="Application received"
                successBody="Thank you for your interest in the testing program. We review applications on a rolling basis and will follow up with next steps."
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
