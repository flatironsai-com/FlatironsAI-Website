import Link from 'next/link'
import React from 'react'

import { Container } from '@/components/ui/Container'

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
      <div className="absolute inset-0 bg-alpenglow" aria-hidden="true" />
      <Container className="relative flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
        <p className="font-display text-sm font-semibold tracking-[0.18em] text-glow-400 uppercase">
          404 — Page not found
        </p>
        <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          This page wandered off the trail
        </h1>
        <p className="mt-5 max-w-md text-lg text-ink-300">
          The page you’re looking for doesn’t exist or has moved. Let’s get you back to base camp.
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-glow-500 px-7 py-3 font-medium text-ink-950 transition-colors hover:bg-glow-400"
          >
            Back to home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-7 py-3 font-medium text-white transition-colors hover:bg-white/10"
          >
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  )
}
