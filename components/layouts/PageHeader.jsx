import { Badge } from "@/components/ui/Badge";

export function PageHeader({ eyebrow = "Command Center", title, description, action }) {
  return (
    <div className="mb-6 flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
      <div>
        <Badge tone="cyan">{eyebrow}</Badge>
        <h1 className="mt-3 text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-white/56 md:text-base">{description}</p>
      </div>
      {action}
    </div>
  );
}
