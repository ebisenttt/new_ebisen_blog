import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Container } from './container'

describe('Container', () => {
  it('wraps children with layout classes', () => {
    render(
      <Container>
        <p>child</p>
      </Container>,
    )

    const paragraph = screen.getByText('child')
    expect(paragraph).toBeInTheDocument()
    expect(paragraph.parentElement).toHaveClass('container mx-auto px-5')
  })
})
