import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-aurora p-6">
      <div className="glass max-w-lg rounded-xl p-8 text-center">
        <p className="text-sm uppercase tracking-[.24em] text-cyan-200">404</p>
        <h1 className="mt-3 text-4xl font-black text-white">Route not found</h1>
        <p className="mt-3 text-white/55">This console panel does not exist yet.</p>
        <Button asChild className="mt-6"><Link href="/dashboard">Return to dashboard</Link></Button>
      </div>
    </div>
  );
}
