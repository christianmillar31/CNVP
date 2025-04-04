// Trigger Netlify rebuild
"use client"

import { Navigation } from "@/components/navigation"
import Image from "next/image"
import { Playfair_Display } from "next/font/google"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

const playfair = Playfair_Display({ subsets: ["latin"] })

export default function Home() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center bg-[#f1ebdb] text-gray-900 overflow-hidden">
          <motion.div 
            style={{ y }}
            className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#f1ebdb]/50 to-transparent" />
          
          {/* Grain texture overlay */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiLz48L3N2Zz4=')] animate-grain" />
          </div>

          <motion.div 
            className="container mx-auto px-4 z-10 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="flex justify-center mb-8"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative w-64 h-64 md:w-96 md:h-96">
                <Image
                  src="/images/logo.png"
                  alt="Cardinal North Valuation Logo"
                  width={384}
                  height={384}
                  className="transition-all duration-500"
                  priority
                />
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Delivering precise business valuations with decades of expertise and unwavering commitment to excellence
            </motion.p>

            <motion.a 
              href="#contact" 
              className="inline-block bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Get Started
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0 h-32"
            style={{ opacity }}
          >
            <div className="h-full bg-gradient-to-t from-[#f1ebdb] to-transparent" />
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/dots.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900">
                Our Services
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                <div className="w-14 h-14 bg-red-600 rounded-lg mb-6 flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Business Valuation</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your business's worth for sales, mergers,
                  acquisitions, or strategic planning.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                <div className="w-14 h-14 bg-red-600 rounded-lg mb-6 flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Risk & Insurance</h3>
                <p className="text-gray-600">
                  Expert assessment of business risks and insurance needs to protect
                  your assets and operations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 border border-gray-100">
                <div className="w-14 h-14 bg-red-600 rounded-lg mb-6 flex items-center justify-center text-white">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Due Diligence</h3>
                <p className="text-gray-600">
                  Thorough investigation and analysis of business operations, financials, and risks
                  to support informed investment and acquisition decisions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900">
                Our Team
              </span>
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-red-600 rounded-full mb-6 mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  MP
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Managing Partner</h3>
                <p className="text-red-600 font-medium text-center mb-4">Founder & Lead Strategist</p>
                <p className="text-gray-600 text-center">
                  With over 40 years of experience in business valuation, risk and insurance,
                  our managing partner leads our strategic direction and client relationships.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-red-600 rounded-full mb-6 mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  DD
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Due Diligence Director</h3>
                <p className="text-red-600 font-medium text-center mb-4">Co-Founder & CPA</p>
                <p className="text-gray-600 text-center">
                  As a Certified Public Accountant, our due diligence director specializes in 
                  financial due diligence, risk assessment, and comprehensive transaction analysis.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="w-20 h-20 bg-red-600 rounded-full mb-6 mx-auto flex items-center justify-center text-white text-2xl font-bold">
                  FD
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center">Financial Director</h3>
                <p className="text-red-600 font-medium text-center mb-4">Co-Founder & CPA</p>
                <p className="text-gray-600 text-center">
                  Our financial director specializes in audit and Financial Planning & Analysis (FP&A),
                  ensuring comprehensive financial insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white relative">
          <div className="absolute inset-0 bg-[url('/images/dots.svg')] opacity-5"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900">
                About Us
              </span>
            </h2>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Cardinal North Valuation brings decades of combined experience to every client 
                engagement. Our team of certified valuation experts is committed to delivering 
                accurate, defensible valuations that stand up to scrutiny.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                We understand that each business is unique, which is why we take a
                personalized approach to every valuation project. Our methodologies are
                rigorous, our analysis is thorough, and our reports are clear and
                comprehensive.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-100/50 to-transparent"></div>
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl font-bold mb-16 text-center">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-900">
                Contact Us
              </span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form 
                  name="contact" 
                  method="POST" 
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  className="space-y-6"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <p className="hidden">
                    <label>
                      Don't fill this out if you're human: <input name="bot-field" />
                    </label>
                  </p>
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-700 hover:to-red-800 transition-all transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                  </h3>
                  <p className="text-gray-600 ml-8">
                    Thousand Oaks, CA 91360
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Contact
                  </h3>
                  <p className="text-gray-600 ml-8">
                    Email: info@cardinalvaluation.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <svg className="w-6 h-6 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Hours
                  </h3>
                  <p className="text-gray-600 ml-8">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Cardinal North Valuation. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
