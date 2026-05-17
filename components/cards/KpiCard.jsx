"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { GlassCard } from "./GlassCard";
import { useCountUp } from "@/hooks/useCountUp";
import { compactNumber, percent } from "@/utils/format";

export function KpiCard({ label, value, change, tone = "cyan" }) {
  const display = useCountUp(value);
  const positive = change >= 0;
  const tones = {
    cyan: "from-cyan-300/24 to-cyan-300/4 text-cyan-100",
    violet: "from-violet-300/24 to-violet-300/4 text-violet-100",
    emerald: "from-emerald-300/24 to-emerald-300/4 text-emerald-100",
    amber: "from-amber-300/24 to-amber-300/4 text-amber-100"
  };

  return (
    <GlassCard className="relative overflow-hidden">
      <div className={`absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${tones[tone]} opacity-80`} />
      <div className="relative">
        <p className="text-sm text-white/55">{label}</p>
        <div className="mt-3 flex items-end justify-between gap-3">
          <h3 className="text-3xl font-bold tracking-tight text-white">{label.includes("Accuracy") ? `${display}%` : compactNumber(display)}</h3>
          <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold ${positive ? "bg-emerald-400/12 text-emerald-200" : "bg-rose-400/12 text-rose-200"}`}>
            {positive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
            {percent(change)}
          </span>
        </div>
      </div>
    </GlassCard>
  );
}
