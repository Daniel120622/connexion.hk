"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calculator } from 'lucide-react';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';

export default function ServicesOverviewPage() {

      const t = useTranslations("Pages.TaxOverview");
    
      
    

  return (
    <div className="min-h-screen bg-gray-50">

      <PageHero
        icon={Calculator}
        title={t("heroTitle")}
        description={t("heroSubtitle")}
        imageSrc="/images/banner/accountancy.jpeg"
        imageAlt="Business team discussing services"
        variant="accountancy"
        ctaLabel={t("ctaButton")}
        ctaHref="/contact"
        chips={[
         
        ]}
      />

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-auto mx-auto">
            {t("intro")}
          </p>
        </div>
      </section>

      {/* Service Cards – Navigation Buttons */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

            <Link href="/accountancy-tax/accounting" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/accounting.jpg"
                    alt="Accounting & Audit Services"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {t("AccountingServicesTitle")}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {t("AccountingServicesDesc")}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {t("LearnMore")} <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/accountancy-tax/business-advisory" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/businessAdv.jpg"
                    alt="Business Advisory Services"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {t("BusinessAdvisoryTitle")}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {t("BusinessAdvisoryDesc")}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {t("LearnMore")} <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/accountancy-tax/tax" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/images/services/tax.jpg"
                    alt="Tax Consulting Services"
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {t("TaxConsultingTitle")}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {t("TaxConsultingDesc")}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {t("LearnMore")} <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          
          </div>
        </div>
      

      <div className="mt-16 py-8 text-center">
        <a href="/contact"
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