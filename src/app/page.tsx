import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: 'Connexions HK | Immigration & Professional Consulting',
  description:
    'Expert immigration, visa, residency, and business consulting services in Hong Kong.',
  keywords:
    'Hong Kong immigration, visa application, quality migrant, investment visa, business setup',
};

export default function HomePage() {

  return (
    <div className="min-h-screen">

      <main>
        <Hero />
        <AboutUs />
        <Contact />
        <Analytics />
        <SpeedInsights/>
      </main>
    </div>
  );
}