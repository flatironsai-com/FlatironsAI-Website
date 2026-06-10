import type { MetadataRoute } from 'next'

import { siteConfig } from '@/content/site'
import { solutions } from '@/content/solutions'
import { getPayloadClient } from '@/lib/payload'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = siteConfig.url

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, changeFrequency: 'weekly', priority: 1 },
    { url: `${base}/platform`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/solutions`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/security`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/company`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/demo`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/test-program`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/insights`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/events`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${base}/privacy-policy`, changeFrequency: 'yearly', priority: 0.2 },
    ...solutions.map((s) => ({
      url: `${base}/solutions/${s.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]

  try {
    const payload = await getPayloadClient()
    const { docs: posts } = await payload.find({
      collection: 'posts',
      limit: 200,
      select: { slug: true, updatedAt: true },
    })
    const postRoutes: MetadataRoute.Sitemap = posts
      .filter((p) => p.slug)
      .map((p) => ({
        url: `${base}/insights/${p.slug}`,
        lastModified: p.updatedAt,
        changeFrequency: 'monthly',
        priority: 0.6,
      }))
    return [...staticRoutes, ...postRoutes]
  } catch {
    return staticRoutes
  }
}
