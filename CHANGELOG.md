# Changelog

All notable changes to this project are documented in this file. Format is
loosely based on [Keep a Changelog](https://keepachangelog.com/).

## [Unreleased] - 2026-08-25

A full audit-driven pass over the site: security hardening, dead code
removal, a route/URL cleanup with SEO-safe redirects, and a two-round
visual redesign of the Hong Kong Immigration, Corporate Services, About
Us, Wealth Inheritance, Accountancy & Tax, and Contact pages. No copy or
translated text was changed anywhere in the process — only layout,
components, styling, and internal links.

### Added

- `PageHero` component: shared split hero (heading/CTA + glass credibility
  panel) used on the topic-level pages, each with its own accent color:
  Local Immigration (blue), About Us (indigo), Wealth Inheritance (amber),
  Accountancy & Tax overview (teal), Contact Us (cyan).
- `ServiceHero` component: a deliberately different, lighter hero for the
  individual service pages one level below an overview (real un-dimmed
  photo, numbered position among sibling pages, horizontal tab nav)
  — used across Corporate Services (BVI Company, Company Secretary,
  HK Company, Registered Office) and Accountancy & Tax (Accounting,
  Business Advisory, Tax) so those pages read as a distinct family from
  the topic-level pages instead of a re-skin of the immigration hero.
- `SchemeAccordion` component: the 8 Hong Kong immigration schemes now
  show an icon, title, and an always-visible truncated preview before
  expanding to the full detail — the preview is the existing description
  text truncated with CSS, not new summary copy.
- `src/lib/corporateServicesNav.ts` / `accountancyServicesNav.ts`: shared,
  verbatim cross-navigation data for the two service groups, sourced from
  each page's own existing heading text so no new UI copy was introduced.
- `Header.bviCompany` translation key (en/zh/cn) — BVI Company was
  missing from the Corporate Services dropdown; the label reuses the
  exact existing string from the Services Overview card.
- 301 redirects in `next.config.ts` for every renamed route, preserving
  SEO on the old URLs.
- `.env.example` and a rewritten `README.md` documenting setup and the
  contact-form environment variables.

### Changed

- Route/URL cleanup to consistent kebab-case: `/services` →
  `/corporate-services` (with `BVI-company` → `bvi-company`,
  `compSecretary` → `company-secretary`), `/services2` →
  `/accountancy-tax` (with `businessAdv` → `business-advisory`,
  `Tax-Consulting` → `tax`), `/oversea-immigration` →
  `/overseas-immigration`.
- Local Immigration, About Us, Wealth Inheritance, Accountancy & Tax
  overview, and Contact Us now use `PageHero`; Corporate Services'
  4 sub-pages and Accountancy & Tax's 3 sub-pages now use `ServiceHero`.
  About Us, Wealth Inheritance, and Contact Us also gained in-page anchor
  links from their hero chips to their existing sections.
- Hero CTA buttons across the redesigned pages are now solid blue with
  more generous padding.
- `/api/send-email`: added input validation, a honeypot field, basic rate
  limiting, HTML-escaping of user input, real success/failure reporting,
  and moved secrets to environment variables.
- Most `<img>`/CSS background-image usages converted to `next/image` for
  proper optimization (banners, logos, card thumbnails, content images).
- `Header.tsx` / `Footer.tsx` / `Hero.tsx`: logo and hero now use
  `next/image`; removed inline styles; added an Escape-key handler and
  click-outside handler for the nav dropdowns; added a 5th Corporate
  Services dropdown entry (BVI Company); internal links updated to the
  new route names.
- `corporate-services/page.tsx`: fixed the BVI Company card, which
  previously fell back to a dead-end self-link instead of
  `/corporate-services/bvi-company`.
- `globals.css`: moved the base element resets (`a`, `img`,
  `button/input/textarea/select`, `h1`-`h4`) inside `@layer base`. They
  were previously unlayered, which — per CSS cascade-layer rules —
  always wins over layered Tailwind utilities regardless of specificity.
  This was the root cause of the "Corporate Services" / "Accountancy &
  Tax" header dropdown buttons rendering larger than the surrounding nav
  links (their `text-[13px]` utility was being silently overridden by an
  unlayered `button { font: inherit; }` reset); also deduplicated
  Tailwind directives and removed stray `!important` usage.
- `SchemeAccordion`: the truncated preview text is now hidden once a
  scheme is expanded, instead of staying visible above the full detail —
  fixes the description being shown twice / feeling crowded.
- `layout.tsx`: `<html lang>` now maps to the active locale.
- zh/cn translations filled in on `about-us/page.tsx` where missing;
  garbled `overseas-immigration` zh text fixed.
- `LanguageContext.tsx`: removed a dead `localStorage` write.

### Removed

- Unused `tsparticles` dependency and other unused npm packages.
- Dead/unreferenced files (`goodherodesign.tsx`, `src/components/Services.tsx`,
  `src/components/archived/*`, `src/app/actions/sendEmail.ts`) moved to
  `_to_delete/` (excluded from builds/lint via `.gitignore`,
  `tsconfig.json`, `eslint.config.mjs`) pending manual deletion.
- Broken import and stray markup on the immigration overseas page.
- Duplicate background-image layer on the homepage hero.
