// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";

export default function Header() {
  //const t = useTranslations("Header"); // ← prepare for i18n if needed
  const pathname = usePathname();
  const router = useRouter();
  //const currentLocale = useLocale();

  // ── Scroll hide/show logic ────────────────────────────────
  
  /*
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  */
  // ── Services dropdown ─────────────────────────────────────
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownVisible(false);
    }, 300); // more pleasant delay
  };

  // ── Language change ───────────────────────────────────────
  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    // Next.js App Router + next-intl pattern
    const newPath = pathname.replace(/^\/(en|zh-tw|zh-cn)/, `/${newLocale}`);
    router.push(newPath || `/${newLocale}`);
  };

  // ── Active link helper ────────────────────────────────────
  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
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

          <div className="flex items-center gap-6">
            {/* Social icons */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/connexionshk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/facebook-icon.svg" alt="Facebook" className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/company/connexions-hk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/linkedin-icon.webp" alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/connexionshk"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/images/instagram-icon.webp" alt="Instagram" className="h-6 w-6" />
              </a>
            </div>

            {/* Language selector */}
            <select
              //value={currentLocale}
              onChange={handleLanguageChange}
              className="border border-gray-300 rounded px-3 py-1.5 text-sm bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#3ac9d9]"
            >
              <option value="en">English</option>
              <option value="zh-tw">繁體中文</option>
              <option value="zh-cn">簡體中文</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main navigation – hides on scroll down */}
      <nav className="bg-white shadow-md transition-transform duration-300 ease-in-out">
        {/*
        className={`bg-white shadow-md transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`
        */
        }      
        <div className="container mx-auto px-4">
          <ul className="flex justify-center items-center gap-6 md:gap-8 py-3 text-sm md:text-base font-medium">
            <li>
              <a
                href="/"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="/about-us"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/about-us") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                About Us
              </a>
            </li>

            <li>
              <a
                href="/local-immigration"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/local-immigration") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                Local Immigration
              </a>
            </li>

            <li>
              <a
                href="/oversea-immigration"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/oversea-immigration") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                Oversea Immigration
              </a>
            </li>

            {/* Dropdown */}
            <li
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="/services"
                className={`flex items-center gap-1 px-2 py-1 rounded transition-colors ${
                  isActive("/services") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                Services <span className="text-xs">▼</span>
              </a>

              <ul
                className={`absolute left-0 top-full mt-1 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 text-base transition-opacity duration-150 ${
                  isDropdownVisible
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                }`}
              >
                <li>
                  <a
                    href="/services/local-company"
                    className={`block px-4 py-2 hover:bg-gray-50 ${
                      isActive("/services/local-company") ? "bg-[#3ac9d9]/10 text-[#3ac9d9]" : ""
                    }`}
                  >
                    HK Limited Company
                  </a>
                </li>
                <li>
                  <a
                    href="/services/BVI-company"
                    className={`block px-4 py-2 hover:bg-gray-50 ${
                      isActive("/services/BVI-company") ? "bg-[#3ac9d9]/10 text-[#3ac9d9]" : ""
                    }`}
                  >
                    BVI & Oversea Company
                  </a>
                </li>
                <li>
                  <a
                    href="/services/company-secretary"
                    className={`block px-4 py-2 hover:bg-gray-50 ${
                      isActive("/services/company-secretary") ? "bg-[#3ac9d9]/10 text-[#3ac9d9]" : ""
                    }`}
                  >
                    Company Secretary
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
                Wealth Inheritance
              </a>
            </li>

            <li>
              <a
                href="/contact"
                className={`px-2 py-1 rounded transition-colors ${
                  isActive("/contact") ? "bg-[#3ac9d9] text-white" : "hover:bg-gray-100"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}