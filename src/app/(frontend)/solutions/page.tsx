import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { Icon, type IconName } from '@/components/icons'
import { CtaSection } from '@/components/sections/CtaSection'
import { PageHero } from '@/components/sections/PageHero'
import { ArrowIcon } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { solutions } from '@/content/solutions'

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Closed-loop AI tailored to national banks, state banks, fintechs, and payment processors — specialized for how each is chartered, licensed, and examined.',
}

const segmentIcons: Record<string, IconName> = {
  'national-banks': 'bank',
  'state-banks': 'policy',
  fintechs: 'agent',
  'payment-processors': 'governance',
}

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Your regulator isn’t generic. Neither are we."
        lede="Flatirons AI is specialized for how your institution is chartered, licensed, and examined — with the regulatory corpus and workflows to match."
      />

      <div className="hairline-glow" />

      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            {solutions.map((solution, i) => (
              <Reveal key={solution.slug} delay={(i % 2) * 90}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-ink-100 p-9 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-ink-900 text-glow-400">
                    <Icon name={segmentIcons[solution.slug] ?? 'bank'} className="h-7 w-7" />
                  </div>
                  <h2 className="mt-6 font-display text-2xl font-semibold tracking-tight text-ink-900">
                    {solution.label}
                  </h2>
                  <p className="mt-3 font-display text-lg leading-snug text-ink-700">
                    {solution.headline}
                  </p>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-600">
                    {solution.subheadline}
                  </p>
                  <span className="mt-7 inline-flex items-center gap-2 font-medium text-accent-600 transition-colors group-hover:text-accent-700">
                    See the {solution.label.toLowerCase()} solution
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaSection />
    </>
  )
}
