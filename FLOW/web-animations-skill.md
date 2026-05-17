# Web Animations Skill

Genera animaciones web optimizadas para HTML/CSS vanilla con Tailwind, sin dependencias innecesarias.

## Stack objetivo
- HTML/CSS puro
- Tailwind CSS
- JavaScript vanilla (cuando sea necesario)
- Node.js backend (no afecta animaciones frontend)

## Principios

1. **CSS-first**: Usa CSS puro y clases de Tailwind antes que librerías externas
2. **Progressive enhancement**: Animaciones básicas en CSS, complejas solo si es necesario
3. **Performance**: Usa `transform` y `opacity`, evita `width`, `height`, `top`, `left`
4. **Accesibilidad**: Respeta `prefers-reduced-motion`

## Tipos de animaciones

### Básicas (CSS puro)
- Fade in/out
- Slide in (top, bottom, left, right)
- Scale (zoom in/out)
- Rotate
- Hover effects (lift, glow, underline)
- Loading spinners
- Pulse/bounce

### Intermedias (CSS + JS vanilla)
- Scroll-triggered reveals
- Stagger animations (elementos en secuencia)
- Parallax sutil
- Morphing shapes
- Counter animations
- Typing effect

### Complejas (sugerir librería solo si es necesario)
- Timeline compleja multi-etapa → GSAP
- Animaciones basadas en física → Framer Motion
- Drag & drop animado → Framer Motion
- SVG path animations → GSAP DrawSVG

## Patrones de código

### CSS Animation template
```css
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-slide-up {
  animation: slideInUp 0.6s ease-out;
}

/* Respeta preferencias de accesibilidad */
@media (prefers-reduced-motion: reduce) {
  .animate-slide-up {
    animation: none;
  }
}
```

### Scroll reveal (Intersection Observer)
```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-slide-up');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### Tailwind + custom animation
```html
<!-- tailwind.config.js -->
<script>
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out'
      }
    }
  }
}
</script>

<!-- HTML -->
<div class="animate-fade-in-up">Contenido</div>
```

## Timing y easing

- **Entrada**: `ease-out` (0.6s default)
- **Salida**: `ease-in` (0.3s más rápido)
- **Hover**: `ease-in-out` (0.2-0.3s)
- **Elastic/bounce**: usar `cubic-bezier` custom o sugerir librería

## Cuándo sugerir librerías

**Framer Motion** si:
- Animaciones complejas en React/Next.js
- Gestos (drag, swipe)
- Layout animations
- Orchestration avanzada

**GSAP** si:
- Timeline preciso multi-elemento
- ScrollTrigger complejo
- SVG morphing/drawing
- Control granular de easing

**NO sugerir** para:
- Fade/slide básicos
- Hover effects
- Loading states
- Scroll reveals simples

## Output esperado

Siempre incluir:
1. Código CSS/Tailwind listo para copiar
2. HTML de ejemplo
3. JavaScript solo si es necesario
4. Nota de accesibilidad (`prefers-reduced-motion`)
5. Si usa librería externa: comando de instalación + CDN alternativo

## Ejemplos de prompts que activan esta skill

- "anima el hero con fade-in desde abajo"
- "efecto hover en botón con elevación"
- "scroll reveal para las cards de servicios"
- "loader animado mientras carga la página"
- "transición suave entre secciones"
- "contador que sube desde 0 a 1000"
- "parallax sutil en imagen de fondo"
