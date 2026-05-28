import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Flow Studio — Agencia de Marketing Digital & IA",
    short_name: "Flow Studio",
    description:
      "Agencia de marketing digital e inteligencia artificial en México. Automatizaciones, chatbots, CRM, landing pages y estrategia digital.",
    start_url: "/",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#0d1a9e",
    lang: "es",
    orientation: "any",
    categories: ["business", "marketing"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "48x48",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
