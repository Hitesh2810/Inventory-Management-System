import { Download, FileBarChart, FileSpreadsheet, ShieldCheck } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { RevenueChart } from "@/components/charts/RevenueChart";
import { reports } from "@/data/mockData";

export default function ReportsPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Reports studio" description="Revenue, inventory, orders, and supplier reports with export-ready actions." action={<Button><Download className="h-4 w-4" />Export pack</Button>} />
        <div className="grid gap-4 lg:grid-cols-4">
          {reports.map((report) => (
            <GlassCard key={report.title}>
              <FileBarChart className="mb-4 h-7 w-7 text-cyan-200" />
              <Badge>{report.type}</Badge>
              <h2 className="mt-4 text-lg font-bold text-white">{report.title}</h2>
              <p className="mt-2 text-sm text-white/45">Updated {report.updated}</p>
              <p className="mt-4 flex items-center gap-2 text-sm text-emerald-200"><ShieldCheck className="h-4 w-4" />{report.confidence}% confidence</p>
              <Button variant="secondary" className="mt-5 w-full"><FileSpreadsheet className="h-4 w-4" />CSV</Button>
            </GlassCard>
          ))}
        </div>
        <GlassCard className="mt-4"><h2 className="mb-4 text-xl font-bold text-white">Revenue report preview</h2><RevenueChart /></GlassCard>
      </AppShell>
    </ProtectedRoute>
  );
}
