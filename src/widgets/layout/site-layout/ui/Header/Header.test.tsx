import '@testing-library/jest-dom'

import type { AnchorHTMLAttributes, ReactNode } from 'react'

import { render, screen } from '@testing-library/react'

import { TITLE } from '@/shared/config'

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({
    children,
    href,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
    href: string
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}))

import { Header } from './Header'

describe('Header', () => {
  it('links to the home page with the blog title', () => {
    render(<Header />)

    const link = screen.getByRole('link', { name: TITLE })
    expect(link).toHaveAttribute('href', '/')
  })
})
