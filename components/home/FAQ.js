"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { FAQ_ITEMS } from "@/lib/faq";
import { ArrowRightIcon } from "@/components/icons/WhatsAppIcon";

export function FAQ() {
  const [activeId, setActiveId] = useState(FAQ_ITEMS[0].id);

  return (
    <section className="section-pad bg-bg" id="faq" aria-labelledby="faq-heading">
      <div className="mx-auto grid min-h-[560px] max-w-[1200px] grid-cols-1 md:grid-cols-2 max-md:min-h-0">
        <div className="bg-bg pr-0 md:pr-[var(--space-xl)]">
          <FadeIn>
            <SectionLabel>Dudas frecuentes</SectionLabel>
            <SectionHeading id="faq-heading">
              Preguntas
              <br />
              <em>frecuentes</em>
            </SectionHeading>
          </FadeIn>

          <FadeIn className="mt-[var(--space-lg)]">
            {FAQ_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={isActive}
                  className={`relative flex w-full items-center justify-between gap-[var(--space-md)] border-b border-flow-border py-[var(--space-md)] text-left font-body text-[0.9rem] transition-colors before:absolute before:bottom-0 before:left-[calc(-1*var(--space-md))] before:top-0 before:w-0.5 before:origin-center before:bg-accent before:transition-transform hover:text-flow-text focus-visible:rounded-[var(--radius)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    isActive
                      ? "font-medium text-flow-text before:scale-y-100"
                      : "font-normal text-flow-muted before:scale-y-0"
                  }`}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.question}
                  <ArrowRightIcon
                    size={16}
                    className={`shrink-0 transition-[color,transform] ${isActive ? "translate-x-1 text-accent" : "text-border-dark"}`}
                  />
                </button>
              );
            })}
          </FadeIn>
        </div>

        <div className="relative overflow-hidden rounded-[var(--radius)] border border-flow-border bg-bg max-md:min-h-[320px]" aria-live="polite">
          {FAQ_ITEMS.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className={`absolute inset-0 flex flex-col justify-center px-[var(--space-md)] py-[var(--space-lg)] transition-[opacity,transform] md:px-[var(--space-2xl)] md:pl-[var(--space-xl)] md:pr-[var(--space-2xl)] ${
                activeId === item.id
                  ? "pointer-events-auto translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-[18px] opacity-0"
              }`}
            >
              <p className="font-display mb-[var(--space-md)] text-5xl font-normal italic leading-none text-flow-border" aria-hidden="true">
                {item.num}
              </p>
              <p className="font-display mb-[var(--space-lg)] text-[clamp(1.4rem,2.8vw,2.25rem)] font-normal italic leading-[1.2] tracking-[-0.01em] text-flow-text">
                {item.question}
              </p>
              <p className="max-w-[52ch] font-body text-[0.9375rem] leading-[1.8] text-flow-muted">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
