import type { Field, FieldHook } from 'payload'

export const formatSlug = (val: string): string =>
  val
    .trim()
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

const formatSlugHook =
  (fallbackField: string): FieldHook =>
  ({ data, operation, value }) => {
    if (typeof value === 'string' && value.length > 0) {
      return formatSlug(value)
    }

    if (operation === 'create' || !data?.slug) {
      const fallback = data?.[fallbackField]
      if (fallback && typeof fallback === 'string') {
        return formatSlug(fallback)
      }
    }

    return value
  }

export const slugField = (fallbackField = 'title'): Field => ({
  name: 'slug',
  type: 'text',
  index: true,
  unique: true,
  admin: {
    position: 'sidebar',
    description: 'URL-friendly identifier. Leave blank to generate from the title.',
  },
  hooks: {
    beforeValidate: [formatSlugHook(fallbackField)],
  },
})
