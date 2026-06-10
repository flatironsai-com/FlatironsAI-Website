import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { Icon, type IconName } from '@/components/icons'
import { CtaSection } from '@/components/sections/CtaSection'
import { PageHero } from '@/components/sections/PageHero'
import { ArrowIcon } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'

export const metadata: Metadata = {
  title: 'Company',
  description:
    'Flatirons AI was founded in Boulder, Colorado in early 2024 with one vision: generative AI seamlessly integrated into every activity relating to compliance.',
}

const values: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'boundary',
    title: 'Trust is the product',
    description:
      'In banking, capability without governance is a liability. Everything we build starts from what a risk committee can approve and an examiner can follow.',
  },
  {
    icon: 'agent',
    title: 'Build with practitioners',
    description:
      'Our testing program keeps working compliance officers inside the development loop. We ship what they need, not what demos well.',
  },
  {
    icon: 'governance',
    title: 'Depth over breadth',
    description:
      'We serve banking — not every industry with a document folder. That focus is why the platform speaks regulation fluently.',
  },
]

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title={
          <>
            Built in Boulder,{' '}
            <span className="bg-gradient-to-r from-glow-400 to-accent-300 bg-clip-text text-transparent">
              built for banks
            </span>
          </>
        }
        lede="Flatirons AI was founded in early 2024 in Boulder, Colorado — at the foot of the rock formations we’re named for — to bring closed-loop generative AI to the institutions that keep the financial system running."
      />

      <div className="hairline-glow" />

      {/* Vision */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Reveal>
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-accent-600 uppercase">
                Our vision
              </p>
            </Reveal>
            <Reveal delay={100}>
              <blockquote className="mt-6 font-display text-3xl leading-snug font-semibold tracking-tight text-balance text-ink-900 sm:text-4xl">
                “Generative AI, seamlessly integrated into{' '}
                <span className="text-glow-600">every activity</span> relating to compliance.”
              </blockquote>
            </Reveal>
            <Reveal delay={200}>
              <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-ink-600">
                Not a bolt-on chatbot. Not a pilot that never leaves the lab. A governed
                intelligence woven through the daily work of regulated institutions — research,
                policy, training, reporting, examination — with the institution itself always in
                the loop.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story + team */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                eyebrow="Our story"
                title="Started with banks in the room"
                lede="From the first line of code, Flatirons AI has been developed alongside the bankers, compliance officers, and industry associations who would have to trust it."
              />
              <div className="mt-8 space-y-5 leading-relaxed text-ink-600">
                <p>
                  We founded the company in early 2024 with a conviction: the institutions that
                  need generative AI most — banks under mounting regulatory load — were the least
                  served by it, because general-purpose AI can’t meet the bar their examiners set.
                </p>
                <p>
                  So we built the loop instead. Institution in the Loop™ puts a bank’s own
                  operational knowledge at the center of the system, fuses it with a comprehensive
                  regulatory corpus, and keeps the institution’s experts in control of every
                  answer.
                </p>
                <p>
                  Today, our testing program keeps working compliance teams inside our development
                  process week after week — which is exactly where we want them.
                </p>
              </div>
            </div>
            <div className="space-y-5">
              <Reveal>
                <div className="rounded-3xl border border-ink-100 bg-white p-8">
                  <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-ink-900">
                    <Icon name="pin" className="h-5 w-5 text-glow-600" />
                    Boulder, Colorado
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-600">
                    Headquartered beneath the Flatirons — the slanted sandstone formations that
                    gave us our name and our logo. Steady, layered, and built to last.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-3xl border border-ink-100 bg-white p-8">
                  <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-ink-900">
                    <Icon name="agent" className="h-5 w-5 text-glow-600" />
                    The team
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-600">
                    Our technology team is led by our CTO and built from engineers and researchers
                    with advanced degrees from leading Bay Area and New York institutions —
                    working side-by-side with banking and compliance veterans.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={200}>
                <div className="rounded-3xl border border-ink-100 bg-white p-8">
                  <h3 className="flex items-center gap-3 font-display text-lg font-semibold text-ink-900">
                    <Icon name="bank" className="h-5 w-5 text-glow-600" />
                    The ecosystem
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-600">
                    We work alongside the technology leaders banks already rely on — Microsoft,
                    OpenAI, Google, and Anthropic — and engage with the industry through
                    associations including the ABA, ICBA, MBA, and KBA.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="The principles behind the platform"
            align="center"
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-ink-100 bg-ink-50/40 p-8 text-center">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-glow-400">
                    <Icon name={value.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink-900">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-16 rounded-3xl border border-ink-100 bg-ink-50/60 p-8 text-center lg:p-10">
              <h3 className="font-display text-xl font-semibold text-ink-900">
                Want to build this with us?
              </h3>
              <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-600">
                We’re always interested in hearing from engineers, banking veterans, and partners
                who care about getting AI in finance right.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 font-medium text-accent-600 hover:text-accent-700"
              >
                Get in touch
                <ArrowIcon />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      <CtaSection />
    </>
  )
}
