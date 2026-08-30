import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react";
import { profile, resumeUrl, resumeFileName } from "@/data/profile";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <header id="home" className="section-shell pt-28 sm:pt-32">
      <p className="text-sm font-medium uppercase tracking-[0.25em] text-primary">Portfolio</p>
      <h1 className="mt-4 text-4xl font-bold leading-tight sm:text-6xl">
        {profile.name}
        <span className="block text-gradient">{profile.tagline}</span>
      </h1>
      <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
        {profile.summary}
      </p>

      <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="size-4" /> {profile.location}
        </span>
        <a className="inline-flex items-center gap-1.5 hover:text-foreground" href={`mailto:${profile.email}`}>
          <Mail className="size-4" /> {profile.email}
        </a>
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <Button asChild size="lg">
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            View Resume
          </a>
        </Button>
        <Button asChild size="lg" variant="outline">
          <a href={resumeUrl} download={resumeFileName}>
            <Download className="mr-2 size-4" /> Download Resume
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href={profile.github} target="_blank" rel="noreferrer">
            <Github className="mr-2 size-4" /> GitHub
          </a>
        </Button>
        <Button asChild size="lg" variant="secondary">
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="mr-2 size-4" /> LinkedIn
          </a>
        </Button>
      </div>
    </header>
  );
}
