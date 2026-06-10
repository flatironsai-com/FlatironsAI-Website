'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

import { navigation } from '@/content/site'
import { Button } from '@/components/ui/Button'
import { Wordmark } from '@/components/graphics/Wordmark'

function ChevronDown({ className = 'h-3.5 w-3.5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m4 6 4 4 4-4" />
    </svg>
  )
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  // Close the mobile menu on navigation (state adjustment during render).
  const [prevPathname, setPrevPathname] = useState(pathname)
  if (prevPathname !== pathname) {
    setPrevPathname(pathname)
    setMobileOpen(false)
  }

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-ink-950/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-6 lg:h-[4.5rem] lg:px-8">
        <Link href="/" aria-label="Flatirons AI home" className="shrink-0">
          <Wordmark tone="light" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main">
          {navigation.main.map((item) =>
            item.children ? (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    pathname.startsWith(item.href)
                      ? 'text-white'
                      : 'text-ink-200 hover:text-white'
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <div className="w-64 rounded-2xl border border-ink-100 bg-white p-2 shadow-2xl shadow-ink-950/20">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-700 transition-colors hover:bg-ink-50 hover:text-ink-950"
                      >
                        {child.label}
                      </Link>
                    ))}
                    <div className="mx-2 my-1.5 border-t border-ink-100" />
                    <Link
                      href={item.href}
                      className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-accent-600 transition-colors hover:bg-ink-50"
                    >
                      All solutions →
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  pathname.startsWith(item.href) ? 'text-white' : 'text-ink-200 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/contact"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink-200 transition-colors hover:text-white"
          >
            Contact
          </Link>
          <Button href="/demo" variant="primary" size="md">
            Book a demo
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="h-6 w-6">
            {mobileOpen ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-ink-950 px-6 pb-10 pt-4 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {navigation.main.map((item) => (
              <React.Fragment key={item.label}>
                <Link
                  href={item.href}
                  className="rounded-xl px-3 py-3 font-display text-lg font-medium text-white hover:bg-white/5"
                >
                  {item.label}
                </Link>
                {item.children?.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="rounded-xl px-3 py-2 pl-7 text-base text-ink-300 hover:bg-white/5 hover:text-white"
                  >
                    {child.label}
                  </Link>
                ))}
              </React.Fragment>
            ))}
            <Link
              href="/contact"
              className="rounded-xl px-3 py-3 font-display text-lg font-medium text-white hover:bg-white/5"
            >
              Contact
            </Link>
          </nav>
          <div className="mt-6 flex flex-col gap-3">
            <Button href="/demo" variant="primary" size="lg" className="w-full">
              Book a demo
            </Button>
            <Button href="/test-program" variant="secondary" size="lg" className="w-full">
              Join the testing program
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
