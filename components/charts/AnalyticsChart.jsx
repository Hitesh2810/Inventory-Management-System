"use client";

import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { categoryData, inventoryLevels, salesTrend } from "@/data/mockData";

export function CategoryPieChart() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={categoryData} innerRadius={58} outerRadius={92} dataKey="value" paddingAngle={5}>
            {categoryData.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}
          </Pie>
          <Tooltip contentStyle={{ background: "rgba(5,8,18,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12 }} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export function InventoryBarChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={inventoryLevels}>
          <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
          <XAxis dataKey="zone" stroke="rgba(255,255,255,.45)" axisLine={false} tickLine={false} />
          <YAxis stroke="rgba(255,255,255,.35)" axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: "rgba(5,8,18,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12 }} />
          <Bar dataKey="capacity" radius={[8, 8, 0, 0]} fill="#7c3aed" />
          <Bar dataKey="throughput" radius={[8, 8, 0, 0]} fill="#00d5ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function SalesLineChart() {
  return (
    <div className="h-72">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={salesTrend}>
          <CartesianGrid stroke="rgba(255,255,255,.08)" vertical={false} />
          <XAxis dataKey="day" stroke="rgba(255,255,255,.45)" axisLine={false} tickLine={false} />
          <YAxis stroke="rgba(255,255,255,.35)" axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: "rgba(5,8,18,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 12 }} />
          <Line type="monotone" dataKey="online" stroke="#00d5ff" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="retail" stroke="#34f5a5" strokeWidth={3} dot={false} />
          <Line type="monotone" dataKey="wholesale" stroke="#7c3aed" strokeWidth={3} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
