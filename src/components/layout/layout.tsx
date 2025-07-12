import { Alert } from '@/components/alert/alert'
import { Footer } from '@/components/layout/footer'

interface Props {
  preview?: boolean
  children: React.ReactNode
}

export const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
