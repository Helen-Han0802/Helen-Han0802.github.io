import { Metadata } from 'next'
import { Download, GraduationCap, Award, BookOpen, DollarSign, Users, Heart } from 'lucide-react'
import Education from '@/components/cv/Education'
import Awards from '@/components/cv/Awards'
import Grants from '@/components/cv/Grants'
import Teaching from '@/components/cv/Teaching'
import Service from '@/components/cv/Service'

export const metadata: Metadata = {
  title: 'CV - Xuewen Han',
  description: 'Complete curriculum vitae of Xuewen Han, Ph.D. Candidate in Information Systems at Tsinghua University',
}

export default function CV() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-academic-navy mb-6">
            Curriculum Vitae
          </h1>
          <div className="flex justify-center">
            <a 
              href="/cv.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-academic-navy transition-colors duration-200 shadow-lg"
            >
              <Download size={20} className="mr-2" />
              Download PDF
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-academic-navy mb-4">
              Xuewen Han
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-academic-gray">
              <div>
                <strong>Email:</strong> hanxuewen@sjtu.edu.cn
              </div>
              <div>
                <strong>University:</strong> <a href="https://www.acem.sjtu.edu.cn/faculty/hanxuewen.html" className="text-academic-blue hover:underline" target="_blank" rel="noopener noreferrer">SJTU Homepage</a>
              </div>
              <div>
                <strong>Location:</strong> Shanghai, China
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-16">
          <Education />
          <Awards />
          <Grants />
          <Teaching />
          <Service />
        </div>
      </div>
    </div>
  )
}