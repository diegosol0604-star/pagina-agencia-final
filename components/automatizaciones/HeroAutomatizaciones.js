import Link from "next/link";
import { BtnPrimary } from "@/components/ui/Buttons";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP } from "@/lib/site";

export function HeroAutomatizaciones() {
  return (
    <section
      className="relative overflow-hidden border-b border-flow-border px-[var(--space-md)] pb-[var(--space-xl)] pt-[var(--space-2xl)]"
      aria-label="Automatizaciones para tu negocio"
    >
      <div
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,oklch(0.85_0.08_175/0.20)_0%,transparent_0%),radial-gradient(ellipse_50%_40%_at_10%_90%,oklch(0.88_0.06_260/0.15)_0%,transparent_55%),var(--bg)]"
        aria-hidden="true"
      ></div>
      <div className="section-inner relative z-[1]">
        <div className="mb-[var(--space-lg)]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-body text-sm text-flow-muted transition-colors hover:text-flow-text"
            aria-label="Volver al inicio"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>
        </div>

        <span className="mb-[var(--space-md)] inline-block font-body text-[0.7rem] font-medium uppercase tracking-[0.14em] text-teal">
          Automatizaciones — Flow Studio
        </span>

        <h1 className="mb-[var(--space-md)] max-w-[18ch] font-display text-[clamp(2.75rem,6vw,5.5rem)] font-normal italic leading-[1.05] tracking-[-0.02em] text-flow-text [&_em]:not-italic [&_em]:text-teal">
          Tu negocio trabajando,
          <br />
          incluso cuando
          <br />
          <em>tú no estás.</em>
        </h1>

        <p className="mb-[var(--space-xl)] max-w-[52ch] font-body text-[clamp(1rem,1.8vw,1.15rem)] font-light leading-[1.75] text-flow-muted">
          Diseñamos sistemas automáticos que responden, filtran, agendan y gestionan — sin que tú tengas que estar
          presente. Menos trabajo repetitivo, más tiempo para lo que importa.
        </p>

        <BtnPrimary href={WHATSAPP.auto} ariaLabel="Automatizar mi negocio por WhatsApp" className="px-7 py-3.5">
          <WhatsAppIcon />
          Automatizar mi negocio
        </BtnPrimary>
      </div>
    </section>
  );
}
