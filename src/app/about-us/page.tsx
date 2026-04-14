// src/app/about-us/page.tsx  (or components/about-us.tsx if you use it as component)
"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutUs() {
  const { lang } = useLanguage();

  // Content switch
  const content = {
    en: {
      heroTitle: "Welcome to Connexions",
      heroDesc: "Your Life Partner in Hong Kong",
      intro:"Connexions is an experienced professional services group. We have served hundreds of domestic and foreign customers over the decades. Connexions treasures the entrusted relationship with clients and is dedicated to service quality. Coupled with mutual trust and understanding as well as reputation and recommendation from customers Connexoins is your stable life partner.",
      proficiencyTitle: "Our Proficiency",
      proficiencyText1: "We have experienced accountants and consultants, familiar with immigration laws, policies and insight into the latest immigration trends. With more than 10 years of history, we have accumulated more than a thousand customers at home and abroad so far.",
      
      servicesTitle: "All-Rounded Services",
      servicesText1: "We provide a variety of immigration and visa services based on your background and prepare for your family to apply Hong Kong/overseas resident status. We help you to manage your Hong Kong/overseas companies in multiple aspects: business accounts, financial reports, corporate and personal tax in Hong Kong and compliance requirement in accordance with your company’s condition, scope of operations 1 and profitability requirements.",
      followUpTitle: "Peace of Mind Follow-up",
      followUpText1: "We respect every client’s request. We provide reception and clients’ field visit services all the way. We carefully review the application documentations and timely follow up the application progress.",
      followUpText2: "We are your great life partners in Hong Kong. If you encounter with any problems in Hong Kong, we will try our best to provide solutions. Our services can not only help you save time and effort in adopting the life in Hong Kong but live a happy and comfortable life in Hong Kong.",
      
      closingTitle: "Connexions — Your Life Partner in Hong Kong",
      closingDesc: "We look forward to being your reliable partner",
      closingCall: "Contact us today to learn more"
    },
    zh: {
      heroTitle: "歡迎來到 Connexions",
      heroDesc: "您的生活好夥伴",
      intro: "Connexions 是一家擁有數十年專業服務經驗的集團，為數百位本地及國際客戶提供服務。我們深切珍惜客戶對我們的信任，並致力於提供卓越的服務品質。建立在相互信任、理解及客戶強烈推薦的基礎上，Connexions 是您在香港及海外的可靠長期夥伴。",
      
      proficiencyTitle: "我們的專業能力",
      proficiencyText1: "我們擁有具備豐富經驗及專業知識的會計師和行業資深的顧問，深諳移民法規，熟知移民政策並洞悉最新移民動向。超過10年從業經驗，累計至今，接受我們專業服務的國內外客戶已超過千位。",
      
      servicesTitle: "全方位服務",
      servicesText1: "我們根據您的背景提供多元化移民簽證服務，並為您一家人申請香港及海外居民身份做充分的準備。我們結合您的公司狀況，營運範疇和盈利需求及法規要求，協助管理您的香港及海外的公司，企業賬務、財務報告、公司及個人稅務等各種財務服務。",

      followUpTitle: "全程跟進",
      followUpText1: "我們重視每一位客戶提出的要求，提供接待考察等全程服務支持，認真審核申請資料並及時跟進申請進度。我們是您在香港的生活好伙伴。您在香港生活碰到問題，由我們為您出謀劃策，排憂解難，解決實當中的困難。我們的服務為您省時省力，幫助您迅速地適應香​​港生活，在香港生活得舒心舒適。",
      followUpText2: "",

      closingTitle: "Connexions — 您在香港生活與成功的穩定夥伴",
      closingDesc: "我們期待成為您在香港及海外移民、居留權及商業成功的可靠夥伴。",
      closingCall: "立即聯絡我們，了解更多"
    },
    cn: {
      heroTitle: "欢迎来到 Connexions",
      heroDesc: "您的生活好伙伴",
      intro: "Connexions 是一家拥有数十年专业服务经验的集团，为数百位本地及国际客户提供服务。我们深切珍惜客户对我们的信任，并致力于提供卓越的服务品质。建立在相互信任、理解及客户强烈推荐的基础上，Connexions 是您在香港及海外的可靠长期伙伴。",

      proficiencyTitle: "我们的专业能力",
      proficiencyText1: "我们拥有具备丰富经验及专业知识的会计师和行业资深的顾问，深谙移民法规，熟知移民政策并洞悉最新移民动向。超过10年从业经验，累计至今，接受我们专业服务的国内外客户已超过千位。",

      servicesTitle: "全方位服务",
      servicesText1: "我们根据您的背景提供多元化移民签证服务，并为您一家人申请香港及海外居民身份做充分的准备。我们结合您的公司状况，营运范畴和盈利需求及法规要求，协助管理您的香港及海外的公司，企业账务、财务报告、公司及个人税务等各种财务服务。",

      followUpTitle: "全程跟进",
      followUpText1: "我们重视每一位客户提出的要求，提供接待考察等全程服务支持，认真审核申请资料并及时跟进申请进度。我们是您在香港的生活好伙伴。您在香港生活碰到问题，由我们为您出谋划策，排忧解难，解决实当中的困难。我们的服务为您省时省力，帮助您迅速地适应香​​港生活，在香港生活得舒心舒适。",
      followUpText2: "",

      closingTitle: "Connexions — 您在香港生活与成功的稳定伙伴",
      closingDesc: "我们期待成为您在香港及海外移民、居留权及商业成功的可靠伙伴。",
      closingCall: "立即联络我们，了解更多"
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
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/banner/aboutUs.png"
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
                src="/images/ourProficiency.png"
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
                src="/images/PeaceOfMindFollowUp.jpg"
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

      {/* Closing */}
      <div className="mt-16 py-8 text-center">
          <p className="mt-4 text-gray-600">
              {current.closingTitle}
          </p>


        <a href="/contact"
          className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
       >

          {current.closingCall}
        </a>
        <p className="mt-4 text-gray-600">
           {current.closingDesc}
        </p>
      </div>
      </section>
    </div>
  );
}