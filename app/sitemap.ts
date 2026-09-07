import { MetadataRoute } from "next";
import { SECTIONS } from "./data/sections";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://abuba200611-cmd.github.io";
  const base = siteUrl.endsWith("/") ? siteUrl.slice(0, -1) : siteUrl;
  const now = new Date();

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...SECTIONS.map((s) => ({
      url: `${base}${s.href}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: s.ready ? 0.8 : 0.4,
    })),
  ];
}
