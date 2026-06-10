import React from 'react'

import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'

type Props = {
  eyebrow: string
  title: React.ReactNode
  lede?: string
  children?: React.ReactNode
  /** Extra content rendered beside / below the copy (e.g. a graphic) */
  aside?: React.ReactNode
}

export function PageHero({ eyebrow, title, lede, children, aside }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="absolute inset-0 bg-alpenglow" aria-hidden="true" />
      <Container className="relative py-16 lg:py-24">
        <div className={aside ? 'grid items-center gap-12 lg:grid-cols-2' : ''}>
          <div className="max-w-3xl">
            <Reveal>
              <p className="font-display text-sm font-semibold tracking-[0.18em] text-glow-400 uppercase">
                {eyebrow}
              </p>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl lg:leading-[1.08]">
                {title}
              </h1>
            </Reveal>
            {lede && (
              <Reveal delay={160}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-200">{lede}</p>
              </Reveal>
            )}
            {children && <Reveal delay={240}>{children}</Reveal>}
          </div>
          {aside && (
            <Reveal delay={200} className="w-full">
              {aside}
            </Reveal>
          )}
        </div>
      </Container>
    </section>
  )
}
