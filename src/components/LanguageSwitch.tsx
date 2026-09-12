"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import type { Locale } from "@/lib/types";

export function LanguageSwitch() {
  const { locale, toggleLocale, t } = useLocale();

  return (
    <div className="lang-switch" role="group" aria-label={t.aria.changeLanguage}>
      {(["en", "ar"] as Locale[]).map((l) => (
        <button
          key={l}
          type="button"
          className={`lang-switch__btn ${locale === l ? "is-active" : ""}`}
          onClick={() => {
            if (locale !== l) toggleLocale();
          }}
          aria-pressed={locale === l}
          lang={l}
        >
          {l === "en" ? "EN" : "AR"}
        </button>
      ))}
    </div>
  );
}