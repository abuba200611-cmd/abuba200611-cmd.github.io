import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import { WEB_PROJECTS } from "../data/projects";

export const metadata: Metadata = {
  title: "Web Projects",
  description:
    "Websites and full-stack apps by Abubakr Mala — bilingual Arabic/English RTL sites, 3D product configurators, and internal tools.",
};

function ScreenAccent() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "repeating-linear-gradient(90deg, var(--screen-line) 0 1px, transparent 1px 96px)",
        maskImage: "linear-gradient(180deg, #000, transparent 85%)",
      }}
    />
  );
}

export default function WebPage() {
  return (
    <PageShell
      eyebrow="General Web Projects"
      title="Web Projects"
      intro="Sites and apps shipped for real businesses — most of them bilingual Arabic/English with proper RTL, built to be found on search and fast on a phone."
      accent={<ScreenAccent />}
    >
      <ul className="grid gap-5 sm:grid-cols-2">
        {WEB_PROJECTS.map((p) => {
          const href = p.url ?? p.repo;
          return (
            <li key={p.title} className="min-w-0">
              <article className="abk-glass flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-accent-line-strong">
                {/* browser chrome */}
                <div className="flex items-center gap-2 border-b border-line bg-surface-2 px-3 py-2.5">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
                    <span className="h-2.5 w-2.5 rounded-full bg-line-2" />
                  </span>
                  <span className="ml-1 min-w-0 flex-1 truncate rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-[10.5px] text-faint">
                    {p.host}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="min-w-0 font-display text-[21px] leading-tight font-semibold tracking-[0.02em] text-ink break-words">
                      {p.title.toUpperCase()}
                    </h2>
                    <span className="shrink-0 font-mono text-[10.5px] text-faint">
                      {p.date}
                    </span>
                  </div>

                  <p className="mt-3 text-[14px] leading-relaxed text-muted">
                    {p.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line px-2.5 py-[3px] font-mono text-[10px] text-faint"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>

                  {href && (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="abk-focus mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-accent-line-strong px-3.5 py-2 text-[11.5px] tracking-[0.1em] text-accent-ink uppercase transition-colors hover:bg-accent-soft-2"
                    >
                      {p.url ? "Visit site" : "View code"}
                      <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </article>
            </li>
          );
        })}
      </ul>
    </PageShell>
  );
}
