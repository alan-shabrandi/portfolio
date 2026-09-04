import { MotionWrap } from "@/components/motion/motion-wrap";
import { SectionHeader } from "@/components/common/section-header";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { ExperienceCard } from "./experience-card";

export function Experience() {
  const { experienceSection, experiences } = PORTFOLIO_DATA;

  return (
    <section
      id="experience"
      className="scroll-mt-24 border-b border-slate-800/60 px-4 py-24 md:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          labelNumber={experienceSection.labelNumber}
          label={experienceSection.label}
          heading={experienceSection.heading}
          description={experienceSection.description}
        />

        <div className="relative mt-14 space-y-10 before:absolute before:left-1.75 before:top-4 before:h-[calc(100%-32px)] before:w-px before:bg-slate-800">
          {experiences.map((item, index) => (
            <MotionWrap
              key={`${item.company}-${item.role}`}
              delay={0.2 + index * 0.12}
            >
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
