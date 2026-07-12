import type { MetadataRoute } from "next";
import { courses } from "./data/coursedata";
import { absoluteUrl } from "./data/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const courseEntries: MetadataRoute.Sitemap = courses.map((course) => ({
    url: absoluteUrl(`/courses/${course.id}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.9,
  }));

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: absoluteUrl("/courses"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...courseEntries,
    {
      url: absoluteUrl("/blog/how-to-become-a-barista-in-singapore"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/about"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: absoluteUrl("/student-affairs"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];
}
