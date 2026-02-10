// src/app/[locale]/services/Business-Advisory/page.tsx
"use client";

import { useState, useEffect, useRef } from "react";

// ────────────────────────────────────────────────
// Reusable fade-in component
// ────────────────────────────────────────────────
function FadeInSection({
  children,
  className = "",
  delay = "",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: string; // e.g. "delay-300"
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
export default function BusinessAdvisoryPage() {
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
      heroTitle: "Business Advisory & Corporate Services",
      heroDesc:
        "Strategic business modelling, pre-IPO restructuring, M&A advisory, tax planning, profit distribution, and professional daily corporate administration.",
      benefitsTitle: "Why Choose Our Business Advisory Services?",
      intro:
        "In today’s dynamic and diversified commercial environment, business collaboration and corporate mergers & acquisitions are increasingly frequent. Over the years we have:",
      benefit_1: "Participated in numerous pre-IPO restructurings and business planning",
      benefit_2:
        "Provided expert advice on shareholding structures, dividend policies, and tax optimization",
      benefit_3: "Assisted with corporate takeover and transfer planning",
      benefit_4: "Managed day-to-day corporate administration and governance",
      benefit_5:
        "Delivered comprehensive solutions backed by deep accounting, tax, finance, and HR expertise",
      servicesTitle: "Our Core Business Advisory Services",
      serviceList: [
        "Pre-IPO reorganization and group structuring",
        "Merger & acquisition due diligence support",
        "Shareholding and profit distribution planning",
        "Tax efficient structuring and compliance",
        "Corporate secretarial and daily administration",
        "Ongoing business modelling and strategic advisory",
      ],
      ctaDesc: "Contact us for a tailored consultation — most proposals sent within 24 hours.",
      ctaButton: "Get Your Business Advisory Proposal",
    },

    zh: {
      heroTitle: "商業顧問及企業服務",
      heroDesc:
        "策略性業務規劃、上市前重組、併購顧問、稅務策劃、利潤分配，以及專業的日常企業行政管理。",
      benefitsTitle: "為何選擇我們的商業顧問服務？",
      intro:
        "在當今靈活多元化的商業社會中，業務合作和企業併購日益頻繁。多年來，我們參與了：",
      benefit_1: "眾多上市前重組及業務規劃項目",
      benefit_2: "股權架構、股息政策及稅務優化方面的專業建議",
      benefit_3: "企業收購及轉讓計劃的協助",
      benefit_4: "日常公司管治及行政管理",
      benefit_5: "結合會計、稅務、財務及人力資源的全面解決方案",
      servicesTitle: "我們的核心商業顧問服務",
      serviceList: [
        "上市前重組及集團架構調整",
        "併購盡職調查支援",
        "股權結構與利潤分配規劃",
        "稅務優化架構及合規",
        "公司秘書及日常行政管理",
        "持續業務模式及策略顧問",
      ],
      ctaDesc: "聯絡我們獲取度身訂造的諮詢 — 大多數建議書於24小時內發送。",
      ctaButton: "獲取您的商業顧問建議書",
    },

    cn: {
      heroTitle: "商业顾问及企业服务",
      heroDesc:
        "战略性业务规划、上市前重组、并购顾问、税务策划、利润分配，以及专业的日常企业行政管理。",
      benefitsTitle: "为何选择我们的商业顾问服务？",
      intro:
        "在当今灵活多元化的商业社会中，业务合作和企业并购日益频繁。多年来，我们参与了：",
      benefit_1: "众多上市前重组及业务规划项目",
      benefit_2: "股权架构、股息政策及税务优化方面的专业建议",
      benefit_3: "企业收购及转让计划的协助",
      benefit_4: "日常公司治理及行政管理",
      benefit_5: "结合会计、税务、财务及人力资源的全面解决方案",
      servicesTitle: "我们的核心商业顾问服务",
      serviceList: [
        "上市前重组及集团架构调整",
        "并购尽职调查支持",
        "股权结构与利润分配规划",
        "税务优化架构及合规",
        "公司秘书及日常行政管理",
        "持续业务模式及战略顾问",
      ],
      ctaDesc: "联系我们获取量身定制的咨询 — 大多数建议书于24小时内发送。",
      ctaButton: "获取您的商业顾问建议书",
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