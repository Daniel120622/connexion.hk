"use client";

import { FormEvent, useRef, useState } from "react";
import { useTranslations } from "next-intl";

export default function Contact() {
  const t = useTranslations("Contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    if (!formRef.current) {
      setStatus("error");
      setMessage(t("error"));
      return;
    }

    const formData = new FormData(formRef.current);

    try {
      const payload = Object.fromEntries(formData.entries());
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const result = await res.json();

      if (result?.success === true) {
        setStatus("success");
        setMessage(result.message || t("success"));
        formRef.current.reset();
      } else {
        setStatus("error");
        setMessage(result?.error || t("error"));
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
      setMessage(t("error"));
    } finally {
      setStatus((current) => (current === "loading" ? "idle" : current));
    }
  };

  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_28px_90px_-55px_rgba(15,23,42,0.7)] lg:grid-cols-[0.95fr_1.05fr]">
          <aside className="relative min-h-[360px] overflow-hidden bg-[linear-gradient(160deg,#07111f_0%,#0f1f38_58%,#0f766e_130%)] px-8 py-10 text-white sm:px-10 sm:py-12 lg:px-12 lg:py-14">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(45,212,191,0.2),transparent_25%),linear-gradient(180deg,rgba(2,6,23,0.12),rgba(2,6,23,0.68))]" />

            <div className="relative z-10 flex h-full max-w-xl flex-col justify-between">
              <div className="space-y-6">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-100/90 backdrop-blur">
                  {t("eyebrow")}
                </span>
                <div className="space-y-4">
                  <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                    {t("title")}
                  </h1>
                  <p className="max-w-xl text-base leading-8 text-slate-200/90 sm:text-lg">
                    {t("subtitle")}
                  </p>
                </div>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/12 bg-white/10 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/70">
                    Email
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">{t("email")}</p>
                </div>
                <div className="rounded-3xl border border-white/12 bg-white/10 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/70">
                    Phone
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">{t("phone")}</p>
                </div>
                <div className="rounded-3xl border border-white/12 bg-white/10 p-5 backdrop-blur sm:col-span-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.26em] text-cyan-100/70">
                    Office
                  </p>
                  <p className="mt-3 text-base leading-7 text-slate-100/90">{t("office")}</p>
                  <p className="mt-3 text-sm text-cyan-100/80">{t("response")}</p>
                </div>
              </div>
            </div>
          </aside>

          <div className="bg-[linear-gradient(180deg,#ffffff_0%,#fbfdff_100%)] p-8 sm:p-10 lg:p-12 xl:p-14">
            <div className="max-w-2xl">
              <span className="section-eyebrow">{t("formTitle")}</span>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
                {t("formDesc")}
              </p>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                      {t("nameLabel")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required
                      className="block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                      placeholder={t("namePlaceholder")}
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                      {t("emailLabel")}
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required
                      className="block w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                      placeholder={t("emailPlaceholder")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                    {t("messageLabel")}
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    required
                    className="block min-h-[160px] w-full resize-y rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/15"
                    placeholder={t("messagePlaceholder")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`inline-flex w-full items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold text-white shadow-[0_18px_40px_-22px_rgba(15,118,110,0.7)] transition ${
                    status === "loading"
                      ? "cursor-not-allowed bg-teal-500/70"
                      : "bg-slate-900 hover:bg-teal-700"
                  }`}
                >
                  {status === "loading" ? t("sending") : t("sendButton")}
                </button>

                {status === "success" && (
                  <p className="text-center text-sm font-medium text-emerald-600">{message}</p>
                )}
                {status === "error" && (
                  <p className="text-center text-sm font-medium text-rose-600">{message}</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
