import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex flex-col gap-0.5 transition-opacity hover:opacity-90"
    >
      <div className="flex items-center gap-2">
        <span className="text-base font-semibold tracking-tight text-slate-100">
          Alan Shabrandi
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
      </div>
      <span className="text-[11px] uppercase tracking-[0.18em] text-slate-500">
        Backend Engineer
      </span>
    </Link>
  );
}
