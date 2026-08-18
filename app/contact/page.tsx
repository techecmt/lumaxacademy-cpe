import type { Metadata } from "next";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheck, FiClock, FiMail, FiMapPin } from "react-icons/fi";
import CampusHours from "../_components/CampusHours";
import ContactForm from "../_components/contactform";
import JsonLd from "../_components/JsonLd";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import { departments } from "../data/contact";
import { absoluteUrl, breadcrumbJsonLd, SITE } from "../data/seo";

export const metadata: Metadata = {
  title: "Contact Us — Course Enquiries in Singapore",
  description:
    "Contact Lumax Academy at Beach Road, Singapore. Reach Sales & Administration, Accounts & Finance, or Management, email info@lumaxacademy.com.sg, or send an enquiry. Open daily except Thursday, near Nicoll Highway & Bugis MRT.",
  keywords: [
    "contact Lumax Academy",
    "Lumax Academy phone number",
    "course enquiry Singapore",
    "skills training academy Beach Road contact",
    "enrolment Lumax Academy",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact Lumax Academy | Beach Road, Singapore",
    description:
      "WhatsApp Sales, Accounts, or Management, visit our Beach Road campus, or send an enquiry. Open daily except Thursday.",
  },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": `${SITE.url}/contact#webpage`,
  name: "Contact Lumax Academy",
  url: absoluteUrl("/contact"),
  description:
    "Contact Lumax Academy for course enquiries, enrolment, fee payments, and management matters at our Beach Road campus in Singapore.",
  isPartOf: { "@id": `${SITE.url}/#website` },
  about: { "@id": `${SITE.url}/#organization` },
  inLanguage: "en-SG",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={[
          contactPageJsonLd,
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact Us", path: "/contact" },
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

          <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-12 sm:pb-14 sm:pt-16">
            <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <Link href="/" className="hover:text-slate-900">
                Home
              </Link>
              <span aria-hidden>/</span>
              <span className="text-(--brand)">Contact Us</span>
            </nav>

            <h1 className="mt-6 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              Contact <span className="text-(--brand)">Lumax Academy</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Reach the right team for course enquiries, fee payments, or
              management matters — or send us a message and we&rsquo;ll guide you
              on the best programme and intake.
            </p>
          </div>
        </section>

        <section className="pb-8 sm:pb-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
              DEPARTMENTS
            </div>
            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#193764] sm:text-3xl">
              Chat with the right team
            </h2>
            <div className="mt-8 grid gap-5 lg:grid-cols-3">
              {departments.map((dept) => (
                <article
                  key={dept.title}
                  className="flex flex-col rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)]"
                >
                  <div className="flex items-start gap-3">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#faa426] text-[#193764] shadow-lg shadow-[#faa426]/20">
                      <dept.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="text-base font-extrabold leading-snug text-[#193764]">
                        {dept.title}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-5 space-y-3">
                    {dept.phones.map((phone) => (
                      <div
                        key={phone.name ?? phone.numbers[0]?.href}
                        className="space-y-2"
                      >
                        <span className="block text-xs font-semibold text-slate-500">
                          {phone.name ?? "WhatsApp"}
                        </span>
                        {phone.numbers.map((num) => (
                          <a
                            key={num.href}
                            href={num.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`WhatsApp ${phone.name ?? dept.title} at ${num.display}`}
                            className="flex items-center justify-between gap-3 rounded-2xl bg-(--surface-2) px-4 py-3 ring-1 ring-black/5 transition hover:ring-[#faa426]/40"
                          >
                            <span className="text-sm font-extrabold text-[#193764]">
                              {num.display}
                            </span>
                            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#25D366] text-white shadow-sm">
                              <FaWhatsapp className="h-4 w-4" aria-hidden />
                            </span>
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>

                  <ul className="mt-5 space-y-2 text-sm text-slate-600">
                    {dept.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <FiCheck
                          className="mt-0.5 h-4 w-4 shrink-0 text-(--brand)"
                          aria-hidden
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-(--surface-2) py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-14">
              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  VISIT US
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#193764] sm:text-3xl">
                  Beach Road campus
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Lumax Academy is at The Plaza on Beach Road, in the
                  Bugis–Kallang corridor. We&rsquo;re open daily except Thursday
                  and a short walk from Nicoll Highway, Bugis, and Lavender MRT.
                </p>

                <div className="mt-6 grid gap-3">
                  <a
                    href={SITE.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 rounded-2xl border border-(--border) bg-white p-4 shadow-sm shadow-black/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand)">
                      <FiMapPin className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-(--brand)">
                        Address
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-slate-800">
                        7500A Beach Rd, #01-308 THE PLAZA, Singapore 199591
                      </div>
                    </div>
                  </a>
                  <div className="flex items-start gap-3 rounded-2xl border border-(--border) bg-white p-4 shadow-sm shadow-black/5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand)">
                      <FiClock className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-(--brand)">
                        Opening Hours
                      </div>
                      <CampusHours />
                    </div>
                  </div>
                  <a
                    href="mailto:info@lumaxacademy.com.sg"
                    className="flex items-start gap-3 rounded-2xl border border-(--border) bg-white p-4 shadow-sm shadow-black/5"
                  >
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand)">
                      <FiMail className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-(--brand)">
                        Email
                      </div>
                      <div className="mt-0.5 text-sm font-semibold text-slate-800">
                        info@lumaxacademy.com.sg
                      </div>
                    </div>
                  </a>
                </div>

                <div className="mt-6">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                    Getting here by MRT
                  </div>
                  <ul className="mt-3 space-y-2">
                    {[
                      "Nicoll Highway MRT (CC5) — about 5 minutes' walk via Republic Avenue",
                      "Bugis MRT (EW12 / DT14) — about 10 minutes' walk along Beach Road"
                      
                    ].map((line) => (
                      <li
                        key={line}
                        className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                      >
                        <FiCheck
                          className="mt-1 h-4 w-4 shrink-0 text-(--brand)"
                          aria-hidden
                        />
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  ENQUIRE
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#193764] sm:text-3xl">
                  Send us a message
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Tell us what you&rsquo;re looking for and we&rsquo;ll recommend
                  the best programme, intake timeline, and learning pathway.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="overflow-hidden rounded-3xl border border-(--border) shadow-[0_18px_70px_-60px_rgba(2,6,23,0.55)]">
              <iframe
                title="Map showing Lumax Academy at The Plaza, 7500A Beach Road, Singapore"
                src="https://www.google.com/maps?q=7500A%20Beach%20Rd%2C%20%2301-308%20THE%20PLAZA%2C%20Singapore%20199591&output=embed"
                width="100%"
                height="440"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-[340px] w-full border-0 sm:h-[440px]"
              />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
