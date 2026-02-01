// src/app/[locale]/services/page.tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Services | Connexions HK',
  description: 'Professional company formation, company secretary, immigration, and business advisory services in Hong Kong and overseas.',
};

export default function ServicesOverviewPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900/80 to-teal-900/70 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2000"
            alt="Business team discussing services"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Our Professional Services
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            Tailored solutions for company formation, compliance, immigration and global business success.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            At Connexions HK, we provide end-to-end professional services to help individuals and businesses establish, operate and expand in Hong Kong and internationally. From fast-track company incorporation to ongoing compliance and immigration support — we are your trusted partner every step of the way.
          </p>
        </div>
      </section>

      {/* Service Cards – Navigation Buttons */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: HK Limited Company */}
            <Link href="/services/local-company" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/hk-limited-company.jpg"
                    alt="Hong Kong Limited Company"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    HK Limited Company
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Fast and compliant Hong Kong company registration with full setup and banking support.
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2: BVI & Overseas Company */}
            <Link href="/services/BVI-company" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/bvi-oversea-company.jpg"
                    alt="BVI Overseas Company"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    BVI & Overseas Company
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Offshore company formation in BVI and other jurisdictions for asset protection & tax efficiency.
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3: Company Secretary */}
            <Link href="/services/company-secretary" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/company-secretary.jpg"
                    alt="Company Secretary Services"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    Company Secretary
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    Professional compliance, annual filings, board support and corporate governance in Hong Kong.
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
            Contact us today for a free consultation and personalized service proposal.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-700 font-bold py-4 px-12 rounded-full text-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  );
}