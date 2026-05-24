import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { FLOW_STEPS } from "@/lib/automatizaciones-data";
import { FlowStepIcon } from "./AutoIcons";

export function QueSon() {
  return (
    <section className="section-pad section-blue" id="que-son" aria-labelledby="qs-heading">
      <div className="section-inner">
        <div className="grid grid-cols-1 items-center gap-[var(--space-2xl)] md:grid-cols-2">
          <FadeIn>
            <SectionLabel>El concepto</SectionLabel>
            <SectionHeading id="qs-heading">
              ¿Qué es una
              <br />
              <em>automatización?</em>
            </SectionHeading>
            <div className="font-body text-base leading-[1.8] text-flow-muted [&_p]:mb-[var(--space-md)] [&_p:last-child]:mb-0 [&_strong]:font-medium [&_strong]:text-flow-text">
              <p>
                Una automatización es un <strong>sistema que realiza tareas repetitivas por ti</strong>, sin
                intervención manual. Cuando alguien te manda un mensaje, el sistema responde. Cuando alguien quiere
                agendar una cita, el sistema la registra.
              </p>
              <p>
                No es magia — es tecnología bien configurada para tu negocio.{" "}
                <strong>Tú defines las reglas, nosotros construimos el sistema.</strong>
              </p>
              <p>
                El resultado: tu negocio atiende clientes, genera leads y gestiona operaciones mientras tú duermes,
                estás en reuniones, o simplemente estás haciendo otra cosa.
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={80}>
            <div
              className="flex flex-col gap-[var(--space-md)] rounded-[var(--radius)] border border-flow-border bg-bg p-[var(--space-xl)]"
              role="img"
              aria-label="Diagrama de flujo de una automatización"
            >
              {FLOW_STEPS.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-center gap-[var(--space-md)] rounded-[var(--radius)] bg-surface px-[var(--space-md)] py-[var(--space-sm)] font-body text-sm text-flow-text">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-light">
                      <FlowStepIcon name={step.icon} />
                    </div>
                    <span>{step.label}</span>
                  </div>
                  {step.arrow && (
                    <p
                      className="flex items-center gap-2 pl-[var(--space-md)] font-body text-xs uppercase tracking-[0.06em] text-flow-muted before:block before:h-6 before:w-px before:bg-border-dark"
                      aria-hidden="true"
                    >
                      {step.arrow}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
