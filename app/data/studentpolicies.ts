/**
 * Content for /essential-resources-and-support-for-students.
 *
 * Source text was supplied by the academy. Institution references have been
 * changed from "Edusphere College of Management and Technology (ECMT)" to
 * "Lumax Academy" throughout.
 */

export const INSTITUTION = "Lumax Academy";

export type PolicySection = {
  id: string;
  title: string;
};

export const policySections: PolicySection[] = [
  { id: "deferment", title: "Course or Module Deferment" },
  { id: "attendance", title: "Attendance" },
  { id: "documents", title: "Student Contract & Admission Documents" },
  { id: "certificates", title: "Sample Certificates" },
  { id: "withdrawal-refund", title: "Course Withdrawal & Refund of Fee" },
  { id: "personal-data", title: "Personal Data Protection" },
  { id: "feedback", title: "Feedback and Complaints" },
];

export type DownloadItem = {
  title: string;
  description: string;
  /** Set to the file path once the document is uploaded to /public. */
  href: string | null;
};

export const contractDocuments: DownloadItem[] = [
  {
    title: "Student Contract",
    description: "The standard student contract issued before enrolment.",
    href: null,
  },
  {
    title: "Advisory Note, Offer of Admission and More",
    description:
      "Advisory note, offer of admission, and supporting admission documents.",
    href: null,
  },
];

export const sampleCertificates: DownloadItem[] = [
  {
    title: "DHTM Sample Certificate",
    description: "Sample of the certificate awarded on course completion.",
    href: null,
  },
  {
    title: "DHTM Sample Marksheet",
    description: "Sample of the marksheet issued alongside the certificate.",
    href: null,
  },
];

export const nonDeliveryClauses: string[] = [
  `${INSTITUTION} does not commence the Course on the Course Commencement Date;`,
  `${INSTITUTION} terminates the Course before the Course Commencement Date;`,
  `${INSTITUTION} does not complete the Course by the Course Completion Date;`,
  `${INSTITUTION} terminates the Course before the Course Completion Date;`,
  `${INSTITUTION} has not ensured that the Student meets the course entry or matriculation requirement as set by the organisation stated in Schedule A within any stipulated timeline set by PEI; or`,
];

export type RefundRow = {
  percentage: string;
  note?: string;
  condition: string;
};

export const refundSchedule: RefundRow[] = [
  {
    percentage: "100%",
    note: "Maximum Refund",
    condition:
      "More than [30] days before the Course Commencement Date",
  },
  {
    percentage: "50%",
    condition:
      "Before, but not more than [30] days before the Course Commencement Date",
  },
  {
    percentage: "25%",
    condition:
      "After, but not more than [15] days after the Course Commencement Date",
  },
  {
    percentage: "0%",
    condition: "More than [15] days after the Course Commencement Date",
  },
];

const tieredRefund: string[] = [
  "75% – if the refund request is made 30 days or more before the intake date",
  "50% – if the refund request is made 14 days or more but less than 30 days before the intake date",
  "5% – if the refund is made less than 14 days before the intake date",
  "0% – if made on the intake date itself",
];

export type NonTuitionFeeRow = {
  type: string;
  text?: string;
  tiers?: string[];
};

export const nonTuitionFees: NonTuitionFeeRow[] = [
  { type: "Course Application Fee", text: "Not refundable" },
  // NOTE: the supplied source lists this row's fee type as "Not refundable",
  // which appears to be a transcription error. Confirm the intended fee name.
  {
    type: "Not refundable",
    text: "Not refundable as fee is imposed by the bank.",
  },
  { type: "Continual Material Fee", tiers: tieredRefund },
  { type: "Continual Assessment Fee", tiers: tieredRefund },
  { type: "Examination Fee", tiers: tieredRefund },
  { type: "Student Membership Fee", tiers: tieredRefund },
  {
    type: "Insurance Fee",
    text: "Payable per academic year or per course, if applicable. NOT REFUNDABLE.",
  },
];

export const forceMajeureExclusions: string[] = [
  `${INSTITUTION} is declared to be insolvent and/or a winding-up order made or bankruptcy issued by the Singapore court against it; and`,
  `The relevant authority(ies) issue(s) an order to cease and/or terminate the operations of ${INSTITUTION}, or the happening of anything of a similar nature under the laws of Singapore.`,
];

export const additionalInformation: string[] = [
  "The laws of Singapore will apply to how the student contract will be read and to the rights the parties have under the student Contract.",
  "If any part of the student Contract is not valid for any reason under the law of Singapore, this will not affect any other part of the student Contract.",
  `If the Student and ${INSTITUTION} cannot settle a dispute using the way arranged by ${INSTITUTION}, the Student and ${INSTITUTION} may refer the dispute to the PEI Mediation-Arbitration Scheme (https://www.ssg.gov.sg).`,
  `All information given by the Student to ${INSTITUTION} will not be given by ${INSTITUTION} to anyone else, unless the Student signs in writing that he agrees or unless ${INSTITUTION} is allowed to give the information by law.`,
  `Any agreement other than the student Contract is invalid if it is administered without the written permission of PEI. If there is any other agreement between ${INSTITUTION} and the Student that is different from the terms in the student Contract, then the terms in the student Contract will apply.`,
  `If the Student or ${INSTITUTION} does not exercise or delay exercising any right granted by the student Contract, the Student and ${INSTITUTION} will still be able to exercise the same type of right under this Contract during the rest of the time the Contract continues.`,
  "If the student Contract is also signed or translated in any language other than English and there is a difference from the English language copy of this Contract, the English language copy will apply.",
];

