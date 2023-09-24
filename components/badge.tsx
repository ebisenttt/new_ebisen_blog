import 'devicon'
import { ReactNode } from 'react'

type Props = {
  text: string
}
function Badge({ text }: Props) {
  const style = mapBadgeTextToStyle(text)
  const icon = style && style.icon ? style.icon : ''
  const color =
    style && style.color ? style.color : 'dark:bg-stone-600 dark:text-gray-200'
  return (
    <span
      className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full ${color}`}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {text}
    </span>
  )
}

function mapBadgeTextToStyle(text: string):
  | {
      icon: string | ReactNode
      color: string
    }
  | undefined {
  const styles = {
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
      color: 'dark:bg-gray-900 dark:text-gray-300',
    },
  }
  return styles[text]
}

export default Badge
