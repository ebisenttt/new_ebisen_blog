import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { PostPreview } from './PostPreview'

describe('PostPreview', () => {
  test('renders title and tags', () => {
    const { container, getByText } = render(
      <PostPreview
        title={'Test Title'}
        date={'2020-01-01'}
        tags={['tag1', 'tag2']}
        href="/posts/test"
      />,
    )

    // title is rendered inside an h3 via dangerouslySetInnerHTML
    const h3 = container.querySelector('h3')
    expect(h3).toBeTruthy()
    expect(h3?.textContent).toMatch(/Test Title/)

    // tag badge text exists
    expect(getByText('tag1')).toBeInTheDocument()
  })

  test('renders internal link with Next Link when externalUrl is absent', () => {
    const { container } = render(
      <PostPreview
        title="Internal"
        date="2020-01-01"
        tags={[]}
        href="/posts/internal"
      />,
    )

    const anchor = container.querySelector('a[href="/posts/internal"]')
    expect(anchor).toBeInTheDocument()
    expect(anchor).not.toHaveAttribute('target')
  })

  test('renders external link with target blank when externalUrl is provided', () => {
    const { container } = render(
      <PostPreview
        title="External"
        date="2020-01-01"
        tags={[]}
        href="https://example.com"
        externalUrl="https://example.com"
      />,
    )

    const anchor = container.querySelector('a[href="https://example.com"]')
    expect(anchor).toBeInTheDocument()
    expect(anchor).toHaveAttribute('target', '_blank')
    expect(anchor).toHaveAttribute('rel', 'noopener noreferrer')
  })
})
