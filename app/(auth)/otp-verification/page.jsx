"use client";

import { useRouter } from "next/navigation";
import { KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { AuthShell } from "@/components/layouts/AuthShell";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { authService } from "@/services/authService";

export default function OtpVerificationPage() {
  const router = useRouter();
  const { register, handleSubmit, formState } = useForm({ defaultValues: { otp: "482910" } });

  async function onSubmit(values) {
    await authService.verifyOtp(values);
    router.push("/dashboard");
  }

  return (
    <AuthShell title="Verify access" subtitle="Confirm the six-digit code sent to your operations team inbox.">
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <Input icon={KeyRound} label="Verification code" inputMode="numeric" maxLength={6} {...register("otp", { required: true })} />
        <Button className="w-full" type="submit" disabled={formState.isSubmitting}>{formState.isSubmitting ? "Verifying..." : "Verify and continue"}</Button>
      </form>
    </AuthShell>
  );
}
