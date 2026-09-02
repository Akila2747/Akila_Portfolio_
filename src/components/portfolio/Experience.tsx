import { Briefcase } from "lucide-react";
import { experience } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Where I've worked" />
      </Reveal>

      <div className="mt-10 space-y-6">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="card-surface card-hover relative p-6 sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                    <Briefcase className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                    <p className="text-sm text-primary">{job.company}</p>
                  </div>
                </div>
                <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                  {job.period}
                </span>
              </div>

              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {job.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
