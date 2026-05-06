import preview from '#.storybook/preview'
import { expect, within } from 'storybook/test'

import { DateFormatter } from './DateFormatter'

const meta = preview.meta({
  title: 'entities/post/DateFormatter',
  component: DateFormatter,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
})

export const DateOnly = meta.story({
  args: {
    dateString: '2024-01-15',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    const time = canvas.getByText('2024-01-15')
    expect(time).toBeInTheDocument()
    expect(time).toHaveAttribute('datetime', '2024-01-15')
  },
})

export const WithTimezone = meta.story({
  args: {
    dateString: '2024-01-15T16:20:47+09:00',
  },
})

export const WithTimezoneUTC = meta.story({
  args: {
    dateString: '2024-01-15T07:20:47Z',
  },
})
