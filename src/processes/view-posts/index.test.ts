import { getAllPostsMerged } from '@/lib/api'

import type { Post } from '@entities/post/model'

import { getHomePostsViewModel } from './index'

jest.mock('@/lib/api', () => ({
  getAllPostsMerged: jest.fn(),
}))

describe('processes/view-posts', () => {
  const getAllPostsMergedMock = getAllPostsMerged as jest.MockedFunction<
    typeof getAllPostsMerged
  >

  beforeEach(() => {
    getAllPostsMergedMock.mockReset()
  })

  test('集計済みのビューを返す', async () => {
    const posts: Post[] = [
      {
        title: 'Local',
        date: '2024-01-01',
        content: '',
        filename: 'local-post',
        tags: ['react'],
      },
      {
        title: 'External',
        date: '2024-01-02',
        content: '',
        filename: 'note__aHR0cHM6Ly9leGFtcGxlLmNvbQ',
        tags: ['react', 'nextjs'],
      },
    ]

    getAllPostsMergedMock.mockResolvedValue(posts)

    const viewModel = await getHomePostsViewModel()

    expect(viewModel.posts).toHaveLength(2)
    expect(viewModel.rawPosts).toHaveLength(2)
    expect(viewModel.posts[1].externalUrl).toBe('https://example.com')
    expect(viewModel.tagStats).toEqual({ react: 2, nextjs: 1 })
    expect(viewModel.sortedTags).toEqual(['react', 'nextjs'])
    expect(viewModel.initialTag).toBe('react')
  })
})
