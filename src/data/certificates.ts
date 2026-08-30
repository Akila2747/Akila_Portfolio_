/* =========================================================================
 * CERTIFICATES DATA
 * -------------------------------------------------------------------------
 * ADD A NEW CERTIFICATE:
 *   1. Upload the certificate image/PDF (ask Lovable to add the file, or drop
 *      it in `public/certificates/` and use "/certificates/my-file.jpg").
 *   2. Copy the template below into the `certificates` array.
 *
 *   {
 *     id: "unique-id",
 *     title: "Certificate title exactly as printed",
 *     issuer: "Issuing organization",
 *     date: "Month YYYY",
 *     category: "Python",            // any string; filters build themselves
 *     description: "Optional short note",
 *     image: "/certificates/file.jpg", // thumbnail
 *     certificateLink: "/certificates/file.jpg", // opened by "View Certificate"
 *     credentialId: "optional",
 *   },
 *
 * Categories are generated automatically from this list — no other file to edit.
 * ========================================================================= */

import novitech from "@/assets/cert-novitech-fullstack.jpg.asset.json";
import nptelPython from "@/assets/cert-nptel-python.jpg.asset.json";
import nptelC from "@/assets/cert-nptel-c.jpg.asset.json";
import crudPowerBi from "@/assets/cert-crud-powerbi.jpg.asset.json";
import tataForage from "@/assets/cert-tata-forage.jpg.asset.json";
import pantechAi from "@/assets/cert-pantech-ai.jpg.asset.json";
import oceanCompletion from "@/assets/cert-oceanwalk-completion.jpg.asset.json";
import oceanAcceptance from "@/assets/cert-oceanwalk-acceptance.jpg.asset.json";

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
  description?: string;
  image: string;
  certificateLink: string;
  credentialId?: string;
};

export const certificates: Certificate[] = [
  {
    id: "novitech-full-stack",
    title: "30 Days MasterClass in Full Stack Development",
    issuer: "NoviTech R&D Private Limited",
    date: "June 18 – July 22, 2026",
    category: "Web Development",
    description: "Certificate of Completion for a 30-day Full Stack Development MasterClass.",
    image: novitech.url,
    certificateLink: novitech.url,
    credentialId: "NT_B6BFSDEE0416",
  },
  {
    id: "nptel-python-data-science",
    title: "Python for Data Science (Elite)",
    issuer: "NPTEL · IIT Madras",
    date: "Jul – Aug 2025",
    category: "Python",
    description: "4 week course. Consolidated score 63% (Assignments 23.5/25, Proctored Exam 39/75).",
    image: nptelPython.url,
    certificateLink: nptelPython.url,
    credentialId: "NPTEL25CS104S133205926",
  },
  {
    id: "nptel-programming-c",
    title: "Problem Solving Through Programming In C",
    issuer: "NPTEL · IIT Kharagpur",
    date: "Jan – Apr 2025",
    category: "Programming",
    description: "12 week course. Consolidated score 42% (Assignments 11.56/25, Proctored Exam 30/75).",
    image: nptelC.url,
    certificateLink: nptelC.url,
    credentialId: "NPTEL25CS56S143209394",
  },
  {
    id: "crud-power-bi",
    title: "Data Analytics Using Power BI Workshop",
    issuer: "CRUD Academy Pvt. Ltd.",
    date: "21 – 26 July 2025",
    category: "Power BI",
    description:
      "Workshop conducted in association with New Prince Shri Bhavani College of Engineering & Technology.",
    image: crudPowerBi.url,
    certificateLink: crudPowerBi.url,
  },
  {
    id: "tata-data-visualisation",
    title: "Data Visualisation: Empowering Business with Effective Insights",
    issuer: "Tata Group · Forage",
    date: "August 17, 2025",
    category: "Data Analytics",
    description:
      "Job simulation covering framing the business scenario, choosing the right visuals, creating effective visuals and communicating insights.",
    image: tataForage.url,
    certificateLink: tataForage.url,
    credentialId: "HgtMvb2TFDkfxHzsa",
  },
  {
    id: "pantech-ai-industrial",
    title: "AI for Industrial Applications",
    issuer: "Pantech e Learning",
    date: "26.12.2025 – 02.01.2026",
    category: "Artificial Intelligence",
    description: "Six Days Value Added Course completed through the Department of Computer Science & Engineering.",
    image: pantechAi.url,
    certificateLink: pantechAi.url,
    credentialId: "PEL-VAC-02087",
  },
  {
    id: "oceanwalk-internship-completion",
    title: "Internship Completion – Web Development",
    issuer: "Ocean Walk IT Private Limited",
    date: "June 10 – July 9, 2025",
    category: "Internship",
    description: "30 day web development internship programme completed successfully.",
    image: oceanCompletion.url,
    certificateLink: oceanCompletion.url,
  },
  {
    id: "oceanwalk-internship-acceptance",
    title: "Internship Acceptance Letter – Web Development",
    issuer: "Ocean Walk IT Private Limited",
    date: "June 10 – July 9, 2025",
    category: "Internship",
    description: "Official acceptance letter for the web development internship programme.",
    image: oceanAcceptance.url,
    certificateLink: oceanAcceptance.url,
  },
];
