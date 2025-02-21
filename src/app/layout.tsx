import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Elliot Reese Portfolio',
  description: 'Robotics Engineering and 3D Design Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
