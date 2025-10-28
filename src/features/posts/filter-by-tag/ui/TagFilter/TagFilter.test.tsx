import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import type { Post } from '@shared/types/post'

import { TagFilter } from './TagFilter'

describe('TagFilter', () => {
  const posts: Post[] = [
    {
      title: 'A',
      date: '2024-01-01',
      content: '',
      filename: 'a',
      tags: ['react', 'javascript'],
    },
    {
      title: 'B',
      date: '2024-01-02',
      content: '',
      filename: 'b',
      tags: ['react'],
    },
    {
      title: 'C',
      date: '2024-01-03',
      content: '',
      filename: 'c',
      tags: ['nextjs'],
    },
  ]

  const tagStats = { react: 2, javascript: 1, nextjs: 1 }
  const tags = ['react', 'javascript', 'nextjs']

  test('renders initial tag posts', () => {
    render(
      <TagFilter
        posts={posts}
        tags={tags}
        initialTag="react"
        tagStats={tagStats}
      />,
    )

    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.getByText('B')).toBeInTheDocument()
    expect(screen.queryByText('C')).not.toBeInTheDocument()
  })

  test('filters posts when another tag is clicked', () => {
    render(
      <TagFilter
        posts={posts}
        tags={tags}
        initialTag="react"
        tagStats={tagStats}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'javascript' }))

    expect(screen.getByText('A')).toBeInTheDocument()
    expect(screen.queryByText('B')).not.toBeInTheDocument()
  })

  test('shows message when tags array is empty', () => {
    render(<TagFilter posts={posts} tags={[]} initialTag="" tagStats={{}} />)

    expect(screen.getByText('タグがありません。')).toBeInTheDocument()
  })
})
