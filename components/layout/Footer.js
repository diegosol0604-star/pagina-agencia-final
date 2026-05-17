import Link from "next/link";
import { EMAIL, WHATSAPP } from "@/lib/site";

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
  const bgClass = variant === "deep" ? "bg-[oklch(0.09_0.025_255)]" : "bg-flow-text";
  const borderTopClass =
    variant === "deep" ? "border-t border-[oklch(0.20_0.02_255)]" : "border-t border-[oklch(0.28_0.02_260)]";
  const bottomBorderClass =
    variant === "deep" ? "border-[oklch(0.20_0.02_255)]" : "border-[oklch(0.25_0.02_255)]";
  const pendingColor = variant === "deep" ? "text-[oklch(0.45_0.03_255)]" : "text-[oklch(0.5_0.03_255)]";
  const copyColor = pendingColor;

  return (
    <footer
      className={`${borderTopClass} ${bgClass} px-[var(--space-md)] py-[var(--space-xl)] pb-[var(--space-lg)] text-[oklch(0.93_0.01_255)]`}
      aria-label="Pie de página"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-[var(--space-lg)] md:grid-cols-[2fr_1fr_1fr] md:gap-[var(--space-xl)]">
        <div>
          <p className="font-display mb-[var(--space-sm)] text-2xl font-semibold italic text-white">Flow Studio</p>
          <p className="max-w-[28ch] font-body text-sm leading-relaxed text-[oklch(0.65_0.03_255)]">{tagline}</p>
        </div>

        <nav aria-label="Mapa del sitio">
          <p className="font-heading mb-[var(--space-md)] text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[oklch(0.55_0.03_255)]">
            Navegación
          </p>
          <ul className="flex flex-col gap-[var(--space-xs)]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-body text-sm text-[oklch(0.72_0.03_255)] transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-heading mb-[var(--space-md)] text-[0.7rem] font-bold uppercase tracking-[0.12em] text-[oklch(0.55_0.03_255)]">
            Contacto
          </p>
          <ul className="flex flex-col gap-[var(--space-xs)]">
            <li>
              <a
                href={WHATSAPP.advisor}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-[oklch(0.72_0.03_255)] transition-colors hover:text-white"
                aria-label="WhatsApp de Flow Studio"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL}`} className="font-body text-sm text-[oklch(0.72_0.03_255)] transition-colors hover:text-white">
                Correo electrónico
              </a>
            </li>
            <li>
              <span className={`font-body text-sm ${pendingColor}`}>Instagram (próximamente)</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={`mx-auto mt-[var(--space-xl)] flex max-w-[1200px] flex-wrap items-center justify-between gap-[var(--space-sm)] border-t ${bottomBorderClass} pt-[var(--space-md)] max-md:flex-col max-md:items-start`}
      >
        <p className={`font-body text-[0.8rem] ${copyColor}`}>&copy; 2026 Flow Studio. Todos los derechos reservados.</p>
        <p className={`font-body text-[0.8rem] ${copyColor}`}>México</p>
      </div>
    </footer>
  );
}
