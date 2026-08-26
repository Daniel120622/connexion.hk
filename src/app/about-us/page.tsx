// src/app/about-us/page.tsx  (or components/about-us.tsx if you use it as component)
"use client";

import React from 'react';
import Image from 'next/image';
import { Handshake } from 'lucide-react';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';

export default function AboutUs() {
  const t = useTranslations("Pages.AboutUs");

  

  return (
    <div className="min-h-screen bg-gray-50">

      <PageHero
        icon={Handshake}
        title={t("heroTitle")}
        description={t("heroDesc")}
        imageSrc="/images/banner/aboutUs.png"
        imageAlt="Hong Kong Victoria Harbour skyline at dusk"
        variant="about"
        ctaLabel={t("closingCall")}
        ctaHref="/contact"
        chips={[
          
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              {t("intro")}
            </p>
          </div>
        </div>
      </section>

      {/* Our Proficiency */}
      <section id="proficiency" className="scroll-mt-24 py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t("proficiencyTitle")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/ourProficiency.png"
                alt="Professional team collaboration and expertise in office setting"
                width={1024}
                height={731}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("proficiencyText1")}
              </p>

            </div>
          </div>
        </div>
      </section>

      {/* All-Rounded Services */}
      <section id="services" className="scroll-mt-24 py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t("servicesTitle")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("servicesText1")}
              </p>

            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <Image
                src="/images/index-ourService/accounting-services.jpg"
                alt="Accountant reviewing financial documents for business compliance"
                width={1280}
                height={917}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Follow-up */}
      <section id="follow-up" className="scroll-mt-24 py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            {t("followUpTitle")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/PeaceOfMindFollowUp.jpg"
                alt="Happy family enjoying new life and settlement success (adaptable to Hong Kong context)"
                width={6048}
                height={4024}
                sizes="(min-width: 768px) 50vw, 100vw"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("followUpText1")}
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t("followUpText2")}
              </p>
            </div>
          </div>
        </div>

      {/* Closing */}
      <div className="mt-16 py-8 text-center">
          <p className="mt-4 text-gray-600">
              {t("closingTitle")}
          </p>

        <a href="/contact"
          className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
       >

          {t("closingCall")}
        </a>
        <p className="mt-4 text-gray-600">
           {t("closingDesc")}
        </p>
      </div>
      </section>
    </div>
  );
}