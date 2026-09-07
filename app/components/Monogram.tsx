/**
 * The AM monogram — a serif "AM" set in the display face inside an SVG, so it
 * scales cleanly and inherits `currentColor` (it inverts with the theme).
 *
 * This is the single place the mark is drawn. To swap in the real logo file
 * later, replace the <text> below with the logo's <path> — nothing else in the
 * app needs to change.
 */
export default function Monogram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <text
        x="20"
        y="28.5"
        textAnchor="middle"
        className="font-display"
        fontSize="22"
        fontWeight={600}
        letterSpacing="0.2"
        fill="currentColor"
      >
        AM
      </text>
    </svg>
  );
}
