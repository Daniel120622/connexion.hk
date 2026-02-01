// src/app/[locale]/services/BVI-company/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BVI & Overseas Company Formation | Connexions HK',
  description: 'Expert assistance in setting up BVI companies and other offshore structures for global business, asset protection and tax efficiency.',
};

export default function BVICompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg"
            alt="Offshore financial and legal concept"
            className="w-full h-full object-cover brightness-50 scale-105"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            BVI & Overseas Company Formation
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            Fast, confidential and cost-effective offshore company setup in the British Virgin Islands and other jurisdictions.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Why Choose BVI for Your Overseas Company?
            </h2>

            <p>
              The British Virgin Islands (BVI) remains one of the most popular and respected offshore jurisdictions in the world due to its:
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-6 mb-10">
              <li>High level of confidentiality and privacy</li>
              <li>No corporate tax, capital gains tax, inheritance tax or withholding tax</li>
              <li>Fast incorporation (usually within 1–2 working days)</li>
              <li>Flexible company structure and low maintenance requirements</li>
              <li>Strong international reputation and acceptance by banks worldwide</li>
              <li>English common law legal system</li>
              <li>No requirement for local director or shareholder</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Our BVI Company Formation Package Includes
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold mb-4 text-[#3ac9d9]">Standard Package</h4>
                <ul className="space-y-2">
                  <li>• Company incorporation & government fees</li>
                  <li>• Registered agent & registered office for 1 year</li>
                  <li>• Certificate of Incorporation</li>
                  <li>• Memorandum & Articles of Association</li>
                  <li>• Share certificate & company seal</li>
                  <li>• Full corporate kit (minute book, registers, etc.)</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold mb-4 text-[#3ac9d9]">Premium / Tailored Package</h4>
                <ul className="space-y-2">
                  <li>• Everything in Standard Package</li>
                  <li>• Nominee director/shareholder services (if required)</li>
                  <li>• Bank account opening assistance</li>
                  <li>• Apostille & document legalisation</li>
                  <li>• Ongoing compliance & renewal service</li>
                  <li>• Customized structuring advice</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
              >
                Get Your BVI Company Quote Today
              </a>
              <p className="mt-4 text-gray-600">
                Most clients receive a detailed proposal within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}