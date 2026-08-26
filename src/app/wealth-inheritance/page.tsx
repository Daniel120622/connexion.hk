// src/app/wealth-inheritance/page.tsx
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Gem } from 'lucide-react';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';

export default function WealthInheritancePage() {
  const t = useTranslations("Pages.WealthInheritance");
    
      
    

  const [activeModal, setActiveModal] = useState<number | null>(null);
  const openModal = (index: number) => setActiveModal(index);
  const closeModal = () => setActiveModal(null);

    return (
      <div className="min-h-screen bg-gray-50">
        <PageHero
          icon={Gem}
          title={t("heroTitle")}
          description={t("heroDesc")}
          imageSrc="/images/banner/wealth.jpg"
          imageAlt="Wealth and fortune inheritance planning"
          variant="wealth"
          ctaLabel={t("ctaButton")}
          ctaHref="/contact"
          chips={[
          ]}
        />

        {/* ==================== Introduction ==================== */}
        <section className="py-20 bg-gradient-to-r from-gray-100 to-gray-50">
          <div className="container mx-auto px-6 lg:px-12 max-w-5xl text-center">
            <p className="text-lg md:text-xl leading-relaxed text-gray-800 mb-6">
              {t("intro")}
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-8">
              {t("intro_2")}
            </p>
          </div>
        </section>

        {/* ==================== Photo-Text Pairs Section ==================== */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Photo with Title1 */}
              <div id="planning" className="relative h-64 w-full scroll-mt-24 overflow-hidden rounded-lg shadow-lg md:h-80">
                <Image
                  src="/images/fortuneInheritance/title1.jpg"
                  alt="Title1 Image"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("Title1")}</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  {t.raw("Title1List").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              {/* Right Photo with Title2 */}
              <div id="private-bank" className="relative h-64 w-full scroll-mt-24 overflow-hidden rounded-lg shadow-lg md:h-80 md:order-2">
                <Image
                  src="/images/fortuneInheritance/title2.jpg"
                  alt="Title2 Image"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("Title2")}</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  {t.raw("Title2List").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              {/* Left Photo with Title3 */}
              <div id="overseas-trust" className="relative h-64 w-full scroll-mt-24 overflow-hidden rounded-lg shadow-lg md:h-80">
                <Image
                  src="/images/fortuneInheritance/title3.jpg"
                  alt="Title3 Image"
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{t("Title3")}</h2>
                <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-2">
                  {t.raw("Title3List").map((item: string, index: number) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

                  {/* ==================== CTA Section ==================== */}
        <div className="mt-16 text-center">
                <a
                  href="/contact"
                  className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
                >
                  {t("ctaButton")}
                </a>
                <p className="mt-4 text-gray-600">
                  {t("ctaDesc")}
                </p>
          </div>

        </section>
    </div>
  );
}