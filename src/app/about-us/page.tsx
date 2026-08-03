"use client";

import Link from "next/link";
import { useMessages } from "next-intl";

export default function AboutUsPage() {
  const messages = useMessages() as any;
  const page = messages.Pages.AboutUs;

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#08131f_0%,#0f1f34_48%,#0f766e_120%)] text-white">
        <div className="absolute inset-0 bg-[url('/images/banner/services.jpg')] bg-cover bg-center opacity-20" />
        <div className="section-shell relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-100/80">
              {page.hero.eyebrow}
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/90 sm:text-xl">
              {page.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-[30px] border border-slate-200 bg-white p-8 shadow-[0_18px_70px_-45px_rgba(15,23,42,0.35)]">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-teal-700">
              {page.story.title}
            </p>
            <p className="mt-5 text-lg leading-8 text-slate-600">{page.story.body}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {page.cards.map((card: { title: string; text: string }) => (
              <div
                key={card.title}
                className="rounded-[26px] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_-50px_rgba(15,23,42,0.3)]"
              >
                <p className="text-base font-semibold text-slate-900">{card.title}</p>
                <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-16 sm:pb-20">
        <div className="rounded-[32px] bg-[linear-gradient(135deg,#0f172a_0%,#0f766e_125%)] px-8 py-10 text-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.7)] sm:px-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-100/70">
              {page.closing.title}
            </p>
            <p className="mt-4 text-base leading-8 text-slate-100/90">{page.closing.text}</p>
          </div>

          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              {page.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
