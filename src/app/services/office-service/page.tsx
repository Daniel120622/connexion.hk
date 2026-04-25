"use client";

import type { Metadata } from 'next';
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';


export default function CompanySecretaryPage() {
  const { lang } = useLanguage();
    
      // Content switch
      const content = {
        en: {
          heroTitle: "Register Office Service",
          heroDesc: "Ensure full compliance and smooth corporate governance for your Hong Kong company.",
          MainTitle: "",
          intro1: "Each Hong Kong company must have a registered office in Hong Kong. Registered address must be a local address, not just the postal mail, in order to maintain the legal records and receive government letters.",
          intro2: "Connexions provides personalized office services. It not only provides registered office address in Hong Kong, but also provides value-added services. We are responsible for handling letters and correspondence.",
          ctaDesc: "Fixed annual fee – transparent pricing with no hidden charges.",
          ctaButton: "Get Your Company Secretary Proposal"
        },

        zh: {
          heroTitle: "辦公室服務",
          heroDesc: "確保您的香港公司全面合規及順暢的公司治理。",
          MainTitle: "",
          intro1:"每一家香港公司必須維持一個香港註冊辦事處，為維持公司的法定記錄和接收政府文書。註冊地址必須是本地的實在地址，不能只是郵政信箱。",
          intro2: "宏達策略提供個性化辦事處服務，我們不僅提供註冊辦事處地址，同時還提供附加增值服務。我們負責收發信件及處理，在您力所不能及的地方當您的左右手。",
          ctaDesc: "立即聯絡我們，了解更多",
          ctaButton: "聯絡我們"
        },
        cn: {
          heroTitle: "办公室服务",
          heroDesc: "确保您的香港公司全面合规及顺畅的公司治理。",
          MainTitle: "",
          intro1:"每一家香港公司必须维持一个香港注册办事处，为维持公司的法定记录和接收政府文书。注册地址必须是本地的实在地址，不能只是邮政信箱。",
          intro2: "宏达策略提供个性化办事处服务，我们不仅提供注册办事处地址，同时还提供附加增值服务。我们负责收发信件及处理，在您力所不能及的地方当您的左右手。",
          ctaDesc: "立即联络我们，了解更多",
          ctaButton: "联系我们"
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
            src="/images/services/officeService.jpg"
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