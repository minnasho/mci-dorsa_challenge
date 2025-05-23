import type { Metadata } from 'next'
import { Vazirmatn } from 'next/font/google'
import './globals.css'
import { TanstackQueryProvider } from './provider'
import { Footer } from '@/modules/footer'

const vazirmatn = Vazirmatn({
  variable: '--font-vazirmatn',
  subsets: ['latin', 'arabic'], // Include Arabic for Persian
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${vazirmatn.variable} antialiased`}>
        <TanstackQueryProvider>
          {children}
          <Footer />
        </TanstackQueryProvider>
      </body>
    </html>
  )
}
