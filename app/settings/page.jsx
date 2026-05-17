"use client";

import { Bell, Moon, ShieldCheck, UserCog } from "lucide-react";
import { AppShell } from "@/components/layouts/AppShell";
import { ProtectedRoute } from "@/components/layouts/ProtectedRoute";
import { PageHeader } from "@/components/layouts/PageHeader";
import { GlassCard } from "@/components/cards/GlassCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

const sections = [
  { icon: UserCog, title: "Profile settings", text: "Name, title, workspace identity, and operational preferences." },
  { icon: ShieldCheck, title: "Security settings", text: "MFA, token expiry, trusted devices, and audit requirements." },
  { icon: Moon, title: "Theme settings", text: "Dark interface, neon intensity, motion comfort, and density controls." },
  { icon: Bell, title: "Notifications", text: "Low stock, order exceptions, supplier delays, and report digests." }
];

export default function SettingsPage() {
  return (
    <ProtectedRoute>
      <AppShell>
        <PageHeader title="Settings" description="Enterprise-grade preference cards, profile controls, security posture, and animated switches." />
        <div className="grid gap-4 lg:grid-cols-4">
          {sections.map((section) => {
            const Icon = section.icon;
            return (
              <GlassCard key={section.title}>
                <Icon className="mb-4 h-7 w-7 text-cyan-200" />
                <h2 className="text-lg font-bold text-white">{section.title}</h2>
                <p className="mt-2 text-sm text-white/55">{section.text}</p>
                <button className="mt-5 flex h-7 w-12 items-center rounded-full bg-cyan-300/25 p-1 transition hover:bg-cyan-300/40" aria-label={section.title}>
                  <span className="h-5 w-5 rounded-full bg-cyan-200 shadow-glow" />
                </button>
              </GlassCard>
            );
          })}
        </div>
        <GlassCard className="mt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Workspace name" defaultValue="Nova Global Operations" />
            <Input label="Primary region" defaultValue="United States" />
            <Input label="Alert email" defaultValue="ops@novaims.ai" />
            <Input label="API environment" defaultValue="Django REST staging" />
          </div>
          <Button className="mt-5">Save preferences</Button>
        </GlassCard>
      </AppShell>
    </ProtectedRoute>
  );
}
