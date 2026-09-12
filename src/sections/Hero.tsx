"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { Portrait } from "@/components/Portrait";
import { IconArrowRight, IconDownload, IconGithub } from "@/components/icons";

export function Hero({ hasCv = false }: { hasCv?: boolean }) {
  const { t } = useLocale();

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__bg-grid grid-bg" />
        <div className="hero__glow" />
      </div>

      <div className="container hero__inner">
        <div>
          <Reveal>
            <span className="hero__badge">{t.hero.badge}</span>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="hero__name">{t.hero.name}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p className="hero__role">{t.hero.role}</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="hero__tagline">{t.hero.tagline}</p>
          </Reveal>
          <Reveal delay={240}>
            <p className="hero__intro">{t.hero.intro}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">
                {t.hero.ctaPrimary}
                <IconArrowRight size={16} className="btn__arrow" />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <IconGithub size={16} />
                {t.hero.ctaGithub}
              </a>
              {hasCv && (
                <a
                  href={site.cvPath}
                  download="Saad-Nofal-CV.pdf"
                  className="btn btn--ghost"
                >
                  {t.hero.ctaCv}
                  <IconDownload size={16} />
                </a>
              )}
            </div>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero__meta">
              <span>{t.hero.meta1}</span>
              <span>{t.hero.meta2}</span>
              <span>{t.hero.meta3}</span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={220}>
          <Portrait />
        </Reveal>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span>{t.hero.scroll}</span>
        <span className="hero__scroll-line" />
      </div>
    </section>
  );
}