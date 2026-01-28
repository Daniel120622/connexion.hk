// src/app/oversea-immigration/page.tsx
import React from 'react';

export default function OverseasImmigrationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="container mx-auto py-4">
          {null}
        </div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg"
            alt="Aerial view of tropical paradise island in Vanuatu"
            className="w-full h-full object-cover brightness-[0.6] scale-105 transition-transform duration-1000 hover:scale-110"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Overseas Immigration & Citizenship by Investment
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            Fast-track to second citizenship, tax advantages, and global mobility through trusted programs in Vanuatu and St Kitts & Nevis.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            Understanding your background and needs is the crucial first step. Through attentive listening and expert analysis, we make precise recommendations to maximize your application success and secure the optimal investment or citizenship opportunity.
          </p>

          {/* Gallery - Visual Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Discover the Appeal of Overseas Citizenship</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/9482126/pexels-photo-9482126.jpeg"
                  alt="Aerial view of pristine island in Vanuatu"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/5769835/pexels-photo-5769835.jpeg"
                  alt="Stunning Caribbean coastline of St Kitts & Nevis"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/23/St.Kitts_and_Nevis_-Two_Islands_One_Paradise.jpg"
                  alt="Paradise islands of St Kitts and Nevis"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://liveandletsfly.com/wp-content/uploads/2020/08/Buy-EU-Citizenship.jpg"
                  alt="Citizenship by investment passport and documents"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://liveandletsfly.com/wp-content/uploads/2020/07/Visa-free-US-Passport-holders.png"
                  alt="World map showing visa-free travel access"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Scroll to explore tropical lifestyles, passports, and global mobility</p>
          </div>
        </div>
      </section>

      {/* Interactive Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Overseas Citizenship Solutions
          </h2>

          <div className="space-y-6">
            {/* Vanuatu Citizenship by Contribution */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>Citizenship by Contribution – Vanuatu (VCP)</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>Vanuatu, a member of the British Commonwealth, offers a robust legal framework and tax-friendly environment with no income tax, capital gains tax, or inheritance tax.</p>
                <p>Upon naturalization, you gain full citizenship rights, including residency, work, and living privileges in this offshore tax haven. Benefits include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Low entry threshold and straightforward process</li>
                  <li>Dual citizenship allowed</li>
                  <li>Free education and medical services</li>
                  <li>Visa-free access to approximately 125 countries (including UK, Malaysia, Hong Kong, Singapore)</li>
                </ul>
                <p className="mt-4 font-medium">Fast-track: Passport in as little as 30 days. We handle assessment, application, government contribution, and naturalization support.</p>
              </div>
            </details>

            {/* St Kitts & Nevis Citizenship */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>St Kitts & Nevis Citizenship by Investment</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>Established in 1984, this is the world's oldest and most stable citizenship-by-investment program. Successful applicants receive citizenship, a passport, and residency rights.</p>
                <p>We guide you and your family through the full application process. Key advantages:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Dual citizenship recognized</li>
                  <li>Visa-free travel to over 150 countries (including UK, Singapore, Macao)</li>
                  <li>No taxes on worldwide income, capital gains, gifts, inheritance, or wealth</li>
                  <li>Offshore business opportunities and federal citizenship benefits</li>
                </ul>
                <p className="mt-4 font-medium">Timeline: Permanent residency and citizenship in approximately 3 months.</p>
              </div>
            </details>

            {/* Travel & Resident Visas */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>Travel & Resident Visas to Other Countries</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>We offer comprehensive visa services, including tourist visas, long-term resident visas, and applications to various countries worldwide.</p>
                <p>Whether for travel, business, study, or relocation, our team tailors solutions to your goals and background.</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-10 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Unlock Your Global Future with Connexions
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
            From tax optimization to second passports and visa-free travel – let us secure the best path for you and your family.
          </p>
          <button className="bg-white text-teal-700 font-bold py-2 px-10 rounded-full text-xl hover:bg-teal-50 transition-colors shadow-lg">
            Get Your Personalized Assessment Today
          </button>
        </div>
      </section>
    </div>
  );
}