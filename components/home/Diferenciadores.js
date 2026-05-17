import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";

const items = [
  "Soluciones pensadas para negocios mexicanos",
  "Combinamos marketing + tecnología en un solo lugar",
  "Sistemas que funcionan, no solo promesas",
  "Atención personalizada — resolvemos todas tus dudas",
  "Te explicamos todo en lenguaje simple, sin tecnicismos",
  "Trabajamos contigo desde el día uno",
];

const stats = [
  { num: "+3×", label: "Más consultas atendidas con chatbot vs. atención manual", aria: "Más de 3 veces" },
  { num: "100%", label: "Transparencia en cada decisión de tu proyecto" },
  { num: "5", label: "Servicios especializados en un solo equipo" },
  { num: "24/7", label: "Chatbots activos para tu negocio, sin descanso", aria: "24 horas al día, 7 días a la semana" },
];

export function Diferenciadores() {
  return (
    <section className="section-pad bg-surface" id="diferenciadores" aria-labelledby="dif-heading">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel>¿Por qué nosotros?</SectionLabel>
          <SectionHeading id="dif-heading">
            No solo ofrecemos estrategias,
            <br />
            <em>también te ahorramos tiempo.</em>
          </SectionHeading>
        </FadeIn>

        <FadeIn className="grid grid-cols-1 items-start gap-[var(--space-2xl)] md:grid-cols-2">
          <ul className="flex flex-col" aria-label="Diferenciadores de Flow Studio">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-baseline gap-[var(--space-sm)] border-b border-flow-border py-[var(--space-md)] font-body text-[0.9375rem] leading-normal text-flow-text before:shrink-0 before:font-display before:text-teal before:content-['—']"
              >
                {item}
              </li>
            ))}
          </ul>

          <div
            className="ml-[20%] mt-[-10.5rem] flex min-h-[340px] w-[85%] flex-col justify-between rounded-[10px] bg-surface-2 px-[var(--space-xl)] py-[var(--space-md)] max-md:ml-0 max-md:mt-0 max-md:min-h-0 max-md:w-full"
            aria-label="Estadísticas de Flow Studio"
          >
            {stats.map((stat, i) => (
              <div
                key={stat.num}
                className={`flex items-baseline gap-[var(--space-md)] py-[var(--space-lg)] ${i < stats.length - 1 ? "border-b border-flow-border" : ""}`}
              >
                <p className="font-display min-w-[4.5rem] shrink-0 text-[clamp(2rem,3.5vw,2.75rem)] font-semibold italic leading-none text-flow-text" aria-label={stat.aria}>
                  {stat.num}
                </p>
                <p className="font-body text-[0.8rem] leading-normal text-flow-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
