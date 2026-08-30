import { useMemo, useState } from "react";
import { ExternalLink, Trophy } from "lucide-react";
import { achievements } from "@/data/achievements";
import { Button } from "@/components/ui/button";

export function Achievements() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(achievements.map((a) => a.category))).sort()],
    [],
  );
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? achievements : achievements.filter((a) => a.category === active);

  return (
    <section id="achievements" className="section-shell">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">Highlights</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Achievements</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Hackathons, competitions, academic and event highlights.
      </p>

      {achievements.length === 0 ? (
        <div className="card-surface mt-8 flex items-center gap-4 p-6">
          <Trophy className="size-6 shrink-0 text-accent" />
          <p className="text-sm text-muted-foreground">
            This section is ready and waiting — achievements will be listed here as they are added.
          </p>
        </div>
      ) : (
        <>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
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
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item) => (
              <article key={item.id} className="card-surface flex flex-col overflow-hidden">
                {item.image ? (
                  <div className="aspect-[4/3] overflow-hidden bg-secondary">
                    <img
                      src={item.image}
                      alt={`${item.title} proof`}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-xs text-accent">
                    {item.category}
                  </span>
                  <h3 className="text-base font-semibold leading-snug">{item.title}</h3>
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
                          View proof <ExternalLink className="ml-1 size-3.5" />
                        </a>
                      </Button>
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </>
      )}
    </section>
  );
}
