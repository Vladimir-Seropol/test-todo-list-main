import type { Metadata } from 'next'
import { DM_Sans, Work_Sans } from 'next/font/google'
import './globals.css'

const dmSans = DM_Sans({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-dm-sans'
})

const workSans = Work_Sans({
  weight: '500',
  subsets: ['latin'],
  variable: '--font-work-sans'
})

export const metadata: Metadata = {
  title: 'To-do list',
  description: 'Happy phone test task'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${dmSans.variable} ${workSans.variable}`}>
      <body className="font-sans antialiased min-v-[100h]">{children}</body>
    </html>
  )
}
