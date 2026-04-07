// src/app/wealth-inheritance/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function WealthInheritancePage() {
  const { lang } = useLanguage();
    
      // Content switch
      const content = {
        en: {
          heroTitle: "Fortune Inheritance",
          heroDesc: "Secure, tax-efficient, multi-generational transfer of your legacy from Hong Kong.",
          intro: "For the past two decades, the economy in China has boomed ample of entrepreneurs grasp the opportunities to create enormous business kingdoms. It’s time to handover both enterprises and fortune. How to effectively and safely inherit the fortune to next generation become their concerns.",
          intro_2:"As an ambassador in Hong Kong, the international financial center, Connexions equips with professional wealth management and financial planning team, who understand the Hong Kong laws and regulations as well as international financial system,. We assist Chinese high net wealth individuals and families and advise on wealth management and succession planning.",
          
          Title1: "Planning and Accomplishment by Connexions",
          Title2: "Cooperating with Private Bank of Financing for Jumbo Insurance Policy/Financial Products",
          Title3: "Oversea Trust",

          Title1List: [
            "1. Plan future financial arrangement for individuals and families so that property and cash flow can be better managed and controlled.",
            "2. Assist in the planning process and work closely with financial institutions and professional advisors in Hong Kong, in order to manage risks associated with assets, liabilities and tax (especially inheritance taxes in countries)",
            "3. Set up liquid asset overseas as absolute oversea assets to provide needs which may arise any time for individual and families, to benefit inheritance for next few generations",
            "4. To create overseas US Dollar property to effectively hedge currency risk"
          ],

          Title2List: [
            "1. Leverage on relatively low interest rate of Hong Kong private banks to multiply coverage/return on investment in times.",
            "2. Achieve relatively steady annual return.",
            "3. Plan effectively avoid inheritance tax and capital gains tax across countries."
          ],

          Title3List: [
            "1. Asset protection with flexible distribution",
            "2. Manage issues and risks arising from marriage, debt, investment, accident, tax and inheritance",
            "3. Manage legal risks",
            "4. Set up overseas trust protected by oversea laws",
          ],

          ctaTitle: "Start Your Wealth Inheritance Planning",
          ctaDesc: "Most clients begin with a personalized consultation to assess their unique inheritance needs.",
          ctaButton: "Schedule Your Consultation"

        },

        zh: {
          heroTitle: "財富繼承",
          heroDesc: "從香港實現您的財富傳承，確保安全、高效、節稅的多代傳遞。",
          intro: "過去二十年，中國經濟騰飛，大量的創業者都能乘時而起，創造了龐大的商業王國。時至今日，大批的「富一代」都已過盛年，並且積累了可觀的財富。而無論企業及財富都到了要交棒的時候，如何有效及安全地將財富傳承給下一代是很多企業家都關注的議題。",
          intro_2:"宏達策略團隊作為香港這個國際金融中心的領軍團隊，擁有專業的財富管理和財務策劃人員，熟知香港法規和國際金融體系的特點，作為中國高資產人士財富管理及傳承的第一選擇當之無愧。",

          Title1: "宏達團隊的規劃目的及效果",
          Title2: "宏達團隊攜手私行融資配合大額保單／理財產品",
          Title3: "海外信託",

          Title1List: [
            "1. 為個人及家人準備好將來的財務安排，在合適的時候完全可以掌握且穩妥的管理資產和現金流。",
            "2. 協助整個規劃的流程，及配合在港金融機構及專業團隊，以分配境外的資產、債務、稅務（包括各國遺產稅）等風險",
            "3. 在境外設定流動資金，作為海外的絕對資產，為個人和家人提供不時之需，以惠及幾代的財富傳承",
            "4. 創造境外的美元資產，有效對沖貨幣風險"
          ],

          Title2List: [
            "1. 利用香港私人銀行極低的融資利率，有效管理保額／投資回報",
            "2. 獲取每年的相對穩定回報",
            "3. 有效規避各國的遺產稅、資產增值稅"
          ],

          Title3List: [
            "1. 資產保護及靈活分配",
            "2. 解決婚姻、債務、投資、意外、稅務、繼承過程中產生的問題風險",
            "3. 管理法律風險",
            "4. 成立海外信託以得到海外法律保障"
          ],

          ctaTitle: "開始您的財富繼承規劃",
          ctaDesc: "大多數客戶從個人化諮詢開始，以評估其獨特的繼承需求。",
          ctaButton: "安排您的諮詢"
        },
      

        cn: {
          heroTitle: "财富继承",
          heroDesc: "从香港实现您的财富传承，确保安全、高效、节税的多代传递。",
          intro: "过去二十年，中国经济腾飞，大量的创业者都能乘时而起，创造了庞大的商业王国。时至今日，大批的「富一代」都已过盛年，并且积累了可观的财富。而无论企业及财富都到了要交棒的时候，如何有效及安全地将财富传承给下一代是很多企业家都关注的议题。 ",
          intro_2:"宏达策略团队作为香港这个国际金融中心的领军团队，拥有专业的财富管理和财务策划人员，熟知香港法规和国际金融体系的特点，作为中国高资产人士财富管理及传承的第一选择当之无愧。 ",

          Title1: "宏达团队的规划目的及效果",
          Title2: "宏达团队携手私行融资配合大额保单／理财产品",
          Title3: "海外信托",

          Title1List: [
          "1. 为个人及家人准备好将来的财务安排，在合适的时候完全可以掌握且稳妥的管理资产和现金流。 ",
          "2. 协助整个规划的流程，及配合在港金融机构及专业团队，以分配境外的资产、债务、税务（包括各国遗产税）等风险",
          "3. 在境外设定流动资金，作为海外的绝对资产，为个人和家人提供不时之需，以惠及几代的财富传承",
          "4. 创造境外的美元资产，有效对冲货币风险"
          ],

          Title2List: [
          "1. 利用香港私人银行极低的融资利率，有效管理保额／投资回报",
          "2. 获取每年的相对稳定回报",
          "3. 有效规避各国的遗产税、资产增值税"
          ],

          Title3List: [
          "1. 资产保护及灵活分配",
          "2. 解决婚姻、债务、投资、意外、税务、继承过程中产生的问题风险",
          "3. 管理法律风险",
          "4. 成立海外信托以得到海外法律保障"
          ],

          ctaTitle: "开始您的财富继承规划",
          ctaDesc: "大多数客户从个人化咨询开始，以评估其独特的继承需求。 ",
          ctaButton: "安排您的咨询"

        }
      };
    
  const current = content[lang];
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const openModal = (index: number) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);


    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */} 
        <section className="relative h-96 md:h-[500px] lg:h-[600px] flex items-center justify-center text-white overflow-hidden">
          

          <div className="absolute inset-0">
            <img
              src="/images/banner/wealth.jpg"
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
        <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
              {current.intro}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
              {current.intro_2}
            </p>
          </div>
        </section>


        {/* ==================== Photo-Text Pairs Section ==================== */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Photo with Title1 */}
              <div>
                <img
                  src="/images/fortuneInheritance/title1.jpg"
                  alt="Title1 Image"
                  className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{current.Title1}</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  {current.Title1List.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              {/* Right Photo with Title2 */}
              <div className="md:order-2">
                <img
                  src="/images/fortuneInheritance/title2.jpg"
                  alt="Title2 Image"
                  className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{current.Title2}</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  {current.Title2List.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              {/* Left Photo with Title3 */}
              <div>
                <img
                  src="/images/fortuneInheritance/title3.jpg"
                  alt="Title3 Image"
                  className="rounded-lg shadow-lg object-cover w-full h-64 md:h-80"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{current.Title3}</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  {current.Title3List.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>


                  {/* ==================== CTA Section ==================== */}
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

        </section>
    </div>
  );
}