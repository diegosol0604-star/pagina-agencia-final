"use client";

import Link from "next/link";
import { useState } from "react";
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

const panels = {
  antes: '"Contestas 50 mensajes a mano. Cada día. Repitiendo lo mismo. Tu tiempo vale más que eso."',
  despues:
    '"El bot responde, filtra y agenda. Tú llegas en la mañana y ves el resumen — sin haberte perdido nada."',
};

export function AutomatizacionesSection() {
  const [tab, setTab] = useState("antes");

  return (
    <section className="section-pad bg-bg" id="automatizaciones" aria-labelledby="auto-heading">
      <div className="section-inner">
        <FadeIn>
          <SectionLabel>Automatiza tu negocio</SectionLabel>
          <SectionHeading id="auto-heading">
            ¿Qué puedes automatizar
            <br />
            con Flow Studio?
          </SectionHeading>
          <p className="mb-[var(--space-xl)] max-w-[48ch] font-body text-[0.9375rem] leading-[1.7] text-flow-muted">
            Todo lo que te quita tiempo hoy, lo hacemos automático.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 items-start gap-[var(--space-2xl)] md:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-[var(--radius)] border border-flow-border bg-surface" role="tabpanel">
              <div className="flex border-b border-flow-border" role="tablist" aria-label="Comparación antes y después">
                {["antes", "despues"].map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="tab"
                    aria-selected={tab === key}
                    aria-controls={`panel-${key}`}
                    className={`flex-1 border-b-2 px-[var(--space-md)] py-[var(--space-sm)] font-body text-[0.8rem] font-medium uppercase tracking-[0.06em] transition-[color,border-color] ${
                      tab === key
                        ? "-mb-px border-flow-text text-flow-text"
                        : "border-transparent text-flow-muted"
                    }`}
                    onClick={() => setTab(key)}
                  >
                    {key === "antes" ? "Antes" : "Después"}
                  </button>
                ))}
              </div>
              <div
                id="panel-antes"
                className={`p-[var(--space-lg)] ${tab === "antes" ? "block" : "hidden"}`}
                role="tabpanel"
              >
                <p className="font-display text-[clamp(1.1rem,2vw,1.4rem)] italic leading-[1.5] text-flow-muted">{panels.antes}</p>
              </div>
              <div
                id="panel-despues"
                className={`p-[var(--space-lg)] ${tab === "despues" ? "block" : "hidden"}`}
                role="tabpanel"
              >
                <p className="font-display text-[clamp(1.1rem,2vw,1.4rem)] italic leading-[1.5] text-flow-text">{panels.despues}</p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delayMs={80} className="-mt-[calc(var(--space-2xl)*1.1)] self-start max-md:mt-0">
            <p className="font-heading mb-[var(--space-sm)] text-xs font-bold uppercase tracking-[0.1em] text-flow-muted">
              Algunos de nuestros sistemas
            </p>
            <div className="flex flex-col gap-[var(--space-md)]" aria-label="Lista de automatizaciones">
              {autoItems.map((item) => (
                <div key={item.text} className="flex items-start gap-3 border-b border-flow-border pb-[var(--space-sm)] last:border-0">
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
      </div>
    </section>
  );
}
