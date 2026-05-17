import { Shield, UserCheck, UsersRound } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { Badge } from "@/components/ui/Badge";
import { DataTable } from "@/components/tables/DataTable";
import { users } from "@/data/mockData";

export default function UsersPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="User management" description="Operator profiles, role badges, verification status, and enterprise access overview." />
        <div className="grid gap-4 lg:grid-cols-4">
          {users.map((user) => (
            <GlassCard key={user.name}>
              <div className="flex items-center gap-3">
                <span className="grid h-12 w-12 place-items-center rounded-lg bg-cyan-300 text-sm font-black text-black">{user.name.split(" ").map((part) => part[0]).join("")}</span>
                <div><h2 className="font-bold text-white">{user.name}</h2><p className="text-sm text-white/45">{user.team}</p></div>
              </div>
              <div className="mt-5 flex gap-2"><Badge tone="violet">{user.role}</Badge><Badge tone={user.status === "Verified" ? "emerald" : "amber"}>{user.status}</Badge></div>
              <p className="mt-4 flex items-center gap-2 text-sm text-white/50"><UserCheck className="h-4 w-4 text-cyan-200" />Last seen {user.lastSeen}</p>
            </GlassCard>
          ))}
        </div>
        <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_.4fr]">
          <GlassCard><DataTable columns={[
            { key: "name", label: "Name" },
            { key: "team", label: "Team" },
            { key: "role", label: "Role" },
            { key: "status", label: "Status" },
            { key: "lastSeen", label: "Last seen" }
          ]} rows={users} /></GlassCard>
          <GlassCard>
            <UsersRound className="mb-4 h-8 w-8 text-cyan-200" />
            <h2 className="text-xl font-bold text-white">Access analytics</h2>
            <p className="mt-2 text-sm text-white/55">87 active sessions, 14 elevated roles, 100% admin MFA coverage.</p>
            <Shield className="mt-8 h-20 w-20 text-emerald-200/70" />
          </GlassCard>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
