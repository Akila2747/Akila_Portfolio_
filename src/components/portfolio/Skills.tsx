import {
  Code2,
  Cpu,
  LayoutTemplate,
  Database,
  BarChart3,
  Wrench,
  Sparkles,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const icons: Record<string, LucideIcon> = {
  code: Code2,
  cpu: Cpu,
  layout: LayoutTemplate,
  database: Database,
  chart: BarChart3,
  tool: Wrench,
  sparkles: Sparkles,
  book: BookOpen,
};

export function Skills() {
  return (
    <section id="skills" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tools I work with"
          description="Grouped by what I actually use them for — no ratings, no percentages."
        />
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.icon] ?? Code2;
          return (
            <Reveal key={group.label} delay={i * 45}>
              <div className="card-surface card-hover h-full p-5">
                <div className="flex items-center gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-primary/12 text-primary">
                    <Icon className="size-4.5" aria-hidden="true" />
                  </span>
                  <h3 className="font-display text-sm font-semibold">{group.label}</h3>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border/80 bg-secondary/60 px-2.5 py-1 text-xs text-foreground/90 transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                {group.note ? (
                  <p className="mt-3 text-xs text-muted-foreground/80">{group.note}</p>
                ) : null}
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
