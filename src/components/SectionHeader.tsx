"use client";

import { useLocale } from "@/i18n/LanguageProvider";

type SectionHeaderProps = {
  num: string;
  label: string;
  title: string;
  lead?: string;
};

export function SectionHeader({ num, label, title, lead }: SectionHeaderProps) {
  const { dir } = useLocale();
  return (
    <header className="section__head" dir={dir}>
      <span className="eyebrow">
        <span className="eyebrow__num">{num}</span>
        {label}
      </span>
      <h2 className="section__title">{title}</h2>
      {lead ? <p className="section__lead">{lead}</p> : null}
    </header>
  );
}