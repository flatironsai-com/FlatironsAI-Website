import Link from 'next/link'
import React from 'react'

import type { Post, Testimonial } from '@/payload-types'

import { LoopDiagram } from '@/components/graphics/LoopDiagram'
import { Icon, type IconName } from '@/components/icons'
import { CtaSection } from '@/components/sections/CtaSection'
import { LogoCloud } from '@/components/sections/LogoCloud'
import { ArrowIcon, Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { capabilities, differentiators, loopSteps, marketStats, siteConfig } from '@/content/site'
import { solutions } from '@/content/solutions'
import { formatDate } from '@/lib/format'
import { categoryLabels } from '@/lib/labels'
import { getPayloadClient } from '@/lib/payload'

export const revalidate = 300

export const metadata = {
  title: 'Flatirons AI — Closed-Loop AI for Banking',
  description: siteConfig.description,
}

const heroChecklist = [
  'Your data never trains outside models',
  'Every answer cited to its source',
  'Built for examination from day one',
]

const segmentIcons: Record<string, IconName> = {
  'national-banks': 'bank',
  'state-banks': 'policy',
  fintechs: 'agent',
  'payment-processors': 'governance',
}

const securityHighlights: { icon: IconName; title: string; description: string }[] = [
  {
    icon: 'boundary',
    title: 'Your data stays in the loop',
    description:
      'Institutional documents and conversations remain inside a governed boundary — never sent to train shared or third-party models.',
  },
  {
    icon: 'citation',
    title: 'Every answer is cited',
    description:
      'Answers link to the exact policy paragraph or regulation section they came from. No black-box responses to defend in an exam.',
  },
  {
    icon: 'audit-log',
    title: 'Complete audit trail',
    description:
      'Every question, answer, and approval is logged — your AI program becomes something you can demonstrate, not just describe.',
  },
]

async function getHomeData() {
  try {
    const payload = await getPayloadClient()
    const [testimonials, posts] = await Promise.all([
      payload.find({
        collection: 'testimonials',
        where: { featured: { equals: true } },
        limit: 3,
      }),
      payload.find({
        collection: 'posts',
        sort: '-publishedAt',
        limit: 3,
      }),
    ])
    return { testimonials: testimonials.docs, posts: posts.docs }
  } catch {
    return { testimonials: [] as Testimonial[], posts: [] as Post[] }
  }
}

export default async function HomePage() {
  const { testimonials, posts } = await getHomeData()

  return (
    <>
      {/* ------------------------------------------------ Hero */}
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="absolute inset-0 bg-alpenglow" aria-hidden="true" />

        <Container className="relative pt-16 pb-12 lg:pt-24 lg:pb-16">
          <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <Reveal>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-ink-100">
                  <span className="h-2 w-2 animate-pulse-soft rounded-full bg-glow-500" />
                  Institution in the Loop™ architecture
                </span>
              </Reveal>
              <Reveal delay={80}>
                <h1 className="mt-6 font-display text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06]">
                  <span className="bg-gradient-to-r from-glow-400 via-glow-300 to-accent-300 bg-clip-text text-transparent">
                    Closed-loop AI,
                  </span>{' '}
                  built with and trusted by banks
                </h1>
              </Reveal>
              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-200">
                  Flatirons AI fuses your institution’s policies, your data, and the regulations
                  that govern you into one governed intelligence. Answers in seconds. Citations on
                  everything. Nothing leaves the loop.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Button href="/demo" variant="primary" size="lg">
                    Book a demo
                    <ArrowIcon />
                  </Button>
                  <Button href="/platform" variant="secondary" size="lg">
                    Explore the platform
                  </Button>
                </div>
              </Reveal>
              <Reveal delay={320}>
                <ul className="mt-10 flex flex-col gap-3 text-sm text-ink-200 sm:flex-row sm:flex-wrap sm:gap-x-7">
                  {heroChecklist.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <Icon name="check" className="h-4 w-4 shrink-0 text-glow-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>

            <Reveal delay={200} className="mx-auto w-full max-w-[560px]">
              <LoopDiagram className="h-auto w-full" />
            </Reveal>
          </div>

          <div className="mt-16 border-t border-white/8 pt-10 lg:mt-20">
            <LogoCloud label="Working alongside the technologies and associations banks trust" />
          </div>
        </Container>
      </section>

      <div className="hairline-glow" />

      {/* ------------------------------------------------ Differentiators */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why Flatirons AI"
            title="General-purpose AI answers from the internet. Ours answers from your institution."
            lede="Banks don’t need another chat window. They need an AI program a risk committee can approve and an examiner can follow. That difference is architectural — and it’s where we started."
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {differentiators.map((item, i) => (
              <Reveal key={item.title} delay={i * 90}>
                <div className="h-full rounded-3xl border border-ink-100 bg-ink-50/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:bg-white hover:shadow-xl hover:shadow-ink-900/5">
                  <span className="font-display text-sm font-semibold text-glow-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-ink-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-ink-600">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ How the loop works */}
      <section className="relative overflow-hidden bg-ink-50 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-light" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            eyebrow="How it works"
            title="Four moves. One closed loop."
            lede="Institution in the Loop™ means your bank’s operational knowledge is the DNA of the system — and your experts keep their hands on the wheel."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {loopSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 90}>
                <div className="relative h-full rounded-3xl border border-ink-100 bg-white p-7">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-semibold text-glow-400">
                      {step.step}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">{step.description}</p>
                  {i < loopSteps.length - 1 && (
                    <div
                      className="absolute top-1/2 -right-3 hidden h-px w-6 bg-ink-200 lg:block"
                      aria-hidden="true"
                    />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={300} className="mt-10">
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 font-medium text-accent-600 hover:text-accent-700"
            >
              See the full platform
              <ArrowIcon />
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ------------------------------------------------ Capabilities */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <Container className="relative">
          <SectionHeading
            tone="light"
            eyebrow="The platform"
            title="One platform. Every compliance workflow."
            lede="Industry rules + your data + our AI. From regulatory research to exam response — the work your team does every day, grounded, cited, and fast."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={(i % 4) * 70}>
                <div className="group h-full rounded-2xl border border-white/8 bg-white/[0.04] p-6 transition-all duration-300 hover:border-glow-500/40 hover:bg-white/[0.07]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500/15 text-accent-300 transition-colors group-hover:bg-glow-500/15 group-hover:text-glow-400">
                    <Icon name={cap.icon} className="h-5.5 w-5.5" />
                  </div>
                  <h3 className="mt-5 font-display text-base font-semibold text-white">
                    {cap.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-ink-300">{cap.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Solutions */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Solutions"
            title="Specialized for how you’re chartered, licensed, and examined"
            lede="A national bank, a state-chartered community bank, a fintech, and a payment processor don’t share a regulator — so they shouldn’t share a generic AI."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {solutions.map((solution, i) => (
              <Reveal key={solution.slug} delay={(i % 2) * 90}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-ink-100 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-900 text-glow-400">
                      <Icon name={segmentIcons[solution.slug] ?? 'bank'} className="h-6 w-6" />
                    </div>
                    <h3 className="font-display text-xl font-semibold tracking-tight text-ink-900">
                      {solution.label}
                    </h3>
                  </div>
                  <p className="mt-4 flex-1 leading-relaxed text-ink-600">{solution.subheadline}</p>
                  <span className="mt-6 inline-flex items-center gap-2 font-medium text-accent-600 transition-colors group-hover:text-accent-700">
                    Explore {solution.label.toLowerCase()}
                    <ArrowIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Market stats */}
      <section className="relative overflow-hidden bg-ink-900 py-16 lg:py-20">
        <div className="absolute inset-0 bg-alpenglow" aria-hidden="true" />
        <Container className="relative">
          <Reveal>
            <p className="font-display text-sm font-semibold tracking-[0.18em] text-glow-400 uppercase">
              Why now
            </p>
            <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              The compliance burden keeps compounding. Team capacity doesn’t.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {marketStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="border-l-2 border-glow-500/60 pl-5">
                  <p className="font-display text-4xl font-semibold tracking-tight text-white lg:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Security strip */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.3fr]">
            <SectionHeading
              eyebrow="Security & governance"
              title="Bank-grade by architecture, not by promise"
              lede="The loop is closed by design: a governed data boundary, citations on every answer, and an audit trail your examiners can walk."
              className="lg:sticky lg:top-28"
            />
            <div className="grid gap-5">
              {securityHighlights.map((item, i) => (
                <Reveal key={item.title} delay={i * 90}>
                  <div className="flex gap-5 rounded-2xl border border-ink-100 bg-ink-50/50 p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-glow-400">
                      <Icon name={item.icon} className="h-5.5 w-5.5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-ink-900">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={300}>
                <Link
                  href="/security"
                  className="inline-flex items-center gap-2 font-medium text-accent-600 hover:text-accent-700"
                >
                  See our full security & trust posture
                  <ArrowIcon />
                </Link>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ------------------------------------------------ Testimonials */}
      {testimonials.length > 0 && (
        <section className="bg-ink-50 py-20 lg:py-28">
          <Container>
            <SectionHeading
              eyebrow="From the field"
              title="What compliance teams are telling us"
              lede="Feedback from the institutions building alongside us in the testing program."
              align="center"
            />
            <div className="mt-14 grid gap-6 lg:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={t.id} delay={i * 90}>
                  <figure className="flex h-full flex-col rounded-3xl border border-ink-100 bg-white p-8">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-8 w-8 text-glow-500"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M5 13.5C5 9.4 7.6 6.4 11 5l.8 1.6c-2 1-3.2 2.6-3.4 4.4H11v6H5v-3.5Zm9 0c0-4.1 2.6-7.1 6-8.5l.8 1.6c-2 1-3.2 2.6-3.4 4.4H20v6h-6v-3.5Z" />
                    </svg>
                    <blockquote className="mt-5 flex-1 text-lg leading-relaxed text-ink-800">
                      {t.quote}
                    </blockquote>
                    <figcaption className="mt-6 border-t border-ink-100 pt-5">
                      <p className="font-display font-semibold text-ink-900">{t.authorRole}</p>
                      <p className="mt-0.5 text-sm text-ink-500">{t.institution}</p>
                    </figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ------------------------------------------------ Latest insights */}
      {posts.length > 0 && (
        <section className="bg-white py-20 lg:py-28">
          <Container>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Insights"
                title="Thinking from the front line of AI in banking"
              />
              <Reveal delay={120}>
                <Button href="/insights" variant="dark">
                  All insights
                  <ArrowIcon />
                </Button>
              </Reveal>
            </div>
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {posts.map((post, i) => (
                <Reveal key={post.id} delay={i * 90}>
                  <Link
                    href={`/insights/${post.slug}`}
                    className="group flex h-full flex-col rounded-3xl border border-ink-100 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5"
                  >
                    <span className="inline-flex w-fit rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                      {categoryLabels[post.category] ?? post.category}
                    </span>
                    <h3 className="mt-4 font-display text-lg leading-snug font-semibold tracking-tight text-balance text-ink-900 group-hover:text-accent-700">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                      {post.excerpt}
                    </p>
                    <p className="mt-5 text-xs font-medium tracking-wide text-ink-400 uppercase">
                      {formatDate(post.publishedAt)}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaSection />
    </>
  )
}
