"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Lock, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { AuthShell } from "@/components/layouts/AuthShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const router = useRouter();
  const { login, loading } = useAuth();
  const { register, handleSubmit } = useForm({ defaultValues: { email: "avery@novaims.ai", password: "password123" } });

  async function onSubmit(values) {
    await login(values);
    router.push("/dashboard");
  }

  return (
    <AuthShell title="Welcome back" subtitle="Enter the operations console with secure token-ready authentication.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input icon={Mail} label="Email" type="email" {...register("email", { required: true })} />
        <Input icon={Lock} label="Password" type="password" {...register("password", { required: true })} />
        <Button className="w-full" type="submit" disabled={loading}>{loading ? "Authenticating..." : "Login"}</Button>
      </form>
      <p className="mt-5 text-center text-sm text-white/50">New to NovaIMS? <Link href="/signup" className="text-cyan-200">Create account</Link></p>
    </AuthShell>
  );
}
