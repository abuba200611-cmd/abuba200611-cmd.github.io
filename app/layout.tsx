import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Taskbar from "./components/Taskbar";
import Wallpaper from "./components/Wallpaper";
import "./globals.css";

// Self-hosted so the build never depends on a Google Fonts fetch.
const bebas = localFont({
  src: "./fonts/bebas-neue-latin-400-normal.woff2",
  weight: "400",
  style: "normal",
  variable: "--font-bebas",
  display: "swap",
});

const cairo = localFont({
  src: [
    { path: "./fonts/cairo-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/cairo-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cairo-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-cairo",
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
    "Portfolio of Abubakr Mala (ABK) — n8n workflow automation, AI agents, web development and design, from Jeddah, Saudi Arabia.",
  keywords:
    "Abubakr Mala, ABK, AI Automation Engineer, n8n, AI agents, Salla, UI/UX Designer, Graphic Designer, Next.js, Portfolio, Jeddah, Saudi Arabia",
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
  themeColor: "#0b0b0c",
  initialScale: 1,
  width: "device-width",
};

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${cairo.variable}`}>
      <body className="font-sans antialiased">
        <Wallpaper />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-[#c9a84c] focus:px-4 focus:py-2 focus:text-black"
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
