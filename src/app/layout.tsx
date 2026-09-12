import type { Metadata, Viewport } from "next";
import { cookies } from "next/headers";
import { Inter, Space_Grotesk, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageProvider";
import { PaletteProvider } from "@/components/CommandPalette";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/types";
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

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Saad Nofal | Software Engineer & .NET Backend Developer",
    template: "%s | Saad Nofal",
  },
  description:
    "Portfolio of Saad Eddin Nofal — Software Engineer and .NET Backend Developer specializing in scalable web applications, APIs, Clean Architecture, and real-world software systems.",
  keywords: [
    "Saad Nofal",
    "Saad Eddin Nofal",
    ".NET Backend Developer",
    "Software Engineer",
    "Clean Architecture",
    "ASP.NET Core",
    "RESTful APIs",
    "SQL Server",
    "Damascus",
  ],
  authors: [{ name: "Saad Eddin Nofal", url: site.github }],
  creator: "Saad Eddin Nofal",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Saad Nofal",
    title: "Saad Nofal | Software Engineer & .NET Backend Developer",
    description:
      "Software Engineer and .NET Backend Developer specializing in scalable web applications, APIs, Clean Architecture, and real-world software systems.",
  },
  twitter: {
    card: "summary",
    title: "Saad Nofal | Software Engineer & .NET Backend Developer",
    description:
      "Software Engineer and .NET Backend Developer specializing in scalable web applications, APIs, Clean Architecture, and real-world software systems.",
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const locale: Locale = cookieStore.get(site.localeCookie)?.value === "ar" ? "ar" : "en";
  const dir: "ltr" | "rtl" = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      data-theme="light"
      suppressHydrationWarning
      className={`${inter.variable} ${grotesk.variable} ${jetbrains.variable} ${plexArabic.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
      </head>
      <body>
        <LanguageProvider initialLocale={locale}>
          <PaletteProvider>{children}</PaletteProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}