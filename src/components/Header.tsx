"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

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

  const servicesRef = useRef<HTMLDivElement>(null);
  const taxRef = useRef<HTMLDivElement>(null);

  const current = navContent[lang];

  const isActive = useCallback(
    (path: string) => {
      if (!pathname) return false;
      if (path === "/") return pathname === "/";
      return pathname === path || pathname.startsWith(path + "/");
    },
    [pathname]
  );

  useEffect(() => {
    setServicesOpen(false);
    setTaxServicesOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
      if (taxRef.current && !taxRef.current.contains(event.target as Node)) {
        setTaxServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setTaxServicesOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const servicesItems = [
    { href: "/services/local-company", label: current.hkLimitedCompany },
    { href: "/services/bviCompany", label: current.bviOverseaCompany },
    { href: "/services/compSecretary", label: current.companySecretary },
    { href: "/services/office-service", label: current.officeService },
  ];

  const taxServiceItems = [
    { href: "/services2/businessAdv", label: current.businessAdvisory },
    { href: "/services2/accounting", label: current.accountingServices },
    { href: "/services2/tax", label: current.taxConsulting },
  ];

  const changeLanguage = (newLang: "en" | "cn" | "zh") => {
    if (newLang === lang) return;
    setLang(newLang);
  };

const navTextSize =
  lang === "en"
    ? "text-[11px] xl:text-[12px]"
    : lang === "zh" || lang === "cn"
      ? "text-[12px] lg:text-sm"
      : "text-sm";
    

  return (
    <header className="sticky top-0 z-50">
      <div className="bg-gray-100 text-black shadow-md border-b border-gray-200">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 max-w-screen-6xl">
          <div className="flex items-center justify-between h-16 md:h-18">
            
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <a href="/" className="flex items-center">
                <img
                  src="/images/connexions-hk.png"
                  alt="Connexions HK Logo"
                  className="h-14 w-14 md:h-16 md:w-16 lg:h-18 lg:w-18 object-contain"
                />
              </a>
            </div>

            {/* Desktop Navigation */}
              <nav className={`hidden md:flex flex-1 items-center justify-center gap-3 lg:gap-4 xl:gap-6 font-medium ${navTextSize} leading-none`}>              <a
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

              {/* Corporate Services Dropdown */}
              <div className="relative" ref={servicesRef}>
                <button
                  type="button"
                  onClick={() => {
                    setServicesOpen(!servicesOpen);
                    setTaxServicesOpen(false);
                  }}
                  onMouseEnter={() => {
                    if (window.matchMedia("(pointer: fine)").matches) {
                      setServicesOpen(true);
                      setTaxServicesOpen(false);
                    }
                  }}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                  className="flex items-center gap-1.5 hover:text-[#3ac9d9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3ac9d9] rounded-md px-2 py-1"
                >
                  <span className={isActive("/services") ? "text-[#3ac9d9]" : ""}>
                    <a href="/services" className="hover:text-[#3ac9d9] transition-colors">
                      {current.services}
                    </a>
                  </span>
                  <span
                    className={`text-xs transition-transform duration-200 ${
                      servicesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 z-50 transition-all duration-200 origin-top ${
                    servicesOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95 pointer-events-none"
                  }`}
                  role="menu"
                >
                  {servicesItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setServicesOpen(false)}
                      className={`block px-6 py-3 text-sm transition-colors hover:bg-gray-50 ${
                        isActive(item.href)
                          ? "text-[#3ac9d9] font-semibold"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Accountancy & Tax Dropdown */}
              <div className="relative" ref={taxRef}>
                <button
                  type="button"
                  onClick={() => {
                    setTaxServicesOpen(!taxServicesOpen);
                    setServicesOpen(false);
                  }}
                  onMouseEnter={() => {
                    if (window.matchMedia("(pointer: fine)").matches) {
                      setTaxServicesOpen(true);
                      setServicesOpen(false);
                    }
                  }}
                  aria-expanded={taxServicesOpen}
                  aria-haspopup="menu"
                  className="flex items-center gap-1.5 hover:text-[#3ac9d9] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3ac9d9] rounded-md px-2 py-1"
                >
                  <span className={isActive("/services2") ? "text-[#3ac9d9]" : ""}>
                    <a href="/services2" className="hover:text-[#3ac9d9] transition-colors">
                      {current.Services2}
                    </a>
                  </span>
                  <span
                    className={`text-xs transition-transform duration-200 ${
                      taxServicesOpen ? "rotate-180" : ""
                    }`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </button>

                <div
                  className={`absolute left-0 top-full mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-2xl py-2 z-50 transition-all duration-200 origin-top ${
                    taxServicesOpen
                      ? "opacity-100 visible scale-100"
                      : "opacity-0 invisible scale-95 pointer-events-none"
                  }`}
                  role="menu"
                >
                  {taxServiceItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      role="menuitem"
                      onClick={() => setTaxServicesOpen(false)}
                      className={`block px-6 py-3 text-sm transition-colors hover:bg-gray-50 ${
                        isActive(item.href)
                          ? "text-[#3ac9d9] font-semibold"
                          : "text-gray-700 hover:text-black"
                      }`}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
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

            {/* Right Side */}
            <div className="flex items-center gap-2 md:gap-3 lg:gap-4 ml-auto shrink-0">
              
              {/* Social Icons */}
              <div className="hidden xl:flex gap-4 text-lg">
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

              {/* Language Switcher */}
              <div className="flex items-center gap-1 rounded-full px-2 py-1 bg-white border border-gray-200">
                <button
                  onClick={() => changeLanguage("en")}
                  className={`px-2.5 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                    lang === "en"
                      ? "bg-[#3ac9d9] text-white shadow-sm"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  ENG
                </button>
                <div className="h-4 w-px bg-gray-300 mx-0.5" />
                <button
                  onClick={() => changeLanguage("zh")}
                  className={`px-2.5 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                    lang === "zh"
                      ? "bg-[#3ac9d9] text-white shadow-sm"
                      : "text-black hover:bg-gray-100"
                  }`}
                >
                  繁
                </button>
                <div className="h-4 w-px bg-gray-300 mx-0.5" />
                <button
                  onClick={() => changeLanguage("cn")}
                  className={`px-2.5 py-1 text-xs md:text-sm font-medium rounded-full transition-all ${
                    lang === "cn"
                      ? "bg-[#3ac9d9] text-white shadow-sm"
                      : "text-black hover:bg-gray-100"
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
                aria-expanded={isMobileMenuOpen}
              >
                <i className={`fa ${isMobileMenuOpen ? "fa-times" : "fa-bars"} text-2xl`}></i>
              </button>
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
                    {taxServiceItems.map((item) => (
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

            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Follow us</p>
              <div className="flex gap-6 text-2xl text-black">
                <a href="https://www.facebook.com/connexionshk" target="_blank" rel="noopener noreferrer" className="hover:text-[#3ac9d9] transition">
                  <i className="fab fa-facebook-f"></i>
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