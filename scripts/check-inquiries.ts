/** Dev utility: list inquiries to verify form submissions reach the CMS. */
import { getPayload } from 'payload'

import config from '../src/payload.config'

const run = async () => {
  const payload = await getPayload({ config })
  const { docs, totalDocs } = await payload.find({ collection: 'inquiries', limit: 10 })
  console.log(`Total inquiries: ${totalDocs}`)
  for (const d of docs) {
    console.log(`- ${d.name} <${d.email}> [${d.topic}] from ${d.sourcePage ?? 'unknown'}`)
  }
  process.exit(0)
}

run().catch((e) => {
  console.error(e)
  process.exit(1)
})
