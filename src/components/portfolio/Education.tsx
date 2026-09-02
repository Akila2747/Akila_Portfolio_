import { GraduationCap, School } from "lucide-react";
import { education } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Education() {
  const [college, ...schools] = education;

  return (
    <section id="education" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="Education" title="Academic background" />
      </Reveal>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Reveal>
          <article className="card-surface card-hover relative h-full overflow-hidden p-6 sm:p-8">
            <span className="absolute inset-x-0 top-0 h-px bg-gradient-brand" aria-hidden="true" />
            <div className="flex items-start gap-4">
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                <GraduationCap className="size-5.5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold leading-snug">{college.degree}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{college.school}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {college.period ? (
                    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
                      {college.period}
                    </span>
                  ) : null}
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {college.detail}
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={80} className="grid gap-4">
          {schools.map((s) => (
            <article key={s.degree} className="card-surface card-hover p-5">
              <div className="flex items-start gap-3">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-secondary text-muted-foreground">
                  <School className="size-4" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold">{s.degree}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{s.school}</p>
                  <p className="mt-2 text-xs font-medium text-accent">{s.detail}</p>
                </div>
              </div>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
