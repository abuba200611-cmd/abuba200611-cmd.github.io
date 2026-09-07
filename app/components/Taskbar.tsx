"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { OWNER, SOCIAL_LINKS } from "../data/links";
import { SECTIONS } from "../data/sections";
import Clock from "./Clock";

function SocialGlyph({ name }: { name: string }) {
  const p = {
    viewBox: "0 0 24 24",
    className: "h-4 w-4",
    fill: "currentColor",
    "aria-hidden": true,
  };
  if (name === "LinkedIn")
    return (
      <svg {...p}>
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.6c0-1.34-.02-3.06-1.9-3.06-1.9 0-2.2 1.45-2.2 2.96V21h-4V9Z" />
      </svg>
    );
  if (name === "GitHub")
    return (
      <svg {...p}>
        <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03A9.5 9.5 0 0 1 12 6.8c.85 0 1.71.12 2.51.34 1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.35 4.68-4.58 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2Z" />
      </svg>
    );
  return (
    <svg {...p}>
      <path d="M3 5.5A1.5 1.5 0 0 1 4.5 4h15A1.5 1.5 0 0 1 21 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18.5v-13Zm2.2.5 6.8 5.1L18.8 6H5.2Zm13.8 1.6-6.4 4.8a1 1 0 0 1-1.2 0L5 7.6V18h14V7.6Z" />
    </svg>
  );
}

export default function Taskbar() {
  const pathname = usePathname();
  const active = SECTIONS.find((s) => pathname?.startsWith(s.href));

  return (
    <footer
      className="abk-taskbar fixed inset-x-0 bottom-0 z-50 h-14"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-3 px-3 sm:px-5">
        {/* brand — doubles as "home" */}
        <Link
          href="/"
          className="abk-focus group flex items-center gap-2.5 rounded-lg px-1.5 py-1 transition-colors hover:bg-white/5"
          aria-label={`${OWNER.name} — desktop`}
        >
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-md border border-[#c9a84c]/45 bg-[#c9a84c]/10 font-display text-[15px] leading-none tracking-[0.06em] text-[#e4cd8a] pt-[3px]">
            ABK
          </span>
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-[15px] tracking-[0.09em] text-[#ededf0]">
              {OWNER.name.toUpperCase()}
            </span>
            <span className="text-[10px] tracking-[0.14em] text-[#a6a6b0] uppercase">
              {OWNER.role}
            </span>
          </span>
        </Link>

        <span className="hidden h-6 w-px bg-white/10 sm:block" />

        {/* active section indicator */}
        <div className="min-w-0 flex-1">
          {active ? (
            <span className="inline-flex max-w-full items-center gap-2 truncate rounded-md border border-[#c9a84c]/30 bg-[#c9a84c]/[0.07] px-2.5 py-1 text-[11px] tracking-[0.1em] text-[#e4cd8a] uppercase">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c9a84c]" />
              <span className="truncate">{active.label}</span>
            </span>
          ) : (
            <span className="hidden text-[11px] tracking-[0.12em] text-[#6f6f79] uppercase md:inline">
              {OWNER.location}
            </span>
          )}
        </div>

        {/* socials */}
        <nav className="flex items-center gap-1" aria-label="Contact">
          {SOCIAL_LINKS.map((l) => (
            <a
              key={l.name}
              href={l.url}
              target={l.url.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              title={l.label}
              aria-label={l.label}
              className="abk-focus grid h-9 w-9 place-items-center rounded-lg text-[#a6a6b0] transition-colors hover:bg-white/[0.07] hover:text-[#e4cd8a]"
            >
              <SocialGlyph name={l.name} />
            </a>
          ))}
        </nav>

        <span className="hidden h-6 w-px bg-white/10 sm:block" />
        <Clock />
      </div>
    </footer>
  );
}
