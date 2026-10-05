"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import LoginImage from "@/assets/login-image.png";
import { useAuth } from "@/providers/AuthProvider";
import { getSafeAuthRedirect } from "@/services/auth/auth.types";
import { notifyError } from "@/utils/notify";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isAuthenticated, isReady, login, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!isReady || !isAuthenticated || !user) {
            return;
        }

        const redirectPath = getSafeAuthRedirect(
            user.role,
            searchParams.get("redirect"),
        );
        router.replace(redirectPath);
    }, [isAuthenticated, isReady, router, searchParams, user]);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);

        try {
            const session = await login({ email, password });
            const redirectPath = getSafeAuthRedirect(
                session.user.role,
                searchParams.get("redirect"),
            );
            router.replace(redirectPath);
        } catch (error) {
            notifyError(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen overflow-x-clip">
            <div className="grid min-h-screen md:grid-cols-2">
                {/* Left — campaign image */}
                <div className="relative hidden md:block">
                    <Image
                        src={LoginImage}
                        alt="Model wearing Aurelia Royale jewellery"
                        fill
                        sizes="50vw"
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Right — form panel */}
                <div className="flex min-h-screen flex-col bg-[#f7f6f2] px-6 py-8 sm:px-12 lg:px-16">
                    {/* Top bar */}
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.16em] text-[#2a2a2a] transition hover:text-foreground"
                        >
                            <ArrowLeft size={16} />
                            Back to Home
                        </Link>

                        <div className="inline-flex border border-black/12">
                            <span className="bg-[#1f4a37] px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                                Sign In
                            </span>
                            <Link
                                href="/register"
                                className="bg-white px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2a2a2a] transition hover:text-foreground"
                            >
                                Register
                            </Link>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-gold" />
                            <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                                Welcome Back
                            </p>
                        </div>

                        <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[1.05] text-foreground">
                            Sign Into Your Account.
                        </h1>

                        <p className="mt-5 font-[family-name:var(--font-jost)] text-[0.95rem] font-light leading-[1.7] text-[#5a5a5a]">
                            Access your collection, track orders, and manage
                            your bespoke commissions in one place.
                        </p>

                        <form className="mt-10" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]"
                                >
                                    Email Address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder="you@example.com"
                                    autoComplete="email"
                                    required
                                    className="mt-3 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                />
                            </div>

                            <div className="mt-7">
                                <label
                                    htmlFor="password"
                                    className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]"
                                >
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="password"
                                        type={
                                            showPassword ? "text" : "password"
                                        }
                                        value={password}
                                        onChange={(event) =>
                                            setPassword(event.target.value)
                                        }
                                        placeholder="Your Password"
                                        autoComplete="current-password"
                                        required
                                        className="mt-3 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 pr-10 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                    />
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setShowPassword(
                                                (currentValue) => !currentValue,
                                            )
                                        }
                                        className="absolute bottom-3 right-0 inline-flex items-center justify-center text-[#66707c] transition hover:text-foreground"
                                        aria-label={
                                            showPassword
                                                ? "Hide password"
                                                : "Show password"
                                        }
                                    >
                                        {showPassword ? (
                                            <EyeOff size={20} />
                                        ) : (
                                            <Eye size={20} />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <Link
                                    href="/reset-password"
                                    className="font-[family-name:var(--font-jost)] text-sm font-bold text-foreground transition hover:text-gold"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || !isReady}
                                className="mt-8 w-full bg-[#1f4a37] py-4 font-[family-name:var(--font-jost)] text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-[#173a2b] disabled:opacity-60"
                            >
                                {isSubmitting ? "Signing In..." : "Sign In"}
                            </button>
                        </form>

                        <p className="mt-7 text-center font-[family-name:var(--font-jost)] text-base font-medium text-[#1f242b]">
                            Don&apos;t have an account?{" "}
                            <Link
                                href="/register"
                                className="font-bold text-foreground underline underline-offset-4"
                            >
                                Create one
                            </Link>
                        </p>
                    </div>

                    {/* Footer */}
                    <div>
                        <div className="h-px w-full bg-black/10" />
                        <div className="mt-5 flex flex-col items-center gap-3 font-[family-name:var(--font-jost)] text-xs text-[#9a9a9a] sm:flex-row sm:justify-end">
                            <span>© 2025 Aurelia Royale</span>
                            {/* <span className="flex gap-6">
                <span>Privacy</span>
                <span>Terms</span>
                <span>Support</span>
              </span> */}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
