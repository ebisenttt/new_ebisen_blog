import fs from 'fs'

jest.mock('./note', () => ({
  fetchNotePosts: jest.fn(),
}))

import { fetchNotePosts } from './note'
import { getAllPosts, getAllPostsMerged } from './queries'

describe('getAllPosts', () => {
  const mockReadFile = jest.fn()
  const validMarkdown = (title: string, date: string) =>
    `---\ntitle: '${title}'\ndate: '${date}'\ntag:\n  - 'tag'\n---\ncontent`

  afterEach(() => {
    mockReadFile.mockReset()
    jest.restoreAllMocks()
  })

  it('should return sorted posts array (desc by date)', async () => {
    const files = ['a.md', 'b.md', 'c.md']
    const readFileMap: Record<string, string> = {
      'a.md': validMarkdown('A', '2024-06-20'),
      'b.md': validMarkdown('B', '2024-06-22'),
      'c.md': validMarkdown('C', '2024-06-21'),
    }
    mockReadFile.mockImplementation((path: string) => {
      const fname = path.split('/').pop()!
      return readFileMap[fname] ?? null
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
    mockReadFile.mockImplementation((path: string) =>
      path.endsWith('a.md') ? null : validMarkdown('B', '2024-06-22'),
    )

    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>)

    const posts = await getAllPosts({
      readFileFn: mockReadFile,
      postsDirectory: '',
    })

    expect(posts).toHaveLength(1)
    expect(posts[0].title).toBe('B')
  })

  it('should keep original order when dates are equal', async () => {
    const files = ['a.md', 'b.md']
    mockReadFile.mockImplementation((path: string) =>
      path.endsWith('a.md')
        ? validMarkdown('A', '2024-06-20')
        : validMarkdown('B', '2024-06-20'),
    )

    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>)

    const posts = await getAllPosts({
      readFileFn: mockReadFile,
      postsDirectory: '',
    })

    expect(posts.map((p) => p.title)).toEqual(['A', 'B'])
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

describe('getAllPostsMerged', () => {
  const fetchNotePostsMock = fetchNotePosts as jest.MockedFunction<
    typeof fetchNotePosts
  >

  afterEach(() => {
    jest.restoreAllMocks()
    fetchNotePostsMock.mockReset()
  })

  it('merges local and external posts, deduplicating by filename', async () => {
    fetchNotePostsMock.mockResolvedValueOnce([
      {
        title: 'External',
        date: '2024-06-23',
        content: '',
        filename: 'note__external',
        tags: ['tag'],
      },
      {
        title: 'Duplicate',
        date: '2024-06-22',
        content: '',
        filename: 'dup',
        tags: [],
      },
    ])

    const mockReadFile = jest.fn()
    const files = ['local.md', 'dup.md']

    mockReadFile.mockImplementation((path: string) => {
      if (path.endsWith('local.md')) {
        return `---\ntitle: 'Local'\ndate: '2024-06-21'\n---\ncontent`
      }
      if (path.endsWith('dup.md')) {
        return `---\ntitle: 'Duplicate Local'\ndate: '2024-06-20'\n---\ncontent`
      }
      return null
    })

    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>)

    const posts = await getAllPostsMerged({
      readFileFn: mockReadFile,
      postsDirectory: '',
    })

    expect(posts.map((p) => p.title)).toEqual([
      'External',
      'Local',
      'Duplicate Local',
    ])
  })

  it('falls back to local posts when fetchNotePosts throws', async () => {
    fetchNotePostsMock.mockRejectedValueOnce(new Error('network error'))

    const mockReadFile = jest.fn()
    const files = ['local.md']

    mockReadFile.mockReturnValue(
      `---\ntitle: 'Only Local'\ndate: '2024-06-21'\n---\ncontent`,
    )

    jest
      .spyOn(fs, 'readdirSync')
      .mockReturnValue(files as unknown as ReturnType<typeof fs.readdirSync>)

    const posts = await getAllPostsMerged({
      readFileFn: mockReadFile,
      postsDirectory: '',
    })

    expect(posts).toHaveLength(1)
    expect(posts[0].title).toBe('Only Local')
  })
})
