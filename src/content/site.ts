/**
 * Structured site copy. Marketing pages read from this file so wording can be
 * tuned in one place. CMS-managed content (Insights, Events, Testimonials,
 * Site Settings) lives in Payload — see /admin.
 */

export const siteConfig = {
  name: 'Flatirons AI',
  tagline: 'Closed-loop AI, built with and trusted by banks',
  description:
    'Flatirons AI is the closed-loop generative AI platform for banking. Institution in the Loop™ architecture grounds every answer in your policies and the regulations that govern you — with citations examiners can follow.',
  url: 'https://flatironsai.com',
  phone: '+1 (303) 785-5030',
  hours: 'Monday–Friday, 8:00 a.m.–6:00 p.m. MT',
  location: 'Boulder, Colorado',
}

export const navigation = {
  main: [
    { label: 'Platform', href: '/platform' },
    {
      label: 'Solutions',
      href: '/solutions',
      children: [
        { label: 'National Banks', href: '/solutions/national-banks' },
        { label: 'State Banks', href: '/solutions/state-banks' },
        { label: 'Fintechs', href: '/solutions/fintechs' },
        { label: 'Payment Processors', href: '/solutions/payment-processors' },
      ],
    },
    { label: 'Security', href: '/security' },
    { label: 'Insights', href: '/insights' },
    { label: 'Events', href: '/events' },
    { label: 'Company', href: '/company' },
  ],
  footer: {
    platform: [
      { label: 'Platform Overview', href: '/platform' },
      { label: 'Security & Trust', href: '/security' },
      { label: 'Book a Demo', href: '/demo' },
      { label: 'Testing Program', href: '/test-program' },
    ],
    solutions: [
      { label: 'National Banks', href: '/solutions/national-banks' },
      { label: 'State Banks', href: '/solutions/state-banks' },
      { label: 'Fintechs', href: '/solutions/fintechs' },
      { label: 'Payment Processors', href: '/solutions/payment-processors' },
    ],
    company: [
      { label: 'About', href: '/company' },
      { label: 'Insights', href: '/insights' },
      { label: 'Events & Webinars', href: '/events' },
      { label: 'Contact', href: '/contact' },
    ],
  },
}

export const partners = [
  'Microsoft',
  'OpenAI',
  'Google',
  'Anthropic',
  'ABA',
  'ICBA',
  'MBA',
  'KBA',
]

export type Capability = {
  title: string
  description: string
  icon:
    | 'search'
    | 'database'
    | 'agent'
    | 'policy'
    | 'audit'
    | 'shield-report'
    | 'training'
    | 'oversight'
}

export const capabilities: Capability[] = [
  {
    title: 'Regulatory Research',
    description:
      'Ask anything across federal, state, and industry regulations. Get precise, current answers with the source text one click away.',
    icon: 'search',
  },
  {
    title: 'Unified Institutional Knowledge',
    description:
      'Policies, procedures, and product documentation — siloed across teams today — become one governed, searchable corpus.',
    icon: 'database',
  },
  {
    title: 'Agent-Powered Q&A',
    description:
      'Launch AI agents that return clear, concise insight into complex issues in seconds — every answer cited to its source.',
    icon: 'agent',
  },
  {
    title: 'Policy Creation & Updates',
    description:
      'Draft new policies and keep existing ones aligned as regulations change — in your institution’s voice, from your templates.',
    icon: 'policy',
  },
  {
    title: 'Audit & Exam Automation',
    description:
      'Respond to audits and exam questionnaires using agents grounded in your own policies. Weeks of assembly become days of review.',
    icon: 'audit',
  },
  {
    title: 'BSA & AML Reporting',
    description:
      'Investigation summaries and SAR narratives drafted consistently, ready for your analysts to review and file.',
    icon: 'shield-report',
  },
  {
    title: 'Compliance Training',
    description:
      'Generate custom training programs grounded in your actual policies — not generic courseware your team tunes out.',
    icon: 'training',
  },
  {
    title: 'Strategic Oversight',
    description:
      'Management visibility into what is being asked, answered, and approved across the institution — with a full audit trail.',
    icon: 'oversight',
  },
]

export const loopSteps = [
  {
    step: '01',
    title: 'Ingest',
    description:
      'Your policies, procedures, and product documentation are brought into a governed, access-controlled corpus — alongside a comprehensive federal, state, and industry regulatory database.',
  },
  {
    step: '02',
    title: 'Ground',
    description:
      'Every question is answered from that corpus — your institution’s knowledge fused with the regulations that govern it. Never from the open internet.',
  },
  {
    step: '03',
    title: 'Cite',
    description:
      'Every answer carries a citation trail back to source documents — the policy paragraph, the regulation section — that an examiner can follow.',
  },
  {
    step: '04',
    title: 'Review',
    description:
      'Your experts approve, correct, and refine. Those refinements stay in the loop, so the system gets more precisely yours over time.',
  },
]

export const marketStats = [
  { value: '845', label: 'US banks navigating overlapping federal and state regimes' },
  { value: '42', label: 'financial regulations in our governed corpus' },
  { value: '$900K+', label: 'CFPB civil penalty fund — a single month (Oct 2024)' },
  { value: '8', label: 'NASDAQ-listed fintechs in our market' },
]

export const securityPillars = [
  {
    title: 'Your data stays in the loop',
    description:
      'Institutional documents and conversations remain inside a governed boundary. Nothing is sent to train shared or third-party models.',
    icon: 'boundary',
  },
  {
    title: 'Every answer is cited',
    description:
      'Answers link back to the exact policy paragraph or regulation section they came from — no black-box responses to defend in an exam.',
    icon: 'citation',
  },
  {
    title: 'Complete audit trail',
    description:
      'Every question, answer, and approval is logged. Your AI program becomes something you can demonstrate, not just describe.',
    icon: 'audit-log',
  },
  {
    title: 'Role-based access control',
    description:
      'Access to documents and agents follows your org structure. The BSA team sees BSA materials; the board sees board materials.',
    icon: 'access',
  },
  {
    title: 'Model governance built in',
    description:
      'Versioned, validated model behavior with change management — so the system you approved is the system answering questions.',
    icon: 'governance',
  },
  {
    title: 'Built for examination',
    description:
      'Designed from day one to align with regulatory expectations for AI risk management in financial institutions.',
    icon: 'exam-ready',
  },
]

export const differentiators = [
  {
    title: 'Closed-loop by architecture',
    description:
      'Not a chat window bolted onto an internet model. Your institution’s knowledge is the DNA of the system — answers come from inside the loop, never outside it.',
  },
  {
    title: 'Built with banks, not just for them',
    description:
      'Developed alongside working compliance teams through our testing program. The workflows are theirs; the platform earns its place in them.',
  },
  {
    title: 'Regulatory depth, institutional precision',
    description:
      'A comprehensive regulatory database fused with your specific charters, products, and policies. Industry rules + your data + our AI.',
  },
]
