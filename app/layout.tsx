import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata, Viewport } from "next";
import localFont from 'next/font/local';
import "./globals.css";

const soriaFont = localFont({
  src: "../public/soria-font.ttf",
  variable: "--font-soria",
});

const vercettiFont = localFont({
  src: "../public/Vercetti-Regular.woff",
  variable: "--font-vercetti",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com/'),
  title: "Abubakr Mala ✌️",
  description: "AI automation engineer, UI/UX and graphic designer building AI-powered web apps and workflow automation.",
  keywords: "Abubakr Mala, AI Automation Engineer, UI/UX Designer, Graphic Designer, n8n, Next.js, Web Development, Portfolio, Jeddah, Saudi Arabia",
  authors: [{ name: "Abubakr Mala" }],
  creator: "Abubakr Mala",
  publisher: "Abubakr Mala",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Abubakr Mala - AI Automation Engineer",
    description: "AI automation engineer, UI/UX and graphic designer.",
    siteName: "Abubakr Mala's Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abubakr Mala - AI Automation Engineer",
    description: "AI automation engineer, UI/UX and graphic designer.",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overscroll-y-none">
      <body
        className={`${soriaFont.variable} ${vercettiFont.variable} font-sans antialiased`}
      >
        {children}
      </body>
      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''}/>
    </html>
  );
}
