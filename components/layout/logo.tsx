import Link from "next/link";
import { PORTFOLIO_DATA } from "@/config/portfolio";

export function Logo() {
  const { name, role } = PORTFOLIO_DATA.personal;

  return (
    <Link
      href="/"
      className="flex flex-col gap-0.5 transition-opacity hover:opacity-90"
    >
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold tracking-tight text-slate-100">
          {name}
        </span>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-cyan-400"
        />
      </div>
      <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-500">
        {role}
      </span>
    </Link>
  );
}
