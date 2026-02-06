// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export const navContent = {
  en: {
    home: "Home",
    aboutUs: "About Us",
    localImmigration: "Local Immigration",
    overseaImmigration: "Oversea Immigration",
    services: "Services",
    hkLimitedCompany: "HK Limited Company",
    bviOverseaCompany: "BVI & Oversea Company",
    companySecretary: "Company Secretary",
    wealthInheritance: "Wealth Inheritance",
    contact: "Contact",
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
  },
} as const;

export default function Header() {
  const pathname = usePathname();

  // Language
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

  const changeLanguage = (newLang: "en" | "cn" | "zh") => {
    if (newLang === lang) return;
    localStorage.setItem("lang", newLang);
    setLang(newLang);
    window.location.reload();
  };

  const current = navContent[lang];

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path) ?? false;
  };

  // Scroll behavior
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Services accordion in mobile menu
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  };

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window === "undefined") return;

      // When mobile menu is open → keep header always visible
      if (isMobileMenuOpen) {
        setShowNavbar(true);
        return;
      }

      const currentScrollY = window.scrollY;

      // Normal scroll behavior only when menu is closed
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY, isMobileMenuOpen]); // Depend on menu state

  // Optional: ensure header is visible right when menu opens
  useEffect(() => {
    if (isMobileMenuOpen) {
      setShowNavbar(true);
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Top bar - Logo + Hamburger + Language */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <img
              src="/images/connexions-hk-en.png"
              alt="Connexions HK Logo"
              className="h-10 md:h-14 w-auto object-contain"
            />
          </a>

          {/* Desktop: Social + Language */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex gap-4">
              <a href="https://www.facebook.com/connexionshk" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/company/connexions-hk" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-icon.webp" alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/connexionshk" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram-icon.webp" alt="Instagram" className="h-6 w-6" />
              </a>
            </div>

            <div className="flex items-center gap-1 rounded-full px-3 py-1 border border-gray-200 bg-gray-50">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-xs font-medium transition-all duration-200 rounded-full ${
                  lang === "en"
                    ? "bg-[#3ac9d9] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                EN
              </button>
              <div className="h-4 w-px bg-gray-300 mx-1" />
              <button
                onClick={() => changeLanguage("zh")}
                className={`px-3 py-1 text-xs font-medium transition-all duration-200 rounded-full ${
                  lang === "zh"
                    ? "bg-[#3ac9d9] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                繁
              </button>
              <div className="h-4 w-px bg-gray-300 mx-1" />
              <button
                onClick={() => changeLanguage("cn")}
                className={`px-3 py-1 text-xs font-medium transition-all duration-200 rounded-full ${
                  lang === "cn"
                    ? "bg-[#3ac9d9] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                简
              </button>
            </div>
          </div>

          {/* Mobile: Language (compact) + Hamburger */}
          <div className="flex md:hidden items-center gap-4">
            {/* Language - smaller on mobile */}
            <div className="flex items-center gap-1 rounded-full px-2 py-1 border border-gray-200 bg-gray-50 text-xs">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-2 py-0.5 font-medium rounded-full ${
                  lang === "en" ? "bg-[#3ac9d9] text-white" : "text-gray-600"
                }`}
              >
                EN
              </button>
              <div className="h-3 w-px bg-gray-300 mx-0.5" />
              <button
                onClick={() => changeLanguage("zh")}
                className={`px-2 py-0.5 font-medium rounded-full ${
                  lang === "zh" ? "bg-[#3ac9d9] text-white" : "text-gray-600"
                }`}
              >
                繁
              </button>
              <div className="h-3 w-px bg-gray-300 mx-0.5" />
              <button
                onClick={() => changeLanguage("cn")}
                className={`px-2 py-0.5 font-medium rounded-full ${
                  lang === "cn" ? "bg-[#3ac9d9] text-white" : "text-gray-600"
                }`}
              >
                简
              </button>
            </div>

            {/* Hamburger */}
            <button
              className="text-gray-700 focus:outline-none"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block bg-white shadow-md">
        <div className="container mx-auto px-4">
          <ul className="flex justify-center items-center gap-6 lg:gap-8 py-3 text-sm lg:text-base font-medium">
            <li>
              <a
                href="/"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                {current.home}
              </a>
            </li>
            <li>
              <a
                href="/about-us"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/about-us") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                {current.aboutUs}
              </a>
            </li>
            <li>
              <a
                href="/local-immigration"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/local-immigration") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                {current.localImmigration}
              </a>
            </li>
            <li>
              <a
                href="/oversea-immigration"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/oversea-immigration") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                {current.overseaImmigration}
              </a>
            </li>

            {/* Services dropdown (desktop) */}
            <li className="relative group">
              <a
                href="/services"
                className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                  isActive("/services") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                {current.services} <span className="text-xs">▼</span>
              </a>

              <ul className="absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 text-base opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-150 pointer-events-none group-hover:pointer-events-auto">
                <li>
                  <a
                    href="/services/local-company"
                    className={`block px-4 py-2 hover:bg-gray-50 ${
                      isActive("/services/local-company") ? "bg-[#3ac9d9]/10 text-[#3ac9d9]" : ""
                    }`}
                  >
                    {current.hkLimitedCompany}
                  </a>
                </li>
                <li>
                  <a
                    href="/services/BVI-company"
                    className={`block px-4 py-2 hover:bg-gray-50 ${
                      isActive("/services/BVI-company") ? "bg-[#3ac9d9]/10 text-[#3ac9d9]" : ""
                    }`}
                  >
                    {current.bviOverseaCompany}
                  </a>
                </li>
                <li>
                  <a
                    href="/services/company-secretary"
                    className={`block px-4 py-2 hover:bg-gray-50 ${
                      isActive("/services/company-secretary") ? "bg-[#3ac9d9]/10 text-[#3ac9d9]" : ""
                    }`}
                  >
                    {current.companySecretary}
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="/wealth-inheritance"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/wealth-inheritance") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                {current.wealthInheritance}
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/contact") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                {current.contact}
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <ul className="flex flex-col gap-3 text-base font-medium">
              <li>
                <a
                  href="/"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded ${
                    isActive("/") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {current.home}
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded ${
                    isActive("/about-us") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {current.aboutUs}
                </a>
              </li>
              <li>
                <a
                  href="/local-immigration"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded ${
                    isActive("/local-immigration") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {current.localImmigration}
                </a>
              </li>
              <li>
                <a
                  href="/oversea-immigration"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded ${
                    isActive("/oversea-immigration") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {current.overseaImmigration}
                </a>
              </li>

              {/* Services - accordion style */}
              <li>
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full text-left px-4 py-3 rounded flex justify-between items-center ${
                    isActive("/services") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {current.services}
                  <span>{isServicesOpen ? "▲" : "▼"}</span>
                </button>

                {isServicesOpen && (
                  <ul className="pl-6 mt-1 flex flex-col gap-1">
                    <li>
                      <a
                        href="/services/local-company"
                        onClick={closeMobileMenu}
                        className={`block px-4 py-2 rounded ${
                          isActive("/services/local-company")
                            ? "bg-[#3ac9d9]/10 text-[#3ac9d9]"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        {current.hkLimitedCompany}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/BVI-company"
                        onClick={closeMobileMenu}
                        className={`block px-4 py-2 rounded ${
                          isActive("/services/BVI-company")
                            ? "bg-[#3ac9d9]/10 text-[#3ac9d9]"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        {current.bviOverseaCompany}
                      </a>
                    </li>
                    <li>
                      <a
                        href="/services/company-secretary"
                        onClick={closeMobileMenu}
                        className={`block px-4 py-2 rounded ${
                          isActive("/services/company-secretary")
                            ? "bg-[#3ac9d9]/10 text-[#3ac9d9]"
                            : "hover:bg-gray-50"
                        }`}
                      >
                        {current.companySecretary}
                      </a>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <a
                  href="/wealth-inheritance"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded ${
                    isActive("/wealth-inheritance") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {current.wealthInheritance}
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 rounded ${
                    isActive("/contact") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-50"
                  }`}
                >
                  {current.contact}
                </a>
              </li>
            </ul>

            {/* Optional: Social icons in mobile menu */}
            <div className="flex gap-6 mt-6 px-4">
              <a href="https://www.facebook.com/connexionshk" target="_blank" rel="noopener noreferrer">
                <img src="/images/facebook-icon.svg" alt="Facebook" className="h-7 w-7" />
              </a>
              <a href="https://www.linkedin.com/company/connexions-hk" target="_blank" rel="noopener noreferrer">
                <img src="/images/linkedin-icon.webp" alt="LinkedIn" className="h-7 w-7" />
              </a>
              <a href="https://www.instagram.com/connexionshk" target="_blank" rel="noopener noreferrer">
                <img src="/images/instagram-icon.webp" alt="Instagram" className="h-7 w-7" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}