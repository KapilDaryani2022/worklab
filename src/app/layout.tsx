import type { Metadata } from 'next'
import Header from './components/Header'
import './globals.css'
import 'animate.css';
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Worklab',
  description: 'Swiftly Set Up Your Dream Business in UAE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  )
}
