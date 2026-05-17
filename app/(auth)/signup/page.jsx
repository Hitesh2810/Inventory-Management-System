"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Building2, Mail, User } from "lucide-react";
import { useForm } from "react-hook-form";
import { AuthShell } from "@/components/layouts/AuthShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { useAuth } from "@/context/AuthContext";

export default function SignupPage() {
  const router = useRouter();
  const { signup, loading } = useAuth();
  const { register, handleSubmit } = useForm({ defaultValues: { name: "", email: "", company: "" } });

  async function onSubmit(values) {
    await signup(values);
    router.push("/otp-verification");
  }

  return (
    <AuthShell title="Create your command center" subtitle="Provision a polished IMS workspace prepared for enterprise data workflows.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input icon={User} label="Full name" {...register("name", { required: true })} />
        <Input icon={Mail} label="Work email" type="email" {...register("email", { required: true })} />
        <Input icon={Building2} label="Company" {...register("company", { required: true })} />
        <Button className="w-full" type="submit" disabled={loading}>{loading ? "Creating workspace..." : "Create workspace"}</Button>
      </form>
      <p className="mt-5 text-center text-sm text-white/50">Already have access? <Link href="/login" className="text-cyan-200">Login</Link></p>
    </AuthShell>
  );
}
