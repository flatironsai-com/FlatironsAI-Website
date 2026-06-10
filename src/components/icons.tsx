import React from 'react'

/**
 * Inline icon set — consistent 24px stroke icons so the site carries one
 * visual voice without an icon-library dependency.
 */

export type IconName =
  | 'search'
  | 'database'
  | 'agent'
  | 'policy'
  | 'audit'
  | 'shield-report'
  | 'training'
  | 'oversight'
  | 'boundary'
  | 'citation'
  | 'audit-log'
  | 'access'
  | 'governance'
  | 'exam-ready'
  | 'bank'
  | 'phone'
  | 'clock'
  | 'pin'
  | 'calendar'
  | 'video'
  | 'check'

const paths: Record<IconName, React.ReactNode> = {
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M15.8 15.8 20 20" />
      <path d="M8.5 11h5M11 8.5v5" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="5.5" rx="7.5" ry="2.8" />
      <path d="M4.5 5.5v13c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-13" />
      <path d="M4.5 12c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8" />
    </>
  ),
  agent: (
    <>
      <rect x="5" y="7" width="14" height="11" rx="3" />
      <path d="M12 7V4M9 4h6" />
      <circle cx="9.5" cy="12" r="0.6" fill="currentColor" />
      <circle cx="14.5" cy="12" r="0.6" fill="currentColor" />
      <path d="M9.5 15.2c.7.6 1.6.9 2.5.9s1.8-.3 2.5-.9" />
    </>
  ),
  policy: (
    <>
      <path d="M7 3.5h7.5L19 8v12a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M14 3.5V8h4.5" />
      <path d="M9.5 13h5M9.5 16.5h5" />
    </>
  ),
  audit: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="2.5" />
      <path d="M8.5 12.5l2.4 2.4 4.6-5" />
    </>
  ),
  'shield-report': (
    <>
      <path d="M12 3.5 19 6v6c0 4.4-3 7.5-7 8.5-4-1-7-4.1-7-8.5V6l7-2.5Z" />
      <path d="M9 12.5h6M12 9.5v6" />
    </>
  ),
  training: (
    <>
      <path d="M3.5 9 12 5l8.5 4L12 13 3.5 9Z" />
      <path d="M7 11v5c0 1.2 2.2 2.3 5 2.3s5-1.1 5-2.3v-5" />
      <path d="M20.5 9.5V14" />
    </>
  ),
  oversight: (
    <>
      <path d="M3.5 12S6.5 6 12 6s8.5 6 8.5 6-3 6-8.5 6-8.5-6-8.5-6Z" />
      <circle cx="12" cy="12" r="2.6" />
    </>
  ),
  boundary: (
    <>
      <rect x="4.5" y="4.5" width="15" height="15" rx="3" strokeDasharray="4 3" />
      <circle cx="12" cy="12" r="3.6" />
      <circle cx="12" cy="12" r="0.8" fill="currentColor" />
    </>
  ),
  citation: (
    <>
      <path d="M6 4.5h12A1.5 1.5 0 0 1 19.5 6v12a1.5 1.5 0 0 1-1.5 1.5H6A1.5 1.5 0 0 1 4.5 18V6A1.5 1.5 0 0 1 6 4.5Z" />
      <path d="M8.5 9.5c0-1.2.9-2 2-2M8.5 9.5V12h2.5V9.5h-2.5ZM13.5 9.5c0-1.2.9-2 2-2M13.5 9.5V12H16V9.5h-2.5Z" />
      <path d="M8.5 16h7" />
    </>
  ),
  'audit-log': (
    <>
      <rect x="5" y="4.5" width="14" height="15" rx="2" />
      <path d="M8.5 8.5h7M8.5 12h7M8.5 15.5h4" />
      <circle cx="17" cy="17" r="3.4" />
      <path d="M17 15.4V17l1.2 1" />
    </>
  ),
  access: (
    <>
      <rect x="5" y="10.5" width="14" height="9" rx="2" />
      <path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" />
      <circle cx="12" cy="15" r="1.2" fill="currentColor" />
    </>
  ),
  governance: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 4v2.5M12 17.5V20M4 12h2.5M17.5 12H20M6.3 6.3l1.8 1.8M15.9 15.9l1.8 1.8M17.7 6.3l-1.8 1.8M8.1 15.9l-1.8 1.8" />
    </>
  ),
  'exam-ready': (
    <>
      <path d="M12 3.5 19 6v6c0 4.4-3 7.5-7 8.5-4-1-7-4.1-7-8.5V6l7-2.5Z" />
      <path d="M9 12.2l2.2 2.2 4-4.4" />
    </>
  ),
  bank: (
    <>
      <path d="M3.5 9.5 12 4l8.5 5.5" />
      <path d="M5.5 9.5V18M9.8 9.5V18M14.2 9.5V18M18.5 9.5V18" />
      <path d="M3.5 18h17M3.5 20.5h17" />
    </>
  ),
  phone: (
    <>
      <path d="M7.5 3.5h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2 2A15.5 15.5 0 0 1 5.5 5.5a2 2 0 0 1 2-2Z" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s6.5-5.4 6.5-10.5a6.5 6.5 0 1 0-13 0C5.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.3" />
    </>
  ),
  calendar: (
    <>
      <rect x="4.5" y="5.5" width="15" height="14.5" rx="2" />
      <path d="M4.5 10h15M8.5 3.5v3.5M15.5 3.5v3.5" />
    </>
  ),
  video: (
    <>
      <rect x="3.5" y="6.5" width="13" height="11" rx="2" />
      <path d="M16.5 10.5 20.5 8v8l-4-2.5" />
    </>
  ),
  check: (
    <>
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </>
  ),
}

export function Icon({
  name,
  className = 'h-6 w-6',
}: {
  name: IconName
  className?: string
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
