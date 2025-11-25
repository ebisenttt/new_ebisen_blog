import '@testing-library/jest-dom'

import type { ImgHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'

jest.mock('next/image', () => ({
  __esModule: true,
  default: ({
    priority,
    ...props
  }: ImgHTMLAttributes<HTMLImageElement> & { priority?: boolean }) => {
    void priority
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />
  },
}))

import { Footer } from './Footer'

describe('Footer', () => {
  it('renders links to external profiles', () => {
    render(<Footer />)

    expect(
      screen.getByRole('heading', { name: 'ebisen blog.' }),
    ).toBeInTheDocument()
    expect(screen.getByAltText('github')).toBeInTheDocument()
    expect(screen.getByAltText('x-twitter')).toBeInTheDocument()
    expect(screen.getByAltText('note')).toBeInTheDocument()
  })
})
