"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function About() {
  const { t } = useLocale();
  const notes = t.about.notes;

  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader num="01" label={t.about.eyebrow} title={t.about.title} />
        </Reveal>
        <div className="about__grid">
          <Reveal delay={80}>
            <div className="about__body">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <div className="about__sign">
                <span>≈ {t.about.sign}</span>
                <span>systems/engineer.nofal</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={160}>
            <div className="notes">
              <div className="notes__hd">
                <span className="notes__hd-label">{t.about.notesLabel}</span>
                <span className="notes__hd-count">{t.about.notesCount}</span>
              </div>
              <div className="notes__list">
                {notes.map((note, i) => (
                  <div className="notes__item" key={`${note.label}-${i}`}>
                    <span className="notes__idx">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <div className="notes__label">{note.label}</div>
                      <div className="notes__desc">{note.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}