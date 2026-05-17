"use client";

import { motion } from "framer-motion";

export function ProgressRing({ value = 76, label = "Health", size = 112, color = "#00d5ff" }) {
  const radius = 44;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <div className="relative grid place-items-center" style={{ width: size, height: size }}>
      <svg viewBox="0 0 112 112" className="h-full w-full -rotate-90">
        <circle cx="56" cy="56" r={radius} fill="none" stroke="rgba(255,255,255,.10)" strokeWidth="9" />
        <motion.circle
          cx="56"
          cy="56"
          r={radius}
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeWidth="9"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset: offset }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
      </svg>
      <div className="absolute text-center">
        <div className="text-2xl font-bold text-white">{value}%</div>
        <div className="text-xs text-white/48">{label}</div>
      </div>
    </div>
  );
}
