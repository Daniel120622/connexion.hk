// src/app/[locale]/services/Accounting-Service/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";



export default function AccountingServicePage() {
  const [lang, setLang] = useState<"en" | "cn" | "zh">("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "en" | "cn" | "zh" | null;
    if (saved) {
      setLang(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      const defaultLang = browserLang.includes("zh") ? "cn" : "en";
      localStorage.setItem("lang", defaultLang);
      setLang(defaultLang);
    }
  }, []);

  // ── Content ───────────────────────────────────────
  const content = {
    en: {
      heroTitle: "Professional Accounting & Bookkeeping Services",
      heroDesc: "Accurate bookkeeping, financial reporting, tax compliance, payroll management, and audit support — tailored for Hong Kong companies and offshore structures.",
      benefitsTitle: "Why Choose Our Accounting Services?",
      intro1:"According to Hong Kong laws, each Hong Kong company must keep complete business records for a period of seven years. Non-compliance may lead to an offence.",
      intro2:"Our accounting services comprise effective accounting management, developing accounting structure, arranging for annual audit.",
      ctaDesc: "Get a personalized accounting proposal — most clients receive details within 24 hours.",
      ctaButton: "Request Your Accounting Services Quote",
    },

    zh: {
      heroTitle: "專業會計及簿記服務",
      heroDesc:"精準簿記、財務報告、稅務合規、薪酬管理及審計支援 — 專為香港公司及離岸架構量身定制。",
      benefitsTitle: "為何選擇我們的會計服務？",
      intro1: "根據香港的法例，每家香港公司都必須保存七年內完善的商業會計記錄。不保持適當商業記錄屬違法。我們的會計服務包括有效管理賬目，協助制定會計賬目，安排年度審計等。",
      intro2: "",
      ctaDesc: "取得個人化會計建議書 — 大多數客戶於24小時內收到詳情。",
      ctaButton: "索取您的會計服務報價",

    },

    cn: {
      heroTitle: "专业会计及簿记服务",
      heroDesc:"精准簿记、财务报告、税务合规、薪酬管理及审计支援 — 专为香港公司及离岸架构量身定制。",
      benefitsTitle: "为何选择我们的会计服务？",
      intro1: "根据香港的法例，每家香港公司都必须保存七年内完善的商业会计记录。不保持适当商业记录属违法。我们的会计服务包括有效管理账目，协助制定会计账目，安排年度审计等。",
      intro2: "",
      ctaDesc: "取得个人化会计建议书 — 大多数客户于24小时内收到详情。",
      ctaButton: "索取您的会计服务报价",
    },
  };

  const current = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#3ac9d9] text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold"></h1>
          <p className="mt-2 text-white/90"></p>
        </div>
      </header>
      {/* Hero */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/accounting.jpg" // ← replace with your actual image
            alt="Accounting services background"
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