import { MotionWrap } from "@/components/motion/motion-wrap";

interface SectionHeaderProps {
  labelNumber: string;
  label: string;
  heading: string;
  description: string;
}

export function SectionHeader({
  labelNumber,
  label,
  heading,
  description,
}: SectionHeaderProps) {
  return (
    <MotionWrap delay={0.1} className="mb-14 flex flex-col gap-4">
      <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
        <span className="text-slate-600">{labelNumber}</span>
        {label}
      </div>

      <h2 className="text-3xl font-semibold tracking-tight text-slate-100 md:text-5xl">
        {heading}
      </h2>

      <p className="max-w-175 text-base leading-relaxed text-slate-400 md:text-lg">
        {description}
      </p>
    </MotionWrap>
  );
}
