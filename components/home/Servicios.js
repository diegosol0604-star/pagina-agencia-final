import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";

const services = [
  {
    num: "01",
    span: "col-span-6 max-[900px]:col-span-12",
    icon: (
      <svg className="mb-[var(--space-md)] h-9 w-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: "Landing Pages & Sitios Web",
    desc: "Páginas que convierten visitas en clientes. Diseño, velocidad y copy al servicio de tu objetivo.",
    delay: 0,
  },
  {
    num: "02",
    span: "col-span-6 max-[900px]:col-span-12",
    icon: (
      <svg className="mb-[var(--space-md)] h-9 w-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Automatizaciones",
    desc: "Tu negocio trabajando solo mientras tú atiendes lo que importa. Chatbots, CRM, flujos y más.",
    delay: 80,
  },
  {
    num: "03",
    span: "col-span-4 max-[900px]:col-span-6 max-[540px]:col-span-12",
    icon: (
      <svg className="mb-[var(--space-md)] h-9 w-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    title: "Campañas de Marketing",
    desc: "Meta Ads y Google Ads para atraer clientes que sí compran. Sin promesas vacías.",
    delay: 120,
  },
  {
    num: "04",
    span: "col-span-4 max-[900px]:col-span-6 max-[540px]:col-span-12",
    icon: (
      <svg className="mb-[var(--space-md)] h-9 w-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "Branding",
    desc: "Identidad visual que te hace memorable: logo, colores y tipografía que comunican quién eres.",
    delay: 160,
  },
  {
    num: "05",
    span: "col-span-4 max-[900px]:col-span-6 max-[540px]:col-span-12",
    icon: (
      <svg className="mb-[var(--space-md)] h-9 w-9 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: "SEO",
    desc: "Aparece primero cuando te buscan. Tráfico orgánico que no para de crecer.",
    delay: 200,
  },
];

export function Servicios() {
  return (
    <section className="section-pad bg-surface" id="servicios" aria-labelledby="servicios-heading">
      <div className="section-inner">
        <FadeIn className="mb-[var(--space-xl)] flex flex-wrap items-end justify-between gap-[var(--space-md)]">
          <div>
            <SectionLabel>Lo que hacemos</SectionLabel>
            <SectionHeading id="servicios-heading">
              Servicios que <em>ofrecemos</em>
            </SectionHeading>
          </div>
        </FadeIn>

        <div className="grid grid-cols-12 gap-px bg-flow-border max-[540px]:gap-0" role="list">
          {services.map((s) => (
            <FadeIn
              key={s.num}
              delayMs={s.delay}
              className={`relative overflow-hidden bg-surface p-[var(--space-xl)] px-[var(--space-lg)] transition-[background,transform] hover:bg-bg ${s.span}`}
            >
              <article role="listitem">
                <span className="font-display absolute right-[var(--space-md)] top-[var(--space-md)] text-5xl font-normal italic leading-none text-flow-border" aria-hidden="true">
                  {s.num}
                </span>
                {s.icon}
                <h3 className="font-heading mb-[var(--space-xs)] text-[clamp(1rem,1.8vw,1.2rem)] font-bold leading-[1.25] text-flow-text">
                  {s.title}
                </h3>
                <p className="font-body text-[0.9rem] leading-[1.65] text-flow-muted">{s.desc}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
