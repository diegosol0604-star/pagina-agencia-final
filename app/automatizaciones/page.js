import { BeneficiosAuto } from "@/components/automatizaciones/BeneficiosAuto";
import { FooterCta } from "@/components/automatizaciones/FooterCta";
import { HeroAutomatizaciones } from "@/components/automatizaciones/HeroAutomatizaciones";
import { Medida } from "@/components/automatizaciones/Medida";
import { QueSon } from "@/components/automatizaciones/QueSon";
import { TiposGrid } from "@/components/automatizaciones/TiposGrid";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Automatizaciones — Flow Studio",
  description:
    "Automatizaciones para tu negocio — Flow Studio. Chatbots, CRM, facturación, agendamiento y más. Sistemas que trabajan por ti las 24 horas.",
};

export default function AutomatizacionesPage() {
  return (
    <>
      <main id="main">
        <HeroAutomatizaciones />
        <QueSon />
        <TiposGrid />
        <Medida />
        <BeneficiosAuto />
      </main>
      <FooterCta />
      <Footer
        variant="deep"
        tagline="Marketing digital e inteligencia artificial para negocios que quieren crecer."
      />
    </>
  );
}
