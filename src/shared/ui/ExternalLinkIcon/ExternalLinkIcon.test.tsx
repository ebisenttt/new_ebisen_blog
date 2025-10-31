import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { ExternalLinkIcon } from './ExternalLinkIcon'

describe('ExternalLinkIcon', () => {
  it('renders an SVG with the default title', () => {
    render(<ExternalLinkIcon />)

    const icon = screen.getByRole('img', { name: '外部リンク' })
    expect(icon.tagName.toLowerCase()).toBe('svg')
  })

  it('applies a custom className', () => {
    render(<ExternalLinkIcon className="custom-class" />)

    const icon = screen.getByRole('img', { name: '外部リンク' })
    expect(icon).toHaveClass('custom-class')
  })
})
