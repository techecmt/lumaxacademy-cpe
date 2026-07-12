import type { Metadata } from "next";
import AboutContent from "./AboutContent";
import JsonLd from "../_components/JsonLd";
import { breadcrumbJsonLd } from "../data/seo";

export const metadata: Metadata = {
  title: "About Us — Skills Training Institute in Singapore",
  description:
    "Learn about Lumax Academy, a Singapore-based skills training institute at Beach Road delivering hands-on certificate programmes in healthcare, caregiving, hospitality, and more — with face-to-face and e-learning pathways.",
  keywords: [
    "about Lumax Academy",
    "skills training institute Singapore",
    "vocational education Singapore",
    "training academy Beach Road Singapore",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About Lumax Academy — Skills Training Institute in Singapore",
    description:
      "Singapore-based skills training institute delivering hands-on, industry-relevant certificate programmes at Beach Road.",
  },
};

export default function Page() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
        ])}
      />
      <AboutContent />
    </>
  );
}
