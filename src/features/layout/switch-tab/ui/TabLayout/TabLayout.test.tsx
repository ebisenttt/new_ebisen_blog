import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import { TabLayout } from './TabLayout'

describe('TabLayout', () => {
  const titles = ['Posts', 'Tags', 'Me']
  const bodies = [
    <div key="posts">Posts Content</div>,
    <div key="tags">Tags Content</div>,
    <div key="me">Profile Content</div>,
  ]

  test('先頭タブを表示する', () => {
    render(<TabLayout menuTitles={titles} bodies={bodies} />)

    expect(screen.getByText('Posts Content')).toBeInTheDocument()
    expect(screen.queryByText('Tags Content')).not.toBeInTheDocument()
  })

  test('タブをクリックすると本文が切り替わる', () => {
    render(<TabLayout menuTitles={titles} bodies={bodies} />)

    fireEvent.click(screen.getByRole('tab', { name: 'Tags' }))

    expect(screen.getByText('Tags Content')).toBeInTheDocument()
    expect(screen.queryByText('Posts Content')).not.toBeInTheDocument()
  })

  test('initialIndex を尊重する', () => {
    render(<TabLayout menuTitles={titles} bodies={bodies} initialIndex={2} />)

    expect(screen.getByText('Profile Content')).toBeInTheDocument()
  })

  test('タイトルと本文の長さが一致しなくても描画できる', () => {
    const shortBodies = bodies.slice(0, 1)

    render(<TabLayout menuTitles={titles} bodies={shortBodies} />)

    expect(screen.getByText('Posts Content')).toBeInTheDocument()
    expect(screen.queryByText('Tags Content')).not.toBeInTheDocument()
  })
})
