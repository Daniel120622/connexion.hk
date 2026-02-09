// src/app/[locale]/services/Tax-Consulting/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";

// ────────────────────────────────────────────────
// Reusable fade-in component (identical to previous pages)
function FadeInSection({
  children,
  className = "",
  delay = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-900 ease-out
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"}
        ${delay}
        ${className}
      `}
    >
      {children}
    </div>
  );
}

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
      heroDesc:
        "Strategic tax planning, offshore profit claims, profits tax compliance, international tax structuring, and dispute resolution for Hong Kong and global businesses.",
      benefitsTitle: "Why Choose Our Tax Consulting Services?",
      intro:
        "Hong Kong's territorial tax system offers significant advantages for businesses with offshore operations. We help clients minimize tax liabilities legally while ensuring full compliance with local and international regulations.",
      benefit_1: "Expert guidance on Hong Kong profits tax and offshore sourcing claims",
      benefit_2: "Tailored international tax structuring for cross-border operations",
      benefit_3: "Support for transfer pricing, tax treaties, and double taxation avoidance",
      benefit_4: "Preparation and defense of offshore non-taxable profit claims",
      benefit_5: "Compliance with BEPS, CRS, FATCA, and global minimum tax rules",
      benefit_6: "Representation in tax audits, enquiries, and dispute resolution",
      servicesTitle: "Our Core Tax Consulting Services",
      serviceList: [
        "Hong Kong profits tax computation and return filing",
        "Offshore profit claims preparation and supporting documentation",
        "International tax planning and structuring advice",
        "Transfer pricing documentation and compliance",
        "Tax-efficient corporate restructuring and M&A advisory",
        "Cross-border tax treaty application and relief claims",
        "CRS/FATCA reporting and compliance",
        "Tax audit support and dispute resolution with IRD",
      ],
      ctaDesc: "Get a customized tax strategy proposal — most clients receive details within 24 hours.",
      ctaButton: "Request Your Tax Consulting Proposal",
    },

    zh: {
      heroTitle: "稅務顧問及諮詢服務",
      heroDesc:
        "策略性稅務規劃、離岸利潤申索、利得稅合規、國際稅務架構，以及香港及全球企業的爭議解決。",
      benefitsTitle: "為何選擇我們的稅務顧問服務？",
      intro:
        "香港採取地域來源徵稅原則，為具有離岸業務的企業提供重大優勢。我們協助客戶合法減低稅務負擔，同時確保完全符合本地及國際法規。",
      benefit_1: "香港利得稅及離岸來源申索的專業指導",
      benefit_2: "跨境業務的國際稅務架構定制",
      benefit_3: "轉讓定價、稅務協定及避免雙重徵稅支援",
      benefit_4: "離岸非應課稅利潤申索的準備及證明文件",
      benefit_5: "符合BEPS、CRS、FATCA及全球最低稅規則",
      benefit_6: "稅務審核、查詢及爭議解決代表",
      servicesTitle: "我們的核心稅務顧問服務",
      serviceList: [
        "香港利得稅計算及報稅表提交",
        "離岸利潤申索準備及支援文件",
        "國際稅務規劃及架構建議",
        "轉讓定價文件及合規",
        "稅務高效的公司重組及併購顧問",
        "跨境稅務協定申請及減免",
        "CRS/FATCA報告及合規",
        "稅務審核支援及與稅務局爭議解決",
      ],
      ctaDesc: "獲取度身訂造的稅務策略建議書 — 大多數客戶於24小時內收到詳情。",
      ctaButton: "索取您的稅務顧問建議書",
    },

    cn: {
      heroTitle: "税务顾问及咨询服务",
      heroDesc:
        "战略性税务规划、离岸利润申索、利得税合规、国际税务架构，以及香港及全球企业的争议解决。",
      benefitsTitle: "为何选择我们的税务顾问服务？",
      intro:
        "香港采取地域来源征税原则，为具有离岸业务的企业提供重大优势。我们协助客户合法减轻税务负担，同时确保完全符合本地及国际法规。",
      benefit_1: "香港利得税及离岸来源申索的专业指导",
      benefit_2: "跨境业务的国际税务架构定制",
      benefit_3: "转让定价、税务协定及避免双重征税支持",
      benefit_4: "离岸非应课税利润申索的准备及证明文件",
      benefit_5: "符合BEPS、CRS、FATCA及全球最低税规则",
      benefit_6: "税务审核、查询及争议解决代表",
      servicesTitle: "我们的核心税务顾问服务",
      serviceList: [
        "香港利得税计算及报税表提交",
        "离岸利润申索准备及支持文件",
        "国际税务规划及架构建议",
        "转让定价文件及合规",
        "税务高效的公司重组及并购顾问",
        "跨境税务协定申请及减免",
        "CRS/FATCA报告及合规",
        "税务审核支持及与税务局争议解决",
      ],
      ctaDesc: "获取量身定制的税务策略建议书 — 大多数客户于24小时内收到详情。",
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
            <FadeInSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                {current.benefitsTitle}
              </h2>

              <p>{current.intro}</p>

              <ul className="list-disc pl-6 space-y-3 mt-6 mb-10">
                <li>{current.benefit_1}</li>
                <li>{current.benefit_2}</li>
                <li>{current.benefit_3}</li>
                <li>{current.benefit_4}</li>
                <li>{current.benefit_5}</li>
                <li>{current.benefit_6}</li>
              </ul>
            </FadeInSection>

            <FadeInSection delay="delay-[400ms]">
              <h3 className="text-2xl font-bold text-gray-900 mt-16 mb-8 text-center md:text-left">
                {current.servicesTitle}
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mt-8">
                {current.serviceList.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <p className="text-lg font-medium text-[#3ac9d9] mb-2">•</p>
                    <p>{item}</p>
                  </div>
                ))}
              </div>
            </FadeInSection>

            {/* CTA */}
            <FadeInSection delay="delay-[600ms]" className="mt-20 text-center">
              <a
                href="/contact"
                className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-12 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
              >
                {current.ctaButton}
              </a>
              <p className="mt-5 text-gray-600">{current.ctaDesc}</p>
            </FadeInSection>
          </div>
        </div>
      </section>
    </div>
  );
}