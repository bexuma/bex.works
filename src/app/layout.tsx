import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Footer, Navbar } from '../components'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://bex.works'),
  title: 'bex!',
  description:
    'Bexultan Myrzatay — Product Manager with an engineering foundation and founder experience.',
  openGraph: {
    title: 'Bexultan Myrzatay',
    description:
      'Product Manager with an engineering foundation and founder experience.',
    url: 'https://bex.works',
    siteName: 'bex!',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bexultan Myrzatay',
    description:
      'Product Manager with an engineering foundation and founder experience.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-light-200 dark:bg-dark-200 font-sans antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
