import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Taurus Suplementos',
  description: 'Suplementos para melhorar a perfomance e a vida das pessoas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='min-h-screen bg-dark_100'>{children}</body>
    </html>
  )
}
