import { Metadata } from 'next'
import ResearchInterests from '@/components/ResearchInterests'
import UnderReviewPapers from '@/components/UnderReviewPapers'
import WorkingPapers from '@/components/WorkingPapers'
import ConferencePapers from '@/components/ConferencePapers'

export const metadata: Metadata = {
  title: 'Research - Xuewen Han',
  description: 'Research publications and working papers by Xuewen Han, focusing on Fintech, Digital Innovation, and Human-AR Interaction',
}

export default function Research() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-academic-navy mb-6">
            Research
          </h1>
          <p className="text-xl text-academic-gray max-w-4xl mx-auto leading-relaxed">
            My research explores the intersection of technology, finance, and human interaction, 
            employing advanced methodologies including generative AI, machine learning, and econometrics.
          </p>
        </div>

        {/* Research Interests */}
        <ResearchInterests />
        
        {/* Publications Sections */}
        <div className="space-y-16">
          <UnderReviewPapers />
          <WorkingPapers />
          <ConferencePapers />
        </div>
      </div>
    </div>
  )
}