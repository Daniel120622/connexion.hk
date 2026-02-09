// src/app/[locale]/services/Accounting-Service/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";

// ────────────────────────────────────────────────
// Reusable fade-in component (same as before)
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
      heroDesc:
        "Accurate bookkeeping, financial reporting, tax compliance, payroll management, and audit support — tailored for Hong Kong companies and offshore structures.",
      benefitsTitle: "Why Choose Our Accounting Services?",
      intro:
        "We provide reliable, compliant, and efficient accounting solutions to help businesses focus on growth while we handle the numbers. Our services cover local Hong Kong entities as well as offshore companies (BVI, etc.).",
      benefit_1: "Monthly/quarterly bookkeeping and transaction processing",
      benefit_2: "Preparation of accurate financial statements and management reports",
      benefit_3: "Hong Kong profits tax filing and compliance (including offshore claims)",
      benefit_4: "Payroll processing and MPF contributions",
      benefit_5: "Audit coordination and support for statutory audits",
      benefit_6: "Cloud-based systems for real-time access and efficiency",
      servicesTitle: "Our Accounting Service Packages",
      serviceList: [
        "Full bookkeeping & general ledger maintenance",
        "Bank & credit card reconciliations",
        "Preparation of monthly/quarterly management accounts",
        "Annual financial statements compliant with HKFRS",
        "Profits tax computation and tax return filing",
        "Payroll services including salary calculations, MPF, and IRD filings",
        "Audit preparation and liaison with external auditors",
        "Advisory on offshore tax exemption claims",
      ],
      ctaDesc: "Get a personalized accounting proposal — most clients receive details within 24 hours.",
      ctaButton: "Request Your Accounting Services Quote",
    },

    zh: {
      heroTitle: "專業會計及簿記服務",
      heroDesc:
        "精準簿記、財務報告、稅務合規、薪酬管理及審計支援 — 專為香港公司及離岸架構量身定制。",
      benefitsTitle: "為何選擇我們的會計服務？",
      intro:
        "我們提供可靠、合規且高效的會計解決方案，讓企業專注於業務增長，我們負責處理數字。我們的服務涵蓋香港本地實體及離岸公司（BVI等）。",
      benefit_1: "每月/季度簿記及交易處理",
      benefit_2: "準確財務報表及管理報告的編制",
      benefit_3: "香港利得稅申報及合規（包括離岸豁免申請）",
      benefit_4: "薪酬處理及強積金供款",
      benefit_5: "法定審計協調及支援",
      benefit_6: "雲端系統，提供即時存取及高效管理",
      servicesTitle: "我們的會計服務套餐",
      serviceList: [
        "全面簿記及總賬維護",
        "銀行及信用卡對賬",
        "每月/季度管理賬目編制",
        "符合香港財務報告準則的年度財務報表",
        "利得稅計算及稅表提交",
        "薪酬服務，包括工資計算、強積金及稅務局申報",
        "審計準備及與外部審計師聯繫",
        "離岸稅務豁免申請諮詢",
      ],
      ctaDesc: "獲取個人化會計建議書 — 大多數客戶於24小時內收到詳情。",
      ctaButton: "索取您的會計服務報價",
    },

    cn: {
      heroTitle: "专业会计及簿记服务",
      heroDesc:
        "精准簿记、财务报告、税务合规、薪酬管理及审计支持 — 专为香港公司及离岸架构量身定制。",
      benefitsTitle: "为何选择我们的会计服务？",
      intro:
        "我们提供可靠、合规且高效的会计解决方案，让企业专注于业务增长，我们负责处理数字。我们的服务涵盖香港本地实体及离岸公司（BVI等）。",
      benefit_1: "每月/季度簿记及交易处理",
      benefit_2: "准确财务报表及管理报告的编制",
      benefit_3: "香港利得税申报及合规（包括离岸豁免申请）",
      benefit_4: "薪酬处理及强积金供款",
      benefit_5: "法定审计协调及支持",
      benefit_6: "云端系统，提供即时存取及高效管理",
      servicesTitle: "我们的会计服务套餐",
      serviceList: [
        "全面簿记及总账维护",
        "银行及信用卡对账",
        "每月/季度管理账目编制",
        "符合香港财务报告准则的年度财务报表",
        "利得税计算及税表提交",
        "薪酬服务，包括工资计算、强积金及税务局申报",
        "审计准备及与外部审计师联系",
        "离岸税务豁免申请咨询",
      ],
      ctaDesc: "获取个性化会计建议书 — 大多数客户于24小时内收到详情。",
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