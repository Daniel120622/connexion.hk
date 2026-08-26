// src/app/[locale]/services/Accounting-Service/page.tsx
"use client";

import { Receipt } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTranslations } from 'next-intl';
import ServiceHero from '@/components/ServiceHero';
import {
  accountancyServicesNav,
  accountancyServicesOrder,
  accountancyServicesGroupLabel,
} from '@/lib/accountancyServicesNav';

export default function AccountingServicePage() {
  const { lang } = useLanguage();
  const t = useTranslations("Pages.Accounting");

  

  return (
    <div className="min-h-screen bg-gray-50">

      <ServiceHero
        icon={Receipt}
        eyebrow={accountancyServicesGroupLabel[lang]}
        title={t("heroTitle")}
        description={t("heroDesc")}
        imageSrc="/images/services/accounting.jpg"
        imageAlt="Accounting services background"
        ctaLabel={t("ctaButton")}
        ctaHref="/contact"
        index={accountancyServicesOrder.indexOf("accounting") + 1}
        total={accountancyServicesOrder.length}
        siblings={accountancyServicesOrder.map((slug) => ({
          label: accountancyServicesNav[slug].title[lang],
          href: accountancyServicesNav[slug].href,
          active: slug === "accounting",
        }))}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {t("benefitsTitle")}
              </h2>

            <p className="text-lg leading-loose">
              {t("intro1")}
            </p>
            <br></br>

            <p className="text-lg leading-loose">
              {t("intro2")}
            </p>

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
        </div>
      </section>
      

    </div>
  );
}