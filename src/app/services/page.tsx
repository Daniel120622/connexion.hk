"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';


export default function ServicesOverviewPage() {

      const [lang, setLang] = useState<"en" | "cn">("en");
    
      useEffect(() => {
        const saved = localStorage.getItem("lang") as "en" | "cn" | null;
        if (saved) {
          setLang(saved);
        } else {
          // Optional: auto-detect browser language on first visit
          const browserLang = navigator.language.toLowerCase();
          const defaultLang = browserLang.includes("zh") ? "cn" : "en";
          localStorage.setItem("lang", defaultLang);
          setLang(defaultLang);
        }
      }, []);
    
      // Content switch
      const content = {
        en: {
          heroTitle: "Our Professional Services",
          heroSubtitle: "Tailored solutions for company formation, compliance, immigration and global business success.",
          intro:"At Connexions HK, we provide end-to-end professional services to help individuals and businesses establish, operate and expand in Hong Kong and internationally. From fast-track company incorporation to ongoing compliance and immigration support — we are your trusted partner every step of the way.",
          HKLimitedCompanyTitle: "HK Limited Company",
          HKLimitedCompanyDesc: "Fast and compliant Hong Kong company registration with full setup and banking support.",
          BVIOverseasCompanyTitle: "BVI & Overseas Company",
          BVIOverseasCompanyDesc: "Offshore company formation in BVI and other jurisdictions for asset protection & tax efficiency.",
          CompanySecretaryTitle: "Company Secretary",
          CompanySecretaryDesc: "Professional compliance, annual filings, board support and corporate governance in Hong Kong.",
          ctaTitle: "Ready to Get Started?",
          ctaDesc: "Contact us today for a free consultation and personalized service proposal.",
          ctaButton: "Contact Us Now",
          LearnMore: "Learn More"
        },
        zh: {
          heroTitle: "我們的專業服務",
          heroSubtitle: "量身定制的公司成立、合規、移民和全球業務成功解決方案。",
          intro:"在Connexions HK，我們提供端到端的專業服務，幫助個人和企業在香港及國際上建立、運營和擴展業務。從快速的公司註冊到持續的合規和移民支持——我們是您每一步的可信賴夥伴。",
          HKLimitedCompanyTitle: "香港有限公司",
          HKLimitedCompanyDesc: "快速且合規的香港公司註冊，提供完整的設立和銀行支持。",
          BVIOverseasCompanyTitle: "BVI及海外公司",
          BVIOverseasCompanyDesc: "在BVI及其他司法管轄區設立離岸公司，以實現資產保護和稅務效率。",
          CompanySecretaryTitle: "公司秘書",
          CompanySecretaryDesc: "專業的合規、年度申報、董事會支持和香港企業治理。",
          ctaTitle: "準備好開始了嗎？",
          ctaDesc: "立即聯繫我們，獲取免費諮詢和個性化服務方案。",
          ctaButton: "立即聯繫我們",
          LearnMore: "了解更多"
        },
  
        cn:{
          heroTitle: "我们的专业服务",
          heroSubtitle: "量身定制的公司成立、合规、移民和全球业务成功解决方案。",
          intro:"在Connexions HK，我们提供端到端的专业服务，帮助个人和企业在香港及国际上建立、运营和扩展业务。从快速的公司注册到持续的合规和移民支持——我们是您每一步的可信赖伙伴。",
          HKLimitedCompanyTitle: "香港有限公司",
          HKLimitedCompanyDesc: "快速且合规的香港公司注册，提供完整的设立和银行支持。",
          BVIOverseasCompanyTitle: "BVI及海外公司",
          BVIOverseasCompanyDesc: "在BVI及其他司法管辖区设立离岸公司，以实现资产保护和税务效率。",
          CompanySecretaryTitle: "公司秘书",
          CompanySecretaryDesc: "专业的合规、年度申报、董事会支持和香港企业治理。",
          ctaTitle: "准备好开始了吗？",
          ctaDesc: "立即联系我们，获取免费咨询和个性化服务方案。",
          ctaButton: "立即联系我们",
          LearnMore: "了解更多"
        }
      };
    
      const current = content[lang];

  return (


    <div className="min-h-screen bg-gray-50">
      <header className="bg-indigo-600 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">{current.heroTitle}</h1>
        </div>
      </header>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-blue-900/80 to-teal-900/70 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=2000"
            alt="Business team discussing services"
            className="w-full h-full object-cover brightness-50"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            {current.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            {current.heroSubtitle}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            {current.intro}
          </p>
        </div>
      </section>

      {/* Service Cards – Navigation Buttons */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Card 1: HK Limited Company */}
            <Link href="/services/local-company" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/hk-limited-company.jpg"
                    alt="Hong Kong Limited Company"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {current.HKLimitedCompanyTitle}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {current.HKLimitedCompanyDesc}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {current.LearnMore} 
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 2: BVI & Overseas Company */}
            <Link href="/services/BVI-company" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/bvi-oversea-company.jpg"
                    alt="BVI Overseas Company"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {current.BVIOverseasCompanyTitle}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {current.BVIOverseasCompanyDesc}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {current.LearnMore} <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            {/* Card 3: Company Secretary */}
            <Link href="/services/company-secretary" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/company-secretary.jpg"
                    alt="Company Secretary Services"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {current.CompanySecretaryTitle}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {current.CompanySecretaryDesc}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {current.LearnMore} <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {current.ctaTitle}
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-10 opacity-90">
            {current.ctaDesc}
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-teal-700 font-bold py-4 px-12 rounded-full text-lg hover:bg-gray-100 transition shadow-xl hover:shadow-2xl"
          >
            {current.ctaButton}
          </a>
        </div>
      </section>
    </div>
  );
}