import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'

jest.mock('../Footer', () => ({
  Footer: () => <footer data-testid="footer" />,
}))

import { Layout } from './Layout'

describe('Layout', () => {
  it('wraps children with a main element and renders the footer', () => {
    const { container } = render(
      <Layout>
        <span>content</span>
      </Layout>,
    )

    const main = container.querySelector('main')
    expect(main).not.toBeNull()
    expect(main as HTMLElement).toHaveTextContent('content')
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
