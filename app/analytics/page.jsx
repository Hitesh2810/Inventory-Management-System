import { BrainCircuit, Gauge, Workflow } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { KpiCard } from "@/components/cards/KpiCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { SalesLineChart, InventoryBarChart } from "@/components/charts/AnalyticsChart";
import { Heatmap } from "@/components/dashboard/Heatmap";

export default function AnalyticsPage() {
  const intelligence = [
    { label: "Forecast Accuracy", value: 94, change: 4.2, tone: "emerald" },
    { label: "Automation Runs", value: 12840, change: 16.8, tone: "cyan" },
    { label: "Risk Signals", value: 23, change: -12.4, tone: "amber" },
    { label: "Data Quality", value: 99, change: 1.1, tone: "violet" }
  ];

  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Predictive analytics" description="AI-style executive analytics for revenue, stock risk, growth metrics, and warehouse heat signals." />
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">{intelligence.map((item) => <KpiCard key={item.label} {...item} />)}</div>
        <div className="mt-4 grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
          <GlassCard><h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><BrainCircuit className="h-5 w-5 text-cyan-200" />Demand forecast</h2><RevenueChart /></GlassCard>
          <GlassCard><h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Gauge className="h-5 w-5 text-cyan-200" />Warehouse intensity</h2><Heatmap /></GlassCard>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <GlassCard><h2 className="mb-4 text-xl font-bold text-white">Sales trajectory</h2><SalesLineChart /></GlassCard>
          <GlassCard><h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Workflow className="h-5 w-5 text-cyan-200" />Inventory throughput</h2><InventoryBarChart /></GlassCard>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
