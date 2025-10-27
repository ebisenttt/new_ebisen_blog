import '@testing-library/jest-dom'

import { notFound } from 'next/navigation'

import { render, screen } from '@testing-library/react'

import { getPostDetailViewModel } from '@processes/view-post-detail'

import { PostDetailsPage } from './index'

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}))

jest.mock('@processes/view-post-detail', () => ({
  getPostDetailViewModel: jest.fn(),
}))

const mockNotFound = notFound as unknown as jest.Mock
const mockGetPostDetailViewModel =
  getPostDetailViewModel as unknown as jest.Mock

describe('PostDetailsPage', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  test('view モデルが存在しない場合は notFound を呼び出す', async () => {
    mockGetPostDetailViewModel.mockResolvedValueOnce(null)

    await PostDetailsPage({ name: 'missing' })

    expect(mockNotFound).toHaveBeenCalled()
  })

  test('投稿詳細を描画し、clientSlot も描画する', async () => {
    mockGetPostDetailViewModel.mockResolvedValueOnce({
      post: {
        title: 'Hello World',
        date: '2024-01-01',
        content: 'content',
        filename: 'hello-world',
        tags: ['tag'],
      },
      contentHtml: '<p>Hello</p>',
    })

    const element = await PostDetailsPage({
      name: 'hello-world',
      clientSlot: <div data-testid="client-slot" />,
    })

    render(element)

    expect(
      screen.getByRole('heading', { name: 'Hello World' }),
    ).toBeInTheDocument()
    expect(screen.getByTestId('client-slot')).toBeInTheDocument()
  })
})
