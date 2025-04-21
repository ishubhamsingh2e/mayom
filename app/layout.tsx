import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mayom Hospital',
  description: 'Mayom Hospital: Best Multi Speciality Hospital',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
