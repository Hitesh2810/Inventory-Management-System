"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Activity, BarChart3, Boxes, ChartNoAxesCombined, ClipboardList, Gauge, LayoutDashboard, Package, Settings, ShieldCheck, Tags, Truck, Users } from "lucide-react";
import { cn } from "@/utils/cn";

const items = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/products", label: "Products", icon: Package },
  { href: "/inventory", label: "Inventory", icon: Boxes },
  { href: "/suppliers", label: "Suppliers", icon: Truck },
  { href: "/categories", label: "Categories", icon: Tags },
  { href: "/orders", label: "Orders", icon: ClipboardList },
  { href: "/sales", label: "Sales", icon: ChartNoAxesCombined },
  { href: "/reports", label: "Reports", icon: BarChart3 },
  { href: "/users", label: "Users", icon: Users },
  { href: "/analytics", label: "Analytics", icon: Gauge },
  { href: "/settings", label: "Settings", icon: Settings },
  { href: "/activity-logs", label: "Activity", icon: Activity }
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 shrink-0 border-r border-white/10 bg-black/24 p-4 backdrop-blur-2xl lg:sticky lg:top-0 lg:block">
      <Link href="/" className="mb-7 flex items-center gap-3 px-2">
        <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300 text-black shadow-glow">
          <ShieldCheck className="h-6 w-6" />
        </span>
        <span>
          <span className="block text-lg font-black tracking-tight text-white">NovaIMS</span>
          <span className="text-xs text-white/42">Inventory intelligence</span>
        </span>
      </Link>
      <nav className="space-y-1">
        {items.map((item) => {
          const active = pathname === item.href;
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "group relative flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium text-white/58 transition hover:bg-white/[.07] hover:text-white",
                active && "bg-white/[.09] text-white"
              )}
            >
              {active && <motion.span layoutId="sidebar-active" className="absolute inset-y-2 left-0 w-1 rounded-full bg-cyan-300 shadow-glow" />}
              <Icon className="h-4.5 w-4.5" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
