// src/app/wealth-inheritance/page.tsx
'use client'; // Required for client-side interactivity (state + onClick)

import React, { useState } from 'react';

export default function WealthInheritancePage() {
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const openModal = (index: number) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  const services = [
    {
      title: 'Planning & Accomplishment by Connexions',
      number: 1,
      color: 'blue',
      details: (
        <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
          <li>Design comprehensive future financial arrangements for individuals and families to optimize property control and cash flow management.</li>
          <li>Work closely with Hong Kong financial institutions and professional advisors to manage risks related to assets, liabilities, and taxes — particularly cross-border inheritance taxes.</li>
          <li>Establish secure, liquid overseas assets to serve as a flexible reserve for any future family needs while securing benefits for multiple generations.</li>
          <li>Create US Dollar-denominated overseas properties to effectively hedge against currency risks (especially RMB depreciation).</li>
        </ul>
      ),
    },
    {
      title: 'Cooperating with Private Banks for Jumbo Insurance / Financial Products',
      number: 2,
      color: 'green',
      details: (
        <>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Partner with leading Hong Kong private banks to structure high-value insurance policies and premium financing solutions.
          </p>
          <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
            <li>Utilize relatively low interest rates in Hong Kong to significantly increase coverage and investment returns over time.</li>
            <li>Secure relatively stable annual returns through structured financial products.</li>
            <li>Strategically plan to reduce or eliminate inheritance tax and capital gains tax exposure across multiple jurisdictions.</li>
          </ul>
        </>
      ),
    },
    {
      title: 'Overseas Trust',
      number: 3,
      color: 'purple',
      details: (
        <>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Establish robust offshore trusts protected by foreign legal systems for maximum asset security and flexibility.
          </p>
          <ul className="text-lg text-gray-700 leading-relaxed space-y-4 list-disc pl-6">
            <li>Provide strong asset protection with customizable distribution to future generations.</li>
            <li>Address risks arising from marriage, creditors, investment losses, accidents, taxation, and inheritance disputes.</li>
            <li>Mitigate legal and jurisdictional risks through carefully structured overseas trusts.</li>
            <li>Ensure privacy, control, and long-term wealth preservation under stable international legal frameworks.</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100">
      {/* Hero */}
      <section className="relative py-32 md:py-48 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-950 text-white overflow-hidden">


        <div className="absolute inset-0 opacity-30">
        
          <img
            src="https://images.pexels.com/photos/28924939/pexels-photo-28924939/free-photo-of-stunning-view-of-hong-kong-skyline-in-daylight.jpeg"
            alt="Hong Kong financial skyline"
            className="w-full h-full object-cover brightness-75"
          />
        </div>

        <div className="container mx-auto py-4">
            {null}
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            Wealth Inheritance Planning
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-90">
            Secure, tax-efficient, multi-generational transfer of your legacy from Hong Kong.
          </p>
        </div>
      </section>

      {/* Introduction */}
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

      {/* 3 Clickable Cards – Click to Open Modal */}
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
                className={`bg-white rounded-2xl shadow-xl p-8 md:p-10 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-${service.color}-600`}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 rounded-full bg-${service.color}-100 flex items-center justify-center text-4xl font-bold text-${service.color}-700`}>
                    {service.number}
                  </div>
                  <h3 className={`text-2xl md:text-3xl font-semibold text-gray-900`}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600">Click to view full details →</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Pop-up */}
      {activeModal !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-11/12 max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100">
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between z-10">
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-${services[activeModal].color}-100 flex items-center justify-center text-3xl font-bold text-${services[activeModal].color}-700`}>
                  {services[activeModal].number}
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold text-${services[activeModal].color}-700`}>
                  {services[activeModal].title}
                </h3>
              </div>
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 text-3xl font-light"
              >
                ×
              </button>
            </div>

            {/* Content */}
            <div className="px-8 md:px-12 py-10">
              {services[activeModal].details}
            </div>

            {/* Footer */}
            <div className="px-8 py-6 border-t border-gray-200 text-right">
              <button
                onClick={closeModal}
                className="bg-gray-800 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-900 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-10 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Secure Your Family's Future
          </h2>
          <p className="text-2xl md:text-2xl max-w-4xl mx-auto mb-10 opacity-90">
            Contact Connexions for a confidential, personalized wealth inheritance strategy.
          </p>
          <button className="bg-white text-indigo-800 font-bold py-5 px-12 rounded-full text-xl hover:bg-gray-100 transition-colors shadow-xl">
            Request Consultation
          </button>
        </div>
      </section>
    </div>
  );
}