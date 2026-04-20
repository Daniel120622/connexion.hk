// app/contact/page.tsx
"use client";


import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Mail, Phone, Printer, MapPin } from 'lucide-react';


export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const { lang } = useLanguage();

  const content = {
    en: {
      title: "Contact Us",
      subtitle: "We'd love to hear from you",
      getInTouch: "Get in Touch",
      getInTouchDescription: "Have questions or need assistance? Reach out to us using the contact information below or send us a message.",
      contactInfoTitle: "Contact Information",
      emailLabel: "Email",
      phoneLabel: "Phone",
      faxLabel: "Fax",
      addressLabel: "Address",
      address:"Room 902A, 9/F, Capital Centre, 151 Gloucester Road, Wan Chai, Hong Kong",
      sendMessageTitle: "Send a Message",
      namePlaceholder: "Your Name",
      emailPlaceholder: "Your Email",
      messagePlaceholder: "Your Message",
      sendButtonLabel: "Send Message",
      success: "Thank you! Your message has been sent.",
      error: "Something went wrong. Please try again.",     
    },
    zh: {
      title: "聯絡我們",
      subtitle: "我們期待您的來信",
      getInTouch: "聯絡我們",
      getInTouchDescription: "如有任何疑問或需要協助，請使用以下聯絡資訊與我們聯繫，或給我們留言。",
      contactInfoTitle: "聯絡資訊",
      emailLabel: "電郵",
      phoneLabel: "電話",
      faxLabel: "傳真",
      addressLabel: "地址",
      address:"香港灣仔告士打道151號資本中心9樓902A室",
      sendMessageTitle: "發送訊息",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的電郵",
      messagePlaceholder: "您的訊息",
      sendButtonLabel: "發送訊息",
      success: "感謝您！您的訊息已成功發送。",
      error: "發生錯誤，請稍後再試。",
    },
    cn:{
      title: "联系我们",
      subtitle: "我们期待您的来信",
      getInTouch: "联系我们",
      getInTouchDescription: "如有任何疑问或需要协助，请使用以下联络资讯与我们联系，或给我们留言。",
      contactInfoTitle: "联络资讯",
      emailLabel: "电邮",
      phoneLabel: "电话",
      faxLabel: "传真",
      addressLabel: "地址",
      address:"香港湾仔告士打道151号资本中心9楼902A室",
      sendMessageTitle: "发送讯息",
      namePlaceholder: "您的姓名",
      emailPlaceholder: "您的电邮",
      messagePlaceholder: "您的讯息",
      sendButtonLabel: "发送讯息",
      success: "感谢您！您的讯息已成功发送。",
      error: "发生错误，请稍后再试。",
    }

  };

  const current = content[lang];
  
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setResponseMessage("");
    // Capture the form element synchronously to avoid React event pooling
    const formEl = e.currentTarget as HTMLFormElement;
    const formData = new FormData(formEl);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();

      console.log("API result:", result);

      if (result?.success === true) {
        setStatus("success");
        setResponseMessage(current.success);
        // Use the captured form element to reset (safe after await)
        try { formEl.reset(); } catch (err) { /* ignore if already unmounted */ }
      } else {
        setStatus("error");
        setResponseMessage(result?.error || current.error);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setResponseMessage(current.error);
    } finally {
      setStatus((prev) => (prev === "loading" ? "idle" : prev));
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}

      <main className="container mx-auto px-4 py-10 max-w-7xl">
        {/* Contact Info + Form + Map Grid – SWAPPED ORDER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
                    {/* Right Column: Contact Info + Form */}
          <div className="space-y-8 order-1 lg:order-">
            <section>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">{current.getInTouch}</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {current.getInTouchDescription}
              </p>

              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-5 text-gray-800">{current.contactInfoTitle}</h3>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-[#3ac9d9] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{current.emailLabel}:</strong>{' '}
                      <a href="mailto:sales@connexions.hk" className="hover:text-[#3ac9d9]">
                        sales@connexions.hk
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-[#3ac9d9] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{current.phoneLabel}:</strong>{' '}
                      <a href="tel:+85221112425" className="hover:text-[#3ac9d9]">
                        +852 2111 2425
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Printer className="h-5 w-5 text-[#3ac9d9] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{current.faxLabel}:</strong>{' '}
                      <span>+852 3585 5887</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#3ac9d9] mt-0.5 flex-shrink-0" />
                    <div>
                      <strong>{current.addressLabel}:</strong>
                      <div className="mt-0.5 leading-relaxed">
                        {current.address}
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </section>

            
            <section className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <h3 className="text-xl font-semibold mb-5 text-gray-800">
                {current.sendMessageTitle}
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder={current.namePlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ac9d9] focus:border-[#3ac9d9] transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder={current.emailPlaceholder}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ac9d9] focus:border-[#3ac9d9] transition"
                />
                <textarea
                  name="message"
                  placeholder={current.messagePlaceholder}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3ac9d9] focus:border-[#3ac9d9] transition resize-none"
                ></textarea>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full bg-[#3ac9d9] text-white font-semibold py-3.5 rounded-lg hover:bg-[#32b0c0] transition shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  {status === "loading"
                    ? current.sendButtonLabel === "Send Message"
                      ? "Sending..."
                      : "發送中..."
                    : current.sendButtonLabel}
                </button>

                {responseMessage && (
                  <p
                    className={`text-center mt-2 ${
                      status === "success" ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {responseMessage}
                  </p>
                )}
              </form>
            </section>
          </div>
          
          
          
          
          {/* Left Column: Google Map */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 h-full min-h-[500px] lg:min-h-0 order-2 lg:order-1">
            <div className="bg-gray-800 text-white px-5 py-3 font-medium">
              {current.addressLabel}
            </div>
            <div className="w-full h-[450px] lg:h-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3689.693149531149!2d114.1761985!3d22.2779413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3404005a2f330df5%3A0xc826b87425d700a5!2z6LOH5pys5Lit5b-D!5e0!3m2!1sen!2shk!4v1681234567890!5m2!1sen!2shk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Connexions HK - Capital Centre, Wan Chai"
              ></iframe>
            </div>
          </div>


        </div>
      </main>
    </div>
  );
}