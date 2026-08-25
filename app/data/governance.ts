export type BoardMember = {
  name: string;
  qualification: string;
  institution: string;
};

export type ResponsibilityItem = {
  text: string;
  subItems?: string[];
};

export type Board = {
  id: string;
  label: string;
  title: string;
  intro: string;
  members: BoardMember[];
  responsibilitiesTitle: string;
  responsibilitiesIntro?: string;
  responsibilities: ResponsibilityItem[];
};

const boardMembers: BoardMember[] = [
  {
    name: "Mr. Samsudeen Mohamed Tahir",
    qualification: "Bachelor of Mechanical Engineering",
    institution: "Anna University, India",
  },
  {
    name: "Ms. Haji Noor Mohamed Mursidha",
    qualification: "Bachelor of Science in Management",
    institution: "University of London, UK",
  },
  {
    name: "Mr. Mohamed Yasin Mohamed Amin",
    qualification: "Master of Computer Application",
    institution: "Bharathidasan University, India",
  },
];

export const boards: Board[] = [
  {
    id: "academic-board",
    label: "Governance",
    title: "Academic Board",
    intro:
      "Our Academic Board sets the standards for academic quality and ensures every course meets the highest educational benchmarks.",
    members: boardMembers,
    responsibilitiesTitle:
      "Roles & Responsibilities – Academic Board Member",
    responsibilities: [
      {
        text: "To develop and review the policies and procedures on all academic matters of the private education institution, including but not limited to academic quality assurance measures; and",
      },
      {
        text: "To facilitate the implementation of and compliance with such policies and procedures.",
      },
      {
        text: "Develop a set of standards to ensure the academic quality of every course to be offered or provided by the private education institution, including but not limited to –",
        subItems: [
          "the content of the modules or subjects of the course;",
          "the duration of the course; and",
          "the appropriate entry and graduation requirements;",
        ],
      },
      {
        text: "Approve each person to be deployed to teach any course offered or provided by the private education institution or any module or subject thereof, after determining that the person possesses the minimum qualifications and experience and other criteria prescribed in regulation 26; and review the policies and procedures referred to in paragraph (1) & (2).",
      },
    ],
  },
  {
    id: "examination-board",
    label: "Governance",
    title: "Examination Board",
    intro:
      "The Examination Board oversees the development and integrity of all examination and assessment procedures across the institution.",
    members: boardMembers,
    responsibilitiesTitle:
      "Roles & Responsibilities – Examination Board Member",
    responsibilitiesIntro:
      "The Examination Board will be in charge of the development of examination and assessment procedures, such as developing and facilitating the implementation of procedures to:",
    responsibilities: [
      { text: "Ensure the security of examination scripts and answer scripts;" },
      { text: "Ensure the proper conduct of examinations and assessments;" },
      {
        text: "Define and ensure the proper discharge of duties and responsibilities of invigilators and markers;",
      },
      { text: "Conduct moderation of examination and assessment marks; and" },
      {
        text: "Handle appeals from students with regard to examination or assessment matters.",
      },
    ],
  },
];

export type TeamMember = {
  name: string;
  role?: string;
  qualification?: string;
  institution?: string;
};

export type TeamGroup = {
  id: string;
  label: string;
  blurb: string;
  members: TeamMember[];
};

/**
 * Team directory shown under "Meet Our Team".
 *
 * Only "Board Members" is populated today. Add entries to the empty `members`
 * arrays below as profiles are confirmed — any group left empty renders a
 * "profiles being updated" note instead of placeholder names.
 */
export const teamGroups: TeamGroup[] = [
  {
    id: "board-members",
    label: "Board Members",
    blurb:
      "The Academic and Examination Boards that set and safeguard our academic standards.",
    members: boardMembers.map((member) => ({
      name: member.name,
      role: "Academic Board & Examination Board Member",
      qualification: member.qualification,
      institution: member.institution,
    })),
  },
  {
    id: "management",
    label: "Management",
    blurb:
      "Leads institutional strategy, operations, and day-to-day running of the academy.",
    members: [],
  },
  {
    id: "quality-assurance",
    label: "Quality Assurance and Compliance",
    blurb:
      "Maintains regulatory compliance, internal audits, and continuous quality improvement.",
    members: [],
  },
  {
    id: "hr-finance",
    label: "Human Resources & Finance",
    blurb:
      "Handles recruitment, staff development, payroll, fee management, and financial controls.",
    members: [],
  },
  {
    id: "sales-marketing",
    label: "Sales & Marketing",
    blurb:
      "Manages student outreach, enquiries, admissions support, and brand communications.",
    members: [],
  },
  {
    id: "academic-curriculum",
    label: "Academic & Curriculum Management",
    blurb:
      "Develops course content, learning materials, assessments, and trainer deployment.",
    members: [],
  },
  {
    id: "it-management",
    label: "IT Management",
    blurb:
      "Supports the e-learning platform, student systems, data security, and campus technology.",
    members: [],
  },
];
