"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { achievements, education } from "@/data/achievements";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Achievements() {
  const { t, localize } = useLocale();

  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            num="06"
            label={t.achievements.eyebrow}
            title={t.achievements.title}
            lead={t.achievements.lead}
          />
        </Reveal>

        <div className="achievements">
          {achievements.map((achievement, i) => (
            <Reveal key={achievement.id} delay={(i % 2) * 60}>
              <div className="achievement">
                <span className="achievement__mark" aria-hidden="true">
                  {achievement.mark}
                </span>
                <div>
                  <h3 className="achievement__title">{localize(achievement.title)}</h3>
                  <p className="achievement__desc">{localize(achievement.desc)}</p>
                </div>
              </div>
            </Reveal>
          ))}

          <Reveal delay={80}>
            <div className="achievement">
              <span className="achievement__mark" aria-hidden="true">
                <span style={{ fontSize: "0.8rem" }}>EDU</span>
              </span>
              <div>
                <h3 className="achievement__title">{t.achievements.educationLabel}</h3>
                <p className="achievement__desc">{localize(education.value)}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}