import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { TIPOS } from "@/lib/automatizaciones-data";
import { TipoCard } from "./TipoCard";

export function TiposGrid() {
  return (
    <section
      className="section-pad bg-bg"
      id="tipos"
      aria-labelledby="tipos-heading"
      style={{ position: "relative", minHeight: "auto", paddingBottom: "clamp(5rem, 10vw, 8rem)" }}
    >
      <div className="section-inner">
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

        <FadeIn className="mt-[var(--space-xl)] grid grid-cols-1 gap-px bg-flow-border max-[560px]:grid-cols-1 min-[561px]:grid-cols-2 min-[901px]:grid-cols-3" role="list">
          {TIPOS.map((tipo) => (
            <TipoCard key={tipo.title} tipo={tipo} />
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
