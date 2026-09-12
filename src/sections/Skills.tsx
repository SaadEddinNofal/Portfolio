"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { skillGroups } from "@/data/skills";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Skills() {
  const { t, localize } = useLocale();

  return (
    <section id="skills" className="section section--tinted">
      <div className="container">
        <Reveal>
          <SectionHeader
            num="05"
            label={t.skills.eyebrow}
            title={t.skills.title}
            lead={t.skills.lead}
          />
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={(i % 3) * 50}>
              <div className="skills-card">
                <div className="skills-card__head">
                  <h3 className="skills-card__name">{localize(group.label)}</h3>
                  <span className="skills-card__num" aria-hidden="true">
                    {group.num}
                  </span>
                </div>
                <p className="skills-card__hint">{localize(group.hint)}</p>
                <div className="skills-card__tags">
                  {group.skills.map((skill) => (
                    <span className="chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}