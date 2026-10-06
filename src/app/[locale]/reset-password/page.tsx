"use client";

import { FormEvent, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { toast } from "sonner";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
import { authService } from "@/services/auth/auth.service";
import { notifyError } from "@/utils/notify";

export default function ResetPasswordPage() {
  const t = useTranslations("ResetPasswordPage");
  const tToasts = useTranslations("Toasts");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  async function handleSendOtp() {
    if (!email.trim()) {
      toast.error(tToasts("emailRequiredForOtp"));
      return;
    }

    setIsSendingOtp(true);
    setSuccessMessage(null);

    try {
      const response = await authService.sendOtp({ email: email.trim(), purpose: "password_reset" });
      setSuccessMessage(response.message || t("otpSentFallback"));
    } catch (error) {
      notifyError(error);
    } finally {
      setIsSendingOtp(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !otp.trim() || !newPassword.trim()) {
      toast.error(tToasts("resetPasswordFieldsRequired"));
      return;
    }

    setIsSubmitting(true);
    setSuccessMessage(null);

    try {
      const response = await authService.resetPassword({
        email: email.trim(),
        otp: otp.trim(),
        newPassword,
      });

      setSuccessMessage(response.message || t("resetSuccessFallback"));
      router.replace("/login");
    } catch (error) {
      notifyError(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-12 sm:px-8">
        <section className="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[22px] border border-white/5 bg-white lg:grid-cols-[0.92fr_1.08fr]">
          <aside className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(160deg,#045942_0%,#022f25_58%,#010d0a_100%)] px-8 py-12 sm:min-h-[520px] sm:px-12">
            <div className="text-center text-white">
              <div className="mx-auto inline-flex items-center justify-center">
                <BrandWordmark size="hero" className="items-center text-center" />
              </div>

              <h2 className="text-4xl font-bold leading-[1.08] text-gold sm:text-3xl lg:text-3xl">{t("heroTitle")}</h2>
              <p className="mx-auto mt-6 max-w-sm text-lg leading-[1.45] text-white/85 sm:mt-8 sm:text-xl lg:text-2xl">
                {t("heroSubtitle")}
              </p>
            </div>
          </aside>

          <div className="relative min-h-[520px] bg-[#f6f6f8] px-8 py-8 sm:px-12 sm:py-10">
            <div className="flex justify-end">
              <Link href="/login" className="inline-flex items-center rounded-full bg-deep px-5 py-2 text-sm font-bold text-white transition hover:bg-[#0a2e28]">
                {t("backToLogin")}
              </Link>
            </div>

            <div className="mx-auto mt-10 max-w-lg sm:mt-16">
              <h1 className="text-4xl font-bold text-[#0f1216] sm:text-3xl lg:text-3xl">{t("title")}</h1>
              <p className="mt-3 text-sm leading-6 text-[#5a6370] sm:text-base">
                {t("subtitle")}
              </p>

              <form className="mt-8 grid gap-4" onSubmit={handleSubmit}>
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#17110d]">{t("emailLabel")}</span>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 text-base outline-none transition focus:border-[#17110d]"
                      placeholder={t("emailPlaceholder")}
                    />
                    <button
                      type="button"
                      onClick={() => void handleSendOtp()}
                      disabled={isSendingOtp || isSubmitting}
                      className="shrink-0 rounded-full border border-gold bg-white px-4 text-xs font-bold tracking-[0.08em] text-deep transition hover:bg-[#fff6dd] disabled:opacity-60"
                    >
                      {isSendingOtp ? t("sendingOtp") : t("sendOtp")}
                    </button>
                  </div>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#17110d]">{t("otpLabel")}</span>
                  <input
                    type="text"
                    required
                    value={otp}
                    onChange={(event) => setOtp(event.target.value)}
                    maxLength={6}
                    className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 text-base outline-none transition focus:border-[#17110d]"
                    placeholder={t("otpPlaceholder")}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold text-[#17110d]">{t("newPasswordLabel")}</span>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={newPassword}
                      onChange={(event) => setNewPassword(event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 pr-14 text-base outline-none transition focus:border-[#17110d]"
                      placeholder={t("newPasswordPlaceholder")}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((currentValue) => !currentValue)}
                      aria-label={showPassword ? t("hidePassword") : t("showPassword")}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-[#66707c] transition hover:text-[#0e5a47]"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </label>

                {successMessage ? (
                  <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700">
                    {successMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting || isSendingOtp}
                  className="mt-2 h-14 rounded-xl bg-gold text-base font-extrabold text-[#1a1710] transition hover:bg-[#b8972f] disabled:opacity-60 sm:text-sm"
                >
                  {isSubmitting ? t("resetting") : t("submit")}
                </button>

                <p className="text-center text-base font-medium text-[#1f242b] sm:text-lg">
                  {t("backToSignIn")} <Link href="/login" className="font-bold text-[#0e5a47]">{t("loginHere")}</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}