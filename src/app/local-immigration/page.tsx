// src/app/local-immigration/page.tsx
"use client";

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LocalImmigrationPage() {

  const { lang } = useLanguage();
  
    // Content switch
    const content = {
      en: {
        heroTitle: "Local Immigration Schemes in Hong Kong",
        heroDesc: "Discover tailored pathways to residency, work, investment, and a new life in Hong Kong.",
        intro: "Getting to know your background and needs is our first and most important step. Through careful listening and expert analysis, we enhance your application success rate and identify the best opportunities for you.",
        galleryTitle: "Visual Insights into Hong Kong Immigration",
        galleryDesc: "Explore the visual journey of Hong Kong immigration through our curated gallery of insights and experiences.",
        ContentSections: "Explore Our Local Immigration Schemes",

        topTalentPassScheme:"Top Talent Pass Scheme",
        topTalentPassSchemeDesc1: "The Top Talent Pass Scheme aims to attract high-end talents with extensive work experience ad high academic qualifications from all over the world for their development in Hong Kong.. These include high-income individual with an annual income reaching HK$2.5 million or above and degree graduates from eligible universities",
        topTalentPassSchemeLink: "(list of eligible universities link)",
        topTalentPassSchemeDesc2: ". Depending on the application status, if the relevant conditions are met and the all required application information is furnished, the applicant can obtain an entry approval in a matter of days to weeks, This is currently a relatively fast program to obtain a visa and residence status in Hong Kong.",
        
        
        
        NCIES_title:"New Capital Investment Entrant Scheme",
        NCIES_description: "The New Capital Investment Entrant Scheme was launched on 1 March 2024,. The Scheme aims to attract high-net-worth individuals to settle in Hong Kong and boarden the talent pool for the economic development in the territory. Coupled with the well establishment regulations as the asset and wealth management hub and an extensive investment portfolio, the Scheme offers good entry for applicants who are interested to reside in Hong Kong.",
        
        NCIESRequirements1 : "1. ≥ HKD 30 million net assets (24 months)",
        NCIESRequirements2 : "2. Invest HKD 30 million (HKD 27 million in permitted assets & HKD 3 million in CIES portfolio for innovation/technology)",
        NCIESRequirements3 : "3. Residency visa granted upon completion.",
        NCIESRequirements4 : "4. Residency visa granted upon completion.",

        generalEmploymentPolicy:"General Employment Policy (GEP)",
        generalEmploymentPolicyDesc: "Overseas Chinese nationals holding People’s Republic of China passports who has permanent residence overseas, and has been residing overseas for at least one year immediately before the submission of application can submit the application overseas. If the applicant possesses special skills, knowledge or experience of value to and not readily available in Hong Kong, they may apply to come to work under the GEP. The GEP is quota-free and non-sector specific. The applicant with a good education background, normally a first degree in the relevant field, but in special circumstances, good technical qualifications, proven professional abilities and/or relevant experience and achievements supported by documentary evidence are welcomed. In the meantime, the applicant must have a confirmed employment offer which is relevant to his academic qualifications or work experience that cannot be readily taken up by the local work force. The remuneration package including income, accommodation, medical and other fringe benefits should broadly commensurate with the prevailing market level for professionals in Hong Kong.",

        qualityMigrantAdmissionScheme:"Quality Migrant Admission Scheme (QMAS)",
        qualityMigrantAdmissionSchemeDesc: "The Scheme is a quota-based entrant scheme. It seeks to attract highly skilled or talented people to settle in Hong Kong in order to enhance Hong Kong’s economic competitiveness. Successful applicants are not required to have secured an offer of local employment before their entry to Hong Kong for settlement. All applicants are required to fulfill a set of prerequisites before they can be awarded points under the points-based tests, namely the General Points Test and Achievement-based Points Test, and compete for quota allocation with other applicants. Successful applicants under the Scheme may bring their spouse and unmarried dependent children under the age of 18 to Hong Kong provided that they are capable of supporting and accommodating their dependents on their own financial resources without relying on public assistance in Hong Kong.",
        otherSupportServices:"Other Support Services",
        otherSupportServicesDesc1: "Dependents Visa: When the main applicant has successfully been granted with entry visa, their dependents are eligible for applying for dependent visas to enter Hong Kong.",
        otherSupportServicesDesc2: "All kinds of Extension Applications: Before the expiration of visa, extension application is necessary to be submitted. We will remind you the visa renewal and assist in the visa renewal application.",

        ctaDesc: "Contact us now to learn more",
        ctaButton: "Contact Us Now",
        
        
        ASMTP: "Admission Scheme for Mainland Talents and Professionals (ASMTP)",
        ASMTPdesc: "Designed to attract mainland Chinese talents and professionals to work in Hong Kong. Eligibility includes holding a mainland Chinese passport, possessing skills or qualifications that are in demand in Hong Kong, and having a job offer from a Hong Kong employer. The scheme offers a streamlined application process and allows for family reunification.",
        Visas: "Other Visa",
        VisaDesc1: "Dependents Visa. When the main applicant has successfully been granted with entry visa, their dependents are eligible for applying for dependent visas to enter Hong Kong. ",
        VisaDesc2: "All kinds of Extension Applications. \n Before the expiration of visa, extension application is necessary to be submitted. We will remind you the visa renewal and assist in the visa renewal application.",
        HKIDCard: "Verification of Eligibility for Hong Kong Permanent Identity Card",
        HKIDDesc:"Under the Immigration Ordinance, you are eligible to enjoy the right of abode in Hong Kong under certain circumstances. The Immigration Department would consider the application of Hong Kong permanent residence verification if the applicant has held a valid visa and ordinarily resided in Hong Kong for not less than 7 consecutive years. Connexions will facilitate your application effectively in order to secure a verification.",

        EEEN: "Investment as Entrepreneurs (EEEN)",
        EEENDesc: "Overseas Chinese nationals holding People’s Republic of China passports who has permanent residence overseas, and has been residing overseas for at least one year immediately before the submission of application, can submit the application overseas. This scheme sets for people who wish to enter/stay in Hong Kong for investment as entrepreneurs under the General Employment Policy (GEP), i.e. to establish or join in business in Hong Kong. The applicant should have a good education background, normally a first degree in the relevant field, but in special circumstances, good technical qualifications, proven professional abilities and/or relevant experience and achievements supported by documentary evidence may also be accepted. The applicant should also in a position to make substantial contribution to the economy of Hong Kong, including but not limited to business plan, business turnover, financial resources, investment sum, number of jobs created locally and introduction of new technology or skills. The applicant who wishes to establish or join in a start-up business may also submit an application.",
      },
      zh:{
        heroTitle: "香港本地移民計劃",
        heroDesc: "探索通往香港居留、工作、投資和新生活的量身定制途徑。",
        intro: "了解您的背景和需求是我們第一步也是最重要的一步。透過仔細傾聽和專業分析，我們提高您的申請成功率，並為您識別最佳機會。",
        ContentSections: "探索我們的本地移民計劃",
        galleryTitle: "香港移民的視覺洞見",
        galleryDesc: "透過我們精心策劃的見解和體驗畫廊，探索香港移民的視覺之旅。",
        topTalentPassScheme:"高端人才通行證計劃",
        topTalentPassSchemeDesc1: "高才通計劃旨在吸引世界各地具備豐富工作經驗及高學歷的高端人才到香港發展，包括：高收入人士（年收入超過250萬港幣）和 世界頂尖大學之學士學位畢業生",
        topTalentPassSchemeDesc2: "。如具備相關條件，申請人需提交申請資料。視乎申請情況，申請人最快可數天至數星期便可以獲得入境批准，為目前香港較快可以獲得簽證及居民身份的計劃。",
        topTalentPassSchemeLink: "(合資格大學名單)",
        
        NCIES_title:"新資本投資者入境計劃",
        NCIES_description: "新投資移民計劃為政府自二零二四年三月一日重啟之入境計劃，旨於吸引高淨值人士在香港落戶，帶動香港之經濟發展。此計畫門檻具吸引力、香港作為資產及財富管理樞紐之法規完善，計劃投資組合豐富。",
        NCIESRequirements1 : "1. ≥3000萬港元淨資產（24個月）",
        NCIESRequirements2 : "2. 投資3000萬港元（2700萬港簽證元於許可資產+300萬港元於創新/科技的CIES投資組合）",
        NCIESRequirements3 : "3. 完成後授予居留簽證元於許可資產+300萬港元於創新/科技的CIES投資組合）",
        NCIESRequirements4 : "4. 完成後授予居留簽證元。",

        generalEmploymentPolicy:"一般就業保單 (GEP)",
        generalEmploymentPolicyDesc: "持有中華人民共和國護照而居於海外的中國公民，且已在海外擁有永久居民身份，在緊接申請前已在海外居住不少於一年，能保證申請是從海外遞交，如申請人具備香港特區所需而又缺乏的特別技能、知識或經驗，可以根據一般就業政策申請來港工作。一般就業政策並無配額限制，亦不限行業。申請人需要具備良好的教育背景，通常指持有有關範疇的學士學位，但在特殊情況下，具備良好的技術資格、經證明的專業能力或備有文件證明的有關經驗和成就，亦可予接受。同時申請人必須已確實獲得聘用而從事與其學歷或工作經驗有關的工作，且不能輕易覓得本地人擔任，薪酬福利與當時香港專才的市場薪酬福利大致相同，方可獲考慮發放簽證。",
        
        qualityMigrantAdmissionScheme:"優質人才入境計劃 (QMAS)",
        qualityMigrantAdmissionSchemeDesc: "優秀人才入境計劃是一項設有配額的移民吸納計劃，旨在吸引高技術人才或優才來港定居，藉以提升香港的競爭力。獲批准的申請人毋須在來港定居前先獲得本地雇主聘任。所有申請人均必須首先符合基本資格的要求，才可根據計劃所設分數制度，“綜合申請分制”和“成就計分制”和“成就計分制。核准的申請人可帶同配偶及18歲以下未婚及受養的子女來港，惟其必須能自行負擔受養人在香港的生活和住宿，不依賴公共援助。 ",


        ctaDesc: "立即聯絡我們，了解更多",
        ctaButton: "聯絡我們",
        ASMTP: "內地上人才及專業人士入境計畫 (ASMTP)",
        ASMTPdesc: "旨在吸引內地中國人才和專業人士來香港工作。資格包括持有內地中國護照、擁有香港需求的技能或資格，以及獲得香港雇主的工作邀請。該計劃提供簡化的申請流程，並允許家庭團聚。",
        Visas: "其他簽證",
        VisaDesc1: "受養人來港居留，主申請人獲得合資格的簽證後，其受養人需要申請獨立的受養人簽證來港。我們會協助辦理。",
        VisaDesc2: "各類延長住宿期限申請: 簽證即將到期，您便要申請延期居留。我們會在您的簽注到期前主動提醒您準備辦理續簽，並在接下來的時間協助您準備續簽申請資料，同時規劃您的整個續簽過程，提高申請通過率。",
        HKIDCard: "核實香港永久居民申請",
        HKIDDesc:"香港居留權保障了您在任何情況下入境香港的權利。您持有有效簽證連續居港不少於7年，入境事務處便會考慮您的申請。香港入境處亦對核實香港永久居民申請有所要求，我們當以多年經驗準備申請，並未完成您的永久居民。", 

        EEEN: "企業家來港投資",
        EEENDesc: "企業家來港投資旨在為持有外國護照的人士，或持有中國護照而居於海外不少於一年，並在海外擁有永久性居民身份的中國公民，希望前來香港投資，包括開辦或參與業務的企業家提供入境申請及安排。申請人應具有良好教育背景，通常指持有有關範疇的學士學位，但在特殊情況下，具備良好的技術資格、經證明的專業能力及／或備有文件證明的有關經驗和成就。申請人須能夠對香港經濟作出重大貢獻，其中會考慮各項因素，包括業務計劃、營業額、財政資源、投資款額、在本地開設的職位數目，以及引進的新科技或技能等。如果申請人想在香港開辦或參與初創業務，亦可提出申請。",
      
      },  

      cn:{
        heroTitle: "香港本地移民计划",
        heroDesc: "探索通往香港居留、工作、投资和新生活的量身定制途径。",
        intro: "了解您的背景和需求是我们第一步也是最重要的一步。通过仔细倾听和专业分析，我们提高您的申请成功率，并为您识别最佳机会。",
        ContentSections: "探索我们的本地移民计划",
        galleryTitle: "香港移民的视觉见解",
        galleryDesc: "通过我们精心策划的见解和体验画廊，探索香港移民的视觉之旅。",
        
        topTalentPassScheme:"高端人才通行证计划",
        topTalentPassSchemeDesc1: "高才通计划旨在吸引世界各地具备丰富工作经验及高学历的高端人才到香港发展，包括：高收入人士（年收入超过250万港币）和 世界顶尖大学之学士学位毕业生 ",
        topTalentPassSchemeDesc2: "。如具备相关条件，申请人需提交申请数据。视乎申请情况，申请人最快可数天至数星期便可以获得入境批准，为目前香港较快可以获得签证及居民身份的计划。",
        topTalentPassSchemeLink: "合资格大学名单",
        

        NCIES_title:"新资本投资者入境计划",
        NCIES_description: "新投资移民计划为政府自二零二四年三月一日重启之入境计划，旨于吸引高净值人士在香港落户，带动香港之经济发展。此计划门坎具吸引力、香港作为资产及财富管理枢纽之法规完善，计划投资组合丰富。",
        
        NCIESRequirements1 : "1. ≥3000万港元净资产（24个月）",
        NCIESRequirements2 : "2. 投资3000万港元（2700万港签证元于许可资产+300万港元于创新/科技的CIES投资组合）",
        NCIESRequirements3 : "3. 完成后授予居留签证元于许可资产+300万港元于创新/科技的CIES投资组合）",
        NCIESRequirements4 : "4. 完成后授予居留签证元。",
        generalEmploymentPolicy:"一般就业政策 (GEP)",
        generalEmploymentPolicyDesc: "持有中华人民共和国护照而居于海外的中国公民，且已在海外拥有永久居民身份，在紧接申请前已在海外居住不少于一年，能保证申请是从海外递交，如申请人具备香港特区所需而又缺乏的特别技能、知识或经验，可以根据一般就业政策申请来港工作。一般就业政策并无配额限制，亦不限行业。申请人需要具备良好的教育背景，通常指持有有关范畴的学士学位，但在特殊情况下，具备良好的技术资格、经证明的专业能力或备有文件证明的有关经验和成就，亦可予接受。同时申请人必须已确实获得聘用而从事与其学历或工作经验有关的工作，且不能轻易觅得本地人担任，薪酬福利与当时香港专才的市场薪酬福利大致相同，方可获考虑发放签证。",
        qualityMigrantAdmissionScheme:"优质人才入境计划 (QMAS)",
        qualityMigrantAdmissionSchemeDesc: "优秀人才入境计划是一项设有配额的移民吸纳计划，旨在吸引高技术人才或优才来港定居，借以提升香港的竞争力。获批准的申请人毋须在来港定居前先获得本地雇主聘任。所有申请人均必须首先符合基本资格的要求，才可根据计划所设两套计分制度，「综合计分制」和「成就计分制」的其中一套获取分数，与其他申请人竞争配额。获批准的申请人可带同配偶及18岁以下未婚及受养的子女来港，惟其必须能自行负担受养人在香港的生活和住宿，不需依赖公共援助。 ",

        ctaDesc: "立即联系我们，了解更多",
        ctaButton: "联系我们",
        ASMTP: "内地上人才及专业人士入境计划 (ASMTP)",
        ASMTPdesc: "旨在吸引内地中国人才和专业人士来香港工作。资格包括持有内地中国护照、拥有香港需求的技能或资格，以及获得香港雇主的工作邀请。该计划提供简化的申请流程，并允许家庭团聚。 ",
        Visas: "其他签证",
        VisaDesc1: "受养人来港居留，主申请人获得合资格的签证后，其受养人需要申请独立的受养人签证来港。我们会协助办理。 ",
        VisaDesc2: "各类延长逗留期限申请: 签证即将到期，您便要申请延期居留。我们会在您的签注到期前主动提醒您准备办理续签，并在接下来的时间协助您准备续签申请材料，同时规划您的整个续签过程，提高申请通过率。 ",
        HKIDCard: "核实香港永久居民申请",
        HKIDDesc:"香港居留权保障了您在任何情况下入境香港的权利。您持有有效签证连续居港不少于7年，入境事务处便会考虑您的申请。香港入境处亦对核实香港永久居民申请有所要求，我们当以多年经验准备申请，务求使您的永久居民批复顺利完成。",
        
        EEEN: "企业家来港投资",
        EEENDesc: "企业家来港投资旨在为持有外国护照的人士，或持有中国护照而居于海外不少于一年，并在海外拥有永久性居民身份的中国公民，希望前来香港投资，包括开办或参与业务的企业家提供入境申请及安排。申请人应具有良好教育背景，通常指持有有关范畴的学士学位，但在特殊情况下，具备良好的技术资格、经证明的专业能力及／或备有文件证明的有关经验和成就。申请人须能够对香港经济作出重大贡献，其中会考虑各项因素，包括业务计划、营业额、财政资源、投资款额、在本地开设的职位数目，以及引进的新科技或技能等。如果申请人想在香港开办或参与初创业务，亦可提出申请。",
      },
    };
  
    const current = content[lang];
  

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#3ac9d9] text-white py-8 shadow-lg">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold"></h1>
          <p className="mt-2 text-white/90"></p>
        </div>
      </header>
      
      {/* Hero Section */} 
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white overflow-hidden">
        <div className="container mx-auto py-4">
          {null}
        </div>

        <div className="absolute inset-0">
          <img
            src="/images/banner/local-immg.jpeg"
            alt="Iconic Hong Kong skyline and Victoria Harbour in daylight"
            className="
              absolute inset-0 h-full w-full
              object-cover
              brightness-[0.6]
              scale-110 md:scale-105
              transition-transform duration-1000
              hover:scale-115
        "/> 
        </div>

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight drop-shadow-lg">
            {current.heroTitle}
          </h1>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto font-light opacity-95">
            {current.heroDesc}
          </p>
        </div>

      </section>

      

      {/* Interactive Schemes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
            {current.ContentSections}
          </h2>

        
          <div className="space-y-3">
              <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
                <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                  <span>{current.NCIES_title}</span>
                  
                  <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
                </summary>
                <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
               
                  <p>{current.NCIES_description}</p>
                  <p>{current.NCIESRequirements1}</p>
                  <p>{current.NCIESRequirements2}</p>
                  <p>{current.NCIESRequirements3}</p>
                  <p>{current.NCIESRequirements4}</p>
                </div>
              </details>

            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.topTalentPassScheme}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.topTalentPassSchemeDesc1}<a href = "https://www.immd.gov.hk/pdf/aggregate_list.pdf" className="text-sm text-blue-500 hover:underline ml-2" target="_blank" rel="noopener noreferrer">
                  {current.topTalentPassSchemeLink}
                </a>{current.topTalentPassSchemeDesc2}</p>
                <p></p>
                
              </div>
            </details>

          
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.generalEmploymentPolicy}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.generalEmploymentPolicyDesc}</p>
              </div>
            </details>

            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.EEEN}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.EEENDesc}</p>
              </div>
            </details>

            {/* Add similar <details> blocks for ASMTP, EEEN, QMAS, and Other Services */}
            {/* Example for QMAS */}
            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.qualityMigrantAdmissionScheme}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.qualityMigrantAdmissionSchemeDesc}</p>
              </div>
            </details>

            {/* Other Services as a final accordion */}
          <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.ASMTP}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.ASMTPdesc}</p>
              </div>
            </details>


            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.Visas}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.VisaDesc1}</p>
                <p>{current.VisaDesc2}</p>
              </div>
            </details>


            <details className="group bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl">
              <summary className="flex justify-between items-center p-8 md:p-10 cursor-pointer text-2xl font-bold text-gray-900 hover:text-teal-700 transition-colors">
                <span>{current.HKIDCard}</span>
                <span className="text-3xl group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-8 md:px-10 pb-10 prose prose-lg text-gray-700">
                <p>{current.HKIDDesc}</p>
              </div>
            </details>



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