"use client";

import { FormEvent, useEffect, useState } from "react";
import Image from "next/image";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import LoginImage from "@/assets/login-image.png";
import { useAuth } from "@/providers/AuthProvider";
import { getSafeAuthRedirect } from "@/services/auth/auth.types";
import { notifyError } from "@/utils/notify";

export default function LoginPage() {
    const t = useTranslations("LoginPage");
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
                        alt={t("heroImageAlt")}
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
                            {t("backToHome")}
                        </Link>

                        <div className="inline-flex border border-black/12">
                            <span className="bg-[#1f4a37] px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                                {t("signInTab")}
                            </span>
                            <Link
                                href="/register"
                                className="bg-white px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2a2a2a] transition hover:text-foreground"
                            >
                                {t("registerTab")}
                            </Link>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center py-12">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-gold" />
                            <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                                {t("welcomeBack")}
                            </p>
                        </div>

                        <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[1.05] text-foreground">
                            {t("title")}
                        </h1>

                        <p className="mt-5 font-[family-name:var(--font-jost)] text-[0.95rem] font-light leading-[1.7] text-[#5a5a5a]">
                            {t("subtitle")}
                        </p>

                        <form className="mt-10" onSubmit={handleSubmit}>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]"
                                >
                                    {t("emailLabel")}
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(event) =>
                                        setEmail(event.target.value)
                                    }
                                    placeholder={t("emailPlaceholder")}
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
                                    {t("passwordLabel")}
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
                                        placeholder={t("passwordPlaceholder")}
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
                                                ? t("hidePassword")
                                                : t("showPassword")
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
                                    {t("forgotPassword")}
                                </Link>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || !isReady}
                                className="mt-8 w-full bg-[#1f4a37] py-4 font-[family-name:var(--font-jost)] text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-[#173a2b] disabled:opacity-60"
                            >
                                {isSubmitting ? t("submitting") : t("submit")}
                            </button>
                        </form>

                        <p className="mt-7 text-center font-[family-name:var(--font-jost)] text-base font-medium text-[#1f242b]">
                            {t("noAccountText")}{" "}
                            <Link
                                href="/register"
                                className="font-bold text-foreground underline underline-offset-4"
                            >
                                {t("createOne")}
                            </Link>
                        </p>
                    </div>

                    {/* Footer */}
                    <div>
                        <div className="h-px w-full bg-black/10" />
                        <div className="mt-5 flex flex-col items-center gap-3 font-[family-name:var(--font-jost)] text-xs text-[#9a9a9a] sm:flex-row sm:justify-end">
                            <span>{t("copyright")}</span>
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
