"use client";

import { useLocale } from "@/i18n/LanguageProvider";
import { navItems, site } from "@/lib/site";
import { IconArrowUp, IconGithub, IconLinkedin, IconMail } from "./icons";

export function Footer() {
  const { t } = useLocale();

  const channels = [
    site.github ? { label: "GitHub", href: site.github, icon: IconGithub } : null,
    site.email ? { label: "Email", href: `mailto:${site.email}`, icon: IconMail } : null,
    site.linkedin ? { label: "LinkedIn", href: site.linkedin, icon: IconLinkedin } : null,
  ].filter((c): c is NonNullable<typeof c> => c !== null);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div>
            <div className="footer__brand">
              <span className="nav__logo-mark">{site.shortName.split(" ")[0][0]}</span>
              <span>{site.name}</span>
            </div>
            <p className="footer__status" style={{ marginBlockStart: "0.6rem" }}>
              {t.footer.status}
            </p>
          </div>

          <nav aria-label="Footer" className="footer__links">
            {navItems.slice(0, 5).map((item) => (
              <a key={item.id} href={item.anchor} className="footer__link">
                {t.nav[item.id]}
              </a>
            ))}
          </nav>

          <div className="footer__links">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="footer__link"
              >
                <c.icon size={16} />
                {c.label}
              </a>
            ))}
            <button
              type="button"
              className="footer__link"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <IconArrowUp size={16} />
              {t.footer.backTop}
            </button>
          </div>
        </div>

        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>{t.footer.blurb}</span>
          <span>⌘ {t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}