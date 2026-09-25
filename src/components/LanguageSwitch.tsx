"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/types";

const localeHref: Record<Locale, string> = {
  en: `${site.basePath}/`,
  ar: `${site.basePath}/ar/`,
};

export function LanguageSwitch() {
  const { locale, t } = useLocale();

  return (
    <div className="lang-switch" role="group" aria-label={t.aria.changeLanguage}>
      {(["en", "ar"] as Locale[]).map((l) => (
        <a
          key={l}
          className={`lang-switch__btn ${locale === l ? "is-active" : ""}`}
          href={localeHref[l]}
          aria-current={locale === l ? "page" : undefined}
          lang={l}
        >
          {l === "en" ? "EN" : "AR"}
        </a>
      ))}
    </div>
  );
}