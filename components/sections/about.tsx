import { Card } from "@/components/ui/card";
import { MotionWrap } from "@/components/motion/motion-wrap";
import { PORTFOLIO_DATA } from "@/config/portfolio";

export function About() {
  const { about } = PORTFOLIO_DATA;

  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-800/60 px-4 py-24 md:px-8"
    >
      <MotionWrap
        delay={0.1}
        className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16"
      >
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex items-center gap-3 text-xs font-semibold tracking-[0.25em] uppercase text-cyan-400">
            <span className="text-slate-600">{about.labelNumber}</span>
            {about.label}
          </div>

          <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-slate-100 md:text-5xl">
            {about.heading}
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-slate-400 md:text-lg">
            {about.description}
          </p>

          <div className="mt-2 grid gap-4">
            {about.principles.map((principle, index) => (
              <div key={index} className="border-l border-cyan-400/40 pl-4">
                <h3 className="text-sm font-semibold text-slate-200">
                  {principle.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-500">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <Card className="group relative overflow-hidden rounded-3xl border border-slate-800/70 bg-slate-900/40 p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-cyan-500/30 md:p-8 lg:col-span-5">
          <div className="absolute inset-0 bg-linear-to-br from-cyan-500/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="relative flex flex-col gap-6">
            <h3 className="text-sm font-semibold tracking-[0.15em] uppercase text-slate-200">
              {about.focusLabel}
            </h3>

            <div className="flex flex-col gap-5">
              {about.focusAreas.map((item) => (
                <div key={item.number} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700/50 bg-slate-800/60">
                    <item.icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-medium text-slate-600">
                        {item.number}
                      </span>
                      <h4 className="text-sm font-semibold text-slate-200">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </MotionWrap>
    </section>
  );
}
