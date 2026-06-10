import type { Metadata } from 'next'
import React from 'react'

import { InquiryForm } from '@/components/forms/InquiryForm'
import { Icon } from '@/components/icons'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/content/site'

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Get in touch with Flatirons AI for enterprise solutions, partnerships, employment, investment opportunities, and general inquiries.',
}

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="Get in touch with us"
        lede="Use this form for inquiries about our enterprise solutions, employment, partnerships, investment opportunities, or anything else. We typically respond within one business day."
      />

      <div className="hairline-glow" />

      <section className="bg-ink-50 py-16 lg:py-24">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.4fr]">
            <div className="space-y-5">
              {[
                {
                  icon: 'phone' as const,
                  title: 'Call us',
                  body: (
                    <a
                      href={`tel:${siteConfig.phone.replace(/[^+\d]/g, '')}`}
                      className="font-medium text-accent-600 hover:text-accent-700"
                    >
                      {siteConfig.phone}
                    </a>
                  ),
                },
                {
                  icon: 'clock' as const,
                  title: 'Office hours',
                  body: siteConfig.hours,
                },
                {
                  icon: 'pin' as const,
                  title: 'Headquarters',
                  body: `${siteConfig.location} — in the shadow of the Flatirons.`,
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 80}>
                  <div className="flex gap-5 rounded-2xl border border-ink-100 bg-white p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-glow-400">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="font-display font-semibold text-ink-900">{item.title}</h2>
                      <p className="mt-1 text-sm leading-relaxed text-ink-600">{item.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={120}>
              <InquiryForm sourcePage="/contact" />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  )
}
