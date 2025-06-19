import { convertMarkdownToPost } from './api'

describe('convertMarkdownToPost', () => {
  it('should convert valid markdown to post object', () => {
    const markdown = `---\ntitle: 'テストタイトル'\ndate: '2024-06-20'\ntag:\n  - 'test'\n  - 'sample'\n---\n本文です。`
    const filename = 'test-post'
    const post = convertMarkdownToPost({ markdown, filename })
    expect(post).toEqual({
      title: 'テストタイトル',
      date: '2024-06-20',
      content: '本文です。',
      filename: 'test-post',
      tags: ['test', 'sample'],
    })
  })

  it('should throw if required fields are missing', () => {
    const markdown = `---\ntitle:\ndate:\n---\n本文`
    expect(() =>
      convertMarkdownToPost({ markdown, filename: 'missing' }),
    ).toThrow('Postの必須項目がありません: missing')
  })

  it('should throw if tag is not an array', () => {
    const markdown = `---\ntitle: 'タイトル'\ndate: '2024-06-20'\ntag: 'test'\n---\n本文`
    expect(() =>
      convertMarkdownToPost({ markdown, filename: 'not-array' }),
    ).toThrow('Postのタグは配列でなければなりません: not-array')
  })

  it('should set tags to [] if tag is undefined', () => {
    const markdown = `---\ntitle: 'タイトル'\ndate: '2024-06-20'\n---\n本文`
    const post = convertMarkdownToPost({ markdown, filename: 'no-tag' })
    expect(post.tags).toEqual([])
  })
})
