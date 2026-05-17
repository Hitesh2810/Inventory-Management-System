import { ArrowUpRight, Crown, TrendingUp } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { SalesLineChart } from "@/components/charts/AnalyticsChart";
import { currency } from "@/utils/format";
import { topProducts } from "@/data/mockData";

export default function SalesPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Sales intelligence" description="Revenue charts, growth signals, top-selling products, and channel trend analysis." />
        <div className="grid gap-4 xl:grid-cols-[1.2fr_.8fr]">
          <GlassCard><h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><TrendingUp className="h-5 w-5 text-cyan-200" />Revenue velocity</h2><RevenueChart /></GlassCard>
          <GlassCard><h2 className="mb-4 text-xl font-bold text-white">Channel trends</h2><SalesLineChart /></GlassCard>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-4">
          {topProducts.map((product, index) => (
            <GlassCard key={product.name}>
              <Crown className="mb-4 h-7 w-7 text-amber-200" />
              <p className="text-sm text-white/45">Rank #{index + 1}</p>
              <h3 className="mt-2 text-lg font-bold text-white">{product.name}</h3>
              <p className="mt-4 text-2xl font-black text-gradient">{currency(product.revenue)}</p>
              <p className="mt-2 flex items-center gap-1 text-sm text-emerald-200"><ArrowUpRight className="h-4 w-4" />{product.growth}% growth</p>
            </GlassCard>
          ))}
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
