import { PropsWithChildren } from 'react'

type Props = {
  style?: React.CSSProperties
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
        color: '#111827', // text-slate-900
        backgroundColor: '#F8FAFC', // bg-slate-50
        ...style,
      }}
    >
      {children}
    </div>
  )
}
