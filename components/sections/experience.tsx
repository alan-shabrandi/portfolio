"use client";

import { useState } from "react";
import { Server, TrendingUp, ChevronDown, ChevronUp } from "lucide-react";
import { MotionWrap } from "@/components/motion/motion-wrap";
import { Card } from "@/components/ui/card";
import { PORTFOLIO_DATA } from "@/config/portfolio";

type ExperienceItem = (typeof PORTFOLIO_DATA.experiences)[0];

function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { cardLabel, ui } = PORTFOLIO_DATA.experienceSection;

  const MAX_ITEMS = 3;
  const hasMore = item.achievements.length > MAX_ITEMS;

  const displayedAchievements = isExpanded
    ? item.achievements
    : item.achievements.slice(0, MAX_ITEMS);

  return (
    <Card className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 md:p-8">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-400">
              <Server className="h-4 w-4" />
              {cardLabel}
            </div>
            <h3 className="text-xl font-semibold tracking-tight text-slate-100">
              {item.role}
            </h3>
            <a
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
            >
              {item.company}
            </a>
          </div>
          <span className="text-sm font-medium text-slate-500">
            {item.period}
          </span>
        </div>

        <div className="flex flex-col gap-3">
          <ul className="flex flex-col gap-3">
            {displayedAchievements.map((achievement, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <TrendingUp className="mt-1 h-4 w-4 shrink-0 text-cyan-500/60" />
                <p className="text-sm leading-relaxed text-slate-400 md:text-base">
                  {achievement}
                </p>
              </li>
            ))}
          </ul>

          {hasMore && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group/btn mt-2 flex w-fit items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
            >
              {isExpanded ? (
                <>
                  {ui.showLess}{" "}
                  <ChevronUp className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5" />
                </>
              ) : (
                <>
                  {ui.showMore} ({item.achievements.length - MAX_ITEMS} more){" "}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover/btn:translate-y-0.5" />
                </>
              )}
            </button>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-700/50 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-white"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}

export function Experience() {
  const { experienceSection, experiences } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-slate-800/60 px-4 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <MotionWrap delay={0.1}>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              <span className="text-slate-600">
                {experienceSection.labelNumber}
              </span>
              {experienceSection.label}
            </div>
            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-slate-100 md:text-5xl">
              {experienceSection.heading}
            </h2>
            <p className="max-w-175 text-base leading-relaxed text-slate-400 md:text-lg">
              {experienceSection.description}
            </p>
          </div>
        </MotionWrap>

        <div className="relative mt-14 space-y-10 before:absolute before:left-1.75 before:top-4 before:h-[calc(100%-32px)] before:w-px before:bg-slate-800">
          {experiences.map((item, index) => (
            <MotionWrap key={item.period} delay={0.2 + index * 0.12}>
              <div className="relative pl-8">
                <span className="absolute left-0 top-8 h-3 w-3 rounded-full border-2 border-slate-950 bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
                <ExperienceCard item={item} />
              </div>
            </MotionWrap>
          ))}
        </div>
      </div>
    </section>
  );
}
