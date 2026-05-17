"use client";

import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export function GlassCard({ children, className, hover = true }) {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      transition={{ type: "spring", stiffness: 220, damping: 22 }}
      className={cn("glass rounded-xl p-5", className)}
    >
      {children}
    </motion.div>
  );
}
