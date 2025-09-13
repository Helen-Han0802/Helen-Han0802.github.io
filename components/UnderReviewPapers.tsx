import { FileText, Users, ExternalLink } from 'lucide-react'

const UnderReviewPapers = () => {
  const papers = [
    {
      title: "The Democratization Dilemma: Scaling up Crowdfunding Campaigns and its Mixed Implications for Venture Capital Investors",
      authors: ["Han, Xuewen", "Xu, Sean Xin", "Yin, Zhitao"],
      journal: "Information Systems Research (UTD 24)",
      status: "Third-round revision",
      statusColor: "bg-green-100 text-green-700"
    },
    {
      title: "Legal Shields, Hidden Costs: The Dual Impact of Anti‑Patent‑Troll Laws on IT Firm Innovation",
      authors: ["Han, Xuewen", "Yin, Zhitao", "Rai, Arun"],
      journal: "Information Systems Research (UTD 24)",
      status: "Third-round revision",
      statusColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "Interpretable Text Embedding via Generative AI Models",
      authors: ["Han, Xuewen", "Cai, Yao", "Xu, Sean Xin", "Zhang, Kunpeng"],
      journal: "MIS Quarterly (UTD 24)",
      status: "Third-round revision",
      statusColor: "bg-blue-100 text-blue-700"
    },
    {
      title: "Financial Sequence Data Modeling for Purchase Intention Prediction: A Theory-guided Transformer-based Approach",
      authors: ["Han, Xuewen", "Song, Qingping", "Xu, Sean Xin", "Zhang, Kunpeng"],
      journal: "MIS Quarterly (UTD 24)",
      status: "Second-round revision",
      statusColor: "bg-blue-100 text-blue-700"
    }
  ]

  return (
    <section>
      <div className="flex items-center mb-8">
        <FileText className="text-academic-blue mr-3" size={32} />
        <h2 className="font-display text-3xl font-bold text-academic-navy">
          Under Review Papers
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
                  {paper.journal}
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

export default UnderReviewPapers