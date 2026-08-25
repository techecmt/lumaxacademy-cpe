import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiCheck,
  FiClock,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import JsonLd from "../_components/JsonLd";
import { breadcrumbJsonLd } from "../data/seo";

export const metadata: Metadata = {
  title: "Our Teachers — Trainers & Assessors",
  description:
    "Meet the trainers and assessors at Lumax Academy Singapore — industry-experienced professionals delivering hands-on certificate programmes in healthcare, caregiving, hospitality, and more.",
  keywords: [
    "Lumax Academy trainers",
    "teachers Singapore training academy",
    "vocational trainers Singapore",
    "certified assessors Singapore",
  ],
  alternates: { canonical: "/our-teachers" },
  openGraph: {
    url: "/our-teachers",
    title: "Our Teachers — Lumax Academy",
    description:
      "Industry-experienced trainers and assessors delivering hands-on, practical education at Lumax Academy Singapore.",
  },
};

const strengths = [
  {
    title: "Industry experience",
    desc: "Trainers bring real workplace practice from the sectors they teach, not theory alone.",
    icon: FiAward,
  },
  {
    title: "Approved deployment",
    desc: "Every trainer is approved by the Academic Board against the required qualifications and experience criteria.",
    icon: FiCheck,
  },
  {
    title: "Practical teaching",
    desc: "Hands-on demonstration, guided practice, and competency-based assessment in every module.",
    icon: FiBookOpen,
  },
  {
    title: "Learner support",
    desc: "Small groups, individual feedback, and guidance that continues beyond the classroom.",
    icon: FiUsers,
  },
];

export default function OurTeachersPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Our Teachers", path: "/our-teachers" },
        ])}
      />
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-2) px-4 py-2 text-xs font-semibold text-slate-700">
          Our People
          <span className="text-(--brand)">•</span>
          Trainers & Assessors
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Teachers
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Lumax Academy trainers are industry-experienced professionals who
          teach the skills they have practised. Each trainer is approved by our
          Academic Board and delivers practical, competency-based learning at
          our Beach Road campus and through e-learning.
        </p>

        <section className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {strengths.map((item) => (
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
              TEACHING TEAM
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Meet our trainers
            </h2>

            <div className="mt-6 rounded-3xl border border-dashed border-(--border) bg-(--surface-2) px-6 py-14 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-white text-(--brand) ring-1 ring-black/5">
                <FiClock className="h-5 w-5" aria-hidden />
              </div>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-slate-600">
                Individual trainer profiles — name, qualifications, and teaching
                areas — are being finalised and will be published here shortly.
              </p>
            </div>

            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-(--border) bg-(--surface-2) p-4">
              <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-(--brand) ring-1 ring-black/5">
                <FiUser className="h-4 w-4" aria-hidden />
              </div>
              <p className="text-sm leading-relaxed text-slate-700">
                Trainer deployment is approved by the Academic Board after
                verifying that each person meets the required minimum
                qualifications, experience, and other prescribed criteria.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-(--border) bg-(--surface-2) p-6">
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              QUICK LINKS
            </div>
            <div className="mt-5 space-y-3">
              {[
                { label: "About Lumax Academy", href: "/about" },
                { label: "Academic Board", href: "/about#academic-board" },
                { label: "Classroom facilities", href: "/classroom-facilities" },
                { label: "Explore courses", href: "/courses" },
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
          </aside>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
