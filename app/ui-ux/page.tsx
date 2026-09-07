import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "UI / UX",
  description:
    "Interface and product design work by Abubakr Mala — in preparation.",
};

/** Wireframe motif: boxes resolving into a screen. */
function WireframeMotif() {
  return (
    <svg
      viewBox="0 0 300 120"
      className="h-[120px] w-full max-w-[420px] text-[#c9a84c]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      aria-hidden="true"
    >
      <rect x="8" y="14" width="78" height="92" rx="5" opacity="0.28" />
      <rect x="18" y="26" width="46" height="5" rx="2.5" opacity="0.28" />
      <rect x="18" y="40" width="58" height="30" rx="3" opacity="0.2" />
      <rect x="18" y="78" width="38" height="5" rx="2.5" opacity="0.2" />

      <rect x="110" y="14" width="78" height="92" rx="5" opacity="0.55" />
      <rect x="120" y="26" width="46" height="5" rx="2.5" opacity="0.55" />
      <rect x="120" y="40" width="58" height="30" rx="3" opacity="0.4" />
      <rect x="120" y="78" width="38" height="5" rx="2.5" opacity="0.4" />

      <rect x="212" y="14" width="80" height="92" rx="5" />
      <rect x="222" y="26" width="46" height="5" rx="2.5" />
      <rect x="222" y="40" width="60" height="30" rx="3" />
      <rect x="222" y="78" width="34" height="10" rx="5" />
      <path d="M92 60h12M194 60h12" opacity="0.5" strokeDasharray="3 3" />
    </svg>
  );
}

export default function UiUxPage() {
  return (
    <PageShell
      eyebrow="Design"
      title="UI / UX"
      intro="Interface and product design — the part of a build where the flow gets decided before a line of code is written."
    >
      <ComingSoon
        motif={<WireframeMotif />}
        note="This folder will hold interface work: flows, wireframes and the reasoning behind each screen, taken from the products I build rather than from dribbble shots."
      />
    </PageShell>
  );
}
