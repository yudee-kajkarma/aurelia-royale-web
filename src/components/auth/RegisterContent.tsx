"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import RegisterImg from "@/assets/Register-img.png";
import { toast } from "sonner";
import { authService } from "@/services/auth/auth.service";
import type { RegisterRequest } from "@/services/auth/auth.types";
import {
    getCityOptions,
    getCountryOptions,
    getStateOptions,
} from "@/utils/location";
import { notifyError } from "@/utils/notify";
import { useTranslation } from "@/utils/i18n";

const COUNTRY_CODE_OPTIONS: ReadonlyArray<{ code: string; label: string }> = [
    { code: "+1", label: "United States (+1)" },
    { code: "+1", label: "Canada (+1)" },
    { code: "+52", label: "Mexico (+52)" },
    { code: "+54", label: "Argentina (+54)" },
    { code: "+591", label: "Bolivia (+591)" },
    { code: "+55", label: "Brazil (+55)" },
    { code: "+56", label: "Chile (+56)" },
    { code: "+57", label: "Colombia (+57)" },
    { code: "+506", label: "Costa Rica (+506)" },
    { code: "+593", label: "Ecuador (+593)" },
    { code: "+503", label: "El Salvador (+503)" },
    { code: "+502", label: "Guatemala (+502)" },
    { code: "+504", label: "Honduras (+504)" },
    { code: "+505", label: "Nicaragua (+505)" },
    { code: "+507", label: "Panama (+507)" },
    { code: "+595", label: "Paraguay (+595)" },
    { code: "+51", label: "Peru (+51)" },
    { code: "+598", label: "Uruguay (+598)" },
    { code: "+58", label: "Venezuela (+58)" },
    { code: "+34", label: "Spain (+34)" },
    { code: "+44", label: "United Kingdom (+44)" },
    { code: "+33", label: "France (+33)" },
    { code: "+49", label: "Germany (+49)" },
    { code: "+39", label: "Italy (+39)" },
    { code: "+31", label: "Netherlands (+31)" },
    { code: "+41", label: "Switzerland (+41)" },
    { code: "+32", label: "Belgium (+32)" },
    { code: "+43", label: "Austria (+43)" },
    { code: "+351", label: "Portugal (+351)" },
    { code: "+46", label: "Sweden (+46)" },
    { code: "+47", label: "Norway (+47)" },
    { code: "+45", label: "Denmark (+45)" },
    { code: "+358", label: "Finland (+358)" },
    { code: "+353", label: "Ireland (+353)" },
    { code: "+48", label: "Poland (+48)" },
    { code: "+420", label: "Czech Republic (+420)" },
    { code: "+36", label: "Hungary (+36)" },
    { code: "+30", label: "Greece (+30)" },
    { code: "+40", label: "Romania (+40)" },
    { code: "+971", label: "United Arab Emirates (+971)" },
    { code: "+966", label: "Saudi Arabia (+966)" },
    { code: "+974", label: "Qatar (+974)" },
    { code: "+965", label: "Kuwait (+965)" },
    { code: "+973", label: "Bahrain (+973)" },
    { code: "+968", label: "Oman (+968)" },
    { code: "+91", label: "India (+91)" },
    { code: "+81", label: "Japan (+81)" },
    { code: "+86", label: "China (+86)" },
    { code: "+82", label: "South Korea (+82)" },
    { code: "+65", label: "Singapore (+65)" },
    { code: "+60", label: "Malaysia (+60)" },
    { code: "+66", label: "Thailand (+66)" },
    { code: "+62", label: "Indonesia (+62)" },
    { code: "+63", label: "Philippines (+63)" },
    { code: "+84", label: "Vietnam (+84)" },
    { code: "+61", label: "Australia (+61)" },
    { code: "+64", label: "New Zealand (+64)" },
    { code: "+27", label: "South Africa (+27)" },
    { code: "+20", label: "Egypt (+20)" },
    { code: "+234", label: "Nigeria (+234)" },
    { code: "+254", label: "Kenya (+254)" },
    { code: "+212", label: "Morocco (+212)" },
];

