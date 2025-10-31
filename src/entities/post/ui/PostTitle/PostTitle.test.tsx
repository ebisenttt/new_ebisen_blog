import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { PostTitle } from './PostTitle'

describe('PostTitle', () => {
  test('タイトルが表示される', () => {
    const { getByText } = render(<PostTitle title="タイトル" />)
    expect(getByText('タイトル')).toBeInTheDocument()
  })
})
