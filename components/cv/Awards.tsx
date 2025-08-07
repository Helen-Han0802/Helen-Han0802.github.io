import { Award, Calendar } from 'lucide-react'

const Awards = () => {
  const awards = [
    { title: "PACIS 2024 Doctoral Consortium Participant", year: "2024", organization: "PACIS" },
    { title: "First Class Scholarship", year: "2023", organization: "Tsinghua University" },
    { title: "Greenburg Scholarship", year: "2020, 2023", organization: "Tsinghua University" },
    { title: "Second Class Scholarship", year: "2021, 2022", organization: "Tsinghua University" },
    { title: "Outstanding Bachelor Graduate", year: "2019", organization: "Jilin University" },
    { title: "First Class Academic Award", year: "2018", organization: "Jilin University" },
    { title: "Excellent Student", year: "2018", organization: "Jilin University" },
    { title: "China Aerospace Science and Technology Corporation Scholarship", year: "2018", organization: "CASC" },
    { title: "Excellence Award in 2018 China-Korea University Entrepreneurship Competition", year: "2018", organization: "Hanyang University" },
    { title: "UNIQLO Scholarship", year: "2017", organization: "Fast Retailing Co., Ltd." },
    { title: "National Scholarship", year: "2016, 2017", organization: "Ministry of Education of the People's Republic of China" },
    { title: "Third Prize in 2016 National English Competition for College Students", year: "2016", organization: "NECCS" }
  ]

  return (
    <section>
      <div className="flex items-center mb-8">
        <Award className="text-academic-blue mr-3" size={32} />
        <h2 className="font-display text-3xl font-bold text-academic-navy">
          Awards & Honors
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {awards.map((award, index) => (
          <div key={index} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-4">
                <h3 className="font-semibold text-academic-navy leading-tight mb-1">
                  {award.title}
                </h3>
                <p className="text-sm text-academic-blue font-medium">
                  {award.organization}
                </p>
              </div>
              
              <div className="flex items-center text-sm text-academic-gray flex-shrink-0">
                <Calendar size={14} className="mr-1" />
                <span>{award.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Awards