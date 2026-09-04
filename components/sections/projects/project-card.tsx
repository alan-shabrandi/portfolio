import Link from "next/link";
import { Code2, Layers, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ProjectItem } from "@/config/portfolio";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <Card className="group relative h-full overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 md:p-8">
      <span className="absolute right-6 top-2 select-none text-[100px] font-bold leading-none text-slate-800/40">
        {project.number}
      </span>

      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex h-full flex-col justify-between gap-8">
        <div className="flex flex-col gap-5">
          <span className="text-xs font-semibold tracking-[0.2em] text-cyan-400">
            {project.category}
          </span>

          <h3 className="text-2xl font-semibold tracking-tight text-slate-100 transition-colors group-hover:text-cyan-300 md:text-3xl">
            {project.title}
          </h3>

          <p className="text-sm leading-relaxed text-slate-400 md:text-base">
            {project.description}
          </p>

          <div className="flex flex-col gap-3 pt-3">
            <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
              <Layers className="h-4 w-4 text-cyan-400" />
              System Architecture
            </div>

            <p className="text-sm text-slate-300">{project.architecture}</p>

            {project.architectureFlow && (
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950/50 px-4 py-3 font-mono text-xs text-slate-400">
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
            {project.technologies.map((tech: string) => (
              <span
                key={tech}
                className="rounded-full border border-slate-700/50 bg-slate-800/60 px-3 py-1 text-xs text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {(project.vscodeMarketplaceUrl || project.sourceCodeUrl) && (
            <div className="flex items-center gap-6 pt-2 text-sm font-semibold text-cyan-400">
              {project.vscodeMarketplaceUrl && (
                <Link
                  href={project.vscodeMarketplaceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300"
                >
                  VS Code Extension
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              )}

              {project.sourceCodeUrl && (
                <Link
                  href={project.sourceCodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cyan-300"
                >
                  Source Code
                  <Code2 className="h-4 w-4" />
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
