"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP } from "@/lib/site";

const links = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/automatizaciones", label: "Automatizaciones", matchPath: "/automatizaciones" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#faq", label: "FAQ" },
];

export function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [onBlue, setOnBlue] = useState(false);
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  // Ocultar/mostrar al hacer scroll
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      if (currentY < 80) {
        setHidden(false);
      } else if (currentY > lastScrollY.current) {
        setHidden(true);
        setOpen(false);
      } else {
        setHidden(false);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Detectar qué sección está visualmente bajo el nav usando elementsFromPoint
  useEffect(() => {
    const NAV_H = 64;
    let rafId = null;

    const checkSection = () => {
      const x = window.innerWidth / 2;
      const y = NAV_H / 2;
      const els = document.elementsFromPoint(x, y);
      if (!els?.length) return;

      let section = null;
      for (const el of els) {
        // Saltar el propio nav y la splash screen (z-200, cubre todo al inicio)
        if (navRef.current && navRef.current.contains(el)) continue;
        if (el.closest?.("[data-splash]")) continue;

        let node = el;
        while (node && node !== document.body) {
          if (node.tagName === "SECTION" && node.parentElement?.id === "main") {
            section = node;
            break;
          }
          node = node.parentElement;
        }
        if (section) break;
      }
      // Solo actualizar si encontramos sección; si no, conservar el estado anterior
      if (section) {
        setOnBlue(section.classList.contains("section-blue"));
      }
    };

    const schedule = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        rafId = null;
        checkSection();
      });
    };

    // Chequeo inicial diferido para esperar a que el splash desaparezca (~2.3s)
    const initialTimers = [
      setTimeout(schedule, 100),
      setTimeout(schedule, 2400),
    ];

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (rafId !== null) cancelAnimationFrame(rafId);
      initialTimers.forEach(clearTimeout);
    };
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Colores explícitos en hex para evitar problemas de cascada/variables/conversión OKLCH.
  const COLOR_DARK = "#0a0d1f";
  const COLOR_WHITE = "#ffffff";
  const COLOR_BLUE = "#1e40ef";

  const logoColor = onBlue ? COLOR_WHITE : COLOR_DARK;
  const linkColor = onBlue ? COLOR_WHITE : COLOR_BLUE;
  const lineColor = onBlue ? COLOR_WHITE : COLOR_DARK;

  return (
    <nav
      ref={navRef}
      className={`sticky top-0 z-[100] bg-transparent transition-transform duration-300 ease-in-out ${
        hidden ? "-translate-y-full" : "translate-y-0"
      }`}
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-16 max-w-[2439px] items-center justify-between px-[var(--space-md)]">
        <Link
          href="/"
          className="nav-logo font-display text-[clamp(1.25rem,2vw,1.5rem)] font-semibold italic tracking-[-0.001em] transition-colors duration-300"
          style={{ color: logoColor }}
          aria-label="Flow Studio — Inicio"
        >
          Flow Studio Agencia
        </Link>

        <ul
          id="nav-links"
          role="list"
          className={`items-center gap-[clamp(1rem,3vw,2rem)] max-md:fixed max-md:left-0 max-md:right-0 max-md:top-16 max-md:z-[99] max-md:flex-col max-md:border-b max-md:border-flow-border max-md:bg-bg max-md:p-[var(--space-md)] max-md:gap-[var(--space-md)] ${
            open ? "max-md:flex" : "max-md:hidden"
          } flex`}
        >
          {links.map((link) => {
            const isActive = link.matchPath && pathname === link.matchPath;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`nav-logo font-body text-sm font-bold tracking-[0.08em] transition-colors duration-300 focus-visible:text-accent-hover ${
                    isActive ? "[&::after]:w-full" : ""
                  }`}
                  style={{ color: linkColor }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li className="max-md:w-full">
            <a
              href={WHATSAPP.advisor}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full whitespace-nowrap btn-fill-dark rounded-[var(--radius)] bg-blue px-5 py-2 text-center font-body text-sm font-medium text-white transition-[background,transform] hover:-translate-y-px max-md:py-3 md:hidden"
              aria-label="Haz crecer tu negocio por WhatsApp"
            >
              Haz crecer tu negocio
            </a>
          </li>
        </ul>

        <a
          href={WHATSAPP.advisor}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden whitespace-nowrap btn-fill-dark rounded-[var(--radius)] bg-blue px-5 py-2 font-body text-sm font-medium text-white transition-[background,transform] hover:-translate-y-px md:inline-block"
          aria-label="Haz crecer tu negocio por WhatsApp"
        >
          Haz crecer tu negocio
        </a>

        <button
          type="button"
          className="flex flex-col gap-[5px] p-2 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[1.5px] w-[22px] transition-colors duration-300" style={{ backgroundColor: lineColor }} />
          <span className="block h-[1.5px] w-[22px] transition-colors duration-300" style={{ backgroundColor: lineColor }} />
          <span className="block h-[1.5px] w-[22px] transition-colors duration-300" style={{ backgroundColor: lineColor }} />
        </button>
      </div>
    </nav>
  );
}
