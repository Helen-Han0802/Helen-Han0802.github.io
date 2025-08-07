import { Mail, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-academic-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-accent-gold" />
                <a href="mailto:hanxuewen@sjtu.edu.cn" className="hover:text-accent-gold transition-colors">
                  hanxuewen@sjtu.edu.cn
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-accent-gold" />
                <span>Shanghai, China</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-accent-gold">🏛️</span>
                <a href="https://www.sem.tsinghua.edu.cn/" className="hover:text-accent-gold transition-colors" target="_blank" rel="noopener noreferrer">
                  University Homepage
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a href="/research" className="block hover:text-accent-gold transition-colors">Research</a>
              <a href="/cv" className="block hover:text-accent-gold transition-colors">Curriculum Vitae</a>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="font-display text-xl font-semibold mb-4">About</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ph.D. Candidate in Information Systems at Tsinghua University, 
              focusing on Fintech, Digital Innovation, and Human-AR Interaction 
              using advanced AI and machine learning techniques.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Xuewen Han. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer