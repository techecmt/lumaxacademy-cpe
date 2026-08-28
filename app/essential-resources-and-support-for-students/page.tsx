import type { Metadata } from "next";
import Link from "next/link";
import SiteFooter from "../_components/SiteFooter";
import SiteHeader from "../_components/SiteHeader";
import {
  FiAlertCircle,
  FiArrowRight,
  FiAward,
  FiCalendar,
  FiCheck,
  FiClock,
  FiFileText,
  FiLock,
  FiMessageSquare,
  FiRefreshCw,
  FiShield,
  FiUserCheck,
} from "react-icons/fi";
import JsonLd from "../_components/JsonLd";
import { breadcrumbJsonLd } from "../data/seo";
import {
  additionalInformation,
  contractDocuments,
  disputeStages,
  feedbackSteps,
  forceMajeureExclusions,
  INSTITUTION,
  nonDeliveryClauses,
  nonTuitionFees,
  pdpaPrinciples,
  policySections,
  refundSchedule,
  sampleCertificates,
} from "../data/studentpolicies";

export const metadata: Metadata = {
  title: "Essential Resources and Support for Students",
  description:
    "Student policies at Lumax Academy Singapore — course deferment, attendance, student contract and admission documents, course withdrawal and refund policy, personal data protection, and feedback and complaints procedures.",
  keywords: [
    "Lumax Academy student policies",
    "course refund policy Singapore",
    "student contract Singapore PEI",
    "deferment and attendance policy",
    "PDPA policy private education Singapore",
  ],
  alternates: { canonical: "/essential-resources-and-support-for-students" },
  openGraph: {
    url: "/essential-resources-and-support-for-students",
    title: "Essential Resources and Support for Students — Lumax Academy",
    description:
      "Deferment, attendance, refund, data protection, and feedback policies for students enrolled at Lumax Academy Singapore.",
  },
};

const sectionIcons: Record<string, typeof FiShield> = {
  deferment: FiCalendar,
  attendance: FiUserCheck,
  documents: FiFileText,
  certificates: FiAward,
  "withdrawal-refund": FiRefreshCw,
  "personal-data": FiLock,
  feedback: FiMessageSquare,
};

