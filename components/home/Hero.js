import { BtnGhost, BtnPrimary } from "@/components/ui/Buttons";
import { ArrowRightIcon, WhatsAppIcon } from "@/components/icons/WhatsAppIcon";
import { WHATSAPP } from "@/lib/site";
import { Typewriter } from "./Typewriter";
import { HeroTitles } from "./HeroTitles";

export function Hero() {
  return (
    <section
      className="mobile-screen-section relative grid min-h-[96vh] grid-rows-[1fr_auto] overflow-hidden px-[var(--space-md)] pb-[var(--space-2xl)] pt-[var(--space-xl)] max-md:flex max-md:flex-col max-md:min-h-screen max-md:items-center max-md:justify-start max-md:gap-3 max-md:px-5 max-md:pt-[clamp(0.5rem,3svh,1.5rem)] max-md:pb-[var(--space-lg)]"
      aria-label="Encabezado principal"
    >
      <div className="relative z-[1] flex flex-col items-center justify-center pb-[1%] pt-[calc(var(--space-2xl)+3rem)] text-center max-md:order-2 max-md:mt-0 max-md:w-full">
        <HeroTitles />
        <div className="relative z-[1] flex flex-col items-center gap-[var(--space-lg)] max-md:hidden">
          <BtnPrimary
            href={WHATSAPP.main}
            ariaLabel="Contáctanos por WhatsApp"
            className="btn-fill-dark animate-hero-text-in-delay-1 max-md:px-5 max-md:py-2.5 max-md:text-[0.72rem]"
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

      <div className="relative z-[1] mb-[60px] ml-[6%] flex w-[clamp(280px,35%,800px)] -translate-y-[30px] items-end justify-between max-xl:ml-[4%] max-xl:w-[clamp(250px,32%,700px)] max-lg:ml-[2%] max-lg:w-[clamp(220px,30%,600px)] max-md:order-1 max-md:mb-0 max-md:ml-0 max-md:w-full max-md:max-w-[360px] max-md:translate-y-0 max-md:text-center">
        <h1 className="animate-hero-text-in min-h-[2.2em] font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-normal italic leading-[1.1] tracking-[-0.02em] text-flow-text max-md:min-h-[auto] max-md:text-[clamp(1.7rem,9vw,2.8rem)] max-md:leading-[1.2]">
          Convierte tus ideas en sistemas que <Typewriter />
        </h1>
      </div>

      <div className="md:hidden relative z-[1] flex flex-col items-center gap-[var(--space-md)] max-md:order-3 max-md:mt-0 max-md:w-full max-md:max-w-[320px] max-md:gap-5">
        <BtnPrimary
          href={WHATSAPP.main}
          ariaLabel="Contáctanos por WhatsApp"
          className="btn-fill-dark animate-hero-text-in-delay-1 max-md:w-full max-md:justify-center max-md:px-5 max-md:py-3.5 max-md:text-[0.9rem]"
        >
          <WhatsAppIcon />
          Contáctanos por WhatsApp
        </BtnPrimary>
        <BtnGhost href="/#servicios" className="animate-hero-text-in-delay-2 max-md:mt-1">
          Ver servicios
          <ArrowRightIcon />
        </BtnGhost>
      </div>
    </section>
  );
}
