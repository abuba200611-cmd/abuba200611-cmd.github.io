import type { SectionSlug } from "../data/sections";

type Props = { slug: SectionSlug; className?: string };

/**
 * Original line icons drawn for the AM identity. One visual idea each:
 * automation = a node graph, web = a layout frame, ui-ux = a wireframe flow,
 * graphic = overlapping print plates, photography = an aperture.
 */
export default function SectionIcon({ slug, className }: Props) {
  const common = {
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true,
  };

  switch (slug) {
    case "automation":
      return (
        <svg {...common}>
          <path d="M13 14h6M13 24h9M13 34h6" opacity="0.9" />
          <path d="M22 14h4a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4" opacity="0.55" />
          <circle cx="10" cy="14" r="3" />
          <circle cx="10" cy="24" r="3" />
          <circle cx="10" cy="34" r="3" />
          <rect x="30" y="18" width="10" height="12" rx="3" />
          <path d="M33 24h4" />
        </svg>
      );
    case "web":
      return (
        <svg {...common}>
          <rect x="7" y="11" width="34" height="26" rx="4" />
          <path d="M7 19h34" />
          <circle cx="12" cy="15" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="16" cy="15" r="1.1" fill="currentColor" stroke="none" />
          <circle cx="20" cy="15" r="1.1" fill="currentColor" stroke="none" />
          <path d="M13 25h9M13 30h14" opacity="0.7" />
          <path d="M28 24l4 3-4 3" opacity="0.9" />
        </svg>
      );
    case "ui-ux":
      return (
        <svg {...common}>
          <rect x="8" y="10" width="14" height="12" rx="2.5" />
          <rect x="8" y="27" width="14" height="11" rx="2.5" opacity="0.55" />
          <rect x="28" y="16" width="12" height="16" rx="2.5" />
          <path d="M22 16h6" opacity="0.8" />
          <path d="M22 32h6" opacity="0.5" />
          <path d="M26 14l2 2-2 2" opacity="0.8" />
        </svg>
      );
    case "graphic":
      return (
        <svg {...common}>
          <circle cx="20" cy="20" r="9" opacity="0.9" />
          <circle cx="28" cy="20" r="9" opacity="0.55" />
          <circle cx="24" cy="28" r="9" opacity="0.35" />
          <path d="M10 39h28" opacity="0.6" />
        </svg>
      );
    case "photography":
      return (
        <svg {...common}>
          <circle cx="24" cy="24" r="13" />
          <path d="M24 11v11M35.3 17.5 25.5 23M35.3 30.5 25.5 25M24 37V26M12.7 30.5 22.5 25M12.7 17.5 22.5 23" opacity="0.75" />
          <circle cx="24" cy="24" r="3.2" fill="currentColor" stroke="none" opacity="0.9" />
        </svg>
      );
  }
}
