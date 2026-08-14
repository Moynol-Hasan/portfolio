import { Mail, Phone, ArrowRight, Download } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion/reveal";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { profile } from "@/lib/data";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone}`,
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "Moynol-Hasan",
    href: profile.socials.github,
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "md-moynol-hasan-ome",
    href: profile.socials.linkedin,
  },
];

export function Contact() {
  return (
    <Section id="contact" eyebrow="07 / Contact" title="Let's build something">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 sm:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-brand/15 blur-[100px]"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 -left-16 size-64 rounded-full bg-brand-accent/10 blur-[100px]"
          />

          <div className="relative">
            <h3 className="max-w-xl text-2xl font-bold sm:text-3xl">
              Open to frontend & full-stack roles, freelance work, and
              collaboration.
            </h3>
            <p className="mt-3 max-w-xl text-muted-foreground">
              The fastest way to reach me is email. I usually reply within a
              day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="brand" size="lg" asChild>
                <a href={`mailto:${profile.email}`}>
                  Say Hello <ArrowRight className="size-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={profile.resumeUrl} download={profile.resumeName}>
                  <Download className="size-4" /> Download Resume
                </a>
              </Button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition-all duration-300 hover:border-brand/40 hover:bg-accent"
                >
                  <span className="grid size-10 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                    <l.icon className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-muted-foreground">
                      {l.label}
                    </span>
                    <span className="block truncate font-medium">
                      {l.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 text-sm text-muted-foreground sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="transition-colors hover:text-foreground"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
