import type { CollectionConfig } from 'payload'

import { authenticated, authenticatedOrPublished } from '../access'
import { slugField } from '../fields/slug'

export const Events: CollectionConfig = {
  slug: 'events',
  labels: {
    singular: 'Event',
    plural: 'Events',
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'eventType', 'startsAt', '_status'],
    description: 'Webinars, conferences, and training sessions shown on the Events page.',
    group: 'Content',
  },
  access: {
    read: authenticatedOrPublished,
    create: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  versions: {
    drafts: true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    slugField(),
    {
      name: 'eventType',
      type: 'select',
      required: true,
      defaultValue: 'webinar',
      options: [
        { label: 'Webinar', value: 'webinar' },
        { label: 'Conference', value: 'conference' },
        { label: 'Training Session', value: 'training' },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'startsAt',
      type: 'date',
      required: true,
      admin: {
        position: 'sidebar',
        date: {
          pickerAppearance: 'dayAndTime',
          displayFormat: 'MMM d, yyyy h:mm a',
        },
      },
    },
    {
      name: 'durationMinutes',
      type: 'number',
      defaultValue: 60,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'location',
      type: 'text',
      defaultValue: 'Virtual',
      admin: {
        description: 'City and venue, or "Virtual" for online events.',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'registrationUrl',
      type: 'text',
      admin: {
        description: 'Link attendees use to register. Leave blank to point to the contact page.',
      },
    },
  ],
}
