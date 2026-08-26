// src/app/[locale]/services/local-company/page.tsx
"use client";

import React from 'react';
import { Landmark } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import { corporateServicesNav, corporateServicesOrder } from '@/lib/corporateServicesNav';

export default function LocalCompanyPage() {
    const { lang } = useLanguage();
  const t = useTranslations("Pages.LocalCompany");
  
    
  

    return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        icon={Landmark}
        title={t("heroTitle")}
        description={t("heroDesc")}
        imageSrc="/images/services/hkCompany.jpg"
        imageAlt="Iconic Hong Kong skyline and Victoria Harbour in daylight"
        variant="corporate"
        ctaLabel={t("ctaButton")}
        ctaHref="/contact"
        chips={corporateServicesOrder.map((slug) => ({
          label: corporateServicesNav[slug].title[lang],
          href: corporateServicesNav[slug].href,
          active: slug === "local-company",
        }))}
      />

      {/* Main Content */}
      <section id="local-company" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("BenfitsTitle")}
          </h2>

          <div className="space-y-6 text-lg leading-loose text-gray-700">
            <p>{t("intro1")}</p>
            <p>{t("intro2")}</p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
            >
              {t("ctaButton")}
            </a>
            <p className="mt-4 text-gray-600">
              {t("ctaDesc")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
