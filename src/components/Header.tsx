"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from '@/context/LanguageContext';

export const navContent = {
  en: {
    home: "HOME",
    aboutUs: "About Us",
    localImmigration: "Hong Kong Immigration",
    overseaImmigration: "Oversea Immigration",
    services: "Corporate Services",
    officeService: "Register Office Service",
    hkLimitedCompany: "HK Company Incorporation",
    bviOverseaCompany: "BVI/ Offshore Company Incorporation",
    companySecretary: "Company Secretary Service",
    businessAdvisory: "Business Advisory",
    accountingServices: "Accounting Services",
    taxConsulting: "Tax Consulting",
    fortuneInheritance: "Fortune Inheritance",
    contact: "Contact",
    Services2: "Accountancy and Tax Services",
  },
  zh: {
    home: "首頁",
    aboutUs: "關於我們",
    localImmigration: "移民香港",
    overseaImmigration: "海外移民",
    services: "企業服務",
    officeService: "公司註冊地址服務",
    hkLimitedCompany: "註冊香港有限公司",
    bviOverseaCompany: "註冊海外公司",
    companySecretary: "公司秘書",
    fortuneInheritance: "財富傳承",
    contact: "聯絡我們",
    accountingServices: "會計服務",
    businessAdvisory: "商業諮詢",
    taxConsulting: "稅務諮詢",
    Services2: "會計及稅務服務",
  },
  cn: {
    home: "首页",
    aboutUs: "关于我们",
    localImmigration: "移民香港",
    overseaImmigration: "海外移民",
    services: "企業服务",
    officeService: "公司註冊地址服务",
    hkLimitedCompany: "註冊香港有限公司",
    bviOverseaCompany: "注册海外公司",
    companySecretary: "公司秘书",
    fortuneInheritance: "财富传承",
    contact: "联系我们",
    accountingServices: "会计服务",
    businessAdvisory: "商业咨询",
    taxConsulting: "税务咨询",
    Services2: "会计及税务服务",
  },
} as const;

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [taxServicesOpen, setTaxServicesOpen] = useState(false);
  const [headerScale, setHeaderScale] = useState(1);

  const servicesRef = useRef<HTMLDivElement>(null);
  const taxRef = useRef<HTMLDivElement>(null);

  const current = navContent[lang];

  const isActive = useCallback((path: string) => 
    pathname === path || pathname?.startsWith(path), [pathname]
  );

  // Close all menus when route changes
  useEffect(() => {
    setServicesOpen(false);
    setTaxServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Header scale adjustment for large high-DPI screens
  useEffect(() => {
    const updateHeaderScale = () => {
      const dpr = window.devicePixelRatio || 1;
      const w = window.screen?.width || window.innerWidth;
      let s = 1;
      if (w >= 1800 && dpr >= 1.4) s = 0.75;
      else if (w >= 1400 && dpr >= 1.25) s = 0.85;
      else s = 1;
      setHeaderScale(s);
    };

    updateHeaderScale();
    window.addEventListener("resize", updateHeaderScale);
    return () => window.removeEventListener("resize", updateHeaderScale);
  }, []);

  const scaledStyle: React.CSSProperties = {
    transform: `scale(${headerScale})`,
    transformOrigin: "top left",
    width: `${100 / headerScale}%`,
  };

  const servicesItems = [
    { href: "/services/local-company", label: current.hkLimitedCompany },
    { href: "/services/bviCompany", label: current.bviOverseaCompany },
    { href: "/services/compSecretary", label: current.companySecretary },
    { href: "/services/office-service", label: current.officeService },
  ];

  const TaxServiceItems = [
    { href: "/services2/businessAdv", label: current.businessAdvisory },
    { href: "/services2/accounting", label: current.accountingServices },
    { href: "/services2/tax", label: current.taxConsulting },
  ];

  const changeLanguage = (newLang: "en" | "cn" | "zh") => {
    if (newLang === lang) return;
    setLang(newLang);
  };

  return (
    <header className="sticky top-0 z-50">
      <div style={scaledStyle}>
        <div className="bg-gray-100 text-black shadow-md">
          <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-screen-6xl">
            <div className="flex items-center justify-between h-16 md:h-20 lg:h-24">
              
              {/* Logo */}
              <div className="flex items-center gap-3">
                <a href="/" className="flex items-center">
                  <img
                    src="/images/connexions-hk.png"
                    alt="Connexions HK Logo"
                    className="h-16 w-16 md:h-20 md:w-20 object-contain"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex gap-8 lg:gap-10 xl:gap-12 text-base font-medium justify-center items-center flex-1">
                <a 
                  href="/" 
                  className={isActive("/") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition-colors"}
                >
                  {current.home}
                </a>
                <a 
                  href="/about-us" 
                  className={isActive("/about-us") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition-colors"}
                >
                  {current.aboutUs}
                </a>
                <a 
                  href="/local-immigration" 
                  className={isActive("/local-immigration") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition-colors"}
                >
                  {current.localImmigration}
                </a>

                {/* Stable Corporate Services Dropdown */}
                <div
                  className="relative group"
                  ref={servicesRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <a
                      href="/services"
                      className={isActive("/services") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition-colors"}
                    >
                      {current.services}
                    </a>
                    <span className="text-sm mt-0.5">▼</span>
                  </div>

                  <ul 
                    className={`absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 transition-all duration-200 z-50 ${
                      servicesOpen 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    {servicesItems.map((item) => (
                      <li key={item.href} className="hover:bg-gray-50">
                        <a
                          href={item.href}
                          className={`block px-6 py-3 text-sm transition-colors ${
                            isActive(item.href) 
                              ? "text-[#3ac9d9] font-semibold" 
                              : "text-gray-700 hover:text-black"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stable Accountancy & Tax Dropdown */}
                <div
                  className="relative group"
                  ref={taxRef}
                  onMouseEnter={() => setTaxServicesOpen(true)}
                  onMouseLeave={() => setTaxServicesOpen(false)}
                >
                  <div className="flex items-center gap-1 cursor-pointer">
                    <a
                      href="/services2"
                      className={isActive("/services2") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition-colors"}
                    >
                      {current.Services2}
                    </a>
                    <span className="text-sm mt-0.5">▼</span>
                  </div>

                  <ul 
                    className={`absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 transition-all duration-200 z-50 ${
                      taxServicesOpen 
                        ? "opacity-100 visible translate-y-0" 
                        : "opacity-0 invisible -translate-y-1 pointer-events-none"
                    }`}
                  >
                    {TaxServiceItems.map((item) => (
                      <li key={item.href} className="hover:bg-gray-50">
                        <a
                          href={item.href}
                          className={`block px-6 py-3 text-sm transition-colors ${
                            isActive(item.href) 
                              ? "text-[#3ac9d9] font-semibold" 
                              : "text-gray-700 hover:text-black"
                          }`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href="/wealth-inheritance" 
                  className={isActive("/wealth-inheritance") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition-colors"}
                >
                  {current.fortuneInheritance}
                </a>

                <a 
                  href="/contact" 
                  className={isActive("/contact") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition-colors"}
                >
                  {current.contact}
                </a>
              </nav>

              {/* Right Side: Social + Language + Hamburger */}
              <div className="flex items-center gap-6 ml-auto">
                {/* Social Icons */}
                <div className="hidden md:flex gap-4 text-lg">
                  <a
                    href="https://www.facebook.com/connexionshk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3ac9d9] transition-colors"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/connexionshk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3ac9d9] transition-colors"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/company/connexions-hk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#3ac9d9] transition-colors"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>

                {/* Language Selector */}
                <div className="flex items-center gap-1 rounded-full px-3 py-1.5 bg-white border border-gray-200">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                      lang === "en" ? "bg-[#3ac9d9] text-white shadow-sm" : "text-black hover:text-white hover:bg-white/10"
                    }`}
                  >
                    ENG
                  </button>
                  <div className="h-4 w-px bg-gray-600 mx-1" />
                  <button
                    onClick={() => changeLanguage("zh")}
                    className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                      lang === "zh" ? "bg-[#3ac9d9] text-white shadow-sm" : "text-black hover:text-white hover:bg-white/10"
                    }`}
                  >
                    繁
                  </button>
                  <div className="h-4 w-px bg-gray-600 mx-1" />
                  <button
                    onClick={() => changeLanguage("cn")}
                    className={`px-3 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                      lang === "cn" ? "bg-[#3ac9d9] text-white shadow-sm" : "text-black hover:text-white hover:bg-white/10"
                    }`}
                  >
                    简
                  </button>
                </div>

                {/* Hamburger */}
                <button
                  className="md:hidden text-black focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  aria-label="Toggle menu"
                >
                  <i className={`fa ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-100 text-black border-t border-gray-200">
          <div className="mx-auto px-4 py-6">
            <ul className="flex flex-col gap-5 text-base font-medium">
              <li>
                <a href="/" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9]"}>
                  {current.home}
                </a>
              </li>
              <li>
                <a href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/about-us") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9]"}>
                  {current.aboutUs}
                </a>
              </li>
              <li>
                <a href="/local-immigration" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/local-immigration") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9]"}>
                  {current.localImmigration}
                </a>
              </li>

              {/* Mobile Services Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left hover:text-[#3ac9d9]"
                >
                  {current.services}
                  <span className={`ml-2 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
                </button>
                {servicesOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {servicesItems.map((item) => (
                      <li key={item.href} className="hover:bg-gray-200 px-2 py-1 rounded-md">
                        <a
                          href={item.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setServicesOpen(false);
                          }}
                          className={`block ${isActive(item.href) ? "text-[#3ac9d9] font-semibold" : "hover:text-[#3ac9d9] text-black"}`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              {/* Mobile Tax Services Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setTaxServicesOpen(!taxServicesOpen)}
                  className="flex items-center justify-between w-full text-left hover:text-[#3ac9d9]"
                >
                  {current.Services2}
                  <span className={`ml-2 transition-transform ${taxServicesOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
                </button>
                {taxServicesOpen && (
                  <ul className="pl-4 mt-2 space-y-2">
                    {TaxServiceItems.map((item) => (
                      <li key={item.href} className="hover:bg-gray-200 px-2 py-1 rounded-md">
                        <a
                          href={item.href}
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setTaxServicesOpen(false);
                          }}
                          className={`block ${isActive(item.href) ? "text-[#3ac9d9] font-semibold" : "hover:text-[#3ac9d9] text-black"}`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>

              <li>
                <a href="/wealth-inheritance" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/wealth-inheritance") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9]"}>
                  {current.fortuneInheritance}
                </a>
              </li>
              <li>
                <a href="/contact" onClick={() => setIsMobileMenuOpen(false)} className={isActive("/contact") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9]"}>
                  {current.contact}
                </a>
              </li>
            </ul>

            {/* Social icons in mobile menu */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Follow us</p>
              <div className="flex gap-6 text-2xl text-black">
                <a href="https://www.facebook.com/connexionshk" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ac9d9] transition">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://www.instagram.com/connexionshk" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ac9d9] transition">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/company/connexions-hk" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ac9d9] transition">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}