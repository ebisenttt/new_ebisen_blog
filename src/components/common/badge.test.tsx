import '@testing-library/jest-dom'

import { render } from '@testing-library/react'

import { Badge } from './badge'

describe('Badge', () => {
  it('renders text with devicon when style is defined', () => {
    const { getByText, container } = render(<Badge text="typescript" />)
    expect(getByText('typescript')).toBeInTheDocument()
    expect(container.querySelector('.devicon-typescript-plain')).not.toBeNull()
  })

  it('fallbacks to default color class when style is undefined', () => {
    const { getByText } = render(<Badge text="unknown" />)
    const badge = getByText('unknown')
    expect(badge.className).toContain('dark:bg-stone-600 dark:text-gray-200')
  })
})
