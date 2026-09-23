/* =========================================================================
 * ACHIEVEMENTS DATA
 * -------------------------------------------------------------------------
 * This list is intentionally EMPTY — nothing is invented here.
 * Add your real achievements using the template below and the section, cards
 * and category filters build themselves automatically.
 *
 *   {
 *     id: "unique-id",
 *     title: "Achievement title",
 *     event: "Event / competition name",
 *     organization: "Organizing body",
 *     date: "Month YYYY",
 *     category: "Hackathons",     // e.g. Technical, Academic, Awards, Workshops
 *     result: "Finalist",         // ONLY if officially awarded — otherwise omit
 *     description: "Short description",
 *     image: "/achievements/file.jpg",  // optional thumbnail
 *     proofLink: "/achievements/file.jpg", // optional proof document
 *   },
 * ========================================================================= */

export type Achievement = {
  id: string;
  title: string;
  event?: string;
  organization?: string;
  date?: string;
  category: string;
  result?: string;
  description?: string;
  image?: string;
  proofLink?: string;
};

export const achievements: Achievement[] = [
  {
    id: "nptel-elite-python",
    title: "NPTEL Elite — Python for Data Science",
    organization: "IIT Madras (NPTEL)",
    date: "Jul–Aug 2025",
    category: "Academic",
    result: "Elite",
    description: "Top performer recognition by IIT Madras (Jul–Aug 2025).",
  },
];
