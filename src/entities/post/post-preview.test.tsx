import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { PostPreview } from './post-preview'

describe('PostPreview', () => {
  test('renders title and tags', () => {
    const { container, getByText } = render(
      <PostPreview
        title={'Test Title'}
        date={'2020-01-01'}
        filename={'test.md'}
        tags={['tag1', 'tag2']}
      />,
    )

    // title is rendered inside an h3 via dangerouslySetInnerHTML
    const h3 = container.querySelector('h3')
    expect(h3).toBeTruthy()
    expect(h3?.textContent).toMatch(/Test Title/)

    // tag badge text exists
    expect(getByText('tag1')).toBeInTheDocument()
  })
})
