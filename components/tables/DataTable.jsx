"use client";

import { Badge } from "@/components/ui/Badge";

export function DataTable({ columns, rows, statusKey = "status" }) {
  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto scrollbar-thin">
        <table className="min-w-full divide-y divide-white/10">
          <thead className="bg-white/[.04]">
            <tr>
              {columns.map((column) => (
                <th key={column.key} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[.18em] text-white/45">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/8">
            {rows.map((row, index) => (
              <tr key={row.id || row.name || index} className="bg-white/[.015] transition hover:bg-white/[.055]">
                {columns.map((column) => (
                  <td key={column.key} className="whitespace-nowrap px-4 py-4 text-sm text-white/75">
                    {column.key === statusKey ? <Badge tone={statusTone(row[column.key])}>{row[column.key]}</Badge> : column.render ? column.render(row) : row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function statusTone(status = "") {
  if (/critical|exception|review/i.test(status)) return "rose";
  if (/low|pending|processing|authorized/i.test(status)) return "amber";
  if (/active|paid|verified|delivered/i.test(status)) return "emerald";
  if (/transit|manager/i.test(status)) return "cyan";
  return "neutral";
}
