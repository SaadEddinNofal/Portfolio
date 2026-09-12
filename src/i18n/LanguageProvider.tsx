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

function readCookieLocale(): Locale {
  if (typeof document === "undefined") return site.localeDefault;
  try {
    const value = document.cookie
      .split("; ")
      .find((row) => row.startsWith(`${site.localeCookie}=`))
      ?.split("=")[1];
    return value === "ar" ? "ar" : "en";
  } catch {
    return site.localeDefault;
  }
}

function applyDocumentMeta(locale: Locale) {
  const meta = translations[locale].meta;
  document.title = meta.title;
  const desc = document.querySelector('meta[name="description"]');
  desc?.setAttribute("content", meta.description);
}

function applyDocAttributes(locale: Locale) {
  document.documentElement.lang = locale;
  document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => readCookieLocale());

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
    setLocale(locale === "en" ? "ar" : "en");
  }, [locale, setLocale]);

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