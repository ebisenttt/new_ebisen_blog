import 'devicon'
import { type ReactNode } from 'react'

type Props = {
  text: string
}

export const Badge = ({ text }: Props) => {
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

type BadgeStyle = {
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
  HTML: {
    icon: <i className="devicon-html5-plain colored"></i>,
    color: 'dark:bg-orange-900 dark:text-orange-300',
  },
  typescript: {
    icon: <i className="devicon-typescript-plain colored"></i>,
    color: 'dark:bg-blue-900 dark:text-blue-300',
  },
  TypeScript: {
    icon: <i className="devicon-typescript-plain colored"></i>,
    color: 'dark:bg-blue-900 dark:text-blue-300',
  },
  eslint: {
    icon: <i className="devicon-eslint-plain colored"></i>,
    color: 'dark:bg-violet-500 dark:text-violet-300',
  },
  ESLint: {
    icon: <i className="devicon-eslint-plain colored"></i>,
    color: 'dark:bg-violet-500 dark:text-violet-300',
  },
  javascript: {
    icon: <i className="devicon-javascript-plain colored"></i>,
    color: 'dark:bg-yellow-900 dark:text-yellow-300',
  },
  JavaScript: {
    icon: <i className="devicon-javascript-plain colored"></i>,
    color: 'dark:bg-yellow-900 dark:text-yellow-300',
  },
  'next.js': {
    icon: <i className="devicon-nextjs-plain"></i>,
    color: 'dark:bg-gray-950 dark:text-gray-200',
  },
  'Next.js': {
    icon: <i className="devicon-nextjs-plain"></i>,
    color: 'dark:bg-gray-950 dark:text-gray-200',
  },
  react: {
    icon: <i className="devicon-react-original colored"></i>,
    color: 'dark:bg-sky-900 dark:text-sky-300',
  },
  React: {
    icon: <i className="devicon-react-original colored"></i>,
    color: 'dark:bg-sky-900 dark:text-sky-300',
  },
  pnpm: {
    icon: <i className="devicon-pnpm-plain colored"></i>,
    color: 'dark:bg-orange-800 dark:text-orange-200',
  },
  jest: {
    icon: <i className="devicon-jest-plain colored"></i>,
    color: 'dark:bg-rose-900 dark:text-rose-300',
  },
  Jest: {
    icon: <i className="devicon-jest-plain colored"></i>,
    color: 'dark:bg-rose-900 dark:text-rose-300',
  },
  java: {
    icon: <i className="devicon-java-plain colored"></i>,
    color: 'dark:bg-red-900 dark:text-red-300',
  },
  Java: {
    icon: <i className="devicon-java-plain colored"></i>,
    color: 'dark:bg-red-900 dark:text-red-300',
  },
}

function mapTextToBadgeStyle(text: string): BadgeStyle | undefined {
  return BADGE_STYLES[text]
}
