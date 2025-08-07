import { Edit, Users } from 'lucide-react'

const WorkingPapers = () => {
  const papers = [
    {
      title: "Generative AI for Modeling Customer Behavior in Retail Banking: Exploring Effective Intervention Strategies",
      authors: ["Han, Xuewen", "Xu, Sean Xin", "Zhang, Kunpeng"],
      journal: "Marketing Science",
      status: "To be submitted",
      statusColor: "bg-yellow-100 text-yellow-700"
    },
    {
      title: "How Augmented Reality (AR) Improves Workers' Task Performance: Airplane Maintenance With Field Evidence",
      authors: ["Yang, Zherui", "Li, Ting", "Han, Xuewen", "Xu, Sean Xin", "Yin, Zhitao"],
      journal: "Management Science",
      status: "To be submitted",
      statusColor: "bg-yellow-100 text-yellow-700"
    }
  ]

  return (
    <section>
      <div className="flex items-center mb-8">
        <Edit className="text-academic-blue mr-3" size={32} />
        <h2 className="font-display text-3xl font-bold text-academic-navy">
          Working Papers
        </h2>
      </div>

      <div className="space-y-6">
        {papers.map((paper, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-academic-navy leading-tight mb-3">
                  {paper.title}
                </h3>
                
                <div className="flex items-center text-sm text-academic-gray mb-2">
                  <Users size={16} className="mr-2" />
                  <span>
                    {paper.authors.map((author, idx) => (
                      <span key={idx}>
                        {author === "Han, Xuewen" ? (
                          <strong className="text-academic-blue">{author}</strong>
                        ) : (
                          author
                        )}
                        {idx < paper.authors.length - 1 && "; "}
                      </span>
                    ))}
                  </span>
                </div>
                
                <div className="text-sm font-medium text-academic-blue mb-3">
                  Target: {paper.journal}
                </div>
              </div>
              
              <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${paper.statusColor} ml-4 flex-shrink-0`}>
                {paper.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WorkingPapers