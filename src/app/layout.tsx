import { Inter } from 'next/font/google'
import './globals.css'
import PageLayout from './components/PageLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Email Cleaner',
  description: 'Limpe sua caixa de entrada e aumente sua produtividade',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  )
}

