"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ error, reset }) {
  return (
    <div className="grid min-h-screen place-items-center bg-ink p-6">
      <div className="glass max-w-lg rounded-xl p-8 text-center">
        <p className="text-sm uppercase tracking-[.24em] text-rose-200">System interruption</p>
        <h1 className="mt-3 text-3xl font-black text-white">Something drifted out of orbit.</h1>
        <p className="mt-3 text-white/55">{error?.message || "The interface hit an unexpected state."}</p>
        <Button className="mt-6" onClick={reset}>Retry</Button>
      </div>
    </div>
  );
}
