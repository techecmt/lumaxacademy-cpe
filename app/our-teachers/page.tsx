import type { Metadata } from "next";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import {
  FiAward,
  FiBookOpen,
  FiCheck,
  FiUser,
  FiUsers,
} from "react-icons/fi";
import JsonLd from "../_components/JsonLd";
import { breadcrumbJsonLd } from "../data/seo";
import { teachers } from "../data/teachers";

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

        <section className="mt-10">
          <div className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)]">
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              TEACHING TEAM
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight">
              Meet our trainers
            </h2>

            <div className="mt-6 space-y-6">
              {teachers.map((teacher) => (
                <article
                  key={teacher.name}
                  className="rounded-3xl border border-(--border) bg-(--surface-2) p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-white text-(--brand) ring-1 ring-black/5">
                      <FiUser className="h-7 w-7" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-lg font-extrabold text-slate-950">
                          {teacher.name}
                        </h3>
                        <span className="rounded-full bg-(--brand)/10 px-3 py-1 text-xs font-semibold text-(--brand)">
                          {teacher.employment}
                        </span>
                      </div>
                      <div className="mt-1 space-y-2">
                        {teacher.credentials.map((credential) => (
                          <div key={`${credential.qualification}-${credential.institution}`}>
                            <p className="text-sm font-semibold text-slate-700">
                              {credential.qualification}
                            </p>
                            <p className="mt-0.5 text-sm text-slate-500">
                              {credential.institution}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {teacher.courses.length > 0 ? (
                    <div className="mt-6 border-t border-(--border) pt-6">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h4 className="text-sm font-extrabold tracking-wide text-slate-950">
                          Courses &amp; Modules
                        </h4>
                        <span className="text-xs font-semibold text-slate-500">
                          {teacher.courses.length} Courses
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2">
                        {teacher.courses.map((course) => (
                          <li
                            key={course.title}
                            className="flex items-start justify-between gap-4 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5"
                          >
                            <span className="text-sm font-medium text-slate-700">
                              {course.title}
                            </span>
                            <span className="shrink-0 text-xs font-semibold text-slate-500">
                              {course.moduleCount}{" "}
                              {course.moduleCount === 1 ? "module" : "modules"}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </article>
              ))}
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
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
