export type Solution = {
  slug: string
  label: string
  headline: string
  subheadline: string
  challenges: { title: string; description: string }[]
  approach: { title: string; description: string }[]
  proofPoint: string
}

export const solutions: Solution[] = [
  {
    slug: 'national-banks',
    label: 'National Banks',
    headline: 'Stay ahead of OCC guidance — at the scale you operate',
    subheadline:
      'Flatirons AI aggregates OCC regulatory guidance and fuses it with your institution’s policies, so every line of business answers from the same governed source of truth.',
    challenges: [
      {
        title: 'Guidance moves faster than policy cycles',
        description:
          'Bulletins, handbook revisions, and interpretive letters arrive continuously — and each one has to be mapped against hundreds of internal policies.',
      },
      {
        title: 'Knowledge is siloed across lines of business',
        description:
          'Retail, commercial, wealth, and operations each hold pieces of the compliance picture. Consistent answers across them are hard-won and slow.',
      },
      {
        title: 'Exam preparation consumes entire quarters',
        description:
          'First-day letters and continuous examination requests pull your strongest people into document assembly for weeks at a time.',
      },
    ],
    approach: [
      {
        title: 'Aggregated OCC guidance, always current',
        description:
          'The platform maintains a governed corpus of OCC regulatory guidance and federal requirements, continuously updated and queryable in plain language.',
      },
      {
        title: 'One source of truth across the enterprise',
        description:
          'Your policies and procedures join the corpus, so an agent answering retail’s question and one answering commercial’s cite the same institutional positions.',
      },
      {
        title: 'Exam responses in days, not weeks',
        description:
          'Agents draft questionnaire responses from your own policies with full citation trails — your team reviews and approves rather than hunts and assembles.',
      },
    ],
    proofPoint:
      'Simplify compliance and stay ahead of regulatory change — with the visibility and control a national charter demands.',
  },
  {
    slug: 'state-banks',
    label: 'State Banks',
    headline: 'State and federal requirements, finally in one place',
    subheadline:
      'Flatirons AI integrates your state-specific regulations with federal requirements, giving state-chartered institutions precise, unified compliance insight.',
    challenges: [
      {
        title: 'Two regulatory regimes, one small team',
        description:
          'State-chartered banks answer to state regulators and federal agencies simultaneously — with a fraction of the compliance headcount of the money centers.',
      },
      {
        title: 'State nuance is easy to miss',
        description:
          'State requirements diverge from federal baselines in subtle ways. Generic tools trained on national content miss exactly the distinctions that matter to you.',
      },
      {
        title: 'Every hour of capacity counts',
        description:
          'When the same officer owns BSA, CRA, and exam response, weeks lost to manual research are weeks the institution cannot spare.',
      },
    ],
    approach: [
      {
        title: 'State-specific regulation, integrated',
        description:
          'Your state’s requirements live alongside federal regulation in the governed corpus — agents answer with both in view and cite which regime each point comes from.',
      },
      {
        title: 'Precision for your charter',
        description:
          'Institution in the Loop™ means answers reflect your charter, your products, and your state — not a generic national average.',
      },
      {
        title: 'Leverage for lean teams',
        description:
          'Research, policy drafting, and exam response that used to take days happen in minutes — multiplying the team you already have.',
      },
    ],
    proofPoint:
      'Precise compliance insights that integrate state-specific regulations with federal requirements — built for the realities of a state charter.',
  },
  {
    slug: 'fintechs',
    label: 'Fintechs',
    headline: 'Move at fintech speed. Answer at bank grade.',
    subheadline:
      'Flatirons AI keeps your compliance posture as current as your product — streamlining compliance tasks with technology that is up-to-date and precise.',
    challenges: [
      {
        title: 'Compliance expectations arrived before the headcount',
        description:
          'Partner banks, processors, and regulators expect bank-grade compliance answers from teams that are still building the function.',
      },
      {
        title: 'Partner-bank diligence never stops',
        description:
          'Every sponsor bank relationship brings questionnaires, audits, and policy reviews — each one a fire drill for a lean team.',
      },
      {
        title: 'The rules keep shifting under you',
        description:
          'Guidance on BaaS, money transmission, and consumer protection is evolving quarterly. Yesterday’s memo is today’s liability.',
      },
    ],
    approach: [
      {
        title: 'Compliance answers in product-sprint time',
        description:
          'Ask how a regulation applies to a feature before you build it. Cited answers in seconds keep compliance inside the development loop, not behind it.',
      },
      {
        title: 'Diligence requests, handled',
        description:
          'Agents draft responses to partner-bank questionnaires from your actual policies — consistent, cited, and fast enough to keep deals moving.',
      },
      {
        title: 'A regulatory radar that stays current',
        description:
          'The governed corpus tracks the regulations that touch your products, so your team works from what the rule says now — not what it said last funding round.',
      },
    ],
    proofPoint:
      'Streamline compliance tasks with technology that is up-to-date and precise — and show partners a compliance program that scales with you.',
  },
  {
    slug: 'payment-processors',
    label: 'Payment Processors',
    headline: 'Real-time insight across the widest regulation surface in finance',
    subheadline:
      'Flatirons AI helps payment processors adhere to a wide range of regulations with real-time, cited insight — across networks, states, and federal regimes at once.',
    challenges: [
      {
        title: 'Regulation from every direction',
        description:
          'Card network rules, state money-transmitter licensing, federal consumer protection, BSA/AML — processors sit at the intersection of all of them.',
      },
      {
        title: 'Merchant risk is compliance risk',
        description:
          'Underwriting and monitoring decisions carry regulatory consequences, and the rules they depend on change without warning.',
      },
      {
        title: 'Volume leaves no room for slow answers',
        description:
          'At processing scale, a compliance question that takes a week to answer is a queue of decisions on hold.',
      },
    ],
    approach: [
      {
        title: 'One corpus across every regime',
        description:
          'Network rules, state licensing requirements, and federal regulation live in a single governed corpus — agents answer across all of them with citations.',
      },
      {
        title: 'Real-time insight for operational decisions',
        description:
          'Underwriting, monitoring, and dispute teams get cited answers in seconds, grounded in your risk policies and current regulation.',
      },
      {
        title: 'An audit trail that matches your scale',
        description:
          'Every question and answer is logged and traceable — so growth in volume never outruns your ability to demonstrate compliance.',
      },
    ],
    proofPoint:
      'Adhere to a wide range of regulations with real-time insights — and an audit trail built for processing scale.',
  },
]

export const getSolution = (slug: string): Solution | undefined =>
  solutions.find((s) => s.slug === slug)
