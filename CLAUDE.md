# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Flow Studio** — a Spanish-language marketing agency website (Mexico) built with Next.js 15 App Router + Tailwind CSS v4. Two public routes: `/` (home) and `/automatizaciones`.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:3000
npm run build     # Production build
npm run start     # Run production build
npm run lint      # ESLint (next core-web-vitals config)
```

## Architecture

### Routing (App Router)
- `app/layout.js` — root layout: loads Google Fonts, mounts `<SplashScreen>`, `<SkipLink>`, `<Nav>`, wraps children
- `app/page.js` — home page, assembles all home sections in order
- `app/automatizaciones/page.js` — automatizaciones sub-page

### Component Organization
```
components/
  layout/    Nav, Footer, SplashScreen, SkipLink
  home/      Hero, NuevaSeccion, Servicios, AutomatizacionesSection, Diferenciadores, Proceso, FAQ, Contacto
  automatizaciones/  HeroAutomatizaciones, QueSon, TiposGrid, Medida, BeneficiosAuto, FooterCta, AutoIcons, TipoCard
  ui/        FadeIn, Buttons, SectionHeader, ParallaxOrb, TextRotate
  icons/     WhatsAppIcon
```

### Data / Config (`lib/`)
- `lib/site.js` — `WHATSAPP` object with pre-encoded WhatsApp links for each CTA, `EMAIL`, and `TYPEWRITER_WORDS`. **All WhatsApp links live here — update phone/messages in one place.**
- `lib/faq.js` — FAQ content array
- `lib/automatizaciones-data.js` — data for the automatizaciones page sections
- `lib/utils.js` — `cn()` className helper

### Path Alias
`@/*` resolves to the repo root (configured in `jsconfig.json`).

### Styling System
Tailwind CSS v4 with a custom design-token layer defined in `app/globals.css`:

| Token | Purpose |
|---|---|
| `--bg`, `--surface`, `--surface-2` | Background hierarchy |
| `--text`, `--text-muted` | Text hierarchy |
| `--accent`, `--accent-hover` | Primary brand purple-blue |
| `--teal`, `--teal-light` | Secondary teal |
| `--space-xs` → `--space-2xl` | Fluid spacing via `clamp()` |
| `--transition` | Shared `220ms cubic-bezier(0.25, 0, 0, 1)` |
| `--radius` | `3px` border-radius |

All tokens are exposed to Tailwind via `@theme inline` as `bg-bg`, `text-flow-text`, `text-flow-muted`, `text-accent`, etc.

**Font utilities:** `.font-display` (Cormorant Garamond — serif, italic), `.font-heading` (Syne — uppercase/bold), `.font-body` (DM Sans — default body).

**Layout utilities:** `.section-pad` (fluid vertical padding + `--space-md` horizontal), `.section-inner` (centered, `max-w-[1200px]`).

### Scroll / Animation Patterns

**Sticky card stack** (`globals.css`): every direct `<section>` child of `#main` is `position: sticky; top: 0; min-height: 100vh` with incrementing `z-index`. Non-first sections get `border-radius: 20px 20px 0 0` + a shadow so they slide in over previous sections. Disabled via `prefers-reduced-motion`.

**Splash screen coordination**: `SplashScreen` sets `document.body.dataset.splashDone = "1"` at ~2.3 s. Hero animation classes (`.animate-brand-in`, `.animate-hero-text-in`, etc.) are suppressed with `opacity: 0; animation: none` until that attribute appears.

**`FadeIn` component**: wraps children in a div with class `fade-in`; uses `IntersectionObserver` to add `.visible` when scrolled into view. Works with the CSS transition defined in `globals.css`.

**`motion/react`** (Framer Motion): used in `SplashScreen` and other animated components.

### Accessibility
- `<SkipLink>` is rendered before `<Nav>` to allow keyboard users to jump to `#main`.
- `<Nav>` uses `aria-label`, `aria-current="page"`, `aria-expanded`, and `aria-controls` for the mobile hamburger.
- All animation keyframes are disabled when `prefers-reduced-motion: reduce` is set.

## FLOW/ Directory

`FLOW/` contains skill reference documents (design system guidelines, UI/UX patterns, animation references) for AI assistant context. These are **not part of the deployed app** — they are development-time knowledge bases.
