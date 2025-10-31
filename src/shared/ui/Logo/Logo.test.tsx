import '@testing-library/jest-dom'
import { render } from '@testing-library/react'

import { Logo } from './Logo'

describe('Logo', () => {
  it('renders an SVG with the provided dimensions', () => {
    const { container } = render(<Logo width={64} height={32} />)

    const svg = container.querySelector('svg')
    expect(svg).toBeInstanceOf(SVGElement)
    expect(svg as SVGElement).toHaveAttribute('width', '64')
    expect(svg as SVGElement).toHaveAttribute('height', '32')
  })
})
