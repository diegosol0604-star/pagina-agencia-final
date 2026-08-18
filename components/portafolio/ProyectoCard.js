import { ArrowRightIcon } from "@/components/icons/WhatsAppIcon";
import { ScreenshotFrame } from "./ScreenshotFrame";

/**
 * Tarjeta de proyecto del portafolio.
 * `variant="sitio"`   → CTA "Visitar sitio" (abre el sitio real del cliente).
 * `variant="sistema"` → CTA "Ver demo" + badge de solo lectura.
 */
export function ProyectoCard({ proyecto, variant = "sitio" }) {
  const esSistema = variant === "sistema";
  const ctaLabel = esSistema ? "Probar demo" : "Visitar sitio";
  const ctaAria = esSistema
    ? `Abrir el demo interactivo de ${proyecto.nombre} en una pestaña nueva`
    : `Visitar el sitio web de ${proyecto.nombre} en una pestaña nueva`;
  const disponible = Boolean(proyecto.url);

  return (
    <article
      className="group flex w-full flex-col bg-surface p-[var(--space-lg)] transition-colors hover:bg-surface-2"
      aria-label={`Proyecto: ${proyecto.nombre}`}
    >
      {disponible ? (
        <a
          href={proyecto.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-[var(--space-md)] block rounded-[var(--radius)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-accent"
          tabIndex={-1}
          aria-hidden="true"
        >
          <ScreenshotFrame src={proyecto.image} alt={proyecto.alt} label={proyecto.giro} />
        </a>
      ) : (
        <div className="mb-[var(--space-md)]">
          <ScreenshotFrame src={proyecto.image} alt={proyecto.alt} label={proyecto.giro} />
        </div>
      )}

      <div className="mb-[var(--space-sm)] flex flex-wrap items-center gap-2">
        <span className="inline-block rounded-[2px] bg-teal-light px-2.5 py-0.5 font-body text-[0.65rem] font-medium uppercase tracking-[0.12em] text-teal">
          {proyecto.giro}
        </span>
        {esSistema && (
          <span className="inline-block rounded-[2px] border border-flow-border px-2.5 py-0.5 font-body text-[0.65rem] font-medium uppercase tracking-[0.12em] text-flow-muted">
            Demo interactivo
          </span>
        )}
      </div>

      <h3 className="font-heading mb-[var(--space-xs)] text-base font-bold leading-tight text-flow-text">
        {proyecto.nombre}
      </h3>

      {proyecto.features?.length > 0 && (
        <ul className="mb-[var(--space-sm)] flex flex-col gap-1.5" aria-label={`Funciones de ${proyecto.nombre}`}>
          {proyecto.features.map((feature) => (
            <li
              key={feature}
              className="flex items-baseline gap-2 font-body text-[0.825rem] text-flow-muted before:text-xl before:leading-none before:text-teal before:content-['·']"
            >
              {feature}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-[var(--space-sm)]">
        {disponible ? (
          <a
            href={proyecto.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border-b border-accent pb-px font-body text-[0.825rem] font-medium text-accent transition-colors hover:border-accent-hover hover:text-accent-hover"
            aria-label={ctaAria}
          >
            {ctaLabel}
            <ArrowRightIcon size={12} />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 font-body text-[0.825rem] font-medium text-flow-muted">
            Próximamente
          </span>
        )}
      </div>
    </article>
  );
}
