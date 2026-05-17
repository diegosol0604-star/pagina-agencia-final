# Flow Studio Website

## Stack

Static HTML/CSS/JS — no build tools, no package.json, no bundler.
Each page is a standalone file with inline `<style>` and `<script>`.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Main landing page (hero, servicios, automatizaciones, diferenciadores, proceso, FAQ, contacto) |
| `automatizaciones.html` | Dedicated automatizaciones page |
| `portafolio.html` | Exists but unlinked — no portfolio to show yet |

## Design System (OKLCH tokens)

All pages share the same token system in `:root`:

```
--bg:           oklch(0.97 0.012 80)     /* crema claro */
--surface:      oklch(0.93 0.018 78)     /* crema medio */
--surface-2:    oklch(0.89 0.022 76)     /* crema oscuro */
--text:         oklch(0.13 0.022 260)    /* casi negro */
--text-muted:   oklch(0.44 0.04 260)     /* gris */
--accent:       oklch(0.45 0.20 260)     /* azul eléctrico */
--teal:         oklch(0.52 0.16 175)     /* verde teal */
--font-display: 'Cormorant Garamond' (headings, italic/serif)
--font-sans:    'Syne' (headings bold)
--font-body:    'DM Sans' (body)
html { font-size: 17.5px; }
```

Contact/footer sections use `--text` as background (dark) with light text.

## Typography Scale (fluid clamp)

```
Hero brand:   clamp(4.5rem, 13vw, 11rem)
Hero heading:  clamp(2.5rem, 5.5vw, 4.5rem)
Section head:  clamp(2rem, 4.5vw, 3.75rem)
Body:          0.875rem – 1rem
Labels:        0.65rem – 0.8rem
```

## Spacing (tokens)

```
--space-xs:  clamp(0.5rem,  1vw,   0.75rem)
--space-sm:  clamp(0.75rem, 1.5vw, 1rem)
--space-md:  clamp(1rem,    2.5vw, 1.5rem)
--space-lg:  clamp(1.5rem,  4vw,   2.5rem)
--space-xl:  clamp(2.5rem,  6vw,   4rem)
--space-2xl: clamp(4rem,    10vw,  7rem)
```

## Navbar specificity pattern (critical)

```css
.nav__links a:not(.nav__cta) { color: var(--text-muted); }
.nav__cta { color: var(--nav-cta-color); }  /* independent token */
```

The `:not(.nav__cta)` selector is required — without it the generic `a` color overrides the CTA color.

## WhatsApp CTAs

```
Main:   https://wa.me/524442081419?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios
Auto:   https://wa.me/524442081419?text=Hola%2C%20me%20interesa%20automatizar%20mi%20negocio
```

## Existing instruction files to reference

| File | Content |
|---|---|
| `CLAUDE.MD.md` | Web design recreation workflow (Puppeteer capture → compare → fix loop) |
| `scratchpad.md` | All design decisions, CSS patterns, animation specs, pending items |
| `contenidoflow.md` | Content, copy, color values in OKLCH, business data |
| `frontend-design/SKILL.md` | Frontend aesthetic guidelines (AI slop test, OKLCH, typography, layout) |
| `web-animations-skill.md` | CSS-first animations, scroll reveals, prefers-reduced-motion |
| `ui-ux-pro-max/SKILL.md` | Comprehensive UI/UX rules (Python scripts for search) |

## Validation command

Puppeteer screenshot comparison:
```bash
node -e "const puppeteer=require('puppeteer');(async()=>{const b=await puppeteer.launch({args:['--no-sandbox']});const p=await b.newPage();await p.setViewport({width:1440,height:900});await p.goto('file:///path/to/index.html',{waitUntil:'networkidle2'});await p.screenshot({path:'result.png',fullPage:true});await b.close();})()"
```

## Pending items (from scratchpad.md)

- Logo: currently text only
- Real social links (Instagram, TikTok — `href="#"` currently)
- Real testimonials
- Deploy to Vercel

## Style constraints

- NO dark mode generic, NO cyan/purple gradients, NO glassmorphism, NO card-with-shadow generic
- Light editorial cream background — Cormorant Garamond italic as protagonist
- Avoid the AI aesthetic: centered everything, same-sized card grids, gradient text on headings, hero metric layout