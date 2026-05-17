# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Flow Studio — Agencia de marketing digital e IA mexicana. Landing page en Next.js 16.2.6 con App Router. Sin backend: los CTAs usan WhatsApp y el formulario usa `mailto:`.

## Commands

```bash
npm run dev      # servidor de desarrollo
npm run build    # build de producción
npm run lint     # ESLint
```

No hay tests configurados. Para validar visualmente, usar `npm run dev` y revisar en el navegador.

## Architecture

### Pages (App Router)

| Ruta | Archivo |
|------|---------|
| `/` | `app/page.js` |
| `/automatizaciones` | `app/automatizaciones/page.js` |

`app/layout.js` monta `<Nav>` y `<SkipLink>` globalmente. Cada página importa sus secciones como componentes y termina con `<Footer>`.

### Component Structure

```
components/
  layout/     Nav, Footer, SkipLink
  home/       Hero, Servicios, AutomatizacionesSection, Diferenciadores,
              Proceso, FAQ, Contacto, Typewriter
  automatizaciones/  HeroAutomatizaciones, QueSon, TiposGrid, TipoCard,
                     BeneficiosAuto, FooterCta, Medida, AutoIcons
  ui/         Buttons (BtnPrimary, BtnGhost), FadeIn, SectionHeader, WhatsAppIcon
```

Todos los componentes son Server Components por defecto. Añadir `"use client"` solo cuando se necesite (`useState`, `useEffect`, interactividad del navegador). Ejemplos: `Nav.js`, `FadeIn.js`, `Typewriter.js`, `FAQ.js`.

### Centralized Data (`lib/`)

- `lib/site.js` — `WHATSAPP` (objeto con 10 links por contexto), `EMAIL`, `TYPEWRITER_WORDS`
- `lib/faq.js` — preguntas y respuestas del FAQ
- `lib/automatizaciones-data.js` — datos de tipos de automatización

Importar desde `lib/` en lugar de hardcodear links, textos o datos repetidos.

### Design System

Definido en `app/globals.css`. Tailwind CSS v4 con `@theme inline` que mapea las CSS variables a utilidades de Tailwind.

**Tokens de color (OKLCH):**
```css
--bg           /* crema claro — fondo principal */
--surface      /* crema medio — fondo secciones alternas */
--surface-2    /* crema oscuro */
--text         /* casi negro azulado */
--text-muted   /* gris azulado */
--accent       /* azul profundo — color principal de énfasis */
--teal         /* verde teal — color secundario de énfasis */
--border       /* borde sutil */
```

En Tailwind: `bg-bg`, `bg-surface`, `text-flow-text`, `text-flow-muted`, `text-accent`, `text-teal`, `border-flow-border`, etc.

**Tipografía:**
- `font-display` → Cormorant Garamond (italic, headings elegantes)
- `font-heading` → Syne (bold, headings de sección)
- `font-body` → DM Sans (texto corriente, default)
- `html { font-size: 17.5px }` — base intencionalmente mayor a 16px

**Espaciado fluido (CSS variables, no usar valores arbitrarios):**
`--space-xs` / `--space-sm` / `--space-md` / `--space-lg` / `--space-xl` / `--space-2xl`

**Utilidades clave:**
- `.section-pad` — padding estándar de sección (`--space-2xl` vertical, `--space-md` horizontal)
- `.section-inner` — contenedor centrado, `max-width: 1200px`
- `.fade-in` + `.fade-in.visible` — animación scroll-triggered (usada con `<FadeIn>`)

**Animaciones predefinidas (clases CSS):**
`animate-brand-in`, `animate-brand-in-delay`, `animate-hero-text-in`, `animate-hero-text-in-delay-1`, `animate-hero-text-in-delay-2`, `animate-hero-card-in`, `animate-hero-drift`, `animate-cursor-blink`

Todas incluyen su variante `prefers-reduced-motion: reduce` en globals.css — no añadir overrides manuales.

### Scroll-triggered animations

Usar el componente `<FadeIn>` (client component). Aplica `.fade-in` y lo vuelve `.visible` via `IntersectionObserver` con `threshold: 0.12`. Soporta `delayMs` para escalonar.

```jsx
<FadeIn delayMs={150}>
  <p>Contenido animado</p>
</FadeIn>
```

### Navbar — gotcha crítico

```css
/* CORRECTO — :not() necesario para que la especificidad no pise --nav-cta-color */
.nav__links a:not(.nav__cta) { color: var(--text-muted); }
.nav__cta { color: var(--nav-cta-color); }
```

Sin el `:not()`, el selector `a` pisa el color del botón CTA por especificidad.

### Sections pattern (fondo alternado)

| Sección | Fondo |
|---------|-------|
| Hero | `bg-bg` |
| Servicios | `bg-surface` |
| Automatizaciones | `bg-bg` |
| Diferenciadores | `bg-surface` |
| Proceso | `bg-bg` |
| FAQ | `bg-surface` |
| Contacto + Footer | `bg-flow-text` (oscuro — dark section) |

Las secciones oscuras (Contacto, Footer) usan texto crema y inputs con fondo `oklch(0.20 0.02 260)`.

## Reference Files (in `FLOW/`)

- `FLOW/scratchpad.md` — fuente de verdad de todas las decisiones de diseño y estilo
- `FLOW/contenidoflow.md` — copy completo del sitio, datos de contacto, servicios
- `FLOW/AGENTS.md` — resumen del stack y design tokens
- `FLOW/frontend-design/` — guías de referencia: tipografía, color, motion, responsive, etc.
