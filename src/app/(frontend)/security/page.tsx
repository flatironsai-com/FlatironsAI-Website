import type { Metadata } from 'next'
import React from 'react'

import { Icon, type IconName } from '@/components/icons'
import { CtaSection } from '@/components/sections/CtaSection'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { securityPillars } from '@/content/site'

export const metadata: Metadata = {
  title: 'Security & Trust',
  description:
    'How Flatirons AI keeps your institution’s data inside a governed boundary: closed-loop architecture, citations on every answer, complete audit trails, and model governance built for examination.',
}

const insideTheLoop = [
  'Your policies, procedures, and product documentation',
  'The regulatory corpus — federal, state, and industry',
  'Every question, answer, citation, and approval',
  'Access controls mapped to your org structure',
  'Audit logs of every interaction',
]

const neverLeaves = [
  'Your documents are never used to train shared or third-party models',
  'Your conversations never become someone else’s training data',
  'Answers are never sourced from the open internet',
  'No silent model swaps — changes go through governance',
]

const pillarIcons: Record<string, IconName> = {
  boundary: 'boundary',
  citation: 'citation',
  'audit-log': 'audit-log',
  access: 'access',
  governance: 'governance',
  'exam-ready': 'exam-ready',
}

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & Trust"
        title={
          <>
            Built for institutions that{' '}
            <span className="bg-gradient-to-r from-glow-400 to-accent-300 bg-clip-text text-transparent">
              answer to examiners
            </span>
          </>
        }
        lede="Banks don’t adopt AI on faith. Every layer of the platform — from the data boundary to the citation trail — is designed so your risk committee can approve it and your examiners can follow it."
      />

      <div className="hairline-glow" />

      {/* Six pillars */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="The architecture of trust"
            title="Six commitments, engineered in"
            lede="These aren’t policy statements layered on top of the product. They are properties of the closed-loop architecture itself."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {securityPillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={(i % 3) * 90}>
                <div className="h-full rounded-3xl border border-ink-100 bg-ink-50/40 p-8 transition-all duration-300 hover:border-accent-200 hover:bg-white hover:shadow-lg hover:shadow-ink-900/5">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-glow-400">
                    <Icon name={pillarIcons[pillar.icon] ?? 'exam-ready'} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The boundary */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="The data boundary"
            title="What stays in the loop — and what never leaves it"
            lede="“Closed-loop” is a precise claim about where your data lives and what it is used for."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-3xl border border-accent-500/30 bg-accent-500/[0.07] p-8 lg:p-10">
                <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-white">
                  <Icon name="boundary" className="h-6 w-6 text-accent-300" />
                  Inside the governed boundary
                </h3>
                <ul className="mt-6 space-y-4">
                  {insideTheLoop.map((item) => (
                    <li key={item} className="flex gap-3 text-ink-200">
                      <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-accent-300" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <div className="h-full rounded-3xl border border-glow-500/30 bg-glow-500/[0.06] p-8 lg:p-10">
                <h3 className="flex items-center gap-3 font-display text-xl font-semibold text-white">
                  <Icon name="exam-ready" className="h-6 w-6 text-glow-400" />
                  Never crosses it
                </h3>
                <ul className="mt-6 space-y-4">
                  {neverLeaves.map((item) => (
                    <li key={item} className="flex gap-3 text-ink-200">
                      <svg
                        viewBox="0 0 16 16"
                        className="mt-1 h-4 w-4 shrink-0 text-glow-400"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        aria-hidden="true"
                      >
                        <path d="M4 4l8 8M12 4l-8 8" />
                      </svg>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Governance for your AI program */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <SectionHeading
              eyebrow="Your AI program"
              title="Walk into your next exam with answers, not assurances"
              lede="Regulatory expectations for AI governance are arriving faster than most institutions can write policy. The platform is built to make your AI program demonstrable."
            />
            <div className="grid gap-5">
              {[
                {
                  title: 'Documentation examiners can follow',
                  description:
                    'Citation trails, interaction logs, and approval records give your examiners a path through every AI-assisted decision.',
                },
                {
                  title: 'Validation and change management',
                  description:
                    'Model behavior is versioned and validated. The system your committee approved is the system answering questions — and you can prove it.',
                },
                {
                  title: 'Human accountability preserved',
                  description:
                    'Experts review and approve. The platform accelerates their work; it never replaces their judgment or their sign-off.',
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="rounded-2xl border border-ink-100 bg-white p-7">
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-600">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <CtaSection
        title="Bring your security questions"
        lede="Our team will walk yours through the architecture, the data boundary, and the governance model — in whatever depth your risk committee needs."
      />
    </>
  )
}
