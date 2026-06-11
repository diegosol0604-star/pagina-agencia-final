import { Footer } from "@/components/layout/Footer";
import { AutomatizacionesSection } from "@/components/home/AutomatizacionesSection";
import { Contacto } from "@/components/home/Contacto";
import { Diferenciadores } from "@/components/home/Diferenciadores";
import { FAQ } from "@/components/home/FAQ";
import { Hero } from "@/components/home/Hero";
import { NuevaSeccion } from "@/components/home/NuevaSeccion";
import { Proceso } from "@/components/home/Proceso";
import { Servicios } from "@/components/home/Servicios";

export const metadata = {
  title: "Agencia de Marketing Digital & IA en México | Flow Studio",
  description:
    "Flow Studio — Agencia de marketing digital e inteligencia artificial en México. Automatizaciones, chatbots WhatsApp, CRM, landing pages y estrategia digital para hacer crecer tu negocio 24/7. ¡Contáctanos al +52 444 208 1419!",
  keywords: [
    "agencia marketing digital",
    "inteligencia artificial negocios",
    "automatizaciones",
    "chatbots WhatsApp",
    "CRM",
    "landing pages",
    "marketing digital México",
    "Flow Studio",
  ],
  openGraph: {
    title: "Flow Studio — Agencia de Marketing Digital & IA en México",
    description:
      "Automatizaciones, chatbots WhatsApp, CRM, landing pages y estrategia digital para hacer crecer tu negocio 24/7.",
    url: "https://flowstudiomkt.com",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Flow Studio — Marketing Digital & IA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flow Studio — Agencia de Marketing Digital & IA en México",
    description:
      "Automatizaciones, chatbots WhatsApp, CRM, landing pages y estrategia digital para hacer crecer tu negocio 24/7.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://flowstudiomkt.com",
    languages: {
      "es-MX": "https://flowstudiomkt.com",
      "x-default": "https://flowstudiomkt.com",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Flow Studio",
            description:
              "Agencia de marketing digital e inteligencia artificial en México. Automatizaciones, chatbots, CRM, landing pages y estrategia digital.",
            url: "https://flowstudiomkt.com",
            telephone: "+524442081419",
            email: "flowmktstudio@gmail.com",
            address: {
              "@type": "PostalAddress",
              addressLocality: "San Luis Potosí",
              addressCountry: "MX",
            },
            areaServed: "México",
            serviceArea: {
              "@type": "Country",
              name: "México",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Servicios de Marketing Digital",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Automatizaciones con IA",
                    description: "Sistemas inteligentes que trabajan 24/7 para tu negocio.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Landing Pages & Sitios Web",
                    description: "Diseño web optimizado para conversión.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Estrategia Digital",
                    description: "Planes personalizados para escalar tu negocio.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Manejo de Redes Sociales",
                    description: "Gestión profesional de Instagram, TikTok y más.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Branding & Identidad de Marca",
                    description: "Construcción de marcas memorables y consistentes.",
                  },
                },
              ],
            },
            openingHours: [
              "Mo 08:30-17:00",
              "Tu 08:30-17:00",
              "We 08:30-17:00",
              "Th 08:30-17:00",
              "Fr 08:30-17:00",
              "Sa 09:30-16:00",
            ],
          }),
        }}
      />
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

