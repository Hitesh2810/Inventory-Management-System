import { Boxes, Tags } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { CategoryPieChart } from "@/components/charts/AnalyticsChart";
import { categoryData, products } from "@/data/mockData";

export default function CategoriesPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Categories matrix" description="Category performance, SKU allocation, product family health, and inventory segmentation." />
        <div className="grid gap-4 lg:grid-cols-[.65fr_1fr]">
          <GlassCard><h2 className="mb-4 text-xl font-bold text-white">Category mix</h2><CategoryPieChart /></GlassCard>
          <div className="grid gap-4 md:grid-cols-2">
            {categoryData.map((category) => {
              const count = products.filter((product) => product.category === category.name || (category.name === "Electronics" && product.category === "IoT")).length;
              return (
                <GlassCard key={category.name}>
                  <Tags className="mb-4 h-7 w-7" style={{ color: category.fill }} />
                  <h2 className="text-xl font-bold text-white">{category.name}</h2>
                  <p className="mt-2 text-sm text-white/50">{count || Math.max(2, Math.round(category.value / 6))} active SKUs tracked.</p>
                  <div className="mt-5 h-2 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${category.value * 2}%`, background: category.fill }} /></div>
                </GlassCard>
              );
            })}
          </div>
        </div>
        <GlassCard className="mt-4">
          <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Boxes className="h-5 w-5 text-cyan-200" />Reorder policy intelligence</h2>
          <div className="grid gap-3 md:grid-cols-3">
            {["Velocity-based reorder points", "Margin-aware stocking", "Demand seasonality guardrails"].map((item) => (
              <div key={item} className="rounded-lg border border-white/10 bg-white/[.04] p-4 text-sm text-white/62">{item}</div>
            ))}
          </div>
        </GlassCard>
      </AppShell>
    </ProtectedRoute>
  );
}
