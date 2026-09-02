import { useEffect, useMemo, useState } from "react";
import { ExternalLink, X } from "lucide-react";
import { visibleCertificates, type Certificate } from "@/data/certificates";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const PAGE_SIZE = 6;

export function Certifications() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(visibleCertificates.map((c) => c.category))).sort()],
    [],
  );
  const [active, setActive] = useState("All");
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [preview, setPreview] = useState<Certificate | null>(null);

  const filtered = useMemo(
    () => (active === "All" ? visibleCertificates : visibleCertificates.filter((c) => c.category === active)),
    [active],
  );
  const shown = filtered.slice(0, visible);

  useEffect(() => {
    if (!preview) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setPreview(null);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [preview]);

  return (
    <section id="certifications" className="section-shell">
      <Reveal>
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications"
          description="Technical courses and programmes — each card opens the original certificate."
        />
      </Reveal>

      {visibleCertificates.length === 0 ? (
        <p className="mt-8 text-muted-foreground">Certificates will appear here once added.</p>
      ) : (
        <>
          <Reveal className="mt-8 flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                aria-pressed={active === cat}
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
          </Reveal>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {shown.map((cert, i) => (
              <Reveal key={cert.id} delay={(i % 3) * 60}>
                <article className="card-surface card-hover flex h-full flex-col overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setPreview(cert)}
                    className="group block aspect-[4/3] overflow-hidden bg-secondary"
                    aria-label={`Preview ${cert.title} certificate`}
                  >
                    <img
                      src={cert.image}
                      alt={`${cert.title} certificate issued by ${cert.issuer}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </button>
                  <div className="flex flex-1 flex-col gap-2 p-5">
                    <span className="w-fit rounded-full bg-secondary px-2.5 py-1 text-xs text-primary">
                      {cert.category}
                    </span>
                    <h3 className="font-display text-base font-semibold leading-snug">{cert.title}</h3>
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
                          View certificate <ExternalLink className="ml-1.5 size-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {visible < filtered.length ? (
            <div className="mt-8">
              <Button variant="outline" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
                Load more
              </Button>
            </div>
          ) : null}
        </>
      )}

      {preview ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${preview.title} certificate`}
          onClick={() => setPreview(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="card-surface relative max-h-[90vh] w-full max-w-3xl overflow-auto"
          >
            <button
              type="button"
              onClick={() => setPreview(null)}
              aria-label="Close preview"
              className="absolute right-3 top-3 grid size-8 place-items-center rounded-md border border-border bg-background/80 text-foreground"
            >
              <X className="size-4" />
            </button>
            <img
              src={preview.image}
              alt={`${preview.title} certificate issued by ${preview.issuer}`}
              className="w-full object-contain"
            />
            <div className="p-5">
              <h3 className="font-display text-base font-semibold">{preview.title}</h3>
              <p className="text-sm text-muted-foreground">
                {preview.issuer} · {preview.date}
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
