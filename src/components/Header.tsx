"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const navContent = {
  en: {
    home: "HOME",
    aboutUs: "ABOUT US",
    localImmigration: "LOCAL IMMIGRATION",
    overseaImmigration: "OVERSEA IMMIGRATION",
    services: "SERVICES",
    hkLimitedCompany: "HK LIMITED COMPANY",
    bviOverseaCompany: "BVI & OVERSEA COMPANY",
    companySecretary: "COMPANY SECRETARY",
    businessAdvisory: "BUSINESS ADVISORY",
    accountingServices: "ACCOUNTING SERVICES",
    taxConsulting: "TAX CONSULTING",
    wealthInheritance: "WEALTH INHERITANCE",
    contact: "CONTACT",
  },
  zh: {
    home: "首頁",
    aboutUs: "關於我們",
    localImmigration: "本地移民",
    overseaImmigration: "海外移民",
    services: "服務",
    hkLimitedCompany: "香港有限公司",
    bviOverseaCompany: "BVI 及其他海外公司",
    companySecretary: "公司秘書",
    wealthInheritance: "財富傳承",
    contact: "聯絡我們",
    accountingServices: "會計服務",
    businessAdvisory: "商業諮詢",
    taxConsulting: "稅務諮詢",
  },
  cn: {
    home: "首页",
    aboutUs: "关于我们",
    localImmigration: "本地移民",
    overseaImmigration: "海外移民",
    services: "服务",
    hkLimitedCompany: "香港有限公司",
    bviOverseaCompany: "BVI 及其他海外公司",
    companySecretary: "公司秘书",
    wealthInheritance: "财富传承",
    contact: "联系我们",
    accountingServices: "会计服务",
    businessAdvisory: "商业咨询",
    taxConsulting: "税务咨询",
  },
} as const;

export default function Header() {
  const pathname = usePathname();
  const [lang, setLang] = useState<"en" | "cn" | "zh">("en");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "en" | "cn" | "zh" | null;
    if (saved) setLang(saved);
    else {
      const browserLang = navigator.language.toLowerCase();
      const defaultLang = browserLang.includes("zh") ? "cn" : "en";
      localStorage.setItem("lang", defaultLang);
      setLang(defaultLang);
    }
  }, []);

  const changeLanguage = (newLang: "en" | "cn" | "zh") => {
    if (newLang === lang) return;
    localStorage.setItem("lang", newLang);
    setLang(newLang);
    window.location.reload();
  };

  const current = navContent[lang];

  const isActive = (path: string) => pathname === path || pathname?.startsWith(path);

  useEffect(() => {
    const controlNavbar = () => {
      if (isMobileMenuOpen) {
        setShowNavbar(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) setShowNavbar(false);
      else if (currentScrollY < lastScrollY) setShowNavbar(true);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isMobileMenuOpen]);

  const servicesItems = [
    { href: "/services/local-company", label: current.hkLimitedCompany },
    { href: "/services/bviCompany", label: current.bviOverseaCompany },
    { href: "/services/compSecretary", label: current.companySecretary },
    { href: "/services/businessAdv", label: current.businessAdvisory },
    { href: "/services/accounting", label: current.accountingServices },
    { href: "/services/tax-consulting", label: current.taxConsulting },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-[#0f1d3a] text-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-screen-6xl">
          <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
            {/* Left: Logo and Brand */}
            <div className="flex items-center gap-3">
              <a href="/" className="flex items-center">
                <img
                  src="/images/connexions-hk-noword.png"
                  alt="Connexions HK Logo"
                  className="h-11 w-11 md:h-14 md:w-14 object-contain"
                />
              </a>
  
            </div>

            {/* Center: Navigation */}
            <nav className="hidden md:flex gap-8 lg:gap-8 xl:gap-8 text-base font-medium justify-center items-center flex-1">
              <a href="/" className={isActive("/") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}>
                {current.home}
              </a>
              <a href="/about-us" className={isActive("/about-us") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}>
                {current.aboutUs}
              </a>
              <a href="/local-immigration" className={isActive("/local-immigration") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}>
                {current.localImmigration}
              </a>
              <a href="/oversea-immigration" className={isActive("/oversea-immigration") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}>
                {current.overseaImmigration}
              </a>
              
              <div className="relative group">
                <a
                  href="/services"
                  className={`flex items-center gap-1 ${isActive("/services") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}`}
                >
                  {current.services} ▼
                </a>
                <ul className="absolute left-0 top-full mt-2 w-64 bg-[#0f1d3a] border border-gray-700 rounded-md shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-200">
                  {servicesItems.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className={`block px-4 py-2 hover:bg-gray-800 ${isActive(item.href) ? "text-[#3ac9d9]" : ""}`}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>


              <a href="/contact" className={isActive("/contact") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}>
                {current.contact}
              </a>
            </nav>

            {/* Right: Language Selector and Social Media Icons */}
            <div className="flex items-center gap-6 ml-auto">
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="https://www.facebook.com/connexionshk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3ac9d9] transition"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.instagram.com/connexionshk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3ac9d9] transition"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/connexions-hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#3ac9d9] transition"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>

              {/* Language Selector */}
              <div className="flex items-center gap-1 rounded-full px-3 py-1.5 bg-black/30 border border-gray-700">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                    lang === "en" ? "bg-[#3ac9d9] text-white shadow-sm" : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  ENG
                </button>
                <div className="h-4 w-px bg-gray-600 mx-1" />
                <button
                  onClick={() => changeLanguage("zh")}
                  className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                    lang === "zh" ? "bg-[#3ac9d9] text-white shadow-sm" : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  繁
                </button>
                <div className="h-4 w-px bg-gray-600 mx-1" />
                <button
                  onClick={() => changeLanguage("cn")}
                  className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                    lang === "cn" ? "bg-[#3ac9d9] text-white shadow-sm" : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  简
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <i className={`fa ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0f1d3a] text-white border-t border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <ul className="flex flex-col gap-4 text-base font-medium">
              <li>
                <a href="/" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/") ? "text-[#3ac9d9]" : ""}>
                  {current.home}
                </a>
              </li>
              <li>
                <a href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/about-us") ? "text-[#3ac9d9]" : ""}>
                  {current.aboutUs}
                </a>
              </li>
              <li>
                <a href="/local-immigration" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/local-immigration") ? "text-[#3ac9d9]" : ""}>
                  {current.localImmigration}
                </a>
              </li>
              <li>
                <a href="/oversea-immigration" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/oversea-immigration") ? "text-[#3ac9d9]" : ""}>
                  {current.overseaImmigration}
                </a>
              </li>
              <li>
                <a href="/services" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/services") ? "text-[#3ac9d9]" : ""}>
                  {current.services}
                </a>
              </li>
              <li>
                <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/contact") ? "text-[#3ac9d9]" : ""}>
                  {current.contact}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}