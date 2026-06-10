import React from 'react'

/**
 * Stylized product vignette — a compliance question answered with citations,
 * shown as a chat exchange. Pure markup, used on the Platform page.
 */
export function ChatMockup({ className = '' }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden rounded-3xl border border-white/10 bg-ink-900 shadow-2xl shadow-ink-950/60 ${className}`}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-white/8 bg-ink-950/60 px-5 py-3.5">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="ml-3 text-xs font-medium tracking-wide text-ink-400">
          Flatirons AI — Compliance Agent
        </span>
      </div>

      <div className="space-y-5 p-6">
        {/* Question */}
        <div className="flex justify-end">
          <div className="max-w-[85%] rounded-2xl rounded-br-md bg-accent-600 px-5 py-3.5 text-sm leading-relaxed text-white">
            Can we waive the overdraft fee for this customer without triggering a Reg E issue?
            They opted out of overdraft coverage last year.
          </div>
        </div>

        {/* Answer */}
        <div className="flex justify-start">
          <div className="max-w-[92%] rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.05] px-5 py-4 text-sm leading-relaxed text-ink-100">
            <p>
              Yes — waiving the fee is permitted and carries no Regulation E implications. Because
              the customer opted out under §1005.17, the fee should not have been assessed on
              one-time debit transactions; waiving it is also consistent with your fee-waiver
              authority matrix (Tier 1, no approval required).
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Reg E §1005.17(b)', 'Overdraft Policy §3.2', 'Fee Waiver Matrix, Tier 1'].map(
                (cite) => (
                  <span
                    key={cite}
                    className="inline-flex items-center gap-1.5 rounded-full border border-glow-500/30 bg-glow-500/10 px-3 py-1 text-xs font-medium text-glow-300"
                  >
                    <svg viewBox="0 0 12 12" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true">
                      <path d="M4.5 1.5h-2a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-2M7 1.5h3.5V5M10.5 1.5 5.5 6.5" />
                    </svg>
                    {cite}
                  </span>
                ),
              )}
            </div>
            <p className="mt-4 flex items-center gap-2 border-t border-white/8 pt-3 text-xs text-ink-400">
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-glow-400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
                <path d="M3 8.5 6.5 12 13 4.5" />
              </svg>
              Answered in 4.2s · grounded in 3 sources · logged to audit trail
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
