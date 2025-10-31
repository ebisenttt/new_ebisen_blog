import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { DateFormatter } from './DateFormatter'

describe('DateFormatter', () => {
  it('formats the provided ISO date string', () => {
    render(<DateFormatter dateString="2024-01-02" />)

    const time = screen.getByText('2024-01-02')
    expect(time).toBeInTheDocument()
    expect(time).toHaveAttribute('datetime', '2024-01-02')
  })
})
