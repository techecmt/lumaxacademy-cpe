import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiClock } from "react-icons/fi";
import JsonLd from "../_components/JsonLd";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { absoluteUrl, blogPosts, breadcrumbJsonLd, SITE } from "../data/seo";

export const metadata: Metadata = {
  title: "Blog — Coffee, Careers & Skills Training in Singapore",
  description:
    "Guides and career advice from Lumax Academy Singapore — barista skills, coffee training, interview preparation, and tips for building career-ready skills in Singapore's café and healthcare industries.",
  keywords: [
    "Lumax Academy blog",
    "barista career guide Singapore",
    "coffee training tips Singapore",
    "skills training blog Singapore",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    url: "/blog",
    title: "Lumax Academy Blog — Coffee, Careers & Skills Training",
    description:
      "Guides and career advice on barista skills, coffee training, and building career-ready skills in Singapore.",
  },
};

const blogJsonLd = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": `${SITE.url}/blog#blog`,
  name: `${SITE.name} Blog`,
  url: absoluteUrl("/blog"),
  publisher: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-SG",
  blogPost: blogPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.datePublished,
    image: post.image,
  })),
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-SG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogIndexPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={[
          blogJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-80 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-linear-to-b from-[#fff7e8] via-white to-white">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-(--brand)/15 blur-3xl" />
            <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-(--brand-2)/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:pb-14 sm:pt-16">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-(--brand)">Blog</span>
            </nav>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Lumax Academy <span className="text-(--brand)">Blog</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Career guides, skills tips, and industry advice from our Beach Road
              campus in Singapore — starting with everything you need to launch a
              barista career.
            </p>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <article
                  key={post.slug}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-(--border) bg-white shadow-[0_18px_70px_-65px_rgba(2,6,23,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_90px_-70px_rgba(2,6,23,0.6)]"
                >
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block h-52 overflow-hidden bg-slate-100"
                  >
                    <Image
                      alt={post.imageAlt}
                      src={post.image}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#193764] backdrop-blur-sm">
                      {post.category}
                    </span>
                  </Link>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-center gap-3 text-xs font-semibold text-slate-500">
                      <time dateTime={post.datePublished}>
                        {formatDate(post.datePublished)}
                      </time>
                      <span aria-hidden>·</span>
                      <span className="inline-flex items-center gap-1">
                        <FiClock className="h-3.5 w-3.5 text-(--brand)" aria-hidden />
                        {post.readingTime}
                      </span>
                    </div>

                    <h2 className="mt-3 text-lg font-bold leading-snug text-slate-900 group-hover:text-(--brand)">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      {post.excerpt}
                    </p>

                    <div className="mt-auto pt-5">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-sm font-semibold text-(--brand) hover:underline"
                      >
                        Read article
                        <FiArrowRight className="ml-1.5 h-4 w-4" aria-hidden />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 rounded-3xl border border-(--border) bg-(--surface-2) p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Ready to build the skills, not just read about them?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Explore our hands-on certificate courses in barista arts,
                caregiving, nursing aide, and healthcare administration — taught
                at our Beach Road campus in Singapore.
              </p>
              <Link
                href="/courses"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#193764] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
              >
                Browse all courses
                <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
