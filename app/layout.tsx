import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Xuewen Han (韩雪雯) - Assistant Professor',
  description: 'Assistant Professor in Information, Technology and Innovation at Shanghai Jiao Tong University, specializing in Fintech, Digital Innovation, and Human-AR Interaction',
  keywords: 'Xuewen Han, Assistant Professor, Information Technology, Shanghai Jiao Tong University, Fintech, AI, Machine Learning, Digital Innovation',
  authors: [{ name: 'Xuewen Han' }],
  openGraph: {
    title: 'Xuewen Han - Assistant Professor',
    description: 'Assistant Professor at Shanghai Jiao Tong University specializing in Fintech and Digital Innovation',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="min-h-screen pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}