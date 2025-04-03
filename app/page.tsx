import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        {/* Services Section */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12">Our Services</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Business Valuation</h3>
                <p className="text-gray-600">
                  Comprehensive analysis of your business's worth for sales, mergers,
                  acquisitions, or strategic planning.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Risk & Insurance</h3>
                <p className="text-gray-600">
                  Expert assessment of business risks and insurance needs to protect
                  your assets and operations.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Sustainability & Audit</h3>
                <p className="text-gray-600">
                  Comprehensive sustainability consulting and financial audit services
                  to ensure compliance and growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Managing Partner</h3>
                <p className="text-gray-600 font-medium">Founder & Lead Strategist</p>
                <p className="text-gray-600">
                  With over 40 years of experience in business valuation, risk and insurance,
                  our managing partner leads our strategic direction and client relationships.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Sustainability Director</h3>
                <p className="text-gray-600 font-medium">Co-Founder & CPA</p>
                <p className="text-gray-600">
                  As a Certified Public Accountant, our sustainability director specializes in 
                  sustainability consulting and audit services.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Financial Director</h3>
                <p className="text-gray-600 font-medium">Co-Founder & CPA</p>
                <p className="text-gray-600">
                  Our financial director specializes in audit and Financial Planning & Analysis (FP&A),
                  ensuring comprehensive financial insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12">About Us</h2>
            <div className="max-w-3xl">
              <p className="text-gray-600 mb-6">
                Cardinal North Valuation brings decades of combined experience to every client 
                engagement. Our team of certified valuation experts is committed to delivering 
                accurate, defensible valuations that stand up to scrutiny.
              </p>
              <p className="text-gray-600">
                We understand that each business is unique, which is why we take a
                personalized approach to every valuation project. Our methodologies are
                rigorous, our analysis is thorough, and our reports are clear and
                comprehensive.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-12">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-500 focus:ring-gray-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Location</h3>
                  <p className="text-gray-600">
                    Thousand Oaks, CA 91360
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Contact</h3>
                  <p className="text-gray-600">
                    Phone: (805) 555-7890<br />
                    Email: info@cardinalnorthvaluation.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM<br />
                    Saturday - Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Cardinal North Valuation. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}
