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
  const navRef = useRef(null);

  useEffect(() => {
    const onClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-[100] border-b border-flow-border bg-[oklch(0.97_0.012_80/0.88)] backdrop-blur-[12px]"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex h-16 max-w-[2439px] items-center justify-between px-[var(--space-md)]">
        <Link
          href="/"
          className="font-display text-[clamp(1.25rem,2vw,1.5rem)] font-semibold italic tracking-[-0.001em] text-flow-text"
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
                  className={`font-body text-sm font-normal tracking-[0.03em] text-flow-muted transition-colors hover:text-flow-text focus-visible:text-flow-text ${
                    isActive ? "font-medium text-accent" : ""
                  }`}
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
              className="inline-block w-full whitespace-nowrap rounded-[var(--radius)] bg-flow-text px-5 py-2 text-center font-body text-sm font-medium text-[var(--nav-cta-color)] transition-[background,transform] hover:-translate-y-px hover:bg-accent focus-visible:bg-accent max-md:py-3 md:hidden"
              aria-label="Hablar con un asesor por WhatsApp"
            >
              Hablar con un asesor
            </a>
          </li>
        </ul>

        <a
          href={WHATSAPP.advisor}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden whitespace-nowrap rounded-[var(--radius)] bg-flow-text px-5 py-2 font-body text-sm font-medium text-[var(--nav-cta-color)] transition-[background,transform] hover:-translate-y-px hover:bg-accent focus-visible:bg-accent md:inline-block"
          aria-label="Hablar con un asesor por WhatsApp"
        >
          Hablar con un asesor
        </a>

        <button
          type="button"
          className="flex flex-col gap-[5px] p-2 md:hidden"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-[1.5px] w-[22px] bg-flow-text" />
          <span className="block h-[1.5px] w-[22px] bg-flow-text" />
          <span className="block h-[1.5px] w-[22px] bg-flow-text" />
        </button>
      </div>
    </nav>
  );
}
