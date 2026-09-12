"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useRouter } from "next/navigation";
import { translations, type Translation } from "./translations";
import type { Locale, LocaleString } from "@/lib/types";
import { site } from "@/lib/site";

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  t: Translation;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  localize: (ls: LocaleString) => string;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function applyDocAttributes(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
}

function applyDocumentMeta(locale: Locale) {
  const meta = translations[locale].meta;
  document.title = meta.title;
  const desc = document.querySelector('meta[name="description"]');
  desc?.setAttribute("content", meta.description);
}

export function LanguageProvider({
  children,
  initialLocale = site.localeDefault,
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);
  const router = useRouter();

  useEffect(() => {
    applyDocAttributes(locale);
    applyDocumentMeta(locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    try {
      document.cookie = `${site.localeCookie}=${next};path=/;max-age=31536000;samesite=lax`;
    } catch {
      /* ignore */
    }
    applyDocAttributes(next);
    applyDocumentMeta(next);
  }, []);

  const toggleLocale = useCallback(() => {
    const next: Locale = locale === "en" ? "ar" : "en";
    setLocale(next);
    router.push(next === "ar" ? `${site.basePath}/ar` : `${site.basePath}/`);
  }, [locale, router, setLocale]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      t: translations[locale],
      setLocale,
      toggleLocale,
      localize: (ls: LocaleString) => ls[locale],
    }),
    [locale, setLocale, toggleLocale],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLocale(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLocale must be used within LanguageProvider");
  }
  return ctx;
}