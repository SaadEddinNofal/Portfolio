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

const siteDescription = translations.en.meta.description;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Saad Nofal | Software Engineer & .NET Developer",
    template: "%s | Saad Nofal",
  },
  description: siteDescription,
  applicationName: "Saad Nofal",
  keywords: [
    "Saad Nofal",
    "Saad Eddin Nofal",
    "سعد نوفل",
    "سعد الدين نوفل",
    "Software Engineer",
    ".NET Developer",
    "Full Stack Developer",
    ".NET",
    "C#",
    "ASP.NET Core",
    "Clean Architecture",
    "Web API",
    "Software Developer",
    "Damascus",
    "مهندس برمجيات",
    "مطور .NET",
  ],
  authors: [{ name: "Saad Nofal", url: site.github }],
  creator: "Saad Nofal",
  alternates: {
    canonical: "/",
    languages: { "x-default": "/", en: "/", ar: "/ar/" },
  },
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
    url: "/",
    locale: "en_US",
    alternateLocale: ["ar_AR"],
    siteName: "Saad Nofal",
    title: "Saad Nofal | Software Engineer & .NET Developer",
    description: siteDescription,
    images: [
      {
        url: `/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Saad Nofal — Software Engineer and .NET Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Nofal | Software Engineer & .NET Developer",
    description: siteDescription,
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
      lang="en"
      dir="ltr"
      data-theme="light"
      suppressHydrationWarning
      className={`${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable} ${fontArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredData("en")).replace(/</g, "\\u003c") }}
        />
      </head>
      <body>
        <LanguageProvider initialLocale="en">
          <PaletteProvider>{children}</PaletteProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}