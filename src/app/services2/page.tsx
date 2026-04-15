"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';


export default function ServicesOverviewPage() {

      const { lang } = useLanguage();
    
      // Content switch
      const content = {
        en: {
          heroTitle: "Accountancy and Tax Services",
          heroSubtitle: "Precision-driven accountancy, tax, and corporate solutions for seamless company formation, compliance, and international success in Hong Kong.",
          intro: "At Connexions, we help entrepreneurs and businesses establish and thrive in Hong Kong with tailored, one-stop services — from company incorporation and secretarial support to accounting, tax advisory, and immigration solutions.",
          HKLimitedCompanyTitle: "HK Limited Company",
          HKLimitedCompanyDesc: "Fast and compliant Hong Kong company registration with full setup and banking support.",
          BVIOverseasCompanyTitle: "BVI & Overseas Company",
          BVIOverseasCompanyDesc: "Offshore company formation in BVI and other jurisdictions for asset protection & tax efficiency.",
          CompanySecretaryTitle: "Company Secretary",
          CompanySecretaryDesc: "Professional compliance, annual filings, board support and corporate governance in Hong Kong.",
          ctaTitle: "Ready to Get Started?",
          ctaDesc: "Contact us today to learn more",
          ctaButton: "Contact Us Now",
          LearnMore: "Learn More",
          AccountingServicesTitle: "Accounting & Audit Services",
          AccountingServicesDesc: "Comprehensive accounting, bookkeeping, and audit services to ensure your business stays compliant and financially healthy.",
          BusinessAdvisoryTitle: "Business Advisory Services",
          BusinessAdvisoryDesc: "Expert business consulting and advisory services to help you navigate market challenges and seize growth opportunities.",
          TaxConsultingTitle: "Tax Consulting Services",
          TaxConsultingDesc: "Specialized tax consulting to optimize your tax strategy, ensure compliance, and maximize savings."
        },
        zh: {
          heroTitle: "我們的專業服務",
          heroSubtitle: "量身定制的公司成立、合規、移民和全球業務成功解決方案。",
          intro:"歡迎你到香港開展業務！宏達策略為您的企業提供各種服務和解決方案，作為值得信賴的夥伴協助您的企業迎接各種挑戰。我們提供一站式的專業服務，包括註冊成立公司、公司秘書服務、企業管理服務及會計服務等，以滿足您的商務需求。",
          HKLimitedCompanyTitle: "香港有限公司",
          HKLimitedCompanyDesc: "快速且合規的香港公司註冊，提供完整的設立和銀行支持。",
          BVIOverseasCompanyTitle: "BVI及海外公司",
          BVIOverseasCompanyDesc: "在BVI及其他司法管轄區設立離岸公司，以實現資產保護和稅務效率。",
          CompanySecretaryTitle: "公司秘書",
          CompanySecretaryDesc: "專業的合規、年度申報、董事會支持和香港企業治理。",
          ctaTitle: "準備好開始了嗎？",
          ctaDesc: "立即聯繫我們，了解更多。",
          ctaButton: "聯繫我們",
          LearnMore: "了解更多",
          AccountingServicesTitle: "會計及審計服務",
          AccountingServicesDesc: "全面的會計、記賬和審計服務，確保您的業務保持合規並財務健康。",
          BusinessAdvisoryTitle: "商業諮詢服務",
          BusinessAdvisoryDesc: "專業的商業諮詢和顧問服務，幫助您應對市場挑戰並抓住增長機會。",
          TaxConsultingTitle: "稅務諮詢服務",
          TaxConsultingDesc: "專業稅務諮詢，優化您的稅務策略，確保合規並最大化節稅效益。"
        },
  
        cn:{
          heroTitle: "我们的专业服务",
          heroSubtitle: "量身定制的公司成立、合规、移民和全球业务成功解决方案。",
          intro:"欢迎你到香港开展业务！宏达策略为您的企业提供各种服务和解决方案，作为值得信赖的伙伴协助您的企业迎接各种挑战。我们提供一站式的专业服务，包括注册成立公司、公司秘书服务、企业管理服务及会计服务等，以满足您的商务需求。",
          HKLimitedCompanyTitle: "香港有限公司",
          HKLimitedCompanyDesc: "快速且合规的香港公司注册，提供完整的设立和银行支持。",
          BVIOverseasCompanyTitle: "BVI及海外公司",
          BVIOverseasCompanyDesc: "在BVI及其他司法管辖区设立离岸公司，以实现资产保护和税务效率。",
          CompanySecretaryTitle: "公司秘书",
          CompanySecretaryDesc: "专业的合规、年度申报、董事会支持和香港企业治理。",
          ctaTitle: "准备好开始了吗？",
          ctaDesc: "立即联系我们，了解更多。",
          ctaButton: "联系我们",
          LearnMore: "了解更多",
          AccountingServicesTitle: "会计及审计服务",
          AccountingServicesDesc: "全面的会计、记账和审计服务，确保您的业务保持合规并财务健康。",
          BusinessAdvisoryTitle: "商业咨询服务",
          BusinessAdvisoryDesc: "专业的商业咨询和顾问服务，帮助您应对市场挑战并抓住增长机会。",
          TaxConsultingTitle: "税务咨询服务",
          TaxConsultingDesc: "专业税务咨询，优化您的税务策略，确保合规并最大化节税效益。"
        }
      };
    
      const current = content[lang];

  return (
    <div className="min-h-screen bg-gray-50">
    
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/80 to-teal-900/70 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="images/banner/accountancy.jpeg"
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
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12 max-w-auto mx-auto">
            {current.intro}
          </p>
        </div>
      </section>

      {/* Service Cards – Navigation Buttons */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">


            <Link href="/services2/accounting" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/services/accounting.jpg"
                    alt="Accounting & Audit Services"

                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {current.AccountingServicesTitle}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {current.AccountingServicesDesc}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {current.LearnMore} <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services2/businessAdv" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/services/businessAdv.jpg"
                    alt="Business Advisory Services"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {current.BusinessAdvisoryTitle}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {current.BusinessAdvisoryDesc}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {current.LearnMore} <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>

            <Link href="/services2/tax" className="group block">
              <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-gray-200 h-full flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/images/services/tax.jpg"
                    alt="Tax Consulting Services"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    {current.TaxConsultingTitle}
                  </h3>
                  <p className="text-gray-600 mb-6 flex-grow">
                    {current.TaxConsultingDesc}
                  </p>
                  <div className="flex items-center text-[#3ac9d9] font-medium group-hover:text-[#2ab8c8] transition-colors">
                    {current.LearnMore} <ArrowRight className="ml-2 w-5 h-5" />
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
          {current.ctaButton}
        </a>
        <p className="mt-4 text-gray-600">
           {current.ctaDesc}
        </p>
      </div>

      </section>
          

    </div>
  );
}