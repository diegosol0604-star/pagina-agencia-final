import { FooterCta } from "@/components/automatizaciones/FooterCta";
import { Footer } from "@/components/layout/Footer";
import { HeroPortafolio } from "@/components/portafolio/HeroPortafolio";
import { SistemasGrid } from "@/components/portafolio/SistemasGrid";
import { SitiosGrid } from "@/components/portafolio/SitiosGrid";
import { SISTEMAS, SITIOS } from "@/lib/portafolio-data";

export const metadata = {
  title: "Portafolio de Sitios Web y Sistemas",
  description:
    "Portafolio de Flow Studio: sitios web y sistemas a la medida desarrollados para negocios en México. Entra a los proyectos en vivo y prueba el demo del sistema de gestión de inventarios.",
  keywords: [
    "portafolio diseño web",
    "sitios web México",
    "sistema de inventarios",
    "software a la medida",
    "desarrollo web San Luis Potosí",
    "proyectos Flow Studio",
    "Flow Studio",
  ],
  openGraph: {
    title: "Portafolio — Sitios Web y Sistemas | Flow Studio",
    description:
      "Sitios web y sistemas a la medida desarrollados por Flow Studio. Proyectos en vivo que puedes visitar y probar.",
    url: "https://flowstudiomkt.com/portafolio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portafolio Flow Studio — sitios web y sistemas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio — Sitios Web y Sistemas | Flow Studio",
    description:
      "Sitios web y sistemas a la medida desarrollados por Flow Studio. Proyectos en vivo que puedes visitar y probar.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://flowstudiomkt.com/portafolio",
    languages: {
      "es-MX": "https://flowstudiomkt.com/portafolio",
      "x-default": "https://flowstudiomkt.com/portafolio",
    },
  },
};

const proyectosSchema = [
  ...SITIOS.map((sitio) => ({
    "@type": "CreativeWork",
    name: sitio.nombre,
    genre: sitio.giro,
    ...(sitio.url ? { url: sitio.url } : {}),
    creator: { "@type": "LocalBusiness", name: "Flow Studio" },
  })),
  ...SISTEMAS.map((sistema) => ({
    "@type": "SoftwareApplication",
    name: sistema.nombre,
    applicationCategory: "BusinessApplication",
    ...(sistema.url ? { url: sistema.url } : {}),
    creator: { "@type": "LocalBusiness", name: "Flow Studio" },
  })),
].map((item, index) => ({
  "@type": "ListItem",
  position: index + 1,
  item,
}));

export default function PortafolioPage() {
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
                name: "Portafolio",
                item: "https://flowstudiomkt.com/portafolio",
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
            name: "Portafolio de Flow Studio",
            description:
              "Sitios web y sistemas a la medida desarrollados por Flow Studio para negocios en México.",
            itemListElement: proyectosSchema,
          }),
        }}
      />
      <main id="main">
        <HeroPortafolio />
        <SitiosGrid />
        <SistemasGrid />
      </main>
      <FooterCta />
      <Footer
        variant="deep"
        tagline="Marketing digital e inteligencia artificial para negocios que quieren crecer."
      />
    </>
  );
}
