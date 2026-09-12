"use client";

import { useEffect, useState } from "react";
import { IconArrowUp } from "./icons";

export function ToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      type="button"
      className={`to-top ${visible ? "is-visible" : ""}`}
      onClick={scrollTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <IconArrowUp size={20} />
    </button>
  );
}