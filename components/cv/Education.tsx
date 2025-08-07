import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const Education = () => {
  const education = [
    {
      institution: "TSINGHUA UNIVERSITY",
      location: "Beijing, China",
      degree: "Ph.D., Information Systems",
      advisor: "Advisor: Sean Xin Xu, Ph.D.",
      period: "September 2019 - June 2025",
      current: true
    },
    {
      institution: "HONG KONG UNIVERSITY OF SCIENCE AND TECHNOLOGY",
      location: "Hong Kong, China",
      degree: "Research Assistant",
      period: "January 2022 - December 2022",
      current: false
    },
    {
      institution: "JILIN UNIVERSITY",
      location: "Jilin, China",
      degree: "B.M. & B.E. in Management & Economics",
      period: "September 2015 - June 2019",
      current: false
    }
  ]

  return (
    <section>
      <div className="flex items-center mb-8">
        <GraduationCap className="text-academic-blue mr-3" size={32} />
        <h2 className="font-display text-3xl font-bold text-academic-navy">
          Education
        </h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  <h3 className="font-bold text-lg text-academic-navy">
                    {edu.institution}
                  </h3>
                  {edu.current && (
                    <span className="ml-3 inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="flex items-center text-sm text-academic-gray mb-2">
                  <MapPin size={14} className="mr-1" />
                  <span>{edu.location}</span>
                </div>
                
                <div className="text-academic-blue font-medium mb-1">
                  {edu.degree}
                </div>
                
                {edu.advisor && (
                  <div className="text-sm text-academic-gray mb-2">
                    {edu.advisor}
                  </div>
                )}
              </div>
              
              <div className="flex items-center text-sm text-academic-gray lg:ml-4 mt-2 lg:mt-0">
                <Calendar size={14} className="mr-1" />
                <span>{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education