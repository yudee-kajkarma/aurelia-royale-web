"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { BrandWordmark } from "@/components/brand/BrandWordmark";
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

  function updateField<Key extends keyof RegisterRequest>(key: Key, value: RegisterRequest[Key]) {
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
      router.push(`/verify-otp?email=${encodeURIComponent(response.email)}`);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Registration failed. Check the details and try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen overflow-x-clip">
      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center justify-center px-6 py-12 sm:px-8">
        <section className="relative z-10 grid w-full max-w-6xl overflow-hidden rounded-[22px] border border-white/5 bg-white lg:grid-cols-[0.88fr_1.12fr]">
          <aside className="flex min-h-[420px] items-center justify-center bg-[linear-gradient(160deg,#045942_0%,#022f25_58%,#010d0a_100%)] px-8 py-12 sm:min-h-[520px] sm:px-12">
            <div className="text-center text-white">
              <div className="mx-auto inline-flex items-center justify-center">
                <BrandWordmark size="hero" className="items-center text-center" />
              </div>

              <h2 className="text-4xl font-bold leading-[1.08] text-[var(--gold)] sm:text-3xl lg:text-3xl">Join The Dalia Circle</h2>
              <p className="mx-auto mt-6 max-w-sm text-lg leading-[1.45] text-white/85 sm:mt-8 sm:text-xl lg:text-2xl">
                Register once, verify with OTP, and begin shopping with your saved profile.
              </p>
            </div>
          </aside>

          <div className="relative bg-[#f6f6f8] px-8 py-8 sm:px-12 sm:py-10">
            <div className="flex justify-end">
              <Link href="/login" className="inline-flex items-center rounded-full bg-[var(--deep)] px-5 py-2 text-sm font-bold text-white transition hover:bg-[#0a2e28]">
                Sign In
              </Link>
            </div>

            <div className="mx-auto mt-10 max-w-2xl sm:mt-12">
              <h1 className="text-4xl font-bold text-[#0f1216] sm:text-3xl lg:text-3xl">Register</h1>
              <p className="mt-3 text-sm leading-6 text-[#5a6370] sm:text-base">
                Create your jewellery account, add your default address, then verify the OTP sent to your email.
              </p>

              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#17110d]">Username</span>
                    <input
                      type="text"
                      required
                      value={form.username}
                      onChange={(event) => updateField("username", event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#17110d]">Email</span>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(event) => updateField("email", event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#17110d]">First Name</span>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(event) => updateField("firstName", event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#17110d]">Last Name</span>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(event) => updateField("lastName", event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#17110d]">Password</span>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        required
                        value={form.password}
                        onChange={(event) => updateField("password", event.target.value)}
                        className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 pr-14 outline-none transition focus:border-[#17110d]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((currentValue) => !currentValue)}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#66707c] transition hover:text-[#0e5a47]"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#17110d]">Confirm Password</span>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        required
                        value={form.confirmPassword}
                        onChange={(event) => updateField("confirmPassword", event.target.value)}
                        className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 pr-14 outline-none transition focus:border-[#17110d]"
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword((currentValue) => !currentValue)}
                        aria-label={showConfirmPassword ? "Hide confirm password" : "Show confirm password"}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-[#66707c] transition hover:text-[#0e5a47]"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#17110d]">Country Code</span>
                    <input
                      type="text"
                      required
                      value={form.countryCode}
                      onChange={(event) => updateField("countryCode", event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#17110d]">Phone Number</span>
                    <input
                      type="tel"
                      required
                      value={form.phoneNumber}
                      onChange={(event) => updateField("phoneNumber", event.target.value)}
                      className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                    />
                  </label>
                </div>

                <div className="rounded-[28px] border border-black/8 bg-white p-5">
                  <h3 className="text-lg font-bold text-[#17110d]">Address</h3>
                  <div className="mt-4 grid gap-5 sm:grid-cols-2">
                    <label className="block sm:col-span-2">
                      <span className="mb-2 block text-sm font-semibold text-[#17110d]">Street</span>
                      <input
                        type="text"
                        required
                        value={form.address.street}
                        onChange={(event) => updateAddressField("street", event.target.value)}
                        className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#17110d]">City</span>
                      <input
                        type="text"
                        required
                        value={form.address.city}
                        onChange={(event) => updateAddressField("city", event.target.value)}
                        className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#17110d]">State</span>
                      <input
                        type="text"
                        required
                        value={form.address.state}
                        onChange={(event) => updateAddressField("state", event.target.value)}
                        className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#17110d]">Postal Code</span>
                      <input
                        type="text"
                        required
                        value={form.address.postalCode}
                        onChange={(event) => updateAddressField("postalCode", event.target.value)}
                        className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-[#17110d]">Country</span>
                      <input
                        type="text"
                        required
                        value={form.address.country}
                        onChange={(event) => updateAddressField("country", event.target.value)}
                        className="h-14 w-full rounded-2xl border border-black/12 bg-white px-4 outline-none transition focus:border-[#17110d]"
                      />
                    </label>
                  </div>
                </div>

                {errorMessage ? (
                  <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
                    {errorMessage}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 h-14 w-full rounded-xl bg-[var(--gold)] text-base font-extrabold text-[#1a1710] transition hover:bg-[#b8972f] disabled:opacity-60 sm:text-sm"
                >
                  {isSubmitting ? "Creating account..." : "Register"}
                </button>

                <p className="text-center text-base font-medium text-[#1f242b] sm:text-lg">
                  Already have an account? <Link href="/login" className="font-bold text-[#0e5a47]">Sign in</Link>
                </p>
              </form>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}