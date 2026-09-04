import { MotionWrap } from "@/components/motion/motion-wrap";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { SkillCard } from "./skill-card";
import { SectionHeader } from "@/components/common/section-header";

export function Skills() {
  const { skillsSection, skillsCategories } = PORTFOLIO_DATA;

  return (
    <section
      id="skills"
      className="scroll-mt-24 overflow-hidden border-y border-slate-800/60 py-24"
    >
      <SectionHeader
        labelNumber={skillsSection.labelNumber}
        label={skillsSection.label}
        heading={skillsSection.heading}
        description={skillsSection.description}
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillsCategories.map((category, index) => (
          <MotionWrap key={category.title} delay={0.2 + index * 0.1}>
            <SkillCard category={category} />
          </MotionWrap>
        ))}
      </div>
    </section>
  );
}
