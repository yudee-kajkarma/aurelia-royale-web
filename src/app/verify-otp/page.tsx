"use client";

import { FormEvent, Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
import { authService } from "@/services/auth/auth.service";

export default function VerifyOtpPage() {
  return (
    <Suspense fallback={<VerifyOtpPageShell />}>
      <VerifyOtpPageContent />
    </Suspense>
  );
}

function VerifyOtpPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    setEmail(searchParams.get("email") ?? "");
  }, [searchParams]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      await authService.verifyOtp({ email, otp });
      router.replace("/login");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "OTP verification failed. Check the email and OTP, then try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <VerifyOtpPageShell
      email={email}
      otp={otp}
      isSubmitting={isSubmitting}
      errorMessage={errorMessage}
      onEmailChange={setEmail}
      onOtpChange={setOtp}
      onSubmit={handleSubmit}
    />
  );
}

type VerifyOtpPageShellProps = {
  email?: string;
  otp?: string;
  isSubmitting?: boolean;
  errorMessage?: string | null;
  onEmailChange?: (value: string) => void;
  onOtpChange?: (value: string) => void;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

function VerifyOtpPageShell({
  email = "",
  otp = "",
  isSubmitting = false,
  errorMessage = null,
  onEmailChange,
  onOtpChange,
  onSubmit,
}: VerifyOtpPageShellProps = {}) {
  const handleSubmit = onSubmit ?? ((event: FormEvent<HTMLFormElement>) => event.preventDefault());

  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-12 sm:px-8">
        <section className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[22px] border border-white/5 bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(160deg,#045942_0%,#022f25_58%,#010d0a_100%)] px-8 py-12 sm:min-h-[520px] sm:px-12">
            <div className="text-center text-white">
              <div className="mx-auto inline-flex items-center justify-center">
                <BrandWordmark size="hero" className="items-center text-center" />
              </div>

              <h2 className="text-4xl font-bold leading-[1.08] text-[var(--gold)] sm:text-3xl lg:text-3xl">One Final Verification</h2>
              <p className="mx-auto mt-6 max-w-sm text-lg leading-[1.45] text-white/85 sm:mt-8 sm:text-xl lg:text-2xl">
                Enter the OTP sent to your email and complete your account setup.
              </p>
            </div>
          </aside>

          <div className="relative min-h-[520px] bg-[#f6f6f8] px-8 py-8 sm:px-12 sm:py-10">
            <div className="flex justify-end">
              <Link href="/register" className="inline-flex items-center rounded-full bg-[var(--deep)] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#0a2e28]">
                Register
              </Link>
            </div>

            <div className="mx-auto mt-10 max-w-lg sm:mt-16">
              <h1 className="text-4xl font-bold text-[#0f1216] sm:text-3xl lg:text-3xl">Verify OTP</h1>
              <p className="mt-3 text-sm leading-6 text-[#5a6370] sm:text-base">
                Confirm your account using the OTP from your registration email, then continue by signing in.
              </p>

              <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => onEmailChange?.(event.target.value)}
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="h-14 rounded-xl border border-black/12 bg-white px-4 text-base font-semibold text-[#1f242b] outline-none placeholder:text-[#9ea3ad] sm:text-lg"
                />
                <input
                  type="text"
                  value={otp}
                  onChange={(event) => onOtpChange?.(event.target.value)}
                  placeholder="Enter OTP"
                  required
                  maxLength={6}
                  className="h-14 rounded-xl border border-black/12 bg-white px-4 text-base font-semibold text-[#1f242b] outline-none placeholder:text-[#9ea3ad] sm:text-lg"
                />
                {errorMessage && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {errorMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 h-14 rounded-xl bg-[var(--gold)] text-base font-extrabold text-[#1a1710] transition hover:bg-[#b8972f] disabled:opacity-60 sm:text-sm"
                >
                  {isSubmitting ? "Verifying..." : "Verify OTP"}
                </button>
              </form>

              <p className="mt-6 text-base font-medium text-[#1f242b] sm:text-lg">
                Need another account? <Link href="/register" className="font-bold text-[#0e5a47]">Register again</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}