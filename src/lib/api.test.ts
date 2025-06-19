import fs from 'fs'

import { convertMarkdownToPost, getPostByFilename, getAllPosts } from './api'

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

describe('getPostByFilename', () => {
  const mockReadFile = jest.fn()
  const baseMarkdown = `---\ntitle: 'タイトル'\ndate: '2024-06-20'\ntag:\n  - 'tag1'\n  - 'tag2'\n---\n本文`

  it('should return a post object when file exists and is valid', () => {
    mockReadFile.mockReturnValueOnce(baseMarkdown)
    const post = getPostByFilename('test.md', {
      readFileFn: mockReadFile,
      postsDirectory: '',
    })
    expect(post).toEqual({
      title: 'タイトル',
      date: '2024-06-20',
      content: '本文',
      filename: 'test',
      tags: ['tag1', 'tag2'],
    })
  })

  it('should return null if file does not exist', () => {
    mockReadFile.mockReturnValueOnce(null)
    const post = getPostByFilename('notfound.md', {
      readFileFn: mockReadFile,
      postsDirectory: '',
    })
    expect(post).toBeNull()
  })

  it('should throw if required fields are missing', () => {
    mockReadFile.mockReturnValueOnce(`---\ntitle:\ndate:\n---\n本文`)
    expect(() =>
      getPostByFilename('missing.md', {
        readFileFn: mockReadFile,
        postsDirectory: '',
      }),
    ).toThrow(
      'Postの必須項目がありません: missing title: null, date: null, content: 本文',
    )
  })

  it('should throw if tag is not an array', () => {
    mockReadFile.mockReturnValueOnce(
      `---\ntitle: 'タイトル'\ndate: '2024-06-20'\ntag: 'tag'\n---\n本文`,
    )
    expect(() =>
      getPostByFilename('not-array.md', {
        readFileFn: mockReadFile,
        postsDirectory: '',
      }),
    ).toThrow('Postのタグは配列でなければなりません: not-array')
  })

  it('should set tags to [] if tag is undefined', () => {
    mockReadFile.mockReturnValueOnce(
      `---\ntitle: 'タイトル'\ndate: '2024-06-20'\n---\n本文`,
    )
    const post = getPostByFilename('no-tag.md', {
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

  it('should return sorted posts array (desc by date)', () => {
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
    const posts = getAllPosts({ readFileFn: mockReadFile, postsDirectory: '' })
    expect(posts.map((p) => p.title)).toEqual(['B', 'C', 'A'])
  })

  it('should skip files that return null', () => {
    const files = ['a.md', 'b.md']
    mockReadFile.mockImplementation((path) =>
      path.endsWith('a.md') ? null : validMarkdown('B', '2024-06-22'),
    )
    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>)
    const posts = getAllPosts({ readFileFn: mockReadFile, postsDirectory: '' })
    expect(posts.length).toBe(1)
    expect(posts[0].title).toBe('B')
  })

  it('should return empty array if no files', () => {
    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue([] as unknown as ReturnType<typeof fs.readdirSync>)
    const posts = getAllPosts({ readFileFn: mockReadFile, postsDirectory: '' })
    expect(posts).toEqual([])
  })
})
