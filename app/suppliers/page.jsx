import { Mail, Phone, Star, Truck } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { InventoryBarChart } from "@/components/charts/AnalyticsChart";
import { suppliers } from "@/data/mockData";

export default function SuppliersPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Supplier network" description="Supplier profiles, performance analytics, contact cards, and procurement reliability scoring." />
        <div className="grid gap-4 lg:grid-cols-4">
          {suppliers.map((supplier) => (
            <GlassCard key={supplier.name}>
              <Truck className="mb-4 h-7 w-7 text-cyan-200" />
              <h2 className="text-xl font-bold text-white">{supplier.name}</h2>
              <p className="mt-1 text-sm text-white/45">{supplier.region}</p>
              <div className="mt-5 flex items-center justify-between">
                <ProgressRing value={supplier.score} label="Score" size={92} />
                <div className="text-right">
                  <p className="text-lg font-black text-white">{supplier.spend}</p>
                  <p className="text-xs text-white/45">Annual spend</p>
                  <p className="mt-3 text-sm text-emerald-200">{supplier.onTime}% on-time</p>
                </div>
              </div>
              <div className="mt-5 flex gap-2 text-white/55"><Mail className="h-4 w-4" /><Phone className="h-4 w-4" /><Star className="h-4 w-4 text-amber-200" /></div>
            </GlassCard>
          ))}
        </div>
        <GlassCard className="mt-4"><h2 className="mb-4 text-xl font-bold text-white">Performance trend</h2><InventoryBarChart /></GlassCard>
      </AppShell>
    </ProtectedRoute>
  );
}
