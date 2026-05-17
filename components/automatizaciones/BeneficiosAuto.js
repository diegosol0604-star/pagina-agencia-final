import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { BENEFICIOS } from "@/lib/automatizaciones-data";
import { AutoIcon } from "./AutoIcons";

export function BeneficiosAuto() {
  return (
    <section className="section-pad bg-bg" id="beneficios" aria-labelledby="beneficios-heading">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel>Por qué automatizar</SectionLabel>
          <SectionHeading id="beneficios-heading">
            Lo que ganas cuando
            <br />
            tu negocio <em>trabaja solo</em>
          </SectionHeading>
        </FadeIn>

        <FadeIn
          className="mt-[var(--space-xl)] grid grid-cols-1 gap-px bg-flow-border max-[540px]:grid-cols-1 min-[541px]:grid-cols-2 min-[901px]:grid-cols-3"
          role="list"
        >
          {BENEFICIOS.map((b) => (
            <div key={b.title} className="bg-bg p-[var(--space-xl)] px-[var(--space-lg)] transition-colors hover:bg-surface" role="listitem">
              <AutoIcon name={b.icon} />
              <h3 className="font-heading mb-[var(--space-xs)] text-[0.9375rem] font-bold leading-snug text-flow-text">{b.title}</h3>
              <p className="font-body text-sm leading-[1.7] text-flow-muted">{b.desc}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
