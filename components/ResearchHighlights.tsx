import { ExternalLink, TrendingUp, Brain, Zap } from 'lucide-react'

const ResearchHighlights = () => {
  const highlights = [
    {
      icon: <TrendingUp className="text-accent-gold" size={32} />,
      title: "Fintech",
      description: "Exploring user behavior sequence patterns with generative AI for intelligent marketing and fraud detection"
    },
    {
      icon: <Brain className="text-blue-500" size={32} />,
      title: "Digital Innovation",
      description: "Investigating digital transformation, entrepreneurship, and technology adoption patterns"
    },
    {
      icon: <Zap className="text-green-500" size={32} />,
      title: "Human-AR Interaction",
      description: "Studying augmented reality applications and their impact on human performance and behavior"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-academic-navy mb-4">
            Research Highlights
          </h2>
          <p className="text-xl text-academic-gray max-w-3xl mx-auto">
            Current research projects at the intersection of technology, finance, and human interaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((topic, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-gray-50 rounded-lg flex items-center justify-center mr-4">
                  {topic.icon}
                </div>
                <h3 className="font-display text-xl font-semibold text-academic-navy">
                  {topic.title}
                </h3>
              </div>
              <p className="text-academic-gray leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/research"
            className="inline-flex items-center px-6 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-academic-navy transition-colors duration-200"
          >
            View All Research
            <ExternalLink size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default ResearchHighlights