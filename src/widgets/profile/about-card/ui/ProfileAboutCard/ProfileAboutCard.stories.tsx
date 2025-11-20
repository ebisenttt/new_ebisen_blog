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

export const Default: Story = {}
