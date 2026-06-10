import type { Metadata } from 'next'
import React from 'react'

import { ChatMockup } from '@/components/graphics/ChatMockup'
import { LoopDiagram } from '@/components/graphics/LoopDiagram'
import { Icon } from '@/components/icons'
import { CtaSection } from '@/components/sections/CtaSection'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { capabilities, loopSteps } from '@/content/site'

export const metadata: Metadata = {
  title: 'Platform',
  description:
    'The Flatirons AI enterprise platform: AI-powered regulatory research, agent-powered Q&A, policy management, audit and exam automation, and BSA/AML reporting — all grounded in your institution’s knowledge.',
}

const outcomes = [
  {
    metric: 'Seconds',
    label: 'from complex question to cited answer',
  },
  {
    metric: 'Days, not weeks',
    label: 'to respond to audits and exams',
  },
  {
    metric: 'One source of truth',
    label: 'across every team and line of business',
  },
]

export default function PlatformPage() {
  return (
    <>
      <PageHero
        eyebrow="The Platform"
        title={
          <>
            The enterprise copilot for{' '}
            <span className="bg-gradient-to-r from-glow-400 to-accent-300 bg-clip-text text-transparent">
              regulated banking
            </span>
          </>
        }
        lede="A generative AI application designed to empower every area of bank operations — with the visibility and control regulated institutions demand. It seamlessly blends a comprehensive regulatory database with your institution’s specific data."
        aside={<ChatMockup />}
      >
        <div className="mt-9 inline-flex flex-wrap items-center gap-x-3 gap-y-2 rounded-2xl border border-white/10 bg-white/[0.04] px-6 py-4 font-display text-base font-medium text-ink-100 sm:text-lg">
          <span className="text-glow-400">Industry rules</span>
          <span className="text-ink-400">+</span>
          <span className="text-accent-300">Your data</span>
          <span className="text-ink-400">+</span>
          <span className="text-white">Our AI</span>
          <span className="text-ink-400">=</span>
          <span className="text-white">Operational leadership</span>
        </div>
      </PageHero>

      <div className="hairline-glow" />

      {/* Outcomes strip */}
      <section className="border-b border-ink-100 bg-white py-12">
        <Container>
          <div className="grid gap-8 sm:grid-cols-3">
            {outcomes.map((o, i) => (
              <Reveal key={o.metric} delay={i * 80}>
                <div className="text-center sm:text-left">
                  <p className="font-display text-2xl font-semibold tracking-tight text-ink-900">
                    {o.metric}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">{o.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Capabilities, in depth */}
      <section className="bg-white py-20 lg:py-28">
        <Container>
          <SectionHeading
            eyebrow="Capabilities"
            title="Everything your compliance program does — accelerated"
            lede="Nine workflows, one governed platform. Each one grounded in your institution’s knowledge and the regulations that apply to you."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.title} delay={(i % 2) * 80}>
                <div className="flex h-full gap-5 rounded-3xl border border-ink-100 bg-ink-50/40 p-7 transition-all duration-300 hover:border-accent-200 hover:bg-white hover:shadow-lg hover:shadow-ink-900/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-ink-900 text-glow-400">
                    <Icon name={cap.icon} className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold tracking-tight text-ink-900">
                      {cap.title}
                    </h3>
                    <p className="mt-2 leading-relaxed text-ink-600">{cap.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* The loop, explained */}
      <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <Container className="relative">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <SectionHeading
                tone="light"
                eyebrow="Institution in the Loop™"
                title="Your operational knowledge is the DNA of the model"
                lede="The platform doesn’t bolt your documents onto a general-purpose chatbot. It builds a governed intelligence around them — so every interaction reflects how your institution actually operates."
              />
              <div className="mt-10 space-y-6">
                {loopSteps.map((step) => (
                  <Reveal key={step.step}>
                    <div className="flex gap-5">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-glow-500/40 bg-glow-500/10 font-display text-sm font-semibold text-glow-400">
                        {step.step}
                      </span>
                      <div>
                        <h3 className="font-display text-lg font-semibold text-white">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-relaxed text-ink-300">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
            <Reveal delay={150} className="mx-auto w-full max-w-[540px]">
              <LoopDiagram className="h-auto w-full" />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Built with banks */}
      <section className="bg-ink-50 py-20 lg:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
            <SectionHeading
              eyebrow="Built with banks"
              title="Shaped by the teams who use it, every week"
              lede="Our testing program gives compliance teams full production access — and gives us a standing weekly feedback loop with working practitioners."
            />
            <div className="grid gap-5">
              {[
                {
                  title: 'Weekly training webinars',
                  description:
                    'Testing program members join weekly sessions on the platform and GenAI best practices — and their questions shape the roadmap.',
                },
                {
                  title: 'Real workflows, not lab demos',
                  description:
                    'Members research compliance topics, generate policies, run scenario analyses, and answer exam questionnaires in a live production environment.',
                },
                {
                  title: 'Feedback that ships',
                  description:
                    'The features on this page exist because a compliance officer asked for them. That is what “built with and trusted by banks” means.',
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
        title="Watch it answer your hardest question"
        lede="The best way to evaluate the platform is to bring a question your team spent hours on last month — and watch it come back in seconds, with citations."
      />
    </>
  )
}
