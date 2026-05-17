# Flow Studio — Scratchpad de Decisiones

> Referencia rápida de todas las decisiones de diseño, estilo y estructura tomadas durante el desarrollo.

---

## Datos del negocio

| Campo | Valor |
|---|---|
| Nombre | Flow Studio |
| WhatsApp | +52 4442081419 |
| Correo | Flowstudio_agenciamkt@outlook.com |
| Ubicación | México |
| Objetivo landing | Generar leads → WhatsApp o formulario |

---

## Archivos del proyecto

| Archivo | Descripción |
|---|---|
| `index.html` | Landing principal (todo embebido: CSS + JS) |
| `automatizaciones.html` | Página dedicada a automatizaciones |
| `contenidoflow.md` | Contenido, copy y estructura original |
| `assets/Flow Studio Captura WEB borrador.png` | Referencia visual del diseño |
| `frontend-design/` | Guías de diseño frontend (skill) |
| `ui-ux-pro-max/` | Sistema de UI/UX (skill) |

---

## Paleta de colores (OKLCH)

```css
--bg:            oklch(0.97 0.012 80)      /* crema — fondo principal */
--surface:       oklch(0.93 0.018 78)      /* crema media — secciones alternas */
--surface-2:     oklch(0.89 0.022 76)      /* crema oscura — stats, cards */
--text:          oklch(0.13 0.022 260)     /* casi negro azulado — texto principal */
--text-muted:    oklch(0.44 0.04 260)      /* gris azulado — texto secundario */
--accent:        oklch(0.45 0.20 260)      /* azul profundo — links, CTAs */
--accent-hover:  oklch(100% 0.00011 271)   /* blanco puro — hover accent */
--teal:          oklch(0.52 0.16 175)      /* verde teal — labels, iconos */
--teal-light:    oklch(0.88 0.08 175)      /* teal claro — fondos teal */
--border:        oklch(0.85 0.02 78)       /* borde sutil claro */
--border-dark:   oklch(0.78 0.03 260)      /* borde más visible */
--nav-cta-color: oklch(0.97 0.012 80)      /* texto del CTA del navbar (independiente) */
```

**Colores dark mode (contacto + footer):**
```css
/* Fondo oscuro */  oklch(0.13 0.022 260)  /* = var(--text) */
/* Texto claro */   oklch(0.65 0.03 255)
/* Texto muted */   oklch(0.55 0.03 255)
/* Border dark */   oklch(0.28 0.02 260)
/* Input dark */    oklch(0.20 0.02 260)
```

---

## Tipografía

| Uso | Fuente | Variante |
|---|---|---|
| Headings display | Cormorant Garamond | italic, 400/600 |
| Headings sans | Syne | bold 700/800 |
| Cuerpo / UI | DM Sans | 300, 400, 500 |

**Escala de tamaños (fluid con clamp):**
```css
Hero brand:     clamp(4.5rem, 13vw, 11rem)
Hero heading:   clamp(2.5rem, 5.5vw, 4.5rem)
Section heading:clamp(2rem, 4.5vw, 3.75rem)
Body:           0.875rem – 1rem
Small / labels: 0.65rem – 0.8rem
```

---

## Espaciado (tokens)

```css
--space-xs:  clamp(0.5rem,  1vw,   0.75rem)
--space-sm:  clamp(0.75rem, 1.5vw, 1rem)
--space-md:  clamp(1rem,    2.5vw, 1.5rem)
--space-lg:  clamp(1.5rem,  4vw,   2.5rem)
--space-xl:  clamp(2.5rem,  6vw,   4rem)
--space-2xl: clamp(4rem,    10vw,  7rem)
```

---

## Tema visual — decisiones clave

- **Modo:** Light mode editorial (fondo crema, texto oscuro)
- **Referencia:** Borrador imagen `assets/Flow Studio Captura WEB borrador.png`
- **Inspiración estilo:** Editorial / revista de lujo — Cormorant Garamond italic como protagonista
- **NO usar:** Dark mode genérico, gradientes cyan/purple, glassmorphism, cards con shadow genérica

---

## Navbar

- Logo: "Flow Studio Agencia" (Cormorant Garamond italic)
- Links: Servicios | Automatizaciones → `automatizaciones.html` | Proceso | FAQ
- CTA: "Hablar con un asesor" → WhatsApp `https://wa.me/524442081419`
- Sticky, fondo crema con `backdrop-filter: blur(12px)` al 88% opacidad
- **Bug histórico resuelto:** `.nav__links a:not(.nav__cta)` — el `:not()` evita que la especificidad del selector `a` pise el color del CTA
- Token independiente `--nav-cta-color` para el texto del CTA del navbar

