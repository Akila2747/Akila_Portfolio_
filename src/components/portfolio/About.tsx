import { skillGroups, education, experience } from "@/data/profile";

export function About() {
  return (
    <section id="about" className="section-shell">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Background</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Skills, education & experience</h2>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="card-surface p-6 lg:col-span-2">
          <h3 className="text-lg font-semibold">Technical skills</h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-xs uppercase tracking-wider text-muted-foreground">{group.label}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary px-2.5 py-1 text-xs text-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-surface p-6">
          <h3 className="text-lg font-semibold">Education</h3>
          <ul className="mt-4 space-y-4">
            {education.map((e) => (
              <li key={e.degree} className="border-l-2 border-primary/50 pl-3">
                <p className="text-sm font-medium">{e.degree}</p>
                {e.school ? <p className="text-xs text-muted-foreground">{e.school}</p> : null}
                <p className="text-xs text-muted-foreground">{e.period}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="card-surface p-6 lg:col-span-3">
          <h3 className="text-lg font-semibold">Experience</h3>
          {experience.map((job) => (
            <div key={job.company} className="mt-4 border-l-2 border-accent/60 pl-4">
              <p className="font-medium">
                {job.role} · <span className="text-muted-foreground">{job.company}</span>
              </p>
              <p className="text-xs text-muted-foreground">{job.period}</p>
              <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
