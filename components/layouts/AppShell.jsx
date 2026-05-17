"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/navbar/Navbar";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { ParticleField } from "@/components/animations/ParticleField";

export function AppShell({ children }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-aurora">
      <div className="grid-surface pointer-events-none absolute inset-0 opacity-50" />
      <ParticleField count={22} />
      <div className="relative flex">
        <Sidebar />
        <main className="min-w-0 flex-1">
          <Navbar />
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="p-4 sm:p-6 lg:p-8">
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  );
}
