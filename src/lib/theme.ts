export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

export function applyTheme(theme: Theme): Theme {
  if (typeof document === "undefined") return theme;
  const root = document.documentElement;
  root.classList.add("theme-flip");
  root.setAttribute("data-theme", theme);
  void root.offsetWidth;
  requestAnimationFrame(() => root.classList.remove("theme-flip"));
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    /* storage unavailable */
  }
  return theme;
}

export function readTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "light" || attr === "dark") return attr;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
  } catch {
    /* ignore */
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function toggleTheme(): Theme {
  const next: Theme = readTheme() === "dark" ? "light" : "dark";
  applyTheme(next);
  return next;
}