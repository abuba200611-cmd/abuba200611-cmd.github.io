import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Taskbar from "./components/Taskbar";
import Wallpaper from "./components/Wallpaper";
import { THEME_INIT_SCRIPT } from "./theme-script";
import "./globals.css";

// Self-hosted so the build never depends on a Google Fonts fetch.

/** Display / headings — the Didone half of the identity. */
const playfair = localFont({
  src: [
    { path: "./fonts/playfair-display-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/playfair-display-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/playfair-display-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/playfair-display-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-playfair",
  display: "swap",
});

/** Body — a neutral grotesque that lets Playfair carry the voice. */
const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/inter-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

/** Script — the "A.M" signature from the logo lockup. */
const greatVibes = localFont({
  src: "./fonts/great-vibes-latin-400-normal.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-great-vibes",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://abuba200611-cmd.github.io/"
  ),
  title: {
    default: "Abubakr Mala — AI Automation Engineer & Designer",
    template: "%s — Abubakr Mala",
  },
  description:
    "Portfolio of Abubakr Mala (AM) — n8n workflow automation, AI agents, web development and design, from Jeddah, Saudi Arabia.",
  keywords:
    "Abubakr Mala, AM, AI Automation Engineer, n8n, AI agents, Salla, UI/UX Designer, Graphic Designer, Next.js, Portfolio, Jeddah, Saudi Arabia",
  authors: [{ name: "Abubakr Mala" }],
  creator: "Abubakr Mala",
  publisher: "Abubakr Mala",
  formatDetection: { email: false, address: false, telephone: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Abubakr Mala — AI Automation Engineer & Designer",
    description:
      "n8n workflow automation, AI agents, web development and design.",
    siteName: "Abubakr Mala's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakr Mala — AI Automation Engineer & Designer",
    description:
      "n8n workflow automation, AI agents, web development and design.",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f7f4ef" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0f15" },
  ],
  initialScale: 1,
  width: "device-width",
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      // the pre-paint script sets data-theme before React hydrates
      suppressHydrationWarning
      className={`${playfair.variable} ${inter.variable} ${greatVibes.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </head>
      <body className="font-sans antialiased">
        <Wallpaper />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-accent-ink focus:px-4 focus:py-2 focus:text-on-accent"
        >
          Skip to content
        </a>
        <main id="main" className="min-h-[100dvh] pb-14">
          {children}
        </main>
        <Taskbar />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
