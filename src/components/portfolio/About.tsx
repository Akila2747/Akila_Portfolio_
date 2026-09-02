import { aboutParagraphs, aboutCards } from "@/data/profile";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="section-shell">
      <Reveal>
        <SectionHeading eyebrow="About" title="Student today, builder in progress" />
      </Reveal>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={80} className="grid gap-4 sm:grid-cols-2">
          {aboutCards.map((c) => (
            <div key={c.label} className="card-surface card-hover p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">{c.label}</p>
              <p className="mt-2 font-display text-sm font-semibold text-foreground">{c.value}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
