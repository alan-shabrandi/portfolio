import { MotionWrap } from "@/components/motion/motion-wrap";
import { PORTFOLIO_DATA } from "@/config/portfolio";
import { ProjectCard } from "./project-card";

export function Projects() {
  const { projectsSection, projects } = PORTFOLIO_DATA;

  return (
    <section
      id="projects"
      className="scroll-mt-24 overflow-hidden border-b border-slate-800/60 py-24"
    >
      <MotionWrap delay={0.1} className="mb-14 flex flex-col gap-4">
        <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
          <span className="text-slate-600">{projectsSection.labelNumber}</span>
          {projectsSection.label}
        </div>

        <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-5xl">
          {projectsSection.heading}
        </h2>

        <p className="max-w-175 text-base leading-relaxed text-slate-400 md:text-lg">
          {projectsSection.description}
        </p>
      </MotionWrap>

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
