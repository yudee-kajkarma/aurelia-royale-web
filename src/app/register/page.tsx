"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import RegisterImg from "@/assets/Register-img.png";
import { authService } from "@/services/auth/auth.service";
import type { RegisterRequest } from "@/services/auth/auth.types";

const initialForm: RegisterRequest = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "+91",
    address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "India",
        isDefault: true,
        addressType: "home",
    },
};

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState<RegisterRequest>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function updateField<Key extends keyof RegisterRequest>(
        key: Key,
        value: RegisterRequest[Key],
    ) {
        setForm((currentValue) => ({
            ...currentValue,
            [key]: value,
        }));
    }

    function updateAddressField<Key extends keyof RegisterRequest["address"]>(
        key: Key,
        value: RegisterRequest["address"][Key],
    ) {
        setForm((currentValue) => ({
            ...currentValue,
            address: {
                ...currentValue.address,
                [key]: value,
            },
        }));
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (form.password !== form.confirmPassword) {
            setErrorMessage("Password and confirm password must match.");
            return;
        }

        setIsSubmitting(true);
        setErrorMessage(null);

        try {
            const response = await authService.register(form);
            router.push(
                `/verify-otp?email=${encodeURIComponent(response.email)}`,
            );
        } catch (error) {
            setErrorMessage(
                error instanceof Error
                    ? error.message
                    : "Registration failed. Check the details and try again.",
            );
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <main className="min-h-screen overflow-x-clip">
            <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-12 sm:px-8">
                <section className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-[22px] border border-white/5 bg-white lg:grid-cols-[0.88fr_1.12fr]">
                    <aside className="relative min-h-[420px] overflow-hidden sm:min-h-[520px] lg:min-h-full">
                        <Image
                            src={RegisterImg}
                            alt=""
                            fill
                            priority
                            sizes="(max-width: 1024px) 100vw, 45vw"
                            className="object-cover object-center"
                            aria-hidden="true"
                        />
                    </aside>

                    <div className="relative bg-[#f6f6f8] px-8 py-8 sm:px-12 sm:py-10">
                        <div className="flex justify-end">
                            <Link
                                href="/login"
                                className="font-jost inline-flex items-center rounded-full bg-deep px-6 py-2.5 text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-gold transition hover:bg-[#0a2e28]"
                            >
                                Sign In
                            </Link>
                        </div>

                        <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
                            <p className="font-jost flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                                <span
                                    className="inline-block h-px w-8 bg-gold"
                                    aria-hidden="true"
                                />
                                Join The Circle
                            </p>
                            <h1 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                                Register
                            </h1>
                            <p className="font-jost mt-4 max-w-md text-[0.95rem] leading-7 text-deep/70 sm:text-base">
                                Create your jewellery account, add your default
                                address, then verify the OTP sent to your email.
                            </p>

                            <form
                                className="mt-8 space-y-6"
                                onSubmit={handleSubmit}
                            >
                                <div className="grid gap-5 sm:grid-cols-2">
                                    <label className="block">
                                        <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                            Username
                                        </span>
                                        <input
                                            type="text"
                                            required
                                            value={form.username}
                                            onChange={(event) =>
                                                updateField(
                                                    "username",
                                                    event.target.value,
                                                )
                                            }
                                            className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                            Email
                                        </span>
                                        <input
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(event) =>
                                                updateField(
                                                    "email",
                                                    event.target.value,
                                                )
                                            }
                                            className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                            First Name
                                        </span>
                                        <input
                                            type="text"
                                            required
                                            value={form.firstName}
                                            onChange={(event) =>
                                                updateField(
                                                    "firstName",
                                                    event.target.value,
                                                )
                                            }
                                            className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                            Last Name
                                        </span>
                                        <input
                                            type="text"
                                            required
                                            value={form.lastName}
                                            onChange={(event) =>
                                                updateField(
                                                    "lastName",
                                                    event.target.value,
                                                )
                                            }
                                            className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                            Password
                                        </span>
                                        <div className="relative">
                                            <input
                                                type={
                                                    showPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                required
                                                value={form.password}
                                                onChange={(event) =>
                                                    updateField(
                                                        "password",
                                                        event.target.value,
                                                    )
                                                }
                                                className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 pr-14 text-sm text-deep outline-none transition focus:border-gold"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowPassword(
                                                        (currentValue) =>
                                                            !currentValue,
                                                    )
                                                }
                                                aria-label={
                                                    showPassword
                                                        ? "Hide password"
                                                        : "Show password"
                                                }
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#66707c] transition hover:text-[#0e5a47]"
                                            >
                                                {showPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                    </label>
                                    <label className="block">
                                        <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                            Confirm Password
                                        </span>
                                        <div className="relative">
                                            <input
                                                type={
                                                    showConfirmPassword
                                                        ? "text"
                                                        : "password"
                                                }
                                                required
                                                value={form.confirmPassword}
                                                onChange={(event) =>
                                                    updateField(
                                                        "confirmPassword",
                                                        event.target.value,
                                                    )
                                                }
                                                className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 pr-14 text-sm text-deep outline-none transition focus:border-gold"
                                            />
                                            <button
                                                type="button"
                                                onClick={() =>
                                                    setShowConfirmPassword(
                                                        (currentValue) =>
                                                            !currentValue,
                                                    )
                                                }
                                                aria-label={
                                                    showConfirmPassword
                                                        ? "Hide confirm password"
                                                        : "Show confirm password"
                                                }
                                                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#66707c] transition hover:text-[#0e5a47]"
                                            >
                                                {showConfirmPassword ? (
                                                    <EyeOff className="h-5 w-5" />
                                                ) : (
                                                    <Eye className="h-5 w-5" />
                                                )}
                                            </button>
                                        </div>
                                    </label>
                                    <label className="block">
                                        <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                            Country Code
                                        </span>
                                        <input
                                            type="text"
                                            required
                                            value={form.countryCode}
                                            onChange={(event) =>
                                                updateField(
                                                    "countryCode",
                                                    event.target.value,
                                                )
                                            }
                                            className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                            Phone Number
                                        </span>
                                        <input
                                            type="tel"
                                            required
                                            value={form.phoneNumber}
                                            onChange={(event) =>
                                                updateField(
                                                    "phoneNumber",
                                                    event.target.value,
                                                )
                                            }
                                            className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                        />
                                    </label>
                                </div>

                                <div className="rounded-[28px] border border-deep/10 bg-white p-6">
                                    <h3 className="font-cormorant text-2xl font-medium text-deep">
                                        Address
                                    </h3>
                                    <div className="mt-4 grid gap-5 sm:grid-cols-2">
                                        <label className="block sm:col-span-2">
                                            <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                                Street
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                value={form.address.street}
                                                onChange={(event) =>
                                                    updateAddressField(
                                                        "street",
                                                        event.target.value,
                                                    )
                                                }
                                                className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                                City
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                value={form.address.city}
                                                onChange={(event) =>
                                                    updateAddressField(
                                                        "city",
                                                        event.target.value,
                                                    )
                                                }
                                                className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                                State
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                value={form.address.state}
                                                onChange={(event) =>
                                                    updateAddressField(
                                                        "state",
                                                        event.target.value,
                                                    )
                                                }
                                                className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                                Postal Code
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                value={form.address.postalCode}
                                                onChange={(event) =>
                                                    updateAddressField(
                                                        "postalCode",
                                                        event.target.value,
                                                    )
                                                }
                                                className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="font-jost mb-2 block text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-deep/70">
                                                Country
                                            </span>
                                            <input
                                                type="text"
                                                required
                                                value={form.address.country}
                                                onChange={(event) =>
                                                    updateAddressField(
                                                        "country",
                                                        event.target.value,
                                                    )
                                                }
                                                className="font-jost h-14 w-full rounded-2xl border border-deep/15 bg-white px-4 text-sm text-deep outline-none transition focus:border-gold"
                                            />
                                        </label>
                                    </div>
                                </div>

                                {errorMessage ? (
                                    <p className="font-jost rounded-xl border border-red-300/50 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                                        {errorMessage}
                                    </p>
                                ) : null}

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="font-jost mt-2 inline-flex h-14 w-full items-center justify-center bg-deep text-xs font-semibold uppercase tracking-[0.32em] text-gold transition hover:bg-[#0a2e28] disabled:opacity-60"
                                >
                                    {isSubmitting
                                        ? "Creating account..."
                                        : "Register"}
                                </button>

                                <p className="font-jost text-center text-sm text-deep/70">
                                    Already have an account?{" "}
                                    <Link
                                        href="/login"
                                        className="font-semibold text-gold transition hover:text-[#a8862c]"
                                    >
                                        Sign in
                                    </Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
