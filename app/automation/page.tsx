import type { Metadata } from "next";
import PageShell from "../components/PageShell";
import { AUTOMATION_PROJECTS } from "../data/projects";

export const metadata: Metadata = {
  title: "Automation",
  description:
    "n8n workflow automation and AI agents built for live Saudi e-commerce stores — WhatsApp sales agents, Salla sync, cart recovery.",
};

/** Node-graph band: this section's visual signature. */
function FlowAccent() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.5]"
      style={{
        backgroundImage:
          "radial-gradient(rgba(201,168,76,0.22) 1px, transparent 1px)",
        backgroundSize: "22px 22px",
        maskImage:
          "linear-gradient(90deg, transparent, #000 35%, #000 65%, transparent)",
      }}
    />
  );
}

export default function AutomationPage() {
  return (
    <PageShell
      eyebrow="Workflow / Automation"
      title="Automation"
      intro="Systems that do the repetitive part of a business without being asked. Every one below runs on a real store, not a demo account — the flow is drawn exactly as it fires."
      accent={<FlowAccent />}
    >
      <div className="space-y-6">
        {AUTOMATION_PROJECTS.map((p) => (
          <article
            key={p.title}
            className="abk-glass rounded-2xl p-5 sm:p-7"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h2 className="font-display text-[26px] leading-none tracking-[0.04em] text-[#ededf0] sm:text-[30px]">
                {p.title.toUpperCase()}
              </h2>
              <span className="font-mono text-[11px] tracking-[0.1em] text-[#6f6f79] uppercase">
                {p.date}
              </span>
            </div>
            <p className="mt-1 text-[12px] tracking-[0.12em] text-[#c9a84c] uppercase">
              {p.client}
            </p>

            <p className="mt-4 max-w-[68ch] text-[15px] leading-relaxed text-[#c2c2ca]">
              {p.summary}
            </p>

            {/* the flow, as nodes */}
            <div className="mt-6">
              <p className="mb-3 text-[10px] tracking-[0.22em] text-[#6f6f79] uppercase">
                The flow
              </p>
              <ol className="flex flex-wrap items-stretch gap-x-1.5 gap-y-2">
                {p.flow.map((step, i) => (
                  <li key={step} className="flex items-center gap-1.5">
                    <span className="flex items-center gap-2 rounded-lg border border-[#c9a84c]/22 bg-[#c9a84c]/[0.05] px-2.5 py-1.5">
                      <span className="font-mono text-[10px] text-[#c9a84c]/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[12.5px] text-[#d6d6dd]">
                        {step}
                      </span>
                    </span>
                    {i < p.flow.length - 1 && (
                      <svg
                        viewBox="0 0 16 16"
                        className="h-3 w-3 shrink-0 text-[#c9a84c]/45"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M3 8h9M9 5l3 3-3 3" />
                      </svg>
                    )}
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 grid gap-5 border-t border-white/8 pt-5 sm:grid-cols-[1fr_auto] sm:items-start">
              <div>
                <p className="mb-2 text-[10px] tracking-[0.22em] text-[#6f6f79] uppercase">
                  Why it matters
                </p>
                <p className="max-w-[60ch] text-[14px] leading-relaxed text-[#a6a6b0]">
                  {p.outcome}
                </p>
              </div>
              <ul className="flex flex-wrap gap-1.5 sm:justify-end">
                {p.stack.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/10 px-2.5 py-1 font-mono text-[10.5px] tracking-wide text-[#8a8a94]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {p.url && (
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="abk-focus mt-5 inline-flex items-center gap-2 rounded-lg border border-[#c9a84c]/35 px-3.5 py-2 text-[12px] tracking-[0.1em] text-[#e4cd8a] uppercase transition-colors hover:bg-[#c9a84c]/10"
              >
                View templates
                <span aria-hidden="true">↗</span>
              </a>
            )}
          </article>
        ))}
      </div>
    </PageShell>
  );
}
