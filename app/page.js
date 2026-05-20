import { Footer } from "@/components/layout/Footer";
import { AutomatizacionesSection } from "@/components/home/AutomatizacionesSection";
import { Contacto } from "@/components/home/Contacto";
import { Diferenciadores } from "@/components/home/Diferenciadores";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { NuevaSeccion } from "@/components/home/NuevaSeccion";
import { Proceso } from "@/components/home/Proceso";
import { Servicios } from "@/components/home/Servicios";

export default function Home() {
  return (
    <>
      <main id="main">
        <Hero />
        <NuevaSeccion />
        <Servicios />
        <AutomatizacionesSection />
        <Diferenciadores />
        <Proceso />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}

