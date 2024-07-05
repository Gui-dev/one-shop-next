import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import { ReactNode } from 'react'

const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'One Shop',
  description: 'Buy your clothes here',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} h-screen bg-gray-900 text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
