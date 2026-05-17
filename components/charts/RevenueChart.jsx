"use client";

import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { revenueData } from "@/data/mockData";

export function RevenueChart({ data = revenueData }) {
  return (
    <div className="h-80 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 12, right: 18, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00d5ff" stopOpacity={0.55} />
              <stop offset="100%" stopColor="#00d5ff" stopOpacity={0.02} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
          <XAxis dataKey="month" stroke="rgba(255,255,255,.45)" tickLine={false} axisLine={false} />
          <YAxis stroke="rgba(255,255,255,.35)" tickLine={false} axisLine={false} tickFormatter={(value) => `$${value / 1000}k`} />
          <Tooltip contentStyle={{ background: "rgba(5,8,18,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12, color: "white" }} />
          <Area type="monotone" dataKey="revenue" stroke="#00d5ff" strokeWidth={3} fill="url(#revenueGradient)" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
