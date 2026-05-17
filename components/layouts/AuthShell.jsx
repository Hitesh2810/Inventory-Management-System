"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { ParticleField } from "@/components/animations/ParticleField";
import { InventoryScene } from "@/components/dashboard/InventoryScene";

export function AuthShell({ title, subtitle, children }) {
  return (
    <main className="relative grid min-h-screen overflow-hidden bg-aurora lg:grid-cols-[.9fr_1.1fr]">
      <ParticleField count={30} />
      <section className="relative z-10 flex items-center justify-center p-6">
        <div className="w-full max-w-md">
          <Link href="/" className="mb-8 flex items-center gap-2 font-black text-white">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan-300 text-black"><Sparkles className="h-5 w-5" /></span>
            NovaIMS
          </Link>
          <div className="glass rounded-xl p-6">
            <h1 className="text-3xl font-black text-white">{title}</h1>
            <p className="mt-2 text-sm leading-6 text-white/55">{subtitle}</p>
            <div className="mt-6">{children}</div>
          </div>
        </div>
      </section>
      <section className="relative hidden items-center justify-center p-8 lg:flex">
        <div className="absolute inset-0 grid-surface opacity-50" />
        <InventoryScene className="glass neon-border relative h-[620px] w-full max-w-2xl rounded-2xl" />
      </section>
    </main>
  );
}
