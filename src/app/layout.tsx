// src/app/layout.tsx
import type { ReactNode } from 'react';
import '@/app/globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { getLocale } from 'next-intl/server';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import type { Metadata } from 'next';
import type { Locale } from '@/messages';

export const metadata: Metadata = {
  title: 'Connexions HK',
  description: 'Immigration & Professional Consulting',
  icons: {
    icon: '/images/connexions-hk.png',
  },
};



// "cn"/"zh" are internal locale codes used to pick a message file and are
// not themselves valid BCP-47 language tags (in particular "cn" is a
// country code, not a language code) -- map to a real tag for <html lang>.
const HTML_LANG: Record<string, string> = {
  en: 'en',
  zh: 'zh-HK',
  cn: 'zh-CN',
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = (await getLocale()) as Locale;
  const htmlLang = HTML_LANG[locale] ?? 'en';

  return (
    <html lang={htmlLang}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <LanguageProvider initialLocale={locale}>
          <Header />
          <main>{children}</main>
          <Footer />
          <Analytics />
          <SpeedInsights />
        </LanguageProvider>
      </body>
    </html>
  );
}
