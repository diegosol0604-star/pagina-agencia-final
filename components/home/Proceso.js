import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";

const steps = [
  {
    num: "1",
    title: "Diagnóstico",
    desc: "Cuéntanos qué necesita tu negocio. Sin formularios complicados — solo una conversación.",
    delay: 0,
  },
  {
    num: "2",
    title: "Diseño",
    desc: "Creamos la estrategia o automatización ideal para ti, según tu industria y tu ritmo.",
    delay: 60,
  },
  {
    num: "3",
    title: "Implementación",
    desc: "Nosotros nos encargamos de todo. Tú solo revisas y apruebas antes de lanzar.",
    delay: 120,
  },
  {
    num: "4",
    title: "Acompañamiento",
    desc: "Tu negocio trabaja mejor desde el primer día, mientras te acompañamos en cada etapa.",
    delay: 180,
  },
];

export function Proceso() {
  return (
    <section className="section-pad border-t border-flow-border bg-bg" id="proceso" aria-labelledby="proceso-heading">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel>Cómo trabajamos</SectionLabel>
          <SectionHeading id="proceso-heading">
            Cuatro pasos,
            <br />
            <em>resultados reales.</em>
          </SectionHeading>
        </FadeIn>

        <FadeIn className="grid grid-cols-1 max-[480px]:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" role="list">
          {steps.map((step, i) => (
            <div
              key={step.num}
              role="listitem"
              className={`relative z-[1] border-flow-border p-[var(--space-lg)] px-[var(--space-md)] transition-colors hover:bg-surface ${i === 0 ? "sm:border-r" : ""} ${i === 1 ? "sm:border-r-0 lg:border-r" : ""} ${i === 2 ? "sm:border-r" : ""} ${i < 3 ? "max-sm:border-b" : ""}`}
              style={{ transitionDelay: `${step.delay}ms` }}
            >
              <div
                className="mb-[var(--space-md)] inline-flex h-12 w-12 items-center justify-center rounded-full border border-border-dark bg-bg font-display text-[1.1rem] font-semibold italic text-flow-text"
                aria-hidden="true"
              >
                {step.num}
              </div>
              <h3 className="font-heading mb-[var(--space-xs)] text-[0.9375rem] font-bold text-flow-text">{step.title}</h3>
              <p className="font-body text-[0.875rem] leading-[1.65] text-flow-muted">{step.desc}</p>
            </div>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
