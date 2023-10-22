import { PropsWithChildren } from 'react'
import type { Metadata } from 'next'
import Providers from '@/contexts'
import './globals.css'

export const metadata: Metadata = {
  title: 'DT Money',
  description:
    'DT Money is a financial management, offering users efficiency in managing their income, expenses and balance.',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/x-icon" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
