import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { KpiCard } from "@/components/cards/KpiCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { CategoryPieChart, InventoryBarChart, SalesLineChart } from "@/components/charts/AnalyticsChart";
import { ProgressRing } from "@/components/ui/ProgressRing";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { Heatmap } from "@/components/dashboard/Heatmap";
import { InventoryScene } from "@/components/dashboard/InventoryScene";
import { Button } from "@/components/ui/Button";
import { kpis, stockAlerts } from "@/data/mockData";
import { BellRing, Download, Sparkles } from "lucide-react";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader
          title="Inventory command center"
          description="Revenue, fulfillment, stock health, and operational activity in one animated executive surface."
          action={<Button><Download className="h-4 w-4" />Export snapshot</Button>}
        />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {kpis.map((kpi) => <KpiCard key={kpi.label} {...kpi} />)}
        </div>
        <div className="mt-4 grid gap-4 xl:grid-cols-[1.45fr_.55fr]">
          <GlassCard>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Revenue overview</h2>
                <p className="text-sm text-white/45">Monthly revenue with demand acceleration.</p>
              </div>
              <Sparkles className="h-5 w-5 text-cyan-200" />
            </div>
            <RevenueChart />
          </GlassCard>
          <GlassCard>
            <h2 className="mb-4 text-xl font-bold text-white">Stock health</h2>
            <div className="flex flex-wrap justify-center gap-5">
              <ProgressRing value={96} label="Accuracy" />
              <ProgressRing value={72} label="Velocity" color="#7c3aed" />
            </div>
            <div className="mt-6 space-y-3">
              {stockAlerts.map((alert) => (
                <div key={alert.sku} className="rounded-lg border border-white/10 bg-white/[.04] p-3">
                  <p className="text-sm font-semibold text-white">{alert.sku}</p>
                  <p className="text-xs text-white/50">{alert.message}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-3">
          <GlassCard><h2 className="mb-4 text-xl font-bold text-white">Orders analytics</h2><SalesLineChart /></GlassCard>
          <GlassCard><h2 className="mb-4 text-xl font-bold text-white">Inventory analytics</h2><InventoryBarChart /></GlassCard>
          <GlassCard><h2 className="mb-4 text-xl font-bold text-white">Category split</h2><CategoryPieChart /></GlassCard>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[.8fr_.7fr_.8fr]">
          <GlassCard><h2 className="mb-4 text-xl font-bold text-white">Warehouse heatmap</h2><Heatmap /></GlassCard>
          <GlassCard><h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><BellRing className="h-5 w-5 text-cyan-200" />Recent activity</h2><ActivityFeed /></GlassCard>
          <GlassCard className="min-h-[360px]"><InventoryScene className="h-[320px]" /></GlassCard>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
