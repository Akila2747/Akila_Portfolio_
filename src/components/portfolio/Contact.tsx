import { Mail, Github, Linkedin, FileText } from "lucide-react";
import { profile, resumeUrl } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <Reveal>
        <div className="card-surface relative overflow-hidden p-8 text-center sm:p-14">
          <span className="absolute inset-x-0 top-0 h-px bg-gradient-brand" aria-hidden="true" />
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Let's Build Something Useful.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            I'm always interested in learning, building practical solutions and exploring meaningful
            technology projects.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg">
              <a href={`mailto:${profile.email}`}>
                <Mail className="mr-2 size-4" /> Email me
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={profile.github} target="_blank" rel="noreferrer">
                <Github className="mr-2 size-4" /> GitHub
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 size-4" /> LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href={resumeUrl} target="_blank" rel="noreferrer">
                <FileText className="mr-2 size-4" /> View My Resume
              </a>
            </Button>
          </div>
        </div>
      </Reveal>

      <footer className="mt-10 flex flex-col items-center justify-between gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <p>{profile.label}</p>
      </footer>
    </section>
  );
}
