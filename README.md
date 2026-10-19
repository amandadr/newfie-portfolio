# Newfie — Image-Rich Next.js Theme

**Newfie** is an in-progress, image-forward website theme built with Next.js, React, and TypeScript.

The project originally began as a potential new foundation for [mannyroy.com](https://www.mannyroy.com). That site ultimately moved in a different direction, but the work here had enough value to continue independently as an experimental theme for highly visual portfolio, editorial, and creative websites.

> **Status:** In active development. This repository is an evolving theme and design experiment, not a production-ready package.

## About the Project

Newfie explores how image-heavy websites can still feel structured, responsive, performant, and usable.

The theme combines large visual elements with reusable page and interface patterns for content such as:

- Project and portfolio showcases
- Image galleries
- Editorial and blog content
- About and profile pages
- Contact experiences
- Image-led landing pages

Rather than being tied to a single portfolio or brand, the current direction is to develop these ideas into a more reusable Next.js frontend.

## Current Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- NextUI
- Fluent UI
- Framer Motion
- React Image Gallery
- Imgix / `react-imgix`
- Next.js App Router

The repository also includes tooling for bundle analysis, Lighthouse testing, Core Web Vitals, and performance experimentation.

## Project Structure

```text
src/
├── app/
│   ├── about/
│   ├── api/
│   ├── blog/
│   ├── components/
│   ├── contact/
│   ├── projects/
│   ├── layout.tsx
│   └── page.tsx
├── data/
├── utils/
└── middleware.ts
```

The application uses the Next.js App Router, with shared components and content patterns being developed toward a reusable theme architecture.

## Development

Clone the repository and install dependencies:

```bash
git clone https://github.com/amandadr/newfie-portfolio.git
cd newfie-portfolio
npm install
```

Start the local development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Performance Tooling

Run a Lighthouse audit against the local application:

```bash
npm run lighthouse
```

Analyze the production bundle:

```bash
npm run analyze
```

The project includes ongoing experimentation around image delivery, bundle size, rendering, accessibility, SEO, and frontend performance.

## Project History

Newfie was initially developed while exploring a rebuild of [Manny Roy Consulting](https://www.mannyroy.com).

As the MRC website's design and technical direction evolved, this codebase stopped being the intended production site. Rather than abandoning the work, I kept it as a standalone project for exploring a more visual style of Next.js site architecture.

Today, the repository is best understood as a **work-in-progress image-rich Next.js theme** and frontend playground.

## Related

- [mannyroy.com](https://www.mannyroy.com) — my current consulting website
- [amandadroy.com](https://amandadroy.com) — my developer portfolio
- [github.com/amandadr](https://github.com/amandadr) — other projects and experiments
