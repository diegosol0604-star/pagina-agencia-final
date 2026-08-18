import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { SISTEMAS } from "@/lib/portafolio-data";
import { ProyectoCard } from "./ProyectoCard";

export function SistemasGrid() {
  return (
    <section className="section-pad section-blue" id="sistemas" aria-labelledby="sistemas-heading">
      <div className="section-inner">
        <FadeIn className="mb-[var(--space-xl)]">
          <SectionLabel>Sistemas a la medida</SectionLabel>
          <SectionHeading id="sistemas-heading">
            Software hecho
            <br />
            para tu <em>operación</em>.
          </SectionHeading>
          <p className="max-w-[52ch] font-body text-[0.9375rem] leading-[1.7] text-flow-muted">
            Cuando una hoja de Excel ya no alcanza, construimos el sistema. Entra y úsalo de verdad: registra una venta,
            agrega un producto, mueve lo que quieras. Son demos con datos de ejemplo, así que no hay nada que romper.
          </p>
        </FadeIn>

        <div className="mx-auto grid max-w-[860px] grid-cols-1 gap-px bg-flow-border sm:grid-cols-2">
          {SISTEMAS.map((sistema, i) => (
            <FadeIn key={sistema.slug} delayMs={i * 80} className="flex">
              <ProyectoCard proyecto={sistema} variant="sistema" />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
