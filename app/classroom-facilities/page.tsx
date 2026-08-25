import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import {
  FiArrowRight,
  FiCheck,
  FiClock,
  FiImage,
  FiMapPin,
  FiMonitor,
  FiTool,
  FiUsers,
  FiWifi,
} from "react-icons/fi";
import JsonLd from "../_components/JsonLd";
import { breadcrumbJsonLd, SITE } from "../data/seo";

export const metadata: Metadata = {
  title: "Classroom Facilities — Beach Road Campus",
  description:
    "Explore the classroom and practical training facilities at Lumax Academy Singapore — teaching rooms, hands-on practice areas, and e-learning support at our Beach Road campus.",
  keywords: [
    "Lumax Academy facilities",
    "training classroom Singapore",
    "practical training facilities Singapore",
    "Beach Road training campus",
  ],
  alternates: { canonical: "/classroom-facilities" },
  openGraph: {
    url: "/classroom-facilities",
    title: "Classroom Facilities — Lumax Academy",
    description:
      "Classrooms, practical training areas, and e-learning support at the Lumax Academy Beach Road campus in Singapore.",
  },
};

const facilities = [
  {
    title: "Teaching classrooms",
    desc: "Bright, air-conditioned rooms set up for small-group instruction and discussion.",
    icon: FiUsers,
  },
  {
    title: "Practical training areas",
    desc: "Dedicated space for hands-on demonstration, guided practice, and skills assessment.",
    icon: FiTool,
  },
  {
    title: "Audio-visual teaching aids",
    desc: "Projection and display equipment supporting demonstrations and course materials.",
    icon: FiMonitor,
  },
  {
    title: "E-learning support",
    desc: "Campus connectivity and platform access for blended and online learning.",
    icon: FiWifi,
  },
];

export default function ClassroomFacilitiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Classroom Facilities", path: "/classroom-facilities" },
        ])}
      />
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-2) px-4 py-2 text-xs font-semibold text-slate-700">
          Campus
          <span className="text-(--brand)">•</span>
          Facilities
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Classroom Facilities
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Lumax Academy delivers face-to-face training at our Beach Road campus
          in Singapore, in classrooms and practical areas set up for hands-on,
          competency-based learning.
        </p>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)]"
            >
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-(--surface-2) text-(--brand) ring-1 ring-black/5">
                <item.icon className="h-5 w-5" aria-hidden />
              </div>
              <h2 className="mt-4 text-base font-extrabold text-slate-950">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.desc}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] lg:col-span-2">
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              GALLERY
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Inside our campus
            </h2>

            <div className="mt-6 rounded-3xl border border-dashed border-(--border) bg-(--surface-2) px-6 py-14 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white text-(--brand) ring-1 ring-black/5">
                <FiImage className="h-5 w-5" aria-hidden />
              </div>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-600">
                Photos of our classrooms and practical training areas are being
                prepared and will be published here shortly.
              </p>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Face-to-face classroom training",
                "Practical workshops",
                "Laboratory & simulation activities",
                "Project-based learning space",
              ].map((x) => (
                <div
                  key={x}
                  className="flex items-start gap-3 rounded-2xl border border-(--border) bg-(--surface-2) p-4"
                >
                  <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-(--brand) ring-1 ring-black/5">
                    <FiCheck className="h-4 w-4" aria-hidden />
                  </div>
                  <div className="text-sm font-semibold text-slate-800">{x}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-(--border) bg-(--surface-2) p-6">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                CAMPUS
              </div>
              <div className="mt-5 flex items-start gap-3">
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-(--brand) ring-1 ring-black/5">
                  <FiMapPin className="h-4 w-4" aria-hidden />
                </div>
                <div className="text-sm leading-relaxed text-slate-700">
                  <div className="font-semibold text-slate-900">
                    {SITE.address.street}
                  </div>
                  <div>
                    {SITE.address.locality} {SITE.address.postalCode}
                  </div>
                </div>
              </div>
              <a
                href={SITE.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-black/5 hover:text-(--brand)"
              >
                View on Google Maps
                <FiArrowRight className="h-4 w-4" aria-hidden />
              </a>
              <div className="mt-3 flex items-start gap-3 rounded-2xl bg-white p-4 ring-1 ring-black/5">
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand)">
                  <FiClock className="h-4 w-4" aria-hidden />
                </div>
                <p className="text-sm leading-relaxed text-slate-700">
                  Campus visits are welcome by appointment — contact us to
                  arrange a tour.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-(--border) bg-(--surface-2) p-6">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                QUICK LINKS
              </div>
              <div className="mt-5 space-y-3">
                {[
                  { label: "Our teachers", href: "/our-teachers" },
                  { label: "Explore courses", href: "/courses" },
                  { label: "Student Affairs", href: "/student-affairs" },
                  { label: "Contact us", href: "/contact" },
                ].map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-black/5 hover:text-(--brand)"
                  >
                    {l.label}
                    <FiArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
