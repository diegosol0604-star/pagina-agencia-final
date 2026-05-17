import { ArrowRightIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP } from "@/lib/site";
import { AutoIcon } from "./AutoIcons";

export function TipoCard({ tipo }) {
  const waUrl = WHATSAPP[tipo.waKey];

  return (
    <article className="bg-bg p-[var(--space-xl)] px-[var(--space-lg)] transition-colors hover:bg-surface" role="listitem">
      <span className="mb-[var(--space-md)] inline-block rounded-[2px] bg-teal-light px-2.5 py-0.5 font-body text-[0.65rem] font-medium uppercase tracking-[0.12em] text-teal">
        {tipo.tag}
      </span>
      <AutoIcon name={tipo.icon} className="mb-[var(--space-md)] h-10 w-10 text-accent" />
      <h3 className="font-heading mb-[var(--space-xs)] text-base font-bold leading-tight text-flow-text">{tipo.title}</h3>
      <p className="mb-[var(--space-md)] font-body text-sm leading-[1.7] text-flow-muted">{tipo.desc}</p>
      <ul className="flex flex-col gap-1.5" aria-label={tipo.featuresLabel}>
        {tipo.features.map((feature) => (
          <li
            key={feature}
            className="flex items-baseline gap-2 font-body text-[0.825rem] text-flow-muted before:text-xl before:leading-none before:text-teal before:content-['·']"
          >
            {feature}
          </li>
        ))}
      </ul>
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-[var(--space-md)] inline-flex items-center gap-1.5 border-b border-accent pb-px font-body text-[0.825rem] font-medium text-accent transition-colors hover:border-accent-hover hover:text-accent-hover"
        aria-label={tipo.waAria}
      >
        Cotizar
        <ArrowRightIcon size={12} />
      </a>
    </article>
  );
}
