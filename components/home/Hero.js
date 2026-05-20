import { BtnGhost, BtnPrimary } from "@/components/ui/Buttons";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP } from "@/lib/site";
import { Typewriter } from "./Typewriter";
import { HeroTitles } from "./HeroTitles";

export function Hero() {
  return (
    <section
      className="relative grid min-h-[96vh] grid-rows-[1fr_auto] overflow-hidden px-[var(--space-md)] pb-[var(--space-2xl)] pt-[var(--space-xl)] max-md:flex max-md:min-h-0 max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-[var(--space-lg)] max-md:py-[var(--space-xl)]"
      aria-label="Encabezado principal"
    >

<div
        className="animate-hero-card-in absolute right-[var(--space-md)] top-[var(--space-lg)] z-[2] mt-[0.1%] min-h-[150px] w-[min(440px,calc(100%-var(--space-md)*2))] max-w-[440px] text-justify max-xl:top-[var(--space-md)] max-xl:max-w-[380px] max-lg:top-[var(--space-sm)] max-lg:max-w-[320px] max-md:static max-md:order-1 max-md:mb-0 max-md:w-full max-md:max-w-full max-md:min-h-0 max-md:text-center"
        aria-hidden="true"
      >
        <span className="absolute right-[7%] top-0 inline-block rounded-[2px] border border-border-dark px-10 py-[0.2rem] text-center font-body text-xs font-medium uppercase tracking-[0.17em] text-flow-muted max-xl:right-[5%] max-xl:text-[0.7rem] max-lg:right-[3%] max-lg:px-7 max-lg:text-[0.65rem] max-md:static max-md:mx-0">
          Marketing Digital &amp; IA Agency México
        </span>
        <p className="absolute right-[8%] top-20 m-0 max-w-[405px] font-body text-[0.99rem] font-light leading-[1.65] text-flow-muted max-xl:right-[6%] max-xl:top-[68px] max-xl:max-w-[340px] max-xl:text-[0.9rem] max-lg:right-[4%] max-lg:top-[58px] max-lg:max-w-[280px] max-lg:text-[0.85rem] max-md:static max-md:mt-[var(--space-sm)] max-md:max-w-none">
          Diseñamos paginas web, branding y rebranding, automatizaciones, campañas de marketing y más. Sin
          tecnicismos, con resultados concretos.
        </p>
      </div>

      <div className="relative z-[1] flex flex-col items-center justify-center pb-[1%] pt-[calc(var(--space-2xl)+3rem)] text-center max-md:order-2 max-md:w-full max-md:pt-0">
        <HeroTitles />
        <div className="relative z-[1] flex flex-col items-center gap-[var(--space-md)]">
          <BtnPrimary
            href={WHATSAPP.main}
            ariaLabel="Contáctanos por WhatsApp"
            className="animate-hero-text-in-delay-1 max-md:px-5 max-md:py-2.5 max-md:text-[0.72rem]"
          >
            <WhatsAppIcon />
            Contáctanos por WhatsApp
          </BtnPrimary>
          <BtnGhost href="/#servicios" className="animate-hero-text-in-delay-2">
            Ver servicios
            <ArrowRightIcon />
          </BtnGhost>
        </div>
      </div>

      <div className="relative z-[1] mb-[60px] ml-[6%] flex w-[clamp(280px,35%,800px)] -translate-y-[30px] items-end justify-between max-xl:ml-[4%] max-xl:w-[clamp(250px,32%,700px)] max-lg:ml-[2%] max-lg:w-[clamp(220px,30%,600px)] max-md:order-3 max-md:mb-0 max-md:ml-0 max-md:w-full max-md:translate-y-0 max-md:flex-col max-md:items-center max-md:gap-[var(--space-sm)] max-md:text-center">
        <h1 className="animate-hero-text-in min-h-[2.2em] font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal italic leading-[1.1] tracking-[-0.02em] text-flow-text max-md:text-center">
          Convierte tus ideas en sistemas que <Typewriter />
        </h1>
      </div>
    </section>
  );
}
