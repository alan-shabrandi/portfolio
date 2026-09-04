import { Card } from "@/components/ui/card";
import { TechCategory } from "@/config/portfolio";

export function SkillCard({ category }: { category: TechCategory }) {
  const Icon = category.icon;

  return (
    <Card className="group relative h-full overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/40 p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex flex-col gap-6">
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60">
              <Icon className="h-5 w-5 text-cyan-400" />
            </div>
          )}

          <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-slate-200">
            {category.title}
          </h3>
        </div>

        <p className="text-sm leading-relaxed text-slate-400">
          {category.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill: string) => (
            <span
              key={skill}
              className="rounded-full border border-slate-700/50 bg-slate-800/60 px-3 py-1.5 text-xs text-slate-300 transition-colors hover:border-cyan-500/30 hover:text-white"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Card>
  );
}
