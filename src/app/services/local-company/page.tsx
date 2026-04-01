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
        intro1: "Hong Kong, as an international financial and commercial center, equips with advanced infrastructure and sustained growth of the capital market. It has highly educated professionals and an attractive tax system. As one of the most vibrant economy centers in the world, Hong Kong not only provides entrepreneurs the most excellent developing environment in the global economic system, but also as a gateway to enter the Chinese market.",
        intro2: "Connexions provides professional consultation, Hong Kong and offshore company incorporation, business advices on business nature, operation and strategies and offers tax-efficient solutions.",
        ctaTitle: "Start Your HK Company Today",
        ctaDesc: "Most companies are ready within 1–3 working days.",
        ctaButton: "Start Your HK Company Today"

      },
      zh: {
        heroTitle: "香港有限公司成立",
        heroDesc: "快速、合規且具成本效益地成立您的香港公司。",
        BenfitsTitle: "香港有限公司的優勢",
        intro1: "香港作為​​國際金融和商業中心，配有發展完善的基礎設施，持續增長的資本市場，高學歷的專業人士，和一個有吸引力的稅收制度。作為一個在世界上最蓬勃的經濟體系，香港不僅為企業家們提供了一個在國際經濟體系中發展最優良的環境，同時也是作為進入中國市場的門坎。宏達策略提供專業顧問意見，為到香港創業的資本家註冊香港/海外公司，提供業務運作及策劃討論，分析業務性質及節稅方案的考慮。",
        intro2: "",
        ctaTitle: "立即開始您的香港公司",
        ctaDesc: "大多數公司可在1-3個工作天內準備就緒。",
        ctaButton: "立即開始您的香港公司"
      },
      cn: {
        heroTitle: "香港有限公司成立",
        heroDesc: "快速、合规且具成本效益地成立您的香港公司。",
        BenfitsTitle: "香港有限公司的优势",
        intro1: "香港作为​​国际金融和商业中心，配有发展完善的基础设施，持续增长的资本市场，高学历的专业人士，和一个有吸引力的税收制度。作为一个在世界上最蓬勃的经济体系，香港不仅为企业家们提供了一个在国际经济体系中发展最优良的环境，同时也是作为进入中国市场的门坎。宏达策略提供专业顾问意见，为到香港创业的资本家注册香港/海外公司，提供业务运作及策划讨论，分析业务性质及节税方案的考虑。",
        intro2: "",
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
            src="/images/services/hkCompany.jpg"
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