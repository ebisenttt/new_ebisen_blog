import type { ReactNode } from 'react'

import { Footer } from '../Footer'

type LayoutProps = {
  children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <div className="min-h-screen mb-16">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
