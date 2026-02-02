// src/app/oversea-immigration/page.tsx
"use client";

import { li } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';


export default function OverseasImmigrationPage() {

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
        heroTitle: "Overseas Immigration & Citizenship by Investment",
        heroDesc: "Fast-track to second citizenship, tax advantages, and global mobility through trusted programs in Vanuatu and St Kitts & Nevis.",
        intro: "Understanding your background and needs is the crucial first step. Through attentive listening and expert analysis, we make precise recommendations to maximize your application success and secure the optimal investment or citizenship opportunity.",
        galleryTitle: "Visual Insights into Overseas Citizenship",
        galleryDesc: "Explore a visual journey of overseas citizenship through our curated insights and experience gallery.",
        ContentSections: "Explore Our Overseas Citizenship Solutions",
        vanuatuCitizenshipByContribution:"Citizenship by Contribution – Vanuatu (VCP)",
        vanuatuCitizenshipByContributionDesc: "Vanuatu, a member of the British Commonwealth, offers a robust legal framework and tax-friendly environment with no income tax, capital gains tax, or inheritance tax. Upon naturalization, you gain full citizenship rights, including residency, work, and living privileges in this offshore tax haven. Benefits include: Low entry threshold and straightforward process; Dual citizenship allowed; Free education and medical services; Visa-free access to approximately 125 countries (including UK, Malaysia, Hong Kong, Singapore). Fast-track: Passport in as little as 30 days. We handle assessment, application, government contribution, and naturalization support.",
        vanuatuCitizenshipByContributionBenefit_1: "Low entry threshold and straightforward process",
        vanuatuCitizenshipByContributionBenefit_2: "Dual citizenship allowed",
        vanuatuCitizenshipByContributionBenefit_3: "Free education and medical services",
        vanuatuCitizenshipByContributionBenefit_4: "Visa-free access to approximately 125 countries (including UK, Malaysia, Hong Kong, Singapore)",
        vanuatuCitizenshipByContributionBenefit_5: "Fast-track: Passport in as little as 30 days. We handle assessment, application, government contribution, and naturalization support.",
        stKittsNevisCitizenshipByInvestment:"St Kitts & Nevis Citizenship by Investment",
        stKittsNevisCitizenshipByInvestmentDesc: "Established in 1984, this is the world's oldest and most stable citizenship-by-investment program. Successful applicants receive citizenship, a passport, and residency rights. We guide you and your family through the full application process. Key advantages: Dual citizenship recognized; Visa-free travel to over 150 countries (including UK, Singapore, Macao); No taxes on worldwide income, capital gains, gifts, inheritance, or wealth; Offshore business opportunities and federal citizenship benefits. Timeline: Permanent residency and citizenship in approximately 3 months.",
        stKittsNevisCitizenshipByInvestmentBenefit_1: "Dual citizenship recognized",
        stKittsNevisCitizenshipByInvestmentBenefit_2: "Visa-free travel to over 150 countries (including UK, Singapore, Macao)",
        stKittsNevisCitizenshipByInvestmentBenefit_3: "No taxes on worldwide income, capital gains, gifts, inheritance, or wealth",
        stKittsNevisCitizenshipByInvestmentBenefit_4: "Offshore business opportunities and federal citizenship benefits",
        Timeline: "Permanent residency and citizenship in approximately 3 months.",
        travelResidentVisas:"Travel & Resident Visas to Other Countries",
        travelResidentVisasDesc: "We offer comprehensive visa services, including tourist visas, long-term resident visas, and applications to various countries worldwide. Whether for travel, business, study, or relocation, our team tailors solutions to your goals and background.",
        ctaTitle: "Unlock Your Global Future with Connexions",
        ctaDesc: "From tax optimization to second passports and visa-free travel – let us secure the best path for you and your family.",
        ctaButton: "Get Your Personalized Assessment Today"
      },

      zh: {
        heroTitle: "海外移民與入籍投資",
        heroDesc: "透過瓦努阿圖和聖基茨及尼維斯的可信項目，快速獲得第二國籍、稅收優勢和全球流動性。",
        intro: "了解您的背景和需求是我們第一步也是最重要的一步。透過仔細傾聽和專業分析，我們提高您的申請成功率，並為您識別最佳機會。",
        galleryTitle: "海外入籍的視覺見解",
        galleryDesc: "透過我們精心策劃的見解和體驗畫廊，探索海外入籍的視覺之旅。",
        ContentSections: "探索我們的海外入籍解決方案",
        vanuatuCitizenshipByContribution:"捐款入籍 – 萬那杜 (VCP)",
        vanuatuCitizenshipByContributionDesc: "瓦努阿圖是英聯邦成員國，提供穩健的法律框架和有利的稅收環境，無所得稅、資本利得稅或遺產稅。入籍後，您將獲得完整的公民權利，包括在這個離岸避稅天堂的居住、工作和生活特權。",
        vanuatuCitizenshipByContributionBenefit_1: "優點包括：低門檻和簡單的流程 允許雙重國籍 /n 免費教育和醫療服務 /n 可免簽進入約125個國家（包括英國、馬來西亞、香港、新加坡）。快速通道：護照可在短短30天內取得。我們處理評估、申請、政府捐款和入籍支持。/n",
        vanuatuCitizenshipByContributionBenefit_2: "允許雙重國籍",
        vanuatuCitizenshipByContributionBenefit_3: "免費教育和醫療服務",
        vanuatuCitizenshipByContributionBenefit_4: "可免簽進入約125個國家（包括英國、馬來西亞、香港、新加坡）",
        vanuatuCitizenshipByContributionBenefit_5: "快速通道：護照可在短短30天內取得。我們處理評估、申請、政府捐款和入籍支持。",
        stKittsNevisCitizenshipByInvestment:"聖克里斯多福及尼維斯投資入籍",
        stKittsNevisCitizenshipByInvestmentDesc: "該計畫成立於1984年，是世界上最古老、最穩定的投資入籍計劃。成功申請者將獲得公民身份、護照和居住權。我們將引導您和您的家人完成整個申請過程。主要優勢包括：認可雙重國籍；可免簽證進入150多個國家（包括英國、新加坡、澳門）；全球收入、資本利得、贈與、遺產或財富均無稅收；離岸商業機會和聯邦公民福利。",
        stKittsNevisCitizenshipByInvestmentBenefit_1: "雙重國籍認可",
        stKittsNevisCitizenshipByInvestmentBenefit_2: "可免簽證進入150多個國家（包括英國、新加坡、澳門）",
        stKittsNevisCitizenshipByInvestmentBenefit_3: "全球收入、資本利得、贈與、遺產或財富均無稅收",
        stKittsNevisCitizenshipByInvestmentBenefit_4: "離岸商業機會和聯邦公民福利",
        Timeline: "大約3個月內獲得永久居留權和公民身份。",
        travelResidentVisas:"其他國家的旅遊及居留簽證",
        travelResidentVisasDesc: "我們提供全面的簽證服務，包括旅遊簽證、長期居留簽證以及向世界各國的申請。無論是旅行、商務、學習還是搬遷，我們的團隊都會根據您的目標和背景量身定制解決方案。",
        ctaTitle: "與Connexions一起開啟您的全球未來",
        ctaDesc: "從稅務優化到第二護照和免簽旅行－讓我們為您和您的家人確保最佳路徑。",
        ctaButton: "立即取得您的個人化評估"
      },

      cn:{
        heroTitle: "海外移民与入籍投资",
        heroDesc: "通过瓦努阿图和圣基茨及尼维斯的可信项目，快速获得第二国籍、税收优势和全球流动性。",
        intro: "了解您的背景和需求是我们第一步也是最重要的一步。通过仔细倾听和专业分析，我们提高您的申请成功率，并为您识别最佳机会。",
        galleryTitle: "海外入籍的视觉见解",
        galleryDesc: "通过我们精心策划的见解和体验画廊，探索海外入籍的视觉之旅。",
        ContentSections: "探索我们的海外入籍解决方案",
        vanuatuCitizenshipByContribution:"捐款入籍 – 瓦努阿图 (VCP)",
        vanuatuCitizenshipByContributionDesc: "瓦努阿图是英联邦成员国，提供稳健的法律框架和有利的税收环境，无所得税、资本利得税或遗产税。入籍后，您将获得完整的公民权利，包括在这个离岸避税天堂的居住、工作和生活特权。",
        vanuatuCitizenshipByContributionBenefit_1: "低门槛和简单的流程",
        vanuatuCitizenshipByContributionBenefit_2: "允许双重国籍",
        vanuatuCitizenshipByContributionBenefit_3: "免费教育和医疗服务",
        vanuatuCitizenshipByContributionBenefit_4: "可免签进入约125个国家（包括英国、马来西亚、香港、新加坡）。",
        vanuatuCitizenshipByContributionBenefit_5: "快速通道：护照可在短短30天内取得。我们处理评估、申请、政府捐款和入籍支持。",
        stKittsNevisCitizenshipByInvestment:"圣基茨及尼维斯投资入籍",
        stKittsNevisCitizenshipByInvestmentDesc: "该项目成立于1984年，是世界上最古老、最稳定的投资入籍计划。成功申请者将获得公民身份、护照和居住权。我们将引导您和您的家人完成整个申请过程。主要优势包括：认可双重国籍；可免签进入150多个国家（包括英国、新加坡、澳门）；全球收入、资本利得、赠与、遗产或财富均无税收；离岸商业机会和联邦公民福利。时间表：大约3个月内获得永久居留权和公民身份。",
        stKittsNevisCitizenshipByInvestmentBenefit_1: "双重国籍认可",
        stKittsNevisCitizenshipByInvestmentBenefit_2: "可免签证进入150多个国家（包括英国、新加坡、澳门）",
        stKittsNevisCitizenshipByInvestmentBenefit_3: "全球收入、资本利得、赠与、遗产或财富均无税收",
        stKittsNevisCitizenshipByInvestmentBenefit_4: "离岸商业机会和联邦公民福利",
        Timeline: "大约3个月内获得永久居留权和公民身份。",
        travelResidentVisas:"其他国家的旅游及居留签证",
        travelResidentVisasDesc: "我们提供全面的签证服务，包括旅游签证、长期居留签证以及向世界各国的申请。无论是旅行、商务、学习还是搬迁，我们的团队都会根据您的目标和背景量身定制解决方案。",
        ctaTitle: "与Connexions一起开启您的全球未来",
        ctaDesc: "从税务优化到第二护照和免签旅行——让我们为您和您的家人确保最佳路径。",
        ctaButton: "立即获取您的个性化评估"
        
      }
    };
  
    const current = content[lang];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="container mx-auto py-4">
          {null}
        </div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg"
            alt="Aerial view of tropical paradise island in Vanuatu"
            className="w-full h-full object-cover brightness-[0.6] scale-105 transition-transform duration-1000 hover:scale-110"
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

      {/* Introduction */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <p className="text-xl text-gray-700 leading-relaxed mb-12">
            {current.intro}
          </p>

          {/* Gallery - Visual Highlights */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">{current.galleryTitle}</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/9482126/pexels-photo-9482126.jpeg"
                  alt="Aerial view of pristine island in Vanuatu"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://images.pexels.com/photos/5769835/pexels-photo-5769835.jpeg"
                  alt="Stunning Caribbean coastline of St Kitts & Nevis"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/23/St.Kitts_and_Nevis_-Two_Islands_One_Paradise.jpg"
                  alt="Paradise islands of St Kitts and Nevis"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://liveandletsfly.com/wp-content/uploads/2020/08/Buy-EU-Citizenship.jpg"
                  alt="Citizenship by investment passport and documents"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="snap-center min-w-[280px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://liveandletsfly.com/wp-content/uploads/2020/07/Visa-free-US-Passport-holders.png"
                  alt="World map showing visa-free travel access"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">{current.galleryDesc}</p>
          </div>
        </div>
      </section>

      {/* Interactive Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {current.ContentSections}
          </h2>

          <div className="space-y-6">
            {/* Vanuatu Citizenship by Contribution */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.vanuatuCitizenshipByContribution}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.vanuatuCitizenshipByContributionDesc}</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>{current.vanuatuCitizenshipByContributionBenefit_1} </li>
                  <li>{current.vanuatuCitizenshipByContributionBenefit_2}</li>
                  <li>{current.vanuatuCitizenshipByContributionBenefit_3}</li>
                  <li>{current.vanuatuCitizenshipByContributionBenefit_4}</li>
                </ul>
                <p className="mt-4 font-medium">{current.vanuatuCitizenshipByContributionBenefit_5}</p>
              </div>
            </details>

            {/* St Kitts & Nevis Citizenship */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.stKittsNevisCitizenshipByInvestment}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.stKittsNevisCitizenshipByInvestmentDesc}</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>{current.stKittsNevisCitizenshipByInvestmentBenefit_1}</li>
                  <li>{current.stKittsNevisCitizenshipByInvestmentBenefit_2}</li>
                  <li>{current.stKittsNevisCitizenshipByInvestmentBenefit_3}</li>
                  <li>{current.stKittsNevisCitizenshipByInvestmentBenefit_4}</li>
                </ul>
                <p className="mt-4 font-medium">{current.Timeline}</p>
              </div>
            </details>

            {/* Travel & Resident Visas */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.travelResidentVisas}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.travelResidentVisasDesc}</p>
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-10 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {current.ctaTitle}
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
            {current.ctaDesc}
          </p>
          <button className="bg-white text-teal-700 font-bold py-2 px-10 rounded-full text-xl hover:bg-teal-50 transition-colors shadow-lg">
            {current.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
}