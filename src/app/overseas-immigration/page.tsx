// src/app/overseas-immigration/page.tsx
"use client";

import React from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function OverseasImmigrationPage() {
  const t = useTranslations("Pages.OverseasImmigration");
  
    
  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/banner/oversea-immg.jpg"
            alt="Overseas citizenship and investment migration"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top brightness-[0.6]"
          />
        </div>

      <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            {t("heroTitle")}
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            {t("heroDesc")}
          </p>
        </div>
      </section>

      {/* Interactive Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {t("ContentSections")}
          </h2>

          <div className="space-y-6">
            {/* Vanuatu Citizenship by Contribution */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{t("vanuatuCitizenshipByContribution")}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{t("vanuatuCitizenshipByContributionDesc")}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("vanuatuCitizenshipByContributionBenefit_1")} </li>
                  <li>{t("vanuatuCitizenshipByContributionBenefit_2")}</li>
                  <li>{t("vanuatuCitizenshipByContributionBenefit_3")}</li>
                  <li>{t("vanuatuCitizenshipByContributionBenefit_4")}</li>
                </ul>
                <p className="mt-4 font-medium">{t("vanuatuCitizenshipByContributionBenefit_5")}</p>
              </div>
            </details>

            {/* St Kitts & Nevis Citizenship */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{t("stKittsNevisCitizenshipByInvestment")}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{t("stKittsNevisCitizenshipByInvestmentDesc")}</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>{t("stKittsNevisCitizenshipByInvestmentBenefit_1")}</li>
                  <li>{t("stKittsNevisCitizenshipByInvestmentBenefit_2")}</li>
                  <li>{t("stKittsNevisCitizenshipByInvestmentBenefit_3")}</li>
                  <li>{t("stKittsNevisCitizenshipByInvestmentBenefit_4")}</li>
                </ul>
                <p className="mt-4 font-medium">{t("Timeline")}</p>
              </div>
            </details>

            {/* Travel & Resident Visas */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{t("travelResidentVisas")}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{t("travelResidentVisasDesc")}</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-10 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
            {t("ctaDesc")}
          </p>
          
          <a 
          href="/contact" 
          className="bg-white text-teal-700 font-bold py-4 px-10 rounded-full text-xl hover:bg-teal-50 transition-colors shadow-lg">
            {t("ctaButton")}
          </a>
        </div>
      </section>
    </div>
  );
}