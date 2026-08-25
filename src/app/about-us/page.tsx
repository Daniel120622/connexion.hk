// src/app/about-us/page.tsx  (or components/about-us.tsx if you use it as component)
"use client";

import React from 'react';
import Image from 'next/image';
import { Handshake } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';

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
      heroTitle: "歡迎來到宏達策略",
      heroDesc: "您的生活好夥伴",
      intro: "宏達策略是一家擁有數十年專業服務經驗的集團，為數百位本地及國際客戶提供服務。我們深切珍惜客戶對我們的信任，並致力於提供卓越的服務品質。建立在相互信任、理解及客戶強烈推薦的基礎上，宏達策略是您在香港及海外的可靠長期夥伴。",
      
      proficiencyTitle: "我們的專業能力",
      proficiencyText1: "我們擁有具備豐富經驗及專業知識的會計師和行業資深的顧問，深諳移民法規，熟知移民政策並洞悉最新移民動向。超過10年從業經驗，累計至今，接受我們專業服務的國內外客戶已超過千位。",
      
      servicesTitle: "全方位服務",
      servicesText1: "我們根據您的背景提供多元化移民簽證服務，並為您一家人申請香港及海外居民身份做充分的準備。我們結合您的公司狀況，營運範疇和盈利需求及法規要求，協助管理您的香港及海外的公司，企業賬務、財務報告、公司及個人稅務等各種財務服務。",

      followUpTitle: "全程跟進",
      followUpText1: "我們重視每一位客戶提出的要求，提供接待考察等全程服務支持，認真審核申請資料並及時跟進申請進度。我們是您在香港的生活好伙伴。您在香港生活碰到問題，由我們為您出謀劃策，排憂解難，解決實當中的困難。我們的服務為您省時省力，幫助您迅速地適應香​​港生活，在香港生活得舒心舒適。",
      followUpText2: "無論您在香港生活中遇到任何問題，我們都會竭盡所能為您提供解決方案。我們的服務不僅能為您節省時間和精力，更希望您能在香港真正安居樂業，過上愉快舒適的生活。",

      closingTitle: "宏達策略 — 你的生活好夥伴，提供全面的商業解決方案",
      closingDesc: "我們期待成為您在香港及海外移民、居留權及商業成功的可靠夥伴。",
      closingCall: "立即聯絡我們，了解更多"
    },
    cn: {
      heroTitle: "欢迎来到 宏达策略",
      heroDesc: "您的生活好伙伴",
      intro: "宏达策略是一家拥有数十年专业服务经验的集团，为数百位本地及国际客户提供服务。我们深切珍惜客户对我们的信任，并致力于提供卓越的服务品质。建立在相互信任、理解及客户强烈推荐的基础上，宏达策略是您在香港及海外的可靠长期伙伴。",

      proficiencyTitle: "我们的专业能力",
      proficiencyText1: "我们拥有具备丰富经验及专业知识的会计师和行业资深的顾问，深谙移民法规，熟知移民政策并洞悉最新移民动向。超过10年从业经验，累计至今，接受我们专业服务的国内外客户已超过千位。",

      servicesTitle: "全方位服务",
      servicesText1: "我们根据您的背景提供多元化移民签证服务，并为您一家人申请香港及海外居民身份做充分的准备。我们结合您的公司状况，营运范畴和盈利需求及法规要求，协助管理您的香港及海外的公司，企业账务、财务报告、公司及个人税务等各种财务服务。",

      followUpTitle: "全程跟进",
      followUpText1: "我们重视每一位客户提出的要求，提供接待考察等全程服务支持，认真审核申请资料并及时跟进申请进度。我们是您在香港的生活好伙伴。您在香港生活碰到问题，由我们为您出谋划策，排忧解难，解决实当中的困难。我们的服务为您省时省力，帮助您迅速地适应香​​港生活，在香港生活得舒心舒适。",
      followUpText2: "无论您在香港生活中遇到任何问题，我们都会竭尽所能为您提供解决方案。我们的服务不仅能为您节省时间和精力，更希望您能在香港真正安居乐业，过上愉快舒适的生活。",

      closingTitle: "宏达策略 — 你的生活好伙伴，提供全面的商业解决方案",
      closingDesc: "我们期待成为您在香港及海外移民、居留权及商业成功的可靠伙伴。",
      closingCall: "立即联络我们，了解更多"
    }
  
  };

  const current = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">

      <PageHero
        icon={Handshake}
        title={current.heroTitle}
        description={current.heroDesc}
        imageSrc="/images/banner/aboutUs.png"
        imageAlt="Hong Kong Victoria Harbour skyline at dusk"
        variant="about"
        ctaLabel={current.closingCall}
        ctaHref="/contact"
        chips={[
          
        ]}
      />

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
      <section id="proficiency" className="scroll-mt-24 py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {current.proficiencyTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ourProficiency.png"
                alt="Professional team collaboration and expertise in office setting"
                width={1024}
                height={731}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {current.proficiencyText1}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* All-Rounded Services */}
      <section id="services" className="scroll-mt-24 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {current.servicesTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                {current.servicesText1}
              </p>

            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/images/index-ourService/accounting-services.jpg"
                alt="Accountant reviewing financial documents for business compliance"
                width={1280}
                height={917}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Follow-up */}
      <section id="follow-up" className="scroll-mt-24 py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {current.followUpTitle}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/PeaceOfMindFollowUp.jpg"
                alt="Happy family enjoying new life and settlement success (adaptable to Hong Kong context)"
                width={6048}
                height={4024}
                sizes="(min-width: 768px) 50vw, 100vw"
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