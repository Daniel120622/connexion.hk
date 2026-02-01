// src/app/about-us/page.tsx  (or components/about-us.tsx if you use it as component)
"use client";

import React, { useState, useEffect } from 'react';

export default function AboutUs() {
  // Read language from localStorage
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
      heroTitle: "Welcome to Connexions",
      heroDesc: "Your trusted partner for immigration, residency, and business success in Hong Kong and beyond.",
      intro: "Connexions is an experienced professional services group with decades of dedicated service to hundreds of domestic and international clients. We deeply value the trust placed in us by our clients and are committed to delivering exceptional service quality. Built on mutual trust, understanding, and strong recommendations from our clients, Connexions is your reliable long-term partner in Hong Kong and beyond.",
      proficiencyTitle: "Our Proficiency",
      proficiencyText1: "Our team consists of seasoned accountants and immigration consultants who are well-versed in immigration laws, policies, and the latest global trends.",
      proficiencyText2: "With over 10 years of experience, we have successfully served more than a thousand clients from Hong Kong and around the world, helping them achieve their residency and business goals with confidence.",
      servicesTitle: "All-Rounded Services",
      servicesText1: "We offer comprehensive immigration and visa solutions tailored to your personal and family background, assisting with applications for Hong Kong or overseas residency status.",
      servicesText2: "Beyond immigration, we provide full-spectrum support for managing your Hong Kong or overseas companies — including business account setup, financial reporting, corporate and personal taxation in Hong Kong, and ongoing compliance. Services are fully customized to your company’s circumstances, operational scope, and profitability requirements.",
      followUpTitle: "Peace of Mind Follow-up",
      followUpText1: "We respect every client’s individual needs and provide attentive, end-to-end support — including reception services, in-person field visits, thorough document review, and proactive follow-up on application progress.",
      followUpText2: "As your trusted life partner in Hong Kong, we stand by you through every challenge. Should any issues arise during your life or business journey here, we will do our utmost to provide effective solutions.",
      followUpGoal: "Our goal: Help you save time and effort while building a happy, comfortable, and fulfilling life in Hong Kong.",
      closingTitle: "Connexions — Your Stable Partner for Life and Success in Hong Kong",
      closingDesc: "We look forward to accompanying you on your journey.",
      closingCall: "Contact us today to start building your future with confidence."
    },
    cn: {
      heroTitle: "歡迎來到 Connexions",
      heroDesc: "您在香港及海外移民、居留權及商業成功的可靠夥伴。",
      intro: "Connexions 是一家擁有數十年專業服務經驗的集團，為數百位本地及國際客戶提供服務。我們深切珍惜客戶對我們的信任，並致力於提供卓越的服務品質。建立在相互信任、理解及客戶強烈推薦的基礎上，Connexions 是您在香港及海外的可靠長期夥伴。",
      proficiencyTitle: "我們的專業能力",
      proficiencyText1: "我們的團隊由資深會計師及移民顧問組成，熟悉移民法規、政策及最新全球趨勢。",
      proficiencyText2: "擁有超過10年經驗，我們已成功服務超過一千位來自香港及全球的客戶，協助他們自信地實現居留及商業目標。",
      servicesTitle: "全方位服務",
      servicesText1: "我們提供全面的移民及簽證解決方案，根據您的個人及家庭背景量身定制，協助申請香港或海外居留身份。",
      servicesText2: "除了移民服務，我們為您的香港或海外公司提供全方位支援，包括開設商業賬戶、財務報告、香港公司及個人稅務，以及持續合規。服務完全根據您的公司情況、經營範圍及盈利要求定制。",
      followUpTitle: "安心跟進",
      followUpText1: "我們尊重每位客戶的個別需求，提供細心、周到的全程支援 — 包括接待服務、實地考察、文件審查及主動跟進申請進度。",
      followUpText2: "作為您在香港的終身信賴夥伴，我們將與您共同面對每一個挑戰。如在香港生活或商業旅程中出現任何問題，我們將全力提供有效解決方案。",
      followUpGoal: "我們的目標：幫助您節省時間與精力，建立快樂、舒適、充實的香港生活。",
      closingTitle: "Connexions — 您在香港生活與成功的穩定夥伴",
      closingDesc: "我們期待陪伴您走過這段旅程。",
      closingCall: "立即聯絡我們，開始建立您的未來。"
    }
  };

  const current = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33394570/pexels-photo-33394570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hong Kong Victoria Harbour skyline at dusk"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            {current.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light opacity-95">
            {current.heroDesc}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              {current.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Our Proficiency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {current.proficiencyTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://framerusercontent.com/images/BLcJXeIS2Hy3dyQrluThkwCo5BI.png?width=1536&height=1024"
                alt="Professional team collaboration and expertise in office setting"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {current.proficiencyText1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {current.proficiencyText2}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All-Rounded Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {current.servicesTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                {current.servicesText1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {current.servicesText2}
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <img
                src="https://universalaccountingschool.com/wp-content/uploads/2025/05/virtual-bookkeeping-1.png"
                alt="Accountant reviewing financial documents for business compliance"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Follow-up */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {current.followUpTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://liveandletsfly.com/wp-content/uploads/2021/08/Sao-Paulo-Trip-Report.jpeg"
                alt="Happy family enjoying new life and settlement success (adaptable to Hong Kong context)"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {current.followUpText1}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {current.followUpText2}
              </p>
              <p className="text-xl font-semibold text-teal-700">
                {current.followUpGoal}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {current.closingTitle}
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
            {current.closingDesc}
          </p>
          <p className="text-lg opacity-90">
            {current.closingCall}
          </p>
        </div>
      </section>
    </div>
  );
}