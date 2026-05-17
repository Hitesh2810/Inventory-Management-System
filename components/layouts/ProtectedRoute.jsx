"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/Button";

export function ProtectedRoute({ children }) {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="grid min-h-screen place-items-center bg-ink p-6">
        <div className="glass max-w-md rounded-xl p-6 text-center">
          <h1 className="text-2xl font-black text-white">Authentication required</h1>
          <p className="mt-3 text-sm text-white/55">Sign in to access the IMS command console.</p>
          <Button asChild className="mt-5"><Link href="/login">Login</Link></Button>
        </div>
      </div>
    );
  }
  return children;
}
