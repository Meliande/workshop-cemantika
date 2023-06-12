import Navbar from '@/components/Navbar'
import './globals.css'
import { Roboto } from 'next/font/google'
import Footer from '@/components/Footer'
import React from 'react'

const roboto = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Workshop CEManTIKA | UFBA',
  description: 'Página para promoção dos workshops do grupo CEManTIKA da UFBA',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} bg-slate-200 flex flex-col pt-8 justify-between max-h-screen gap-6`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
