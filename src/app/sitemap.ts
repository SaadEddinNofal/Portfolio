import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: "https://saadnofal.me/",
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
      alternates: {
        languages: {
          ar: "https://saadnofal.me/ar/",
        },
      },
    },
    {
      url: "https://saadnofal.me/ar/",
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: {
        languages: {
          en: "https://saadnofal.me/",
        },
      },
    },
  ];
}