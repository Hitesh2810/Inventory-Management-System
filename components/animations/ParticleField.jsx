"use client";

import { motion } from "framer-motion";

export function ParticleField({ count = 36 }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, index) => (
        <motion.span
          key={index}
          className="absolute h-1 w-1 rounded-full bg-cyan-200/70 shadow-glow"
          style={{
            left: `${(index * 37) % 100}%`,
            top: `${(index * 19) % 100}%`
          }}
          animate={{
            y: [0, -26, 0],
            opacity: [0.15, 0.85, 0.15],
            scale: [0.6, 1.4, 0.6]
          }}
          transition={{ duration: 4 + (index % 6), repeat: Infinity, delay: index * 0.08 }}
        />
      ))}
    </div>
  );
}
