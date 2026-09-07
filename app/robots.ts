import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://abuba200611-cmd.github.io";
  const base = siteUrl.endsWith("/") ? siteUrl : `${siteUrl}/`;

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${base}sitemap.xml`,
  };
}
