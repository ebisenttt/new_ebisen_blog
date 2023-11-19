import 'devicon'
import { type ReactNode } from 'react'

interface Props {
  text: string
}

function Badge({ text }: Props) {
  const style = mapTextToBadgeStyle(text)
  const icon = style?.icon
  const defaultColor = 'dark:bg-stone-600 dark:text-gray-200'
  const color = style?.color ?? defaultColor
  return (
    <span
      className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full whitespace-nowrap ${color}`}
    >
      {icon !== undefined && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  )
}

interface BadgeStyle {
  icon: string | ReactNode
  color: string
}

const BADGE_STYLES: Record<string, BadgeStyle> = {
  UoPeople: { icon: '🎓', color: 'dark:bg-violet-900 dark:text-violet-300' },
  ruby: {
    icon: <i className="devicon-ruby-plain" />,
    color: 'dark:bg-red-900 dark:text-red-300',
  },
  rails: {
    icon: <i className="devicon-rails-plain" />,
    color: 'dark:bg-red-900 dark:text-red-300',
  },
  markdown: {
    icon: <i className="devicon-markdown-original" />,
    color: 'dark:bg-gray-700 dark:text-gray-200',
  },
}

function mapTextToBadgeStyle(text: string): BadgeStyle | undefined {
  return BADGE_STYLES[text]
}

export default Badge
