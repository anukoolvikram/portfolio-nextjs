# Portfolio - Next.js

> Personal portfolio built with Next.js, TypeScript and Tailwind CSS.

Live demo: [https://portfolio-nextjs-xi-ten.vercel.app](https://portfolio-nextjs-xi-ten.vercel.app)

---

## Overview

This repository contains a clean, responsive portfolio website built with Next.js (App Router), TypeScript and Tailwind CSS. It includes sections for a hero, about, projects, skills, and a contact form (server-side/email integration). The project is designed to be easily customized and deployed (Vercel recommended).

## Features

* Fully responsive layout (mobile → desktop)
* Built with Next.js (App Router) and TypeScript
* Tailwind CSS for utility-first styling
* Contact form with server-side email sending (configured via environment variables)
* SEO-friendly meta and Open Graph tags
* Easy-to-update content and components

## Tech stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Node.js (for local development)

## Quick start

1. Clone the repo

```bash
git clone https://github.com/anukoolvikram/portfolio-nextjs.git
cd portfolio-nextjs
```

2. Install dependencies

```bash
npm install
# or
pnpm install
# or
yarn
```

3. Copy environment variables

The repository contains a `.env.example` file. Make a copy named `.env` and fill in the required keys.

```bash
cp .env.example .env
# then open .env and add values
```

> **Note:** The contact/email feature requires an API key (for example `RESEND_API_KEY` if you're using Resend, or whichever email provider the project is configured for). If you don't need the email feature while developing, you can leave the variables unset or mock them.

4. Run the development server

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & deploy

Build for production:

```bash
npm run build
npm start
```

Deploy to Vercel (recommended):

1. Push your repository to GitHub.
2. Import the repo in Vercel and set the environment variables in the Vercel dashboard (copy from `.env` / `.env.example`).

## Environment variables

See `.env.example` for the complete list. Typical variables used in this project include (but are not limited to):

* `RESEND_API_KEY` — API key used to send emails from the contact form (only if the project uses Resend)
* `NEXT_PUBLIC_SITE_URL` — public site URL (used in meta tags/Open Graph)
* Any other `NEXT_PUBLIC_*` variables required by external services

Always keep secret keys out of source control and set them in your hosting provider's environment settings.

## Customization

* Update content in the `app` and `components` folders to reflect your name, bio, projects and links.
* Replace images in the `public` folder.
* Update Tailwind configuration in `tailwind.config.js` as needed.

## Troubleshooting

* If you see an error like `Missing API key. Pass it to the constructor` during server actions (email sending), ensure your `.env` is populated and the variable is available to server runtime (not just client-side). In Vercel, set the variable under Project → Settings → Environment Variables.
* If you run into Next.js warnings about `experimental.serverActions`, remove that option from `next.config.js` if you're on a Next.js version that enables Server Actions by default.

## Contributing

PRs are welcome — whether it's a bug fix, better README content, or visual polish. Please open issues/PRs and keep changes focused.

## License

This project is provided as-is. Add a license file if you want to make the license explicit.

---

If you'd like, I can:

* tailor this README to include exact `npm`/`pnpm` scripts from `package.json` and the exact env vars (I can pull them from the repo), or
* generate a short `CONTRIBUTING.md` and `ISSUE_TEMPLATE` for the project.

Tell me which one and I'll add it.
