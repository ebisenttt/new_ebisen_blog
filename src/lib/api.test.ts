import fs from 'fs'

import { convertMarkdownToPost, getPostByFilename, getAllPosts } from './api'

describe('convertMarkdownToPost', () => {
  it('should convert valid markdown to post object', async () => {
    const markdown = `---\ntitle: 'テストタイトル'\ndate: '2024-06-20'\ntag:\n  - 'test'\n  - 'sample'\n---\n本文です。`
    const filename = 'test-post'
    const post = await convertMarkdownToPost({ markdown, filename })
    expect(post).toEqual({
      title: 'テストタイトル',
      date: '2024-06-20',
      content: expect.any(String), // HTML変換されるため
      filename: 'test-post',
      tags: ['test', 'sample'],
    })
    expect(post.content).toContain('本文です。')
  })

  it('should throw if required fields are missing', async () => {
    const markdown = `---\ntitle:\ndate:\n---\n本文`
    await expect(
      convertMarkdownToPost({ markdown, filename: 'missing' }),
    ).rejects.toThrow('Postの必須項目がありません: missing')
  })

  it('should throw if tag is not an array', async () => {
    const markdown = `---\ntitle: 'タイトル'\ndate: '2024-06-20'\ntag: 'test'\n---\n本文`
    await expect(
      convertMarkdownToPost({ markdown, filename: 'not-array' }),
    ).rejects.toThrow('Postのタグは配列でなければなりません: not-array')
  })

  it('should set tags to [] if tag is undefined', async () => {
    const markdown = `---\ntitle: 'タイトル'\ndate: '2024-06-20'\n---\n本文`
    const post = await convertMarkdownToPost({ markdown, filename: 'no-tag' })
    expect(post.tags).toEqual([])
  })
})

describe('getPostByFilename', () => {
  const mockReadFile = jest.fn()
  const baseMarkdown = `---\ntitle: 'タイトル'\ndate: '2024-06-20'\ntag:\n  - 'tag1'\n  - 'tag2'\n---\n本文`

  it('should return a post object when file exists and is valid', async () => {
    mockReadFile.mockReturnValueOnce(baseMarkdown)
    const post = await getPostByFilename('test.md', {
      readFileFn: mockReadFile,
      postsDirectory: '',
    })
    expect(post).toEqual({
      title: 'タイトル',
      date: '2024-06-20',
      content: expect.any(String),
      filename: 'test',
      tags: ['tag1', 'tag2'],
    })
    expect(post?.content).toContain('本文')
  })

  it('should return null if file does not exist', async () => {
    mockReadFile.mockReturnValueOnce(null)
    const post = await getPostByFilename('notfound.md', {
      readFileFn: mockReadFile,
      postsDirectory: '',
    })
    expect(post).toBeNull()
  })

  it('should throw if required fields are missing', async () => {
    mockReadFile.mockReturnValueOnce(`---\ntitle:\ndate:\n---\n本文`)
    await expect(
      getPostByFilename('missing.md', {
        readFileFn: mockReadFile,
        postsDirectory: '',
      }),
    ).rejects.toThrow(
      'Postの必須項目がありません: missing title: null, date: null, content: 本文',
    )
  })

  it('should throw if tag is not an array', async () => {
    mockReadFile.mockReturnValueOnce(
      `---\ntitle: 'タイトル'\ndate: '2024-06-20'\ntag: 'tag'\n---\n本文`,
    )
    await expect(
      getPostByFilename('not-array.md', {
        readFileFn: mockReadFile,
        postsDirectory: '',
      }),
    ).rejects.toThrow('Postのタグは配列でなければなりません: not-array')
  })

  it('should set tags to [] if tag is undefined', async () => {
    mockReadFile.mockReturnValueOnce(
      `---\ntitle: 'タイトル'\ndate: '2024-06-20'\n---\n本文`,
    )
    const post = await getPostByFilename('no-tag.md', {
      readFileFn: mockReadFile,
      postsDirectory: '',
    })
    expect(post?.tags).toEqual([])
  })
})

describe('getAllPosts', () => {
  const mockReadFile = jest.fn()
  const validMarkdown = (title: string, date: string) =>
    `---\ntitle: '${title}'\ndate: '${date}'\ntag:\n  - 'tag'\n---\ncontent`

  it('should return sorted posts array (desc by date)', async () => {
    const files = ['a.md', 'b.md', 'c.md']
    const readFileMap: Record<string, string> = {
      'a.md': validMarkdown('A', '2024-06-20'),
      'b.md': validMarkdown('B', '2024-06-22'),
      'c.md': validMarkdown('C', '2024-06-21'),
    }
    mockReadFile.mockImplementation((path) => {
      const fname = path.split('/').pop()!
      return readFileMap[fname] || null
    })
    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>)
    const posts = await getAllPosts({
      readFileFn: mockReadFile,
      postsDirectory: '',
    })
    expect(posts.map((p) => p.title)).toEqual(['B', 'C', 'A'])
  })

  it('should skip files that return null', async () => {
    const files = ['a.md', 'b.md']
    mockReadFile.mockImplementation((path) =>
      path.endsWith('a.md') ? null : validMarkdown('B', '2024-06-22'),
    )
    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>)
    const posts = await getAllPosts({
      readFileFn: mockReadFile,
      postsDirectory: '',
    })
    expect(posts.length).toBe(1)
    expect(posts[0].title).toBe('B')
  })

  it('should return empty array if no files', async () => {
    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue([] as unknown as ReturnType<typeof fs.readdirSync>)
    const posts = await getAllPosts({
      readFileFn: mockReadFile,
      postsDirectory: '',
    })
    expect(posts).toEqual([])
  })
})
