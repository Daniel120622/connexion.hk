"use client";

import { useTranslations } from 'next-intl';

export default function Hero() {


  return (
    <section className="hero bg-white text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold">{('hero.title')}</h2>
        <img src="images/hero-banner.jpg" alt="Hero Banner" className="max-w-full h-auto" />
      </div>
    </section>
  );
}