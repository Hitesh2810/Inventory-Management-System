"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Check, DatabaseZap, Factory, LineChart, Lock, PackageCheck, Sparkles, Zap } from "lucide-react";
import { Navbar } from "@/components/navbar/Navbar";
import { Button } from "@/components/ui/Button";
import { GlassCard } from "@/components/cards/GlassCard";
import { FadeIn } from "@/components/animations/FadeIn";
import { ParticleField } from "@/components/animations/ParticleField";
import { InventoryScene } from "@/components/dashboard/InventoryScene";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { KpiCard } from "@/components/cards/KpiCard";
import { kpis } from "@/data/mockData";
import { useMouseGlow } from "@/hooks/useMouseGlow";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: DatabaseZap, title: "API-ready architecture", text: "Service layers, interceptors, token handling, and clean routing prepared for Django REST Framework." },
  { icon: Factory, title: "Live warehouse command", text: "Stock meters, reorder intelligence, supplier performance, and exception workflows in one console." },
  { icon: LineChart, title: "Executive analytics", text: "Revenue, inventory, orders, and sales insight with animated charts and operational telemetry." },
  { icon: Lock, title: "Enterprise controls", text: "Role surfaces, audit logs, secure auth patterns, and settings ready for production hardening." }
];

const pricing = [
  { name: "Launch", price: "$99", perks: ["5 warehouses", "10 operators", "Realtime stock dashboards"] },
  { name: "Scale", price: "$299", perks: ["Unlimited SKUs", "Advanced analytics", "Supplier intelligence"], featured: true },
  { name: "Enterprise", price: "Custom", perks: ["SAML SSO", "Dedicated infrastructure", "Custom workflows"] }
];

export default function LandingPage() {
  const root = useRef(null);
  const glow = useMouseGlow();

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.from(".hero-word", { y: 60, opacity: 0, stagger: 0.08, duration: 0.9, ease: "power4.out" });
      gsap.utils.toArray(".gsap-reveal").forEach((item) => {
        gsap.from(item, {
          scrollTrigger: { trigger: item, start: "top 82%" },
          y: 36,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });
    }, root);
    return () => context.revert();
  }, []);

  return (
    <main ref={root} className="relative min-h-screen overflow-hidden bg-ink">
      <Navbar marketing />
      <div className="pointer-events-none fixed inset-0 z-10 opacity-70" style={{ background: `radial-gradient(420px circle at ${glow.x}px ${glow.y}px, rgba(0,213,255,.18), transparent 45%)` }} />
      <ParticleField count={54} />
      <section className="relative flex min-h-screen items-center px-4 pb-16 pt-28">
        <div className="grid-surface absolute inset-0 opacity-60" />
        <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.02fr_.98fr]">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/8 px-4 py-2 text-sm text-cyan-100">
              <Sparkles className="h-4 w-4" /> AI-native inventory operating system
            </div>
            <h1 className="max-w-5xl text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              {["Command", "every", "SKU", "with", "cinematic", "precision."].map((word) => (
                <span key={word} className="hero-word mr-3 inline-block text-gradient">{word}</span>
              ))}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/62">
              NovaIMS is a futuristic SaaS dashboard for inventory, orders, suppliers, reports, users, and warehouse intelligence. Built as a polished frontend ready for Django REST integration.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link href="/dashboard">Open dashboard <ArrowRight className="h-5 w-5" /></Link></Button>
              <Button asChild variant="secondary" size="lg"><Link href="/signup">Start free</Link></Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-3">
              {kpis.slice(0, 3).map((kpi) => <KpiCard key={kpi.label} {...kpi} />)}
            </div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative h-[520px]">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-300/15 via-violet-500/12 to-emerald-300/10 blur-2xl" />
            <InventoryScene className="glass neon-border relative h-full rounded-2xl" />
          </motion.div>
        </div>
      </section>

      <section className="relative mx-auto max-w-7xl px-4 py-24">
        <FadeIn>
          <div className="gsap-reveal mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[.28em] text-cyan-200">Dashboard preview</p>
              <h2 className="mt-3 text-4xl font-black text-white">A boardroom-grade control plane.</h2>
            </div>
            <p className="max-w-xl text-white/55">Every interaction is designed for scanning, decision making, and fast operational response.</p>
          </div>
        </FadeIn>
        <GlassCard className="gsap-reveal">
          <RevenueChart />
        </GlassCard>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-4 py-20">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={feature.title} delay={index * 0.08}>
                <GlassCard className="h-full">
                  <Icon className="mb-5 h-8 w-8 text-cyan-200" />
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{feature.text}</p>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-7xl px-4 py-20">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[.28em] text-cyan-200">Pricing</p>
          <h2 className="mt-3 text-4xl font-black text-white">Scale from first warehouse to global network.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pricing.map((plan) => (
            <GlassCard key={plan.name} className={plan.featured ? "neon-border" : ""}>
              <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
              <p className="mt-4 text-4xl font-black text-gradient">{plan.price}</p>
              <div className="mt-6 space-y-3">
                {plan.perks.map((perk) => (
                  <p key={perk} className="flex items-center gap-2 text-sm text-white/62"><Check className="h-4 w-4 text-emerald-300" />{perk}</p>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-20 md:grid-cols-3">
        {["The first IMS our operators actually enjoy using.", "Feels like Linear met a warehouse control tower.", "The API-ready structure made backend planning effortless."].map((quote, index) => (
          <GlassCard key={quote}>
            <PackageCheck className="mb-5 h-7 w-7 text-cyan-200" />
            <p className="text-lg font-semibold leading-7 text-white">“{quote}”</p>
            <p className="mt-4 text-sm text-white/45">Operations leader #{index + 1}</p>
          </GlassCard>
        ))}
      </section>

      <section id="faq" className="mx-auto max-w-4xl px-4 py-20">
        {["Is this ready for Django REST Framework?", "Does it include protected auth structure?", "Can this be connected to MySQL-backed inventory APIs?"].map((question) => (
          <GlassCard key={question} className="mb-3">
            <h3 className="font-bold text-white">{question}</h3>
            <p className="mt-2 text-sm text-white/55">Yes. The frontend includes Axios services, auth context, route surfaces, mock data fallbacks, and clean module boundaries for future backend integration.</p>
          </GlassCard>
        ))}
      </section>

      <footer className="border-t border-white/10 px-4 py-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-white/45 md:flex-row">
          <p>© 2026 NovaIMS. Futuristic inventory intelligence.</p>
          <p className="flex items-center gap-2"><Zap className="h-4 w-4 text-cyan-200" /> Built for high-velocity operations.</p>
        </div>
      </footer>
    </main>
  );
}
