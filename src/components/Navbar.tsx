"use client";

import { useEffect, useState } from "react";
import { useLocale } from "@/i18n/LanguageProvider";
import { navItems, site } from "@/lib/site";
import { LanguageSwitch } from "./LanguageSwitch";
import { ThemeToggle } from "./ThemeToggle";
import { usePalette } from "./CommandPalette";
import { IconClose, IconMenu, IconPrompt } from "./icons";
import { IconGithub } from "./icons";

export function Navbar() {
  const { t } = useLocale();
  const { open: openPalette } = usePalette();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter((el): el is HTMLElement => el !== null);
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skipToContent}
      </a>
      <header className={`nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="container nav__inner">
          <a href="#home" className="nav__logo" onClick={() => setMenuOpen(false)}>
            <span className="nav__logo-mark">SN</span>
            <span>{site.shortName}</span>
          </a>

          <nav aria-label="Primary">
            <ul className="nav__links">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.anchor}
                    className={`nav__link ${active === item.id ? "is-active" : ""}`}
                  >
                    {t.nav[item.id]}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav__tools">
            <button
              type="button"
              className="nav__palette-hint"
              onClick={openPalette}
              aria-label={t.aria.openPalette}
            >
              <IconPrompt size={14} />
              <kbd>Ctrl K</kbd>
            </button>
            <LanguageSwitch />
            <ThemeToggle />
            <button
              type="button"
              className="nav__burger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? t.nav.menuClose : t.nav.menuOpen}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <IconClose size={20} /> : <IconMenu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="container mobile-menu__inner">
          {navItems.map((item, i) => (
            <a
              key={item.id}
              href={item.anchor}
              onClick={() => setMenuOpen(false)}
              className="mobile-menu__link"
              style={{ transitionDelay: `${80 + i * 45}ms` }}
            >
              <span>{t.nav[item.id]}</span>
              <span>
                {String(i + 1).padStart(2, "0")} /
              </span>
            </a>
          ))}
          <div className="mobile-menu__foot">
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost btn--sm"
            >
              <IconGithub size={16} />
              GitHub
            </a>
            <LanguageSwitch />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}