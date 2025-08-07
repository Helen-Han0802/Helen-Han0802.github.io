import { Calendar, Award, BookOpen, Users } from 'lucide-react'

const NewsSection = () => {
  const news = [
    {
      date: "2025",
      icon: <BookOpen className="text-accent-gold" size={20} />,
      title: "Join SJTU",
      description: "Join SJTU as an Assistant Professor",
      type: "Recognition"
    },
    {
      date: "2025",
      icon: <BookOpen className="text-accent-gold" size={20} />,
      title: "Ph.D. in Management Science and Engineering",
      description: "Recieved Ph.D. in Management Science and Engineering from Tsinghua University",
      type: "Recognition"
    },
    {
      date: "2024",
      icon: <Award className="text-accent-gold" size={20} />,
      title: "PACIS 2024 Doctoral Consortium",
      description: "Selected as participant in PACIS 2024 Doctoral Consortium",
      type: "Award"
    },
    {
      date: "2024",
      icon: <BookOpen className="text-academic-blue" size={20} />,
      title: "Best Paper Award",
      description: "Received Best Paper Award at China Association Information Systems (CNAIS) conference",
      type: "Recognition"
    },
    {
      date: "2023",
      icon: <Award className="text-accent-gold" size={20} />,
      title: "First Class Scholarship",
      description: "Awarded First Class Scholarship from Tsinghua University",
      type: "Award"
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl font-bold text-academic-navy mb-4">
            Recent News & Awards
          </h2>
          <p className="text-xl text-academic-gray max-w-3xl mx-auto">
            Latest achievements and recognition in academic research
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {news.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center space-x-3 flex-shrink-0">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center">
                      {item.icon}
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-academic-gray">
                      <Calendar size={16} />
                      <span>{item.date}</span>
                    </div>
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="font-semibold text-academic-navy text-lg">
                        {item.title}
                      </h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${
                        item.type === 'Award' ? 'bg-accent-gold/10 text-accent-gold' :
                        item.type === 'Recognition' ? 'bg-academic-blue/10 text-academic-blue' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {item.type}
                      </span>
                    </div>
                    <p className="text-academic-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="/cv"
            className="inline-flex items-center px-6 py-3 border-2 border-academic-blue text-academic-blue font-medium rounded-lg hover:bg-academic-blue hover:text-white transition-colors duration-200"
          >
            View Complete CV
          </a>
        </div>
      </div>
    </section>
  )
}

export default NewsSection