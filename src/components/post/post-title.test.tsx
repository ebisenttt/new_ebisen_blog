import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { PostTitle } from './post-title'

describe('PostTitle', () => {
  test('タイトルが表示される', async () => {
    const { getByText } = render(<PostTitle title="タイトル" />)
    expect(getByText('タイトル')).toBeInTheDocument()
  })
})
