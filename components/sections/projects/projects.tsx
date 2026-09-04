import { MotionWrap } from "@/components/motion/motion-wrap";
import { SectionHeader } from "@/components/common/section-header";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { ProjectCard } from "./project-card";

export function Projects() {
  const { projectsSection, projects } = PORTFOLIO_DATA;

  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-hidden border-b border-slate-800/60 py-24"
    >
      <SectionHeader
        labelNumber={projectsSection.labelNumber}
        label={projectsSection.label}
        heading={projectsSection.heading}
        description={projectsSection.description}
      />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((project, index) => (
          <MotionWrap
            key={project.number}
            delay={0.2 + index * 0.15}
            className={project.fullWidth ? "lg:col-span-2" : ""}
          >
            <ProjectCard project={project} />
          </MotionWrap>
        ))}
      </div>
    </section>
  );
}
