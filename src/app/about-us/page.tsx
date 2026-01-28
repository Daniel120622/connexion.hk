// components/about-us.tsx
import React from 'react';

const AboutUs: React.FC = () => {
  return (

    <div className="min-h-screen bg-gray-50">
        
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 bg-gradient-to-r from-blue-900/70 to-teal-900/60 text-white">
        <div className="container mx-auto py-8">
            {null}
        </div>
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/33394570/pexels-photo-33394570.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Hong Kong Victoria Harbour skyline at dusk"
            className="w-full h-full object-cover brightness-[0.6]"
          />
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Welcome to Connexions
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light opacity-95">
            Your trusted partner for immigration, residency, and business success in Hong Kong and beyond.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <div className="prose prose-lg max-w-none text-center">
            <p className="text-xl text-gray-700 leading-relaxed">
              Connexions is an experienced professional services group with decades of dedicated service to hundreds of domestic and international clients. We deeply value the trust placed in us by our clients and are committed to delivering exceptional service quality. Built on mutual trust, understanding, and strong recommendations from our clients, Connexions is your reliable long-term partner in Hong Kong and beyond.
            </p>
          </div>

          {/* Trust / Handshake Image */}
        </div>
      </section>

      {/* Our Proficiency */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Our Proficiency
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://framerusercontent.com/images/BLcJXeIS2Hy3dyQrluThkwCo5BI.png?width=1536&height=1024"
                alt="Professional team collaboration and expertise in office setting"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team consists of seasoned accountants and immigration consultants who are well-versed in immigration laws, policies, and the latest global trends.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                With over 10 years of experience, we have successfully served more than a thousand clients from Hong Kong and around the world, helping them achieve their residency and business goals with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* All-Rounded Services */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            All-Rounded Services
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 order-2 md:order-1">
              <p className="text-lg text-gray-700 leading-relaxed">
                We offer comprehensive immigration and visa solutions tailored to your personal and family background, assisting with applications for Hong Kong or overseas residency status.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Beyond immigration, we provide full-spectrum support for managing your Hong Kong or overseas companies — including business account setup, financial reporting, corporate and personal taxation in Hong Kong, and ongoing compliance. Services are fully customized to your company’s circumstances, operational scope, and profitability requirements.
              </p>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-xl order-1 md:order-2">
              <img
                src="https://universalaccountingschool.com/wp-content/uploads/2025/05/virtual-bookkeeping-1.png"
                alt="Accountant reviewing financial documents for business compliance"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Peace of Mind Follow-up */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-8 max-w-5xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
            Peace of Mind Follow-up
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://liveandletsfly.com/wp-content/uploads/2021/08/Sao-Paulo-Trip-Report.jpeg"
                alt="Happy family enjoying new life and settlement success (adaptable to Hong Kong context)"
                className="w-full h-auto object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                We respect every client’s individual needs and provide attentive, end-to-end support — including reception services, in-person field visits, thorough document review, and proactive follow-up on application progress.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As your trusted life partner in Hong Kong, we stand by you through every challenge. Should any issues arise during your life or business journey here, we will do our utmost to provide effective solutions.
              </p>
              <p className="text-xl font-semibold text-teal-700">
                Our goal: Help you save time and effort while building a happy, comfortable, and fulfilling life in Hong Kong.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Connexions — Your Stable Partner for Life and Success in Hong Kong
          </h2>
          <p className="text-xl md:text-2xl max-w-4xl mx-auto mb-10">
            We look forward to accompanying you on your journey.
          </p>
          <p className="text-lg opacity-90">
            Contact us today to start building your future with confidence.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;