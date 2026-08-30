import { Mail, Github, Linkedin } from "lucide-react";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function Contact() {
  return (
    <section id="contact" className="section-shell">
      <div className="card-surface p-8 text-center sm:p-12">
        <h2 className="text-3xl font-bold sm:text-4xl">Let's connect</h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          Open to internships, collaborations and entry-level opportunities in software development and
          data analytics.
        </p>
        <div className="mt-7 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}>
              <Mail className="mr-2 size-4" /> Email me
            </a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href={profile.linkedin} target="_blank" rel="noreferrer">
              <Linkedin className="mr-2 size-4" /> LinkedIn
            </a>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <a href={profile.github} target="_blank" rel="noreferrer">
              <Github className="mr-2 size-4" /> GitHub
            </a>
          </Button>
        </div>
      </div>
      <footer className="mt-10 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}. {profile.location}.
      </footer>
    </section>
  );
}
