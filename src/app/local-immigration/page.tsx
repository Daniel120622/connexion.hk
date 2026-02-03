// src/app/local-immigration/page.tsx
"use client";

import { desc } from 'framer-motion/m';
import { Zap } from 'lucide-react';
import React, { useEffect, useState } from 'react';

export default function LocalImmigrationPage() {

  const [lang, setLang] = useState<"en" | "cn">("en");
  
    useEffect(() => {
      const saved = localStorage.getItem("lang") as "en" | "cn" | null;
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
        heroTitle: "Local Immigration Schemes in Hong Kong",
        heroDesc: "Discover tailored pathways to residency, work, investment, and a new life in Hong Kong.",
        intro: "Getting to know your background and needs is our first and most important step. Through careful listening and expert analysis, we enhance your application success rate and identify the best opportunities for you.",
        galleryTitle: "Visual Insights into Hong Kong Immigration",
        galleryDesc: "Explore the visual journey of Hong Kong immigration through our curated gallery of insights and experiences.",
        ContentSections: "Explore Our Local Immigration Schemes",
        topTalentPassScheme:"Top Talent Pass Scheme",
        topTalentPassSchemeDesc: "The Top Talent Pass Scheme attracts highly qualified global talent with substantial work experience or degrees from top universities (annual income ≥ HKD 2.5 million or eligible university graduates). Fast Track: Approvals are typically completed within days to weeks when conditions are met—one of the fastest routes to residency in Hong Kong.",
        newCapitalInvestmentEntrantScheme:"New Capital Investment Entrant Scheme",
        newCapitalInvestmentEntrantSchemeDesc: "Launched in March 2024 – aimed at attracting high-net-worth individuals to stimulate Hong Kong's economic development. Requirements: ≥ HKD 30 million net assets (24 months), invest HKD 30 million (HKD 27 million in permitted assets + HKD 3 million in CIES portfolio for innovation/technology). Residency visa granted upon completion.",
        generalEmploymentPolicy:"General Employment Policy (GEP)",
        generalEmploymentPolicyDesc: "Applicable to overseas Chinese holding Chinese passports who have resided overseas for at least 1 year. Targeted at individuals with unique skills not readily available in Hong Kong. No quota restrictions, requires a job offer with market-aligned salary and qualifications/experience.",
        qualityMigrantAdmissionScheme:"Quality Migrant Admission Scheme (QMAS)",
        qualityMigrantAdmissionSchemeDesc: "A quota-based, points-tested program for highly skilled/talented individuals. No job offer required prior to entry. Allows dependents including spouse and children under 18 (self-sufficient). Competitive selection through General or Achievement-based Points Test.",
        otherSupportServices:"Other Support Services",
        otherSupportServicesDesc: "• Dependents Visa – for family members after main visa approval\n• Visa Extensions – reminders & full assistance\n• Permanent Identity Card Verification – after 7 years ordinary residence",
        cta: "Begin Your Hong Kong Journey Today",
        ctaDesc: "Let Connexions assess your profile and guide you to the perfect immigration pathway.",
        ctaButton: "Contact Us Now",
      },
      zh:{
        heroTitle: "香港本地移民計劃",
        heroDesc: "探索通往香港居留、工作、投資和新生活的量身定制途徑。",
        intro: "了解您的背景和需求是我們第一步也是最重要的一步。透過仔細傾聽和專業分析，我們提高您的申請成功率，並為您識別最佳機會。",
        galleryTitle: "香港移民的視覺洞見",
        galleryDesc: "透過我們精心策劃的見解和體驗畫廊，探索香港移民的視覺之旅。",
        topTalentPassScheme:"頂尖人才入境計劃",
        topTalentPassSchemeDesc: "頂尖人才入境計劃吸引具有豐富工作經驗或頂尖大學學位的高素質全球人才（年收入≥250萬港元或符合條件的大學畢業生）。快速通道：在滿足條件時，審批通常在幾天到幾週內完成——這是香港最快的居留途徑之一。",
        newCapitalInvestmentEntrantScheme:"新資本投資入境計劃",
        newCapitalInvestmentEntrantSchemeDesc: "於2024年3月啟動－旨在吸引高淨值個人以促進香港經濟發展。要求：≥3000萬港元淨資產（24個月），投資3000萬港元（2700萬港簽證元於許可資產+300萬港元於創新/科技的CIES投資組合）。完成後授予居留簽證元於許可資產+300萬港元於創新/科技的CIES投資組合）。完成後授予居留簽證元。",
        generalEmploymentPolicy:"一般就業政策 (GEP)",
        generalEmploymentPolicyDesc: "適用於持有中國護照並在海外居住滿1年的海外華人。針對那些在香港不易獲得的獨特技能人士。無配額限制，需提供符合市場薪酬及資格/經驗的工作邀請。",
        qualityMigrantAdmissionScheme:"優質人才入境計劃 (QMAS)",
        qualityMigrantAdmissionSchemeDesc: "基於配額和積分測試的高技能/人才個人計劃。入境前無需工作邀請。可攜帶配偶及18歲以下子女（自給自足）。通過一般或成就積分測試進行競爭。",
        otherSupportServices:"其他支持服務",
        otherSupportServicesDesc: "• 家屬簽證 – 主要簽證獲批後適用於家屬\n• 簽證續期 – 提供提醒及全面協助\n• 永久居民身份證核實 – 滿7年普通居住後",
        cta: "今天就開始您的香港之旅",
        ctaDesc: "讓Connexions評估您的資料，並引導您找到完美的移民途徑。",
        ctaButton: "立即聯絡我們"
      },

      cn:{
        heroTitle: "香港本地移民计划",
        heroDesc: "探索通往香港居留、工作、投资和新生活的量身定制途径。",
        intro: "了解您的背景和需求是我们第一步也是最重要的一步。通过仔细倾听和专业分析，我们提高您的申请成功率，并为您识别最佳机会。",
        galleryTitle: "香港移民的视觉见解",
        galleryDesc: "通过我们精心策划的见解和体验画廊，探索香港移民的视觉之旅。",
        ContentSections: "探索我们的本地移民计划",
        topTalentPassScheme:"顶尖人才入境计划",
        topTalentPassSchemeDesc: "顶尖人才入境计划吸引具有丰富工作经验或顶尖大学学位的高素质全球人才（年收入≥250万港元或符合条件的大学毕业生）。快速通道：在满足条件时，审批通常在几天到几周内完成——这是香港最快的居留途径之一。", 
        newCapitalInvestmentEntrantScheme:"新资本投资入境计划",
        newCapitalInvestmentEntrantSchemeDesc: "于2024年3月启动－旨在吸引高净值个人以促进香港经济发展。要求：≥3000万港元净资产（24个月），投资3000万港元（2700万港签证元于许可资产+300万港元于创新/科技的CIES投资组合）。完成后授予居留签证元于许可资产+300万港元于创新/科技的CIES投资组合）。完成后授予居留签证元。",
        generalEmploymentPolicy:"一般就业政策 (GEP)",
        generalEmploymentPolicyDesc: "适用于持有中国护照并在海外居住满1年的海外华人。针对那些在香港不易获得的独特技能人士。无配额限制，需提供符合市场薪酬及资格/经验的工作邀请。",
        qualityMigrantAdmissionScheme:"优质人才入境计划 (QMAS)",
        qualityMigrantAdmissionSchemeDesc: "基于配额和积分测试的高技能/人才个人计划。入境前无需工作邀请。可携带配偶及18岁以下子女（自给自足）。通过一般或成就积分测试进行竞争。",
        otherSupportServices:"其他支持服务",
        otherSupportServicesDesc: "• 家属签证 – 主要签证获批后适用于家属\n• 签证续期 – 提供提醒及全面协助\n• 永久居民身份证核实 – 满7年普通居住后",
        cta: "今天就开始您的香港之旅",
        ctaDesc: "让Connexions评估您的资料，并引导您找到完美的移民途径。",
        ctaButton: "立即联系我们"
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
      {/* Hero Section */} 
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="container mx-auto py-4">
          {null}
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/local-immg.jpeg"
            alt="Iconic Hong Kong skyline and Victoria Harbour in daylight"
            className="
              absolute inset-0 h-full w-full
              object-cover
              brightness-[0.6]
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

      

      {/* Interactive Schemes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {current.ContentSections}
          </h2>

          <div className="space-y-3">
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.topTalentPassScheme}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.topTalentPassSchemeDesc}</p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.newCapitalInvestmentEntrantScheme}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.newCapitalInvestmentEntrantSchemeDesc}</p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.generalEmploymentPolicy}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.generalEmploymentPolicyDesc}</p>
              </div>
            </details>

            {/* Add similar <details> blocks for ASMTP, EEEN, QMAS, and Other Services */}
            {/* Example for QMAS */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.qualityMigrantAdmissionScheme}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.qualityMigrantAdmissionSchemeDesc}</p>
              </div>
            </details>

            {/* Other Services as a final accordion */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.otherSupportServices}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <ul className="list-disc pl-6 space-y-3">
                  <li><strong>Dependents Visa</strong> – For family after main visa approval</li>
                  <li><strong>Visa Extensions</strong> – Reminders & full assistance</li>
                  <li><strong>Permanent Identity Card Verification</strong> – After 7 years ordinary residence</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {current.cta}
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
            {current.ctaDesc}
          </p>
          <button className="bg-white text-teal-700 font-bold py-4 px-10 rounded-full text-xl hover:bg-teal-50 transition-colors shadow-lg">
            {current.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
}