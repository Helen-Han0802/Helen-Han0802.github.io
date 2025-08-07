'use client'

import { useEffect, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            <div>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-academic-navy leading-tight">
                Xuewen Han (韩雪雯)
              </h1>
              <p className="text-xl sm:text-2xl text-academic-gray mt-4 font-light">
                Assistant Professor in Information, Technology and Innovation
              </p>
              <p className="text-lg text-academic-blue font-medium mt-2">
                Shanghai Jiao Tong University, Shanghai
              </p>
            </div>

            <div className="prose-academic">
              <p className="text-lg leading-relaxed">
                I am an Assistant Professor in the Department of Information, Technology and Innovation at the Antai College of Economics and Management, Shanghai Jiao Tong University. I received my Ph.D. in Management Science and Engineering from Tsinghua University in 2025, under the supervision of Professor Sean Xin Xu. Prior to that, I earned dual bachelor’s degrees in Management and Economics from Jilin University in 2019.
             My research lies at the intersection of
                <span className="font-semibold text-academic-blue"> Fintech</span>, 
                <span className="font-semibold text-academic-blue"> Digital Innovation</span>, and 
                <span className="font-semibold text-academic-blue"> Human-AR Interaction </span> 
                I leverage cutting-edge generative AI and machine learning methods to investigate how emerging technologies are transforming financial services and user experiences.
              </p>
            </div>



            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a
                href="/research"
                className="inline-flex items-center justify-center px-8 py-4 bg-academic-blue text-white font-medium rounded-lg hover:bg-academic-navy transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                View Research
              </a>
              <a
                href="/cv.pdf?v=2024"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-academic-blue text-academic-blue font-medium rounded-lg hover:bg-academic-blue hover:text-white transition-colors duration-200"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* Right Column - Profile Photo Slot */}
          <div className={`relative mt-8 lg:-mt-14 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="relative">
              {/* Profile photo */}
              <div className="w-80 h-120 mx-auto rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src="/profile.jpg" 
                  alt="Xuewen Han" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    e.currentTarget.style.display = 'none';
                    const nextEl = e.currentTarget.nextElementSibling as HTMLElement;
                    if (nextEl) nextEl.style.display = 'flex';
                  }}
                />
                {/* Fallback placeholder */}
                <div className="w-full h-full bg-gray-200 rounded-2xl shadow-lg flex items-center justify-center border-2 border-dashed border-gray-300" style={{display: 'none'}}>
                  <div className="text-center text-gray-500">
                    <div className="text-4xl mb-2">📷</div>
                    <div className="text-sm">Profile Photo</div>
                    <div className="text-xs">Add profile.jpg to /public folder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to content"
      >
        <ChevronDown size={32} className="text-academic-gray hover:text-academic-blue transition-colors" />
      </button>
    </section>
  )
}

export default Hero