import { RichText } from '@payloadcms/richtext-lexical/react'
import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import React from 'react'

import { Container } from '@/components/ui/Container'
import { formatDate } from '@/lib/format'
import { categoryLabels } from '@/lib/labels'
import { getPayloadClient } from '@/lib/payload'

type Props = {
  params: Promise<{ slug: string }>
}

export const revalidate = 60

export async function generateStaticParams() {
  try {
    const payload = await getPayloadClient()
    const { docs } = await payload.find({
      collection: 'posts',
      limit: 100,
      select: { slug: true },
    })
    return docs.filter((d) => d.slug).map((d) => ({ slug: d.slug as string }))
  } catch {
    return []
  }
}

async function getPost(slug: string) {
  const payload = await getPayloadClient()
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    limit: 1,
  })
  return docs[0] ?? null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  if (!post) notFound()

  return (
    <article>
      <section className="relative overflow-hidden bg-ink-950">
        <div className="absolute inset-0 bg-grid-dark" aria-hidden="true" />
        <div className="absolute inset-0 bg-alpenglow" aria-hidden="true" />
        <Container className="relative py-16 lg:py-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-medium text-ink-300 transition-colors hover:text-white"
            >
              <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M13.5 8h-11M6.5 4l-4 4 4 4" />
              </svg>
              All insights
            </Link>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-ink-100">
                {categoryLabels[post.category] ?? post.category}
              </span>
              <span className="text-sm text-ink-400">{formatDate(post.publishedAt)}</span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-200">{post.excerpt}</p>
            {post.author && (
              <p className="mt-7 text-sm font-medium tracking-wide text-glow-400 uppercase">
                {post.author}
              </p>
            )}
          </div>
        </Container>
      </section>

      <div className="hairline-glow" />

      <section className="bg-white py-14 lg:py-20">
        <Container>
          <div className="prose-flatirons mx-auto max-w-3xl">
            <RichText data={post.content} />
          </div>

          <div className="mx-auto mt-16 max-w-3xl rounded-3xl border border-ink-100 bg-ink-50/60 p-8 text-center lg:p-10">
            <h2 className="font-display text-xl font-semibold text-ink-900">
              See the closed loop in action
            </h2>
            <p className="mx-auto mt-3 max-w-xl leading-relaxed text-ink-600">
              Bring a real compliance question to a live demo and watch it answered from
              regulation and policy — with citations.
            </p>
            <Link
              href="/demo"
              className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-glow-500 px-7 py-3 font-medium text-ink-950 transition-colors hover:bg-glow-400"
            >
              Book a demo
            </Link>
          </div>
        </Container>
      </section>
    </article>
  )
}
