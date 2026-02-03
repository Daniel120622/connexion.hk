// src/app/[locale]/services/local-company/page.tsx
"use client";

import { useEffect, useState } from 'react';
import React from 'react';


export default function LocalCompanyPage() {
    const [lang, setLang] = useState<"en" | "cn" | "zh">("en");
  
    useEffect(() => {
      const saved = localStorage.getItem("lang") as "en" | "cn" | "zh" | null;
      if (saved) {
        setLang(saved);
      } else {
        // Optional: auto-detect browser language on first visit
        const browserLang = navigator.language.toLowerCase();
        const defaultLang = browserLang.includes("zh") ? "cn" : "en";
        localStorage.setItem("lang", defaultLang);
        setLang(defaultLang);
      }
    }, []);
  
    // Content switch
    const content = {
      en: {
        heroTitle: "Hong Kong Limited Company Formation",
        heroDesc: "Set up your Hong Kong company quickly, compliantly and cost-effectively.",
        BenfitsTitle: "Benefits of a Hong Kong Limited Company",
        intro: "Hong Kong remains one of the most attractive jurisdictions for international business due to its:",
        benfit_1: "Simple 0% tax on foreign-sourced income",
        benfit_2: "Strong international reputation and banking system",
        benfit_3: "English common law legal system",
        benfit_4: "Fast incorporation (1–3 working days)",
        benfit_5: "No minimum capital requirement",
        benfit_6: "100% foreign ownership allowed",
        benfit_7: "Excellent double taxation treaty network",
        benfit_8: "Strategic location as gateway to China and Asia",

        servicesTitle: "Our Hong Kong Company Formation Package Includes",
        standardPackage: "Standard Package",
        standardPackage_1: "Company incorporation & government fees",
        standardPackage_2: "Business Registration Certificate",
        standardPackage_3: "Company secretary appointment (1 year)",
        standardPackage_4: "Registered office address (1 year)",
        standardPackage_5: "Full corporate kit (seals, registers, certificates)",
        standardPackage_6: "Share certificates & initial board resolutions",

        completePackage: "Complete Package",
        completePackage_1: "Everything in Standard Package",
        completePackage_2: "Bank account opening assistance (local & international banks)",
        completePackage_3: "Trademark registration advice",
        completePackage_4: "First-year compliance & filing support",
        completePackage_5: "Document apostille & legalisation (if needed)",
        ctaTitle: "Start Your HK Company Today",
        ctaDesc: "Most companies are ready within 1–3 working days.",
        ctaButton: "Start Your HK Company Today"

      },
      zh: {
        heroTitle: "香港有限公司成立",
        heroDesc: "快速、合規且具成本效益地成立您的香港公司。",
        BenfitsTitle: "香港有限公司的優勢",
        intro: "由於以下原因，香港仍然是國際商業最具吸引力的司法管轄區之一：",
        benfit_1: "對外來源所得徵收簡單的0%稅率",
        benfit_2: "強大的國際聲譽與銀行體系",
        benfit_3: "英國普通法法律體系",
        benfit_4: "快速成立（1-3個工作天）",
        benfit_5: "無最低資本要求",
        benfit_6: "允許100%外資擁有",
        benfit_7: "優秀的雙重課稅協定網絡",
        benfit_8: "作為通往中國和亞洲的門戶的戰略位置",
        servicesTitle: "我們的香港公司成立套餐包括",
        standardPackage: "標準套餐",
        standardPackage_1: "公司註冊與政府費用",
        standardPackage_2: "商業登記證",
        standardPackage_3: "公司秘書任命（1年）",
        standardPackage_4: "註冊地址（1年）",
        standardPackage_5: "完整的公司套件（印章、登記冊、證書）",
        standardPackage_6: "股份證書和初始董事會決議",
        completePackage: "完整套餐",
        completePackage_1: "標準套餐中的所有內容",
        completePackage_2: "銀行帳戶開設協助（本地和國際銀行）",
        completePackage_3: "商標註冊建議",
        completePackage_4: "第一年的合規和申報支持",
        completePackage_5: "文件認證與合法化（如有需要）",
        ctaTitle: "立即開始您的香港公司",
        ctaDesc: "大多數公司可在1-3個工作天內準備就緒。",
        ctaButton: "立即開始您的香港公司"
      },
      cn: {
        heroTitle: "香港有限公司成立",
        heroDesc: "快速、合规且具成本效益地成立您的香港公司。",
        BenfitsTitle: "香港有限公司的优势",
        intro: "由于以下原因，香港仍然是国际商业最具吸引力的司法管辖区之一：",
        benfit_1: "对外来源所得征收简单的0%税率",
        benfit_2: "强大的国际声誉与银行体系",
        benfit_3: "英国普通法法律体系",
        benfit_4: "快速成立（1-3个工作天）",
        benfit_5: "无最低资本要求",
        benfit_6: "允许100%外资拥有",
        benfit_7: "优秀的双重课税协定网络",
        benfit_8: "作为通往中国和亚洲的门户的战略位置",
        servicesTitle: "我们的香港公司成立套餐包括",
        standardPackage: "标准套餐",
        standardPackage_1: "公司注册与政府费用",
        standardPackage_2: "商业登记证",
        standardPackage_3: "公司秘书任命（1年）",
        standardPackage_4: "注册地址（1年）",
        standardPackage_5: "完整的公司套件（印章、登记册、证书）",
        standardPackage_6: "股份证书和初始董事会决议",
        completePackage: "完整套餐",
        completePackage_1: "标准套餐中的所有内容",
        completePackage_2: "银行帐户开设协助（本地和国际银行）",
        completePackage_3: "商标注册建议",
        completePackage_4: "第一年的合规和申报支持",
        completePackage_5: "文件认证与合法化（如有需要）",
        ctaTitle: "立即开始您的香港公司",
        ctaDesc: "大多数公司可在1-3个工作天内准备就绪。",
        ctaButton: "立即开始您的香港公司"
      }
    
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
      {/* Hero Section */} 
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="container mx-auto py-4">
          {null}
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/hk-limited-company.jpg"
            alt="Iconic Hong Kong skyline and Victoria Harbour in daylight"
            className="
              absolute inset-0 h-full w-full
              object-cover
              brightness-[0.5]
              scale-110 md:scale-105
              transition-transform duration-1000
              hover:scale-115
        "/> 
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

      {/* Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              {current.BenfitsTitle}
            </h2>

            <p>
              {current.intro}
            </p>

            <ul className="list-disc pl-6 space-y-3 mt-6 mb-10">
              <li>{current.benfit_1}</li>
              <li>{current.benfit_2}</li>
              <li>{current.benfit_3}</li>
              <li>{current.benfit_4}</li>
              <li>{current.benfit_5}</li>
              <li>{current.benfit_6}</li>
              <li>{current.benfit_7}</li>
              <li>{current.benfit_8}</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              {current.servicesTitle}
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold mb-4 text-[#3ac9d9]">{current.standardPackage}</h4>
                <ul className="space-y-2">
                  <li>• {current.standardPackage_1}</li>
                  <li>• {current.standardPackage_2}</li>
                  <li>• {current.standardPackage_3}</li>
                  <li>• {current.standardPackage_4}</li>
                  <li>• {current.standardPackage_5}</li>
                  <li>• {current.standardPackage_6}</li>
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h4 className="text-xl font-semibold mb-4 text-[#3ac9d9]">{current.completePackage}</h4>
                <ul className="space-y-2">
                  <li>• {current.completePackage_1}</li>
                  <li>• {current.completePackage_2}</li>
                  <li>• {current.completePackage_3}</li>
                  <li>• {current.completePackage_4}</li>
                  <li>• {current.completePackage_5}</li>
                </ul>
              </div>
            </div>

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