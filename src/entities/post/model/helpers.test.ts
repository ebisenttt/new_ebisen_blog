import { decodeExternalUrl, encodeExternalFilename } from './helpers'

describe('post external helpers', () => {
  it('round-trips URL via encode/decode', () => {
    const url = 'https://note.com/ebisen_ttt/n/note'
    const filename = encodeExternalFilename(url)
    expect(filename.startsWith('note__')).toBe(true)
    expect(decodeExternalUrl(filename)).toBe(url)
  })

  it('returns null when filename is not external', () => {
    expect(decodeExternalUrl('local-post')).toBeNull()
  })

  it('handles invalid base64 input gracefully', () => {
    expect(decodeExternalUrl('note__@@@@')).toBeNull()
  })
})
