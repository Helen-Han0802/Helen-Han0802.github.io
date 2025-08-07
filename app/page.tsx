import Hero from '@/components/Hero'
import ResearchHighlights from '@/components/ResearchHighlights'
import NewsSection from '@/components/NewsSection'

export default function Home() {
  return (
    <div className="space-y-0">
      <Hero />
      <ResearchHighlights />
      <NewsSection />
    </div>
  )
}