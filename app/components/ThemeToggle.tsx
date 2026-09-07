"use client";

import { useSyncExternalStore } from "react";
import { THEME_KEY } from "../theme-script";

type Theme = "light" | "dark";

/** The current theme, read straight off the DOM the pre-paint script stamped. */
function readTheme(): Theme {
  const attr = document.documentElement.getAttribute("data-theme");
  if (attr === "dark" || attr === "light") return attr;
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

/**
 * The theme lives on <html>, not in React — the pre-paint script owns it before
 * hydration. So subscribe to it rather than mirroring it in state: watch the
 * attribute for explicit choices and the media query for system changes.
 */
function subscribe(onStoreChange: () => void) {
  const mq = window.matchMedia("(prefers-color-scheme: dark)");
  mq.addEventListener("change", onStoreChange);

  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => {
    mq.removeEventListener("change", onStoreChange);
    observer.disconnect();
  };
}

/** Server render: unknown. The glyph is swapped by CSS, so only the label waits. */
function serverTheme(): Theme | null {
  return null;
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, readTheme, serverTheme);

  const toggle = () => {
    const next: Theme = (theme ?? readTheme()) === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      /* private mode or blocked storage — the choice just will not persist */
    }
  };

  const label =
    theme === null
      ? "Switch between light and dark theme"
      : theme === "dark"
        ? "Switch to light theme"
        : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="abk-focus grid h-9 w-9 shrink-0 place-items-center rounded-lg text-muted transition-colors hover:bg-accent-soft hover:text-accent-ink"
    >
      {/* the glyph shows the theme you are in; the label says what tapping does */}
      <svg
        viewBox="0 0 24 24"
        className="abk-icon-sun h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="4.2" />
        <path d="M12 2.6v2.2M12 19.2v2.2M4.2 4.2l1.6 1.6M18.2 18.2l1.6 1.6M2.6 12h2.2M19.2 12h2.2M4.2 19.8l1.6-1.6M18.2 5.8l1.6-1.6" />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className="abk-icon-moon h-[18px] w-[18px]"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20.5 14.3A8.6 8.6 0 0 1 9.7 3.5a8.6 8.6 0 1 0 10.8 10.8Z" />
      </svg>
    </button>
  );
}
