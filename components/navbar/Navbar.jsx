"use client";

import Link from "next/link";
import { Bell, Command, Menu, Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useAuth } from "@/context/AuthContext";

export function Navbar({ marketing = false }) {
  const { user } = useAuth();

  if (marketing) {
    return (
      <motion.header initial={{ y: -24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="fixed left-0 right-0 top-0 z-40 px-4 py-4">
        <div className="glass mx-auto flex max-w-7xl items-center justify-between rounded-xl px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-black text-white">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-cyan-300 text-black"><Sparkles className="h-5 w-5" /></span>
            NovaIMS
          </Link>
          <nav className="hidden items-center gap-7 text-sm text-white/62 md:flex">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#faq" className="hover:text-white">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost" className="hidden sm:inline-flex"><Link href="/login">Login</Link></Button>
            <Button asChild><Link href="/dashboard">Launch Console</Link></Button>
          </div>
        </div>
      </motion.header>
    );
  }

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-black/30 px-4 py-3 backdrop-blur-2xl sm:px-6">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 lg:hidden">
          <Button variant="ghost" size="sm" aria-label="Open navigation"><Menu className="h-5 w-5" /></Button>
          <Link href="/" className="font-black text-white">NovaIMS</Link>
        </div>
        <div className="hidden w-full max-w-md md:block">
          <Input icon={Search} placeholder="Search SKUs, orders, suppliers..." />
        </div>
        <div className="ml-auto flex items-center gap-2">
          <Button variant="secondary" size="sm" className="hidden md:inline-flex"><Command className="h-4 w-4" />⌘K</Button>
          <Button variant="ghost" size="sm" aria-label="Notifications"><Bell className="h-5 w-5" /></Button>
          <div className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/[.05] px-3 py-2">
            <span className="grid h-8 w-8 place-items-center rounded-md bg-cyan-300 text-xs font-black text-black">{user?.avatar || "NI"}</span>
            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-white">{user?.name || "Guest"}</p>
              <p className="text-xs text-white/45">{user?.role || "Viewer"}</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
