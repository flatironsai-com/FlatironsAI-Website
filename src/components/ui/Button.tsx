import Link from 'next/link'
import React from 'react'

type Variant = 'primary' | 'secondary' | 'dark' | 'ghost'
type Size = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500'

const variants: Record<Variant, string> = {
  // Alpenglow CTA — works on dark and light surfaces
  primary:
    'bg-glow-500 text-ink-950 shadow-[0_8px_24px_-8px_rgb(238_159_69/0.6)] hover:bg-glow-400 hover:shadow-[0_10px_28px_-8px_rgb(238_159_69/0.75)]',
  // Quiet outline for dark surfaces
  secondary:
    'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10',
  // Solid ink for light surfaces
  dark: 'bg-ink-900 text-white hover:bg-ink-700',
  // Text-only with arrow affordance
  ghost: 'text-accent-600 hover:text-accent-700',
}

const sizes: Record<Size, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

type ButtonProps = {
  children: React.ReactNode
  href?: string
  variant?: Variant
  size?: Size
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
}

export function Button({
  children,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'pointer-events-none opacity-60' : ''} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}

export function ArrowIcon({ className = 'h-4 w-4' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M2.5 8h11M9.5 4l4 4-4 4" />
    </svg>
  )
}
