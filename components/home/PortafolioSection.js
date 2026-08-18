import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons/WhatsAppIcon";
import { ScreenshotFrame } from "@/components/portafolio/ScreenshotFrame";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { SISTEMAS, SITIOS } from "@/lib/portafolio-data";

const destacados = [...SITIOS, ...SISTEMAS].slice(0, 3);

export function PortafolioSection() {
  return (
    <section className="section-pad bg-bg" id="portafolio" aria-labelledby="portafolio-heading">
      <div className="section-inner">
        <FadeIn className="mb-[var(--space-xl)]">
          <SectionLabel>Portafolio</SectionLabel>
          <SectionHeading id="portafolio-heading">
            Trabajo que ya está
            <br />
            <em>en línea.</em>
          </SectionHeading>
          <p className="max-w-[48ch] font-body text-[0.9375rem] leading-[1.7] text-flow-muted">
            Sitios web y sistemas funcionando hoy para negocios reales.
          </p>
        </FadeIn>

        <FadeIn delayMs={80}>
          <div className="grid grid-cols-1 gap-[var(--space-md)] sm:grid-cols-2 lg:grid-cols-3">
            {destacados.map((proyecto) => (
              <div key={proyecto.slug}>
                <ScreenshotFrame src={proyecto.image} alt={proyecto.alt} label={proyecto.giro} />
                <p className="mt-[var(--space-sm)] font-body text-[0.7rem] font-medium uppercase tracking-[0.12em] text-teal">
                  {proyecto.giro}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/portafolio"
            className="mt-[var(--space-lg)] inline-flex items-center gap-1.5 border-b border-accent pb-px font-body text-[0.9rem] font-medium text-accent transition-colors hover:border-accent-hover hover:text-accent-hover"
            aria-label="Ver el portafolio completo de Flow Studio"
          >
            Ver portafolio completo
            <ArrowRightIcon />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
