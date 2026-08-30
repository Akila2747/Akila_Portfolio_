/* =========================================================================
 * PROFILE, SKILLS, EXPERIENCE & PROJECTS
 * Edit this file to update the portfolio content. Nothing is hard-coded in
 * the page components.
 * ========================================================================= */

import resumeAsset from "@/assets/Akila_T_Resume.docx.asset.json";

/* ---- RESUME -------------------------------------------------------------
 * Replace `resumeUrl` whenever you update your CV:
 *   - ask Lovable to upload your new PDF, or
 *   - put it in `public/` and use "/Akila_T_Resume.pdf"
 * ------------------------------------------------------------------------ */
export const resumeUrl = resumeAsset.url;
export const resumeFileName = "Akila_T_Resume.docx";

export const profile = {
  name: "Akila T",
  role: "Computer Science Engineering Student",
  tagline: "Aspiring Data Analyst & Software Developer",
  location: "Chennai, India",
  email: "akilat769@gmail.com",
  linkedin: "https://www.linkedin.com/in/akila-t-57942b355",
  github: "https://github.com/Akila2747",
  summary:
    "Motivated Computer Science Engineering student with a strong foundation in programming, web development and data analytics. Passionate about software development, data analytics and AI/ML, with hands-on experience through internships, NPTEL courses and workshops.",
};

export const skillGroups = [
  { label: "Programming", items: ["Java", "Python", "C", "JavaScript"] },
  { label: "Core CS", items: ["OOP", "Data Structures & Algorithms", "DBMS"] },
  { label: "Web Development", items: ["HTML", "CSS", "JavaScript"] },
  { label: "Databases", items: ["SQL", "MySQL"] },
  { label: "Data & Analytics", items: ["Power BI", "Excel"] },
  { label: "Tools & Platforms", items: ["Git", "GitHub", "VS Code"] },
];

export const education = [
  {
    degree: "B.E. Computer Science and Engineering",
    school: "New Prince Shri Bhavani College of Engineering and Technology, Anna University",
    period: "2024 – 2028",
  },
  { degree: "HSC (12th) – Biology Stream", school: "Higher Secondary Certificate", period: "2023 – 2024" },
  { degree: "SSLC (10th)", school: "", period: "2021 – 2022" },
];

export const experience = [
  {
    role: "Web Developer Intern",
    company: "Ocean Walk IT Private Limited",
    period: "June – July 2025",
    points: [
      "Built responsive web pages using HTML, CSS and JavaScript.",
      "Collaborated with the development team to deliver client-facing features on schedule.",
      "Applied version control with Git/GitHub and wrote clean, maintainable code.",
    ],
  },
];

/* ---- PROJECTS -----------------------------------------------------------
 * Add a new project by copying one entry. `category` powers grouping,
 * `github` and `demo` are optional links, `image` is an optional screenshot.
 * ------------------------------------------------------------------------ */
export type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Personal Portfolio Website",
    category: "Web Development",
    description:
      "Modern responsive portfolio with a filterable certifications gallery, animated skills and contact section.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/Akila2747",
  },
  {
    id: "powerbi-dashboard",
    title: "Power BI Sales Dashboard",
    category: "Data Analytics",
    description:
      "Interactive dashboards with CRUD operations visualising KPIs and trends, built on cleaned and transformed datasets.",
    tech: ["Power BI", "Excel", "SQL"],
  },
];
