import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import React from 'react'

import { Icon } from '@/components/icons'
import { CtaSection } from '@/components/sections/CtaSection'
import { PageHero } from '@/components/sections/PageHero'
import { ArrowIcon, Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { getSolution, solutions } from '@/content/solutions'

type Props = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) return {}
  return {
    title: `${solution.label} — Solutions`,
    description: solution.subheadline,
  }
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) notFound()

  return (
    <>
      <PageHero
        eyebrow={`Solutions · ${solution.label}`}
        title={solution.headline}
        lede={solution.subheadline}
      >
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Button href="/demo" variant="primary" size="lg">
            Book a demo
            <ArrowIcon />
          </Button>
          <Button href="/platform" variant="secondary" size="lg">
            Explore the platform
          </Button>
        </div>
      </PageHero>

      <div className="hairline-glow" />

      {/* Challenges */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="The challenge"
            title="What your team is up against"
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solution.challenges.map((challenge, i) => (
              <Reveal key={challenge.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-ink-100 bg-ink-50/50 p-8">
                  <span className="font-display text-sm font-semibold text-glow-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold tracking-tight text-ink-900">
                    {challenge.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">
                    {challenge.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="How Flatirons AI helps"
            title={`Closed-loop AI, specialized for ${solution.label.toLowerCase()}`}
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {solution.approach.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-white/8 bg-white/[0.04] p-8 transition-colors hover:border-glow-500/40">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-glow-500/15 text-glow-400">
                    <Icon name="check" className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-300">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <div className="mt-14 rounded-3xl border border-glow-500/25 bg-glow-500/[0.07] p-8 lg:p-10">
              <p className="max-w-3xl font-display text-xl leading-relaxed font-medium text-balance text-glow-200 lg:text-2xl">
                “{solution.proofPoint}”
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection
        title={`See it working on ${solution.label.toLowerCase()} questions`}
        lede="Bring the compliance question that ate your team’s week. We’ll answer it live — grounded, cited, and in seconds."
      />
    </>
  )
}
