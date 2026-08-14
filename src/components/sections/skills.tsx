import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Stagger, StaggerChild } from "@/components/motion/reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 / Skills"
      title="Technical toolkit"
      description="Languages, frameworks, and tools I use to design and ship reliable software."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group) => (
          <StaggerChild key={group.group}>
            <Card className="h-full transition-colors duration-300 hover:border-brand/40">
              <CardContent className="p-6">
                <h3 className="mb-4 font-mono text-sm font-semibold uppercase tracking-wider text-brand-accent">
                  {group.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="secondary"
                      className="px-2.5 py-1 text-[13px]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}
