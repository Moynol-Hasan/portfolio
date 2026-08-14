"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { profile, stats } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { GithubIcon, LinkedinIcon } from "@/components/icons";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-svh items-center overflow-hidden bg-grid pt-16"
    >
      {/* glow blobs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-24 size-[28rem] rounded-full bg-brand/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 bottom-0 size-[24rem] rounded-full bg-brand-accent/15 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background"
      />

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-6">
        <div className="max-w-3xl">
          <motion.span
            initial={reduce ? {} : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-sm text-muted-foreground backdrop-blur-sm"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            Available for opportunities
          </motion.span>

          <motion.h1
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight sm:text-6xl"
          >
            {profile.name.replace("Md. ", "")}
          </motion.h1>

          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12 }}
            className="mt-4 text-xl font-medium sm:text-2xl"
          >
            <span className="text-gradient">{profile.tagline}</span>
          </motion.p>

          <motion.p
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-5 max-w-3xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.summary}
          </motion.p>

          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.24 }}
            className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
          >
            <MapPin className="size-4" />
            {profile.location}
          </motion.div>

          <motion.div
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button variant="brand" size="lg" asChild>
              <a href="#projects">
                View Projects <ArrowRight className="size-4" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a
                href={profile.resumeUrl}
                download={profile.resumeName}
              >
                <Download className="size-4" /> Download CV
              </a>
            </Button>

            <div className="ml-1 flex items-center gap-1">
              <Button variant="ghost" size="icon" asChild aria-label="GitHub">
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <GithubIcon className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="LinkedIn">
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <LinkedinIcon className="size-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild aria-label="Email">
                <a href={`mailto:${profile.email}`}>
                  <Mail className="size-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.dl
            initial={reduce ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.38 }}
            className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-xl border border-border bg-card/50 p-4 backdrop-blur-sm"
              >
                <dt className="text-2xl font-bold text-gradient">{s.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
