import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://flowstudiomkt.com";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
      alternates: {
        languages: {
          es: baseUrl,
        },
      },
    },
    {
      url: `${baseUrl}/automatizaciones`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: {
          es: `${baseUrl}/automatizaciones`,
        },
      },
    },
  ];
}
