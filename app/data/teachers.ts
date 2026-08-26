export type TeacherCourse = {
  title: string;
  moduleCount: number;
};

export type TeacherCredential = {
  qualification: string;
  institution: string;
};

export type Teacher = {
  name: string;
  credentials: TeacherCredential[];
  employment: "Full Time" | "Part Time";
  courses: TeacherCourse[];
};

const standardCourses: TeacherCourse[] = [
  {
    title: "Diploma in Hotel, Restaurant & Café Management",
    moduleCount: 6,
  },
  {
    title: "Diploma in Healthcare Assistance & Caregiving",
    moduleCount: 6,
  },
  {
    title: "Diploma in Mechanical & Electrical (M&E) Engineering",
    moduleCount: 6,
  },
];

export const teachers: Teacher[] = [
  {
    name: "Mr. Samsudeen Mohamed Tahir",
    credentials: [
      {
        qualification: "Bachelor of Mechanical Engineering",
        institution: "Anna University, India",
      },
    ],
    employment: "Full Time",
    courses: standardCourses,
  },
  {
    name: "Ms. Haji Noor Mohamed Mursidha",
    credentials: [
      {
        qualification: "Bachelor of Science in Management",
        institution: "University of London, UK",
      },
    ],
    employment: "Part Time",
    courses: standardCourses,
  },
  {
    name: "Mr. Escasa Danilo Jr Abrencillo",
    credentials: [
      {
        qualification:
          "Bachelor's Degree, Business Administration Major in Tourism (Highest Honors)",
        institution: "Columban College",
      },
      {
        qualification: "Bachelor of Humanities",
        institution: "De La Salle University",
      },
    ],
    employment: "Full Time",
    courses: standardCourses,
  },
  {
    name: "Ms. Thilagavathy D/o Vellisamy",
    credentials: [
      {
        qualification: "Master in Arts, Counselling",
        institution: "Goldsmiths, University of London, UK",
      },
    ],
    employment: "Full Time",
    courses: standardCourses,
  },
];
