import { AlertTriangle, Boxes, RadioTower } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { InventoryBarChart } from "@/components/charts/AnalyticsChart";
import { InventoryScene } from "@/components/dashboard/InventoryScene";
import { inventoryLevels, stockAlerts } from "@/data/mockData";

export default function InventoryPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Inventory control" description="Live stock meters, low-stock alerts, warehouse utilization, and animated 3D warehouse telemetry." />
        <div className="grid gap-4 lg:grid-cols-3">
          <GlassCard><ProgressRing value={96} label="Accuracy" /><p className="mt-4 text-center text-sm text-white/55">Cycle count confidence across all active zones.</p></GlassCard>
          <GlassCard><ProgressRing value={84} label="Capacity" color="#7c3aed" /><p className="mt-4 text-center text-sm text-white/55">Usable warehouse capacity with reserved bins.</p></GlassCard>
          <GlassCard><ProgressRing value={68} label="Reorder" color="#34f5a5" /><p className="mt-4 text-center text-sm text-white/55">Automated replenishment coverage.</p></GlassCard>
        </div>
        <div className="mt-4 grid gap-4 xl:grid-cols-[1.1fr_.9fr]">
          <GlassCard><h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Boxes className="h-5 w-5 text-cyan-200" />Zone utilization</h2><InventoryBarChart /></GlassCard>
          <GlassCard className="min-h-[360px]"><InventoryScene className="h-[340px]" /></GlassCard>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          {stockAlerts.map((alert) => (
            <GlassCard key={alert.sku}>
              <AlertTriangle className="mb-4 h-7 w-7 text-amber-200" />
              <h3 className="text-lg font-bold text-white">{alert.sku}</h3>
              <p className="mt-2 text-sm text-white/55">{alert.message}</p>
              <p className="mt-4 flex items-center gap-2 text-xs text-cyan-100"><RadioTower className="h-4 w-4" />ETA {alert.eta}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-5">
          {inventoryLevels.map((zone) => (
            <GlassCard key={zone.zone}>
              <p className="text-sm text-white/45">Zone {zone.zone}</p>
              <h3 className="mt-2 text-3xl font-black text-white">{zone.capacity}%</h3>
              <div className="mt-4 h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-emerald-300" style={{ width: `${zone.capacity}%` }} /></div>
            </GlassCard>
          ))}
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
