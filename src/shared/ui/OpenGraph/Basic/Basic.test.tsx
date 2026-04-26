import '@testing-library/jest-dom/vitest'

import type { ReactNode } from 'react'

import { render, screen } from '@testing-library/react'

vi.mock('../Wrapper', () => ({
  Wrapper: ({ children }: { children: ReactNode }) => (
    <div data-testid="wrapper">{children}</div>
  ),
}))

import { Basic } from './Basic'

describe('OpenGraph Basic', () => {
  it('renders the blog title inside the wrapper', () => {
    render(<Basic />)

    expect(screen.getByTestId('wrapper')).toBeInTheDocument()
    expect(screen.getByText('ebisen blog.')).toBeInTheDocument()
  })
})
