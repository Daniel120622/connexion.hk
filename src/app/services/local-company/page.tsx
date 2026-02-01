// src/app/[locale]/services/local-company/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hong Kong Limited Company Formation | Connexions HK',
  description: 'Fast and professional Hong Kong limited company registration service – full setup, bank account assistance and ongoing compliance support.',
};

export default function LocalCompanyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-teal-900/70 to-blue-900/60 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1554224155-6726b3ff3f36"
            alt="Hong Kong business district skyline"
            className="w-full h-full object-cover brightness-50 scale-105"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Hong Kong Limited Company Formation
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            Set up your Hong Kong company quickly, compliantly and cost-effectively.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Benefits of a Hong Kong Limited Company
            </h2>

            <p>
              Hong Kong remains one of the most attractive jurisdictions for international business due to its:
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-6 mb-10">
              <li>Simple 0% tax on foreign-sourced income</li>
              <li>Strong international reputation and banking system</li>
              <li>English common law legal system</li>
              <li>Fast incorporation (1–3 working days)</li>
              <li>No minimum capital requirement</li>
              <li>100% foreign ownership allowed</li>
              <li>Excellent double taxation treaty network</li>
              <li>Strategic location as gateway to China and Asia</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Our Hong Kong Company Formation Package Includes
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold mb-4 text-[#3ac9d9]">Standard Package</h4>
                <ul className="space-y-2">
                  <li>• Company incorporation & government fees</li>
                  <li>• Business Registration Certificate</li>
                  <li>• Company secretary appointment (1 year)</li>
                  <li>• Registered office address (1 year)</li>
                  <li>• Full corporate kit (seals, registers, certificates)</li>
                  <li>• Share certificates & initial board resolutions</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold mb-4 text-[#3ac9d9]">Complete Package</h4>
                <ul className="space-y-2">
                  <li>• Everything in Standard Package</li>
                  <li>• Bank account opening assistance (local & international banks)</li>
                  <li>• Trademark registration advice</li>
                  <li>• First-year compliance & filing support</li>
                  <li>• Document apostille & legalisation (if needed)</li>
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
              >
                Start Your HK Company Today
              </a>
              <p className="mt-4 text-gray-600">
                Most companies are ready within 1–3 working days.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}