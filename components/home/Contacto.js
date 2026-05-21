import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { EMAIL, WHATSAPP } from "@/lib/site";
import { ParallaxOrb } from "@/components/ui/ParallaxOrb";

export function Contacto() {
  return (
    <section className="section-pad relative overflow-hidden bg-flow-text" id="contacto" aria-labelledby="contacto-heading">
      <ParallaxOrb className="h-[450px] w-[450px] right-[5%] top-[5%] bg-[radial-gradient(ellipse_at_center,oklch(0.88_0.08_175/0.18)_0%,transparent_70%)]" />
      <div className="section-inner">
        <div className="grid grid-cols-1 items-start gap-[var(--space-2xl)] md:grid-cols-2">
          <FadeIn>
            <SectionLabel>Hablemos</SectionLabel>
            <SectionHeading id="contacto-heading" className="text-white [&_em]:text-bg">
              ¿Listo para
              <br />
              <em>crecer?</em>
            </SectionHeading>
            <p className="mb-[var(--space-lg)] font-body text-base leading-[1.7] text-[oklch(0.65_0.03_255)]">
              Cuéntanos qué necesita tu negocio y te decimos cómo podemos ayudarte. Sin compromiso, sin tecnicismos.
            </p>
            <a
              href={WHATSAPP.main}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 rounded-[var(--radius)] bg-bg px-7 py-4 font-body text-[0.9375rem] font-medium text-flow-text transition-[background,color,transform] hover:-translate-y-0.5 hover:bg-teal-light hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-teal"
              aria-label="Abrir WhatsApp para contactar a Flow Studio"
            >
              <WhatsAppIcon size={20} />
              Escríbenos por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-[var(--space-md)] block w-fit border-b border-[oklch(0.28_0.02_260)] pb-px font-body text-sm text-[oklch(0.55_0.03_255)] transition-colors hover:text-white"
            >
              {EMAIL}
            </a>
          </FadeIn>

          <FadeIn delayMs={80}>
            <form
              className="flex flex-col gap-[var(--space-md)]"
              action={`mailto:${EMAIL}`}
              method="POST"
              encType="text/plain"
              aria-label="Formulario de contacto Flow Studio"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="font-body text-[0.8rem] font-medium tracking-[0.04em] text-[oklch(0.6_0.03_255)]">
                  Nombre *
                </label>
                <input
                  className="w-full rounded-[var(--radius)] border border-[oklch(0.28_0.02_260)] bg-[oklch(0.2_0.02_260)] px-4 py-3 font-body text-[0.9375rem] text-white transition-[border-color] placeholder:text-[oklch(0.45_0.03_255)] focus:border-teal focus:outline-none"
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  autoComplete="name"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="negocio" className="font-body text-[0.8rem] font-medium tracking-[0.04em] text-[oklch(0.6_0.03_255)]">
                  Nombre del negocio *
                </label>
                <input
                  className="w-full rounded-[var(--radius)] border border-[oklch(0.28_0.02_260)] bg-[oklch(0.2_0.02_260)] px-4 py-3 font-body text-[0.9375rem] text-white transition-[border-color] placeholder:text-[oklch(0.45_0.03_255)] focus:border-teal focus:outline-none"
                  type="text"
                  id="negocio"
                  name="negocio"
                  required
                  placeholder="¿Cómo se llama tu negocio?"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="servicio" className="font-body text-[0.8rem] font-medium tracking-[0.04em] text-[oklch(0.6_0.03_255)]">
                  Servicio de interés
                </label>
                <select
                  className="w-full cursor-pointer appearance-none rounded-[var(--radius)] border border-[oklch(0.28_0.02_260)] bg-[oklch(0.2_0.02_260)] bg-[length:12px_8px] bg-[position:right_1rem_center] bg-no-repeat px-4 py-3 pr-10 font-body text-[0.9375rem] text-white transition-[border-color] focus:border-teal focus:outline-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23aaa' fill='none' stroke-width='1.5'/%3E%3C/svg%3E")`,
                  }}
                  id="servicio"
                  name="servicio"
                  defaultValue=""
                >
                  <option value="">Selecciona una opción</option>
                  <option value="campanas">Campañas de Marketing</option>
                  <option value="branding">Branding</option>
                  <option value="seo">SEO</option>
                  <option value="landing">Landing Page & Sitio Web</option>
                  <option value="automatizaciones">Automatizaciones & Chatbot</option>
                  <option value="platicar">No sé aún — quiero platicar</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="font-body text-[0.8rem] font-medium tracking-[0.04em] text-[oklch(0.6_0.03_255)]">
                  Mensaje
                </label>
                <textarea
                  className="min-h-[100px] w-full resize-y rounded-[var(--radius)] border border-[oklch(0.28_0.02_260)] bg-[oklch(0.2_0.02_260)] px-4 py-3 font-body text-[0.9375rem] text-white transition-[border-color] placeholder:text-[oklch(0.45_0.03_255)] focus:border-teal focus:outline-none"
                  id="mensaje"
                  name="mensaje"
                  placeholder="Cuéntanos brevemente qué necesitas..."
                />
              </div>
              <button
                type="submit"
                className="w-full cursor-pointer rounded-[var(--radius)] border-0 bg-bg px-7 py-3.5 font-body text-[0.9375rem] font-medium text-flow-text transition-[background,color,transform] hover:-translate-y-px hover:bg-teal-light hover:text-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-teal"
              >
                Enviar mensaje
              </button>
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
