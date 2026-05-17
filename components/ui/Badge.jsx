import { cn } from "@/utils/cn";

export function Badge({ children, tone = "cyan", className }) {
  const tones = {
    cyan: "border-cyan-300/30 bg-cyan-300/10 text-cyan-100",
    emerald: "border-emerald-300/30 bg-emerald-300/10 text-emerald-100",
    violet: "border-violet-300/30 bg-violet-300/10 text-violet-100",
    amber: "border-amber-300/30 bg-amber-300/10 text-amber-100",
    rose: "border-rose-300/30 bg-rose-300/10 text-rose-100",
    neutral: "border-white/15 bg-white/8 text-white/70"
  };

  return <span className={cn("inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold", tones[tone], className)}>{children}</span>;
}
