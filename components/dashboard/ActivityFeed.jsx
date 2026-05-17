import { activities } from "@/data/mockData";
import { Badge } from "@/components/ui/Badge";

export function ActivityFeed({ items = activities }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={item.title} className="relative flex gap-3">
          <div className="flex flex-col items-center">
            <span className="mt-1 h-3 w-3 rounded-full bg-cyan-300 shadow-glow" />
            {index < items.length - 1 && <span className="mt-2 h-full min-h-10 w-px bg-white/10" />}
          </div>
          <div className="pb-3">
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-white/45">
              <Badge tone={item.tone}>{item.user}</Badge>
              <span>{item.time}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
