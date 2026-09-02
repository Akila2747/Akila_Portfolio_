import { useMemo, useState } from "react";
import { ExternalLink, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

export function Achievements() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(achievements.map((a) => a.category))).sort()],
    [],
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? achievements : achievements.filter((a) => a.category === active);

  return (
    <section id="achievements" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Highlights"
          title="Achievements"
          description="Technical achievements, awards and competition results — added only when officially earned."
        />
      </Reveal>

      {achievements.length === 0 ? (
        <Reveal>
          <div className="card-surface mt-8 flex items-center gap-4 p-6">
            <Trophy className="size-6 shrink-0 text-accent" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              This section is ready — achievements will be listed here as they are earned.
            </p>
          </div>
        </Reveal>
      ) : (
        <>
          <Reveal className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={active === cat}
                onClick={() => setActive(cat)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  active === cat
                    ? "border-accent bg-accent text-accent-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-accent/60 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 60}>
                <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
                  {item.image ? (
                    <div className="aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={item.image}
                        alt={`${item.title} proof`}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-xs text-accent">
                      {item.category}
                    </span>
                    <h3 className="font-display text-base font-semibold leading-snug">{item.title}</h3>
                    {item.event ? <p className="text-sm text-muted-foreground">{item.event}</p> : null}
                    {item.organization ? (
                      <p className="text-sm text-muted-foreground">{item.organization}</p>
                    ) : null}
                    {item.date ? <p className="text-xs text-muted-foreground">{item.date}</p> : null}
                    {item.result ? (
                      <p className="text-sm font-medium text-accent">{item.result}</p>
                    ) : null}
                    {item.description ? (
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    ) : null}
                    {item.proofLink ? (
                      <div className="mt-auto pt-4">
                        <Button asChild size="sm" variant="secondary">
                          <a href={item.proofLink} target="_blank" rel="noreferrer">
                            View proof <ExternalLink className="ml-1.5 size-3.5" />
                          </a>
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
