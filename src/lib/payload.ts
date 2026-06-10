import config from '@payload-config'
import { getPayload } from 'payload'

/** Shared Payload client for server components and server actions. */
export const getPayloadClient = () => getPayload({ config })

export async function getSiteSettings() {
  const payload = await getPayloadClient()
  return payload.findGlobal({ slug: 'site-settings' })
}
