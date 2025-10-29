import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Badge } from './Badge'

describe('Badge', () => {
  it('renders text with devicon when style is defined', () => {
    render(<Badge text="typescript" />)

    expect(screen.getByText('typescript')).toBeInTheDocument()
    expect(document.querySelector('.devicon-typescript-plain')).not.toBeNull()
  })

  it('fallbacks to default color class when style is undefined', () => {
    render(<Badge text="unknown" />)

    const badge = screen.getByText('unknown')
    expect(badge.className).toContain('dark:bg-stone-600')
  })
})
