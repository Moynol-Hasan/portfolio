import { Briefcase, MapPin } from "lucide-react";
import { Section } from "@/components/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="03 / Experience"
      title="Where I've worked"
      description="Building and shipping SaaS and IoT products in production."
    >
      <div className="relative">
        {/* timeline line */}
        <div
          aria-hidden
          className="absolute left-4 top-2 bottom-2 w-px bg-brand/30 md:left-5"
        />

        <div className="space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.company} delay={i * 0.05}>
              <div className="relative pl-12 md:pl-16">
                <span className="absolute left-0 top-1 grid size-8 place-items-center rounded-full border border-brand/40 bg-card text-brand md:size-10">
                  <Briefcase className="size-4" />
                </span>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="text-lg font-semibold">{job.role}</h3>
                      <p className="font-medium text-brand">{job.company}</p>
                    </div>
                    <Badge variant="outline" className="font-mono">
                      {job.period}
                    </Badge>
                  </div>

                  <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                    <MapPin className="size-3.5" />
                    {job.location}
                  </p>

                  <ul className="mt-4 space-y-2.5">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-accent" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
