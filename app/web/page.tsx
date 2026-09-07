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
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.035) 0 1px, transparent 1px 96px)",
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
              <article className="abk-glass flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-[#c9a84c]/35">
                {/* browser chrome */}
                <div className="flex items-center gap-2 border-b border-white/8 bg-black/25 px-3 py-2.5">
                  <span className="flex gap-1.5" aria-hidden="true">
                    <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
                    <span className="h-2.5 w-2.5 rounded-full bg-white/14" />
                  </span>
                  <span className="ml-1 min-w-0 flex-1 truncate rounded-md bg-white/[0.05] px-2.5 py-1 font-mono text-[10.5px] text-[#8a8a94]">
                    {p.host}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h2 className="font-display text-[23px] leading-none tracking-[0.04em] text-[#ededf0]">
                      {p.title.toUpperCase()}
                    </h2>
                    <span className="shrink-0 font-mono text-[10.5px] text-[#6f6f79]">
                      {p.date}
                    </span>
                  </div>

                  <p className="mt-3 text-[14px] leading-relaxed text-[#a6a6b0]">
                    {p.summary}
                  </p>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-white/10 px-2.5 py-[3px] font-mono text-[10px] text-[#8a8a94]"
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
                      className="abk-focus mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-[#c9a84c]/35 px-3.5 py-2 text-[11.5px] tracking-[0.1em] text-[#e4cd8a] uppercase transition-colors hover:bg-[#c9a84c]/10"
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
