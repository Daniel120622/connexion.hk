"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Lang = "en" | "cn" | "zh";

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en"); // Start with default to match SSR

  useEffect(() => {
    // After hydration, set the correct language based on localStorage or browser
    try {
      const saved = localStorage.getItem("lang") as Lang | null;
      if (saved) {
        setLangState(saved);
        return;
      }
      const browserLang = navigator?.language?.toLowerCase() || "";
      const defaultLang: Lang = browserLang.includes("zh") ? "cn" : "en";
      localStorage.setItem("lang", defaultLang);
      setLangState(defaultLang);
    } catch (e) {
      // Fallback to en
    }
  }, []);

  const setLang = (l: Lang) => {
    localStorage.setItem("lang", l);
    setLangState(l);
  };

  return <LanguageContext.Provider value={{ lang, setLang }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
