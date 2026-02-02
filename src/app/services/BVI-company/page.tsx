// src/app/[locale]/services/BVI-company/page.tsx
"use client";

import type { Metadata } from 'next';
import { useState, useEffect } from 'react';

export default function BVICompanyPage() {

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
            heroTitle: "BVI & Overseas Company Formation",
            heroDesc: "Fast, confidential and cost-effective offshore company setup in the British Virgin Islands and other jurisdictions.",
            BenfitsTitle: "Why Choose BVI for Your Overseas Company?",
            intro: "The British Virgin Islands (BVI) remains one of the most popular and respected offshore jurisdictions in the world due to its:",
            benfit_1: "High level of confidentiality and privacy",
            benfit_2: "No corporate tax, capital gains tax, inheritance tax or withholding tax",
            benfit_3: "Fast incorporation (usually within 1–2 working days)",
            benfit_4: "Flexible company structure and low maintenance requirements",
            benfit_5: "Strong international reputation and acceptance by banks worldwide",
            benfit_6: "English common law legal system",
            benfit_7: "No requirement for local director or shareholders",
    
            servicesTitle: "Our BVI Company Formation Package Includes",
            standardPackage: "Standard Package",
            standardPackage_1: "Company incorporation & government fees",
            standardPackage_2: " Registered agent & registered office for 1 year",
            standardPackage_3: "Certificate of Incorporation",
            standardPackage_4: "Memorandum & Articles of Association",
            standardPackage_5: "Share certificate & company seal",
            standardPackage_6: "Full corporate kit (minute book, registers, etc.)",
    
            completePackage: "Premium / Tailored Package",
            completePackage_1: "Everything in Standard Package",
            completePackage_2: "Nominee director/shareholder services (if required)",
            completePackage_3: "Bank account opening assistance",
            completePackage_4: "Apostille & document legalisation",
            completePackage_5: "Ongoing compliance & renewal service",
            completePackage_6: "Customized structuring advice",
            ctaDesc: "Most clients receive a detailed proposal within 24 hours.",
            ctaButton: "Get Your BVI Company Proposal"
    
          },
          zh: {
            heroTitle: "英屬維爾京群島及海外公司成立",
            heroDesc: "在英屬維爾京群島及其他司法管轄區快速、保密且具成本效益地設立離岸公司。",
            BenfitsTitle: "為何選擇英屬維爾京群島設立海外公司？",
            intro: "由於以下原因，英屬維爾京群島（BVI）仍然是世界上最受歡迎和尊重的離岸司法管轄區之一：",
            benfit_1: "高度的保密性與隱私",
            benfit_2: "無公司稅、資本利得稅、遺產稅或預扣稅",
            benfit_3: "快速成立（通常在1-2個工作天內）",
            benfit_4: "靈活的公司結構和低維護要求",
            benfit_5: "強大的國際聲譽並被全球銀行接受",
            benfit_6: "英國普通法法律體系",
            benfit_7: "無需本地董事或股東",
            servicesTitle: "我們的BVI公司成立套餐包括",
            standardPackage: "標準套餐",
            standardPackage_1: "公司註冊與政府費用",
            standardPackage_2: "註冊代理人及註冊辦公室（1年）",
            standardPackage_3: "註冊證書",
            standardPackage_4: "組織大綱及章程細則",
            standardPackage_5: "股份證書及公司印章",
            standardPackage_6: "完整的公司套件（會議記錄冊、登記冊等）",
            completePackage: "高級/定制套餐",
            completePackage_1: "標準套餐中的所有內容",
            completePackage_2: "提名董事/股東服務（如有需要）",
            completePackage_3: "銀行帳戶開設協助",
            completePackage_4: "公證及文件合法化",
            completePackage_5: "持續合規及續期服務",
            completePackage_6: "定制結構建議",
            ctaDesc: "大多數客戶可在24小時內收到詳細的建議書。",
            ctaButton: "獲取您的BVI公司建議書"
          },
          cn: {
            heroTitle: "英属维尔京群岛及海外公司成立",
            heroDesc: "在英属维尔京群岛及其他司法管辖区快速、保密且具成本效益地设立离岸公司。",
            BenfitsTitle: "为何选择英属维尔京群岛设立海外公司？",
            intro: "由于以下原因，英属维尔京群岛（BVI）仍然是世界上最受欢迎和尊重的离岸司法管辖区之一：",
            benfit_1: "高度的保密性与隐私",
            benfit_2: "无公司税、资本利得税、遗产税或预扣税",
            benfit_3: "快速成立（通常在1-2个工作天内）",
            benfit_4: "灵活的公司结构和低维护要求",
            benfit_5: "强大的国际声誉并被全球银行接受",
            benfit_6: "英国普通法法律体系",
            benfit_7: "无需本地董事或股东",
            servicesTitle: "我们的BVI公司成立套餐包括",
            standardPackage: "标准套餐",
            standardPackage_1: "公司注册与政府费用",
            standardPackage_2: "注册代理人及注册办公室（1年）",
            standardPackage_3: "注册证书",
            standardPackage_4: "组织大纲及章程细则",
            standardPackage_5: "股份证书及公司印章",
            standardPackage_6: "完整的公司套件（会议记录册、登记册等）",
            completePackage: "高级/定制套餐",
            completePackage_1: "标准套餐中的所有内容",
            completePackage_2: "提名董事/股东服务（如有需要）",
            completePackage_3: "银行帐户开设协助",
            completePackage_4: "公证及文件合法化",
            completePackage_5: "持续合规及续期服务",
            completePackage_6: "定制结构建议",
            ctaDesc: "大多数客户可在24小时内收到详细的建议书。",
            ctaButton: "获取您的BVI公司建议书"
          }
        };
      
        const current = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/12921445/pexels-photo-12921445.jpeg"
            alt="Offshore financial and legal concept"
            className="w-full h-full object-cover brightness-50 scale-105"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
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
                  <li>• {current.completePackage_6}</li>
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