export type PdpaPrinciple = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export const pdpaPrinciples: PdpaPrinciple[] = [
  {
    title: "Accountability",
    paragraphs: [
      "We will be responsible for all personal data collected. All personal data collected will be used and processed fairly and lawfully while in our possession or custody. We ensure all our customers that we would be accountable for our organisation’s compliance to our Privacy Policy.",
    ],
  },
  {
    title: "Specifying Purposes",
    paragraphs: [
      "Personal data collected, will not be used for a new purpose unless we obtain consent from our customers. We are the sole owner of the personally identifiable information and we will not use this information for purpose other than for which the information was collected.",
    ],
  },
  {
    title: "Consent",
    paragraphs: [
      "We do not collect sensitive information from our customers. We assure all customers that all personal information collected would be used or disclosed only for the purposes for which it was collected.",
    ],
  },
  {
    title: "Limiting Collection",
    paragraphs: [
      "Only the necessary personal data is collected from customers’ for business purposes. Both the amount and the type of data collected shall be limited to that which is necessary to fulfill the purposes identified.",
    ],
  },
  {
    title: "Limiting Use, Disclosure and Retention",
    bullets: [
      "We will not disclose, share, transfer, sell or rent personally identifiable information to any 3rd party.",
      "We do not send unsolicited marketing email to our customers unless consented by them. Customers who have consented will occasionally receive email on special promotions we hold. Out of respect for the privacy of our users, users may opt-out of receiving these communications by replying to unsubscribe in the subject line in the email.",
      "We do not keep personal data for longer than is necessary for those purposes for which they are collected.",
      "We have developed guidelines and implemented procedures to govern the destruction of personal data that are no longer required to fulfill the identified purposes.",
      "We do not use “cookies”, “web-bugs” or any other tracking technologies to collect information from users of our web site.",
      "We would not display or make publicly available, whether through online directories, customer lists or otherwise, the personally identifiable information collected.",
    ],
  },
  {
    title: "Accuracy",
    paragraphs: [
      "We ensure our customers that all personal information collected is accurate and kept up to date. We do not maintain duplicate copies of personal information in different systems.",
    ],
  },
  {
    title: "Safeguards",
    paragraphs: [
      "We ensure our customers that appropriate security safeguards are in place to protect personal data against unauthorised access, misuse, disclosure, copying, use, alteration, accidental loss or theft, destruction or damage.",
      "Only authorised staff have access to our systems. Consultants, contractors or other temporary employees do not have access to the data.",
    ],
  },
  {
    title: "Openness",
    paragraphs: [
      "Our data protection policy (Privacy Policy) is displayed on the web site and the policy is set out in the same language medium as the web site. We encourage all our customers to read our Privacy Policy to understand the objectives of collecting their personal data.",
    ],
  },
  {
    title: "Challenging Compliance",
    paragraphs: [
      "Our mechanisms and processes are in place to receive and address complaints or inquiries about our policies and procedures relating to the handling of personal data. Appropriate measures will be taken to amend policies and procedures if a complaint is found to be justified.",
    ],
  },
];

export type FeedbackStep = {
  step: string;
  text: string;
};

export const feedbackSteps: FeedbackStep[] = [
  {
    step: "Step 1",
    text: "Informal management of feedback (minor problem) will be attempted on the same day it is received before escalation to Grievance or Written Grievance (major problem).",
  },
  {
    step: "Step 2",
    text: "If unresolved on the same day, the grievance will be resolved within 14 working days from the day the feedback/grievance was received.",
  },
  {
    step: "Step 3",
    text: "If the matter remains unresolved or the student is unsatisfied with the outcome, students may approach the PEI Student Services Centre for assistance. At the Student Services Centre, PEI officers will review the complaints and provide the appropriate advice.",
  },
  {
    step: "Step 4",
    text: "The PEI may advise the student to participate in the Committee for Private Education’s (PEI’s) appointed Dispute Resolution Scheme. Private education institutions’ participation in the dispute resolution process is compulsory as stipulated by the Private Education Act. There are two stages in the process — mediation and arbitration.",
  },
];

export const disputeStages: { title: string; text: string }[] = [
  {
    title: "Stage 1: Mediation",
    text: "The complaint may be referred to the Singapore Mediation Centre for mediation. If a settlement between the student and the private education institution could be reached at the mediation stage, a settlement agreement would be drawn up and endorsed by the respective parties, and the dispute resolved.",
  },
  {
    title: "Stage 2: Arbitration",
    text: "If the parties fail to reach a settlement through mediation, the student can progress on to arbitration for a resolution to his dispute. The Singapore Institute of Arbitrators is the appointed provider of arbitration services.",
  },
];
