import { Heart, FileText } from 'lucide-react'

const Service = () => {
  const services = [
    {
      role: "Conference Reviewer",
      organization: "International Conference on Information Systems (ICIS)",
      years: "2025, 2024, 2022, 2021",
      type: "Conference"
    },
    {
      role: "Conference Reviewer",
      organization: "European Conference on Information Systems (ECIS)",
      years: "2024",
      type: "Conference"
    },
    {
      role: "Conference Reviewer",
      organization: "Conference on Information Systems and Technology (CIST)",
      years: "2023",
      type: "Conference"
    },
    {
      role: "Conference Reviewer",
      organization: "China Association Information Systems (CNAIS)",
      years: "2022",
      type: "Conference"
    }
  ]

  return (
    <section>
      <div className="flex items-center mb-8">
        <Heart className="text-academic-blue mr-3" size={32} />
        <h2 className="font-display text-3xl font-bold text-academic-navy">
          Academic Service
        </h2>
      </div>

      <div className="space-y-4">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-academic-blue/10 rounded-lg flex items-center justify-center mr-4">
                  <FileText className="text-academic-blue" size={20} />
                </div>
                <div>
                  <h3 className="font-semibold text-academic-navy">
                    {service.role}
                  </h3>
                  <p className="text-academic-gray text-sm">
                    {service.organization}
                  </p>
                </div>
              </div>
              
              <div className="text-right">
                <span className="inline-block px-3 py-1 bg-academic-blue/10 text-academic-blue text-sm font-medium rounded-full">
                  {service.years}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Service