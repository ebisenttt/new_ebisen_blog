const NOTE_PREFIX = 'note__'
const QIITA_PREFIX = 'qiita__'

const DOMAIN_PREFIXES = [
  { domain: 'note.com', prefix: NOTE_PREFIX },
  { domain: 'qiita.com', prefix: QIITA_PREFIX },
]

export function encodeExternalFilename(url: string): string {
  const match = DOMAIN_PREFIXES.find((item) => url.includes(item.domain))
  const prefix = match ? match.prefix : NOTE_PREFIX

  const b64 = Buffer.from(url, 'utf-8').toString('base64')
  const b64url = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  return `${prefix}${b64url}`
}

export function decodeExternalUrl(filename: string): string | null {
  const match = DOMAIN_PREFIXES.find((item) => filename.startsWith(item.prefix))

  if (!match && !filename.startsWith(NOTE_PREFIX)) return null

  const prefix = match ? match.prefix : NOTE_PREFIX

  const b64url = filename.slice(prefix.length)
  const pad = b64url.length % 4 === 0 ? '' : '='.repeat(4 - (b64url.length % 4))
  const b64 = b64url.replace(/-/g, '+').replace(/_/g, '/') + pad
  try {
    const decoded = Buffer.from(b64, 'base64').toString('utf-8')
    return decoded === '' ? null : decoded
  } catch {
    return null
  }
}

export const postExternalHelpers = {
  NOTE_PREFIX,
  QIITA_PREFIX,
  encodeExternalFilename,
  decodeExternalUrl,
}
