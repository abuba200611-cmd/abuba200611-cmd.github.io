import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Graphic Design",
  description:
    "Brand and visual identity work by Abubakr Mala — in preparation.",
};

/** Print-plate motif: overlapping process plates in the AM blues. */
function PlatesMotif() {
  return (
    <svg
      viewBox="0 0 300 120"
      className="h-[120px] w-full max-w-[420px]"
      aria-hidden="true"
    >
      <g className="abk-plates">
        <circle cx="126" cy="56" r="36" fill="var(--plate-1)" opacity="0.55" />
        <circle cx="158" cy="56" r="36" fill="var(--plate-2)" opacity="0.55" />
        <circle cx="142" cy="80" r="36" fill="var(--plate-3)" opacity="0.5" />
      </g>
      <g stroke="var(--accent-ink)" strokeWidth="1" opacity="0.55">
        <path d="M20 20h16M28 12v16" />
        <path d="M264 20h16M272 12v16" />
        <path d="M20 100h16M28 92v16" />
        <path d="M264 100h16M272 92v16" />
      </g>
    </svg>
  );
}

export default function GraphicPage() {
  return (
    <PageShell
      eyebrow="Design"
      title="Graphic Design"
      intro="Brand systems and visual identity — logos, type, colour and the rules that keep them consistent."
    >
      <ComingSoon
        motif={<PlatesMotif />}
        note="This folder will hold identity work: marks, type and colour systems, and how each one holds up across Arabic and English."
      />
    </PageShell>
  );
}
