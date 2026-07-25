import { PORTFOLIO_DATA } from "@/config/portfolio";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { personal } = PORTFOLIO_DATA;

  return (
    <footer className="w-full border-t border-slate-800/60 bg-[#0B0F17] py-8 text-sm text-slate-400">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 sm:flex-row lg:px-12">
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-2 font-medium text-slate-300">
            <span>
              © {currentYear} {personal.name}
            </span>
            <span className="text-slate-600">·</span>
            <span>{personal.role}</span>
          </div>
          <span className="text-xs text-slate-500">{personal.tagline}</span>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/50 px-3 py-1.5 text-xs font-medium text-slate-300">
          <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
          {personal.status}
        </div>
      </div>
    </footer>
  );
}
