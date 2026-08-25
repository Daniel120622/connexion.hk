"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type PageHeroChip = {
  label: string;
  href: string;
  active?: boolean;
};

export type PageHeroVariant = "immigration" | "about" | "wealth" | "accountancy" | "contact";

// Every topic page shares the same dark-navy base (see Hero.tsx) so the
// site's chrome stays consistent; only the accent glow in the far corner
// of the gradient changes per topic, giving each page a distinct identity
// without turning the palette into a rainbow.
const VARIANT_GRADIENT: Record<PageHeroVariant, string> = {
  immigration: "bg-[linear-gradient(135deg,#07111f_0%,#0d1b30_45%,#1d4ed8_140%)]",
  about: "bg-[linear-gradient(135deg,#07111f_0%,#0d1b30_45%,#4f46e5_140%)]",
  wealth: "bg-[linear-gradient(135deg,#07111f_0%,#0d1b30_45%,#b45309_140%)]",
  accountancy: "bg-[linear-gradient(135deg,#07111f_0%,#0d1b30_42%,#0f766e_125%)]",
  contact: "bg-[linear-gradient(135deg,#07111f_0%,#0d1b30_45%,#0891b2_140%)]",
};

const VARIANT_ICON_RING: Record<PageHeroVariant, string> = {
  immigration: "border-sky-200/60 bg-sky-400/15 text-sky-100",
  about: "border-indigo-200/60 bg-indigo-400/15 text-indigo-100",
  wealth: "border-amber-200/60 bg-amber-400/15 text-amber-100",
  accountancy: "border-teal-200/60 bg-teal-400/15 text-teal-100",
  contact: "border-cyan-200/60 bg-cyan-400/15 text-cyan-100",
};

const VARIANT_CHIP_ACTIVE: Record<PageHeroVariant, string> = {
  immigration: "border-sky-300/70 bg-sky-400/20 text-white",
  about: "border-indigo-300/70 bg-indigo-400/20 text-white",
  wealth: "border-amber-300/70 bg-amber-400/20 text-white",
  accountancy: "border-teal-300/70 bg-teal-400/20 text-white",
  contact: "border-cyan-300/70 bg-cyan-400/20 text-white",
};

interface PageHeroProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  variant: PageHeroVariant;
  chips: PageHeroChip[];
  ctaLabel?: string;
  ctaHref?: string;
}

/**
 * Shared hero for topic-level pages (Local Immigration, About Us, Wealth
 * Inheritance, Accountancy & Tax overview, Contact Us).
 *
 * Replaces the old pattern (full-brightness photo + centered white text)
 * with a split layout: heading/intro/CTA on the left, a glass panel of
 * chips on the right that doubles as an in-page or cross-page index. The
 * background photo is kept only as low-opacity atmosphere behind a dark
 * gradient, so the structured panel -- not the stock photo -- carries the
 * page.
 */
export default function PageHero({
  icon: Icon,
  title,
  description,
  imageSrc,
  imageAlt,
  variant,
  chips,
  ctaLabel,
  ctaHref = "/contact",
}: PageHeroProps) {
  return (
    <header className={`relative isolate overflow-hidden text-white ${VARIANT_GRADIENT[variant]}`}>
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.14]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_30%),linear-gradient(180deg,rgba(2,6,23,0.3),rgba(2,6,23,0.85))]" />
      </div>

      <div className="section-shell relative z-10 py-20 sm:py-24 lg:py-28">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <div>
            <span
              className={`inline-flex items-center justify-center rounded-full border p-3 ${VARIANT_ICON_RING[variant]}`}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>

            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100/90 sm:text-xl">
              {description}
            </p>

            {ctaLabel && (
              <Link
                href={ctaHref}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_40px_-18px_rgba(37,99,235,0.65)] transition hover:bg-blue-500"
              >
                {ctaLabel}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            )}
          </div>

          {chips.length > 0 && (
            <div className="rounded-[28px] border border-white/15 bg-white/10 p-6 shadow-[0_30px_90px_-48px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:p-8">
              <div className="flex flex-wrap gap-2.5">
                {chips.map((chip) => (
                  <Link
                    key={chip.href}
                    href={chip.href}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                      chip.active
                        ? VARIANT_CHIP_ACTIVE[variant]
                        : "border-white/15 bg-white/5 text-slate-100/90 hover:border-white/30 hover:bg-white/10"
                    }`}
                  >
                    {chip.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
