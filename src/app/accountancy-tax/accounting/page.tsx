// src/app/[locale]/services/Accounting-Service/page.tsx
"use client";

import { Receipt } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import ServiceHero from '@/components/ServiceHero';
import {
  accountancyServicesNav,
  accountancyServicesOrder,
  accountancyServicesGroupLabel,
} from '@/lib/accountancyServicesNav';



export default function AccountingServicePage() {
  const { lang } = useLanguage();

  // ── Content ───────────────────────────────────────
  const content = {
    en: {
      heroTitle: "Accounting Service",
      heroDesc: "Accurate bookkeeping, financial reporting, tax compliance, payroll management, and audit support — tailored for Hong Kong companies and offshore structures.",
      benefitsTitle: "Why Choose Our Accounting Services?",
      intro1:"According to Hong Kong laws, each Hong Kong company must keep complete business records for a period of seven years. Non-compliance may lead to an offence.",
      intro2:"Our accounting services comprise effective accounting management, developing accounting structure, arranging for annual audit.",
      ctaDesc: "Contact us today to learn more.",
      ctaButton: "Contact Us",
    },

    zh: {
      heroTitle: "會計服務",
      heroDesc:"精準簿記、財務報告、稅務合規、薪酬管理及審計支援 — 專為香港公司及離岸架構量身定制。",
      benefitsTitle: "為何選擇我們的會計服務？",
      intro1: "根據香港的法例，每家香港公司都必須保存七年內完善的商業會計記錄。不保持適當商業記錄屬違法。我們的會計服務包括有效管理賬目，協助制定會計賬目，安排年度審計等。",
      intro2: "",
      
      ctaDesc: "立即聯絡我們，了解更多。",
      ctaButton: "聯絡我們",

    },

    cn: {
      heroTitle: "会计服务",
      heroDesc:"精准簿记、财务报告、税务合规、薪酬管理及审计支援 — 专为香港公司及离岸架构量身定制。",
      benefitsTitle: "为何选择我们的会计服务？",
      intro1: "根据香港的法例，每家香港公司都必须保存七年内完善的商业会计记录。不保持适当商业记录属违法。我们的会计服务包括有效管理账目，协助制定会计账目，安排年度审计等。",
      intro2: "",
      ctaDesc: "立即联系我们，了解更多。",
      ctaButton: "联系我们",
    },
  };

  const current = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">

      <ServiceHero
        icon={Receipt}
        eyebrow={accountancyServicesGroupLabel[lang]}
        title={current.heroTitle}
        description={current.heroDesc}
        imageSrc="/images/services/accounting.jpg"
        imageAlt="Accounting services background"
        ctaLabel={current.ctaButton}
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
                {current.benefitsTitle}
              </h2>

            <p className="text-lg leading-loose">
              {current.intro1}
            </p>
            <br></br>

            <p className="text-lg leading-loose">
              {current.intro2}
            </p>

            {/* CTA */}
            <div className="mt-16 text-center">
              <a
                href="/contact"
                className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
              >
                {current.ctaButton}
              </a>
              <p className="mt-4 text-gray-600">
                {current.ctaDesc}
              </p>
            </div>
          </div>
        </div>
      </section>
      

    </div>
  );
}