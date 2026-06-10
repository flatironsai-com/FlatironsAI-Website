import React from 'react'

import { Reveal } from './Reveal'

type Props = {
  eyebrow?: string
  title: string
  lede?: string
  /** 'light' for dark backgrounds, 'dark' for light backgrounds */
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  tone = 'dark',
  align = 'left',
  className = '',
}: Props) {
  const isLight = tone === 'light'
  const alignment = align === 'center' ? 'mx-auto text-center' : ''

  return (
    <Reveal className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow && (
        <p
          className={`mb-3 font-display text-sm font-semibold tracking-[0.18em] uppercase ${
            isLight ? 'text-glow-400' : 'text-accent-600'
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${
          isLight ? 'text-white' : 'text-ink-900'
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-5 text-lg leading-relaxed ${isLight ? 'text-ink-200' : 'text-ink-600'}`}
        >
          {lede}
        </p>
      )}
    </Reveal>
  )
}
