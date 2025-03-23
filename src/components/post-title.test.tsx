import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import PostTitle from '@/components/post-title'

describe('PostTitle', () => {
  test('タイトルが表示される', async () => {
    const { getByText } = render(<PostTitle>タイトル</PostTitle>)
    expect(getByText('タイトル')).toBeInTheDocument()
  })
})
