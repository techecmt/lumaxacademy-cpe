import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRight, FiCheck, FiClock, FiLayers, FiMapPin } from "react-icons/fi";
import JsonLd from "../_components/JsonLd";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { courses } from "../data/coursedata";
import { absoluteUrl, breadcrumbJsonLd, courseSeoBySlug } from "../data/seo";

export const metadata: Metadata = {
  title: "Certificate Courses in Singapore",
  description:
    "Browse all Lumax Academy certificate courses in Singapore — nursing aide, professional caregiving (elderly, autism & child care), hospital & healthcare administration, barista arts, and air-conditioning installation & maintenance. Weekend classes at Beach Road, near Nicoll Highway & Bugis MRT.",
  keywords: [
    "certificate courses Singapore",
    "skills training courses Singapore",
    "healthcare courses Singapore",
    "caregiver course Singapore",
    "barista course Singapore",
    "aircon servicing course Singapore",
    "HVAC course Singapore",
    "part-time courses Beach Road Singapore",
  ],
  alternates: { canonical: "/courses" },
  openGraph: {
    url: "/courses",
    title: "Certificate Courses in Singapore | Lumax Academy",
    description:
      "Nursing aide, caregiving, healthcare administration, barista arts and aircon & HVAC courses — weekend classes at Beach Road, Singapore.",
  },
};

const itemListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Lumax Academy Courses in Singapore",
  itemListElement: courses.map((course, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: course.title,
    url: absoluteUrl(`/courses/${course.id}`),
  })),
};

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={[
          itemListJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Courses", path: "/courses" },
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
        <section className="relative overflow-hidden bg-linear-to-b from-[#fff7e8] via-white to-white">
          <div className="absolute inset-0">
            <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-(--brand)/15 blur-3xl" />
            <div className="absolute -right-24 top-24 h-72 w-72 rounded-full bg-(--brand-2)/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-12 sm:pb-16 sm:pt-16">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-(--brand)">Courses</span>
            </nav>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Certificate Courses in{" "}
              <span className="text-(--brand)">Singapore</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Practical, part-time certificate courses in healthcare, caregiving,
              barista arts, and air-conditioning &amp; HVAC maintenance — taught
              with hands-on training at our Beach Road
              campus at The Plaza, a short walk from Nicoll Highway and Bugis
              MRT. Weekend schedules designed for working adults, employers
              upskilling care staff, and career switchers.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-(--border) bg-white/80 px-4 py-2 text-xs font-semibold text-slate-700">
              <FiMapPin className="h-4 w-4 text-(--brand)" aria-hidden />
              7500A Beach Rd, #01-308 THE PLAZA, Singapore 199591 · Open daily
              except Thursday
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2">
              {courses.map((course) => {
                const seo = courseSeoBySlug[course.id];
                return (
                  <article
                    key={course.id}
                    className="group flex flex-col overflow-hidden rounded-3xl border border-(--border) bg-white shadow-[0_18px_70px_-65px_rgba(2,6,23,0.55)] transition hover:-translate-y-0.5 hover:shadow-[0_30px_90px_-70px_rgba(2,6,23,0.6)]"
                  >
                    <div className="relative h-56 overflow-hidden bg-slate-100 sm:h-64">
                      <Image
                        alt={`${course.title} — course in Singapore at Lumax Academy`}
                        src={course.image}
                        fill
                        sizes="(min-width: 768px) 50vw, 100vw"
                        className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-[#193764]/60 via-transparent to-transparent" />
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <h2 className="text-xl font-bold leading-snug text-slate-900 group-hover:text-(--brand)">
                        <Link href={`/courses/${course.id}`}>{course.title}</Link>
                      </h2>

                      {seo ? (
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">
                          {seo.courseDescription}
                        </p>
                      ) : null}

                      <div className="mt-4 flex flex-wrap gap-2 text-xs font-semibold text-slate-600">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-(--surface-2) px-3 py-1">
                          <FiLayers className="h-3.5 w-3.5 text-(--brand)" aria-hidden />
                          {course.moduleCount} modules
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-(--surface-2) px-3 py-1">
                          <FiClock className="h-3.5 w-3.5 text-(--brand)" aria-hidden />
                          {course.hours}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-(--surface-2) px-3 py-1">
                          <FiMapPin className="h-3.5 w-3.5 text-(--brand)" aria-hidden />
                          Beach Road, Singapore
                        </span>
                      </div>

                      <div className="mt-4 border-t border-(--border) pt-4">
                        <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                          Who is this for
                        </div>
                        <ul className="mt-2 space-y-1">
                          {course.targetAudience.slice(0, 3).map((t) => (
                            <li
                              key={t}
                              className="flex items-center gap-2 text-xs text-slate-600"
                            >
                              <FiCheck className="h-3 w-3 shrink-0 text-(--brand)" aria-hidden />
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-auto pt-5">
                        <Link
                          href={`/courses/${course.id}`}
                          className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-5 py-2.5 text-sm font-semibold text-white shadow-sm shadow-[#faa426]/25 hover:brightness-110"
                        >
                          View course details
                          <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="mt-12 rounded-3xl border border-(--border) bg-(--surface-2) p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                Not sure which course fits you?
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
                Whether you&rsquo;re upskilling as healthcare support staff, an
                employer training caregivers, or starting a barista career in
                Singapore&rsquo;s F&amp;B scene, our team can recommend the right
                programme and share upcoming intake dates.
              </p>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#193764] px-6 py-3 text-sm font-semibold text-white hover:brightness-110"
              >
                Talk to our team
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
