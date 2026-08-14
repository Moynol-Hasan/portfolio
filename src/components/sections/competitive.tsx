import { ExternalLink, Award, Medal } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, Stagger, StaggerChild } from "@/components/motion/reveal";
import { competitive, achievements, certifications } from "@/lib/data";

export function Competitive() {
  return (
    <Section
      id="competitive"
      eyebrow="05 / Competitive Programming"
      title="Competitive programming and achievements"
      description="2000+ problems solved across major platforms, with a record of contest placements."
    >
      <Stagger className="grid gap-4 sm:grid-cols-3">
        {competitive.map((c) => (
          <StaggerChild key={c.platform}>
            <a
              href={c.url}
              target="_blank"
              rel="noreferrer noopener"
              className="group block h-full"
            >
              <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">{c.platform}</span>
                    <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-brand" />
                  </div>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    @{c.handle}
                  </p>
                  <div className="mt-5 flex items-end justify-between">
                    <div>
                      <p className="text-3xl font-bold text-gradient">
                        {c.rating}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        highest rating
                      </p>
                    </div>
                    <span className="rounded-full bg-brand-accent/10 px-2.5 py-1 text-xs font-medium text-brand-accent">
                      {c.rank}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </a>
          </StaggerChild>
        ))}
      </Stagger>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Reveal>
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Medal className="size-5 text-brand-accent" />
                Contest Placements
              </h3>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li
                    key={a}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    {a}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card className="h-full">
            <CardContent className="p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Award className="size-5 text-brand-accent" />
                Certifications
              </h3>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c}
                    className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                    {c}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
