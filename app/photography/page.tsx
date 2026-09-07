import type { Metadata } from "next";
import ComingSoon from "../components/ComingSoon";
import PageShell from "../components/PageShell";

export const metadata: Metadata = {
  title: "Photography",
  description: "Photography by Abubakr Mala — in preparation.",
};

/** Contact-sheet motif: empty frames waiting on film. */
function ContactSheetMotif() {
  return (
    <svg
      viewBox="0 0 300 120"
      className="h-[120px] w-full max-w-[420px] text-accent-ink"
      fill="none"
      stroke="currentColor"
      aria-hidden="true"
    >
      <rect
        x="10"
        y="26"
        width="280"
        height="68"
        rx="3"
        strokeWidth="1.2"
        opacity="0.45"
      />
      {[0, 1, 2, 3].map((i) => (
        <rect
          key={i}
          x={24 + i * 66}
          y={38}
          width="54"
          height="44"
          rx="2"
          strokeWidth="1.2"
          opacity={0.25 + i * 0.14}
        />
      ))}
      <g opacity="0.3" strokeWidth="1">
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={16 + i * 20} y={17} width="9" height="5" rx="1" />
        ))}
        {Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={16 + i * 20} y={98} width="9" height="5" rx="1" />
        ))}
      </g>
    </svg>
  );
}

export default function PhotographyPage() {
  return (
    <PageShell
      eyebrow="Visual"
      title="Photography"
      intro="Stills — composition, light and the discipline of choosing one frame."
    >
      <ComingSoon
        motif={<ContactSheetMotif />}
        note="This folder will hold a selected set of photographs. The sheet is still being edited down."
      />
    </PageShell>
  );
}
