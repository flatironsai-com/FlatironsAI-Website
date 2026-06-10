/**
 * Seed script — populates the CMS with a first admin user and starter content
 * so the site renders fully on a fresh checkout.
 *
 * Run with: npm run seed
 *
 * Idempotent: skips anything that already exists. Sample posts, events, and
 * testimonials are placeholders — replace them in the admin panel at /admin.
 */
import { getPayload } from 'payload'

import config from '../payload.config'
import { h2, p, quote, richText, ul } from './lexical'

const ADMIN_EMAIL = 'admin@flatironsai.com'
const ADMIN_PASSWORD = 'FlatironsDemo!2026'

async function seed() {
  const payload = await getPayload({ config })

  // --- Admin user -----------------------------------------------------------
  const existingUsers = await payload.find({ collection: 'users', limit: 1 })
  if (existingUsers.totalDocs === 0) {
    await payload.create({
      collection: 'users',
      data: { email: ADMIN_EMAIL, password: ADMIN_PASSWORD },
    })
    payload.logger.info(`Created admin user ${ADMIN_EMAIL} (change this password immediately)`)
  } else {
    payload.logger.info('Users already exist — skipping admin user')
  }

  // --- Site settings ---------------------------------------------------------
  await payload.updateGlobal({
    slug: 'site-settings',
    data: {
      phone: '+1 (303) 785-5030',
      hours: 'Monday–Friday, 8:00 a.m.–6:00 p.m. MT',
      announcement: {
        enabled: true,
        text: 'Join our weekly live demo webinar — see closed-loop AI in action.',
        linkLabel: 'Save your seat',
        linkHref: '/events',
      },
    },
  })
  payload.logger.info('Site settings updated')

  // --- Insights posts --------------------------------------------------------
  const existingPosts = await payload.find({ collection: 'posts', limit: 1 })
  if (existingPosts.totalDocs === 0) {
    await payload.create({
      collection: 'posts',
      data: {
        title: 'Why Closed-Loop AI Is the Only Viable Path to Bank-Grade Generative AI',
        slug: 'why-closed-loop-ai',
        category: 'ai-in-banking',
        publishedAt: '2026-05-12T00:00:00.000Z',
        author: 'Flatirons AI Team',
        excerpt:
          'Open AI tools were built for the open internet. Banks operate under examination. Here is why a closed-loop architecture — where your institution stays in the loop — is the only approach regulators and risk committees can live with.',
        _status: 'published',
        content: richText(
          p(
            'Every bank we talk to is asking the same question: how do we get the productivity gains of generative AI without handing our data, our policies, and our regulatory posture to a black box?',
          ),
          h2('The problem with open-loop AI'),
          p(
            'General-purpose AI assistants are trained on the open internet and optimized for plausibility, not auditability. For a regulated institution, that creates three unacceptable risks: answers that cannot be traced to a source, institutional data leaving your control, and model behavior that changes without notice between releases.',
          ),
          ul([
            'No traceability — examiners ask where an answer came from, and "the model said so" is not a defensible response.',
            'No data boundary — prompts and documents can leave the institution and become someone else\'s training data.',
            'No change management — the model you validated last quarter is not the model answering questions today.',
          ]),
          h2('What "closed-loop" actually means'),
          p(
            'A closed-loop system treats your institution\'s operational knowledge — policies, procedures, products, and the regulations that govern them — as the DNA of the system itself. Questions are answered from that governed body of knowledge, answers cite their sources, and nothing leaves the loop.',
          ),
          quote(
            'The institution stays in the loop: your documents in, your answers out, with a citation trail an examiner can follow.',
          ),
          h2('Why this matters now'),
          p(
            'Regulatory expectations for AI governance are arriving faster than most institutions can write policy. Banks that adopt a closed-loop architecture today get the productivity benefits immediately — and walk into their next exam with an AI program they can actually explain.',
          ),
        ),
      },
    })

    await payload.create({
      collection: 'posts',
      data: {
        title: 'From Three Weeks to Three Days: AI Agents and Exam Season',
        slug: 'ai-agents-exam-season',
        category: 'regulatory',
        publishedAt: '2026-04-21T00:00:00.000Z',
        author: 'Flatirons AI Team',
        excerpt:
          'Exam questionnaires and audit requests consume weeks of compliance team capacity every cycle. AI agents grounded in your own policies can draft defensible responses in hours — with citations your examiners can verify.',
        _status: 'published',
        content: richText(
          p(
            'Ask any compliance officer what they dread most and the answer is rarely the regulation itself — it is the documentation cycle around it. First-day letters, exam questionnaires, audit requests, and follow-ups consume weeks of capacity from the people who can least afford it.',
          ),
          h2('Where the time actually goes'),
          p(
            'Responding to an exam request is mostly retrieval and assembly: find the relevant policy, confirm it reflects current regulation, locate the procedures that implement it, and draft a response that ties them together. Each step is manual, and each handoff loses context.',
          ),
          h2('What an AI agent changes'),
          p(
            'An agent that has governed access to your policy library, your procedures, and the regulatory corpus can do the retrieval and first-draft assembly in seconds. Your team\'s job shifts from hunting documents to reviewing and approving answers — which is exactly where their judgment belongs.',
          ),
          ul([
            'Exam questionnaires answered from your own policies, with source citations on every response.',
            'Gap analysis surfaced before the examiner finds it, not after.',
            'A consistent voice across every response, no matter who on the team owns it.',
          ]),
          p(
            'Institutions in our testing program report compressing multi-week response cycles into days. The constraint stops being document retrieval and becomes what it should have been all along: thoughtful review.',
          ),
        ),
      },
    })

    await payload.create({
      collection: 'posts',
      data: {
        title: 'Institution in the Loop™: A Different Architecture for Bank AI',
        slug: 'institution-in-the-loop',
        category: 'product',
        publishedAt: '2026-03-30T00:00:00.000Z',
        author: 'Flatirons AI Team',
        excerpt:
          'Most AI vendors bolt a chat window onto a general-purpose model. We built the platform the other way around — starting from the institution\'s knowledge and working outward. Here is how the architecture works.',
        _status: 'published',
        content: richText(
          p(
            'When we started Flatirons AI in Boulder in early 2024, we made one architectural decision that shaped everything since: the institution — not the model — sits at the center of the system.',
          ),
          h2('Your knowledge as the foundation'),
          p(
            'Institution in the Loop™ means your bank\'s operational knowledge is the DNA of the system. Policies, procedures, product documentation, and your specific regulatory obligations — federal, state, and industry — form the governed corpus that every answer is grounded in.',
          ),
          h2('The loop, step by step'),
          ul([
            'Ingest: your policies and documents are brought into a governed, access-controlled corpus alongside the regulatory database.',
            'Ground: every question is answered against that corpus — not against the open internet.',
            'Cite: every answer carries a citation trail back to the source documents.',
            'Review: your experts approve, correct, and refine — and those refinements stay in the loop.',
          ]),
          h2('What stays inside'),
          p(
            'Your data is never used to train shared models, never leaves the governed boundary, and every interaction is logged for audit. That is what makes the difference between an AI experiment and an AI program your board can stand behind.',
          ),
        ),
      },
    })
    payload.logger.info('Created 3 starter Insights posts')
  } else {
    payload.logger.info('Posts already exist — skipping')
  }

  // --- Events ----------------------------------------------------------------
  const existingEvents = await payload.find({ collection: 'events', limit: 1 })
  if (existingEvents.totalDocs === 0) {
    await payload.create({
      collection: 'events',
      data: {
        title: 'Live Platform Walkthrough: Closed-Loop AI for Compliance Teams',
        slug: 'live-platform-walkthrough-june',
        eventType: 'webinar',
        startsAt: '2026-06-25T17:00:00.000Z',
        durationMinutes: 45,
        location: 'Virtual',
        description:
          'A live, working-session tour of the Flatirons AI platform. Watch an AI agent answer a real exam questionnaire from institutional policies, see the citation trail, and bring your own compliance questions for the open Q&A.',
        registrationUrl: '/demo',
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'events',
      data: {
        title: 'GenAI Best Practices for Community Banks',
        slug: 'genai-best-practices-community-banks',
        eventType: 'training',
        startsAt: '2026-07-09T17:00:00.000Z',
        durationMinutes: 60,
        location: 'Virtual',
        description:
          'A practical training session for community bank teams adopting generative AI: governance frameworks examiners expect, prompt patterns for regulatory research, and how testing program members are using the platform day to day.',
        registrationUrl: '/demo',
        _status: 'published',
      },
    })

    await payload.create({
      collection: 'events',
      data: {
        title: 'Weekly Testing Program Office Hours',
        slug: 'testing-program-office-hours',
        eventType: 'webinar',
        startsAt: '2026-06-18T16:00:00.000Z',
        durationMinutes: 30,
        location: 'Virtual',
        description:
          'Open office hours for testing program members: platform tips, new feature previews, and GenAI best practices. Not yet a member? Apply through the testing program page and join the next session.',
        registrationUrl: '/test-program',
        _status: 'published',
      },
    })
    payload.logger.info('Created 3 starter events')
  } else {
    payload.logger.info('Events already exist — skipping')
  }

  // --- Testimonials (sample placeholders — replace with real quotes) ---------
  const existingTestimonials = await payload.find({ collection: 'testimonials', limit: 1 })
  if (existingTestimonials.totalDocs === 0) {
    await payload.create({
      collection: 'testimonials',
      data: {
        quote:
          'We answered our entire exam questionnaire from our own policies in two days. That process used to take the better part of three weeks.',
        authorName: 'Testing Program Member',
        authorRole: 'SVP, Compliance',
        institution: 'Community bank, Mountain West',
        featured: true,
      },
    })
    await payload.create({
      collection: 'testimonials',
      data: {
        quote:
          'It is the first AI tool our risk committee actually approved — because every answer shows exactly where it came from.',
        authorName: 'Testing Program Member',
        authorRole: 'Chief Risk Officer',
        institution: 'State-chartered bank, Midwest',
        featured: true,
      },
    })
    await payload.create({
      collection: 'testimonials',
      data: {
        quote:
          'Policy updates that used to sit in a queue for a quarter now go out the same week the regulation changes.',
        authorName: 'Testing Program Member',
        authorRole: 'BSA Officer',
        institution: 'Community bank, Southeast',
        featured: true,
      },
    })
    payload.logger.info('Created 3 sample testimonials (replace via /admin)')
  } else {
    payload.logger.info('Testimonials already exist — skipping')
  }

  payload.logger.info('Seed complete')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
