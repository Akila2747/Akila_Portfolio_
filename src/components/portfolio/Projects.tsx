import { Github, ExternalLink, Rocket, CircleDot, Plus } from "lucide-react";
import { projects, upcomingProjects } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Projects"
          title="What I'm building"
          description="Work in progress is labelled as such — nothing here is presented as finished before it is."
        />
      </Reveal>

      <div className="mt-10 space-y-8">
        {projects.map((project) => (
          <Reveal key={project.id}>
            <article className="card-surface card-hover relative overflow-hidden">
              <span className="absolute inset-x-0 top-0 h-px bg-gradient-brand" aria-hidden="true" />
              <div className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[1.15fr_0.85fr]">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-2xl font-bold tracking-tight sm:text-3xl">
                      {project.title}
                    </h3>
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${
                        project.status === "Ongoing"
                          ? "border border-accent/40 bg-accent/10 text-accent"
                          : "border border-primary/40 bg-primary/10 text-primary"
                      }`}
                    >
                      <CircleDot className="size-3" aria-hidden="true" /> {project.status}
                    </span>
                    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                      {project.category}
                    </span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.summary}
                  </p>

                  {project.problem ? (
                    <div className="mt-5">
                      <p className="text-xs uppercase tracking-[0.16em] text-primary">Problem</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                  ) : null}
                  {project.solution ? (
                    <div className="mt-4">
                      <p className="text-xs uppercase tracking-[0.16em] text-primary">Solution</p>
                      <p className="mt-1.5 text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                  ) : null}

                  {project.tech?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-xs text-foreground/90"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {project.techNote ? (
                    <p className="mt-5 inline-flex rounded-md border border-dashed border-border px-3 py-1.5 text-xs text-muted-foreground">
                      {project.techNote}
                    </p>
                  ) : null}

                  {project.github || project.demo ? (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.github ? (
                        <Button asChild size="sm" variant="secondary">
                          <a href={project.github} target="_blank" rel="noreferrer">
                            <Github className="mr-1.5 size-3.5" /> GitHub
                          </a>
                        </Button>
                      ) : null}
                      {project.demo ? (
                        <Button asChild size="sm" variant="outline">
                          <a href={project.demo} target="_blank" rel="noreferrer">
                            <ExternalLink className="mr-1.5 size-3.5" /> Live demo
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  ) : (
                    <p className="mt-6 text-xs text-muted-foreground/80">
                      Repository link will be added once the project is published.
                    </p>
                  )}
                </div>

                {project.image ? (
                  <div className="overflow-hidden rounded-xl border border-border bg-secondary">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                    />
                  </div>
                ) : project.features?.length ? (
                  <div className="rounded-xl border border-border bg-secondary/40 p-5">
                    <p className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-accent">
                      <Rocket className="size-3.5" aria-hidden="true" />{" "}
                      {project.status === "Completed" ? "Key features" : "Planned features"}
                    </p>
                    <ul className="mt-4 grid gap-2">
                      {project.features.map((f) => (
                        <li key={f} className="flex gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <p className="mt-4 text-xs text-muted-foreground/80">
                      {project.status === "Completed"
                        ? "Implemented and live."
                        : "Planned scope — not yet implemented."}
                    </p>
                  </div>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal>
          <div className="rounded-xl border border-dashed border-border p-6 sm:p-8">
            <p className="flex items-center gap-2 font-display text-sm font-semibold">
              <Plus className="size-4 text-primary" aria-hidden="true" /> More projects coming soon
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Currently in the pipeline:</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {upcomingProjects.map((p) => (
                <li
                  key={p}
                  className="rounded-md border border-border bg-secondary/50 px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
