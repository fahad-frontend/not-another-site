# notanother.site

Design + development studio one-pager. Monochrome, boxy, animated.

Built with Next.js 16 (App Router), Tailwind v4, [`motion`](https://motion.dev) and [Resend](https://resend.com).

## Stack

- **Framework**: Next.js 16 (Turbopack)
- **Styling**: Tailwind v4
- **Animation**: `motion/react`
- **Fonts**: Space Grotesk (display), Geist Sans (body), Geist Mono (labels)
- **Contact**: Resend via Next.js Server Action

## Getting started

```bash
npm install
cp .env.example .env.local
# fill in RESEND_API_KEY + CONTACT_TO_EMAIL
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The contact form falls back to logging submissions to the console when `RESEND_API_KEY` / `CONTACT_TO_EMAIL` are unset, so you can develop without a Resend account.

## Project structure

```
app/
  layout.js              root layout, fonts, metadata, Nav
  page.js                composes all sections
  globals.css            monochrome tokens, type scale
  actions/contact.js     Server Action (Resend)
  components/            shared primitives (Nav, Section, Heading, CTABar, ...)
  sections/              Hero, Lead, WhatWeDo, Pricing, WhyUs, FAQs, Contact
```

## Scripts

- `npm run dev` — Turbopack dev server
- `npm run build` — production build
- `npm run start` — serve the build
- `npm run lint` — ESLint
