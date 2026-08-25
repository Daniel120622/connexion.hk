# Connexions HK

Marketing site for Connexions HK, built with Next.js (App Router), Tailwind CSS v4, and next-intl (English / Traditional Chinese / Simplified Chinese).

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in RESEND_API_KEY (see below)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment variables

The contact form (`/contact` and the homepage contact section) sends mail through [Resend](https://resend.com). See `.env.example` for the full list. At minimum you need:

- `RESEND_API_KEY` -- from the Resend dashboard.
- `CONTACT_FROM_EMAIL` -- **must be an address on a domain verified in Resend.** The default sandbox sender (`onboarding@resend.dev`) cannot reliably deliver to a real inbox in production; see the comments in `.env.example` for how to verify a domain.
- `CONTACT_TO_EMAIL` -- where submissions are delivered (defaults to `sales@connexions.hk`).

## Project structure

- `src/app/` -- routes (App Router).
- `src/components/` -- shared UI used on the homepage (`Header`, `Footer`, `Hero`, `AboutUs`, `Contact`).
- `src/context/LanguageContext.tsx` -- the language switcher's client-side state (cookie-backed).
- `src/i18n/` + `src/messages/*.json` -- next-intl setup and translation strings for `Header`, `Footer`, `Hero`, and the homepage sections.

**Note on translations:** most inner pages (About Us, Contact, the immigration pages, and the services sub-pages) currently keep their own hardcoded `{ en, zh, cn }` content object inline rather than using `src/messages/*.json`. This works but means a copy change has to be made in the right file rather than in one place, and any per-locale content gap (like an empty paragraph) won't be caught automatically. Migrating those pages onto the shared `next-intl` messages files is a worthwhile follow-up.

## Deploy

Deploys to [Vercel](https://vercel.com); set the environment variables above in the project's Vercel settings.
