import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCalendar,
  FiCheck,
  FiClock,
  FiCpu,
  FiDownload,
  FiFileText,
  FiMapPin,
  FiMonitor,
  FiSettings,
  FiShield,
  FiTool,
  FiTrendingUp,
  FiUsers,
  FiZap,
} from "react-icons/fi";
import JsonLd from "../../_components/JsonLd";
import SiteFooter from "../../_components/SiteFooter";
import SiteHeader from "../../_components/SiteHeader";
import { SITE, absoluteUrl } from "../../data/seo";

const courseName = "Diploma in Mechanical and Electrical (M&E) Engineering";
const coursePath =
  "/diploma-courses/diploma-in-mechanical-engineering";

export const metadata: Metadata = {
  title: "Diploma in Mechanical & Electrical Engineering Singapore",
  description:
    "Part-time Diploma in Mechanical and Electrical (M&E) Engineering covering building services, M&E equipment, CAD, engineering science and workplace safety. 8 months, 144 contact hours.",
  keywords: [
    "diploma mechanical electrical engineering Singapore",
    "M&E engineering diploma Singapore",
    "building services course Singapore",
    "part time engineering diploma Singapore",
    "M&E coordinator course",
  ],
  alternates: { canonical: coursePath },
  openGraph: {
    url: coursePath,
    title: "Diploma in Mechanical & Electrical Engineering Singapore",
    description:
      "Build practical knowledge of modern M&E systems, building services, CAD, engineering science and workplace safety in this 8-month part-time diploma.",
  },
};

const modules = [
  {
    code: "ME01",
    title: "Engineering Mathematics",
    hours: "24",
    assessment: "Written Exam 100%",
  },
  {
    code: "ME02",
    title: "Engineering Science",
    hours: "24",
    assessment: "Written Exam 100%",
  },
  {
    code: "ME03",
    title: "Computer-aided Design",
    hours: "24",
    assessment: "Written Exam 100%",
  },
  {
    code: "ME04",
    title: "M & E Equipment",
    hours: "24",
    assessment: "Written Exam 100%",
  },
  {
    code: "ME05",
    title: "Mechanical & Electrical Services for Building Facilities",
    hours: "24",
    assessment: "Written Exam 100%",
  },
  {
    code: "ME06",
    title: "Work Place Safety and Health",
    hours: "24",
    assessment: "Written Exam 100%",
  },
];

const courseFacts: {
  label: string;
  value: string;
  detail: string;
  icon: IconType;
}[] = [
  {
    label: "Study Mode",
    value: "Part Time",
    detail: "Designed for working learners",
    icon: FiClock,
  },
  {
    label: "Course Duration",
    value: "08 Months",
    detail: "Structured, progressive learning",
    icon: FiCalendar,
  },
  {
    label: "Contact Hours",
    value: "144 Hours",
    detail: "Across six core modules",
    icon: FiBookOpen,
  },
  {
    label: "Teaching Mode",
    value: "Face to Face",
    detail: "Classroom and practical classes",
    icon: FiMonitor,
  },
];

const focusAreas: { title: string; description: string; icon: IconType }[] = [
  {
    title: "Modern M&E systems",
    description:
      "Understand mechanical and electrical systems, services, equipment and their role in building facilities.",
    icon: FiSettings,
  },
  {
    title: "Smart built environments",
    description:
      "Explore automation, AI-driven controls and green building management for efficient facilities.",
    icon: FiCpu,
  },
  {
    title: "Practical engineering foundation",
    description:
      "Build core capability in engineering mathematics, science and computer-aided design.",
    icon: FiTool,
  },
  {
    title: "Safe working practices",
    description:
      "Learn workplace safety and health principles relevant to M&E and construction environments.",
    icon: FiShield,
  },
];

const careers = [
  "M&E Assistant Engineer",
  "Site Engineer",
  "M&E Coordinator",
  "Technical Officer",
  "Building Services Assistant",
  "Facilities Technical Executive",
];

