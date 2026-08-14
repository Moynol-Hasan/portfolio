import { GraduationCap } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerChild } from "@/components/motion/reveal";
import { education } from "@/lib/data";

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="06 / Education"
      title="Academic background"
      description="My education path — from school to a Bachelor's in IT."
    >
      <Stagger className="space-y-5">
        {education.map((edu) => (
          <StaggerChild key={edu.title}>
            <Card className="transition-colors duration-300 hover:border-brand/40">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-brand/10 text-brand">
                      <GraduationCap className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-lg font-semibold">{edu.title}</h3>
                      <p className="text-brand">{edu.school}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="font-mono">
                    {edu.period}
                  </Badge>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {edu.points.map((p) => (
                    <li
                      key={p}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                      {p}
                    </li>
                  ))}
                </ul>

                {edu.coursework && (
                  <div className="mt-6">
                    <p className="mb-3 text-sm font-medium text-muted-foreground">
                      Relevant Coursework
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((c) => (
                        <Badge key={c} variant="secondary">
                          {c}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}
