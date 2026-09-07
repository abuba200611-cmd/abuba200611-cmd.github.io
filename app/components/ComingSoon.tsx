import type { ReactNode } from "react";
import { SOCIAL_LINKS } from "../data/links";

type Props = {
  /** what will land here, stated plainly — no invented work */
  note: string;
  /** the section's own visual motif, drawn in CSS/SVG */
  motif: ReactNode;
};

export default function ComingSoon({ note, motif }: Props) {
  const email = SOCIAL_LINKS.find((l) => l.name === "Email");

  return (
    <section className="abk-glass overflow-hidden rounded-2xl">
      <div className="relative grid place-items-center border-b border-line bg-surface-2/80 px-6 py-14">
        {motif}
      </div>

      <div className="px-6 py-8 sm:px-9 sm:py-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-accent-line bg-accent-soft px-3 py-1 text-[10.5px] tracking-[0.2em] text-accent-ink uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-ink" />
          In preparation
        </p>

        <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-muted">
          {note}
        </p>

        <p className="mt-3 max-w-[58ch] text-[14px] leading-relaxed text-faint">
          Nothing is published here yet — I would rather leave a folder empty
          than fill it with placeholders.
        </p>

        {email && (
          <a
            href={email.url}
            className="abk-focus mt-6 inline-flex items-center gap-2 rounded-lg border border-line-2 px-4 py-2.5 text-[12px] tracking-[0.1em] text-ink-2 uppercase transition-colors hover:border-accent-line-strong hover:text-accent-ink"
          >
            Ask me about this work
          </a>
        )}
      </div>
    </section>
  );
}
