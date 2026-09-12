"use client";

import { Fragment } from "react";
import { useLocale } from "@/i18n/LanguageProvider";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";

export function Philosophy() {
  const { t } = useLocale();
  const steps = t.process.steps;
  const last = steps.length - 1;

  return (
    <section className="section">
      <div className="container">
        <Reveal>
          <SectionHeader
            num="02"
            label={t.process.eyebrow}
            title={t.process.title}
            lead={t.process.lead}
          />
        </Reveal>
        <div className="process">
          {steps.map((step, i) => (
            <Fragment key={step.num}>
              <Reveal delay={i * 60}>
                <div className={`process__step ${i === last ? "is-last" : ""}`}>
                  <div className="process__rail" aria-hidden="true">
                    <span className="process__num">{step.num}</span>
                    <span className="process__line" />
                  </div>
                  <div>
                    <h3 className="process__title">{step.title}</h3>
                    <p className="process__text">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}