"use client";

import { Button } from "@/components/ui/Button";

export default function Error({ reset }) {
  return <div className="grid min-h-screen place-items-center bg-ink"><Button onClick={reset}>Retry verification</Button></div>;
}
