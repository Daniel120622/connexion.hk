// src/app/local-immigration/page.tsx
import React from 'react';

export default function LocalImmigrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">Local Immigration</h1>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/28924939/pexels-photo-28924939/free-photo-of-stunning-view-of-hong-kong-skyline-in-daylight.jpeg"
            alt="Stunning Hong Kong skyline in daylight"
            className="w-full h-full object-cover brightness-[0.6] scale-105 transition-transform duration-1000 hover:scale-110"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Local Immigration Schemes in Hong Kong
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            Discover tailored pathways to residency, work, investment, and a new life in Hong Kong.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Getting to know your background and needs is our first and most important step. Through careful listening and expert analysis, we enhance your application success rate and identify the best opportunities for you.
          </p>

          {/* Gallery - Grouped Visuals */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Visual Insights into Hong Kong Immigration</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/6875833/pexels-photo-6875833.jpeg"
                  alt="Modern Hong Kong business district drone view"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://day1cpt.org/hs-fs/hubfs/Imported_Blog_Media/group-four-south-asian-men-s-posed-business-meeting-cafe-indians-together-sign-important-documents-contract-study-work%20(1)-Nov-03-2023-01-49-04-3401-PM.jpg?width=2723&height=1812&name=group-four-south-asian-men-s-posed-business-meeting-cafe-indians-together-sign-important-documents-contract-study-work%20(1)-Nov-03-2023-01-49-04-3401-PM.jpg"
                  alt="Professional team signing immigration documents"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://cdn.prod.website-files.com/646b885fb77e91869c5bb3cd/67ffc546c17f7f120c8eb2f5_shutterstock_2356901177.jpg"
                  alt="Happy family starting new life in a new city"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://www.financestrategists.com/uploads/Hong-Kong-Monetary-Authority-HKMA-Investment-Portfolio-and-Hong-Kongs-Economy.png"
                  alt="Hong Kong investment portfolio and financial assets"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://day1cpt.org/hs-fs/hubfs/Imported_Blog_Media/kenny-eliason-1-aA2Fadydc-unsplash%20(1)-Nov-03-2023-01-54-05-6712-PM.jpg?width=2611&height=1741&name=kenny-eliason-1-aA2Fadydc-unsplash%20(1)-Nov-03-2023-01-54-05-6712-PM.jpg"
                  alt="Professional consultants in discussion"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Scroll horizontally to explore more visuals</p>
          </div>
        </div>
      </section>

      {/* Interactive Schemes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Explore Hong Kong Immigration Pathways
          </h2>

          <div className="space-y-3">
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>Top Talent Pass Scheme</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>The Top Talent Pass Scheme attracts high-caliber global talent with substantial work experience or top university degrees (annual income ≥ HK$2.5M or eligible university graduates).</p>
                <p>Fast-track: Approval often in days to weeks when conditions are met – one of the quickest residency routes in Hong Kong.</p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>New Capital Investment Entrant Scheme</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>Launched March 2024 – targets high-net-worth individuals to boost Hong Kong's economy.</p>
                <p>Requirements: ≥ HK$30M net assets (24 months), invest HK$30M (HK$27M in permissible assets + HK$3M in CIES Portfolio for innovation/tech). Grants residence visa upon completion.</p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>General Employment Policy (GEP)</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>For overseas Chinese with PRC passports and ≥1 year overseas residence. Targets those with unique skills not readily available in HK.</p>
                <p>Quota-free, requires job offer matching market remuneration and qualifications/experience.</p>
              </div>
            </details>

            {/* Add similar <details> blocks for ASMTP, EEEN, QMAS, and Other Services */}
            {/* Example for QMAS */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>Quality Migrant Admission Scheme (QMAS)</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>Quota-based, points-tested scheme for highly skilled/talented individuals. No job offer required pre-entry.</p>
                <p>Bring spouse & children under 18 (self-supported). Compete via General or Achievement-based Points Test.</p>
              </div>
            </details>

            {/* Other Services as a final accordion */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>Other Support Services</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Dependents Visa</strong> – For family after main visa approval</li>
                  <li><strong>Visa Extensions</strong> – Reminders & full assistance</li>
                  <li><strong>Permanent Identity Card Verification</strong> – After 7 years ordinary residence</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Begin Your Hong Kong Journey Today
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
            Let Connexions assess your profile and guide you to the perfect immigration pathway.
          </p>
          <button className="bg-white text-teal-700 font-bold py-4 px-10 rounded-full text-xl hover:bg-teal-50 transition-colors shadow-lg">
            Contact Us Now
          </button>
        </div>
      </section>
    </div>
  );
}