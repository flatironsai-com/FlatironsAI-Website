import React from 'react'

import { Button, ArrowIcon } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

type Props = {
  title?: string
  lede?: string
}

export function CtaSection({
  title = 'See your institution in the loop',
  lede = 'Bring a real compliance question to a live demo. Watch the platform answer it from regulation and policy — with the citation trail to prove it.',
}: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-950 py-20 lg:py-28">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="absolute inset-0 bg-alpenglow" aria-hidden="true" />
      <Container className="relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-200">{lede}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/demo" variant="primary" size="lg">
              Book a demo
              <ArrowIcon />
            </Button>
            <Button href="/test-program" variant="secondary" size="lg">
              Join the testing program
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  )
}
