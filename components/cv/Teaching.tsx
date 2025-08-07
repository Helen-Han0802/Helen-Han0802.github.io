import { BookOpen, Calendar, Users } from 'lucide-react'

const Teaching = () => {
  const teaching = [
    {
      course: "Management Science and Engineering Research Seminar (PhD)",
      role: "Teaching Assistant",
      period: "Autumn Term 2024-2025",
      institution: "Tsinghua University",
      level: "PhD"
    },
    {
      course: "Artificial Intelligence in Finance (MBA)",
      role: "Teaching Assistant",
      period: "Spring Term 2023-2024",
      institution: "Tsinghua University",
      level: "MBA"
    },
    {
      course: "Digital Experiment and Data-driven Enterprise (Master)",
      role: "Teaching Assistant",
      period: "Autumn Term 2021-2022, Spring Term 2023-2024",
      institution: "Tsinghua University",
      level: "Master"
    },
    {
      course: "Data, Models and Decisions (MBA)",
      role: "Teaching Assistant",
      period: "Autumn Term 2020-2021",
      institution: "Tsinghua University",
      level: "MBA"
    },
    {
      course: "Principles of Economics (2) (Undergraduate)",
      role: "Teaching Assistant",
      period: "Spring Term 2019-2020",
      institution: "Tsinghua University",
      level: "Undergraduate"
    },
    {
      course: "Principles of Economics (1) (Undergraduate)",
      role: "Teaching Assistant",
      period: "Autumn Term 2019-2020",
      institution: "Tsinghua University",
      level: "Undergraduate"
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'PhD': return 'bg-purple-100 text-purple-700'
      case 'MBA': return 'bg-blue-100 text-blue-700'
      case 'Master': return 'bg-green-100 text-green-700'
      case 'Undergraduate': return 'bg-orange-100 text-orange-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <section>
      <div className="flex items-center mb-8">
        <BookOpen className="text-academic-blue mr-3" size={32} />
        <h2 className="font-display text-3xl font-bold text-academic-navy">
          Teaching Experience
        </h2>
      </div>

      <div className="space-y-4">
        {teaching.map((course, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="font-semibold text-academic-navy mr-3">
                    {course.course}
                  </h3>
                  <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                
                <div className="flex items-center text-sm text-academic-blue mb-1">
                  <Users size={14} className="mr-1" />
                  <span>{course.role}</span>
                </div>
                
                <div className="text-sm text-academic-gray">
                  {course.institution}
                </div>
              </div>
              
              <div className="flex items-center text-sm text-academic-gray ml-4">
                <Calendar size={14} className="mr-1" />
                <span>{course.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teaching