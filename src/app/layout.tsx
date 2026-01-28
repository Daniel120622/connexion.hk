import { ReactNode } from 'react';
import Footer from '@/components/Footer';
import '@/app/globals.css';
import Header from '@/components/Header';

interface Props {
  children: ReactNode;
  params: { locale: string };
}

export default function Layout({ children, params }: Props) {
  return (
    <html lang="en">
      <body>
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </body>
    </html>
  );
}

