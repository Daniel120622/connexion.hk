"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ChevronDown, Facebook, Linkedin, Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

type Lang = "en" | "cn" | "zh";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = useTranslations("Header");

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [taxServicesOpen, setTaxServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLDivElement>(null);
  const taxRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(`${path}/`);
  };

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setServicesOpen(false);
      setTaxServicesOpen(false);
      setIsMobileMenuOpen(false);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only a real mouse (desktop) should close the dropdown on an
      // outside click -- on touch devices this listener must stay out of
      // the way of the mobile accordion below, or it closes (and
      // unmounts) the sub-links before a tap can navigate.
      if (!window.matchMedia("(pointer: fine)").matches) return;

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
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        setTaxServicesOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const desktopLinkClass = (active: boolean) =>
    [
      "inline-flex items-center relative whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-medium leading-none tracking-[0.02em] transition-colors duration-200 after:absolute after:left-2.5 after:right-2.5 after:-bottom-0.5 after:h-0.5 after:origin-center after:scale-x-0 after:rounded-full after:bg-teal-700 after:transition-transform after:duration-200 hover:text-slate-900 hover:after:scale-x-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500/25 gap-2",
      active ? "text-slate-900 after:scale-x-100" : "text-slate-600",
    ].join(" ");
    
  const dropdownLinkClass = (active: boolean) =>
    [
      "block rounded-2xl px-4 py-3 text-[13px] transition",
      active
        ? "bg-teal-50 text-teal-900"
        : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
    ].join(" ");

  const mobileLinkClass = (active: boolean) =>
    [
      "block touch-manipulation rounded-2xl px-4 py-3.5 text-base font-medium transition active:scale-[0.98]",
      active
        ? "bg-teal-50 text-teal-900 ring-1 ring-inset ring-teal-200"
        : "bg-slate-50 text-slate-700 hover:bg-slate-100",
    ].join(" ");

  const servicesItems = [
    { href: "/corporate-services", label: t("servicesOverview") },
    { href: "/corporate-services/local-company", label: t("hkLimitedCompany") },
    { href: "/corporate-services/company-secretary", label: t("companySecretary") },
    { href: "/corporate-services/office-service", label: t("officeService") },
  ];

  const taxItems = [
    { href: "/accountancy-tax", label: t("services2Overview") },
    { href: "/accountancy-tax/business-advisory", label: t("businessAdvisory") },
    { href: "/accountancy-tax/accounting", label: t("accountingServices") },
    { href: "/accountancy-tax/tax", label: t("taxConsulting") },
  ];

  const languageLabel = (item: Lang) => t(`language.${item}` as const);

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-white/70 bg-white/88 text-slate-900 shadow-[0_14px_40px_-30px_rgba(15,23,42,0.38)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1680px] items-center gap-4 px-4 py-3 sm:px-6 lg:px-8 2xl:px-10">
          <Link href="/" className="flex shrink-0 items-center rounded-full bg-white/90 px-2.5 py-2 ring-1 ring-slate-200/80 transition hover:shadow-[0_16px_40px_-28px_rgba(15,23,42,0.35)]">
            <Image
              src="/images/connexions-hk.png"
              alt="Connexions HK Logo"
              width={340}
              height={382}
              priority
              className="h-11 w-11 object-contain sm:h-12 sm:w-12"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-1.5 lg:flex xl:gap-2">
            <Link href="/" className={desktopLinkClass(isActive("/"))}>
              {t("home")}
            </Link>
            <Link href="/about-us" className={desktopLinkClass(isActive("/about-us"))}>
              {t("aboutUs")}
            </Link>
            <Link href="/local-immigration" className={desktopLinkClass(isActive("/local-immigration"))}>
              {t("localImmigration")}
            </Link>

           <div className="relative" ref={servicesRef}>
            {/* 第一個按鈕 (Corporate Services) */}
            <button
              type="button"
              onClick={() => {
                setServicesOpen((value) => !value);
                setTaxServicesOpen(false);
              }}
              onMouseEnter={() => {
                if (window.matchMedia("(pointer: fine)").matches) {
                  setServicesOpen(true);
                  setTaxServicesOpen(false);
                }
              }}
              className={desktopLinkClass(isActive("/corporate-services"))}
              aria-expanded={servicesOpen}
              aria-haspopup="menu"
            >
              <span>{t("services")}</span>
              <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
          

              <div
                className={`absolute left-0 top-full mt-3 w-80 rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_28px_80px_-45px_rgba(15,23,42,0.75)] transition duration-200 ${
                  servicesOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                }`}
                role="menu"
              >
                {servicesItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setServicesOpen(false)}
                    className={dropdownLinkClass(isActive(item.href))}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="relative" ref={taxRef}>
              <button
                type="button"
                onClick={() => {
                  setTaxServicesOpen((value) => !value);
                  setServicesOpen(false);
                }}
                onMouseEnter={() => {
                  if (window.matchMedia("(pointer: fine)").matches) {
                    setTaxServicesOpen(true);
                    setServicesOpen(false);
                  }
                }}
                className={desktopLinkClass(isActive("/accountancy-tax"))}
                aria-expanded={taxServicesOpen}
                aria-haspopup="menu"
              >
                <span>{t("services2")}</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${taxServicesOpen ? "rotate-180" : ""}`} />
              </button>

              <div
                className={`absolute left-0 top-full mt-3 w-80 rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_28px_80px_-45px_rgba(15,23,42,0.75)] transition duration-200 ${
                  taxServicesOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-1 opacity-0"
                }`}
                role="menu"
              >
                {taxItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    role="menuitem"
                    onClick={() => setTaxServicesOpen(false)}
                    className={dropdownLinkClass(isActive(item.href))}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="/wealth-inheritance" className={desktopLinkClass(isActive("/wealth-inheritance"))}>
              {t("fortuneInheritance")}
            </Link>
            <Link
              href="/contact"
              className={`${desktopLinkClass(isActive("/contact"))} rounded-full bg-[#101b33] px-4 py-2.5 text-white shadow-[0_16px_35px_-24px_rgba(7,17,31,0.7)] ring-1 ring-[#07111f]/10 transition hover:bg-[#0f2a5c] hover:text-white hover:after:scale-x-0 active:bg-[#0d2450]`}
            >
              {t("contact")}
</Link>
          </nav>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div className="hidden items-center rounded-full border border-slate-200 bg-white px-2 py-1 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.35)] md:flex">
              {(["en", "zh", "cn"] as Lang[]).map((item) => (
                <button
                  key={item}
                  onClick={() => setLang(item)}
                  className={`rounded-full px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] transition ${
                    lang === item ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {languageLabel(item)}
                </button>
              ))}
            </div>

            <button
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-[0_14px_30px_-24px_rgba(15,23,42,0.35)] transition hover:bg-slate-50 md:hidden"
              onClick={() => setIsMobileMenuOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white/96 px-4 py-5 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.55)] backdrop-blur-xl md:hidden">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-4">
              <Link href="/" className={mobileLinkClass(isActive("/"))}>
                {t("home")}
              </Link>
              <Link href="/about-us" className={mobileLinkClass(isActive("/about-us"))}>
                {t("aboutUs")}
              </Link>
              <Link href="/local-immigration" className={mobileLinkClass(isActive("/local-immigration"))}>
                {t("localImmigration")}
              </Link>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2">
                <button
                  type="button"
                  onClick={() => setServicesOpen((value) => !value)}
                  className="flex w-full touch-manipulation items-center justify-between rounded-2xl px-4 py-3.5 text-left text-base font-medium text-slate-800"
                  aria-expanded={servicesOpen}
                >
                  <span>{t("services")}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="space-y-2 px-1 pb-1 pt-1">
                    {servicesItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setServicesOpen(false);
                        }}
                        className={mobileLinkClass(isActive(item.href))}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-2">
                <button
                  type="button"
                  onClick={() => setTaxServicesOpen((value) => !value)}
                  className="flex w-full touch-manipulation items-center justify-between rounded-2xl px-4 py-3.5 text-left text-base font-medium text-slate-800"
                  aria-expanded={taxServicesOpen}
                >
                  <span>{t("services2")}</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${taxServicesOpen ? "rotate-180" : ""}`} />
                </button>
                {taxServicesOpen && (
                  <div className="space-y-2 px-1 pb-1 pt-1">
                    {taxItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setTaxServicesOpen(false);
                        }}
                        className={mobileLinkClass(isActive(item.href))}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link href="/wealth-inheritance" className={mobileLinkClass(isActive("/wealth-inheritance"))}>
                {t("fortuneInheritance")}
              </Link>
              <Link href="/contact" className={mobileLinkClass(isActive("/contact"))}>
                {t("contact")}
              </Link>
            </div>

            <div className="mt-6 flex items-center justify-between rounded-3xl border border-slate-200 bg-white px-4 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">{t("languageLabel")}</p>
                <div className="mt-3 flex gap-2">
                  {(["en", "zh", "cn"] as Lang[]).map((item) => (
                    <button
                      key={item}
                      onClick={() => setLang(item)}
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
                        lang === item ? "bg-slate-900 text-white" : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {languageLabel(item)}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 text-slate-700">
                <a
                  href="https://www.facebook.com/connexionshk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-teal-300 hover:text-teal-700"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="https://www.linkedin.com/company/connexions-consulting-limited-hong-kong/?originalSubdomain=hk"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white transition hover:border-teal-300 hover:text-teal-700"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
