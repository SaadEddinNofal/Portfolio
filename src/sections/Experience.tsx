"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { embeddedNote, experienceEntries } from "@/data/experience";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Experience() {
  const { t, localize } = useLocale();
  const last = experienceEntries.length - 1;

  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            num="04"
            label={t.experience.eyebrow}
            title={t.experience.title}
            lead={t.experience.lead}
          />
        </Reveal>

        <div className="exp">
          {experienceEntries.map((entry, i) => (
            <div className={`exp__item ${i === last ? "is-last" : ""}`} key={entry.id}>
              <div className="exp__dot-col" aria-hidden="true">
                <span className="exp__dot" />
                <span className="exp__line" />
              </div>
              <Reveal delay={i * 50}>
                <div className="exp__card">
                  <div className="exp__top">
                    <h3 className="exp__company">{localize(entry.company)}</h3>
                    <span className="exp__period">{localize(entry.period)}</span>
                  </div>
                  <p className="exp__role">{localize(entry.role)}</p>
                  <div className="exp__focus">
                    {entry.focus.map((f) => (
                      <span className="chip" key={f}>
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal delay={80}>
          <div className="exp--note">
            <span style={{ fontWeight: 700, color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.82rem" }}>
              {localize(embeddedNote.title)}
            </span>
            <span>{localize(embeddedNote.text)}</span>
            {embeddedNote.tags.map((tag) => (
              <span className="chip" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}