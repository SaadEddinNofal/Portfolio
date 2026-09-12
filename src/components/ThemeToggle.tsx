"use client";

import { useState } from "react";
import { useLocale } from "@/i18n/LanguageProvider";
import { toggleTheme } from "@/lib/theme";
import { IconMoon, IconSun } from "./icons";

export function ThemeToggle() {
  const { t } = useLocale();
  const [switching, setSwitching] = useState(false);

  const onClick = () => {
    toggleTheme();
    setSwitching(true);
    window.setTimeout(() => setSwitching(false), 420);
  };

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={onClick}
      aria-label={t.aria.themeToggle}
      title={t.aria.themeToggle}
    >
      <span className={`theme-icon ${switching ? "is-switching" : ""}`}>
        <IconSun size={18} className="theme-icon__sun" />
        <IconMoon size={18} className="theme-icon__moon" />
      </span>
    </button>
  );
}