// src/components/Footer.tsx
"use client";

import React, { useState, useEffect } from 'react';
import { MessageCircle, Send, Phone, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const [lang, setLang] = useState<"en" | "cn" | "zh">("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "en" | "cn" | "zh" | null;
    if (saved) {
      setLang(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      const defaultLang = browserLang.includes("zh") ? "cn" : "en";
      localStorage.setItem("lang", defaultLang);
      setLang(defaultLang);
    }
  }, []);

  const content = {
    en: {
      description: "Connexions HK is a professional business and immigration services company, specializing in providing clients with one-stop solutions.",
      license: "Connexions HK trust or corporate service provider license number: ######",
      quickLinks: "Quick Links",
      localImmigration: "Local Immigration",
      overseaImmigration: "Oversea Immigration",
      companySecretary: "Company Secretary",
      hkLimited: "HK Limited Company",
      bviOversea: "BVI & Oversea Company",
      wealthInheritance: "Wealth Inheritance Planning",
      otherService: "Other Service",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      contactTitle: "Contact US",
      accountingService: "Accounting Service",
      businessAdvisory: "Business Advisory",
      localCompany: "Local Company",
      taxConsulting: "Tax Consulting",
      address: "Room 902A, 9/F, Capital Centre, 151 Gloucester Road, Wan Chai, Hong Kong",
      phone: "+852 5540 3916",
      email: "sales@connecxions.hk",
      copyright: `© ${new Date().getFullYear()} Connecxions.HK Copyright. All rights reserved.`,
    },
    zh: {
      description: "Connexions HK 是一家專業的商業及移民服務公司，專注為客戶提供一站式解決方案。",
      license: "Connexions HK 信託或企業服務提供者牌照號碼：######",
      quickLinks: "快速連結",
      localImmigration: "本地移民",
      overseaImmigration: "海外移民",
      companySecretary: "公司秘書",
      hkLimited: "香港有限公司",
      bviOversea: "BVI 及其他海外公司",
      wealthInheritance: "財富傳承規劃",
      otherService: "額外服務",
      aboutUs: "關於我們",
      contactUs: "聯絡我們",
      contactTitle: "聯絡我們",
      accountingService: "會計服務",
      businessAdvisory: "商業諮詢",
      localCompany: "本地公司",
      taxConsulting: "稅務諮詢",
      address: "香港灣仔告士打道151號首都中心9樓902A室",
      phone: "+852 5540 3916",
      email: "sales@connecxions.hk",
      copyright: `© ${new Date().getFullYear()} Connecxions.HK 版權所有。`,
    },
    cn: {
      description: "Connexions HK 是一家专业的商业及移民服务公司，专注为客户提供一站式解决方案。",
      license: "Connexions HK 信托或企业服务提供者牌照号码：######",
      quickLinks: "快速链接",
      localImmigration: "本地移民",
      overseaImmigration: "海外移民",
      companySecretary: "公司秘书",
      hkLimited: "香港有限公司",
      bviOversea: "BVI 及其他海外公司",
      wealthInheritance: "财富传承规划",
      otherService: "额外服务",
      aboutUs: "关于我们",
      contactUs: "联系我们",
      contactTitle: "联系我们",
      accountingService: "会计服务",
      businessAdvisory: "商业咨询",
      localCompany: "本地公司",
      taxConsulting: "税务咨询",
      address: "香港湾仔告士打道151号首都中心9楼902A室",
      phone: "+852 5540 3916",
      email: "sales@connecxions.hk",
      copyright: `© ${new Date().getFullYear()} Connecxions.HK 版权所有。`,
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
              <li><a href="/local-immigration" className="hover:text-[#3ac9d9] transition">{t.localImmigration}</a></li>
              <li><a href="/oversea-immigration" className="hover:text-[#3ac9d9] transition">{t.overseaImmigration}</a></li>              <li><a href="/services/local-company" className="hover:text-[#3ac9d9] transition">{t.hkLimited}</a></li>
              <li><a href="/wealth-inheritance" className="hover:text-[#3ac9d9] transition">{t.wealthInheritance}</a></li>
              <li><a href="/contact" className="hover:text-[#3ac9d9] transition">{t.contactUs}</a></li>

            </ul>
          </div>

          {/* Column 3: Extra Service */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">{t.otherService}</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="/services/accounting" className="hover:text-[#3ac9d9] transition">{t.accountingService}</a></li>
              <li><a href="/services/bviCompany" className="hover:text-[#3ac9d9] transition">{t.bviOversea}</a></li>
              <li><a href="/services/businessAdv" className="hover:text-[#3ac9d9] transition">{t.businessAdvisory}</a></li>
              <li><a href="/services/compSecretary" className="hover:text-[#3ac9d9] transition">{t.companySecretary}</a></li>
              <li><a href="/services/local-company" className="hover:text-[#3ac9d9] transition">{t.localCompany}</a></li>
              <li><a href="/services/tax-consulting" className="hover:text-[#3ac9d9] transition">{t.taxConsulting}</a></li>
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

            {/* Social Icons */}
            <div className="flex gap-5 mt-8">
              <a href="https://wa.me/85255403916" target="_blank" rel="noopener noreferrer" className="text-[#3ac9d9] hover:text-white transition">
                <MessageCircle className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/connexionshk" target="_blank" rel="noopener noreferrer" className="text-[#3ac9d9] hover:text-white transition">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/connecxions.hk" target="_blank" rel="noopener noreferrer" className="text-[#3ac9d9] hover:text-white transition">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
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