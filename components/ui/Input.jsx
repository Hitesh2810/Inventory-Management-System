"use client";

import { cn } from "@/utils/cn";

export function Input({ label, className, icon: Icon, ...props }) {
  return (
    <label className="block space-y-2">
      {label && <span className="text-sm font-medium text-white/72">{label}</span>}
      <span className="relative block">
        {Icon && <Icon className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cyan-200/70" />}
        <input
          className={cn(
            "h-11 w-full rounded-lg border border-white/10 bg-white/[.06] px-4 text-sm text-white outline-none transition placeholder:text-white/32 focus:border-cyan-300/60 focus:bg-white/[.09] focus:shadow-glow",
            Icon && "pl-10",
            className
          )}
          {...props}
        />
      </span>
    </label>
  );
}
