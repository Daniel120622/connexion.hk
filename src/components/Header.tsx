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

  // Close dropdowns when route changes
  useEffect(() => {
    setServicesOpen(false);
    setTaxServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Header scale for large high-DPI screens
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

              {/* Desktop Nav */}
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

                {/* Corporate Services Dropdown */}
                <div
                  className="relative"
                  ref={servicesRef}
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <a
                      href="/services"
                      className={isActive("/services") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}
                    >
                      {current.services}
                    </a>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setServicesOpen((v) => !v);
                      }}
                      className="ml-2 p-1"
                      aria-expanded={servicesOpen}
                    >
                      ▼
                    </button>
                  </div>
                  <ul className={`absolute left-0 top-full mt-2 w-64 bg-gray-100 border border-gray-300 rounded-md shadow-2xl py-2 transition-opacity duration-200 ${servicesOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                    {servicesItems.map((item) => (
                      <li key={item.href} className="hover:bg-gray px-4 py-2 rounded-md">
                        <a
                          href={item.href}
                          className={`block ${isActive(item.href) ? "text-black font-semibold" : "text-gray-700"}`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Accountancy & Tax Dropdown */}
                <div
                  className="relative"
                  ref={taxRef}
                  onMouseEnter={() => setTaxServicesOpen(true)}
                  onMouseLeave={() => setTaxServicesOpen(false)}
                >
                  <div className="flex items-center gap-1">
                    <a
                      href="/services2"
                      className={isActive("/services2") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}
                    >
                      {current.Services2}
                    </a>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setTaxServicesOpen((v) => !v);
                      }}
                      className="ml-2 p-1"
                      aria-expanded={taxServicesOpen}
                    >
                      ▼
                    </button>
                  </div>
                  <ul className={`absolute left-0 top-full mt-2 w-64 bg-gray-100 border border-gray-300 rounded-md shadow-2xl py-2 transition-opacity duration-200 ${taxServicesOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}>
                    {TaxServiceItems.map((item) => (
                      <li key={item.href} className="hover:bg-gray-200 px-4 py-2 rounded-md">
                        <a
                          href={item.href}
                          className={`block ${isActive(item.href) ? "text-black font-semibold" : "text-gray-700"}`}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <a href="/wealth-inheritance" className={isActive("/wealth-inheritance") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}>
                  {current.fortuneInheritance}
                </a>

                <a href="/contact" className={isActive("/contact") ? "text-[#3ac9d9]" : "hover:text-[#3ac9d9] transition"}>
                  {current.contact}
                </a>
              </nav>

              {/* Right side */}
              <div className="flex items-center gap-6 ml-auto">
                {/* Social icons */}
                <div className="hidden md:flex gap-4">
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

                {/* Language selector */}
                <div className="flex items-center gap-1 rounded-full px-3 py-1.5">
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

              <li className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex items-center justify-between w-full text-left hover:text-[#3ac9d9]"
                >
                  {current.services}
                  <span className={`ml-2 transition-transform ${servicesOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
                </button>
                {servicesOpen && (
                  <ul className="pl-4 mt-2 space-y-2 bg-transparent">
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

              <li className="relative">
                <button
                  onClick={() => setTaxServicesOpen(!taxServicesOpen)}
                  className="flex items-center justify-between w-full text-left hover:text-[#3ac9d9]"
                >
                  {current.Services2}
                  <span className={`ml-2 transition-transform ${taxServicesOpen ? "rotate-180" : "rotate-0"}`}>▼</span>
                </button>
                {taxServicesOpen && (
                  <ul className="pl-4 mt-2 space-y-2 bg-transparent">
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