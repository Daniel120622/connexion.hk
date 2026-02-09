// src/components/Contact.tsx
"use client";

import { useState, FormEvent, useEffect, useRef } from "react";
import { sendEmailAction } from "@/app/actions/sendEmail";

export default function Contact() {
  const [lang, setLang] = useState<"en" | "cn" | "zh">("en");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  // Language detection & persistence
  useEffect(() => {
    const saved = localStorage.getItem("lang") as "en" | "cn" | "zh" | null;
    if (saved) {
      setLang(saved);
      return;
    }

    const browserLang = navigator.language.toLowerCase();
    const defaultLang = browserLang.includes("zh") ? "cn" : "en";
    localStorage.setItem("lang", defaultLang);
    setLang(defaultLang);
  }, []);

  const content = {
    en: {
      title: "Get in Touch",
      subtitle:
        "We're here to help with your company formation, banking, and corporate needs in Hong Kong. Reach out today — our team is ready to assist!",
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
      success: "Thank you! Your message has been sent.",
      error: "Something went wrong. Please try again.",
    },
    zh: {
      title: "聯絡我們",
      subtitle:
        "我們樂意協助您在香港的企業設立、銀行開戶及公司相關需求。立即聯絡我們 — 我們的團隊隨時為您服務！",
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
      success: "感謝您！您的訊息已成功發送。",
      error: "發生錯誤，請稍後再試。",
    },
    cn: {
      title: "联系我们",
      subtitle:
        "我们乐意协助您在香港的企业设立、银行开户及公司相关需求。立即联系我们 — 我们的团队随时为您服务！",
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
      success: "感谢您！您的信息已成功发送。",
      error: "发生错误，请稍后再试。",
    },
  };

  const t = content[lang] || content.en;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!formRef.current) {
      setStatus("error");
      setMessage(t.error);
      return;
    }

    const formData = new FormData(formRef.current);

    try {
      const result = await sendEmailAction(formData);

      console.log("Server action result:", result); // for debugging

      if (result?.success === true) {
        setStatus("success");
        setMessage(result.message || t.success);
        formRef.current.reset(); // safe reset using ref
      } else {
        setStatus("error");
        setMessage(result?.error || t.error);
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setStatus("error");
      setMessage(t.error);
    } finally {
      setStatus((prev) => (prev === "loading" ? "idle" : prev)); // reset loading if stuck
    }
  };

  return (
    <section className="bg-gray-50/70 py-16 md:py-20 lg:py-24">
      <div className="container mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10 xl:gap-12 items-stretch rounded-2xl overflow-hidden shadow-xl bg-white">
          {/* Left side - Hero / Contact Info */}
          <div
            className="relative bg-cover bg-center min-h-[380px] lg:min-h-auto flex items-center justify-center lg:justify-start text-center lg:text-left px-8 py-16 md:p-12 lg:p-16"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=2000')",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/50 to-transparent" />
            <div className="relative z-10 max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-5 md:mb-6">
                {t.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-100 leading-relaxed mb-8">
                {t.subtitle}
              </p>
              <div className="inline-block bg-white/10 backdrop-blur-sm px-5 py-2.5 rounded-full">
                <p className="text-gray-100 font-medium">{t.email}</p>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="bg-white p-8 md:p-10 lg:p-12 xl:p-16 flex flex-col justify-center">
            <h2 className="text-3xl md:text-3.5xl font-bold text-gray-900 mb-5 text-center lg:text-left">
              {t.formTitle}
            </h2>
            <p className="text-gray-600 mb-8 md:mb-10 text-center lg:text-left leading-relaxed">
              {t.formDesc}
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.nameLabel}
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#3ac9d9] focus:ring-2 focus:ring-[#3ac9d9]/30 outline-none transition"
                  placeholder={t.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.emailLabel}
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#3ac9d9] focus:ring-2 focus:ring-[#3ac9d9]/30 outline-none transition"
                  placeholder={t.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                  {t.messageLabel}
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={5}
                  required
                  className="block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-[#3ac9d9] focus:ring-2 focus:ring-[#3ac9d9]/30 outline-none transition resize-y min-h-[120px]"
                  placeholder={t.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-3.5 px-6 rounded-lg font-medium text-white transition-all duration-200 shadow-sm
                  ${status === "loading"
                    ? "bg-[#3ac9d9]/70 cursor-not-allowed"
                    : "bg-[#3ac9d9] hover:bg-[#2ab8c8] active:bg-[#1fa8b8]"
                  }`}
              >
                {status === "loading" ? t.sending : t.sendButton}
              </button>

              {status === "success" && (
                <p className="text-green-600 text-center font-medium mt-4">{message}</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-center font-medium mt-4">{message}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}