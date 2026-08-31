import type { MetadataRoute } from "next";
import { IS_CPE_PREVIEW } from "./data/preview";
import { absoluteUrl } from "./data/seo";

export default function robots(): MetadataRoute.Robots {
  if (IS_CPE_PREVIEW) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
