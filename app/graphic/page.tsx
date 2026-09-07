import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Graphic Design",
  description:
    "Brand and visual identity work by Abubakr Mala — in preparation.",
};

/** Print-plate motif: overlapping process colours in the ABK palette. */
function PlatesMotif() {
  return (
    <svg
      viewBox="0 0 300 120"
      className="h-[120px] w-full max-w-[420px]"
      aria-hidden="true"
    >
      <g style={{ mixBlendMode: "screen" }}>
        <circle cx="126" cy="56" r="36" fill="#c9a84c" opacity="0.5" />
        <circle cx="158" cy="56" r="36" fill="#8a7233" opacity="0.5" />
        <circle cx="142" cy="80" r="36" fill="#e4cd8a" opacity="0.32" />
      </g>
      <g stroke="#c9a84c" strokeWidth="1" opacity="0.45">
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
