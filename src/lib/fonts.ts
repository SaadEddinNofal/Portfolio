import { Inter, Space_Grotesk, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";

export const fontBody = Inter({ subsets: ["latin"], variable: "--f-body", display: "swap" });
export const fontDisplay = Space_Grotesk({ subsets: ["latin"], variable: "--f-display", display: "swap" });
export const fontMono = JetBrains_Mono({ subsets: ["latin"], variable: "--f-mono", display: "swap" });
export const fontArabic = IBM_Plex_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--f-arabic",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});