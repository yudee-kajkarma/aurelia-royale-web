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
import { useTranslation } from "@/utils/i18n";

export function LoginContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const { isAuthenticated, isReady, login, user } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { t, localizeHref } = useTranslation();

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
            const redirectTarget = searchParams.get("redirect");
            const session = await login({ email, password });
            const redirectPath = getSafeAuthRedirect(session.user.role, redirectTarget);
            router.push(redirectPath);
        } catch (err: any) {
            notifyError(
                err?.data?.message || err?.message || t("auth.requiredFields"),
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="flex min-h-screen flex-col lg:flex-row">
                {/* Left Side: Visual Hero */}
                <div className="relative hidden min-h-screen w-full overflow-hidden bg-[#061612] lg:block lg:w-1/2">
                    <Image
                        src={LoginImage}
                        alt="Aurelia Royale jewelry"
                        fill
                        className="object-cover object-center opacity-90"
                        priority
                        quality={90}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#061612]/90 via-[#061612]/30 to-transparent" />
                    <div className="absolute bottom-16 left-16 right-16 z-10 text-white">
                        <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                            {t("auth.joinCircle")}
                        </p>
                        <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-tight">
                            {t("auth.loginHeading")}
                        </h2>
                        <p className="mt-4 max-w-md font-[family-name:var(--font-jost)] text-sm font-light leading-relaxed text-white/80">
                            {t("auth.loginDescription")}
                        </p>
                    </div>
                </div>

                {/* Right Side: Form Container */}
                <div className="flex min-h-screen w-full flex-col justify-between p-6 sm:p-10 lg:w-1/2 lg:p-16">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                        <Link
                            href={localizeHref("/")}
                            className="inline-flex items-center gap-2 font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.2em] text-[#2a2a2a] transition hover:text-gold"
                        >
                            <ArrowLeft size={16} />
                            {t("auth.backToHome")}
                        </Link>

                        <div className="inline-flex border border-black/12">
                            <span className="bg-[#1f4a37] px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                                {t("auth.signInTab")}
                            </span>
                            <Link
                                href={localizeHref("/register")}
                                className="bg-white px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2a2a2a] transition hover:text-foreground"
                            >
                                {t("auth.registerTab")}
                            </Link>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-gold" />
                            <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                                {t("auth.welcomeBack")}
                            </p>
                        </div>

                        <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[1.05] text-foreground">
                            {t("auth.loginHeading")}
                        </h1>

                        <p className="mt-5 font-[family-name:var(--font-jost)] text-[0.95rem] font-light leading-[1.7] text-[#5a5a5a]">
                            {t("auth.loginDescription")}
                        </p>

                        <form className="mt-10" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]"
                                >
                                    {t("auth.emailLabel")}
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
                                    onInvalid={(e) => {
                                        const target = e.currentTarget;
                                        if (target.validity.valueMissing) {
                                            target.setCustomValidity(t("validation.required"));
                                        } else if (target.validity.typeMismatch) {
                                            target.setCustomValidity(t("validation.emailMismatch"));
                                        } else {
                                            target.setCustomValidity("");
                                        }
                                    }}
                                    onInput={(e) => e.currentTarget.setCustomValidity("")}
                                    className="mt-3 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                />
                            </div>

                            <div className="mt-7">
                                <label
                                    htmlFor="password"
                                    className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]"
                                >
                                    {t("auth.passwordLabel")}
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
                                        onInvalid={(e) => {
                                            const target = e.currentTarget;
                                            if (target.validity.valueMissing) {
                                                target.setCustomValidity(t("validation.required"));
                                            } else {
                                                target.setCustomValidity("");
                                            }
                                        }}
                                        onInput={(e) => e.currentTarget.setCustomValidity("")}
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
                                    href={localizeHref("/reset-password")}
                                    className="font-[family-name:var(--font-jost)] text-sm font-bold text-foreground transition hover:text-gold"
                                >
                                    {t("auth.forgotPassword")}
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || !isReady}
                                className="mt-8 w-full bg-[#1f4a37] py-4 font-[family-name:var(--font-jost)] text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-[#173a2b] disabled:opacity-60"
                            >
                                {isSubmitting ? t("auth.signingIn") : t("auth.signInButton")}
                            </button>
                        </form>

                        <p className="mt-7 text-center font-[family-name:var(--font-jost)] text-base font-medium text-[#1f242b]">
                            {t("auth.dontHaveAccount")}{" "}
                            <Link
                                href={localizeHref("/register")}
                                className="font-bold text-foreground underline underline-offset-4"
                            >
                                {t("auth.createOne")}
                            </Link>
                        </p>
                    </div>

                    {/* Footer */}
                    <div>
                        <div className="h-px w-full bg-black/10" />
                        <div className="mt-5 flex flex-col items-center gap-3 font-[family-name:var(--font-jost)] text-xs text-[#9a9a9a] sm:flex-row sm:justify-end">
                            <span>© 2026 Aurelia Royale</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
