"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { EMAIL, WHATSAPP } from "@/lib/site";

const NAV_H = 64;

function getOffsetTop(el) {
  let top = 0;
  while (el) {
    top += el.offsetTop;
    el = el.offsetParent;
  }
  return top;
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  requestAnimationFrame(() => {
    window.scrollTo({ top: getOffsetTop(el) - NAV_H, behavior: "smooth" });
  });
}

const navLinks = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/automatizaciones", label: "Automatizaciones" },
  { href: "/#proceso", label: "Proceso" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contacto", label: "Contacto" },
];

export function Footer({
  tagline = "Marketing digital e inteligencia artificial para negocios mexicanos que quieren crecer.",
  variant = "default",
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleHashClick = (e, href) => {
    e.preventDefault();
    const id = href.split("#")[1];

    if (pathname === "/") {
      scrollToSection(id);
      window.history.replaceState(null, "", "/#" + id);
    } else {
      sessionStorage.setItem("navScrollTo", id);
      router.push("/");
    }
  };
  return (
    <footer
      className="border-t border-[#06104f] bg-[#070e5a] px-[var(--space-md)] py-[var(--space-xl)] pb-[var(--space-lg)] text-white"
      aria-label="Pie de página"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[var(--space-lg)] md:grid-cols-[2fr_1fr_1fr] md:gap-[var(--space-xl)]">
        <div>
          <p className="font-display mb-[var(--space-sm)] text-2xl font-semibold italic text-white">Flow Studio</p>
          <p className="max-w-[28ch] font-body text-sm leading-relaxed text-[oklch(0.88_0.04_264)]">{tagline}</p>
        </div>

        <nav aria-label="Mapa del sitio">
          <h2 className="font-heading mb-[var(--space-md)] text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[oklch(0.82_0.04_264)]">
            Navegación
          </h2>
          <ul className="flex flex-col gap-[var(--space-xs)]">
            {navLinks.map((link) => {
              const isHash = link.href.includes("#");

              return (
                <li key={link.href}>
                  {isHash ? (
                    <a
                      href={link.href}
                      onClick={(e) => handleHashClick(e, link.href)}
                      className="font-body text-sm text-[oklch(0.92_0.04_264)] transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link href={link.href} className="font-body text-sm text-[oklch(0.92_0.04_264)] transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div>
          <h2 className="font-heading mb-[var(--space-md)] text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[oklch(0.82_0.04_264)]">
            Contacto
          </h2>
          <ul className="flex flex-col gap-[var(--space-xs)]">
            <li>
              <a
                href={WHATSAPP.advisor}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[oklch(0.92_0.04_264)] transition-colors hover:text-white"
                aria-label="WhatsApp de Flow Studio"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="font-body text-sm text-[oklch(0.92_0.04_264)] transition-colors hover:text-white">
                Correo electrónico
              </a>
            </li>
            <li>
              <span className="font-body text-sm text-[oklch(0.78_0.04_264)]">Instagram (próximamente)</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className="mx-auto mt-[var(--space-xl)] flex max-w-[1200px] flex-wrap items-center justify-between gap-[var(--space-sm)] border-t border-[#06104f] pt-[var(--space-md)] max-md:flex-col max-md:items-start"
      >
        <p className="font-body text-[0.8rem] text-[oklch(0.78_0.04_264)]">&copy; 2026 Flow Studio. Todos los derechos reservados.</p>
        <p className="font-body text-[0.8rem] text-[oklch(0.78_0.04_264)]">México</p>
      </div>
    </footer>
  );
}
