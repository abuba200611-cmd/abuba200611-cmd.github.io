export type SectionSlug =
  | "automation"
  | "web"
  | "ui-ux"
  | "graphic"
  | "photography";

export type Section = {
  slug: SectionSlug;
  label: string;
  tagline: string;
  href: string;
  ready: boolean;
};

export const SECTIONS: Section[] = [
  {
    slug: "automation",
    label: "Automation",
    tagline: "n8n workflows & AI agents",
    href: "/automation",
    ready: true,
  },
  {
    slug: "web",
    label: "Web Projects",
    tagline: "Sites and full-stack apps",
    href: "/web",
    ready: true,
  },
  {
    slug: "ui-ux",
    label: "UI / UX",
    tagline: "Interface & product design",
    href: "/ui-ux",
    ready: false,
  },
  {
    slug: "graphic",
    label: "Graphic Design",
    tagline: "Brand & visual identity",
    href: "/graphic",
    ready: false,
  },
  {
    slug: "photography",
    label: "Photography",
    tagline: "Stills & composition",
    href: "/photography",
    ready: false,
  },
];
