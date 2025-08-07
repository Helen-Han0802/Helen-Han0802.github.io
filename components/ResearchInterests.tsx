import { TrendingUp, Lightbulb, Eye } from 'lucide-react'

const ResearchInterests = () => {
  const topics = [
    {
      icon: <TrendingUp className="text-accent-gold" size={32} />,
      title: "Fintech",
      description: "Exploring financial technology innovations, crowdfunding platforms, and digital payment systems"
    },
    {
      icon: <Lightbulb className="text-blue-500" size={32} />,
      title: "Digital Innovation",
      description: "Investigating digital transformation, entrepreneurship, and technology adoption patterns"
    },
    {
      icon: <Eye className="text-green-500" size={32} />,
      title: "Human-AR Interaction",
      description: "Studying augmented reality applications and their impact on human performance and behavior"
    }
  ]



  return (
    <section className="mb-8">
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 lg:p-12">
        {/* Research Topics */}
        <div className="mb-12">
          <h2 className="font-display text-3xl font-bold text-academic-navy mb-8 text-center">
            Research Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topics.map((topic, index) => (
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
        </div>


      </div>
    </section>
  )
}

export default ResearchInterests