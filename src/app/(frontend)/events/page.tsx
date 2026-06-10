import type { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

import type { Event } from '@/payload-types'

import { Icon } from '@/components/icons'
import { CtaSection } from '@/components/sections/CtaSection'
import { PageHero } from '@/components/sections/PageHero'
import { Container } from '@/components/ui/Container'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { formatEventDateTime } from '@/lib/format'
import { eventTypeLabels } from '@/lib/labels'
import { getPayloadClient } from '@/lib/payload'

export const metadata: Metadata = {
  title: 'Events & Webinars',
  description:
    'Join a Flatirons AI webinar or training session: live platform walkthroughs, GenAI best practices for banks, and testing program office hours.',
}

export const revalidate = 60

function partitionEvents(events: Event[]) {
  const now = Date.now()
  const upcoming = events.filter((e) => new Date(e.startsAt).getTime() >= now)
  const past = events
    .filter((e) => new Date(e.startsAt).getTime() < now)
    .sort((a, b) => new Date(b.startsAt).getTime() - new Date(a.startsAt).getTime())
    .slice(0, 6)
  return { upcoming, past }
}

function EventCard({ event, past = false }: { event: Event; past?: boolean }) {
  const isVirtual = (event.location ?? 'Virtual').toLowerCase() === 'virtual'

  return (
    <div
      className={`flex h-full flex-col rounded-3xl border p-7 transition-all duration-300 ${
        past
          ? 'border-ink-100 bg-ink-50/40 opacity-75'
          : 'border-ink-100 bg-white hover:-translate-y-1 hover:border-accent-200 hover:shadow-xl hover:shadow-ink-900/5'
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700">
          {eventTypeLabels[event.eventType] ?? event.eventType}
        </span>
        {past && (
          <span className="rounded-full bg-ink-100 px-3 py-1 text-xs font-semibold text-ink-500">
            Past event
          </span>
        )}
      </div>
      <h3 className="mt-4 font-display text-xl leading-snug font-semibold tracking-tight text-balance text-ink-900">
        {event.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-600">{event.description}</p>
      <div className="mt-5 space-y-2 border-t border-ink-100 pt-5 text-sm text-ink-600">
        <p className="flex items-center gap-2.5">
          <Icon name="calendar" className="h-4 w-4 shrink-0 text-glow-600" />
          {formatEventDateTime(event.startsAt)}
          {event.durationMinutes ? ` · ${event.durationMinutes} min` : ''}
        </p>
        <p className="flex items-center gap-2.5">
          <Icon name={isVirtual ? 'video' : 'pin'} className="h-4 w-4 shrink-0 text-glow-600" />
          {event.location ?? 'Virtual'}
        </p>
      </div>
      {!past && (
        <Link
          href={event.registrationUrl || '/contact'}
          className="mt-6 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-ink-700"
        >
          Register
        </Link>
      )}
    </div>
  )
}

export default async function EventsPage() {
  const payload = await getPayloadClient()
  const { docs: events } = await payload.find({
    collection: 'events',
    sort: 'startsAt',
    limit: 50,
  })

  const { upcoming, past } = partitionEvents(events)

  return (
    <>
      <PageHero
        eyebrow="Events & webinars"
        title="See closed-loop AI in action, live"
        lede="Weekly platform walkthroughs, training sessions on GenAI best practices for banks, and office hours with our team. Bring your questions."
      />

      <div className="hairline-glow" />

      <section className="bg-white py-16 lg:py-24">
        <Container>
          <SectionHeading eyebrow="Upcoming" title="Save your seat" />
          {upcoming.length === 0 ? (
            <Reveal className="mt-10">
              <div className="rounded-3xl border border-ink-100 bg-ink-50/50 p-10 text-center">
                <p className="text-lg text-ink-600">
                  New sessions are being scheduled. In the meantime,{' '}
                  <Link href="/demo" className="font-medium text-accent-600 hover:text-accent-700">
                    book a private demo
                  </Link>{' '}
                  for your team.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {upcoming.map((event, i) => (
                <Reveal key={event.id} delay={(i % 3) * 80}>
                  <EventCard event={event} />
                </Reveal>
              ))}
            </div>
          )}

          {past.length > 0 && (
            <>
              <SectionHeading eyebrow="Recently held" title="Catch up on past sessions" className="mt-20" />
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {past.map((event, i) => (
                  <Reveal key={event.id} delay={(i % 3) * 80}>
                    <EventCard event={event} past />
                  </Reveal>
                ))}
              </div>
            </>
          )}
        </Container>
      </section>

      <CtaSection
        title="Can’t make a session?"
        lede="We’ll run a private walkthrough for your team — at whatever depth your stakeholders need, whenever it suits your calendar."
      />
    </>
  )
}
