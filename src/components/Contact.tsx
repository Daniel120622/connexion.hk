// src/components/Contact.tsx 或 src/app/contact/page.tsx
"use client";

import { useState, FormEvent, useEffect } from "react";
import { sendEmailAction } from "@/app/actions/sendEmail"; // 調整路徑，如果在 app/ 資料夾下

export default function Contact() {
  const [lang, setLang] = useState<"en" | "cn" | "zh">("en");

  useEffect(() => {
    const saved = localStorage.getItem("lang") as "en" | "cn" | "zh" | null;
    if (saved) {
      setLang(saved);
    } else {
      const browserLang = navigator.language.toLowerCase();
      const defaultLang = browserLang.includes("zh") ? "cn" : "en";
      localStorage.setItem("lang", defaultLang);
      setLang(defaultLang);
    }
  }, []);

  const content = {
    en: {
      title: "Get in Touch",
      subtitle: "We're here to help with your company formation, banking, and corporate needs in Hong Kong. Reach out today — our team is ready to assist!",
      email: "sales@connexions.hk",
      formTitle: "Send Us a Message",
      formDesc: "Have questions? Fill out the form below and we'll get back to you promptly.",
      nameLabel: "Name",
      namePlaceholder: "Your Name",
      emailLabel: "Email",
      emailPlaceholder: "Your Email",
      messageLabel: "Message",
      messagePlaceholder: "Tell us how we can help...",
      sendButton: "Send Message",
      sending: "Sending...",
      success: "Thank you! Your message has been sent. (Check Resend dashboard if in dev mode)",
      error: "Something went wrong. Please try again.",
    },
    zh: {
      title: "聯絡我們",
      subtitle: "我們樂意協助您在香港的企業設立、銀行開戶及公司相關需求。立即聯絡我們 — 我們的團隊隨時為您服務！",
      email: "sales@connexions.hk",
      formTitle: "發送訊息給我們",
      formDesc: "有任何問題？請填寫下方表單，我們會盡快回覆您。",
      nameLabel: "姓名",
      namePlaceholder: "您的姓名",
      emailLabel: "電郵",
      emailPlaceholder: "您的電郵",
      messageLabel: "訊息",
      messagePlaceholder: "請告訴我們如何幫您...",
      sendButton: "發送訊息",
      sending: "傳送中...",
      success: "感謝您！您的訊息已成功發送。（開發模式請檢查 Resend dashboard）",
      error: "發生錯誤，請稍後再試。",
    },
    cn: {
      title: "联系我们",
      subtitle: "我们乐意协助您在香港的企业设立、银行开户及公司相关需求。立即联系我们 — 我们的团队随时为您服务！",
      email: "sales@connexions.hk",
      formTitle: "发送信息给我们",
      formDesc: "有任何问题？请填写下方表单，我们会尽快回复您。",
      nameLabel: "姓名",
      namePlaceholder: "您的姓名",
      emailLabel: "邮箱",
      emailPlaceholder: "您的邮箱",
      messageLabel: "信息",
      messagePlaceholder: "请告诉我们如何帮您...",
      sendButton: "发送信息",
      sending: "发送中...",
      success: "感谢您！您的信息已成功发送。（开发模式请检查 Resend dashboard）",
      error: "发生错误，请稍后再试。",
    },
  };

  const t = content[lang] || content.en;

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(e.currentTarget);

    const result = await sendEmailAction(formData);

    if (result.success) {
      setStatus("success");
      setMessage(t.success);
      e.currentTarget.reset(); // 清空表單
    } else {
      setStatus("error");
      setMessage(result.error || t.error);
    }
  };

  return (
    <section className="contact bg-gray-100 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 items-stretch min-h-[500px] lg:min-h-[600px] rounded-xl overflow-hidden shadow-2xl">
          
          {/* LEFT: Background Image + Overlay Text */}
          <div 
            className="relative bg-cover bg-center bg-no-repeat flex items-center justify-center text-center lg:text-left p-10 lg:p-16"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=2000')`,
            }}
          >
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 max-w-lg">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                {t.subtitle}
              </p>
              <p className="mt-8 text-gray-300 font-medium">
                {t.email}
              </p>
            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="bg-white p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6 text-center lg:text-left text-gray-800">
              {t.formTitle}
            </h2>
            <p className="text-gray-600 mb-8 text-center lg:text-left">
              {t.formDesc}
            </p>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  {t.messageLabel}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md px-4 py-3 focus:ring-blue-500 focus:border-blue-500"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full text-white py-3 px-6 rounded-md font-medium transition duration-300 ${
                  status === "loading" ? "bg-blue-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {status === "loading" ? t.sending : t.sendButton}
              </button>

              {status === "success" && message && (
                <p className="text-green-600 text-center mt-4 font-medium">{message}</p>
              )}
              {status === "error" && message && (
                <p className="text-red-600 text-center mt-4 font-medium">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}