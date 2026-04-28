import markdownToHtml from '@/lib/markdownToHtml'
import { getAllPosts } from '@/entities/post/model/api/server/queries'
import { getPostByFilename } from '@/entities/post/model/api/server/markdown'

import {
  getPostDetailMetadata,
  getPostDetailViewModel,
  listPostFilenames,
} from './index'

import type { Post } from '@/shared/types/post'

vi.mock('@/entities/post/model/api/server/queries', () => ({
  getAllPosts: vi.fn(),
}))

vi.mock('@/entities/post/model/api/server/markdown', () => ({
  getPostByFilename: vi.fn(),
}))

vi.mock('@/lib/markdownToHtml', () => ({
  __esModule: true,
  default: vi.fn(),
}))

const mockGetAllPosts = vi.mocked(getAllPosts)
const mockGetPostByFilename = vi.mocked(getPostByFilename)
const mockMarkdownToHtml = vi.mocked(markdownToHtml)

describe('getPostDetailViewModel', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test('投稿が見つからない場合は null を返す', async () => {
    mockGetPostByFilename.mockResolvedValueOnce(null)

    const result = await getPostDetailViewModel('missing')

    expect(result).toBeNull()
    expect(mockMarkdownToHtml).not.toHaveBeenCalled()
  })

  test('投稿が見つかれば HTML に変換して返す', async () => {
    const post = {
      title: 'title',
      date: '2024-01-01',
      content: '# Hello',
      filename: 'hello',
      tags: ['tag'],
    }
    mockGetPostByFilename.mockResolvedValueOnce(post)
    mockMarkdownToHtml.mockResolvedValueOnce('<h1>Hello</h1>')

    const result = await getPostDetailViewModel('hello')

    expect(result).toEqual({
      post,
      contentHtml: '<h1>Hello</h1>',
    })
    expect(mockMarkdownToHtml).toHaveBeenCalledWith(post.content)
  })
})

describe('listPostFilenames', () => {
  const posts = [{ filename: 'post-1' }, { filename: 'post-2' }] as Array<
    { filename: string } & Record<string, unknown>
  >

  test('getAllPosts の結果から filename を抽出する', async () => {
    mockGetAllPosts.mockResolvedValueOnce(posts as unknown as Post[])

    const result = await listPostFilenames()

    expect(result).toEqual(['post-1', 'post-2'])
    expect(mockGetAllPosts).toHaveBeenCalled()
  })
})

describe('getPostDetailMetadata', () => {
  test('投稿が存在しない場合は null を返す', async () => {
    mockGetPostByFilename.mockResolvedValueOnce(null)

    const result = await getPostDetailMetadata('missing')

    expect(result).toBeNull()
  })

  test('投稿が存在する場合はタイトルを返す', async () => {
    mockGetPostByFilename.mockResolvedValueOnce({
      title: 'title',
    } as unknown as Post)

    const result = await getPostDetailMetadata('hello')

    expect(result).toEqual({ title: 'title' })
  })
})
