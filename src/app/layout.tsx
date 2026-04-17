// src/app/layout.tsx
import type { ReactNode } from 'react';
import '@/app/globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/context/LanguageContext';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connexions HK',
  description: 'Immigration & Professional Consulting',
  icons: {
    icon: '/images/connexions-hk.png',
  },
};



export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}