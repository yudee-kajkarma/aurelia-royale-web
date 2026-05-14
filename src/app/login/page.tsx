"use client";

import { FormEvent, useEffect, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
import { useAuth } from "@/providers/AuthProvider";
import { getSafeAuthRedirect } from "@/services/auth/auth.types";

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { isAuthenticated, isReady, login, user } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isReady || !isAuthenticated || !user) {
      return;
    }

    const redirectPath = getSafeAuthRedirect(user.role, searchParams.get("redirect"));
    router.replace(redirectPath);
  }, [isAuthenticated, isReady, router, searchParams, user]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const session = await login({ email, password });
      const redirectPath = getSafeAuthRedirect(session.user.role, searchParams.get("redirect"));
      router.replace(redirectPath);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to sign in.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-12 sm:px-8">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-[280px] " />

        <section className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[22px] border border-white/5 bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(160deg,#045942_0%,#022f25_58%,#010d0a_100%)] px-8 py-12 sm:min-h-[520px] sm:px-12">
            <div className="text-center text-white">
              <div className="mx-auto  inline-flex items-center justify-center">
                <BrandWordmark size="hero" className="items-center text-center" />
              </div>

              <h2 className="text-4xl font-bold leading-[1.08] text-gold sm:text-3xl lg:text-3xl">Begin Your Diamond Journey</h2>
              <p className="mx-auto mt-6 max-w-sm text-lg leading-[1.45] text-white/85 sm:mt-8 sm:text-xl lg:text-2xl">
                Experience timeless elegance and brilliance.
              </p>
            </div>
          </aside>

          <div className="relative min-h-[520px] bg-[#f6f6f8] px-8 py-8 sm:px-12 sm:py-10">
            <div className="flex justify-end">
              <Link href="/" className="inline-flex items-center rounded-full bg-deep px-5 py-2 text-sm font-bold text-white transition hover:bg-[#0a2e28]">
                Home
              </Link>
            </div>

            <div className="mx-auto mt-10 max-w-lg sm:mt-16">
              <h1 className="text-4xl font-bold text-[#0f1216] sm:text-3xl lg:text-3xl">Login</h1>
              <p className="mt-3 text-sm leading-6 text-[#5a6370] sm:text-base">
                Sign in with your email and password. USER accounts land on the profile page and ADMIN accounts land on the admin page.
              </p>

              <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="Email"
                  autoComplete="email"
                  required
                  className="h-14 rounded-xl border border-black/12 bg-white px-4 text-base font-semibold text-[#1f242b] outline-none placeholder:text-[#9ea3ad] sm:text-lg"
                />
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="Password"
                    autoComplete="current-password"
                    required
                    className="h-14 w-full rounded-xl border border-black/12 bg-white px-4 pr-14 text-base font-semibold text-[#1f242b] outline-none placeholder:text-[#9ea3ad] sm:text-lg"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((currentValue) => !currentValue)}
                    className="absolute right-4 top-1/2 inline-flex -translate-y-1/2 items-center justify-center text-[#66707c] transition hover:text-[#0e5a47]"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <div className="flex justify-end">
                  <Link href="/reset-password" className="text-sm font-semibold text-[#0e5a47] transition hover:text-gold">
                    Forgot password?
                  </Link>
                </div>
                {errorMessage && (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {errorMessage}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting || !isReady}
                  className="mt-2 h-14 rounded-xl bg-gold text-base font-extrabold text-[#1a1710] transition hover:bg-[#b8972f] sm:text-sm"
                >
                  {isSubmitting ? "Signing in..." : "Login"}
                </button>
              </form>

              <p className="mt-6 text-base font-medium text-[#1f242b] sm:text-lg">
                Don&apos;t have account? <Link href="/register" className="font-bold text-[#0e5a47]">Register</Link>
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}