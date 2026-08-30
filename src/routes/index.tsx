import { createFileRoute } from "@tanstack/react-router";
import { NavBar } from "@/components/portfolio/NavBar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";

const title = "Akila T — CSE Student, Data Analyst & Developer Portfolio";
const description =
  "Portfolio of Akila T: projects in web development and data analytics, verified certifications, achievements and resume.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Achievements />
      <Contact />
    </main>
  );
}
