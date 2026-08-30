import { useMemo, useState } from "react";
import { ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import { Button } from "@/components/ui/button";

const PAGE_SIZE = 6;

export function Certifications() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(certificates.map((c) => c.category))).sort()],
    [],
  );
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);

  const filtered = useMemo(
    () => (active === "All" ? certificates : certificates.filter((c) => c.category === active)),
    [active],
  );
  const shown = filtered.slice(0, visible);

  return (
    <section id="certifications" className="section-shell">
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">Credentials</p>
      <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Certifications</h2>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Courses, workshops and programmes completed — every card links to the original certificate.
      </p>

      {certificates.length === 0 ? (
        <p className="mt-8 text-muted-foreground">Certificates will appear here once added.</p>
      ) : (
        <>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActive(cat);
                  setVisible(PAGE_SIZE);
                }}
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

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((cert) => (
              <article key={cert.id} className="card-surface flex flex-col overflow-hidden">
                <a
                  href={cert.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block aspect-[4/3] overflow-hidden bg-secondary"
                >
                  <img
                    src={cert.image}
                    alt={`${cert.title} certificate issued by ${cert.issuer}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </a>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-xs text-primary">
                    {cert.category}
                  </span>
                  <h3 className="text-base font-semibold leading-snug">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <p className="text-xs text-muted-foreground">{cert.date}</p>
                  {cert.description ? (
                    <p className="text-sm text-muted-foreground">{cert.description}</p>
                  ) : null}
                  {cert.credentialId ? (
                    <p className="text-xs text-muted-foreground/80">ID: {cert.credentialId}</p>
                  ) : null}
                  <div className="mt-auto pt-4">
                    <Button asChild size="sm" variant="secondary">
                      <a href={cert.certificateLink} target="_blank" rel="noreferrer">
                        View Certificate <ExternalLink className="ml-1 size-3.5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {visible < filtered.length ? (
            <div className="mt-8 flex justify-center">
              <Button variant="outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Load more
              </Button>
            </div>
          ) : null}
        </>
      )}
    </section>
  );
}
