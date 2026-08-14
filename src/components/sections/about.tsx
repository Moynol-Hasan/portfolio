import { Braces, Rocket, Users, Trophy } from "lucide-react";
import { Section } from "@/components/section";
import { Card, CardContent } from "@/components/ui/card";
import { Reveal, Stagger, StaggerChild } from "@/components/motion/reveal";

const highlights = [
  {
    icon: Braces,
    title: "Frontend Specialist",
    body: "React.js & Next.js focused, building scalable, user-focused interfaces with clean, maintainable code.",
  },
  {
    icon: Trophy,
    title: "Algorithmic Mind",
    body: "2000+ problems solved across Codeforces, CodeChef, and LeetCode. Strong DSA foundation.",
  },
  {
    icon: Rocket,
    title: "SaaS Builder",
    body: "Shipped cybersecurity, e-health, IoT, and visitor-management products at Polygon Technology.",
  },
  {
    icon: Users,
    title: "Team Player",
    body: "Thrives in collaborative environments, turning complex challenges into high-impact solutions.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="01 / About"
      title="Turning complex challenges into practical solutions"
      description="A software engineer who pairs frontend craft with a competitive-programming foundation — comfortable across the stack and obsessed with clean, performant user experiences."
    >
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {highlights.map((h) => (
          <StaggerChild key={h.title}>
            <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-lg hover:shadow-brand/5">
              <CardContent className="p-6">
                <div className="mb-4 grid size-11 place-items-center rounded-lg bg-brand/10 text-brand transition-colors group-hover:bg-brand group-hover:text-primary-foreground">
                  <h.icon className="size-5" />
                </div>
                <h3 className="font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {h.body}
                </p>
              </CardContent>
            </Card>
          </StaggerChild>
        ))}
      </Stagger>
    </Section>
  );
}
