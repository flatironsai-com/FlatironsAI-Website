import type { CollectionConfig } from 'payload'

import { anyone, authenticated } from '../access'

export const Inquiries: CollectionConfig = {
  slug: 'inquiries',
  labels: {
    singular: 'Inquiry',
    plural: 'Inquiries',
  },
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['name', 'email', 'institution', 'topic', 'createdAt'],
    description: 'Submissions from the demo, contact, and test program forms.',
    group: 'Leads',
  },
  access: {
    // Created through server actions on the public forms; only admins can read.
    create: anyone,
    read: authenticated,
    update: authenticated,
    delete: authenticated,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'institution',
      type: 'text',
    },
    {
      name: 'role',
      type: 'text',
    },
    {
      name: 'topic',
      type: 'select',
      required: true,
      defaultValue: 'general',
      options: [
        { label: 'Book a Demo', value: 'demo' },
        { label: 'Enterprise Solutions', value: 'enterprise' },
        { label: 'Test Program', value: 'test-program' },
        { label: 'Partnership', value: 'partnership' },
        { label: 'Investment', value: 'investment' },
        { label: 'Employment', value: 'employment' },
        { label: 'General', value: 'general' },
      ],
    },
    {
      name: 'message',
      type: 'textarea',
    },
    {
      name: 'sourcePage',
      type: 'text',
      admin: {
        description: 'Which page the form was submitted from.',
        readOnly: true,
      },
    },
  ],
}
