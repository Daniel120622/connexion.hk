// src/app/[locale]/services/BVI-company/page.tsx
"use client";

import { Building2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import PageHero from '@/components/PageHero';
import { corporateServicesNav, corporateServicesOrder } from '@/lib/corporateServicesNav';

export default function BVICompanyPage() {
  const { lang } = useLanguage();
      
        // Content switch
        const content = {
          en: {
            heroTitle: "BVI & Overseas Company Formation",
            heroDesc: "Fast, confidential and cost-effective offshore company setup in the British Virgin Islands and other jurisdictions.",
            BenfitsTitle: "Why Choose BVI for Your Overseas Company?",
            intro1: "As one of the world’s most established offshore financial centers, the British Virgin Islands offers a robust common law system, strong commercial privacy protections, and a tax-neutral business environment. As the preferred jurisdiction for international capital operations, the BVI not only provides entrepreneurs with flexible holding structures and asset management platforms but also serves as a key hub for cross-border investment, overseas listings, and family wealth succession.",
            intro2:"We provides professional advisory services to assist global entrepreneurs and investors in incorporating BVI offshore companies. We offer structuring planning and business discussions, analyzing business nature and considering tax efficiency solutions.",
            ctaDesc: "Most clients receive a detailed proposal within 24 hours.",
            ctaButton: "Get Your BVI Company Proposal"
    
          },
          zh: {
            heroTitle: "註冊海外公司",
            heroDesc: "在英屬維爾京群島及其他司法管轄區快速、保密且具成本效益地設立離岸公司。",
            BenfitsTitle: "為何選擇英屬維爾京群島設立海外公司？",
            intro1: "英屬維爾京群島作為全球最成熟的離岸金融中心之一，擁有穩健的普通法體系、高度的商業隱私保護，以及一個稅務中立的營商環境。作為國際資本運作的首選司法管轄區，BVI 不僅為企業家提供靈活的控股架構與資產管理平台，同時也是搭建跨境投資、赴海外上市及家族財富傳承的關鍵節點。",
            intro2: "宏達策略提供專業顧問意見，為全球企業家及投資者註冊 BVI 海外公司，提供架構策劃與業務討論，分析業務性質及節稅方案的考慮。",
            ctaDesc: "立即聯絡我們，了解更多",
            ctaButton: "聯繫我們"
          },
          cn: {
            heroTitle: "注册海外公司",
            heroDesc: "在英属维尔京群岛及其他司法管辖区快速、保密且具成本效益地设立离岸公司。",
            BenfitsTitle: "为何选择英属维尔京群岛设立海外公司？",
            intro1: "英属维尔京群岛作为全球最成熟的离岸金融中心之一，拥有稳健的普通法体系、高度的商业隐私保护，以及一个税务中立的营商环境。作为国际资本运作的首选司法管辖区，BVI 不仅为企业家提供灵活的控股架构与资产管理平台，同时也是搭建跨境投资、赴海外上市及家族财富传承的关键节点。",
            intro2: "宏达策略提供专业顾问意见，为全球企业家及投资者注册 BVI 海外公司，提供架构策划与业务讨论，分析业务性质及节税方案的考虑。",
            ctaDesc: "立即联络我们，了解更多",
            ctaButton: "联系我们"
          }
        };
      
        const current = content[lang];

    return (
    <div className="min-h-screen bg-gray-50">
      <PageHero
        icon={Building2}
        title={current.heroTitle}
        description={current.heroDesc}
        imageSrc="/images/services/BVI.jpeg"
        imageAlt="BVI and overseas company formation"
        variant="corporate"
        ctaLabel={current.ctaButton}
        ctaHref="/contact"
        chips={corporateServicesOrder.map((slug) => ({
          label: corporateServicesNav[slug].title[lang],
          href: corporateServicesNav[slug].href,
          active: slug === "bvi-company",
        }))}
      />

      {/* Main Content */}
      <section id="bvi-company" className="py-16 md:py-24 bg-white scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {current.BenfitsTitle}
          </h2>

          <div className="space-y-6 text-lg leading-loose text-gray-700">
            <p>{current.intro1}</p>
            <p>{current.intro2}</p>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <a
              href="/contact"
              className="inline-block bg-[#3ac9d9] text-white font-semibold py-4 px-10 rounded-full text-lg hover:bg-[#2ab8c8] transition shadow-lg hover:shadow-xl"
            >
              {current.ctaButton}
            </a>
            <p className="mt-4 text-gray-600">
              {current.ctaDesc}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
