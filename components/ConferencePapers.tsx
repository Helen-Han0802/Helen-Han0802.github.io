import { Presentation, Users, Award, MapPin } from 'lucide-react'

const ConferencePapers = () => {
  const papers = [
    {
      title: "GenAI for (Social) Science: Customer Behavior Modeling in a Retail Bank",
      authors: ["Han, Xuewen", "Xu, Sean Xin", "Zhang, Kunpeng"],
      presentations: [
        { venue: "2024 Conference on Information Systems and Technology", location: "Seattle, US" },
        { venue: "2024 China Association Information Systems", location: "Tianjin, China", award: "Best paper" },
        { venue: "The 4th AIS SIG DITE Paper Development Workshop", location: "Cleveland, US" },
        { venue: "The 9th International Conference on Smart Finance", location: "Hefei, China" }
      ]
    },
    {
      title: "Enhancing Investment Analysis: Optimizing AI-Agent Collaboration in Financial Research",
      authors: ["Han, Xuewen", "Wang, Neng", "Che, Shangkun", "Yang, Hongyang", "Zhang, Kunpeng", "Xu, Sean Xin"],
      presentations: [
        { venue: "The 5th ACM International Conference on AI in Finance", location: "New York, US" }
      ]
    },
    {
      title: "IoT and Wearable Devices-enhanced Information Provision of AR Glasses: A Multi-modal Analysis in Aviation Industry",
      authors: ["Han, Xuewen", "Li, Ting", "Xu, Sean Xin", "Yang, Zherui", "Yin, Zhitao", "Zhang, Kunpeng"],
      presentations: [
        { venue: "2023 International Conference on Information Systems", location: "Hyderabad, India", award: "Best paper nominee" },
        { venue: "2023 China Association Information Systems", location: "Hangzhou, China", award: "Best paper" }
      ]
    },
    {
      title: "Interpretable Text Embedding via Generative AI Models",
      authors: ["Han, Xuewen", "Xu, Sean Xin", "Zhang, Kunpeng"],
      presentations: [
        { venue: "2024 BizAI Conference", location: "UT Dallas, US" },
        { venue: "2023 China Association Information Systems", location: "Hangzhou, China" }
      ]
    },
    {
      title: "A Transformer-based Joint Representation Learning for Customer Purchase Intention Prediction",
      authors: ["Han, Xuewen", "Song, Qingping", "Xu, Sean Xin", "Zhang, Kunpeng"],
      presentations: [
        { venue: "2023 Conference on Information Systems and Technology", location: "Arizona, US" },
        { venue: "2023 China Summer Workshop on Information Management", location: "Changsha, China" }
      ]
    },
    {
      title: "How does Augmented Reality (AR) Improve Workers' Performance?",
      authors: ["Yang, Zherui", "Li, Ting", "Han, Xuewen", "Xu, Sean Xin", "Yin, Zhitao"],
      presentations: [
        { venue: "2024 Workshop on Information Systems and Economics", location: "Bangkok, Thailand" },
        { venue: "2023 Decision Science Institute 52nd Annual Conference", location: "Texas, US" },
        { venue: "2022 Institute for Operations Research and the Management Sciences", location: "Indianapolis, US" },
        { venue: "2022 China Summer Workshop on Information Management", location: "Ningbo, China" },
        { venue: "2022 Symposium on Statistical Challenges in Electronic Commerce Research", location: "Madrid, Spain" }
      ]
    },
    {
      title: "Gig Economy Regulation and Financing for Entrepreneurship: Evidence from the Regulations of Transportation Network Companies in the US",
      authors: ["Han, Xuewen", "Xu, Sean Xin", "Yin, Zhitao"],
      presentations: [
        { venue: "2021 China Association Information Systems", location: "Changsha, China" }
      ]
    }
  ]

  return (
    <section>
      <div className="flex items-center mb-8">
        <Presentation className="text-academic-blue mr-3" size={32} />
        <h2 className="font-display text-3xl font-bold text-academic-navy">
          Conference Papers
        </h2>
      </div>

      <div className="space-y-8">
        {papers.map((paper, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-200">
            <div className="mb-4">
              <h3 className="font-semibold text-lg text-academic-navy leading-tight mb-3">
                {paper.title}
              </h3>
              
              <div className="flex items-center text-sm text-academic-gray mb-4">
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
            </div>

            <div className="space-y-3">
              <h4 className="font-medium text-academic-navy mb-2">Presentations:</h4>
              {paper.presentations.map((presentation, pIndex) => (
                <div key={pIndex} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center">
                    <MapPin size={14} className="text-academic-gray mr-2 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-academic-navy text-sm">
                        {presentation.venue}
                      </div>
                      <div className="text-xs text-academic-gray">
                        {presentation.location}
                      </div>
                    </div>
                  </div>
                  {presentation.award && (
                    <div className="flex items-center">
                      <Award size={14} className="text-accent-gold mr-1" />
                      <span className="text-xs font-medium text-accent-gold">
                        {presentation.award}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ConferencePapers