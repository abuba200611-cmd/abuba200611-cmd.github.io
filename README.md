# abuba200611-cmd.github.io

Personal portfolio of **Abubakr Mala (ABK)** — AI automation engineer and designer, Jeddah, Saudi Arabia.

The site is a desktop: the home page is a set of folders, each opening a full page for one
discipline — Automation, Web Projects, UI/UX, Graphic Design, Photography.

## Tech Stack

- Next.js (App Router, static export)
- React
- Tailwind CSS v4
- Self-hosted Bebas Neue + Cairo (`next/font/local`) — no build-time font fetch

Everything visual is drawn in CSS/SVG: the wallpaper, the section icons and each section's motif.
There is no 3D runtime and no image assets in the chrome.

## Local development

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export into out/
npm run lint
```

Optional env: `NEXT_PUBLIC_SITE_URL` (canonical URL for metadata, sitemap and robots),
`NEXT_PUBLIC_GA_ID` (Google Analytics; omitted entirely when unset).

## History

Versions `v1.0`–`v1.4` were a three.js/react-three-fiber scene, adapted from
[mohitvirli/mohitvirli.github.io](https://github.com/mohitvirli/mohitvirli.github.io) — thanks to
Mohit Virli for open-sourcing it. `v2` is a full rewrite and shares no code with it; the tags remain
if you want to see the old scene.
