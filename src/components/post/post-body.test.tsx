import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { PostBody } from './post-body'

describe('PostBody', () => {
  test('renders HTML content', () => {
    const html = '<p>hello world</p>'
    const { container, getByText } = render(<PostBody content={html} />)

    expect(getByText('hello world')).toBeInTheDocument()
    // container should have .markdown class or at least contain the HTML
    const inner = container.querySelector('.markdown') || container
    expect(inner.innerHTML).toContain('hello world')
  })
})
