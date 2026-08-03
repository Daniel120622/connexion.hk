"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      key: "hkLimitedCompany",
      image: "/images/hero/hk.jpg"
    },
    {
      key: "bviOffshoreCompany",
      image: "/images/hero/bvi.jpg"
    },
    {
      key: "companySecretary",
      image: "/images/hero/secret.jpg"
    },
    {
      key: "accountingServices",
      image: "/images/hero/acc.jpg"
    },
    {
      key: "taxConsulting",
      image: "/images/hero/tax.jpg"
    },
    {
      key: "businessAdvisory",
      image: "/images/hero/adv.jpg"
    }
  ] as const;

  const currentSlide = slides[currentIndex];
  const slideTitle = t(`services.${currentSlide.key}.title`);
  const slideDescription = t(`services.${currentSlide.key}.description`);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 7200);

    return () => window.clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setIsPaused(true);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
    <header className="relative isolate overflow-hidden bg-[linear-gradient(135deg,#07111f_0%,#0d1b30_42%,#0f766e_125%)] text-white">
      <div className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlide.image})` }}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 0.18, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </AnimatePresence>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(255,255,255,0.07),transparent_24%),linear-gradient(180deg,rgba(2,6,23,0.32),rgba(2,6,23,0.78))]" />
      </div>

      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-14">
          <motion.div
            className="rounded-[34px] border border-white/15 bg-white/10 p-8 shadow-[0_30px_90px_-48px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100/90">
              {t("eyebrow")}
            </span>

            <div className="mt-6 space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="block text-white/95">{t("companyName")}</span>
                <span className="mt-4 block text-cyan-300">{t("companySlogan")}</span>
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-100/90 sm:text-xl">
                {t("heroIntro")}
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_40px_-22px_rgba(34,211,238,0.6)] transition hover:bg-cyan-300"
              >
                {t("button1")}
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-cyan-200/70 bg-white/5 px-8 py-4 text-base font-semibold text-cyan-100 backdrop-blur transition hover:bg-white/12 hover:text-white"
              >
                {t("button2")}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.12 }}
          >
            <div className="overflow-hidden rounded-[32px] border border-white/15 bg-white/10 p-4 shadow-[0_30px_90px_-48px_rgba(0,0,0,0.75)] backdrop-blur-xl">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[26px] bg-slate-950/40">
                <img
                  src={currentSlide.image}
                  alt={slideTitle}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,23,0.05),rgba(2,6,23,0.78))]" />

                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/90 backdrop-blur">
                    {t("featuredLabel")}
                  </span>
                  <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-cyan-100/90 backdrop-blur">
                    {t("focusLabel")}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-cyan-100/75">
                    {slideTitle}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold leading-tight text-white sm:text-4xl">
                    {slideTitle}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-7 text-slate-200/90">
                    {slideDescription}
                  </p>
                </div>
              </div>
            </div>


          </motion.div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white shadow-[0_14px_34px_-22px_rgba(0,0,0,0.8)] backdrop-blur transition hover:bg-white/18"
        aria-label="Previous service"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/15 bg-white/10 p-3 text-white shadow-[0_14px_34px_-22px_rgba(0,0,0,0.8)] backdrop-blur transition hover:bg-white/18"
        aria-label="Next service"
      >
        <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </header>
  );
}
