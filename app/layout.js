import { Cormorant_Garamond, DM_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/layout/Nav";
import { SkipLink } from "@/components/layout/SkipLink";
import { SplashScreen } from "@/components/layout/SplashScreen";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0d1f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL("https://flowstudiomkt.com"),
  title: {
    default: "Flow Studio — Agencia de Marketing Digital & IA en México",
    template: "%s — Flow Studio",
  },
  description:
    "Agencia de marketing digital e inteligencia artificial en México. Automatizaciones, chatbots, CRM, landing pages y estrategia digital. Convierte tus ideas en sistemas que venden 24/7.",
  keywords: [
    "agencia marketing digital México",
    "automatizaciones IA",
    "chatbots WhatsApp",
    "CRM inteligente",
    "landing pages",
    "marketing digital San Luis Potosí",
    "inteligencia artificial negocios",
    "automatización de procesos",
    "agencia de marketing",
    "Flow Studio",
  ],
  authors: [{ name: "Flow Studio" }],
  creator: "Flow Studio",
  publisher: "Flow Studio",
  category: "marketing digital",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Flow Studio",
    title: "Flow Studio — Agencia de Marketing Digital & IA en México",
    description:
      "Agencia de marketing digital e inteligencia artificial en México. Automatizaciones, chatbots, CRM, landing pages y estrategia digital.",
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
      "Agencia de marketing digital e inteligencia artificial en México. Automatizaciones, chatbots, CRM, landing pages y estrategia digital.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-MX": "/",
      "x-default": "/",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",

};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      data-scroll-behavior="smooth"
      className={`${cormorant.variable} ${syne.variable} ${dmSans.variable} h-full`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="google-site-verification" content="l-reThStT9dDd1KpDnTpHH46hkRyO0tIHuavMLpnUPs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Flow Studio",
              description:
                "Agencia de marketing digital e inteligencia artificial en México. Automatizaciones, chatbots, CRM, landing pages y estrategia digital.",
              url: "https://flowstudiomkt.com",
              telephone: "+524442081419",
              email: "Flowstudio_agenciamkt@outlook.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "San Luis Potosí",
                addressCountry: "MX",
              },
              areaServed: {
                "@type": "Country",
                name: "México",
              },
              knowsAbout: [
                "Marketing Digital",
                "Inteligencia Artificial",
                "Automatizaciones",
                "Chatbots WhatsApp",
                "CRM",
                "Landing Pages",
                "Estrategia Digital",
                "Redes Sociales",
              ],
              image: "https://flowstudiomkt.com/og-image.jpg",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Flow Studio",
              url: "https://flowstudiomkt.com",
              description:
                "Agencia de marketing digital e inteligencia artificial en México.",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://flowstudiomkt.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SplashScreen />
        <SkipLink />
        <Nav />
        {children}
      </body>
    </html>
  );
}
