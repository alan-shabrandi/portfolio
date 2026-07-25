import { Card } from "@/components/ui/card";
import { MotionWrap } from "@/components/motion/motion-wrap";
import { PORTFOLIO_DATA } from "@/config/portfolio";

export function Skills() {
  const { skillsSection, skillsCategories } = PORTFOLIO_DATA;

  return (
    <section
      id="skills"
      className="py-24 border-y border-slate-800/60 overflow-hidden scroll-mt-24"
    >
      {/* Header */}
      <MotionWrap delay={0.1} className="flex flex-col gap-4 mb-14">
        <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400">
          <span className="text-slate-600">{skillsSection.labelNumber}</span>
          {skillsSection.label}
        </div>

        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-slate-100">
          {skillsSection.heading}
        </h2>

        <p className="max-w-175 text-base md:text-lg leading-relaxed text-slate-400">
          {skillsSection.description}
        </p>
      </MotionWrap>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <MotionWrap key={category.title} delay={0.2 + index * 0.1}>
              <Card
                className="
                  group relative h-full overflow-hidden rounded-3xl p-7 
                  bg-slate-900/40 border border-slate-800/70 backdrop-blur-sm 
                  transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30
                "
              >
                <div
                  className="
                    absolute inset-0 bg-linear-to-br from-cyan-500/5 
                    via-transparent to-transparent opacity-0 
                    group-hover:opacity-100 transition-opacity
                  "
                />

                <div className="relative flex flex-col gap-6">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50">
                      <Icon className="w-5 h-5 text-cyan-400" />
                    </div>

                    <h3 className="text-sm font-semibold tracking-[0.15em] text-slate-200 uppercase">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed text-slate-400">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="
                          px-3 py-1.5 rounded-full text-xs text-slate-300 
                          bg-slate-800/60 border border-slate-700/50 
                          transition-colors hover:text-white hover:border-cyan-500/30
                        "
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </MotionWrap>
          );
        })}
      </div>
    </section>
  );
}
