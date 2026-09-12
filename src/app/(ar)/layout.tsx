import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { PaletteProvider } from "@/components/CommandPalette";
import { site } from "@/lib/site";
import { translations } from "@/i18n/translations";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";
import "@/styles/sections.css";
import "@/styles/motion.css";

const inter = Inter({ subsets: ["latin"], variable: "--f-body", display: "swap" });
const grotesk = Space_Grotesk({ subsets: ["latin"], variable: "--f-display", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono", display: "swap" });
const plexArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--f-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem("theme");if(t!=="dark"&&t!=="light"){t=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";}document.documentElement.setAttribute("data-theme",t);}catch(e){document.documentElement.setAttribute("data-theme","light");}})();`;

const arMetaTitle = translations.ar.meta.title;
const arMetaDescription = translations.ar.meta.description;

const structuredDataAr = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      "name": "Saad Nofal",
      "alternateName": ["Saad Eddin Nofal", "سعد الدين نوفل", "سعد نوفل"],
      "url": `${site.url}/ar/`,
      "image": `${site.url}${site.ogImage}`,
      "jobTitle": ["Software Engineer", ".NET Developer", "Full Stack Developer"],
      "description": arMetaDescription,
      "telephone": site.phone,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Damascus",
        "addressCountry": "SY",
      },
      "knowsAbout": [
        "C#",
        ".NET",
        "ASP.NET Core",
        "Web API",
        "Clean Architecture",
        "Software Engineering",
        "Vue.js",
        "Next.js",
        "GitHub",
        "CI/CD",
      ],
      "sameAs": [...site.sameAs],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      "url": site.url,
      "name": "Saad Nofal",
      "description": arMetaDescription,
      "inLanguage": ["ar", "en"],
      "publisher": { "@id": `${site.url}/#person` },
      "author": { "@id": `${site.url}/#person` },
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/ar/#webpage`,
      "url": `${site.url}/ar/`,
      "name": arMetaTitle,
      "description": arMetaDescription,
      "inLanguage": "ar",
      "isPartOf": { "@id": `${site.url}/#website` },
      "about": { "@id": `${site.url}/#person` },
      "mainEntity": { "@id": `${site.url}/#person` },
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: arMetaTitle,
    template: `%s | ${site.name}`,
  },
  description: arMetaDescription,
  applicationName: "سعد الدين نوفل",
  keywords: [
    "سعد نوفل",
    "سعد الدين نوفل",
    "مطور .NET",
    "مهندس برمجيات",
    ".NET",
    "C#",
    "ASP.NET Core",
    "Clean Architecture",
    "Web API",
    "سوريا",
    "دمشق",
    "Saad Nofal",
    "Saad Eddin Nofal",
    "Software Engineer",
    ".NET Developer",
  ],
  authors: [{ name: "Saad Nofal", url: site.github }],
  creator: "Saad Nofal",
  alternates: { canonical: "/ar/", languages: { en: "/", ar: "/ar/" } },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    url: "/ar/",
    locale: "ar_AR",
    alternateLocale: ["en_US"],
    siteName: "سعد الدين نوفل",
    title: arMetaTitle,
    description: arMetaDescription,
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: "سعد الدين نوفل — مهندس برمجيات ومطور .NET",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: arMetaTitle,
    description: arMetaDescription,
    images: [`/og-image.png`],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f6f5f1" },
    { media: "(prefers-color-scheme: dark)", color: "#0c1016" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable} ${plexArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataAr).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <LanguageProvider initialLocale="ar">
          <PaletteProvider>{children}</PaletteProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}