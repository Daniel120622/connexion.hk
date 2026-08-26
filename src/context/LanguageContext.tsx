"use client";

import React, { createContext, useContext, useState } from "react";
import { NextIntlClientProvider } from "next-intl";
import { allMessages, type Locale } from "@/messages";

type Lang = Locale;

type LanguageContextValue = {
  lang: Lang;
  setLang: (l: Lang) => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const LOCALE_COOKIE = "connexions-locale";

export function LanguageProvider({
  initialLocale,
  children,
}: {
  initialLocale: Lang;
  children: React.ReactNode;
}) {
  // Holding the active locale in client state -- instead of only deriving it
  // from the server via useLocale() + router.refresh() -- is what makes the
  // language switch instant. All three message bundles are already part of
  // the client bundle (src/messages/index.ts), so flipping `lang` here
  // re-renders NextIntlClientProvider with the new messages immediately: no
  // network round trip, no full page refresh needed.
  const [lang, setLangState] = useState<Lang>(initialLocale);

  const setLang = (nextLang: Lang) => {
    setLangState(nextLang);
    if (typeof document !== "undefined") {
      // Persist the choice so the next full page load (new tab, hard
      // refresh, or anything server-rendered, e.g. generateMetadata) also
      // picks the same locale via src/i18n/request.ts.
      document.cookie = `${LOCALE_COOKIE}=${nextLang}; path=/; max-age=31536000; samesite=lax`;
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <NextIntlClientProvider locale={lang} messages={allMessages[lang]}>
        {children}
      </NextIntlClientProvider>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
