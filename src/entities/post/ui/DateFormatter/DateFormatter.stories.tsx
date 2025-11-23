import type { Meta, StoryObj } from '@storybook/nextjs'

import { DateFormatter } from './DateFormatter'

const meta = {
  title: 'entities/post/DateFormatter',
  component: DateFormatter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateFormatter>

export default meta
type Story = StoryObj<typeof meta>

export const DateOnly: Story = {
  args: {
    dateString: '2024-01-15',
  },
}

export const WithTimezone: Story = {
  args: {
    dateString: '2024-01-15T16:20:47+09:00',
  },
}

export const WithTimezoneUTC: Story = {
  args: {
    dateString: '2024-01-15T07:20:47Z',
  },
}