export function RegisterContent() {
    const router = useRouter();
    const { t, localizeHref } = useTranslation();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [countryCode, setCountryCode] = useState("+44");
    const [nationalNumber, setNationalNumber] = useState("");

    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [street, setStreet] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [step, setStep] = useState<"register" | "otp">("register");
    const [otpCode, setOtpCode] = useState(["", "", "", "", "", ""]);
    const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
    const [registeredEmail, setRegisteredEmail] = useState("");
    const otpInputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const countryOptions = useMemo(() => getCountryOptions(), []);
    const stateOptions = useMemo(() => getStateOptions(country), [country]);
    const cityOptions = useMemo(
        () => getCityOptions(country, state),
        [country, state],
    );

    function handleCountryChange(value: string) {
        setCountry(value);
        setState("");
        setCity("");
    }

    function handleStateChange(value: string) {
        setState(value);
        setCity("");
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (password !== confirmPassword) {
            notifyError("Passwords do not match.");
            return;
        }

        const fullPhoneNumber = nationalNumber.trim()
            ? `${countryCode} ${nationalNumber.trim()}`
            : "";

        const payload: RegisterRequest = {
            username: username.trim(),
            email: email.trim(),
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            password,
            ...(fullPhoneNumber ? { phoneNumber: fullPhoneNumber } : {}),
            defaultAddress: {
                street: street.trim(),
                city: city.trim(),
                state: state.trim(),
                postalCode: postalCode.trim(),
                country: country.trim(),
            },
        };

        setIsSubmitting(true);

        try {
            await authService.register(payload);
            setRegisteredEmail(email.trim());
            setStep("otp");
            toast.success("Account created! Check your email for an OTP verification code.");
        } catch (err: any) {
            notifyError(
                err?.data?.message || err?.message || "Failed to create account.",
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    function handleOtpChange(index: number, value: string) {
        if (value.length > 1) {
            const pastedDigits = value.replace(/\D/g, "").slice(0, 6).split("");
            const newOtp = [...otpCode];
            pastedDigits.forEach((digit, i) => {
                newOtp[i] = digit;
            });
            setOtpCode(newOtp);
            const nextIndex = Math.min(pastedDigits.length, 5);
            otpInputRefs.current[nextIndex]?.focus();
            return;
        }

        const digit = value.replace(/\D/g, "");
        const newOtp = [...otpCode];
        newOtp[index] = digit;
        setOtpCode(newOtp);

        if (digit && index < 5) {
            otpInputRefs.current[index + 1]?.focus();
        }
    }

    function handleOtpKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Backspace" && !otpCode[index] && index > 0) {
            otpInputRefs.current[index - 1]?.focus();
        }
    }

    async function handleVerifyOtp(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const code = otpCode.join("");
        if (code.length < 6) {
            notifyError("Please enter a valid 6-digit OTP code.");
            return;
        }

        setIsVerifyingOtp(true);
        try {
            await authService.verifyOtp({
                email: registeredEmail,
                otp: code,
            });
            toast.success("Email verified successfully! You can now log in.");
            router.push(localizeHref("/login"));
        } catch (err: any) {
            notifyError(
                err?.data?.message || err?.message || "Failed to verify OTP code.",
            );
        } finally {
            setIsVerifyingOtp(false);
        }
    }

    async function handleResendOtp() {
        try {
            await authService.sendOtp({ email: registeredEmail, purpose: "register" });
            toast.success("A new OTP verification code has been sent to your email.");
        } catch (err: any) {
            notifyError(
                err?.data?.message || err?.message || "Failed to resend OTP.",
            );
        }
    }

    return (
        <main className="min-h-screen bg-background">
            <div className="flex min-h-screen flex-col lg:flex-row">
                {/* Left Side: Visual Hero */}
                <div className="relative hidden min-h-screen w-full overflow-hidden bg-[#061612] lg:block lg:w-1/2">
                    <Image
                        src={RegisterImg}
                        alt="Aurelia Royale fine jewelry"
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
                            {t("auth.registerHeading")}
                        </h2>
                        <p className="mt-4 max-w-md font-[family-name:var(--font-jost)] text-sm font-light leading-relaxed text-white/80">
                            {t("auth.registerDescription")}
                        </p>
                    </div>
                </div>

                {/* Right Side: Form */}
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
                            <Link
                                href={localizeHref("/login")}
                                className="bg-white px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2a2a2a] transition hover:text-foreground"
                            >
                                {t("auth.signInTab")}
                            </Link>
                            <span className="bg-[#1f4a37] px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                                {t("auth.registerTab")}
                            </span>
                        </div>
                    </div>

                    {/* Main Content */}
                    {step === "register" ? (
                        <div className="mx-auto my-auto w-full max-w-lg py-10">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-gold" />
                                <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                                    {t("auth.joinCircle")}
                                </p>
                            </div>

                            <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1.05] text-foreground sm:text-6xl">
                                {t("auth.registerHeading")}
                            </h1>

                            <p className="mt-4 font-[family-name:var(--font-jost)] text-[0.95rem] font-light leading-[1.7] text-[#5a5a5a]">
                                {t("auth.registerDescription")}
                            </p>

                            <form
                                className="mt-9 space-y-6"
                                onSubmit={handleSubmit}
                                onInvalidCapture={(e) => {
                                    const target = e.target as any;
                                    if (target && target.validity) {
                                        if (target.validity.valueMissing) {
                                            target.setCustomValidity(t("validation.required"));
                                        } else if (target.validity.typeMismatch && target.type === "email") {
                                            target.setCustomValidity(t("validation.emailMismatch"));
                                        } else {
                                            target.setCustomValidity("");
                                        }
                                    }
                                }}
                                onChangeCapture={(e) => {
                                    const target = e.target as any;
                                    if (target && typeof target.setCustomValidity === "function") {
                                        target.setCustomValidity("");
                                    }
                                }}
                                onInputCapture={(e) => {
                                    const target = e.target as any;
                                    if (target && typeof target.setCustomValidity === "function") {
                                        target.setCustomValidity("");
                                    }
                                }}
                            >
                                {/* Basic Fields */}
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="reg-username" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                            {t("auth.usernameLabel")} *
                                        </label>
                                        <input
                                            id="reg-username"
                                            type="text"
                                            required
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                            placeholder={t("auth.usernamePlaceholder")}
                                            className="mt-2 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="reg-email" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                            {t("auth.emailLabel")} *
                                        </label>
                                        <input
                                            id="reg-email"
                                            type="email"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="you@example.com"
                                            autoComplete="email"
                                            className="mt-2 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="reg-fn" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                            {t("auth.firstNameLabel")} *
                                        </label>
                                        <input
                                            id="reg-fn"
                                            type="text"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)}
                                            placeholder={t("auth.firstNamePlaceholder")}
                                            className="mt-2 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="reg-ln" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                            {t("auth.lastNameLabel")} *
                                        </label>
                                        <input
                                            id="reg-ln"
                                            type="text"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)}
                                            placeholder={t("auth.lastNamePlaceholder")}
                                            className="mt-2 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div>
                                    <label htmlFor="reg-[#phone]" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                        {t("auth.phoneNumberLabel")}
                                    </label>
                                    <div className="mt-2 flex gap-3">
                                        <div className="relative w-44 flex-shrink-0">
                                            <select
                                                value={countryCode}
                                                onChange={(e) => setCountryCode(e.target.value)}
                                                className="w-full appearance-none border-0 border-b border-[#d8c9a4] bg-transparent pb-3 pr-6 font-[family-name:var(--font-jost)] text-sm text-[#1f242b] outline-none transition focus:border-gold"
                                            >
                                                {COUNTRY_CODE_OPTIONS.map((opt, i) => (
                                                    <option key={`${opt.code}-${i}`} value={opt.code}>
                                                        {opt.label}
                                                    </option>
                                                ))}
                                            </select>
                                            <ChevronDown size={14} className="pointer-events-none absolute bottom-3.5 right-0 text-[#66707c]" />
                                        </div>
                                        <input
                                            id="reg-phone"
                                            type="tel"
                                            value={nationalNumber}
                                            onChange={(e) => setNationalNumber(e.target.value)}
                                            placeholder={t("auth.phoneNumberPlaceholder")}
                                            className="w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                        />
                                    </div>
                                </div>

                                {/* Address Section */}
                                <div className="pt-3">
                                    <p className="font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
                                        {t("auth.defaultAddressHeading")}
                                    </p>

                                    <div className="mt-4 grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="reg-country" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                                {t("auth.countryLabel")} *
                                            </label>
                                            <div className="relative mt-2">
                                                <select
                                                    id="reg-country"
                                                    required
                                                    value={country}
                                                    onChange={(e) => handleCountryChange(e.target.value)}
                                                    className="w-full appearance-none border-0 border-b border-[#d8c9a4] bg-transparent pb-3 pr-6 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition focus:border-gold"
                                                >
                                                    <option value="">{t("auth.selectCountry")}</option>
                                                    {countryOptions.map((opt) => (
                                                        <option key={opt.value} value={opt.value}>
                                                            {opt.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown size={16} className="pointer-events-none absolute bottom-3.5 right-0 text-[#66707c]" />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="reg-state" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                                {t("auth.stateLabel")} *
                                            </label>
                                            <div className="relative mt-2">
                                                <select
                                                    id="reg-state"
                                                    required
                                                    disabled={!country}
                                                    value={state}
                                                    onChange={(e) => handleStateChange(e.target.value)}
                                                    className="w-full appearance-none border-0 border-b border-[#d8c9a4] bg-transparent pb-3 pr-6 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition disabled:opacity-50 focus:border-gold"
                                                >
                                                    <option value="">{t("auth.selectState")}</option>
                                                    {stateOptions.map((opt) => (
                                                        <option key={opt.value} value={opt.value}>
                                                            {opt.label}
                                                        </option>
                                                    ))}
                                                </select>
                                                <ChevronDown size={16} className="pointer-events-none absolute bottom-3.5 right-0 text-[#66707c]" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6">
                                        <label htmlFor="reg-street" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                            {t("auth.streetLabel")} *
                                        </label>
                                        <input
                                            id="reg-street"
                                            type="text"
                                            required
                                            value={street}
                                            onChange={(e) => setStreet(e.target.value)}
                                            placeholder={t("auth.streetPlaceholder")}
                                            className="mt-2 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                        />
                                    </div>

                                    <div className="mt-6 grid gap-6 sm:grid-cols-2">
                                        <div>
                                            <label htmlFor="reg-city" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                                {t("auth.cityLabel")} *
                                            </label>
                                            {cityOptions.length > 0 ? (
                                                <div className="relative mt-2">
                                                    <select
                                                        id="reg-city"
                                                        required
                                                        value={city}
                                                        onChange={(e) => setCity(e.target.value)}
                                                        className="w-full appearance-none border-0 border-b border-[#d8c9a4] bg-transparent pb-3 pr-6 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition focus:border-gold"
                                                    >
                                                        <option value="">Select city</option>
                                                        {cityOptions.map((opt) => (
                                                            <option key={opt.value} value={opt.value}>
                                                                {opt.label}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown size={16} className="pointer-events-none absolute bottom-3.5 right-0 text-[#66707c]" />
                                                </div>
                                            ) : (
                                                <input
                                                    id="reg-city-input"
                                                    type="text"
                                                    required
                                                    value={city}
                                                    onChange={(e) => setCity(e.target.value)}
                                                    placeholder={t("auth.cityPlaceholder")}
                                                    className="mt-2 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                                />
                                            )}
                                        </div>

                                        <div>
                                            <label htmlFor="reg-postal" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                                {t("auth.postalCodeLabel")} *
                                            </label>
                                            <input
                                                id="reg-postal"
                                                type="text"
                                                required
                                                value={postalCode}
                                                onChange={(e) => setPostalCode(e.target.value)}
                                                placeholder={t("auth.postalCodePlaceholder")}
                                                className="mt-2 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Password Section */}
                                <div className="grid gap-6 pt-3 sm:grid-cols-2">
                                    <div>
                                        <label htmlFor="reg-pass" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                            {t("auth.passwordLabel")} *
                                        </label>
                                        <div className="relative mt-2">
                                            <input
                                                id="reg-pass"
                                                type={showPassword ? "text" : "password"}
                                                required
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                placeholder={t("auth.passwordPlaceholder")}
                                                autoComplete="new-password"
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

                                    <div>
                                        <label htmlFor="reg-confpass" className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]">
                                            {t("auth.confirmPasswordLabel")} *
                                        </label>
                                        <div className="relative mt-2">
                                            <input
                                                id="reg-confpass"
                                                type={showConfirmPassword ? "text" : "password"}
                                                required
                                                value={confirmPassword}
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                placeholder={t("auth.confirmPasswordPlaceholder")}
                                                autoComplete="new-password"
                                                className="w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 pr-10 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold"
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowConfirmPassword((v) => !v)}
                                                className="absolute bottom-3 right-0 text-[#66707c] hover:text-foreground"
                                            >
                                                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="mt-8 w-full bg-[#1f4a37] py-4 font-[family-name:var(--font-jost)] text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-[#173a2b] disabled:opacity-60"
                                >
                                    {isSubmitting ? t("auth.creatingAccount") : t("auth.registerButton")}
                                </button>
                            </form>

                            <p className="mt-7 text-center font-[family-name:var(--font-jost)] text-base font-medium text-[#1f242b]">
                                {t("auth.alreadyHaveAccount")}{" "}
                                <Link
                                    href={localizeHref("/login")}
                                    className="font-bold text-foreground underline underline-offset-4"
                                >
                                    {t("auth.signInTab")}
                                </Link>
                            </p>
                        </div>
                    ) : (
                        /* OTP Verification View */
                        <div className="mx-auto my-auto w-full max-w-md py-12">
                            <div className="flex items-center gap-3">
                                <span className="h-px w-10 bg-gold" />
                                <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                                    Email Verification
                                </p>
                            </div>

                            <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-5xl font-medium leading-[1.05] text-foreground">
                                Verify Your Email
                            </h1>

                            <p className="mt-4 font-[family-name:var(--font-jost)] text-[0.95rem] font-light leading-[1.7] text-[#5a5a5a]">
                                We sent a 6-digit OTP code to{" "}
                                <strong className="font-semibold text-foreground">{registeredEmail}</strong>.
                                Enter it below to complete your registration.
                            </p>

                            <form className="mt-8" onSubmit={handleVerifyOtp}>
                                <div className="flex justify-between gap-2">
                                    {otpCode.map((digit, idx) => (
                                        <input
                                            key={idx}
                                            ref={(el) => {
                                                otpInputRefs.current[idx] = el;
                                            }}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={6}
                                            value={digit}
                                            onChange={(e) => handleOtpChange(idx, e.target.value)}
                                            onKeyDown={(e) => handleOtpKeyDown(idx, e)}
                                            className="h-14 w-12 border-0 border-b-2 border-[#d8c9a4] bg-transparent text-center font-[family-name:var(--font-jost)] text-2xl font-bold text-[#1f242b] outline-none transition focus:border-gold"
                                        />
                                    ))}
                                </div>

                                <button
                                    type="submit"
                                    disabled={isVerifyingOtp}
                                    className="mt-8 w-full bg-[#1f4a37] py-4 font-[family-name:var(--font-jost)] text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-[#173a2b] disabled:opacity-60"
                                >
                                    {isVerifyingOtp ? "Verifying..." : "Verify & Complete"}
                                </button>
                            </form>

                            <div className="mt-6 flex flex-col items-center gap-3">
                                <button
                                    type="button"
                                    onClick={handleResendOtp}
                                    className="font-[family-name:var(--font-jost)] text-sm font-semibold text-gold underline underline-offset-4 hover:text-[#1f4a37]"
                                >
                                    Didn&apos;t receive code? Resend OTP
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setStep("register")}
                                    className="font-[family-name:var(--font-jost)] text-xs text-[#66707c] hover:underline"
                                >
                                    ← Back to registration details
                                </button>
                            </div>
                        </div>
                    )}

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
