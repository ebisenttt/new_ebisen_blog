import type { CSSProperties, PropsWithChildren } from 'react'

type Props = {
  style?: CSSProperties
}

export const Wrapper = ({ style, children }: PropsWithChildren<Props>) => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#111827',
        backgroundColor: '#F8FAFC',
        ...style,
      }}
    >
      {children}
    </div>
  )
}
