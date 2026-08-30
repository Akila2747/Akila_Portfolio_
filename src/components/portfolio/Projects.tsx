import { useMemo, useState } from "react";
import { Github, ExternalLink } from "lucide-react";
import { projects } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function Projects() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(projects.map((p) => p.category))).sort()],
    [],
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-shell">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Work</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Projects</h2>

      <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
              active === cat
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {filtered.map((project) => (
          <article key={project.id} className="card-surface flex flex-col overflow-hidden">
            {project.image ? (
              <div className="aspect-[16/9] overflow-hidden bg-secondary">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
            ) : null}
            <div className="flex flex-1 flex-col gap-3 p-6">
              <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-xs text-primary">
                {project.category}
              </span>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-2 pt-3">
                {project.github ? (
                  <Button asChild size="sm" variant="secondary">
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="mr-1 size-3.5" /> Code
                    </a>
                  </Button>
                ) : null}
                {project.demo ? (
                  <Button asChild size="sm" variant="outline">
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-1 size-3.5" /> Live demo
                    </a>
                  </Button>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
