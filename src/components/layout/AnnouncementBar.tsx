import Link from 'next/link'
import React from 'react'

type Props = {
  text?: string | null
  linkLabel?: string | null
  linkHref?: string | null
}

export function AnnouncementBar({ text, linkLabel, linkHref }: Props) {
  if (!text) return null

  return (
    <div className="bg-gradient-to-r from-accent-700 via-accent-600 to-accent-700 px-4 py-2.5 text-center text-sm text-white">
      <span className="opacity-95">{text}</span>
      {linkLabel && linkHref && (
        <Link
          href={linkHref}
          className="ml-2 inline-flex items-center gap-1 font-semibold text-glow-300 underline-offset-4 hover:underline"
        >
          {linkLabel}
          <span aria-hidden="true">→</span>
        </Link>
      )}
    </div>
  )
}
