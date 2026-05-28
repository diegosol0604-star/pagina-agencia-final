import { FadeIn } from "@/components/ui/FadeIn";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP } from "@/lib/site";

export function FooterCta() {
  return (
    <section className="section-blue px-[var(--space-md)] py-[var(--space-2xl)] text-center" aria-label="Llamada a la acción final">
      <FadeIn className="mx-auto max-w-[680px]">
        <p className="mb-[var(--space-md)] font-body text-xs font-medium uppercase tracking-[0.12em] text-flow-muted">
          Haz crecer tu negocio
        </p>
        <h2 id="footer-cta" className="font-display mb-[var(--space-sm)] text-[clamp(2rem,4.5vw,3.5rem)] font-normal italic leading-[1.1] tracking-[-0.02em] text-white">
          ¿Listo para ahorrar tiempo y dinero?
        </h2>
        <p className="mb-[var(--space-xl)] font-body text-base leading-[1.7] text-flow-muted">
          Cuéntanos qué proceso quieres automatizar. Sin compromiso, sin tecnicismos. Analizamos tu caso y te decimos
          cómo podemos ayudarte.
        </p>
        <a
          href={WHATSAPP.autoHelp}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-fill-dark inline-flex items-center gap-2.5 rounded-[var(--radius)] border border-white/30 px-8 py-4 font-body text-base font-medium text-white transition-[background,transform] hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
          style={{ backgroundImage: "linear-gradient(to right, #0a0d1f 50%, rgba(255,255,255,0.18) 50%)" }}
          aria-label="Contactar a Flow Studio por WhatsApp para automatizar tu negocio"
        >
          <WhatsAppIcon size={20} />
          Automatizar mi negocio
        </a>
      </FadeIn>
    </section>
  );
}
