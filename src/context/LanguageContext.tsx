"use client";

import React, { createContext, useContext } from "react";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";

type Lang = "en" | "cn" | "zh";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const LOCALE_COOKIE = "connexions-locale";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const locale = useLocale();
  const lang = (locale === "cn" || locale === "zh" ? locale : "en") as Lang;

  const setLang = (nextLang: Lang) => {
    if (typeof document !== "undefined") {
      document.cookie = `${LOCALE_COOKIE}=${nextLang}; path=/; max-age=31536000; samesite=lax`;
      localStorage.setItem("lang", nextLang);
    }
    router.refresh();
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
