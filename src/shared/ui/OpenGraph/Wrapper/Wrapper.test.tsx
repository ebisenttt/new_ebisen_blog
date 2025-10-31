import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Wrapper } from './Wrapper'

describe('OpenGraph Wrapper', () => {
  it('renders children content', () => {
    render(
      <Wrapper>
        <p>wrapped</p>
      </Wrapper>,
    )

    expect(screen.getByText('wrapped')).toBeInTheDocument()
  })

  it('merges custom styles with defaults', () => {
    render(
      <Wrapper style={{ backgroundColor: '#000000' }}>
        <span>styled</span>
      </Wrapper>,
    )

    const container = screen.getByText('styled').parentElement
    expect(container).not.toBeNull()
    expect(container as HTMLElement).toHaveStyle({ backgroundColor: '#000000' })
    expect(container as HTMLElement).toHaveStyle({ display: 'flex' })
  })
})
