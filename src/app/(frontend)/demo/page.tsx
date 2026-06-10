import type { Metadata } from 'next'
import React from 'react'

import { InquiryForm } from '@/components/forms/InquiryForm'
import { Icon } from '@/components/icons'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'Book a Demo',
  description:
    'Schedule a live demo of the Flatirons AI platform. Bring a real compliance question and watch it answered from regulation and policy — with citations.',
}

const expectations = [
  {
    title: 'A working session, not a slide deck',
    description:
      'We open the live platform and run real workflows: regulatory research, policy drafting, exam-questionnaire response.',
  },
  {
    title: 'Bring your hardest question',
    description:
      'The best demos start with a question your team spent hours on last month. Watch it come back in seconds, with citations.',
  },
  {
    title: 'Your whole team is welcome',
    description:
      'Compliance, risk, operations, IT — we’ll go as deep on architecture and governance as your stakeholders need.',
  },
  {
    title: '45 minutes, including your Q&A',
    description:
      'A focused session with time reserved for whatever your team wants to probe.',
  },
]

export default function DemoPage() {
  return (
    <>
      <PageHero
        eyebrow="See it live"
        title="Schedule a live demo"
        lede="We appreciate the opportunity to share our work with you and your team. Tell us a little about your institution and we’ll find a convenient time to experience the platform together."
      />

      <div className="hairline-glow" />

      <section className="bg-ink-50 py-16 lg:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <Reveal>
                <h2 className="font-display text-2xl font-semibold tracking-tight text-ink-900">
                  What to expect
                </h2>
              </Reveal>
              <div className="mt-8 space-y-6">
                {expectations.map((item, i) => (
                  <Reveal key={item.title} delay={i * 80}>
                    <div className="flex gap-4">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-900 text-glow-400">
                        <Icon name="check" className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-ink-900">{item.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-ink-600">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
              <Reveal delay={360}>
                <div className="mt-10 rounded-2xl border border-ink-100 bg-white p-6">
                  <p className="text-sm font-medium text-ink-800">Prefer to talk first?</p>
                  <p className="mt-2 flex items-center gap-2.5 text-sm text-ink-600">
                    <Icon name="phone" className="h-4 w-4 text-glow-600" />
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                      className="font-medium text-accent-600 hover:text-accent-700"
                    >
                      {siteConfig.phone}
                    </a>
                  </p>
                  <p className="mt-1.5 flex items-center gap-2.5 text-sm text-ink-600">
                    <Icon name="clock" className="h-4 w-4 text-glow-600" />
                    {siteConfig.hours}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={120}>
              <InquiryForm
                fixedTopic="demo"
                sourcePage="/demo"
                submitLabel="Request a demo"
                successTitle="Demo request received"
                successBody="Thank you — our team will reach out within one business day to find a time that works for your team."
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
