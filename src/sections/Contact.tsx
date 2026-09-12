"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { site } from "@/lib/site";
import { Reveal } from "@/components/Reveal";
import { SectionHeader } from "@/components/SectionHeader";
import {
  IconArrowRight,
  IconFacebook,
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconPhone,
} from "@/components/icons";

export function Contact() {
  const { t } = useLocale();

  const channels = [
    {
      label: t.contact.githubLabel,
      href: site.github,
      icon: IconGithub,
      external: true,
    },
    {
      label: t.contact.linkedinLabel,
      href: site.linkedin,
      icon: IconLinkedin,
      external: true,
    },
    {
      label: t.contact.instagramLabel,
      href: site.instagram,
      icon: IconInstagram,
      external: true,
    },
    {
      label: t.contact.facebookLabel,
      href: site.facebook,
      icon: IconFacebook,
      external: true,
    },
    {
      label: site.phone,
      href: site.phoneHref,
      icon: IconPhone,
      external: false,
    },
  ];

  const primary = site.email
    ? { href: `mailto:${site.email}`, label: t.contact.emailLabel }
    : site.linkedin
      ? { href: site.linkedin, label: t.contact.linkedinLabel }
      : { href: site.github, label: t.contact.githubLabel };

  return (
    <section id="contact" className="section section--tinted">
      <div className="container contact">
        <Reveal>
          <SectionHeader num="08" label={t.contact.eyebrow} title={t.contact.title} />
        </Reveal>
        <Reveal delay={80}>
          <p className="contact__text">{t.contact.text}</p>
        </Reveal>
        <Reveal delay={160}>
          <div className="contact__channels">
            <a
              href={primary.href}
              target={primary.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              {t.contact.cta}
              <IconArrowRight className="btn__arrow" size={16} />
            </a>
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <channel.icon size={16} />
                {channel.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}