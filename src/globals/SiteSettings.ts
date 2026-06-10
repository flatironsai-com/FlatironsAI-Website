import type { GlobalConfig } from 'payload'

import { anyone, authenticated } from '../access'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Site Settings',
  admin: {
    description: 'Contact details and the announcement bar shown across the site.',
  },
  access: {
    read: anyone,
    update: authenticated,
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      defaultValue: '+1 (303) 785-5030',
    },
    {
      name: 'contactEmail',
      type: 'email',
    },
    {
      name: 'hours',
      type: 'text',
      defaultValue: 'Monday–Friday, 8:00 a.m.–6:00 p.m. MT',
    },
    {
      name: 'linkedinUrl',
      type: 'text',
    },
    {
      name: 'announcement',
      type: 'group',
      fields: [
        {
          name: 'enabled',
          type: 'checkbox',
          defaultValue: false,
        },
        {
          name: 'text',
          type: 'text',
          admin: {
            description: 'Short message shown in a bar above the header.',
          },
        },
        {
          name: 'linkLabel',
          type: 'text',
        },
        {
          name: 'linkHref',
          type: 'text',
        },
      ],
    },
  ],
}
