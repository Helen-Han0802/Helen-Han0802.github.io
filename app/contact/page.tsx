import { Metadata } from 'next'
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact - Xuewen Han',
  description: 'Get in touch with Xuewen Han for academic collaboration, research opportunities, or professional inquiries',
}

export default function Contact() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-5xl font-bold text-academic-navy mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-academic-gray max-w-3xl mx-auto">
            I'm always interested in discussing research opportunities, academic collaboration, 
            or potential projects. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-academic-navy mb-6">
                Contact Information
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-academic-blue/10 rounded-lg flex items-center justify-center">
                    <Mail className="text-academic-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-academic-navy">Email</h3>
                    <a 
                      href="mailto:hanxuewen@sjtu.edu.cn" 
                      className="text-academic-blue hover:underline"
                    >
                      hanxuewen@sjtu.edu.cn
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-academic-blue/10 rounded-lg flex items-center justify-center">
                    <Phone className="text-academic-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-academic-navy">Phone</h3>
                    <p className="text-academic-gray">+86-15068511698</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-academic-blue/10 rounded-lg flex items-center justify-center">
                    <MapPin className="text-academic-blue" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-academic-navy">Location</h3>
                    <p className="text-academic-gray">Shanghai, China</p>
                    <p className="text-sm text-academic-gray">Shanghai Jiao Tong University</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div>
              <h2 className="font-display text-2xl font-bold text-academic-navy mb-6">
                Research Interests
              </h2>
              <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-academic-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-academic-blue font-bold">F</span>
                    </div>
                    <span className="text-sm font-medium text-academic-navy">Fintech</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-academic-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-academic-blue font-bold">D</span>
                    </div>
                    <span className="text-sm font-medium text-academic-navy">Digital Innovation</span>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-academic-blue/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <span className="text-academic-blue font-bold">A</span>
                    </div>
                    <span className="text-sm font-medium text-academic-navy">Human-AR</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Best Times to Contact */}
            <div>
              <h2 className="font-display text-2xl font-bold text-academic-navy mb-4">
                Best Times to Contact
              </h2>
              <div className="bg-white rounded-lg border border-gray-200 p-6">
                <p className="text-academic-gray mb-4">
                  I typically respond to emails within 24-48 hours during business days.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-academic-navy font-medium">Beijing Time (CST):</span>
                    <span className="text-academic-gray">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-academic-navy font-medium">Preferred Contact:</span>
                    <span className="text-academic-gray">Email</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div>
            <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <MessageSquare className="text-academic-blue mr-3" size={28} />
                <h2 className="font-display text-2xl font-bold text-academic-navy">
                  Quick Message
                </h2>
              </div>

              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-academic-navy mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-blue focus:border-transparent outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-academic-navy mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-blue focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-academic-navy mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-blue focus:border-transparent outline-none transition-colors"
                    placeholder="Brief subject line"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-academic-navy mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-academic-blue focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-academic-blue text-white font-medium rounded-lg hover:bg-academic-navy transition-colors duration-200 shadow-lg hover:shadow-xl"
                >
                  <Send size={20} className="mr-2" />
                  Send Message
                </button>
              </form>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-academic-blue">
                  <strong>Note:</strong> This form currently serves as a template. 
                  For now, please send emails directly to my address above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}