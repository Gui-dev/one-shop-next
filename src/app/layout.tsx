import './globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

import { Header } from '@/components/header'

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
      <body className={`${roboto.className} bg-gray-900 text-gray-100`}>
        <>
          <Header />
          {children}
        </>
      </body>
    </html>
  )
}
