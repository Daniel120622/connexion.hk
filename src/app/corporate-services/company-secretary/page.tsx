"use client";

import React from 'react';
import { FileSignature } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import { corporateServicesNav, corporateServicesOrder } from '@/lib/corporateServicesNav';


export default function CompanySecretaryPage() {
  const { lang } = useLanguage();
    
      // Content switch
      const content = {
        en: {
          heroTitle: "Company Secretary Services",
          heroDesc: "Ensure full compliance and smooth corporate governance for your Hong Kong company.",
          MainTitle: "Professional Company Secretary Support in Hong Kong",
          intro1: "Each Hong Kong company should appoint a resident in Hong Kong or a Hong Kong company as the company secretary. Its primary responsibility is to ensure the company complies with the legal requirements of Hong Kong and keep records of the company’s statutory books.",
          intro2: "Acting as your company, Connexions helps you operate the business locally and abroad coincidently and to provide high quality solutions to resolve issues which may arise from time to time. Meanwhile, we provide updates on the latest corporate laws and regulations which may impact your company. We take care of the tax filing, respond to various government correspondence. These save your time so that you can focus on your business.",
          ctaDesc: "Fixed annual fee – transparent pricing with no hidden charges.",
          ctaButton: "Get Your Company Secretary Proposal"
        },

        zh: {
          heroTitle: "公司秘書服務",
          heroDesc: "確保您的香港公司全面合規及順暢的公司治理。",
          MainTitle: "專業的香港公司秘書支援",
          intro1: "每家香港公司必須委任一名駐留在香港的個人或香港公司擔任公司的秘書。其職責是務使該公司符合香港的法定要求，必須保持記錄公司的法定賬冊和記錄等。宏達策略將作為您的專業公司秘書，我們的責任是助您了解順利運營香港及海內外業務，提供優質的服務解決相關的疑問。同時我們助您了解最新的企業法規、協助您分析公司將會面臨的影響等，讓您合法並順利地開展業務。我們負責完善公司法規、處理稅務事項、回應各方面執行作業，為您節省時間，讓您專心自己的事業。",
          intro2: "",
          ctaDesc: "立即聯絡我們，了解更多",
          ctaButton: "聯絡我們"
        },
        cn: {
          heroTitle: "公司秘书服务",
          heroDesc: "确保您的香港公司全面合规及顺畅的公司治理。",
          MainTitle: "专业的香港公司秘书支持",
          intro1: "每家香港公司必须委任一名驻留在香港的个人或香港公司担任公司的秘书。其职责是务使该公司符合香港的法定要求，必须保持记录公司的法定账册和记录等。宏达策略将作为您的专业公司秘书，我们的责任是助您了解顺利运营香港及海内外业务，提供优质的服务解决相关的疑问。同时我们助您了解最新的企业法规、协助您分析公司将会面临的影响等，让您合法并顺利地开展业务。我们负责完善公司法规、处理税务事项、回应各方面执行作业，为您节省时间，让您专心自己的事业。",
          intro2: "",
          ctaDesc: "立即联络我们，了解更多",
          ctaButton: "联系我们"
        }
      };
    
      const current = content[lang];



    return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        icon={FileSignature}
        title={current.heroTitle}
        description={current.heroDesc}
        imageSrc="/images/services/secretary.jpg"
        imageAlt="Company secretary services"
        variant="corporate"
        ctaLabel={current.ctaButton}
        ctaHref="/contact"
        chips={corporateServicesOrder.map((slug) => ({
          label: corporateServicesNav[slug].title[lang],
          href: corporateServicesNav[slug].href,
          active: slug === "company-secretary",
        }))}
      />

      {/* Main Content */}
      <section id="company-secretary" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {current.MainTitle}
          </h2>

          <div className="space-y-6 text-lg leading-loose text-gray-700">
            <p>{current.intro1}</p>
            <p>{current.intro2}</p>
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
      </section>
    </div>
  );
}
