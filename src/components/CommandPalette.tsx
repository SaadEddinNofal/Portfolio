"use client";

import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  createContext,
  type ReactNode,
} from "react";
import { useLocale } from "@/i18n/LanguageProvider";
import { toggleTheme } from "@/lib/theme";
import { site } from "@/lib/site";
import { IconSearch } from "./icons";

type PaletteContextValue = {
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const PaletteContext = createContext<PaletteContextValue | null>(null);

export function usePalette(): PaletteContextValue {
  const ctx = useContext(PaletteContext);
  if (!ctx) throw new Error("usePalette must be used within PaletteProvider");
  return ctx;
}

type CommandGroup = "nav" | "actions" | "links";

type Command = {
  id: string;
  label: string;
  desc: string;
  group: CommandGroup;
  run: () => void;
};

function prefersReducedMotion() {
  return (
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );
}

export function PaletteProvider({ children }: { children: ReactNode }) {
  const { t, toggleLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const [lastFocusedEl, setLastFocusedEl] = useState<Element | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollTo = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
  }, []);

  const commands = useMemo<Command[]>(() => {
    const c = t.palette.commands;
    const nav: Command[] = [
      { id: "home", label: c.home.label, desc: c.home.desc, group: "nav", run: () => scrollTo("home") },
      { id: "about", label: c.about.label, desc: c.about.desc, group: "nav", run: () => scrollTo("about") },
      { id: "projects", label: c.projects.label, desc: c.projects.desc, group: "nav", run: () => scrollTo("projects") },
      { id: "experience", label: c.experience.label, desc: c.experience.desc, group: "nav", run: () => scrollTo("experience") },
      { id: "skills", label: c.skills.label, desc: c.skills.desc, group: "nav", run: () => scrollTo("skills") },
      { id: "achievements", label: c.achievements.label, desc: c.achievements.desc, group: "nav", run: () => scrollTo("achievements") },
      { id: "contact", label: c.contact.label, desc: c.contact.desc, group: "nav", run: () => scrollTo("contact") },
      {
        id: "top",
        label: c.top.label,
        desc: c.top.desc,
        group: "nav",
        run: () => window.scrollTo({ top: 0, behavior: prefersReducedMotion() ? "auto" : "smooth" }),
      },
    ];
    const actions: Command[] = [
      { id: "theme", label: c.theme.label, desc: c.theme.desc, group: "actions", run: () => toggleTheme() },
      { id: "language", label: c.language.label, desc: c.language.desc, group: "actions", run: () => toggleLocale() },
    ];
    const links: Command[] = [
      { id: "github", label: c.github.label, desc: c.github.desc, group: "links", run: () => window.open(site.github, "_blank", "noopener") },
    ];
    return [...nav, ...actions, ...links];
  }, [t, scrollTo, toggleLocale]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((cmd) => `${cmd.label} ${cmd.desc}`.toLowerCase().includes(q));
  }, [commands, query]);

  const open = useCallback(() => {
    setLastFocusedEl(document.activeElement as Element | null);
    setIsOpen(true);
    setQuery("");
    setActiveIndex(0);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    if (lastFocusedEl instanceof HTMLElement) {
      lastFocusedEl.focus();
    }
  }, [lastFocusedEl]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) close();
        else open();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, open, close]);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = "hidden";
    inputRef.current?.focus();
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const runCommand = (cmd: Command) => {
    cmd.run();
    close();
  };

  const onQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setActiveIndex(0);
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => (i + 1) % Math.max(filtered.length, 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => (i - 1 + Math.max(filtered.length, 1)) % Math.max(filtered.length, 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filtered[activeIndex]) runCommand(filtered[activeIndex]);
    } else if (e.key === "Escape") {
      e.preventDefault();
      close();
    }
  };

  const groups: CommandGroup[] = ["nav", "actions", "links"] as const;

  let flatIndex = -1;

  return (
    <PaletteContext.Provider value={{ open, close, isOpen }}>
      {children}
      <div
        className={`palette-overlay ${isOpen ? "is-open" : ""}`}
        onKeyDown={onKeyDown}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-hidden={!isOpen}
      >
        <div
          className="palette"
          role="dialog"
          aria-modal="true"
          aria-label={t.palette.title}
        >
          <div className="palette__search">
            <IconSearch size={20} />
            <input
              ref={inputRef}
              className="palette__input"
              type="text"
              value={query}
              onChange={onQueryChange}
              placeholder={t.palette.placeholder}
              aria-label={t.palette.placeholder}
              role="combobox"
              aria-expanded="true"
              aria-controls="palette-listbox"
              autoComplete="off"
              spellCheck={false}
            />
          </div>
          <div className="palette__body" id="palette-listbox" role="listbox">
            {filtered.length === 0 ? (
              <div className="palette__empty">{t.palette.empty}</div>
            ) : (
              groups.map((group) => {
                const items = filtered.filter((c) => c.group === group);
                if (items.length === 0) return null;
                const label =
                  group === "nav" ? t.palette.groupNav : group === "actions" ? t.palette.groupActions : t.palette.groupLinks;
                return (
                  <div key={group}>
                    <div className="palette__group-label">{label}</div>
                    {items.map((cmd) => {
                      flatIndex += 1;
                      const idx = flatIndex;
                      return (
                        <button
                          key={cmd.id}
                          type="button"
                          className={`palette__item ${idx === activeIndex ? "is-active" : ""}`}
                          role="option"
                          aria-selected={idx === activeIndex}
                          onMouseMove={() => setActiveIndex(idx)}
                          onClick={() => runCommand(cmd)}
                        >
                          <span>{cmd.label}</span>
                          <span className="palette__item-desc">{cmd.desc}</span>
                        </button>
                      );
                    })}
                  </div>
                );
              })
            )}
          </div>
          <div className="palette__foot">
            <span>
              <kbd>↑↓</kbd> {t.palette.foot.nav}
            </span>
            <span>
              <kbd>↵</kbd> {t.palette.foot.open}
            </span>
            <span>
              <kbd>esc</kbd> {t.palette.foot.close}
            </span>
          </div>
        </div>
      </div>
    </PaletteContext.Provider>
  );
}