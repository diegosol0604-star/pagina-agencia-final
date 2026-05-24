import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { ArrowRightIcon } from "@/components/icons/WhatsAppIcon";

const autoItems = [
  {
    icon: (
      <svg className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    text: "Chatbots en WhatsApp, Instagram & TikTok — atienden 24/7",
  },
  {
    icon: (
      <svg className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
    text: "Agendamiento de citas automático desde WhatsApp",
  },
  {
    icon: (
      <svg className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    text: "CRM automático — seguimiento de clientes sin hojas de Excel",
  },
  {
    icon: (
      <svg className="mt-0.5 h-[18px] w-[18px] shrink-0 text-teal" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    text: "Facturación y flujos de seguimiento automáticos",
  },
];

export function AutomatizacionesSection() {
  return (
    <section className="section-pad section-blue" id="automatizaciones" aria-labelledby="auto-heading">
      <div className="section-inner">
        <FadeIn className="mb-[var(--space-xl)]">
          <SectionLabel>Automatiza tu negocio</SectionLabel>
          <SectionHeading id="auto-heading">
            ¿Qué puedes automatizar
            <br />
            con Flow Studio?
          </SectionHeading>
          <p className="mt-[var(--space-sm)] max-w-[48ch] font-body text-[0.9375rem] leading-[1.7] text-flow-muted">
            Todo lo que te quita tiempo hoy, lo hacemos automático.
          </p>
        </FadeIn>

        <FadeIn delayMs={80}>
          <p className="font-heading mb-[var(--space-md)] text-xs font-bold uppercase tracking-[0.1em] text-flow-muted">
            Algunos de nuestros sistemas
          </p>
          <div
            className="grid grid-cols-1 gap-x-[var(--space-2xl)] gap-y-0 sm:grid-cols-2"
            aria-label="Lista de automatizaciones"
          >
            {autoItems.map((item) => (
              <div
                key={item.text}
                className="flex items-start gap-3 border-b border-flow-border py-[var(--space-md)]"
              >
                {item.icon}
                <p className="font-body text-[0.9rem] leading-normal text-flow-text">{item.text}</p>
              </div>
            ))}
          </div>
          <Link
            href="/automatizaciones"
            className="mt-[var(--space-lg)] inline-flex items-center gap-1.5 border-b border-accent pb-px font-body text-[0.9rem] font-medium text-accent transition-colors hover:border-accent-hover hover:text-accent-hover"
            aria-label="Ver todas las automatizaciones de Flow Studio"
          >
            Ver más automatizaciones
            <ArrowRightIcon />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
