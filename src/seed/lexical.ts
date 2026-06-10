/**
 * Minimal helpers for building Lexical rich text JSON programmatically,
 * used by the seed script to create starter Insights posts.
 */

type LexicalText = {
  type: 'text'
  text: string
  format: number
  style: string
  mode: 'normal'
  detail: number
  version: 1
}

type LexicalNode = {
  type: string
  version: number
  [k: string]: unknown
}

const text = (value: string, format = 0): LexicalText => ({
  type: 'text',
  text: value,
  format,
  style: '',
  mode: 'normal',
  detail: 0,
  version: 1,
})

export const p = (value: string): LexicalNode => ({
  type: 'paragraph',
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  textFormat: 0,
  textStyle: '',
  children: [text(value)],
})

export const h2 = (value: string): LexicalNode => ({
  type: 'heading',
  tag: 'h2',
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children: [text(value)],
})

export const h3 = (value: string): LexicalNode => ({
  type: 'heading',
  tag: 'h3',
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children: [text(value)],
})

export const ul = (items: string[]): LexicalNode => ({
  type: 'list',
  listType: 'bullet',
  start: 1,
  tag: 'ul',
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children: items.map((item, i) => ({
    type: 'listitem',
    value: i + 1,
    format: '',
    indent: 0,
    version: 1,
    direction: 'ltr',
    children: [text(item)],
  })),
})

export const quote = (value: string): LexicalNode => ({
  type: 'quote',
  format: '',
  indent: 0,
  version: 1,
  direction: 'ltr',
  children: [text(value)],
})

export const richText = (...children: LexicalNode[]) => ({
  root: {
    type: 'root' as const,
    format: '' as const,
    indent: 0,
    version: 1 as const,
    direction: 'ltr' as const,
    children,
  },
})
