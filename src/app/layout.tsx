import type { Metadata } from 'next'
import { Changa as Roboto_Mono } from 'next/font/google'
import './globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const roboto = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emmanuel Francis Micah',
  description: 'Portfolio for Emmanuel Francis Micah',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}
