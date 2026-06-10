import React from 'react'

import { partners } from '@/content/site'

/**
 * Marquee of partner / ecosystem names rendered as typographic wordmarks.
 * The list is doubled so the -50% translate loops seamlessly.
 */
export function LogoCloud({ label }: { label?: string }) {
  const items = [...partners, ...partners]

  return (
    <div className="relative">
      {label && (
        <p className="mb-7 text-center text-xs font-semibold tracking-[0.22em] text-ink-400 uppercase">
          {label}
        </p>
      )}
      <div
        className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
        aria-hidden="true"
      >
        <div className="flex w-max animate-marquee items-center gap-16 pr-16">
          {items.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="font-display text-lg font-semibold tracking-[0.12em] whitespace-nowrap text-ink-300/70 uppercase"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
      <p className="sr-only">Ecosystem: {partners.join(', ')}</p>
    </div>
  )
}
