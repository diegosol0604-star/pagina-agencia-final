import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading, SectionLabel } from "@/components/ui/SectionHeader";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { EMAIL, WHATSAPP } from "@/lib/site";
import { ParallaxOrb } from "@/components/ui/ParallaxOrb";

export function Contacto() {
  return (
    <section className="section-pad relative overflow-hidden section-blue" id="contacto" aria-labelledby="contacto-heading">
      <ParallaxOrb className="h-[450px] w-[450px] right-[5%] top-[5%] bg-[radial-gradient(ellipse_at_center,oklch(0.60_0.20_264/0.20)_0%,transparent_70%)]" />
      <div className="section-inner">
        <div className="grid grid-cols-1 items-start gap-[var(--space-2xl)] md:grid-cols-2">
          <FadeIn>
            <SectionLabel>Hablemos</SectionLabel>
            <SectionHeading id="contacto-heading" className="text-white [&_em]:text-white">
              ¿Listo para
              <br />
              <em>crecer?</em>
            </SectionHeading>
            <p className="mb-[var(--space-lg)] font-body text-base leading-[1.7] text-flow-muted">
              Cuéntanos qué necesita tu negocio y te decimos cómo podemos ayudarte. Sin compromiso, sin tecnicismos.
            </p>
            <a
              href={WHATSAPP.main}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-fill-dark inline-flex items-center gap-2.5 rounded-[var(--radius)] border border-white/30 px-7 py-4 font-body text-[0.9375rem] font-medium text-white transition-[background,transform] hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
              style={{ backgroundImage: "linear-gradient(to right, #0a0d1f 50%, rgba(255,255,255,0.18) 50%)" }}
              aria-label="Abrir WhatsApp para contactar a Flow Studio"
            >
              <WhatsAppIcon size={20} />
              Escríbenos por WhatsApp
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-[var(--space-md)] block w-fit border-b border-white/30 pb-px font-body text-sm text-flow-muted transition-colors hover:text-white"
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
              autoComplete="off"
              aria-label="Formulario de contacto Flow Studio"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="nombre" className="font-body text-[0.8rem] font-medium tracking-[0.04em] text-white/70">
                  Nombre *
                </label>
                <input
                  className="w-full rounded-[var(--radius)] border border-white/20 bg-white px-4 py-3 font-body text-[0.9375rem] text-[#0a0d1f] transition-[border-color] placeholder:text-gray-400 focus:border-white focus:outline-none"
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  autoComplete="off"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="negocio" className="font-body text-[0.8rem] font-medium tracking-[0.04em] text-white/70">
                  Nombre del negocio *
                </label>
                <input
                  className="w-full rounded-[var(--radius)] border border-white/20 bg-white px-4 py-3 font-body text-[0.9375rem] text-[#0a0d1f] transition-[border-color] placeholder:text-gray-400 focus:border-white focus:outline-none"
                  type="text"
                  id="negocio"
                  name="negocio"
                  required
                  autoComplete="off"
                  placeholder="¿Cómo se llama tu negocio?"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="servicio" className="font-body text-[0.8rem] font-medium tracking-[0.04em] text-white/70">
                  Servicio de interés
                </label>
                <div className="relative">
                  <select
                    className="w-full cursor-pointer appearance-none rounded-[var(--radius)] border border-white/20 bg-white px-4 py-3 pr-10 font-body text-[0.9375rem] text-[#0a0d1f] transition-[border-color] focus:border-white focus:outline-none"
                    id="servicio"
                    name="servicio"
                    autoComplete="off"
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
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-1/2 h-2 w-2 -translate-y-1/2 rotate-45 border-b border-r border-[#888]"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="mensaje" className="font-body text-[0.8rem] font-medium tracking-[0.04em] text-white/70">
                  Mensaje
                </label>
                <textarea
                  className="min-h-[100px] w-full resize-y rounded-[var(--radius)] border border-white/20 bg-white px-4 py-3 font-body text-[0.9375rem] text-[#0a0d1f] transition-[border-color] placeholder:text-gray-400 focus:border-white focus:outline-none"
                  id="mensaje"
                  name="mensaje"
                  autoComplete="off"
                  placeholder="Cuéntanos brevemente qué necesitas..."
                />
              </div>
              <button
                type="submit"
                className="btn-fill-dark w-full cursor-pointer rounded-[var(--radius)] border border-white/30 px-7 py-3.5 font-body text-[0.9375rem] font-medium text-white transition-[background,transform] hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-white"
                style={{ backgroundImage: "linear-gradient(to right, #0a0d1f 50%, rgba(255,255,255,0.18) 50%)" }}
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
