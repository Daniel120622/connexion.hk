// src/app/layout.tsx
import type { ReactNode } from 'react';
import '@/app/globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connexions HK',
  description: 'Immigration & Professional Consulting',
  icons: {
    icon: '/images/connexions-hk.png',
  },
};



export default async function RootLayout({ children }: { children: ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased">
        <NextIntlClientProvider messages={messages}>
          <LanguageProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
