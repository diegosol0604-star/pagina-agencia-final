import { BeneficiosAuto } from "@/components/automatizaciones/BeneficiosAuto";
import { FooterCta } from "@/components/automatizaciones/FooterCta";
import { HeroAutomatizaciones } from "@/components/automatizaciones/HeroAutomatizaciones";
import { Medida } from "@/components/automatizaciones/Medida";
import { QueSon } from "@/components/automatizaciones/QueSon";
import { TiposGrid } from "@/components/automatizaciones/TiposGrid";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Automatizaciones con IA para Negocios | Flow Studio",
  description:
    "Automatizaciones inteligentes para tu negocio — Flow Studio. Chatbots WhatsApp, CRM, facturación, agendamiento, redes sociales y más. Sistemas que trabajan por ti las 24 horas. ¡Cotiza ahora al +52 444 208 1419!",
  keywords: [
    "automatizaciones IA",
    "chatbots WhatsApp",
    "CRM automatizado",
    "facturación automática",
    "agendamiento inteligente",
    "automatización redes sociales",
    "sistemas inteligentes negocio",
    "automatización procesos México",
    "Flow Studio",
  ],
  openGraph: {
    title: "Automatizaciones con IA para Negocios | Flow Studio",
    description:
      "Chatbots WhatsApp, CRM, facturación, agendamiento, redes sociales y más. Sistemas que trabajan por ti las 24 horas.",
    url: "https://flowstudiomkt.com/automatizaciones",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Automatizaciones Flow Studio — IA para negocios",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Automatizaciones con IA para Negocios | Flow Studio",
    description:
      "Chatbots WhatsApp, CRM, facturación, agendamiento, redes sociales y más. Sistemas que trabajan por ti las 24 horas.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://flowstudiomkt.com/automatizaciones",
    languages: {
      "es-MX": "https://flowstudiomkt.com/automatizaciones",
      "x-default": "https://flowstudiomkt.com/automatizaciones",
    },
  },
};

export default function AutomatizacionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Inicio",
                item: "https://flowstudiomkt.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Automatizaciones",
                item: "https://flowstudiomkt.com/automatizaciones",
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Servicios de Automatización",
            description:
              "Servicios de automatización inteligente para negocios: chatbots, CRM, facturación, agendamiento, redes sociales y flujos de seguimiento.",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                item: {
                  "@type": "Service",
                  name: "Chatbot para WhatsApp",
                  description:
                    "Respuestas automáticas 24/7 para calificar leads y agendar citas sin intervención humana.",
                  provider: { "@type": "LocalBusiness", name: "Flow Studio" },
                },
              },
              {
                "@type": "ListItem",
                position: 2,
                item: {
                  "@type": "Service",
                  name: "Automatización de Instagram y TikTok",
                  description:
                    "Programación y publicación automática de contenido, respuestas a comentarios y DMs.",
                  provider: { "@type": "LocalBusiness", name: "Flow Studio" },
                },
              },
              {
                "@type": "ListItem",
                position: 3,
                item: {
                  "@type": "Service",
                  name: "Sistema de Agendamiento Automático",
                  description:
                    "Calendario inteligente que gestiona citas y reuniones sin necesidad de intervención manual.",
                  provider: { "@type": "LocalBusiness", name: "Flow Studio" },
                },
              },
              {
                "@type": "ListItem",
                position: 4,
                item: {
                  "@type": "Service",
                  name: "CRM Automático",
                  description:
                    "Sistema de gestión de clientes con seguimiento automatizado, recordatorios y pipeline de ventas.",
                  provider: { "@type": "LocalBusiness", name: "Flow Studio" },
                },
              },
              {
                "@type": "ListItem",
                position: 5,
                item: {
                  "@type": "Service",
                  name: "Automatización de Facturación",
                  description:
                    "Emisión, envío y seguimiento de facturas de forma automática, integrado con tu CRM.",
                  provider: { "@type": "LocalBusiness", name: "Flow Studio" },
                },
              },
              {
                "@type": "ListItem",
                position: 6,
                item: {
                  "@type": "Service",
                  name: "Flujos de Seguimiento Automáticos",
                  description:
                    "Secuencias automatizadas de correos, WhatsApp y recordatorios para leads y clientes.",
                  provider: { "@type": "LocalBusiness", name: "Flow Studio" },
                },
              },
            ],
          }),
        }}
      />
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
