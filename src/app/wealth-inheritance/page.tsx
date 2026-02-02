// src/app/wealth-inheritance/page.tsx
'use client';

import React, { useState } from 'react';

export default function WealthInheritancePage() {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const openModal = (index: number) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  // All three services — fully edited for clarity, readability & premium feel
  const services = [
    {
      title: 'Connexions Planning & Execution',
      number: 1,
      color: 'blue',
      details: (
        <div className="space-y-8">
          <p className="text-xl font-semibold text-gray-900 leading-tight">
            We build personalized, long-term strategies to protect your wealth and transfer it smoothly to future generations.
          </p>
          <ul className="space-y-5 text-lg text-gray-800">
            <li className="flex items-start gap-4">
              <span className="text-blue-600 font-black text-3xl leading-none">•</span>
              <span>Future-proof financial planning to control assets, cash flow and family wealth distribution</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-blue-600 font-black text-3xl leading-none">•</span>
              <span>Risk & tax optimization in partnership with Hong Kong’s top banks and advisors (including cross-border inheritance tax)</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-blue-600 font-black text-3xl leading-none">•</span>
              <span>Secure overseas liquid reserves for unexpected family needs and multi-generational protection</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-blue-600 font-black text-3xl leading-none">•</span>
              <span>US Dollar overseas assets to hedge RMB currency risk and preserve real purchasing power</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Jumbo Insurance & Private Bank Financing',
      number: 2,
      color: 'green',
      details: (
        <div className="space-y-8">
          <p className="text-xl font-semibold text-gray-900 leading-tight">
            We collaborate with Hong Kong’s premier private banks to create high-value insurance and financing structures that grow wealth while reducing tax exposure.
          </p>
          <ul className="space-y-5 text-lg text-gray-800">
            <li className="flex items-start gap-4">
              <span className="text-green-600 font-black text-3xl leading-none">•</span>
              <span>Leverage low Hong Kong interest rates to significantly boost insurance coverage and long-term investment returns</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-green-600 font-black text-3xl leading-none">•</span>
              <span>Deliver stable, predictable annual returns through professionally selected financial products</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-green-600 font-black text-3xl leading-none">•</span>
              <span>Strategically minimize or legally eliminate inheritance tax and capital gains tax across jurisdictions</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Overseas Trust Structures',
      number: 3,
      color: 'purple',
      details: (
        <div className="space-y-8">
          <p className="text-xl font-semibold text-gray-900 leading-tight">
            Offshore trusts deliver powerful protection and flexible generational wealth transfer under stable international legal systems.
          </p>
          <ul className="space-y-5 text-lg text-gray-800">
            <li className="flex items-start gap-4">
              <span className="text-purple-600 font-black text-3xl leading-none">•</span>
              <span>Robust asset protection with fully customizable distribution to future generations</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-purple-600 font-black text-3xl leading-none">•</span>
              <span>Shield against risks from marriage, creditors, lawsuits, accidents, taxes and inheritance disputes</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-purple-600 font-black text-3xl leading-none">•</span>
              <span>Reduce legal and jurisdictional risks through expert offshore trust structuring</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-purple-600 font-black text-3xl leading-none">•</span>
              <span>Enhanced privacy, control and long-term family wealth preservation</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* ==================== Hero Section ==================== */}
      <section className="relative py-32 md:py-48 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-950 text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 opacity-30">
          <img
            src="https://images.pexels.com/photos/28924939/pexels-photo-28924939/free-photo-of-stunning-view-of-hong-kong-skyline-in-daylight.jpeg"
            alt="Hong Kong financial skyline"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 text-center z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Wealth Inheritance Planning
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-90">
            Secure, tax-efficient, multi-generational transfer of your legacy from Hong Kong.
          </p>
        </div>
      </section>

      {/* ==================== Introduction ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-6">
            China’s economic rise has created tremendous wealth for entrepreneurs. As the time comes to pass on businesses and fortunes, safe and efficient inheritance is a top priority.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Connexions in Hong Kong provides specialized succession planning for Chinese high-net-worth families, leveraging global financial expertise and local advantages.
          </p>
        </div>
      </section>

      {/* ==================== Core Solutions Cards ==================== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            Our Three Core Solutions
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className={`group bg-white rounded-2xl shadow-xl p-8 md:p-10 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-${service.color}-600 hover:border-${service.color}-700`}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-${service.color}-50 flex items-center justify-center text-4xl font-bold text-${service.color}-600 group-hover:scale-110 transition-transform`}
                  >
                    {service.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700">Click to learn more →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== Modal Pop-up ==================== */}
      {activeModal !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-3xl w-11/12 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100 border-t-4 border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 px-8 md:px-12 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10 shadow-sm">
              <div className="flex items-center gap-5">
                <div
                  className={`w-16 h-16 rounded-xl bg-${services[activeModal].color}-50 flex items-center justify-center text-4xl font-bold text-${services[activeModal].color}-600 shadow-md`}
                >
                  {services[activeModal].number}
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    {services[activeModal].title}
                  </h3>
                  <div className="mt-2 text-sm text-gray-600 font-medium">
                    ✓ Confidential • Compliant • Hong Kong Expertise
                  </div>
                </div>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-900 text-4xl font-light focus:outline-none hover:bg-gray-100 rounded-full w-12 h-12 flex items-center justify-center transition"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="px-8 md:px-12 py-10 prose prose-lg prose-gray max-w-none leading-relaxed">
              {services[activeModal].details}
            </div>

            {/* Footer */}
            <div className="px-8 md:px-12 py-6 border-t border-gray-200 text-right bg-gray-50">
              <button
                onClick={closeModal}
                className="bg-gray-800 text-white px-10 py-4 rounded-xl font-medium hover:bg-gray-900 transition shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ==================== CTA Section ==================== */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Secure Your Family's Future
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 opacity-90">
            Contact Connexions for a confidential, personalized wealth inheritance strategy.
          </p>
          <button className="bg-white text-indigo-800 font-bold py-6 px-14 rounded-full text-2xl hover:bg-gray-100 transition-colors shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
            Request Confidential Consultation
          </button>
        </div>
      </section>
    </div>
  );
}