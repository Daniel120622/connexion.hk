import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import AboutUs from '@/components/AboutUs';
import Contact from '@/components/Contact';


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
      {/* Example translated heading */}
      <section className="py-8 bg-gray-50 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
        </h1>
      </section>

      <main>
        <Hero />
        <Services />
        
        <AboutUs />
        <Contact />
      </main>
    </div>
  );
}