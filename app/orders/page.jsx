import { CreditCard, MapPin, PackageCheck, Truck } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/tables/DataTable";
import { orders } from "@/data/mockData";

export default function OrdersPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Orders orchestration" description="Shipment tracking, payment indicators, order timelines, and customer-ready fulfillment intelligence." />
        <div className="grid gap-4 lg:grid-cols-4">
          {orders.map((order) => (
            <GlassCard key={order.id}>
              <div className="flex items-center justify-between"><Badge>{order.status}</Badge><CreditCard className="h-5 w-5 text-cyan-200" /></div>
              <h2 className="mt-4 text-xl font-bold text-white">{order.id}</h2>
              <p className="mt-1 text-sm text-white/45">{order.customer}</p>
              <div className="mt-5 h-2 rounded-full bg-white/10"><div className="h-full rounded-full bg-cyan-300" style={{ width: `${order.progress}%` }} /></div>
              <div className="mt-4 flex justify-between text-sm"><span className="text-white/45">{order.payment}</span><span className="font-bold text-white">${order.total.toLocaleString()}</span></div>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_.55fr]">
          <GlassCard>
            <DataTable columns={[
              { key: "id", label: "Order" },
              { key: "customer", label: "Customer" },
              { key: "date", label: "Date" },
              { key: "total", label: "Total", render: (row) => `$${row.total.toLocaleString()}` },
              { key: "payment", label: "Payment" },
              { key: "status", label: "Status" }
            ]} rows={orders} />
          </GlassCard>
          <GlassCard>
            <h2 className="mb-5 text-xl font-bold text-white">Shipment timeline</h2>
            {["Order received", "Inventory allocated", "Packed", "Carrier scan", "Delivered"].map((step, index) => (
              <div key={step} className="flex gap-3 pb-5">
                <span className={`grid h-8 w-8 place-items-center rounded-full ${index < 3 ? "bg-cyan-300 text-black" : "bg-white/10 text-white/45"}`}>{index < 3 ? <PackageCheck className="h-4 w-4" /> : <Truck className="h-4 w-4" />}</span>
                <div>
                  <p className="font-semibold text-white">{step}</p>
                  <p className="text-sm text-white/45"><MapPin className="mr-1 inline h-3.5 w-3.5" />Dock {index + 1}</p>
                </div>
              </div>
            ))}
          </GlassCard>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
