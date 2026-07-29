import Link from "next/link";
import { Code2, Layers, ExternalLink } from "lucide-react";

import { Card } from "@/components/ui/card";
import { MotionWrap } from "@/components/motion/motion-wrap";

import { PORTFOLIO_DATA } from "@/config/portfolio";

export function Projects() {
  const { projectsSection, projects } = PORTFOLIO_DATA;

  return (
    <section
      id="projects"
      className="
        py-24
        border-b
        border-slate-800/60
        overflow-hidden
        scroll-mt-24
      "
    >
      <MotionWrap
        delay={0.1}
        className="
          flex
          flex-col
          gap-4
          mb-14
        "
      >
        <div
          className="
            flex
            items-center
            gap-3
            text-xs
            font-semibold
            tracking-[0.25em]
            uppercase
            text-cyan-400
          "
        >
          <span className="text-slate-600">{projectsSection.labelNumber}</span>
          {projectsSection.label}
        </div>

        <h2
          className="
            text-3xl
            md:text-5xl
            font-semibold
            tracking-tight
            text-slate-100
          "
        >
          {projectsSection.heading}
        </h2>

        <p
          className="
            max-w-175
            text-base
            md:text-lg
            leading-relaxed
            text-slate-400
          "
        >
          {projectsSection.description}
        </p>
      </MotionWrap>

      <div
        className="
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-6
        "
      >
        {projects.map((project, index) => (
          <MotionWrap
            key={project.number}
            delay={0.2 + index * 0.15}
            className={project.fullWidth ? "lg:col-span-2" : ""}
          >
            <Card
              className="
                group
                relative
                overflow-hidden
                h-full
                rounded-3xl
                p-7
                md:p-8
                bg-slate-900/40
                border
                border-slate-800/70
                backdrop-blur-sm
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-500/30
              "
            >
              <span
                className="
                  absolute
                  right-6
                  top-2
                  text-[100px]
                  font-bold
                  leading-none
                  text-slate-800/40
                  select-none
                "
              >
                {project.number}
              </span>

              <div
                className="
                  absolute
                  inset-0
                  bg-linear-to-br
                  from-cyan-500/5
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />

              <div
                className="
                  relative
                  flex
                  flex-col
                  justify-between
                  h-full
                  gap-8
                "
              >
                <div
                  className="
                    flex
                    flex-col
                    gap-5
                  "
                >
                  <span
                    className="
                      text-xs
                      font-semibold
                      tracking-[0.2em]
                      text-cyan-400
                    "
                  >
                    {project.category}
                  </span>

                  <h3
                    className="
                      text-2xl
                      md:text-3xl
                      font-semibold
                      tracking-tight
                      text-slate-100
                      transition-colors
                      group-hover:text-cyan-300
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      text-sm
                      md:text-base
                      leading-relaxed
                      text-slate-400
                    "
                  >
                    {project.description}
                  </p>

                  <div
                    className="
                      flex
                      flex-col
                      gap-3
                      pt-3
                    "
                  >
                    <div
                      className="
                        flex
                        items-center
                        gap-2
                        text-xs
                        font-medium
                        text-slate-500
                      "
                    >
                      <Layers className="w-4 h-4 text-cyan-400" />
                      System Architecture
                    </div>

                    <p className="text-sm text-slate-300">
                      {project.architecture}
                    </p>

                    {project.architectureFlow && (
                      <div
                        className="
                          rounded-xl
                          border
                          border-slate-800
                          bg-slate-950/50
                          px-4
                          py-3
                          text-xs
                          font-mono
                          text-slate-400
                          overflow-x-auto
                        "
                      >
                        {project.architectureFlow}
                      </div>
                    )}
                  </div>

                  <div className="text-sm font-medium text-cyan-300">
                    ⚡ {project.result}
                  </div>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3
                          py-1
                          rounded-full
                          text-xs
                          bg-slate-800/60
                          border
                          border-slate-700/50
                          text-slate-300
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {(project.vscodeMarketplaceUrl || project.sourceCodeUrl) && (
                    <div
                      className="
                        flex
                        items-center
                        gap-6
                        pt-2
                        text-sm
                        font-semibold
                        text-cyan-400
                      "
                    >
                      {project.vscodeMarketplaceUrl && (
                        <Link
                          href={project.vscodeMarketplaceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            hover:text-cyan-300
                          "
                        >
                          VS Code Extension
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                      )}

                      {project.sourceCodeUrl && (
                        <Link
                          href={project.sourceCodeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            inline-flex
                            items-center
                            gap-2
                            hover:text-cyan-300
                          "
                        >
                          Source Code
                          <Code2 className="w-4 h-4" />
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </MotionWrap>
        ))}
      </div>
    </section>
  );
}
