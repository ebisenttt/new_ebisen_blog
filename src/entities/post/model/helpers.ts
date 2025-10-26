const EXTERNAL_PREFIX = 'note__'

export function encodeExternalFilename(url: string): string {
  const b64 = Buffer.from(url, 'utf-8').toString('base64')
  const b64url = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '')
  return `${EXTERNAL_PREFIX}${b64url}`
}

export function decodeExternalUrl(filename: string): string | null {
  if (!filename.startsWith(EXTERNAL_PREFIX)) return null
  const b64url = filename.slice(EXTERNAL_PREFIX.length)
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
  EXTERNAL_PREFIX,
  encodeExternalFilename,
  decodeExternalUrl,
}
