import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import type { HomePostsViewModel } from '@processes/view-posts'

import { PostsFeed } from './PostsFeed'

const createPost = (overrides: Partial<HomePostsViewModel['posts'][number]> = {}) => ({
  title: 'Sample',
  date: '2024-01-01',
  content: '',
  filename: 'sample',
  tags: [],
  href: '/posts/sample',
  externalUrl: null,
  ...overrides,
}) as HomePostsViewModel['posts'][number]

describe('PostsFeed', () => {
  test('投稿一覧を描画する', () => {
    const posts: HomePostsViewModel['posts'] = [
      createPost({ title: 'First', filename: 'first', href: '/posts/first' }),
      createPost({
        title: 'Second',
        filename: 'second',
        href: 'https://example.com',
        externalUrl: 'https://example.com',
      }),
    ]

    render(<PostsFeed posts={posts} />)

    expect(screen.getByText('Latest Posts')).toBeInTheDocument()
    expect(screen.getByText('First')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
  })

  test('投稿が存在しない場合はプレースホルダーを表示する', () => {
    render(<PostsFeed posts={[]} />)

    expect(screen.getByText('Latest Posts')).toBeInTheDocument()
    expect(screen.getByText('記事がありません。')).toBeInTheDocument()
  })
})
