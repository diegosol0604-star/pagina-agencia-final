import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeader";
import { MEDIDA_EXAMPLES, MEDIDA_STEPS } from "@/lib/automatizaciones-data";

export function Medida() {
  return (
    <section className="section-pad section-blue" id="medida" aria-labelledby="medida-heading">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-[var(--space-2xl)] md:grid-cols-2">
          <FadeIn>
            <span
              className="mb-[var(--space-md)] inline-flex items-center gap-2 rounded-[2px] bg-[oklch(1_0_0/0.15)] px-3.5 py-1.5 font-body text-xs font-medium uppercase tracking-[0.1em] text-white"
              aria-label="Servicio personalizado"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              A la medida
            </span>
            <SectionHeading id="medida-heading">
              ¿Tienes un proceso
              <br />
              que quieres <em>automatizar?</em>
            </SectionHeading>
            <p className="mb-[var(--space-md)] font-body text-base leading-[1.8] text-flow-muted">
              No todas las automatizaciones son iguales. Si tienes un flujo de trabajo específico de tu negocio — algo
              único, complejo, o que no existe en el mercado — lo analizamos y si se puede desarrollar, lo construimos
              para ti.
            </p>
            <div className="mb-[var(--space-xl)] flex flex-col gap-3" aria-label="Ejemplos de automatizaciones a la medida">
              {MEDIDA_EXAMPLES.map((example) => (
                <div
                  key={example}
                  className="flex items-center gap-[var(--space-sm)] rounded-[var(--radius)] border-l-2 border-blue bg-bg px-[var(--space-md)] py-3 font-body text-sm text-[oklch(0.10_0.015_264)]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {example}
                </div>
              ))}
            </div>
            <p className="border-t border-flow-border pt-[var(--space-md)] font-body text-[0.825rem] italic leading-relaxed text-flow-muted">
              La cotización es personalizada — el precio depende del volumen de información a manejar y la complejidad
              del sistema. Escríbenos y lo platicamos sin compromiso.
            </p>
          </FadeIn>

          <FadeIn delayMs={80}>
            <div className="rounded-[var(--radius)] border border-flow-border bg-bg p-[var(--space-xl)]">
              <p className="font-heading mb-[var(--space-md)] text-xs font-bold uppercase tracking-[0.1em] text-flow-muted">
                ¿Cómo funciona el proceso?
              </p>
              <div className="flex flex-col gap-[var(--space-sm)]">
                {MEDIDA_STEPS.map((step) => (
                  <div key={step.num} className="flex items-start gap-[var(--space-sm)]">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white font-display text-sm font-semibold italic text-blue"
                      aria-hidden="true"
                    >
                      {step.num}
                    </div>
                    <p className="pt-1 font-body text-[0.8rem] leading-[1.8] text-flow-muted">
                      <strong className="font-medium text-flow-text">{step.lead}</strong>
                      {step.rest}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
