import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Xuewen Han - Academic Researcher',
  description: 'Ph.D. Candidate in Information Systems at Tsinghua University, specializing in Fintech, Digital Innovation, and Human-AR Interaction',
  keywords: 'Xuewen Han, Academic, Researcher, Information Systems, Tsinghua University, Fintech, AI, Machine Learning',
  authors: [{ name: 'Xuewen Han' }],
  openGraph: {
    title: 'Xuewen Han - Academic Researcher',
    description: 'Ph.D. Candidate in Information Systems at Tsinghua University',
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