import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import {
  FiArrowRight,
  FiCheck,
  FiCreditCard,
  FiFileText,
  FiShield,
} from "react-icons/fi";
import JsonLd from "../_components/JsonLd";
import { breadcrumbJsonLd } from "../data/seo";

export const metadata: Metadata = {
  title: "Fee Protection Scheme — Student Fee Protection",
  description:
    "Learn how Lumax Academy's monthly installment payment structure and Fee Protection Scheme (FPS) waiver protect students under Singapore CPE regulatory guidelines.",
  keywords: [
    "Fee Protection Scheme Singapore",
    "FPS waiver Lumax Academy",
    "student fee protection Singapore",
    "monthly installment course fees Singapore",
  ],
  alternates: { canonical: "/fee-protection-scheme" },
  openGraph: {
    url: "/fee-protection-scheme",
    title: "Fee Protection Scheme — Lumax Academy",
    description:
      "Transparent payment practices and FPS waiver information for students enrolled at Lumax Academy Singapore.",
  },
};

const paymentStructure = [
  "Course fees are payable in manageable monthly installments",
  "No substantial upfront collection of fees is required",
  "Payments are scheduled progressively throughout the course duration",
  "Students only pay for the upcoming study period as stipulated in the student contract",
];

const studentAdvisories = [
  "Review the student contract carefully before signing.",
  "Understand the installment payment schedule and terms.",
  "Ensure timely payment of monthly fees according to the agreed schedule.",
];

export default function FeeProtectionSchemePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          {
            name: "Fee Protection Scheme",
            path: "/fee-protection-scheme",
          },
        ])}
      />
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-2) px-4 py-2 text-xs font-semibold text-slate-700">
          Student Fee Protection
          <span className="text-(--brand)">•</span>
          Fee Protection Scheme (FPS) Waiver
        </div>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
          Student Fee Protection
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Fees Protection Scheme information for students enrolled at Lumax
          Academy — including how our monthly installment payment structure
          aligns with Fee Protection Scheme (FPS) waiver guidelines under the
          Committee for Private Education (CPE).
        </p>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--brand) text-white">
                <FiShield className="h-6 w-6" aria-hidden />
              </div>
              <div>
                <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                  OUR COMMITMENT
                </div>
                <h2 className="mt-2 text-2xl font-bold tracking-tight">
                  Our Commitment to Student Fee Protection
                </h2>
              </div>
            </div>

            <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              <p>
                At Lumax Academy, we are committed to maintaining transparent
                and student-friendly payment practices.
              </p>
              <p>
                In accordance with the requirements of the Committee for
                Private Education (CPE), the Fee Protection Scheme (FPS) is
                generally intended to protect students&apos; fees in the event
                that a Private Education Institution (PEI) is unable to
                continue operations.
              </p>
              <p>
                However, our institution adopts a monthly installment payment
                structure, where course fees are collected progressively in
                small monthly payments rather than large upfront lump-sum
                payments.
              </p>
              <p>
                As the fees collected do not exceed the applicable threshold
                requiring FPS coverage, students enrolled under this payment
                arrangement may qualify for an FPS waiver in accordance with
                prevailing regulatory guidelines.
              </p>
            </div>
          </div>

          <aside className="rounded-3xl border border-(--border) bg-(--surface-2) p-6">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-(--brand) ring-1 ring-black/5">
              <FiCreditCard className="h-5 w-5" aria-hidden />
            </div>
            <div className="mt-4 text-[13px] font-semibold tracking-widest text-(--brand)">
              PAYMENT MODEL
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Monthly installments help minimize financial exposure for
              students while providing greater affordability and flexibility
              throughout the course.
            </p>
          </aside>
        </section>

        <section className="mt-10 rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] sm:p-8">
          <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
            PAYMENT STRUCTURE
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight">
            How Our Payment Structure Works
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {paymentStructure.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-(--border) bg-(--surface-2) p-4"
              >
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-white text-(--brand) ring-1 ring-black/5">
                  <FiCheck className="h-4 w-4" aria-hidden />
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  {item}
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            This arrangement helps minimize financial exposure for students
            while providing greater affordability and flexibility.
          </p>
        </section>

        <section className="mt-10 rounded-3xl border border-(--border) bg-(--surface-2) p-6 sm:p-8">
          <div className="flex items-start gap-4">
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-(--brand) ring-1 ring-black/5">
              <FiFileText className="h-5 w-5" aria-hidden />
            </div>
            <div>
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                FOR STUDENTS
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight">
                Important Information for Students
              </h2>
              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Students are advised to:
              </p>
            </div>
          </div>
          <ul className="mt-6 space-y-3">
            {studentAdvisories.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-(--border) bg-white p-4"
              >
                <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand) ring-1 ring-black/5">
                  <FiCheck className="h-4 w-4" aria-hidden />
                </div>
                <span className="text-sm font-semibold text-slate-800">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
            For further clarification regarding the Fee Protection Scheme
            waiver or payment arrangements, please contact our student support
            team.
          </p>
        </section>

        <section className="mt-10 rounded-4xl border border-(--border) bg-linear-to-br from-[#193764] via-[#1f477c] to-[#10213d] p-6 text-white sm:p-8">
          <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
            CONTACT US
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
            Have questions about the FPS waiver or our monthly installment
            payment plan?
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            Our student support team is here to help.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-2xl bg-(--brand) px-5 py-3 text-sm font-extrabold text-[#193764] shadow-lg shadow-[#faa426]/25 transition hover:brightness-105"
            >
              Contact Student Support
              <FiArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href="/student-affairs"
              className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
            >
              View Student Policies
              <FiArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
