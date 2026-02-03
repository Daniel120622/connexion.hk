// src/app/wealth-inheritance/page.tsx
'use client';

import React, { useEffect, useState } from 'react';

export default function WealthInheritancePage() {

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
          heroTitle: "Wealth Inheritance Planning",
          heroDesc: "Secure, tax-efficient, multi-generational transfer of your legacy from Hong Kong.",
          intro: "China’s economic rise has created tremendous wealth for entrepreneurs. As the time comes to pass on businesses and fortunes, safe and efficient inheritance is a top priority.",
          intro_2:"Connexions in Hong Kong provides specialized succession planning for Chinese high-net-worth families, leveraging global financial expertise and local advantages.",
          coreSolutionsTitle: "Our Three Core Solutions",
          ClickToLearnMore: "Click to learn more →",
          service_1_title: "Connexions Planning & Execution",
          service_1_desc: "We build personalized, long-term strategies to protect your wealth and transfer it smoothly to future generations.",
          service_1_benefit_1: "Future-proof financial planning to control assets, cash flow and family wealth distribution",
          service_1_benefit_2: "Risk & tax optimization in partnership with Hong Kong’s top banks and advisors (including cross-border inheritance tax)",
          service_1_benefit_3: "Secure overseas liquid reserves for unexpected family needs and multi-generational protection",
          service_1_benefit_4: "US Dollar overseas assets to hedge RMB currency risk and preserve real purchasing power",
          service_2_title: "Jumbo Insurance & Private Bank Financing",
          service_2_desc: "We collaborate with Hong Kong’s premier private banks to create high-value insurance and financing structures that grow wealth while reducing tax exposure.",
          service_2_benefit_1: "Leverage low Hong Kong interest rates to significantly boost insurance coverage and long-term investment returns",
          service_2_benefit_2: "Deliver stable, predictable annual returns through professionally selected financial products",
          service_2_benefit_3: "Strategically minimize or legally eliminate inheritance tax and capital gains tax across jurisdictions",
          service_3_title: "Overseas Trust Structures",
          service_3_desc: "Offshore trusts deliver powerful protection and flexible generational wealth transfer under stable international legal systems.",
          service_3_benefit_1: "Robust asset protection with fully customizable distribution to future generations",
          service_3_benefit_2: "Shield against risks from marriage, creditors, lawsuits, accidents, taxes and inheritance disputes",
          service_3_benefit_3: "Reduce legal and jurisdictional risks through expert offshore trust structuring",
          service_3_benefit_4: "Enhanced privacy, control and long-term family wealth preservation",
          CloseButtonLabel: "Close",  
          ctaTitle: "Start Your Wealth Inheritance Planning",
          ctaDesc: "Most clients begin with a personalized consultation to assess their unique inheritance needs.",
          ctaButton: "Schedule Your Consultation"

        },

        zh: {
          heroTitle: "財富繼承規劃",
          heroDesc: "從香港實現您的財富傳承，確保安全、高效、節稅的多代傳遞。",
          intro: "中國經濟的崛起為企業家創造了巨大的財富。當傳承企業和財富的時刻到來時，安全高效的繼承成為首要任務。",
          intro_2:"Connexions香港分公司為中國高淨值家庭提供專業的繼承規劃，利用全球金融專業知識和本地優勢。",
          coreSolutionsTitle: "我們的三大核心解決方案",
          ClickToLearnMore: "點擊了解更多 →",
          service_1_title: "Connexions規劃與執行",
          service_1_desc: "我們制定個人化的長期策略，以保護您的財富並順利傳遞給未來幾代人。",
          service_1_benefit_1: "前瞻性的財務規劃，控制資產、現金流量和家庭財富分配",
          service_1_benefit_2: "與香港頂級銀行和顧問合作進行風險和稅務優化（包括跨國遺產稅）",
          service_1_benefit_3: "為意外的家庭需求和多代保護提供海外流動儲備",
          service_1_benefit_4: "美元海外資產對沖人民幣匯率風險，維持實際購買力",
          service_2_title: "巨額保險與私人銀行融資",
          service_2_desc: "我們與香港頂級私人銀行合作，創建高價值的保險和融資結構，在減少稅收風險的同時實現財富增長。",
          service_2_benefit_1: "利用香港低利率大幅提升保險覆蓋範圍及長期投資報酬率",
          service_2_benefit_2: "透過專業選擇的金融產品實現穩定、可預測的年度回報",
          service_2_benefit_3: "策略性地最小化或合法消除跨司法區的遺產稅和資本利得稅",
          service_3_title: "海外信託架構",
          service_3_desc: "離岸信託在穩定的國際法律體系下提供強大的保護和靈活的代際財富傳承。",
          service_3_benefit_1: "強大的資產保護，財富可完全客製化分配給未來世代",
          service_3_benefit_2: "防範婚姻、債權人、訴訟、意外、稅務和繼承糾紛的風險",
          service_3_benefit_3: "透過專業的離岸信託架構降低法律和司法風險",
          service_3_benefit_4: "增強隱私、控制力和長期家庭財富保護",
          CloseButtonLabel: "關閉",
          ctaTitle: "開始您的財富繼承規劃",
          ctaDesc: "大多數客戶從個人化諮詢開始，以評估其獨特的繼承需求。",
          ctaButton: "安排您的諮詢"
        },

        cn: {
          heroTitle: "财富继承规划",
          heroDesc: "从香港实现您的财富传承，确保安全、高效、节税的多代传递。",
          intro: "中国经济的崛起为企业家创造了巨大的财富。当传承企业和财富的时刻到来时，安全高效的继承成为首要任务。",
          intro_2:"Connexions香港分公司为中国高净值家庭提供专业的继承规划，利用全球金融专业知识和本地优势。",
          coreSolutionsTitle: "我们的三大核心解决方案",
          ClickToLearnMore: "点击了解更多 →",
          service_1_title: "Connexions规划与执行",
          service_1_desc: "我们制定个性化的长期战略，以保护您的财富并顺利传递给未来几代人。",
          service_1_benefit_1: "前瞻性的财务规划，控制资产、现金流和家庭财富分配",
          service_1_benefit_2: "与香港顶级银行和顾问合作进行风险和税务优化（包括跨境遗产税）",
          service_1_benefit_3: "为意外的家庭需求和多代保护提供海外流动储备",
          service_1_benefit_4: "美元海外资产对冲人民币汇率风险，保持实际购买力",
          service_2_title: "巨额保险与私人银行融资",
          service_2_desc: "我们与香港顶级私人银行合作，创建高价值的保险和融资结构，在减少税收风险的同时实现财富增长。",
          service_2_benefit_1: "利用香港低利率显著提升保险覆盖范围和长期投资回报",
          service_2_benefit_2: "通过专业选择的金融产品实现稳定、可预测的年度回报",
          service_2_benefit_3: "战略性地最小化或合法消除跨司法区的遗产税和资本利得税",
          service_3_title: "海外信托结构",
          service_3_desc: "离岸信托在稳定的国际法律体系下提供强大的保护和灵活的代际财富传承。",
          service_3_benefit_1: "强大的资产保护，财富可完全定制分配给未来几代人",
          service_3_benefit_2: "防范婚姻、债权人、诉讼、意外、税收和继承纠纷的风险",
          service_3_benefit_3: "通过专业的离岸信托结构降低法律和司法风险",
          service_3_benefit_4: "增强隐私、控制力和长期家庭财富保护",
          CloseButtonLabel: "关闭",
          ctaTitle: "开始您的财富继承规划",
          ctaDesc: "大多数客户从个性化咨询开始，以评估其独特的继承需求。",
          ctaButton: "安排您的咨询"

        }
      };
    
  const current = content[lang];
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const openModal = (index: number) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

  // All three services — fully edited for clarity, readability & premium feel
  const services = [
    {
      title: current.service_1_title,
      number: 1,
      color: 'blue',
      details: (
        <div className="space-y-8">
          <p className="text-xl font-semibold text-gray-900 leading-tight">
            {current.service_1_desc}
          </p>
          <ul className="space-y-5 text-lg text-gray-800">
            <li className="flex items-start gap-4">
              <span className="text-blue-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_1_benefit_1}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-blue-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_1_benefit_2}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-blue-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_1_benefit_3}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-blue-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_1_benefit_4}</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: current.service_2_title,
      number: 2,
      color: 'green',
      details: (
        <div className="space-y-8">
          <p className="text-xl font-semibold text-gray-900 leading-tight">
            {current.service_2_desc}
          </p>
          <ul className="space-y-5 text-lg text-gray-800">
            <li className="flex items-start gap-4">
              <span className="text-green-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_2_benefit_1}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-green-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_2_benefit_2}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-green-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_2_benefit_3}</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: current.service_3_title,
      number: 3,
      color: 'purple',
      details: (
        <div className="space-y-8">
          <p className="text-xl font-semibold text-gray-900 leading-tight">
            {current.service_3_desc}
          </p>
          <ul className="space-y-5 text-lg text-gray-800">
            <li className="flex items-start gap-4">
              <span className="text-purple-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_3_benefit_1}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-purple-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_3_benefit_2}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-purple-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_3_benefit_3}</span>
            </li>
            <li className="flex items-start gap-4">
              <span className="text-purple-600 font-black text-3xl leading-none">•</span>
              <span>{current.service_3_benefit_4}</span>
            </li>
          </ul>
        </div>
      ),
    },
  ];

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
        <div className="container mx-auto py-8">
          {null}
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/Wealth-hero-banner.jpg"
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


      {/* ==================== Introduction ==================== */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-800 mb-6">
            {current.intro}
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            {current.intro_2}
          </p>
        </div>
      </section>

      {/* ==================== Core Solutions Cards ==================== */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {current.coreSolutionsTitle}
          </h2>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                onClick={() => openModal(index)}
                className={`group bg-white rounded-2xl shadow-xl p-8 md:p-10 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-t-4 border-${service.color}-600 hover:border-${service.color}-700`}
              >
                <div className="flex items-center gap-5 mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-${service.color}-50 flex items-center justify-center text-4xl font-bold text-${service.color}-600 group-hover:scale-110 transition-transform`}
                  >
                    {service.number}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-800">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 group-hover:text-gray-700">{current.ClickToLearnMore}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CTA Section ==================== */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {current.ctaTitle}
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 opacity-90">
            {current.ctaDesc}
          </p>
          <button className="bg-white text-indigo-800 font-bold py-6 px-14 rounded-full text-2xl hover:bg-gray-100 transition-colors shadow-2xl hover:shadow-3xl transform hover:-translate-y-1">
            {current.ctaButton}
          </button>
        </div>
      </section>
    </div>
  );
}