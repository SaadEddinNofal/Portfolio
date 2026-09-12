"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Teaching() {
  const { t } = useLocale();

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader num="07" label={t.teaching.eyebrow} title={t.teaching.title} />
        </Reveal>

        <Reveal delay={100}>
          <div className="teaching">
            <div className="teaching__bar" aria-hidden="true" />
            <div className="teaching__inner">
              <blockquote className="teaching__quote">
                {t.teaching.quoteA}
                <br />
                <mark>{t.teaching.quoteB}</mark>
              </blockquote>
              <div className="teaching__info">
                <div className="teaching__info-row">
                  <span className="teaching__info-label">{t.teaching.labels.who}</span>
                  <span>{t.teaching.who}</span>
                </div>
                <div className="teaching__info-row">
                  <span className="teaching__info-label">{t.teaching.labels.when}</span>
                  <span>{t.teaching.when}</span>
                </div>
                <div className="teaching__info-row">
                  <span className="teaching__info-label">{t.teaching.labels.focus}</span>
                  <span className="exp__focus">
                    {t.teaching.focus.map((f) => (
                      <span className="chip" key={f}>
                        {f}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}