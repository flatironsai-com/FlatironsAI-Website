import React from 'react'

/**
 * Brand mark — three leaning slabs echoing Boulder's Flatirons,
 * lit in alpenglow amber and summit blue.
 */
export function FlatironsMark({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true">
      <path d="M3 27 L10.5 5 L15 27 Z" fill="#EE9F45" />
      <path d="M11.5 27 L18 9.5 L22 27 Z" fill="#3D6BF4" />
      <path d="M19.5 27 L25.5 14 L29 27 Z" fill="#93B4FF" />
    </svg>
  )
}

export function Wordmark({
  className = '',
  tone = 'light',
}: {
  className?: string
  tone?: 'light' | 'dark'
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <FlatironsMark className="h-8 w-8" />
      <span
        className={`font-display text-xl font-semibold tracking-tight ${
          tone === 'light' ? 'text-white' : 'text-ink-900'
        }`}
      >
        Flatirons{' '}
        <span className={tone === 'light' ? 'text-glow-400' : 'text-glow-600'}>AI</span>
      </span>
    </span>
  )
}
