import type { Metadata } from "next";
import ReviewsCollectionContent from "./ReviewsCollectionContent";

export const metadata: Metadata = {
  title: "Share Your Student Review",
  description:
    "Share your experience as a Lumax Academy student. Your feedback helps future learners in Singapore choose the right course.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: "/reviews-collection" },
};

export default function Page() {
  return <ReviewsCollectionContent />;
}
