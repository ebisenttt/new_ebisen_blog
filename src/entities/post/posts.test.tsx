import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import type { Post } from '@entities/post/model'

import { Posts } from './posts'

const sample: Array<Post & { href: string }> = [
  {
    title: 'A',
    date: '2020-01-01',
    filename: 'a',
    tags: [],
    content: '',
    href: '/posts/a',
  },
  {
    title: 'B',
    date: '2020-02-02',
    filename: 'b',
    tags: ['t'],
    content: '',
    href: '/posts/b',
  },
]

describe('Posts', () => {
  test('renders list of posts', () => {
    const { getByText } = render(<Posts posts={sample} />)

    expect(getByText('A')).toBeInTheDocument()
    expect(getByText('B')).toBeInTheDocument()
  })
})
