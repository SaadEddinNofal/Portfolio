"use client";

import { Fragment, useState } from "react";
import { useLocale } from "@/i18n/LanguageProvider";
import { projects, type Project } from "@/data/projects";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  IconArrowRight,
  IconChevronDown,
  IconExternal,
  IconGithub,
  IconGitlab,
} from "@/components/icons";

function linkIcon(kind: Project["links"][number]["kind"]) {
  switch (kind) {
    case "github":
      return IconGithub;
    case "gitlab":
      return IconGitlab;
    case "live":
      return IconExternal;
  }
}

export function Projects() {
  const { t, localize } = useLocale();
  const [openId, setOpenId] = useState<string>(projects[0].id);

  const toggle = (id: string) => setOpenId((current) => (current === id ? "" : id));

  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal>
<SectionHeader
              num="03"
            label={t.projects.eyebrow}
            title={t.projects.title}
            lead={t.projects.lead}
          />
        </Reveal>

        <div className="cases">
          {projects.map((project, i) => {
            const isOpen = openId === project.id;
            return (
              <Reveal key={project.id} delay={Math.min(i * 40, 160)}>
                <article className={`case ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="case__head"
                    onClick={() => toggle(project.id)}
                    aria-expanded={isOpen}
                    aria-controls={`case-panel-${project.id}`}
                  >
                    <span className="case__idx" aria-hidden="true">
                      {project.index}
                    </span>
                    <span className="case__title-block">
                      <span className="case__title">{localize(project.title)}</span>
                      <span className="case__sub">{localize(project.short)}</span>
                    </span>
                    <span className="case__toggle" aria-hidden="true">
                      <IconChevronDown size={20} />
                    </span>
                  </button>

                  <div
                    className="case__body"
                    id={`case-panel-${project.id}`}
                    role="region"
                    aria-label={localize(project.title)}
                  >
                    <div className="case__inner">
                      <div className="case__content">
                        <p className="case__desc">{localize(project.description)}</p>

                        <div className="case__meta">
                          <div className="case__kv">
                            <div className="case__kv-label">{t.projects.fieldRole}</div>
                            <div className="case__kv-value">{localize(project.role)}</div>
                          </div>
                          {project.company && (
                            <div className="case__kv">
                              <div className="case__kv-label">{t.projects.fieldCompany}</div>
                              <div className="case__kv-value">{localize(project.company)}</div>
                            </div>
                          )}
                        </div>

                        {project.recognition && (
                          <div className="case__recognition">{localize(project.recognition)}</div>
                        )}

                        <div className="case__block">
                          <h3 className="case__block-title">{t.projects.blockHighlights}</h3>
                          <ul className="hl-list">
                            {project.highlights.map((h, hIdx) => (
                              <li key={hIdx}>{localize(h)}</li>
                            ))}
                          </ul>
                        </div>

                        {project.architecture && (
                          <div className="case__block">
                            <h3 className="case__block-title">{t.projects.blockArch}</h3>
                            <div className="mini-pipe">
                              {project.architecture.stages.map((stage, sIdx) => (
                                <Fragment key={sIdx}>
                                  <span className="mini-pipe__stage">{localize(stage)}</span>
                                  {sIdx < project.architecture!.stages.length - 1 && (
                                    <IconArrowRight className="mini-pipe__arrow" size={16} />
                                  )}
                                </Fragment>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="case__block">
                          <h3 className="case__block-title">{t.projects.blockTech}</h3>
                          <div className="case__tags">
                            {project.technologies.map((tech) => (
                              <span className="chip" key={tech}>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="case__links">
                          {project.links.map((link) => {
                            const Icon = linkIcon(link.kind);
                            return (
                              <a
                                key={`${link.label}-${link.url}`}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--sm"
                              >
                                <Icon size={16} />
                                {link.label}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}