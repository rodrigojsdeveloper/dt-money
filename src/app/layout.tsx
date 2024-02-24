import { PropsWithChildren } from 'react'
import { Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import { cn } from '@/utils/cn'
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
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body className={cn('font-roboto antialiased', roboto.variable)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
