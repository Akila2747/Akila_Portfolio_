/* =========================================================================
 * PROFILE · SKILLS · EDUCATION · EXPERIENCE · PROJECTS
 * Everything on the site is rendered from this file. Edit here only.
 * ========================================================================= */

/* ---- RESUME -------------------------------------------------------------
 * Replace `public/Akila_T_Resume.pdf` with your updated PDF whenever your
 * resume changes — no code edit needed.
 * ------------------------------------------------------------------------ */
export const resumeUrl = "/Akila_T_Resume.pdf";
export const resumeFileName = "Akila_T_Resume.pdf";

export const profile = {
  name: "Akila T",
  label: "Computer Science Engineering Student",
  headline: "Java Developer • Software Developer • Web & Data Analytics",
  location: "Chennai, India",
  email: "akilat769@gmail.com",
  linkedin: "https://www.linkedin.com/in/akila-t-57942b355",
  github: "https://github.com/Akila2747",
  intro:
    "I build practical technology solutions while developing my skills in Java, web development and data analytics.",
};

/* ---- ABOUT --------------------------------------------------------------- */
export const aboutParagraphs = [
  "I'm a B.E. Computer Science and Engineering student focused on Java and software development, with working experience in web development and a growing interest in data analytics.",
  "I learn by building — a web development internship, coursework projects and self-driven work are how I turn concepts into something that actually runs.",
  "Long term, I want to build technology products of my own and eventually run my own business.",
];

export const aboutCards = [
  { label: "Focus", value: "Java & Software Development" },
  { label: "Also building with", value: "Web Development" },
  { label: "Exploring", value: "Data Analytics" },
  { label: "Long-term goal", value: "Technology entrepreneurship" },
];

/* ---- SKILLS -------------------------------------------------------------- */
export type SkillGroup = { label: string; icon: string; items: string[]; note?: string };

export const skillGroups: SkillGroup[] = [
  { label: "Programming", icon: "code", items: ["Java", "Python", "C", "JavaScript"] },
  { label: "Core Computer Science", icon: "cpu", items: ["OOP", "DSA", "DBMS"] },
  {
    label: "Web Development",
    icon: "layout",
    items: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS"],
  },
  { label: "Databases", icon: "database", items: ["SQL", "MySQL", "JDBC"] },
  { label: "Data & Analytics", icon: "chart", items: ["Excel", "Power BI"] },
  { label: "Tools", icon: "tool", items: ["Git", "GitHub", "VS Code"] },
  {
    label: "AI & Productivity",
    icon: "sparkles",
    items: ["ChatGPT", "Claude", "Lovable", "AI-assisted development"],
    note: "Used as development tools, not as AI/ML expertise.",
  },
  {
    label: "Additional Knowledge",
    icon: "book",
    items: ["AI/ML Fundamentals", "IoT", "Cybersecurity Basics"],
  },
];

/* ---- EDUCATION ----------------------------------------------------------- */
export const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    school: "New Prince Shri Bhavani College of Engineering and Technology",
    period: "2024 – 2028",
    detail: "Current CGPA: 8.1 / 10",
    primary: true,
  },
  {
    degree: "12th Standard",
    school: "Chennai Higher Secondary School, Thiruvanmiyur",
    period: "",
    detail: "74.5%",
    primary: false,
  },
  {
    degree: "10th Standard",
    school: "Chandra Higher Secondary School, Sethiyathope",
    period: "",
    detail: "70%",
    primary: false,
  },
];

/* ---- EXPERIENCE ---------------------------------------------------------- */
export const experience = [
  {
    role: "Web Developer Intern",
    company: "Ocean Walk IT Solutions",
    period: "2025",
    points: [
      "Built responsive web pages using HTML, CSS and JavaScript.",
      "Collaborated with the development team to deliver client-facing features on schedule.",
      "Applied version control using Git/GitHub.",
      "Wrote clean and maintainable code.",
    ],
  },
];

/* ---- PROJECTS -----------------------------------------------------------
 * Add a project by copying one entry below. Leave `github`/`demo` out when
 * you don't have a link yet — the buttons hide themselves.
 * ------------------------------------------------------------------------ */
export type Project = {
  id: string;
  title: string;
  status: "Ongoing" | "Completed" | "Planned";
  category: string;
  summary: string;
  problem?: string;
  solution?: string;
  features?: string[];
  tech?: string[];
  techNote?: string;
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "crowd-guardian",
    title: "Crowd Guardian",
    status: "Ongoing",
    category: "AI / Software",
    summary:
      "Crowd Guardian is an AI-based crowd monitoring and risk detection concept designed to help identify potentially dangerous crowd conditions in real time. The system aims to analyze live visual and sensor-based information, estimate crowd density and movement patterns, identify increasing crowd risk, and provide targeted safety alerts.",
    features: [
      "Real-time crowd monitoring",
      "People detection",
      "Crowd density estimation",
      "Movement tracking",
      "Crowd movement analysis",
      "Crowd risk classification",
      "Safe / Moderate / High / Critical risk levels",
      "Targeted safety alerts",
      "Control-room monitoring",
      "Visual crowd maps",
      "Early identification of increasing crowd risk",
    ],
    techNote: "Technology stack — Currently under development",
  },
];

/* Space reserved for upcoming work — no placeholder project cards. */
export const upcomingProjects = [
  "Java + SQL application",
  "Data Analytics project with Power BI",
  "Additional software development project",
];
