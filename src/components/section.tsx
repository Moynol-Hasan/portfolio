import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

type SectionProps = {
  id: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-6 md:py-28",
        className
      )}
    >
      <Reveal className="mb-12 max-w-4xl">
        {eyebrow && (
          <p className="mb-3 font-mono text-sm font-medium tracking-wide text-brand-accent">
            {eyebrow}
          </p>
        )}
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            {description}
          </p>
        )}
      </Reveal>
      {children}
    </section>
  );
}
