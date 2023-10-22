import { PropsWithChildren } from 'react'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'DT Money',
  description:
    'DT Money is a financial management, offering users efficiency in managing their income, expenses and balance.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en" className={`${roboto.variable} font-roboto`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
