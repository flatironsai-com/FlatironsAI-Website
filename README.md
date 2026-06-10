# Flatirons AI — Website

The marketing website for [Flatirons AI](https://flatironsai.com) — closed-loop generative AI for banking — with a built-in CMS so the team can publish content without touching code.

## Stack

| Layer | Technology |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router, React 19, Turbopack) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) with a custom design system |
| CMS | [Payload 3](https://payloadcms.com), embedded in the same app at `/admin` |
| Database | SQLite (zero-config locally; swap to Postgres for scale if desired) |
| Fonts | Space Grotesk (display) + Inter (body), self-hosted via `next/font` |

One repo, one deploy: the public site and the admin panel ship together.

## Quick start

```bash
npm install
cp .env.example .env   # then set a strong PAYLOAD_SECRET
npm run seed           # creates the admin user + starter content
npm run dev            # http://localhost:3000
```

**Admin panel:** http://localhost:3000/admin
Seeded login: `admin@flatironsai.com` / `FlatironsDemo!2026` — **change this password immediately** after first login (Users → admin → edit).

## What the CMS manages

Content editors can manage these from `/admin` with no code changes:

- **Insights** — blog articles with rich text, categories, drafts/publishing workflow
- **Events** — webinars, conferences, and training sessions (upcoming/past split is automatic)
- **Testimonials** — quotes shown on the homepage (toggle `featured`)
- **Inquiries** — every submission from the demo / contact / test-program forms lands here
- **Site Settings** — phone, hours, and the announcement bar above the header
- **Media** — image uploads with automatic resizing

> ⚠️ The seeded posts, events, and testimonials are **sample placeholder content** written to demonstrate the design. Review and replace them (especially testimonials) before going live.

Everything else — page copy, capabilities, solutions, stats — lives in [src/content/site.ts](src/content/site.ts) and [src/content/solutions.ts](src/content/solutions.ts) so the marketing pages stay pixel-perfect while remaining easy to edit in one place.

## Pages

| Route | Purpose |
| --- | --- |
| `/` | Homepage: hero with animated loop diagram, capabilities, solutions, stats, testimonials, latest insights |
| `/platform` | Product deep dive with chat vignette and Institution in the Loop™ explainer |
| `/solutions` + `/solutions/[slug]` | Tailored pages for national banks, state banks, fintechs, payment processors |
| `/security` | Trust & data-boundary posture |
| `/company` | Story, vision, values |
| `/insights` + `/insights/[slug]` | CMS-driven blog |
| `/events` | CMS-driven webinars & training listing |
| `/demo`, `/contact`, `/test-program` | Lead-gen forms → stored as Inquiries in the CMS |
| `/privacy-policy` | Carried over from the previous site |

## Commands

```bash
npm run dev              # dev server
npm run build            # production build
npm run start            # serve the production build
npm run seed             # idempotent seed (safe to re-run)
npm run lint             # eslint
npm run test:int         # vitest integration tests
npm run test:e2e         # playwright e2e tests (needs a running dev server)
npm run generate:types   # regenerate payload-types.ts after changing collections
```

## Deploying

Any Node host works (Vercel, a VPS, Docker — a `Dockerfile` is included). Notes:

1. Set `DATABASE_URL` and a strong `PAYLOAD_SECRET` in the host's environment.
2. SQLite needs a persistent disk. On serverless hosts (e.g. Vercel), switch the adapter to Postgres: install `@payloadcms/db-postgres`, swap `sqliteAdapter` for `postgresAdapter` in [src/payload.config.ts](src/payload.config.ts), and point `DATABASE_URL` at the database.
3. Marketing pages are statically generated with incremental revalidation (1–10 min), so CMS edits go live within minutes without a redeploy.

## SEO

Per-page metadata and Open Graph tags, a generated OG image, `sitemap.xml` (includes CMS posts), `robots.txt` (admin/api excluded), and Organization JSON-LD are all wired in.
