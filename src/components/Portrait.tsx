"use client";

import Image from "next/image";
import { useLocale } from "@/i18n/LanguageProvider";
import { site } from "@/lib/site";
import {
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
} from "@/components/icons";

export function Portrait() {
  const { t } = useLocale();

  const socials = [
    { href: site.github, label: "GitHub", icon: IconGithub },
    { href: site.linkedin, label: t.contact.linkedinLabel, icon: IconLinkedin },
    { href: site.instagram, label: t.contact.instagramLabel, icon: IconInstagram },
    { href: site.facebook, label: t.contact.facebookLabel, icon: IconFacebook },
  ];

  return (
    <div className="portrait-stack">
      <div className="portrait">
        <div className="portrait__hd">
          <span className="sys__dot" aria-hidden="true" />
          <span className="sys__dot" aria-hidden="true" />
          <span className="sys__dot" aria-hidden="true" />
          <span className="portrait__label">{t.hero.portraitLabel}</span>
          <span className="portrait__status">{t.hero.portraitStatus}</span>
        </div>
        <div className="portrait__media">
          <Image
            src={`${site.basePath}/saad-nofal-portrait.jpg`}
            alt={t.hero.portraitAlt}
            fill
            priority
            fetchPriority="high"
            decoding="async"
            sizes="(min-width: 900px) 420px, (min-width: 640px) 55vw, 92vw"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="portrait__cap">
          <span className="portrait__name">{t.hero.name}</span>
          <span className="portrait__role">{t.hero.role}</span>
        </div>
      </div>

      <div className="portrait__socials">
        <span className="portrait__handle">{t.hero.portraitHandle}</span>
        <div className="portrait__socials-row">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="portrait__social"
            >
              <social.icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}