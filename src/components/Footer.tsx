"use client";

import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Phone, Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="border-t border-slate-200/80 bg-[linear-gradient(180deg,#07111f_0%,#020617_100%)] text-slate-300">
      <div className="section-shell py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr_0.95fr_1fr]">
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/connexions-hk.png"
                alt="Connexions HK Logo"
                width={340}
                height={382}
                className="h-14 w-14 object-contain"
              />
            </Link>
            <p className="max-w-md text-sm leading-7 text-slate-400">{t("description")}</p>
            <p className="max-w-md text-xs leading-6 text-slate-500">{t("license")}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85">
              {t("quickLinks")}
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><Link href="/about-us" className="transition hover:text-cyan-100">{t("aboutUs")}</Link></li>
              <li><Link href="/local-immigration" className="transition hover:text-cyan-100">{t("HongKongImmigration")}</Link></li>
              <li><Link href="/corporate-services" className="transition hover:text-cyan-100">{t("services")}</Link></li>
              <li><Link href="/accountancy-tax" className="transition hover:text-cyan-100">{t("services2")}</Link></li>
              <li><Link href="/wealth-inheritance" className="transition hover:text-cyan-100">{t("wealthInheritance")}</Link></li>
              <li><Link href="/contact" className="transition hover:text-cyan-100">{t("contactUs")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85">
              {t("corporateService")}
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><Link href="/corporate-services/local-company" className="transition hover:text-cyan-100">{t("localCompany")}</Link></li>
              <li><Link href="/corporate-services/company-secretary" className="transition hover:text-cyan-100">{t("companySecretary")}</Link></li>
              <li><Link href="/corporate-services/office-service" className="transition hover:text-cyan-100">{t("officeService")}</Link></li>
            </ul>

            <h3 className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-white/85">
              {t("otherService")}
            </h3>
            <ul className="mt-6 space-y-3 text-sm text-slate-400">
              <li><Link href="/accountancy-tax/accounting" className="transition hover:text-cyan-100">{t("accountingService")}</Link></li>
              <li><Link href="/accountancy-tax/business-advisory" className="transition hover:text-cyan-100">{t("businessAdvisory")}</Link></li>
              <li><Link href="/accountancy-tax/tax" className="transition hover:text-cyan-100">{t("taxConsulting")}</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-white/85">
              {t("contactTitle")}
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <Send className="mt-1 h-4 w-4 shrink-0 text-cyan-200" />
                <span>{t("address")}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-cyan-200" />
                <span>{t("phone")}</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="h-4 w-4 shrink-0 text-cyan-200" />
                <span>{t("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-xs text-slate-500">
          {t("copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
}
