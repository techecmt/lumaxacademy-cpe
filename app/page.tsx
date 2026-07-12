import type { Metadata } from "next";
import HomeContent from "./HomeContent";
import JsonLd from "./_components/JsonLd";
import { SITE } from "./data/seo";

export const metadata: Metadata = {
  title: {
    absolute: "Lumax Academy Singapore | Healthcare, Caregiving & Barista Courses",
  },
  description:
    "Skills training academy at The Plaza, Beach Road Singapore — near Nicoll Highway & Bugis MRT. Hands-on certificate courses in nursing aide, caregiving (elderly, autism & child care), healthcare administration and barista arts. Open 7 days.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Lumax Academy Singapore | Healthcare, Caregiving & Barista Courses",
    description:
      "Hands-on certificate courses at Beach Road, Singapore — nursing aide, caregiving, healthcare administration and barista arts. Open 7 days.",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE.url}/#website`,
  name: SITE.name,
  url: SITE.url,
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-SG",
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteJsonLd} />
      <HomeContent />
    </>
  );
}
