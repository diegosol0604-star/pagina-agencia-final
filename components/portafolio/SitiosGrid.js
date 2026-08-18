import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { SITIOS } from "@/lib/portafolio-data";
import { ProyectoCard } from "./ProyectoCard";

export function SitiosGrid() {
  return (
    <section className="section-pad section-dwell bg-bg" id="sitios" aria-labelledby="sitios-heading">
      <div className="section-inner">
        <FadeIn className="mb-[var(--space-xl)]">
          <SectionLabel>Sitios web</SectionLabel>
          <SectionHeading id="sitios-heading">
            Páginas que <em>trabajan</em>,
            <br />
            no solo se ven bien.
          </SectionHeading>
          <p className="max-w-[52ch] font-body text-[0.9375rem] leading-[1.7] text-flow-muted">
            Cada sitio está en línea ahora mismo. Haz clic y compruébalo.
          </p>
        </FadeIn>

        <div
          className="mx-auto grid max-w-[860px] grid-cols-1 gap-px bg-flow-border sm:grid-cols-2"
        >
          {SITIOS.map((sitio, i) => (
            <FadeIn key={sitio.slug} delayMs={i * 80} className="flex">
              <ProyectoCard proyecto={sitio} variant="sitio" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
