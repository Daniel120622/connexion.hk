"use client";

import { useTranslations } from "next-intl";

export default function AboutUs() {
  const t = useTranslations("About");

  return (
    <section className="relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(14,165,164,0.08),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.05),transparent_30%)]" />

      <div className="section-shell">
        <div className="grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="space-y-6">
            <span className="section-eyebrow">{t("eyebrow")}</span>
            <h2 className="section-title max-w-3xl">{t("title")}</h2>
            <p className="section-copy max-w-3xl">{t("description")}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_-42px_rgba(15,23,42,0.5)] sm:col-span-2">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-teal-700">
                {t("advisoryLabel")}
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">{t("advisoryText")}</p>
            </div>

            <article className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-46px_rgba(15,23,42,0.5)]">
              <p className="text-sm font-semibold text-slate-900">{t("cards.one.title")}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{t("cards.one.text")}</p>
            </article>

            <article className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-46px_rgba(15,23,42,0.5)]">
              <p className="text-sm font-semibold text-slate-900">{t("cards.two.title")}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{t("cards.two.text")}</p>
            </article>

            <article className="rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_20px_60px_-46px_rgba(15,23,42,0.5)] sm:col-span-2">
              <p className="text-sm font-semibold text-slate-900">{t("cards.three.title")}</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{t("cards.three.text")}</p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
