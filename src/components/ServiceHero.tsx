"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ServiceHeroSibling = {
  label: string;
  href: string;
  active?: boolean;
};

interface ServiceHeroProps {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref?: string;
  index: number;
  total: number;
  siblings: ServiceHeroSibling[];
}

/**
 * Hero for the individual service pages one level below an overview
 * (the 4 Corporate Services pages, the 3 Accountancy & Tax pages).
 *
 * Deliberately a different shape from PageHero (used on Local Immigration
 * and the topic-level pages): light instead of dark, a real undimmed
 * photo in a framed card instead of a photo washed out behind a gradient,
 * a numbered position among siblings instead of a floating glass chip
 * panel, and a plain horizontal tab row instead of an overlaid panel --
 * so a "service detail" page never reads as a re-skin of the immigration
 * hero.
 */
export default function ServiceHero({
  icon: Icon,
  eyebrow,
  title,
  description,
  imageSrc,
  imageAlt,
  ctaLabel,
  ctaHref = "/contact",
  index,
  total,
  siblings,
}: ServiceHeroProps) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="section-shell py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-teal-800">
              <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              {eyebrow}
            </span>

            <h1 className="mt-6 max-w-xl text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-lg text-base leading-7 text-slate-600 sm:text-lg">
              {description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              <Link
                href={ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-[0_18px_40px_-18px_rgba(34,211,238,0.55)] transition hover:bg-cyan-300"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>

              {total > 1 && (
                <div className="flex items-center gap-2 text-sm font-medium text-slate-400">
                  <span className="tabular-nums text-slate-600">{String(index).padStart(2, "0")}</span>
                  <span className="flex gap-1" aria-hidden="true">
                    {Array.from({ length: total }).map((_, i) => (
                      <span
                        key={i}
                        className={`h-1.5 w-4 rounded-full transition-colors ${
                          i + 1 === index ? "bg-teal-600" : "bg-slate-200"
                        }`}
                      />
                    ))}
                  </span>
                  <span className="tabular-nums">{String(total).padStart(2, "0")}</span>
                </div>
              )}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="overflow-hidden rounded-[32px] ring-1 ring-slate-200 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.35)]">
              <div className="relative aspect-[4/3]">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <span className="absolute -bottom-5 -left-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-teal-300 shadow-[0_20px_45px_-20px_rgba(15,23,42,0.6)]">
              <Icon className="h-6 w-6" aria-hidden="true" />
            </span>
          </div>
        </div>

        {siblings.length > 0 && (
          <nav
            aria-label="Related services"
            className="mt-14 flex flex-wrap gap-2 border-t border-slate-100 pt-8"
          >
            {siblings.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  s.active
                    ? "border-teal-600 bg-teal-600 text-white"
                    : "border-slate-200 bg-white text-slate-600 hover:border-teal-300 hover:text-teal-800"
                }`}
              >
                {s.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
