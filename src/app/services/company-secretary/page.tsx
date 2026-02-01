// src/app/[locale]/services/company-secretary/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Company Secretary Services Hong Kong | Connexions HK',
  description: 'Professional company secretary services in Hong Kong – annual compliance, corporate governance, board meeting support and statutory filings.',
};

export default function CompanySecretaryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-indigo-900/70 to-blue-900/60 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Corporate documents and compliance"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Company Secretary Services
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            Ensure full compliance and smooth corporate governance for your Hong Kong company.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Professional Company Secretary Support in Hong Kong
            </h2>

            <p>
              Under the Hong Kong Companies Ordinance, every Hong Kong company is required to appoint a company secretary. We provide comprehensive, reliable and cost-effective company secretary services to help you stay compliant and focus on growing your business.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              Our Company Secretary Services Include
            </h3>

            <ul className="list-disc pl-6 space-y-3 mt-6 mb-10">
              <li>Act as your named company secretary (licensed and qualified)</li>
              <li>Prepare and file Annual Returns with the Companies Registry</li>
              <li>Maintain statutory records, registers and minute books</li>
              <li>Organize board meetings, take minutes and prepare resolutions</li>
              <li>Handle share transfers, allotments and changes in company structure</li>
              <li>Assist with change of company name, registered office or directors</li>
              <li>Advise on corporate governance best practices</li>
              <li>Provide reminders for upcoming compliance deadlines</li>
              <li>Liaise with auditors, banks and other third parties on your behalf</li>
            </ul>

            {/* CTA */}
            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
              >
                Get Your Company Secretary Proposal
              </a>
              <p className="mt-4 text-gray-600">
                Fixed annual fee – transparent pricing with no hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}