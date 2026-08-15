import { ExternalLink, FolderGit2 } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerChild } from "@/components/motion/reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="04 / Projects"
      title="Selected work"
      description="Products I've built at Polygon Technology — from a national government portal to cybersecurity SaaS and IoT dashboards."
    >
      <Stagger className="grid gap-5 md:grid-cols-2">
        {projects.map((p) => {
          const CardTag = p.url ? "a" : "div";
          const linkProps = p.url
            ? {
                href: p.url,
                target: "_blank",
                rel: "noreferrer noopener",
                "aria-label": `${p.name} — open live site`,
              }
            : {};
          return (
            <StaggerChild key={p.name}>
              <CardTag {...linkProps} className="block h-full">
                <Card className="group relative h-full overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
                  {/* hover accent */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand transition-transform duration-300 group-hover:scale-x-100"
                  />
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="grid size-11 place-items-center rounded-lg bg-brand/10 text-brand">
                        <FolderGit2 className="size-5" />
                      </div>
                      {p.url && (
                        <ExternalLink className="size-5 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand" />
                      )}
                    </div>

                    <h3 className="text-lg font-semibold">{p.name}</h3>
                    <p className="text-sm text-brand-accent">{p.org}</p>

                    <ul className="mt-4 flex-1 space-y-2">
                      {p.points.map((pt) => (
                        <li
                          key={pt}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand/60" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <Badge key={t} variant="outline" className="font-mono">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </CardTag>
            </StaggerChild>
          );
        })}
      </Stagger>
    </Section>
  );
}
