"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useMessages } from "next-intl";

export default function ServicesOverviewPage() {
  const messages = useMessages() as any;
  const page = messages.Pages.ServicesOverview;

  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-[linear-gradient(135deg,#08131f_0%,#0f1f34_50%,#0f766e_125%)] text-white">
        <div className="absolute inset-0 bg-[url('/images/banner/services.jpg')] bg-cover bg-center opacity-20" />
        <div className="section-shell relative py-20 sm:py-24 lg:py-28">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              {page.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/90 sm:text-xl">
              {page.hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell py-16 sm:py-20">
        <p className="mx-auto max-w-4xl text-center text-lg leading-8 text-slate-600">
          {page.hero.intro}
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {page.cards.map((card: { title: string; text: string }, index: number) => {
            const links = ["/services/local-company", "/services/compSecretary", "/services/office-service", "/services"];
            const href = links[index] ?? "/services";

            return (
              <Link key={card.title} href={href} className="group block">
                <article className="h-full rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_60px_-45px_rgba(15,23,42,0.35)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_-45px_rgba(15,23,42,0.45)]">
                  <p className="text-lg font-semibold text-slate-900">{card.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{card.text}</p>
                  <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition group-hover:text-teal-600">
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </article>
              </Link>
            );
          })}
        </div>

        <div className="mt-14 rounded-[32px] bg-white px-8 py-10 text-center shadow-[0_18px_70px_-50px_rgba(15,23,42,0.35)]">
          <p className="text-2xl font-semibold text-slate-900">{page.cta.title}</p>
          <p className="mt-4 text-slate-600">{page.cta.text}</p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-cyan-400"
          >
            {page.cta.button}
          </Link>
        </div>
      </section>
    </div>
  );
}
