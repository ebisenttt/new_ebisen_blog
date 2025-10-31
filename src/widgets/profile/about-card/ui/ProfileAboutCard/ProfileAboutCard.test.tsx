import '@testing-library/jest-dom'

import type { ImgHTMLAttributes } from 'react'

import { render, screen } from '@testing-library/react'

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}))

import { ProfileAboutCard } from './ProfileAboutCard'

describe('ProfileAboutCard', () => {
  it('displays profile details and sections', () => {
    render(<ProfileAboutCard />)

    expect(screen.getByRole('heading', { name: 'ebisen' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '使用技術' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: '資格' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'html' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'python' })).toBeInTheDocument()
  })
})
