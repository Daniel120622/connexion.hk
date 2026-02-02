// src/app/services/page.tsx  或  components/Services.tsx （看你原本放哪裡）
"use client";

import React, { useState, useEffect } from "react";

export default function Services() {
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

  // 直接在這裡定義 Services 頁面的多語言內容
  const content = {
    en: {
      title: "Our Services",
      hkLimited: {
        title: "HK Limited Company",
        desc: "We provide comprehensive services for setting up and managing HK limited companies.",
      },
      bviOversea: {
        title: "BVI & Oversea Company",
        desc: "Establish and manage offshore companies in BVI and other jurisdictions.",
      },
      companySecretary: {
        title: "Company Secretary",
        desc: "Professional company secretary services to ensure compliance and smooth operations.",
      },
      accounting: {
        title: "Accounting Services",
        desc: "Comprehensive accounting services to manage your financial records effectively.",
      },
      taxConsulting: {
        title: "Tax Consulting",
        desc: "Expert tax consulting services to optimize your tax strategy and compliance.",
      },
      businessAdvisory: {
        title: "Business Advisory",
        desc: "Strategic business advisory services to help you achieve your goals.",
      },
    },
    zh: {
      title: "我們的服務",
      hkLimited: {
        title: "香港有限公司",
        desc: "我們提供全面的香港有限公司設立及管理服務。",
      },
      bviOversea: {
        title: "BVI 及其他海外公司",
        desc: "在英屬維爾京群島及其他司法管轄區設立和管理離岸公司。",
      },
      companySecretary: {
        title: "公司秘書",
        desc: "專業公司秘書服務，確保合規及運作順暢。",
      },
      accounting: {
        title: "會計服務",
        desc: "全面會計服務，有效管理您的財務記錄。",
      },
      taxConsulting: {
        title: "稅務諮詢",
        desc: "專業稅務諮詢服務，優化您的稅務策略及合規要求。",
      },
      businessAdvisory: {
        title: "商業顧問",
        desc: "策略性商業顧問服務，協助您達成業務目標。",
      },
    },
    cn: {
      title: "我们的服务",
      hkLimited: {
        title: "香港有限公司",
        desc: "我们提供全面的香港有限公司设立及管理服务。",
      },
      bviOversea: {
        title: "BVI 及其他海外公司",
        desc: "在英属维尔京群岛及其他司法管辖区设立和管理离岸公司。",
      },
      companySecretary: {
        title: "公司秘书",
        desc: "专业公司秘书服务，确保合规及运作顺畅。",
      },
      accounting: {
        title: "会计服务",
        desc: "全面会计服务，有效管理您的财务记录。",
      },
      taxConsulting: {
        title: "税务咨询",
        desc: "专业税务咨询服务，优化您的税务策略及合规要求。",
      },
      businessAdvisory: {
        title: "商业顾问",
        desc: "策略性商业顾问服务，协助您达成业务目标。",
      },
    },
  };

  const current = content[lang] || content.en;

  return (
    <section className="services bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">{current.title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/images/hk-limited-company.jpg"
              alt={current.hkLimited.title}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mb-4">{current.hkLimited.title}</h3>
            <p className="text-gray-600">{current.hkLimited.desc}</p>
          </div>

          {/* Service 2 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/images/bvi-oversea-company.jpg"
              alt={current.bviOversea.title}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mb-4">{current.bviOversea.title}</h3>
            <p className="text-gray-600">{current.bviOversea.desc}</p>
          </div>

          {/* Service 3 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/images/company-secretary.jpg"
              alt={current.companySecretary.title}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mb-4">{current.companySecretary.title}</h3>
            <p className="text-gray-600">{current.companySecretary.desc}</p>
          </div>

          {/* Service 4 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/images/accounting-services.jpg"
              alt={current.accounting.title}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mb-4">{current.accounting.title}</h3>
            <p className="text-gray-600">{current.accounting.desc}</p>
          </div>

          {/* Service 5 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/images/tax-consulting.jpg"
              alt={current.taxConsulting.title}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mb-4">{current.taxConsulting.title}</h3>
            <p className="text-gray-600">{current.taxConsulting.desc}</p>
          </div>

          {/* Service 6 */}
          <div className="service-card p-6 border rounded-lg shadow hover:shadow-lg transition">
            <img
              src="/images/business-advisory.jpg"
              alt={current.businessAdvisory.title}
              className="mb-4 w-full h-40 object-cover rounded"
            />
            <h3 className="text-xl font-semibold mb-4">{current.businessAdvisory.title}</h3>
            <p className="text-gray-600">{current.businessAdvisory.desc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}