---

## Secciones — index.html

| # | ID | Fondo | Descripción |
|---|---|---|---|
| — | Hero | `--bg` | Flow Studio brand + animación + CTA |
| 1 | `#servicios` | `--surface` | Grid 5 servicios (2 grandes + 3 medianos) |
| 2 | `#automatizaciones` | `--bg` | Panel Antes/Después + lista + "Ver más" → automatizaciones.html |
| 3 | `#diferenciadores` | `--surface` | Lista diferenciadores + stats verticales con background |
| 4 | `#proceso` | `--bg` | 4 pasos con línea conectora |
| 5 | `#faq` | `--surface` | Split layout: preguntas izquierda / respuesta derecha |
| 6 | `#contacto` | `--text` (oscuro) | Formulario + WhatsApp — estilo dark como footer-cta |
| — | Footer | `--text` (oscuro) | Links, copyright. Separado por border-top sutil |

---

## Hero — decisiones específicas

- **"Flow Studio"** centrado como elemento de brand (no es el h1)
- **Animación de brand (actual):** dos spans apilados verticalmente con fade-in escalonado
  - `.hero__brand--fs` ("Flow Studio"): aparece al cargar, 0.9s delay 0.1s — se queda visible
  - `.hero__brand--sub` ("Agencia de Marketing e IA"): aparece debajo 0.9s delay 1.6s — `font-size: clamp(2rem, 5vw, 5rem)`
  - Animación compartida `@keyframes brand-fade-in`: `opacity 0 + translateY(14px)` → visible
  - En `prefers-reduced-motion`: ambos visibles sin animación
- **Animaciones eliminadas:** scroll capture (letras por scroll), travel line (línea horizontal con texto viajero), hero orbit ring (SVG elipse giratoria)
- **h1 tagline:** "Convierte tus ideas en sistemas que venden" — centrado en móvil, izquierda en desktop, con typewriter
- **Typewriter** cicla: venden / prosperan / crecen / escalan
- **Tarjeta flotante:** top-right en desktop, `position: static` centrada en móvil
- **Fondo:** Gradiente CSS animado `hero-drift` 18s (no Three.js)
- **CTA hero:** "Contáctanos por WhatsApp" (btn-primary) + "Ver servicios" (btn-ghost)
- **Animaciones de entrada (page load):** card 0.15s desde derecha, tagline 0.35s desde abajo, btn-primary 0.6s, btn-ghost 0.78s

### Hero móvil (≤768px)
- Layout: `display: flex; flex-direction: column; align-items: center` — sin `min-height`
- Orden: card (top) → brand+CTAs → tagline
- Botones reducidos: btn-primary `0.72rem / 0.6rem 1.2rem`, btn-ghost `0.78rem`
- Tagline centrada, `transform: none`, `margin-left: 0`

---

## FAQ — diseño split panel

- **Layout:** grid `1fr 1fr`, sin max-width en el grid externo (va dentro de `max-width: 1200px`)
- **Izquierda:** preguntas como botones, barra acento vertical en activa (`::before scaleY`)
- **Derecha:** fondo `--bg` con borde, número decorativo + pregunta grande + respuesta
- **Animación:** `opacity + translateY` al cambiar respuesta
- Primera pregunta activa por defecto

---

## Stats — sección diferenciadores

| Stat | Descripción |
|---|---|
| +3× | Más consultas atendidas con chatbot vs. manual |
| 100% | Transparencia en cada decisión |
| 5 | Servicios en un solo equipo |
| 24/7 | Chatbots activos para tu negocio |

> **No usar "72h"** — no se puede garantizar tiempo de implementación de campaña.

---

## Contacto — decisiones

- Mismo estilo visual que `footer-cta` de automatizaciones.html (fondo oscuro `var(--text)`)
- Botón WhatsApp: fondo crema / texto oscuro (invertido respecto al hero)
- Formulario: inputs dark `oklch(0.20 0.02 260)`, texto blanco, focus en teal
- `border-top: 1px solid oklch(0.28 0.02 260)` separa contacto del footer
- Envío vía `mailto:Flowstudio_agenciamkt@outlook.com`

---

## portafolio.html — secciones

1. Hero: "Trabajo real, resultados concretos." + descripción
2. Grid de 6 proyectos placeholder (reemplazar con casos reales):
   - Clínica Dental Sonría — Landing Page + Chatbot WA
   - FitLife Studio — Branding
   - Despacho Morales — Automatización + CRM
   - Restaurante El Fogón — Chatbot WA + Instagram
   - Belleza Única Spa — Meta Ads + Landing
   - TechStore MX — SEO
