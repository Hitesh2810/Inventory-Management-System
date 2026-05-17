import { Activity, Filter, ServerCog } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { Button } from "@/components/ui/Button";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { activities } from "@/data/mockData";

export default function ActivityLogsPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Activity logs" description="Timeline interface for system activity, user actions, automation events, and filtered audit trails." action={<Button variant="secondary"><Filter className="h-4 w-4" />Filters</Button>} />
        <div className="grid gap-4 lg:grid-cols-[.7fr_1fr]">
          <GlassCard>
            <ActivityFeed items={[...activities, ...activities]} />
          </GlassCard>
          <div className="grid gap-4">
            {activities.map((activity) => (
              <GlassCard key={`${activity.title}-card`}>
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-cyan-300/15 text-cyan-100"><Activity className="h-5 w-5" /></span>
                  <div>
                    <h2 className="font-bold text-white">{activity.title}</h2>
                    <p className="mt-1 text-sm text-white/50">{activity.user} · {activity.time}</p>
                    <p className="mt-3 flex items-center gap-2 text-xs text-white/45"><ServerCog className="h-4 w-4 text-cyan-200" />Audit fingerprint synced to immutable event stream.</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </AppShell>
    </ProtectedRoute>
  );
}
