import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Card } from './card'

describe('Card', () => {
  it('renders children inside styled container', () => {
    render(
      <Card>
        <span>content</span>
      </Card>,
    )

    const wrapper = screen.getByText('content').parentElement
    expect(wrapper).toBeInTheDocument()
    expect(wrapper).toHaveClass('dark:bg-gray-800 rounded p-4')
  })
})
