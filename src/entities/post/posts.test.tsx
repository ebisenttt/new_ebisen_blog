import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import type { Post } from '@entities/post/model'

import { Posts } from './posts'

const sample: Post[] = [
  { title: 'A', date: '2020-01-01', filename: 'a.md', tags: [], content: '' },
  {
    title: 'B',
    date: '2020-02-02',
    filename: 'b.md',
    tags: ['t'],
    content: '',
  },
]

describe('Posts', () => {
  test('renders list of posts', () => {
    const { getByText } = render(<Posts posts={sample} />)

    expect(getByText('A')).toBeInTheDocument()
    expect(getByText('B')).toBeInTheDocument()
  })
})
