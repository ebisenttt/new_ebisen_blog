import { TITLE } from '@/constants'

export const OpenGraph = () => (
  <div
    style={{
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 64,
      background: 'white',
      color: 'black',
    }}
  >
    {TITLE}
  </div>
)
