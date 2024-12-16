import { ReactNode } from 'react'
import Header from './Header'

interface PageLayoutProps {
  children: ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className=" dark min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {children}
      </main>
    </div>
  )
}

