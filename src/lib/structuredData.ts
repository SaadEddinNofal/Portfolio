import { site } from "./site";
import { translations } from "@/i18n/translations";
import type { Locale } from "./types";

const knowsAbout = [
  "C#",
  ".NET",
  "ASP.NET Core",
  "Web API",
  "Clean Architecture",
  "Software Engineering",
  "Next.js",
  "GitHub",
  "CI/CD",
];

export function buildStructuredData(locale: Locale) {
  const t = translations[locale];
  const pageUrl = locale === "ar" ? `${site.url}/ar/` : site.url;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${site.url}/#person`,
        name: "Saad Nofal",
        alternateName: ["Saad Eddin Nofal", "سعد الدين نوفل", "سعد نوفل"],
        url: pageUrl,
        image: `${site.url}${site.ogImage}`,
        jobTitle: ["Software Engineer", ".NET Developer", "Full Stack Developer"],
        description: t.meta.description,
        telephone: site.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Damascus",
          addressCountry: "SY",
        },
        knowsAbout,
        sameAs: [...site.sameAs],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: "Saad Nofal",
        description: t.meta.description,
        inLanguage: ["en", "ar"],
        publisher: { "@id": `${site.url}/#person` },
        author: { "@id": `${site.url}/#person` },
      },
      {
        "@type": "WebPage",
        "@id": `${site.url}/${locale === "ar" ? "ar/" : ""}#webpage`,
        url: pageUrl,
        name: t.meta.title,
        description: t.meta.description,
        inLanguage: locale,
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#person` },
        mainEntity: { "@id": `${site.url}/#person` },
      },
    ],
  };
}