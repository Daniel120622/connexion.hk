// src/app/local-immigration/page.tsx
"use client";

import React from 'react';
import { Star, Landmark, Briefcase, Users, Rocket, GraduationCap, FileText, IdCard, Plane } from 'lucide-react';
import { useTranslations } from 'next-intl';
import PageHero from '@/components/PageHero';
import SchemeAccordion from '@/components/SchemeAccordion';

export default function LocalImmigrationPage() {

  const t = useTranslations("Pages.LocalImmigration");
  
    
  

    return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        icon={Plane}
        title={t("heroTitle")}
        description={t("heroDesc")}
        imageSrc="/images/banner/local-immg.jpeg"
        imageAlt="Iconic Hong Kong skyline and Victoria Harbour in daylight"
        variant="immigration"
        ctaLabel={t("ctaButton")}
        ctaHref="/contact"
        chips={[
          
        ]}
      />

      {/* Interactive Schemes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-5">
            {t("ContentSections")}
          </h2>
          <p className="text-center text-lg text-gray-600 mb-14 max-w-2xl mx-auto">
            {t("intro")}
          </p>

          <div className="space-y-3">

            <SchemeAccordion
              id="top-talent-pass"
              icon={Star}
              title={t("topTalentPassScheme")}
              preview={t("topTalentPassSchemeDesc1")}
            >
              <p>
                {t("topTalentPassSchemeDesc1") + " "}
                <a
                  href="https://www.immd.gov.hk/pdf/aggregate_list.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("topTalentPassSchemeLink")}
                </a>
                {t("topTalentPassSchemeDesc2")}
              </p>
            </SchemeAccordion>

            <SchemeAccordion
              id="ncies"
              icon={Landmark}
              title={t("NCIES_title")}
              preview={t("NCIES_description")}
            >
              <p>{t("NCIES_description")}</p>
              <p>{t("NCIESRequirements1")}</p>
              <p>{t("NCIESRequirements2")}</p>
              <p>{t("NCIESRequirements3")}</p>
              <p>{t("NCIESRequirements4")}</p>
            </SchemeAccordion>

            <SchemeAccordion
              id="gep"
              icon={Briefcase}
              title={t("generalEmploymentPolicy")}
              preview={t("generalEmploymentPolicyDesc")}
            >
              <p>{t("generalEmploymentPolicyDesc")}</p>
            </SchemeAccordion>

            <SchemeAccordion
              id="asmtp"
              icon={Users}
              title={t("ASMTP")}
              preview={t("ASMTPdesc")}
            >
              <p>{t("ASMTPdesc")}</p>
            </SchemeAccordion>

            <SchemeAccordion
              id="eeen"
              icon={Rocket}
              title={t("EEEN")}
              preview={t("EEENDesc")}
            >
              <p>{t("EEENDesc")}</p>
            </SchemeAccordion>

            <SchemeAccordion
              id="qmas"
              icon={GraduationCap}
              title={t("qualityMigrantAdmissionScheme")}
              preview={t("qualityMigrantAdmissionSchemeDesc")}
            >
              <p>{t("qualityMigrantAdmissionSchemeDesc")}</p>
            </SchemeAccordion>

            <SchemeAccordion
              id="other-visas"
              icon={FileText}
              title={t("Visas")}
              preview={t("VisaDesc1")}
            >
              <p>{t("Visas_subtitle1")} {t("VisaDesc1")}</p>
              <p>{t("Visas_subtitle2")} {t("VisaDesc2")}</p>
            </SchemeAccordion>

            <SchemeAccordion
              id="hkid-card"
              icon={IdCard}
              title={t("HKIDCard")}
              preview={t("HKIDDesc")}
            >
              <p>{t("HKIDDesc")}</p>
            </SchemeAccordion>

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
        </div>
      </section>
    </div>
  );
}
