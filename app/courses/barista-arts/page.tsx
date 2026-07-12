import type { Metadata } from "next";
import CourseContent from "./CourseContent";
import JsonLd from "../../_components/JsonLd";
import { breadcrumbJsonLd, courseJsonLd, courseSeoBySlug } from "../../data/seo";

const seo = courseSeoBySlug["barista-arts"];

export const metadata: Metadata = {
  title: seo.metaTitle,
  description: seo.metaDescription,
  keywords: seo.keywords,
  alternates: { canonical: `/courses/${seo.slug}` },
  openGraph: {
    url: `/courses/${seo.slug}`,
    title: seo.metaTitle,
    description: seo.metaDescription,
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={[
          courseJsonLd(seo),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
            { name: seo.courseName, path: `/courses/${seo.slug}` },
          ]),
        ]}
      />
      <CourseContent />
    </>
  );
}
