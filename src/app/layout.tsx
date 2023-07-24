'use client'

import Providers from '@/utils/provider'

import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Base 4',
  description: 'Desenvolvimento Base 4 projetos Adekz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <Providers>
          <body className={inter.className}>{children}</body>
        </Providers>
      </Provider>
    </html>
  )
}
