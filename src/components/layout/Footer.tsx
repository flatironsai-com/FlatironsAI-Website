import Link from 'next/link'
import React from 'react'

import { navigation, siteConfig } from '@/content/site'
import { Wordmark } from '@/components/graphics/Wordmark'
import { Icon } from '@/components/icons'
import { Container } from '@/components/ui/Container'

type FooterProps = {
  phone?: string | null
  hours?: string | null
}

const columns = [
  { heading: 'Platform', links: navigation.footer.platform },
  { heading: 'Solutions', links: navigation.footer.solutions },
  { heading: 'Company', links: navigation.footer.company },
]

export function Footer({ phone, hours }: FooterProps) {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="hairline-glow" />
      <Container className="py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div className="max-w-sm">
            <Link href="/" aria-label="Flatirons AI home">
              <Wordmark tone="light" />
            </Link>
            <p className="mt-5 text-sm leading-relaxed text-ink-400">
              Closed-loop generative AI for banking. Built in {siteConfig.location}, with and for
              the institutions that use it.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Icon name="phone" className="h-4.5 w-4.5 shrink-0 text-glow-500" />
                <a href={`tel:${(phone ?? siteConfig.phone).replace(/[^+\d]/g, '')}`} className="hover:text-white">
                  {phone ?? siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="clock" className="h-4.5 w-4.5 shrink-0 text-glow-500" />
                <span>{hours ?? siteConfig.hours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Icon name="pin" className="h-4.5 w-4.5 shrink-0 text-glow-500" />
                <span>{siteConfig.location}</span>
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="font-display text-sm font-semibold tracking-[0.14em] text-white uppercase">
                {col.heading}
              </h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/8 pt-8 text-xs text-ink-500 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Flatirons AI, LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-ink-300">
              Privacy Policy
            </Link>
            <Link href="/admin" className="transition-colors hover:text-ink-300">
              Site Editor
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}
