import type { Metadata, Viewport } from "next";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { PaletteProvider } from "@/components/CommandPalette";
import { site } from "@/lib/site";
import { fontBody, fontDisplay, fontMono, fontArabic } from "@/lib/fonts";
import { THEME_BOOTSTRAP } from "@/lib/theme";
import { buildStructuredData } from "@/lib/structuredData";
import { translations } from "@/i18n/translations";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/layout.css";
import "@/styles/sections.css";
import "@/styles/motion.css";

const arMetaTitle = translations.ar.meta.title;
const arMetaDescription = translations.ar.meta.description;

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
  alternates: { canonical: "/ar/", languages: { "x-default": "/", en: "/", ar: "/ar/" } },
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
      className={`${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData("ar")).replace(/</g, "\\u003c") }}
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