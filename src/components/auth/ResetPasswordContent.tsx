"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
import { authService } from "@/services/auth/auth.service";
import { notifyError } from "@/utils/notify";
import { useTranslation } from "@/utils/i18n";

export function ResetPasswordContent() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSendingOtp, setIsSendingOtp] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const { t, localizeHref } = useTranslation();

  const handleInvalid = (event: React.FormEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (target.validity.valueMissing) {
      target.setCustomValidity(t("validation.required"));
    } else if (target.validity.typeMismatch) {
      target.setCustomValidity(t("validation.emailMismatch"));
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setter: (val: string) => void
  ) => {
    setter(event.target.value);
    event.target.setCustomValidity("");
  };

  async function handleSendOtp() {
    if (!email.trim()) {
      notifyError(t("auth.enterEmailFirst"));
      return;
    }

    setIsSendingOtp(true);
    try {
      await authService.sendOtp({ email: email.trim(), purpose: "password_reset" });
      toast.success(t("auth.otpSent"));
    } catch (err: any) {
      notifyError(
        err?.data?.message || err?.message || "Failed to send reset OTP."
      );
    } finally {
      setIsSendingOtp(false);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!email.trim() || !otp.trim() || !newPassword.trim()) {
      notifyError(t("auth.requiredFields"));
      return;
    }

    setIsSubmitting(true);
    try {
      await authService.resetPassword({
        email: email.trim(),
        otp: otp.trim(),
        newPassword: newPassword.trim(),
      });
      setSuccessMessage(t("auth.resetSuccess"));
      toast.success(t("auth.resetSuccess"));
      setTimeout(() => {
        router.push(localizeHref("/login"));
      }, 1200);
    } catch (err: any) {
      notifyError(
        err?.data?.message || err?.message || "Password reset failed."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-background flex flex-col justify-between p-6 sm:p-12 lg:p-16">
      <div className="mx-auto flex w-full max-w-md flex-col items-center pt-8">
        <BrandWordmark className="h-8 text-[#1f4a37]" />

        <div className="mt-12 w-full text-center">
          <h1 className="font-[family-name:var(--font-cormorant)] text-4xl sm:text-5xl font-medium text-foreground">
            {t("auth.resetPasswordHeading")}
          </h1>
          <p className="mt-4 font-[family-name:var(--font-jost)] text-sm font-light leading-relaxed text-[#5a5a5a]">
            {t("auth.resetPasswordDescription")}
          </p>
        </div>

        {successMessage ? (
          <div className="mt-8 w-full border border-gold/40 bg-gold/10 p-4 text-center font-[family-name:var(--font-jost)] text-sm font-medium text-[#1f4a37]">
            {successMessage}
          </div>
        ) : (
          <form className="mt-8 w-full space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="reset-email"
                className="block font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]"
              >
                {t("auth.emailLabel")} *
              </label>
              <div className="mt-2 flex gap-3">
                <input
                  id="reset-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => handleInputChange(e, setEmail)}
                  onInvalid={handleInvalid}
                  placeholder={t("auth.enterEmailPlaceholder")}
                  className="w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                />
                <button
                  type="button"
                  onClick={handleSendOtp}
                  disabled={isSendingOtp}
                  className="flex-shrink-0 bg-[#1f4a37] px-4 py-2 font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.15em] text-gold transition hover:bg-[#173a2b] disabled:opacity-50"
                >
                  {isSendingOtp ? t("auth.sendingOtp") : t("auth.sendOtpButton")}
                </button>
              </div>
            </div>

            <div>
              <label
                htmlFor="reset-otp"
                className="block font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]"
              >
                {t("auth.otpCodeLabel")} *
              </label>
              <input
                id="reset-otp"
                type="text"
                required
                value={otp}
                onChange={(e) => handleInputChange(e, setOtp)}
                onInvalid={handleInvalid}
                placeholder={t("auth.enterOtpPlaceholder")}
                className="mt-2 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
              />
            </div>

            <div>
              <label
                htmlFor="reset-pass"
                className="block font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]"
              >
                {t("auth.newPasswordLabel")} *
              </label>
              <div className="relative mt-2">
                <input
                  id="reset-pass"
                  type={showPassword ? "text" : "password"}
                  required
                  value={newPassword}
                  onChange={(e) => handleInputChange(e, setNewPassword)}
                  onInvalid={handleInvalid}
                  placeholder={t("auth.enterNewPasswordPlaceholder")}
                  className="w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 pr-10 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute bottom-3 right-0 text-[#66707c] hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#1f4a37] py-4 font-[family-name:var(--font-jost)] text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-[#173a2b] disabled:opacity-60"
            >
              {isSubmitting ? t("auth.resetting") : t("auth.resetPasswordButton")}
            </button>
          </form>
        )}

        <div className="mt-8 text-center">
          <Link
            href={localizeHref("/login")}
            className="font-[family-name:var(--font-jost)] text-sm font-bold text-foreground transition hover:text-gold"
          >
            {t("auth.backToSignIn")} <span className="underline">{t("auth.loginHere")}</span>
          </Link>
        </div>
      </div>

      <div className="text-center font-[family-name:var(--font-jost)] text-xs text-[#9a9a9a] pt-8">
        © 2026 Aurelia Royale. {t("footer.copyright")}
      </div>
    </main>
  );
}
