import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/i18n";

/** The funnel is not blocked here: it says `noindex` itself, and a crawler blocked from it could
 * never read that and might index the bare URL from an ad link. */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/auth/", "/lang"] },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