function SectionHeading({ id, title }: { id: string; title: string }) {
  const Icon = sectionIcons[id] ?? FiShield;
  return (
    <div className="flex items-start gap-4">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-(--brand) text-white">
        <Icon className="h-6 w-6" aria-hidden />
      </div>
      <div>
        <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
          OUR POLICY
        </div>
        <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function DocumentList({
  items,
}: {
  items: { title: string; description: string; href: string | null }[];
}) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {items.map((doc) =>
        doc.href ? (
          <a
            key={doc.title}
            href={doc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-3 rounded-2xl border border-(--border) bg-white p-5 transition hover:border-[#faa426]/40 hover:bg-[#fff7e8]"
          >
            <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-(--surface-2) text-(--brand) ring-1 ring-black/5">
              <FiFileText className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 text-sm font-extrabold text-slate-950">
                {doc.title}
                <FiArrowRight
                  className="h-4 w-4 text-(--brand) transition group-hover:translate-x-0.5"
                  aria-hidden
                />
              </div>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {doc.description}
              </p>
            </div>
          </a>
        ) : (
          <div
            key={doc.title}
            className="flex items-start gap-3 rounded-2xl border border-dashed border-(--border) bg-(--surface-2) p-5"
          >
            <div className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white text-(--brand) ring-1 ring-black/5">
              <FiClock className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <div className="text-sm font-extrabold text-slate-950">
                {doc.title}
              </div>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {doc.description}
              </p>
              <p className="mt-2 text-xs font-semibold text-slate-500">
                Document will be published here shortly — contact our student
                support team for a copy in the meantime.
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default function EssentialResourcesPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Student Affairs", path: "/student-affairs" },
          {
            name: "Essential Resources and Support for Students",
            path: "/essential-resources-and-support-for-students",
          },
        ])}
      />
      <SiteHeader />

      <main className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pb-20 sm:pt-14">
        <div className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--surface-2) px-4 py-2 text-xs font-semibold text-slate-700">
          Student Affairs
          <span className="text-(--brand)">•</span>
          Policies & Resources
        </div>

        <h1 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          Essential Resources and Support for Students
        </h1>
        <p className="mt-5 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          The policies, contracts, and procedures that govern your studies at{" "}
          {INSTITUTION} — from deferment and attendance through to refunds, data
          protection, and how to raise feedback or a complaint.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-10">
          <nav
            aria-label="On this page"
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="rounded-3xl border border-(--border) bg-(--surface-2) p-5">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                ON THIS PAGE
              </div>
              <ul className="mt-4 space-y-1.5">
                {policySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-white hover:text-(--brand)"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <div className="min-w-0 space-y-8">
            {/* Deferment */}
            <section
              id="deferment"
              className="scroll-mt-28 rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] sm:p-8"
            >
              <SectionHeading
                id="deferment"
                title="Course or Module Deferment"
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  All requests for course or module deferment must be made in
                  writing. Students should send their requests to any customer
                  service staff. All requests must be supported with documentary
                  evidence.
                </p>
                <p>
                  Students are allowed to defer only once up to the maximum
                  period of one (1) year, failing which he/she will be deemed to
                  have withdrawn from the course and would have to re-apply as a
                  new applicant if he/she wishes to register on the course
                  again. {INSTITUTION}&rsquo;s refund policy shall apply.
                </p>
                <p>
                  Deferment application made during the term will incur an
                  administrative fee of $100 before GST.
                </p>
                <p>
                  Approval for deferment is at the sole discretion of{" "}
                  {INSTITUTION}.
                </p>
              </div>
            </section>

            {/* Attendance */}
            <section
              id="attendance"
              className="scroll-mt-28 rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] sm:p-8"
            >
              <SectionHeading id="attendance" title="Attendance" />
              <div className="mt-6">
                <h3 className="text-base font-extrabold text-slate-950">
                  Local Students
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Students who do not require a Student Pass (e.g., NRIC/WP
                  holders) must maintain a minimum attendance of 75% (or as
                  defined by institutional policy) to be eligible for
                  certification.
                </p>
              </div>
              <div className="mt-6 rounded-2xl border border-(--border) bg-(--surface-2) p-5">
                <h3 className="text-base font-extrabold text-slate-950">
                  Make-up Classes
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  Students with attendance below the required level due to valid
                  reasons (e.g., medical or approved leave) may:
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    "Attend make-up classes",
                    "Pay applicable fees to fulfill attendance requirements",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-(--brand) ring-1 ring-black/5">
                        <FiCheck className="h-3.5 w-3.5" aria-hidden />
                      </div>
                      <span className="text-sm font-semibold text-slate-800">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Documents */}
            <section
              id="documents"
              className="scroll-mt-28 rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] sm:p-8"
            >
              <SectionHeading
                id="documents"
                title="Student Contract & Admission Documents"
              />
              <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                Please review the following documents before enrolment.
              </p>
              <DocumentList items={contractDocuments} />
            </section>

            {/* Sample certificates */}
            <section
              id="certificates"
              className="scroll-mt-28 rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] sm:p-8"
            >
              <SectionHeading id="certificates" title="Sample Certificates" />
              <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                Samples of the certificate and marksheet awarded on successful
                completion.
              </p>
              <DocumentList items={sampleCertificates} />
            </section>

            {/* Withdrawal and refund */}
            <section
              id="withdrawal-refund"
              className="scroll-mt-28 rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] sm:p-8"
            >
              <SectionHeading
                id="withdrawal-refund"
                title="Course Withdrawal and Refund of Fee"
              />

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Refund for withdrawal due to non-delivery of course
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                Subject to Force Majeure, a student shall be entitled to
                immediately withdraw from the Course by giving written notice to{" "}
                {INSTITUTION} of their intention to do so because of one or more
                of the following circumstances. {INSTITUTION} will notify the
                Student within three (3) working days upon knowledge of any of
                the following:
              </p>
              <ul className="mt-4 space-y-2">
                {nonDeliveryClauses.map((clause) => (
                  <li
                    key={clause}
                    className="flex items-start gap-3 rounded-2xl border border-(--border) bg-(--surface-2) p-4"
                  >
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-(--brand) ring-1 ring-black/5">
                      <FiCheck className="h-3.5 w-3.5" aria-hidden />
                    </div>
                    <span className="text-sm leading-relaxed text-slate-700">
                      {clause}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  The Student should be informed in writing of alternative study
                  arrangements (if any), and also be entitled to a refund of the
                  entire Course Fees and Miscellaneous Fees already paid should
                  the Student decide to withdraw, within seven (7) working days
                  of the above notice.
                </p>
                <p>
                  If the Student withdraws from the Course for any reason other
                  than those stated in Clause 2.1, {INSTITUTION} will, within
                  seven (7) working days of receiving the Student&rsquo;s
                  written notice of withdrawal, refund to the Student an amount
                  based on the table in Schedule D.
                </p>
              </div>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Course Withdrawal/Transfer and Refund Policy
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[520px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-(--border)">
                      <th
                        scope="col"
                        className="whitespace-nowrap px-4 py-3 font-extrabold text-slate-950"
                      >
                        Refund of Course Fee (%)
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 font-extrabold text-slate-950"
                      >
                        If Student&rsquo;s written notice of withdrawal is
                        received:
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {refundSchedule.map((row) => (
                      <tr
                        key={row.percentage}
                        className="border-b border-(--border) last:border-0"
                      >
                        <td className="whitespace-nowrap px-4 py-4 align-top">
                          <span className="text-lg font-extrabold text-(--brand)">
                            {row.percentage}
                          </span>
                          {row.note ? (
                            <span className="mt-1 block text-xs font-semibold text-slate-500">
                              ({row.note})
                            </span>
                          ) : null}
                        </td>
                        <td className="px-4 py-4 align-top leading-relaxed text-slate-600">
                          {row.condition}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Non-tuition Fees – Refund Policy
              </h3>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-(--border)">
                      <th
                        scope="col"
                        className="whitespace-nowrap px-4 py-3 font-extrabold text-slate-950"
                      >
                        Types of Fees
                      </th>
                      <th
                        scope="col"
                        className="px-4 py-3 font-extrabold text-slate-950"
                      >
                        Percentage of Refund
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {nonTuitionFees.map((row) => (
                      <tr
                        key={row.type}
                        className="border-b border-(--border) last:border-0"
                      >
                        <td className="px-4 py-4 align-top font-semibold text-slate-800">
                          {row.type}
                        </td>
                        <td className="px-4 py-4 align-top leading-relaxed text-slate-600">
                          {row.text ? <span>{row.text}</span> : null}
                          {row.tiers ? (
                            <ul className="space-y-1.5">
                              {row.tiers.map((tier) => (
                                <li key={tier} className="flex gap-2">
                                  <span
                                    className="text-(--brand)"
                                    aria-hidden
                                  >
                                    •
                                  </span>
                                  <span>{tier}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Refund During Cooling-off Period
              </h3>
              <div className="mt-3 space-y-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                <p>
                  {INSTITUTION} shall provide the Student with a cooling-off
                  period of seven (10) working days after the date that the
                  Contract has been signed by both parties.
                </p>
                <p>
                  The Student will be refunded the highest percentage (stated in
                  Schedule D) of the fees already paid if the Student submits a
                  written notice of withdrawal to {INSTITUTION} within the
                  cooling-off period, regardless of whether the Student has
                  started the course or not.
                </p>
              </div>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Force Majeure
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                In the event that {INSTITUTION} and the student shall be
                rendered unable to carry out the whole or any part of its
                obligations under the Student Contract for any reason beyond the
                control of that party, including but not limited to acts of God,
                force majeure, strikes, war, riot and any other causes of such
                nature, then the performance of the obligations hereunder of
                that party or all the parties as the case may be and as they are
                affected by such cause shall be excused during the continuance
                of any inability so caused, but such inability shall as far as
                possible be remedied with all reasonable despatch. For the
                avoidance of doubt, this shall not apply to cases where:
              </p>
              <ul className="mt-4 space-y-2">
                {forceMajeureExclusions.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-(--border) bg-(--surface-2) p-4"
                  >
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-(--brand) ring-1 ring-black/5">
                      <FiAlertCircle className="h-3.5 w-3.5" aria-hidden />
                    </div>
                    <span className="text-sm leading-relaxed text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                No Double Claim
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                If the Student and/or his/her parent/guardian receives any
                payment from {INSTITUTION} or the Escrow Bank/Insurance Company
                due to a provision of the Student Contract or the Master Escrow
                Agreement/Master Insurance Agreement for any matter or damage,
                then the Student and his/her parent/guardian shall not be
                entitled to claim against {INSTITUTION} or the Escrow
                Bank/Insurance Company for the same payment for the same matter
                or damage due to any other provision in the Student Contract or
                the Master Escrow Agreement/Master Insurance Agreement.
              </p>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Additional Information
              </h3>
              <ul className="mt-4 space-y-2">
                {additionalInformation.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-(--border) bg-(--surface-2) p-4"
                  >
                    <div className="mt-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-white text-(--brand) ring-1 ring-black/5">
                      <FiCheck className="h-3.5 w-3.5" aria-hidden />
                    </div>
                    <span className="text-sm leading-relaxed text-slate-700">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Personal data protection */}
            <section
              id="personal-data"
              className="scroll-mt-28 rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] sm:p-8"
            >
              <SectionHeading
                id="personal-data"
                title="Personal Data Protection"
              />
              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Confidentiality of Information – Personal Data Protection Policy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {INSTITUTION} complies with the Personal Data Protection Act
                2012 (PDPA). Personal data refers to data, whether true or not,
                about an individual who can be identified from that data; or
                from that data and other information to which the organisation
                has or is likely to have access. Personal data in Singapore is
                protected under the Personal Data Protection Act 2012 (PDPA).
                See more at{" "}
                <a
                  href="https://www.pdpc.gov.sg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-(--brand) underline underline-offset-2"
                >
                  pdpc.gov.sg
                </a>
                .
              </p>

              <div className="mt-6 space-y-4">
                {pdpaPrinciples.map((principle) => (
                  <div
                    key={principle.title}
                    className="rounded-2xl border border-(--border) bg-(--surface-2) p-5"
                  >
                    <h4 className="text-sm font-extrabold text-slate-950">
                      {principle.title}
                    </h4>
                    {principle.paragraphs?.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-2 text-sm leading-relaxed text-slate-600"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {principle.bullets ? (
                      <ul className="mt-3 space-y-2">
                        {principle.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3">
                            <div className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-lg bg-white text-(--brand) ring-1 ring-black/5">
                              <FiCheck className="h-3 w-3" aria-hidden />
                            </div>
                            <span className="text-sm leading-relaxed text-slate-600">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </section>

            {/* Feedback and complaints */}
            <section
              id="feedback"
              className="scroll-mt-28 rounded-3xl border border-(--border) bg-white p-6 shadow-[0_18px_60px_-55px_rgba(2,6,23,0.45)] sm:p-8"
            >
              <SectionHeading id="feedback" title="Feedback and Complaints" />
              <p className="mt-6 text-sm leading-relaxed text-slate-600 sm:text-base">
                {INSTITUTION} has a Customer Feedback and Resolution Framework
                in place.
              </p>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                The Policy
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {INSTITUTION} believes strongly that feedback is an important
                part in its continual efforts to improve its products, delivery,
                administration and service quality. Students and/or customers
                are encouraged to give feedback.
              </p>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Guiding Principles
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {INSTITUTION} approaches student/customer feedback and
                grievances according to the following guiding principles.
              </p>
              <ol className="mt-4 space-y-3">
                {feedbackSteps.map((step) => (
                  <li
                    key={step.step}
                    className="flex items-start gap-4 rounded-2xl border border-(--border) bg-(--surface-2) p-5"
                  >
                    <div className="grid h-9 shrink-0 place-items-center rounded-xl bg-(--brand) px-3 text-xs font-extrabold text-white">
                      {step.step}
                    </div>
                    <p className="text-sm leading-relaxed text-slate-700">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>

              <h3 className="mt-8 text-base font-extrabold text-slate-950">
                Dispute Resolution Scheme
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {disputeStages.map((stage) => (
                  <div
                    key={stage.title}
                    className="rounded-2xl border border-(--border) bg-white p-5"
                  >
                    <h4 className="text-sm font-extrabold text-slate-950">
                      {stage.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {stage.text}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="rounded-4xl border border-(--border) bg-linear-to-br from-[#193764] via-[#1f477c] to-[#10213d] p-6 text-white sm:p-8">
              <div className="text-[13px] font-semibold tracking-widest text-(--brand)">
                NEED HELP?
              </div>
              <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                Questions about any of these policies?
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
                Our student support team can walk you through the student
                contract, payment schedule, or any policy on this page.
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
                  href="/fee-protection-scheme"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-white/15"
                >
                  Fee Protection Scheme
                  <FiArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
