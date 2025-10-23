import React from 'react'

type IconProps = Omit<React.SVGProps<SVGSVGElement>, 'title'> & {
  title?: string
  className?: string
}

export const ExternalLinkIcon: React.FC<IconProps> = ({
  title = '外部リンク',
  className = 'h-4 w-4',
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden={title ? undefined : true}
    role={title ? 'img' : 'presentation'}
    {...props}
  >
    {title ? <title>{title}</title> : null}
    <path d="M14 3h7v7" />
    <path d="M21 3l-9 9" />
    <path d="M10 3H7a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4h10a4 4 0 0 0 4-4v-3" />
  </svg>
)
