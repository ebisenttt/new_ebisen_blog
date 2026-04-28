import { expect, within } from 'storybook/test'

import type { Meta, StoryObj } from '@storybook/nextjs'

import { ProfileAboutCard } from './ProfileAboutCard'

const meta = {
  title: 'Widgets/Profile/ProfileAboutCard',
  component: ProfileAboutCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'プロフィール情報を表示するカード。自己紹介、使用技術、資格、経歴を含みます。',
      },
    },
  },
} satisfies Meta<typeof ProfileAboutCard>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByRole('heading', { name: 'ebisen' })).toBeInTheDocument()
    expect(canvas.getByRole('heading', { name: '使用技術' })).toBeInTheDocument()
    expect(canvas.getByRole('heading', { name: '資格' })).toBeInTheDocument()
    expect(canvas.getByRole('img', { name: 'html' })).toBeInTheDocument()
    expect(canvas.getByRole('img', { name: 'python' })).toBeInTheDocument()
  },
}
