import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { formatDate } from '@/lib/format'
import { categoryLabels } from '@/lib/labels'
import { getPayloadClient } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Insights',
  description:
    'Thinking from the front line of AI in banking: closed-loop architecture, regulatory change, and what compliance teams are learning from generative AI.',
}

export const revalidate = 60

export default async function InsightsPage() {
  const payload = await getPayloadClient()
  const { docs: posts } = await payload.find({
    collection: 'posts',
    sort: '-publishedAt',
    limit: 50,
  })

  const [featured, ...rest] = posts

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Thinking from the front line of AI in banking"
        lede="Closed-loop architecture, regulatory change, and what compliance teams are learning from generative AI — from the team building it."
      />

      <div className="hairline-glow" />

      <section className="bg-white py-16 lg:py-24">
        <Container>
          {posts.length === 0 ? (
            <p className="py-20 text-center text-lg text-ink-500">
              New insights are on the way. Check back soon.
            </p>
          ) : (
            <>
              {featured && (
                <Reveal>
                  <Link
                    href={`/insights/${featured.slug}`}
                    className="group grid gap-8 rounded-3xl border border-ink-100 bg-ink-50/40 p-8 transition-all duration-300 hover:border-accent-200 hover:bg-white hover:shadow-xl hover:shadow-ink-900/5 lg:grid-cols-[1.2fr_1fr] lg:p-12"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="rounded-full bg-glow-500/15 px-3 py-1 text-xs font-semibold text-glow-700">
                          Latest
                        </span>
                        <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                          {categoryLabels[featured.category] ?? featured.category}
                        </span>
                      </div>
                      <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight text-balance text-ink-900 group-hover:text-accent-700 sm:text-3xl">
                        {featured.title}
                      </h2>
                      <p className="mt-4 leading-relaxed text-ink-600">{featured.excerpt}</p>
                      <p className="mt-6 text-xs font-medium tracking-wide text-ink-400 uppercase">
                        {featured.author} · {formatDate(featured.publishedAt)}
                      </p>
                    </div>
                    <div className="hidden items-center justify-center lg:flex">
                      <div className="flex h-48 w-48 items-center justify-center rounded-full border border-ink-200 bg-white">
                        <svg viewBox="0 0 32 32" className="h-20 w-20" fill="none" aria-hidden="true">
                          <path d="M3 27 L10.5 5 L15 27 Z" fill="#EE9F45" />
                          <path d="M11.5 27 L18 9.5 L22 27 Z" fill="#3D6BF4" />
                          <path d="M19.5 27 L25.5 14 L29 27 Z" fill="#93B4FF" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              )}

              {rest.length > 0 && (
                <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {rest.map((post, i) => (
                    <Reveal key={post.id} delay={(i % 3) * 80}>
                      <Link
                        href={`/insights/${post.slug}`}
                        className="group flex h-full flex-col rounded-3xl border border-ink-100 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5"
                      >
                        <span className="inline-flex w-fit rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
                          {categoryLabels[post.category] ?? post.category}
                        </span>
                        <h3 className="mt-4 font-display text-lg leading-snug font-semibold tracking-tight text-balance text-ink-900 group-hover:text-accent-700">
                          {post.title}
                        </h3>
                        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">
                          {post.excerpt}
                        </p>
                        <p className="mt-5 text-xs font-medium tracking-wide text-ink-400 uppercase">
                          {formatDate(post.publishedAt)}
                        </p>
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </>
  )
}
