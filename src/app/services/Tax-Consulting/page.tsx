// src/app/[locale]/services/Tax-Consulting/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";


// ────────────────────────────────────────────────
// Main Component
// ────────────────────────────────────────────────
export default function TaxConsultingPage() {
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
      heroTitle: "Tax Consulting & Advisory Services",
      heroDesc: "Strategic tax planning, offshore profit claims, profits tax compliance, international tax structuring, and dispute resolution for Hong Kong and global businesses.",
      benefitsTitle: "Why Choose Our Tax Consulting Services?",
      intro1:"Hong Kong’s tax system is simple. At present, the company’s profit tax rate is 8.25% on assessable profits for first HK$2M and 16.5% on any part of assessable profits over HK$2M. There is no capital gains tax, dividend withholding tax, consumption tax or VAT in Hong Kong. Hong Kong adopts the principle of source of income, i.e. only profits originating in Hong Kong must be taxed in Hong Kong, and profits from other places is exempted from profits tax in Hong Kong. Through the effective tax planning, the company can enjoy much tax saving.", 
      intro2:"We furnish comprehensive tax services for your enterprise management. We serve as your tax representative to facilitate effective communication with Hong Kong IRD, assist you and your company tax filing and establish efficient tax planning and arrangement.",
      ctaDesc: "Get a customized tax strategy proposal — most clients receive details within 24 hours.",
      ctaButton: "Request Your Tax Consulting Proposal",
    },

    zh: {
      heroTitle: "稅務顧問及諮詢服務",
      heroDesc: "策略性稅務規劃、離岸利潤申索、利得稅合規、國際稅務架構，以及香港及全球企業的爭議解決。",
      benefitsTitle: "為何選擇我們的稅務顧問服務？",
      intro1: "香港的稅制是全世界最簡單的。目前公司利得稅稅率首港幣200萬盈利為8.25%, 其後則為16.5％。在香港沒有資本利得稅、股息預扣稅、消費稅及增值稅。香港採用地域原則征稅，即只有源自香港的利潤才須在香港課稅，而源自其他地方的利潤，則不須在香港繳納利得稅。通過有效的稅務籌劃，公司可以享受最大的節稅。我們為您的企業管理安排詳細的稅務服務。我們擔當您的稅務代表，有效與稅務局溝通，協助您及您的公司嚴格處理稅務申報及文件。",
      intro2: "",
      ctaDesc: "獲取度身訂造的稅務策略建議書 — 大多數客戶於24小時內收到詳情。",
      ctaButton: "索取您的稅務顧問建議書",
    },

    cn: {
      heroTitle: "税务顾问及咨询服务",
      heroDesc: "策略性税务规划、离岸利润申索、利得税合规、国际税务架构，以及香港及全球企业的争议解决。",
      benefitsTitle: "为何选择我们的税务顾问服务？",
      intro1: "香港的税制是全世界最简单的。目前公司利得税税率首港币200万盈利为8.25%, 其后则为16.5％。在香港没有资本利得税、股息预扣税、消费税及增值税。香港采用地域原则征税，即只有源自香港的利润才须在香港课税，而源自其他地方的利润，则不须在香港缴纳利得税。通过有效的税务筹划，公司可以享受最大的节税。我们为您的企业管理安排详细的税务服务。我们担当您的税务代表，有效与税务局沟通，协助您及您的公司严格处理税务申报及文件。",
      intro2: "",
      ctaDesc: "获取度身订造的税务策略建议书 — 大多数客户于24小时内收到详情。",
      ctaButton: "索取您的税务顾问建议书",
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
            src="/images/services/businessAdv.jpg" // ← replace with your actual image (e.g. charts, calculator, global map, documents)
            alt="Tax consulting background"
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