import { Download, Mail, Github, Linkedin, MapPin, ArrowDown, Terminal } from "lucide-react";
import { profile, resumeUrl, resumeFileName } from "@/data/profile";
import { Button } from "@/components/ui/button";

const codeLines = [
  { t: "class", k: "Akila", rest: " implements Builder {" },
  { t: "field", k: "  focus", rest: ' = "Java · Software Development";' },
  { t: "field", k: "  also", rest: ' = "Web · Data Analytics";' },
  { t: "field", k: "  status", rest: ' = "Learning by building";' },
  { t: "close", k: "}", rest: "" },
];

export function Hero() {
  return (
    <header id="home" className="section-shell relative pt-32 sm:pt-36">
      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {profile.label}
          </p>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 font-display text-lg text-gradient sm:text-xl">{profile.headline}</p>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {profile.intro}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#projects">View My Projects</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={resumeUrl} download={resumeFileName}>
                <Download className="mr-2 size-4" /> Download Resume
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github className="size-4" /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-1.5 transition-colors hover:text-primary"
              href={`mailto:${profile.email}`}
            >
              <Mail className="size-4" /> {profile.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" /> {profile.location}
            </span>
          </div>
        </div>

        <div className="card-surface overflow-hidden" aria-hidden="true">
          <div className="flex items-center gap-2 border-b border-border/70 bg-secondary/50 px-4 py-2.5">
            <span className="size-2.5 rounded-full bg-destructive/70" />
            <span className="size-2.5 rounded-full bg-accent/70" />
            <span className="size-2.5 rounded-full bg-primary/70" />
            <span className="ml-2 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
              <Terminal className="size-3.5" /> Akila.java
            </span>
          </div>
          <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7">
            {codeLines.map((line) => (
              <div key={line.k}>
                {line.t === "class" ? (
                  <>
                    <span className="text-accent">class </span>
                    <span className="text-primary">{line.k}</span>
                    <span className="text-muted-foreground">{line.rest}</span>
                  </>
                ) : (
                  <>
                    <span className="text-foreground/80">{line.k}</span>
                    <span className="text-muted-foreground">{line.rest}</span>
                  </>
                )}
              </div>
            ))}
          </pre>
        </div>
      </div>

      <a
        href="#about"
        className="mt-14 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowDown className="size-3.5 animate-bounce-soft" /> Scroll
      </a>
    </header>
  );
}
