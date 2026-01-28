import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import Header from '@/components/Header';

import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'Connexions HK',
  description: 'Connexions HK Website',
  icons: {
    icon: '/connexions.public/images/connecxions-hk.png',
  },
};

function floatingWhatsAppButton() {
  {/* Floating WhatsApp Button */}  
  return (      
      <a
        href="https://wa.me/85255403916"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-2xl hover:bg-green-600 transition-transform hover:scale-110 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.42.89 4.64 2.36 6.32L2 22l3.68-2.36C7.36 21.11 9.58 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm3.78 14.38c-.24.68-.74 1.22-1.4 1.4-.66.18-1.4.12-2.06-.18-1.66-.78-2.78-2.62-3.06-4.34-.28-1.72.12-3.44 1.02-4.68.9-1.24 2.26-1.84 3.7-1.84 1.44 0 2.8.6 3.7 1.84.9 1.24 1.3 2.96 1.02 4.68-.28 1.72-1.4 3.56-3.06 4.34z" />
        </svg>
      </a>
  );
}


interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default function Layout({ children, params }: Props) {
  return (
    <html lang="en">
      <body>
          <Header />
          {floatingWhatsAppButton()}
          <main>
            {children}
          </main>
          <Footer />
        </body>
    </html>
  );
}

