"use client";

import { useEffect, useRef } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { TIPOS } from "@/lib/automatizaciones-data";
import { TipoCard } from "./TipoCard";

export function TiposGrid() {
  const sectionRef = useRef(null);
  const panelRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const content = contentRef.current;
    if (!section || !panel || !content) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (reduceMotion.matches) {
          section.style.setProperty("--tipos-scroll-distance", "0px");
          section.style.setProperty("--tipos-content-y", "0px");
          return;
        }

        const distance = Math.max(0, panel.scrollHeight - window.innerHeight);
        const siblings = Array.from(section.parentElement?.children ?? []);
        const sectionIndex = siblings.indexOf(section);
        const sectionStart = siblings
          .slice(0, sectionIndex)
          .reduce((total, sibling) => total + sibling.offsetHeight, 0);
        const progress = distance === 0 ? 0 : Math.min(1, Math.max(0, (window.scrollY - sectionStart) / distance));

        section.style.setProperty("--tipos-scroll-distance", `${distance}px`);
        section.style.setProperty("--tipos-content-y", `${-progress * distance}px`);
      });
    };

    const resizeObserver = new ResizeObserver(update);
    resizeObserver.observe(panel);
    resizeObserver.observe(content);

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    reduceMotion.addEventListener("change", update);

    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      reduceMotion.removeEventListener("change", update);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bg"
      id="tipos"
      aria-labelledby="tipos-heading"
      style={{
        position: "sticky",
        top: 0,
        minHeight: "calc(100vh + var(--tipos-scroll-distance, 0px) + clamp(8rem, 22vh, 18rem))",
        overflow: "visible",
      }}
    >
      <div
        ref={panelRef}
        className="section-pad h-screen overflow-hidden motion-reduce:h-auto motion-reduce:overflow-visible"
      >
        <div
          ref={contentRef}
          className="section-inner will-change-transform motion-reduce:transform-none"
          style={{ transform: "translate3d(0, var(--tipos-content-y, 0px), 0)" }}
        >
          <FadeIn>
            <SectionLabel>Nuestras soluciones</SectionLabel>
            <SectionHeading id="tipos-heading">
              Automatizaciones
              <br />
              que <em>construimos</em>
            </SectionHeading>
            <p className="max-w-[52ch] font-body text-[0.9375rem] leading-[1.7] text-flow-muted">
              Cada sistema se configura según tu negocio, tu industria y el volumen de clientes que manejas.
            </p>
          </FadeIn>

          <FadeIn
            className="mt-[var(--space-xl)] grid grid-cols-1 gap-px bg-flow-border max-[560px]:grid-cols-1 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3"
            role="list"
          >
            {TIPOS.map((tipo) => (
              <TipoCard key={tipo.title} tipo={tipo} />
            ))}
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