const entryRequirements = [
  "Minimum age requirement: 16 years old.",
  "Minimum three GCE 'O' Level subjects or an International Secondary qualification, including English and any two science subjects.",
  "English language proficiency at GCE 'O' Level or equivalent.",
  "Mature candidates: minimum 30 years old with eight years of working experience and another relevant certificate qualification.",
];

const refundPolicy = [
  {
    refund: "100%",
    label: "Maximum refund",
    timing: "More than 30 days before the Course Commencement Date.",
  },
  {
    refund: "50%",
    label: "Partial refund",
    timing:
      "Before, but not more than 30 days before the Course Commencement Date.",
  },
  {
    refund: "25%",
    label: "Partial refund",
    timing:
      "After, but not more than 15 days after the Course Commencement Date.",
  },
  {
    refund: "0%",
    label: "No refund",
    timing: "More than 15 days after the Course Commencement Date.",
  },
];

const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  "@id": `${absoluteUrl(coursePath)}#course`,
  name: courseName,
  description:
    "An eight-month part-time diploma covering modern M&E systems and services, building equipment, engineering mathematics, CAD, workplace safety, automation and smart building facilities.",
  url: absoluteUrl(coursePath),
  provider: {
    "@type": "EducationalOrganization",
    name: SITE.name,
    url: SITE.url,
  },
  educationalCredentialAwarded: courseName,
  teaches: modules.map((module) => module.title),
  availableLanguage: "en",
  timeRequired: "PT144H",
  offers: {
    "@type": "Offer",
    price: 2400,
    priceCurrency: "SGD",
    availability: "https://schema.org/InStock",
    url: absoluteUrl(coursePath),
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Onsite",
    courseWorkload: "PT144H",
    location: {
      "@type": "Place",
      name: `${SITE.name} — The Plaza, Beach Road`,
      address: {
        "@type": "PostalAddress",
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.countryCode,
      },
    },
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Diploma Courses",
      item: absoluteUrl("/diploma-courses"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: courseName,
      item: absoluteUrl(coursePath),
    },
  ],
};

export default function MechanicalEngineeringDiplomaPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd data={[courseJsonLd, breadcrumbJsonLd]} />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-80 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:shadow"
      >
        Skip to content
      </a>

      <SiteHeader />

      <main id="main">
        <section className="relative isolate overflow-hidden bg-[#07182d] text-white">
          <div className="absolute inset-0 -z-20">
            <Image
              src="https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1800&q=85"
              alt="Mechanical and electrical engineers working with modern industrial equipment"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center opacity-55"
            />
          </div>
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-[#07182d] via-[#07182d]/95 to-[#07182d]/45" />
          <div className="absolute inset-0 -z-10 bg-linear-to-t from-[#07182d] via-transparent to-[#07182d]/50" />
          <div
            className="absolute inset-0 -z-10 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.7) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.7) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-24 sm:pt-14 lg:pb-28">
            <nav
              aria-label="Breadcrumb"
              className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/60"
            >
              <Link href="/" className="transition hover:text-white">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span>Diploma Courses</span>
              <span aria-hidden>/</span>
              <span className="text-(--brand)">M&amp;E Engineering</span>
            </nav>

            <div className="mt-10 max-w-4xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold backdrop-blur">
                <FiZap className="h-4 w-4 text-(--brand)" aria-hidden />
                Built Environment · Engineering Diploma
              </div>

              <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[62px] lg:leading-[1.04]">
                Diploma in{" "}
                <span className="text-(--brand)">
                  Mechanical and Electrical
                </span>{" "}
                <span className="block">(M&amp;E) Engineering</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 sm:text-lg">
                Specialise in the Built Environment. Learn the principles behind
                the latest M&amp;E systems and services, advanced building
                equipment, and the automation shaping eco-friendly, AI-enabled
                facilities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#faa426]/20 transition hover:brightness-110"
                >
                  Register Now
                  <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                    `Brochure request: ${courseName}`,
                  )}`}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur transition hover:bg-white/15"
                >
                  <FiDownload className="mr-2 h-4 w-4" aria-hidden />
                  Request Brochure
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["08", "Months"],
                  ["144", "Contact Hours"],
                  ["06", "Core Modules"],
                  ["1:40", "Class Ratio"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/12 bg-white/8 p-4 backdrop-blur"
                  >
                    <div className="text-2xl font-extrabold">{value}</div>
                    <div className="mt-1 text-xs font-semibold text-white/60">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-100 bg-white">
          <div className="mx-auto grid max-w-7xl gap-px bg-slate-100 px-4 sm:grid-cols-2 lg:grid-cols-4">
            {courseFacts.map((fact) => (
              <div
                key={fact.label}
                className="flex items-start gap-4 bg-white px-4 py-7"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-(--surface-2) text-(--brand)">
                  <fact.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
                    {fact.label}
                  </div>
                  <div className="mt-1 font-extrabold text-slate-950">
                    {fact.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {fact.detail}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="programme" className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-16">
              <div className="lg:sticky lg:top-28">
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-(--brand)">
                  Programme Details
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Engineering smarter, greener buildings
                </h2>
                <p className="mt-5 text-base leading-relaxed text-slate-600">
                  The Diploma in Mechanical and Electrical (M&amp;E) Engineering
                  specialises in the Built Environment, introducing the principles
                  and concepts behind modern M&amp;E systems, services and advanced
                  building-facility equipment.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  Building infrastructure is becoming more energy-focused through
                  automation and AI-driven controls, including Green Building
                  Management Systems. This programme strengthens the foundational
                  skills needed to understand these advanced systems and develop
                  new, industry-relevant capabilities.
                </p>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  It is ideal for professionals in M&amp;E or construction who
                  want to upgrade their skills, and for career switchers pursuing
                  assistant engineer, site engineer, M&amp;E coordinator, technical
                  officer or related roles.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {focusAreas.map((area) => (
                  <article
                    key={area.title}
                    className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_20px_70px_-60px_rgba(2,6,23,0.55)] transition hover:-translate-y-1"
                  >
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-(--brand) text-white">
                      <area.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {area.description}
                    </p>
                  </article>
                ))}
                <div className="relative col-span-full overflow-hidden rounded-3xl bg-[#193764] p-7 text-white sm:p-8">
                  <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-(--brand)/25 blur-3xl" />
                  <div className="relative flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-(--brand)">
                      <FiTrendingUp className="h-6 w-6" aria-hidden />
                    </div>
                    <div>
                      <div className="text-xl font-extrabold">
                        Upgrade or make a career switch
                      </div>
                      <p className="mt-1 text-sm leading-relaxed text-white/70">
                        Build knowledge for technical and coordination roles
                        across M&amp;E, construction and facilities management.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="course-outline" className="bg-(--surface-2) py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-(--brand)">
                Course Outline
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Six modules. One solid engineering foundation.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Every module includes 24 contact hours and is assessed through a
                written examination.
              </p>
            </div>

            <div className="mt-10 overflow-hidden rounded-3xl border border-(--border) bg-white shadow-[0_24px_90px_-65px_rgba(2,6,23,0.55)]">
              <div className="hidden grid-cols-[100px_1fr_150px_190px] bg-[#193764] px-6 py-4 text-xs font-bold uppercase tracking-wider text-white/70 md:grid">
                <span>Code</span>
                <span>Module Title</span>
                <span>Contact Hours</span>
                <span>Assessment Mode</span>
              </div>
              <div className="divide-y divide-(--border)">
                {modules.map((module, index) => (
                  <article
                    key={module.code}
                    className="grid gap-4 p-5 transition hover:bg-orange-50/50 md:grid-cols-[100px_1fr_150px_190px] md:items-center md:px-6"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-(--brand) text-xs font-extrabold text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-extrabold text-(--brand-2) md:hidden">
                        {module.code}
                      </span>
                    </div>
                    <div>
                      <div className="hidden text-xs font-extrabold text-(--brand) md:block">
                        {module.code}
                      </div>
                      <h3 className="mt-0.5 font-extrabold text-slate-950">
                        {module.title}
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <FiClock className="h-4 w-4 text-(--brand)" aria-hidden />
                      {module.hours} Hours
                    </div>
                    <div className="flex items-center gap-2 text-sm font-semibold text-slate-600">
                      <FiFileText className="h-4 w-4 text-(--brand)" aria-hidden />
                      {module.assessment}
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#07182d] py-16 text-white sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="rounded-4xl border border-white/10 bg-white/6 p-6 sm:p-9">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-(--brand)">
                  <FiCheck className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-6 text-[13px] font-bold uppercase tracking-[0.2em] text-(--brand)">
                  Entry Qualification
                </p>
                <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
                  Your route into M&amp;E engineering
                </h2>
                <ul className="mt-7 grid gap-3">
                  {entryRequirements.map((requirement) => (
                    <li
                      key={requirement}
                      className="flex items-start gap-3 rounded-2xl bg-white/7 p-4 ring-1 ring-white/10"
                    >
                      <FiCheck
                        className="mt-0.5 h-4 w-4 shrink-0 text-(--brand)"
                        aria-hidden
                      />
                      <span className="text-sm leading-relaxed text-white/80">
                        {requirement}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-6">
                <div className="rounded-4xl border border-white/10 bg-white/6 p-6 sm:p-8">
                  <FiUsers className="h-7 w-7 text-(--brand)" aria-hidden />
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-white/50">
                    Teacher-to-Student Ratio
                  </p>
                  <div className="mt-2 text-4xl font-extrabold">1 : 40</div>
                  <p className="mt-2 text-sm text-white/65">
                    Lecture and practical classes
                  </p>
                </div>
                <div className="rounded-4xl border border-white/10 bg-white/6 p-6 sm:p-8">
                  <FiAward className="h-7 w-7 text-(--brand)" aria-hidden />
                  <p className="mt-5 text-xs font-bold uppercase tracking-widest text-white/50">
                    Graduation Requirements
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-white/75">
                    <li className="flex gap-2">
                      <FiCheck className="mt-0.5 shrink-0 text-(--brand)" />
                      75% class attendance in every module
                    </li>
                    <li className="flex gap-2">
                      <FiCheck className="mt-0.5 shrink-0 text-(--brand)" />
                      Pass all six modules
                    </li>
                  </ul>
                </div>
                <div className="rounded-4xl border border-(--brand)/30 bg-(--brand)/10 p-6">
                  <p className="text-sm leading-relaxed text-white/80">
                    The diploma is awarded by{" "}
                    <strong className="text-white">
LUMAX ACADEMY PTE LTD                    </strong>
                    .
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-(--brand)">
                  Class Schedule
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Flexible around your work week
                </h2>
                <div className="mt-8 grid gap-4">
                  <div className="rounded-3xl border border-(--border) bg-white p-6">
                    <div className="flex gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--surface-2) text-(--brand)">
                        <FiCalendar className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-extrabold text-slate-950">
                          Weekend
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          Saturday or Sunday · 4 hours per week
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          10AM–2PM · 2PM–6PM · 6PM–10PM
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-3xl border border-(--border) bg-white p-6">
                    <div className="flex gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--surface-2) text-(--brand)">
                        <FiClock className="h-5 w-5" aria-hidden />
                      </span>
                      <div>
                        <h3 className="font-extrabold text-slate-950">
                          Weekday
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-600">
                          Wednesday and Friday
                        </p>
                        <p className="mt-1 text-sm font-semibold text-slate-800">
                          7PM–9PM
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-(--brand)">
                  Career Opportunities
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Build your path in the Built Environment
                </h2>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {careers.map((career) => (
                    <div
                      key={career}
                      className="flex items-center gap-3 rounded-2xl border border-(--border) bg-white p-4"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--brand) text-white">
                        <FiBriefcase className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="text-sm font-bold text-slate-800">
                        {career}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-(--surface-2) py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
              <div>
                <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-(--brand)">
                  Programme Fees
                </p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                  Invest in your engineering future
                </h2>
                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  The net course fee is payable by monthly instalments over eight
                  months, making it easier to learn while you work.
                </p>
                <Link
                  href="/contact"
                  className="mt-7 inline-flex items-center justify-center rounded-xl bg-(--brand) px-6 py-3 text-sm font-bold text-white transition hover:brightness-110"
                >
                  Ask About the Next Intake
                  <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
                </Link>
              </div>

              <div className="overflow-hidden rounded-4xl border border-(--border) bg-white shadow-[0_24px_90px_-62px_rgba(2,6,23,0.6)]">
                <div className="bg-linear-to-r from-[#193764] to-[#244b82] px-6 py-5 text-white">
                  <div className="text-xs font-bold uppercase tracking-widest text-white/55">
                    Part-time · Singapore Dollars
                  </div>
                  <div className="mt-1 text-xl font-extrabold">Fee Breakdown</div>
                </div>
                <div className="divide-y divide-(--border)">
                  {[
                    ["Registration Fee", "S$100.00"],
                    ["Course Fee", "S$3,000.00"],
                    ["Discount", "− S$600.00"],
                    ["Fee After Discount", "S$2,400.00"],
                  ].map(([label, value]) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 px-6 py-4"
                    >
                      <div>
                        <span className="text-sm font-semibold text-slate-700">
                          {label}
                        </span>
                        {label.startsWith("Registration") ? (
                          <span className="block text-xs text-slate-400">
                            Non-refundable
                          </span>
                        ) : null}
                      </div>
                      <span className="font-extrabold text-slate-950">
                        {value}
                      </span>
                    </div>
                  ))}
                  <div className="flex items-center justify-between gap-4 bg-orange-50 px-6 py-5">
                    <span className="text-sm font-extrabold uppercase tracking-wide text-(--brand-2)">
                      Net Course Fee Payable
                    </span>
                    <span className="text-2xl font-extrabold text-(--brand)">
                      S$2,400.00
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-(--brand)">
                Withdrawal, Transfer &amp; Refund
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Course refund policy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Refunds are based on when the student&apos;s written notice of
                withdrawal is received.
              </p>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {refundPolicy.map((policy) => (
                <article
                  key={policy.refund}
                  className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_70px_-65px_rgba(2,6,23,0.6)]"
                >
                  <div className="text-3xl font-extrabold text-(--brand)">
                    {policy.refund}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {policy.label}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">
                    {policy.timing}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#07182d] py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4">
            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/6 p-7 sm:p-10 lg:p-12">
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-(--brand)/20 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-(--brand)">
                    Start Your Application
                  </p>
                  <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Ready to build a career in modern M&amp;E engineering?
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/65">
                    Speak with our admissions team about intake dates,
                    eligibility, class schedules and monthly instalments.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/70">
                    <span className="inline-flex items-center gap-2">
                      <FiClock className="text-(--brand)" /> 08 months
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <FiMonitor className="text-(--brand)" /> Face-to-face
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <FiMapPin className="text-(--brand)" /> Singapore
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-xl bg-(--brand) px-7 py-3.5 text-sm font-bold text-white transition hover:brightness-110"
                  >
                    Register Now
                    <FiArrowRight className="ml-2 h-4 w-4" aria-hidden />
                  </Link>
                  <a
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent(
                      `Brochure request: ${courseName}`,
                    )}`}
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white/15"
                  >
                    <FiDownload className="mr-2 h-4 w-4" aria-hidden />
                    Request Brochure
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
