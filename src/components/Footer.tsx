// src/components/Footer.tsx
"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { MessageCircle, Send, Phone} from 'lucide-react';

export default function Footer() {
  const { lang } = useLanguage();

  const content = {
    en: {
      description: "Connexions HK is a professional business and immigration services company, specializing in providing clients with one-stop solutions.",
      license: "Connexions HK trust or corporate service provider license number: TC001097",
      quickLinks: "Quick Links",
      HongKongImmigration: "Hong Kong Immigration",
      overseaImmigration: "Oversea Immigration",
      companySecretary: "Company Secretary",
      hkLimited: "HK Limited Company",
      bviOversea: "BVI & Oversea Company",
      wealthInheritance: "Wealth Inheritance Planning",
      officeService: "Office Service",
      services: "Corporate Services",
      services2:  "Accounting and Tax Services",
      corporateService: "Corporate Service",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      contactTitle: "Contact US",
      accountingService: "Accounting Service",
      businessAdvisory: "Business Advisory",
      localCompany: "Local Company",
      taxConsulting: "Tax Consulting",
      otherService: "Accountancy and Tax Services",
      address: "Room 902A, 9/F, Capital Centre, 151 Gloucester Road, Wan Chai, Hong Kong",
      phone: "+852 2111 2425",
      email: "sales@connexions.hk",
      copyright: `© ${new Date().getFullYear()} Connexions Corporate Strategies Limited. All rights reserved.`,
    },

    zh: {
      description: "宏達策略是一家專業的商業及移民服務公司，專注為客戶提供一站式解決方案。",
      license: "宏達策略信託或公司服務提供者牌照號碼：TC001097",
      quickLinks: "快速連結",
      HongKongImmigration: "移民香港",
      overseaImmigration: "海外移民",
      companySecretary: "公司秘書",
      hkLimited: "香港有限公司",
      bviOversea: "其他海外公司",
      wealthInheritance: "財富傳承規劃",
      corporateService: "公司服務",
      aboutUs: "關於我們",
      contactUs: "聯絡我們",
      contactTitle: "聯絡我們",
      otherService: "會計及稅務服務",
      accountingService: "會計服務",
      businessAdvisory: "商業諮詢",
      localCompany: "本地公司",
      taxConsulting: "稅務諮詢",
      address: "香港灣仔告士打道151號首都中心9樓902A室",
      phone: "+852 2111 2425",
      email: "sales@connexions.hk",
      copyright: `© ${new Date().getFullYear()} 宏達企業策略有限公司  版權所有。`,
      officeService: "辦公室服務",
      services: "公司服務",
      services2:  "會計及稅務服務",
    },
    cn: {
      description: "宏达策略是一家专业的商业及移民服务公司，专注为客户提供一站式解决方案。",
      license: "宏达策略信托或公司服务提供者牌照号码：TC001097",
      quickLinks: "快速链接",
      HongKongImmigration: "移民香港",
      overseaImmigration: "海外移民",
      companySecretary: "公司秘书",
      hkLimited: "香港有限公司",
      bviOversea: "其他海外公司",
      wealthInheritance: "财富传承规划",
      corporateService: "公司服务",
      aboutUs: "关于我们",
      contactUs: "联系我们",
      contactTitle: "联系我们",
      accountingService: "会计服务",
      otherService: "会计及税务服务",
      businessAdvisory: "商业咨询",
      localCompany: "本地公司",
      taxConsulting: "税务咨询",
      address: "香港湾仔告士打道151号首都中心9楼902A室",
      phone: "+852 2111 2425",
      email: "sales@connexions.hk",
      copyright: `© ${new Date().getFullYear()} 宏达企业策略有限公司  版权所有 。`,

      officeService: "办公室服务",
      services: "公司服务",
      services2:  "会计及税务服务",
    },
  };

  const t = content[lang] || content.en;

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300">
      {/* Top Wave Divider */}
      

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo + Description */}
          <div>
            <img
              src="/images/connexions-hk.png"
              alt="Connexions HK Logo"
              className="h-32 w-auto mb-6 object-contain-center"
            />
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.description}
            </p>
            <p className="text-sm text-gray-500">
              {t.license}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.quickLinks}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/about-us" className="hover:text-[#3ac9d9] transition">{t.aboutUs}</a></li>
              <li><a href="/local-immigration" className="hover:text-[#3ac9d9] transition">{t.HongKongImmigration}</a></li>
              <li><a href="/services" className="hover:text-[#3ac9d9] transition">{t.services}</a></li>     
              <li><a href="/services2" className="hover:text-[#3ac9d9] transition">{t.services2}</a></li>    
              <li><a href="/wealth-inheritance" className="hover:text-[#3ac9d9] transition">{t.wealthInheritance}</a></li>
              <li><a href="/contact" className="hover:text-[#3ac9d9] transition">{t.contactUs}</a></li>

            </ul>
          </div>

          {/* Column 3: Extra Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.corporateService}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/services/local-company" className="hover:text-[#3ac9d9] transition">{t.localCompany}</a></li>
              <li><a href="/services/bviCompany" className="hover:text-[#3ac9d9] transition">{t.bviOversea}</a></li>
              <li><a href="/services/compSecretary" className="hover:text-[#3ac9d9] transition">{t.companySecretary}</a></li>
              <li><a href="/services/office-service" className="hover:text-[#3ac9d9] transition">{t.officeService}</a></li>
            </ul>

            <br></br>

            <h3 className="text-lg font-semibold text-white mb-6">{t.otherService}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/services2/accounting" className="hover:text-[#3ac9d9] transition">{t.accountingService}</a></li>
              <li><a href="/services2/businessAdv" className="hover:text-[#3ac9d9] transition">{t.businessAdvisory}</a></li>
              <li><a href="/services2/tax" className="hover:text-[#3ac9d9] transition">{t.taxConsulting}</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.contactTitle}</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Send className="w-5 h-5 text-[#3ac9d9] mt-1 flex-shrink-0" />
                <div>
                  <p>{t.address}</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#3ac9d9]" />
                <span>{t.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-[#3ac9d9]" />
                <span>{t.email}</span>
              </li>
            </ul>


          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          {t.copyright}
        </div>
      </div>
    </footer>
  );
}