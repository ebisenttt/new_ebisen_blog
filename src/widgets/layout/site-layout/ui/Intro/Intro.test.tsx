import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

import { Intro } from './Intro'

describe('Intro', () => {
  it('renders blog heading and description', () => {
    render(<Intro />)

    expect(
      screen.getByRole('heading', { name: 'ebisen blog' }),
    ).toBeInTheDocument()
    expect(screen.getByText('ひよっこエンジニアの備忘録')).toBeInTheDocument()
  })
})
