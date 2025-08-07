import { DollarSign, Calendar, Users } from 'lucide-react'

const Grants = () => {
  const grants = [
    {
      title: "Beijing Natural Science Foundation Youth Project",
      number: "No.04150100824",
      role: "Participant",
      funding: "200,000 RMB",
      period: "2024.01-2025.06",
      status: "Ended"
    },
    {
      title: "Tsinghua University School of Economics and Management Research Fund Project",
      number: "No.2023051003",
      role: "Participant",
      funding: "200,000 RMB",
      period: "2023.12-2025.11",
      status: "Ongoing"
    }
  ]

  return (
    <section>
      <div className="flex items-center mb-8">
        <DollarSign className="text-academic-blue mr-3" size={32} />
        <h2 className="font-display text-3xl font-bold text-academic-navy">
          Research Grants
        </h2>
      </div>

      <div className="space-y-6">
        {grants.map((grant, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-academic-navy mb-2">
                  {grant.title}
                </h3>
                <div className="text-sm text-academic-gray mb-1">
                  {grant.number}
                </div>
                <div className="flex items-center text-sm text-academic-blue mb-2">
                  <Users size={14} className="mr-1" />
                  <span>Role: {grant.role}</span>
                </div>
              </div>
              
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                {grant.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-academic-navy">Funding:</span>
                <span className="text-academic-gray ml-2">{grant.funding}</span>
              </div>
              <div className="flex items-center">
                <Calendar size={14} className="mr-1 text-academic-gray" />
                <span className="text-academic-gray">{grant.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Grants