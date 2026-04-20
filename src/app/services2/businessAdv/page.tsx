// src/app/[locale]/services/Business-Advisory/page.tsx
"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from '@/context/LanguageContext';


export default function BusinessAdvisoryPage() {
  const { lang } = useLanguage();

  // ── Content ───────────────────────────────────────
  const content = {
    en: {
      heroTitle: "Business Advisory",
      heroDesc:"Strategic business modelling, pre-IPO restructuring, M&A advisory, tax planning, profit distribution, and professional daily corporate administration.",
      benefitsTitle: "Why Choose Our Business Advisory Services?",
      intro1: "Business collaboration and corporate merger and acquisition are growing in dynamic and diversified commercial society. Over the years, we have participated in pre-IPO restructuring and business modelling. We also advise on shareholding structure in corporate setup and merger and acquisition, profit distribution and tax planning in ongoing business as well as corporate takeover planning. And we are competent in corporate routine management and administration. Coupled with our immersed knowledge and experience in accounting, tax, financial and human resources, our all-rounded services are highly regarded by our clients.",
      intro2: "",
      ctaDesc: "Contact Us now to learn more",
      ctaButton: "Contact Us",
    },

    zh: {
      heroTitle: "商業咨詢服務",
      heroDesc:
        "策略性業務規劃、上市前重組、併購顧問、稅務策劃、利潤分配，以及專業的日常企業行政管理。",
      benefitsTitle: "為何選擇我們的商業顧問服務？",
      intro1:"在靈活多元化的商業社會中，業務合作和企業併購日益頻繁。多年來，我們參與了上市股前的重組和業務規劃，就公司設立和併購中的股權結構、企業紅利分配政策、稅務規劃、公司轉讓計劃等提供專業的建議，並擅長擔任公司日常管理和行政工作。基於我們在會計、稅務、財務和人力資源方面的專業知識和經驗，我們的全方位服務受到客戶的高度評價。",
      intro2: "",
      ctaDesc: "立即聯絡我們，了解更多。",
      ctaButton: "聯絡我們",
    },

    cn: {
      heroTitle: "商业咨询服务",
      heroDesc:
      "策略性业务规划、上市前重组、并购顾问、税务策划、利润分配，以及专业的日常企业行政管理。",
      benefitsTitle: "为何选择我们的商业顾问服务？",
      intro1:"在灵活多元化的商业社会中，业务合作和企业并购日益频繁。多年来，我们参与了上市股前的重组和业务规划，就公司设立和并购中的股权结构、企业红利分配政策、税务规划、公司转让计划等提供专业的建议，并擅长担任公司日常管理和行政工作。基于我们在会计、税务、财务和人力资源方面的专业知识和经验，我们的全方位服务受到客户的高度评价。",
      intro2: "",
      ctaDesc: "立即联系我们，了解更多。",
      ctaButton: "联系我们",
    },
  };

  const current = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/businessAdv.jpg" // ← change to your actual image
            alt="Business advisory background"
            className="
              absolute inset-0 h-full w-full
              object-cover
              brightness-[0.55]
              scale-110 md:scale-105
              transition-transform duration-1000
              hover:scale-115
            "
          />
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            {current.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            {current.heroDesc}
          </p>
        </div>
      </section>

      {/* Main Content */}
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