3. Footer CTA oscuro → WhatsApp ("vi su portafolio, me interesa trabajar con Flow Studio")

**Estructura de tarjeta** (`proy-card`): thumb placeholder (aspect-ratio 16/9) + tag + título + descripción + pills de herramientas + CTA "Cotizar algo similar" → WhatsApp

**Sección teaser en index.html** (`#portafolio`): 3 tarjetas (`port-card`) entre Diferenciadores y Proceso. Proceso lleva `border-top: 1px solid var(--border)` para separar visualmente (ambas secciones comparten `--bg`).

---

## automatizaciones.html — secciones

1. Hero: "Tu negocio trabajando, incluso cuando tú no estás" + CTA WhatsApp
2. ¿Qué son? — Diagrama de flujo visual
3. Tipos (6 cards): WhatsApp, Redes, Agendamiento, CRM, Facturación, Seguimiento
4. A la medida — Proceso de 4 pasos, sin precios (cotización personalizada)
5. Beneficios (6 ítems): mejor atención, ahorro tiempo, crecimiento, menos errores, datos, visibilidad
6. Footer CTA oscuro: "Automatizar mi negocio" → WhatsApp

---

## URLs de WhatsApp

```
CTA principal:
https://wa.me/524442081419?text=Hola%2C%20me%20interesa%20saber%20m%C3%A1s%20sobre%20sus%20servicios

CTA automatizaciones:
https://wa.me/524442081419?text=Hola%2C%20me%20interesa%20automatizar%20mi%20negocio

CTA automatizar mi negocio (footer):
https://wa.me/524442081419?text=Hola%2C%20me%20interesa%20automatizar%20mi%20negocio.%20%C2%BFPueden%20ayudarme%3F

Nav (genérico):
https://wa.me/524442081419
```

---

## Pendientes del proyecto

- [ ] Logo final (actualmente es texto)
- [ ] Redes sociales reales (Instagram, TikTok — actualmente `href="#"`)
- [ ] Testimonios reales (sección no implementada aún)
- [x] ~~Portafolio~~ — **eliminado del index y del navbar** (sin cartera suficiente aún). `portafolio.html` sigue existiendo pero no está enlazado.
- [ ] Deploy a Vercel
- [ ] Foto o ilustración del equipo

---

## Cambios estructurales de esta sesión

| Cambio | Archivo |
|---|---|
| Eliminada sección portafolio (HTML + CSS) | index.html |
| Eliminado link "Portafolio" del navbar | index.html, automatizaciones.html |
| Eliminada línea decorativa viajera (travel line) | index.html |
| Eliminado orbit ring SVG | index.html |
| Eliminado scroll capture JS | index.html |
| Nueva animación brand: Flow Studio + Agencia de Marketing e IA | index.html |
| Hero móvil refactorizado a flexbox | index.html |
| `html { font-size: 17.5px }` — base aumentada para mejor legibilidad | ambos |
| Hover en pasos (sección Proceso) + bordes verticales entre pasos | index.html |
| `font-style: italic bold` → `font-style: italic` (inválido) | automatizaciones.html |
| `font-weight: 599` → `font-weight: 600` (inválido) | automatizaciones.html |
| Negritas sección "Cómo funciona el proceso" corregidas con `color: var(--text)` | automatizaciones.html |
| Fixes móvil: `hero__tagline-wrap width: 100%`, márgenes `%` reseteados en card | index.html |

## Patrones CSS importantes

```css
/* Especificidad navbar — patrón crítico */
.nav__links a:not(.nav__cta) { color: var(--text-muted); }
.nav__cta { color: var(--nav-cta-color); }   /* token independiente */

/* Animación brand hero */
.hero__brand--fs { animation: brand-fade-in 0.9s ... 0.1s both; }
.hero__brand--sub { animation: brand-fade-in 0.9s ... 1.6s both; font-size: clamp(2rem, 5vw, 5rem); }
@keyframes brand-fade-in { from { opacity:0; transform: translateY(14px); } to { opacity:1; transform:none; } }

/* FAQ split */
.faq__answer { position: absolute; inset: 0; opacity: 0; transition: opacity 380ms; }
.faq__answer.active { opacity: 1; }

/* Fade-in general */
.fade-in { opacity: 0; transform: translateY(24px); transition: 600ms ease; }
.fade-in.visible { opacity: 1; transform: translateY(0); }
/* Disparado por IntersectionObserver { threshold: 0.12 } */

/* Hero móvil */
@media (max-width: 768px) {
  .hero { display: flex; flex-direction: column; align-items: center; min-height: auto; }
  /* orden: hero__card (1) → hero__center (2) → hero__tagline-wrap (3) */
}
```
