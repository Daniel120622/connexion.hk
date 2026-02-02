// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { button } from "framer-motion/m";

export default function Header() {
  const router = useRouter();
  const pathname = usePathname();

  // ── Language state (persisted in localStorage) ──────────────────
  const [currentLang, setCurrentLang] = useState<"en" | "cn" | "zh">("en");

  useEffect(() => {
    // Load saved language on mount
    const savedLang = localStorage.getItem("lang") as "en" | "cn" | "zh" | null;
    if (savedLang) {
      setCurrentLang(savedLang);
    } else {
      // Default to English if nothing saved
      localStorage.setItem("lang", "en");
    }
  }, []);

  // ── Change language & refresh page ──────────────────────────────
  const changeLanguage = (newLang: "en" | "cn" | "zh") => {
    if (newLang === currentLang) return; // no need to refresh if same

    // Save to localStorage
    localStorage.setItem("lang", newLang);
    setCurrentLang(newLang);

    // Soft refresh current page → AboutUs will re-read localStorage
    router.refresh();
    // Refresh the page
    location.reload();
  };

  // ── Scroll hide/show logic ─────────────────────────────────────
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window === "undefined") return;

      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  // ── Services dropdown logic ─────────────────────────────────────
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId: NodeJS.Timeout;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownVisible(false);
    }, 300);
  };

  // ── Active link helper ──────────────────────────────────────────
  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-transform duration-300 ease-in-out ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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

            {/* Language selector */}
            <div className="flex items-center gap-1 rounded-full px-3 py-1 border border-gray-200 bg-gray-50">
              <button
                onClick={() => changeLanguage("en")}
                className={`px-3 py-1 text-xs font-medium transition-all duration-200 rounded-full ${
                  currentLang === "en"
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
                  currentLang === "zh"
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
                  currentLang === "cn"
                    ? "bg-[#3ac9d9] text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white/60"
                }`}
              >
                简
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white shadow-md">
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

            {/* Services dropdown */}
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