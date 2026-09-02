import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FiArrowRight, FiClock, FiMapPin } from "react-icons/fi";
import {
  TbAirConditioning,
  TbArmchair,
  TbChalkboard,
  TbCoffee,
  TbDeviceDesktop,
  TbHotelService,
  TbRulerMeasure,
  TbStethoscope,
  TbUsers,
  TbWifi,
} from "react-icons/tb";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import JsonLd from "../_components/JsonLd";
import { breadcrumbJsonLd, SITE } from "../data/seo";

export const metadata: Metadata = {
  title: "Our Campus & Facilities — Beach Road, Singapore",
  description:
    "Take a look inside the Lumax Academy campus at Beach Road, Singapore — an air-conditioned classroom seating 25, whiteboard and display teaching aids, computers, healthcare and hospitality training equipment, WiFi, and coffee machines.",
  keywords: [
    "Lumax Academy campus",
    "training facilities Singapore",
    "air-conditioned classroom Singapore",
    "Beach Road training campus",
    "healthcare training equipment Singapore",
    "hospitality training equipment Singapore",
  ],
  alternates: { canonical: "/campus-and-facilities" },
  openGraph: {
    url: "/campus-and-facilities",
    title: "Our Campus & Facilities — Lumax Academy",
    description:
      "Inside the Lumax Academy Beach Road campus — classroom, teaching aids, and practical training equipment.",
  },
};

const facilities: { title: string; desc: string; icon: IconType }[] = [
  {
    title: "White board",
    desc: "Full-width writing surface for live demonstrations, worked examples, and group discussion.",
    icon: TbChalkboard,
  },
  {
    title: "Computers",
    desc: "Trainer workstation and display screen for course slides, e-learning content, and software practice.",
    icon: TbDeviceDesktop,
  },
  {
    title: "Health care equipment",
    desc: "Practical training equipment for nursing aide, caregiving, and first aid skills assessment.",
    icon: TbStethoscope,
  },
  {
    title: "Hospitality management equipment",
    desc: "Service and front-of-house equipment used for hospitality and café operations training.",
    icon: TbHotelService,
  },
  {
    title: "Air-conditioned classroom",
    desc: "Fully air-conditioned teaching room that stays comfortable through full-day and weekend sessions.",
    icon: TbAirConditioning,
  },
  {
    title: "Classroom tables & chairs",
    desc: "Tablet-arm seating that reconfigures quickly between lectures, group work, and assessments.",
    icon: TbArmchair,
  },
  {
    title: "WiFi connectivity",
    desc: "Campus-wide wireless access for blended learning, online resources, and student portal use.",
    icon: TbWifi,
  },
  {
    title: "Coffee machines",
    desc: "Espresso machines available for barista practical sessions and refreshments between classes.",
    icon: TbCoffee,
  },
];

const gallery: { src: string; alt: string }[] = [
  {
    src: "/classroom_images/3.jpeg",
    alt: "Lumax Academy classroom set up with rows of tablet-arm chairs facing a wall-mounted display screen",
  },
  {
    src: "/classroom_images/1.jpg",
    alt: "Lumax Academy reception counter with the academy logo on the feature wall",
  },
  {
    src: "/classroom_images/4.jpeg",
    alt: "Side view of the Lumax Academy classroom showing seating, display screen, and air-conditioning",
  },
  {
    src: "/classroom_images/2.jpeg",
    alt: "Front desk and waiting seats at the Lumax Academy campus entrance",
  },
  {
    src: "/classroom_images/5.jpeg",
    alt: "Lumax Academy classroom seating arrangement beside the glass partition and campus entrance",
  },
];

const classroomSpecs: { label: string; value: string; icon: IconType }[] = [
  { label: "Classroom 1", value: "28.5 sqm", icon: TbRulerMeasure },
  { label: "Capacity", value: "25 pax", icon: TbUsers },
];

export default function CampusAndFacilitiesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" },
          { name: "Our Campus", path: "/campus-and-facilities" },
        ])}
      />
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-2) px-4 py-2 text-xs font-semibold text-slate-700">
          About Us
          <span className="text-(--brand)">•</span>
          Our Campus
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Our Campus &amp; Facilities
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Lumax Academy trains face-to-face at {SITE.address.street},{" "}
          {SITE.address.locality} — a compact campus built around one
          air-conditioned classroom, with the teaching aids and practical
          equipment each of our courses needs close at hand.
        </p>

        <section
          aria-labelledby="classroom-spec-heading"
          className="mt-8 rounded-3xl border border-(--border) bg-(--surface-2) p-6 sm:p-8"
        >
          <h2
            id="classroom-spec-heading"
            className="text-[13px] font-semibold tracking-widest text-(--brand)"
          >
            CLASSROOM AT A GLANCE
          </h2>
          <dl className="mt-5 grid gap-4 sm:grid-cols-2">
            {classroomSpecs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-center gap-4 rounded-2xl bg-white p-5 ring-1 ring-black/5"
              >
                <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-(--surface-2) text-(--brand)">
                  <spec.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <dt className="text-xs font-semibold tracking-wide text-slate-500 uppercase">
                    {spec.label}
                  </dt>
                  <dd className="mt-1 text-2xl font-extrabold tracking-tight text-slate-950">
                    {spec.value}
                  </dd>
                </div>
              </div>
            ))}
          </dl>
        </section>

        <section aria-labelledby="facilities-heading" className="mt-12">
          <h2
            id="facilities-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Facilities
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            What is available to every student on campus, across all of our
            certificate and diploma programmes.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facilities.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)]"
              >
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-(--surface-2) text-(--brand) ring-1 ring-black/5">
                  <item.icon className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="mt-4 text-base font-extrabold text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="gallery-heading" className="mt-12">
          <h2
            id="gallery-heading"
            className="text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Inside our campus
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
            Photographs of the classroom and reception at our Beach Road campus.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2">
            {gallery.map((photo, index) => (
              <figure
                key={photo.src}
                className={`group relative overflow-hidden rounded-2xl bg-slate-900 ring-1 ring-black/5 sm:rounded-3xl ${
                  index === 0
                    ? "col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto"
                    : "aspect-[3/4]"
                }`}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 25vw, 50vw"
                  priority={index === 0}
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </figure>
            ))}
          </div>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-(--border) bg-(--surface-2) p-6 lg:col-span-2">
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              VISIT US
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
                Campus visits are welcome by appointment — contact us to arrange
                a tour.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-(--border) bg-(--surface-2) p-6">
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              QUICK LINKS
            </div>
            <div className="mt-5 space-y-3">
              {[
                { label: "Who we are", href: "/about" },
                { label: "Our teachers", href: "/our-teachers" },
                { label: "Explore courses", href: "/courses" },
                { label: "Contact us", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-slate-800 ring-1 ring-black/5 hover:text-(--brand)"
                >
                  {link.label}
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
