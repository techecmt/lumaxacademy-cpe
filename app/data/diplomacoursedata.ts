export type DiplomaCourse = {
  id: string;
  title: string;
  image: string;
  targetAudience: string[];
  moduleCount: number;
  hours: string;
  duration: string;
  studyMode: string;
  featured: boolean;
};

export const diplomaCourses: DiplomaCourse[] = [
  {
    id: "diploma-in-mechanical-engineering",
    title: "Diploma in Mechanical and Electrical (M&E) Engineering",
    image:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    targetAudience: [
      "M&E and construction professionals upgrading their skills",
      "Aspiring M&E assistant engineers and site engineers",
      "M&E coordinators and technical officers",
      "Career switchers entering building services and facilities engineering",
    ],
    moduleCount: 6,
    hours: "144 Hours",
    duration: "8 Months",
    studyMode: "Part Time",
    featured: true,
  },
];

export const featuredDiplomaCourses = diplomaCourses.filter(
  (course) => course.featured,
);

export const allDiplomaCourses = diplomaCourses;
