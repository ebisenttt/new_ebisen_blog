import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { PostHeader } from './post-header'

describe('PostHeader', () => {
  test('renders title and date', () => {
    const { getByText } = render(
      <PostHeader title={'Hoge'} date={'2020-01-01'} tag={['t']} />,
    )

    expect(getByText('Hoge')).toBeInTheDocument()
    expect(getByText(/2020-01-01/)).toBeInTheDocument()
  })
})
