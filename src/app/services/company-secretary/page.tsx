"use client";

import type { Metadata } from 'next';
import { use, useEffect, useState } from 'react';
import React from 'react';


export default function CompanySecretaryPage() {

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
          heroTitle: "Company Secretary Services",
          heroDesc: "Ensure full compliance and smooth corporate governance for your Hong Kong company.",
          MainTitle: "Professional Company Secretary Support in Hong Kong",
          BenfitsTitle: "Our Company Secretary Services Include",
          intro: "Under the Hong Kong Companies Ordinance, every Hong Kong company is required to appoint a company secretary. We provide comprehensive, reliable and cost-effective company secretary services to help you stay compliant and focus on growing your business.",
          benfit_1: "Act as your named company secretary (licensed and qualified)",
          benfit_2: "Prepare and file Annual Returns with the Companies Registry",
          benfit_3: "Maintain statutory records, registers and minute books",
          benfit_4: "Organize board meetings, take minutes and prepare resolutions",
          benfit_5: "Handle share transfers, allotments and changes in company structure",
          benfit_6: "Assist with change of company name, registered office or directors",
          benfit_7: "Advise on corporate governance best practices",
          benfit_8: "Provide reminders for upcoming compliance deadlines",
          benfit_9: "Liaise with auditors, banks and other third parties on your behalf",
          ctaDesc: "Fixed annual fee – transparent pricing with no hidden charges.",
          ctaButton: "Get Your Company Secretary Proposal"
        },

        zh: {
          heroTitle: "公司秘書服務",
          heroDesc: "確保您的香港公司全面合規及順暢的公司治理。",
          MainTitle: "專業的香港公司秘書支援",
          BenfitsTitle: "我們的公司秘書服務包括",
          intro: "根據香港公司條例，每間香港公司均須委任一名公司秘書。我們提供全面、可靠且具成本效益的公司秘書服務，助您保持合規，專注於發展業務。",
          benfit_1: "擔任您的指定公司秘書（持牌及合資格）",
          benfit_2: "準備及向公司註冊處提交周年申報表",
          benfit_3: "維護法定記錄、登記冊及會議記錄冊",
          benfit_4: "組織董事會會議、記錄會議紀要及準備決議案",
          benfit_5: "處理股份轉讓、配發及公司結構變更",
          benfit_6: "協助更改公司名稱、註冊辦事處或董事",
          benfit_7: "就公司治理最佳實務提供建議",
          benfit_8: "提供即將到來的合規截止日期提醒",
          benfit_9: "代表您與審計師、銀行及其他第三方聯絡",
          ctaDesc: "固定年費 – 價格透明，無隱藏收費。",
          ctaButton: "獲取您的公司秘書建議書"
        },
        cn: {
          heroTitle: "公司秘书服务",
          heroDesc: "确保您的香港公司全面合规及顺畅的公司治理。",
          MainTitle: "专业的香港公司秘书支持",
          BenfitsTitle: "我们的公司秘书服务包括",
          intro: "根据香港公司条例，每间香港公司均须委任一名公司秘书。我们提供全面、可靠且具成本效益的公司秘书服务，助您保持合规，专注于发展业务。",
          benfit_1: "担任您的指定公司秘书（持牌及合资格）",
          benfit_2: "准备及向公司注册处提交周年申报表",
          benfit_3: "维护法定记录、登记册及会议记录册",
          benfit_4: "组织董事会会议、记录会议纪要及准备决议案",
          benfit_5: "处理股份转让、配发及公司结构变更",
          benfit_6: "协助更改公司名称、注册办事处或董事",
          benfit_7: "就公司治理最佳实务提供建议",
          benfit_8: "提供即将到来的合规截止日期提醒",
          benfit_9: "代表您与审计师、银行及其他第三方联络",
          ctaDesc: "固定年费 – 价格透明，无隐藏收费。",
          ctaButton: "获取您的公司秘书建议书"
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
            src="/images/company-secretary-hero.jpg"
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
              {current.MainTitle}
            </h2>

            <p>
              {current.intro}
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">
              {current.BenfitsTitle}
            </h3>

            <ul className="list-disc pl-6 space-y-3 mt-6 mb-10">
              <li>{current.benfit_1}</li>
              <li>{current.benfit_2}</li>
              <li>{current.benfit_3}</li>
              <li>{current.benfit_4}</li>
              <li>{current.benfit_5}</li>
              <li>{current.benfit_6}</li>
              <li>{current.benfit_7}</li>
              <li>{current.benfit_8}</li>
              <li>{current.benfit_9}</li>
            </ul>

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