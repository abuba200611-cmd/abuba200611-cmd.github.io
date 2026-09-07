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
      <div className="relative grid place-items-center border-b border-white/8 bg-black/20 px-6 py-14">
        {motif}
      </div>

      <div className="px-6 py-8 sm:px-9 sm:py-10">
        <p className="inline-flex items-center gap-2 rounded-full border border-[#c9a84c]/30 bg-[#c9a84c]/[0.07] px-3 py-1 text-[10.5px] tracking-[0.2em] text-[#e4cd8a] uppercase">
          <span className="h-1.5 w-1.5 rounded-full bg-[#c9a84c]" />
          In preparation
        </p>

        <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-[#a6a6b0]">
          {note}
        </p>

        <p className="mt-3 max-w-[58ch] text-[14px] leading-relaxed text-[#6f6f79]">
          Nothing is published here yet — I would rather leave a folder empty
          than fill it with placeholders.
        </p>

        {email && (
          <a
            href={email.url}
            className="abk-focus mt-6 inline-flex items-center gap-2 rounded-lg border border-white/12 px-4 py-2.5 text-[12px] tracking-[0.1em] text-[#d6d6dd] uppercase transition-colors hover:border-[#c9a84c]/40 hover:text-[#e4cd8a]"
          >
            Ask me about this work
          </a>
        )}
      </div>
    </section>
  );
}
