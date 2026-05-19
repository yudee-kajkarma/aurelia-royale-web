"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ChevronDown, Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import RegisterImg from "@/assets/Register-img.png";
import { authService } from "@/services/auth/auth.service";
import type { RegisterRequest } from "@/services/auth/auth.types";
import {
    getCityOptions,
    getCountryOptions,
    getStateOptions,
} from "@/utils/location";

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
    { code: "+53", label: "Cuba (+53)" },
    { code: "+1", label: "Dominican Republic (+1)" },
    { code: "+593", label: "Ecuador (+593)" },
    { code: "+503", label: "El Salvador (+503)" },
    { code: "+502", label: "Guatemala (+502)" },
    { code: "+592", label: "Guyana (+592)" },
    { code: "+509", label: "Haiti (+509)" },
    { code: "+504", label: "Honduras (+504)" },
    { code: "+1", label: "Jamaica (+1)" },
    { code: "+505", label: "Nicaragua (+505)" },
    { code: "+507", label: "Panama (+507)" },
    { code: "+595", label: "Paraguay (+595)" },
    { code: "+51", label: "Peru (+51)" },
    { code: "+1", label: "Puerto Rico (+1)" },
    { code: "+597", label: "Suriname (+597)" },
    { code: "+1", label: "Trinidad and Tobago (+1)" },
    { code: "+598", label: "Uruguay (+598)" },
    { code: "+58", label: "Venezuela (+58)" },
    { code: "+501", label: "Belize (+501)" },
    { code: "+43", label: "Austria (+43)" },
    { code: "+32", label: "Belgium (+32)" },
    { code: "+359", label: "Bulgaria (+359)" },
    { code: "+385", label: "Croatia (+385)" },
    { code: "+357", label: "Cyprus (+357)" },
    { code: "+420", label: "Czech Republic (+420)" },
    { code: "+45", label: "Denmark (+45)" },
    { code: "+372", label: "Estonia (+372)" },
    { code: "+358", label: "Finland (+358)" },
    { code: "+33", label: "France (+33)" },
    { code: "+49", label: "Germany (+49)" },
    { code: "+30", label: "Greece (+30)" },
    { code: "+36", label: "Hungary (+36)" },
    { code: "+354", label: "Iceland (+354)" },
    { code: "+353", label: "Ireland (+353)" },
    { code: "+39", label: "Italy (+39)" },
    { code: "+371", label: "Latvia (+371)" },
    { code: "+423", label: "Liechtenstein (+423)" },
    { code: "+370", label: "Lithuania (+370)" },
    { code: "+352", label: "Luxembourg (+352)" },
    { code: "+356", label: "Malta (+356)" },
    { code: "+377", label: "Monaco (+377)" },
    { code: "+31", label: "Netherlands (+31)" },
    { code: "+47", label: "Norway (+47)" },
    { code: "+48", label: "Poland (+48)" },
    { code: "+351", label: "Portugal (+351)" },
    { code: "+40", label: "Romania (+40)" },
    { code: "+378", label: "San Marino (+378)" },
    { code: "+421", label: "Slovakia (+421)" },
    { code: "+386", label: "Slovenia (+386)" },
    { code: "+34", label: "Spain (+34)" },
    { code: "+46", label: "Sweden (+46)" },
    { code: "+41", label: "Switzerland (+41)" },
    { code: "+44", label: "United Kingdom (+44)" },
];

const initialForm: RegisterRequest = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
    phoneNumber: "",
    countryCode: "",
    address: {
        street: "",
        city: "",
        state: "",
        postalCode: "",
        country: "",
        isDefault: true,
        addressType: "home",
    },
};

const fieldLabel =
    "font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.18em] text-[#2a2a2a]";
const fieldInput =
    "mt-3 w-full border-0 border-b border-[#d8c9a4] bg-transparent pb-3 font-[family-name:var(--font-jost)] text-base text-[#1f242b] outline-none transition placeholder:text-[#a6a6a6] focus:border-gold";
const fieldSelect = `${fieldInput} cursor-pointer appearance-none pr-8`;

export default function RegisterPage() {
    const router = useRouter();
    const [form, setForm] = useState<RegisterRequest>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isCityListOpen, setIsCityListOpen] = useState(false);
    const cityFieldRef = useRef<HTMLDivElement>(null);

    const countryOptions = useMemo(() => getCountryOptions(), []);
    const stateOptions = useMemo(
        () => getStateOptions(form.address.country),
        [form.address.country],
    );
    const cityOptions = useMemo(
        () => getCityOptions(form.address.country, form.address.state),
        [form.address.country, form.address.state],
    );
    const filteredCityOptions = useMemo(() => {
        const query = form.address.city.trim().toLowerCase();

        if (!query) {
            return cityOptions;
        }

        return cityOptions.filter((city) =>
            city.name.toLowerCase().includes(query),
        );
    }, [cityOptions, form.address.city]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                cityFieldRef.current &&
                !cityFieldRef.current.contains(event.target as Node)
            ) {
                setIsCityListOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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
            const countryName =
                countryOptions.find(
                    (option) => option.code === form.address.country,
                )?.name ?? form.address.country;
            const stateName =
                stateOptions.find(
                    (option) => option.code === form.address.state,
                )?.name ?? form.address.state;
            const payload: RegisterRequest = {
                ...form,
                address: {
                    ...form.address,
                    country: countryName,
                    state: stateName,
                    city: form.address.city.trim() || stateName,
                },
            };
            const response = await authService.register(payload);
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
            <div className="grid min-h-screen md:grid-cols-2">
                {/* Left — campaign image */}
                <div className="relative hidden md:block">
                    <Image
                        src={RegisterImg}
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
                            <Link
                                href="/login"
                                className="bg-white px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2a2a2a] transition hover:text-foreground"
                            >
                                Sign In
                            </Link>
                            <span className="bg-[#1f4a37] px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                                Register
                            </span>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center py-12">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-gold" />
                            <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                                Join The Circle
                            </p>
                        </div>

                        <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[1.05] text-foreground">
                            Create Your Account.
                        </h1>

                        <p className="mt-5 font-[family-name:var(--font-jost)] text-[0.95rem] font-light leading-[1.7] text-[#5a5a5a]">
                            Create your jewellery account, add your default
                            address, then verify the OTP sent to your email.
                        </p>

                        <form className="mt-10" onSubmit={handleSubmit}>
                            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="username"
                                        className={fieldLabel}
                                    >
                                        Username
                                    </label>
                                    <input
                                        id="username"
                                        type="text"
                                        required
                                        value={form.username}
                                        onChange={(event) =>
                                            updateField(
                                                "username",
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Your username"
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className={fieldLabel}
                                    >
                                        Email Address
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={form.email}
                                        onChange={(event) =>
                                            updateField(
                                                "email",
                                                event.target.value,
                                            )
                                        }
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className={fieldLabel}
                                    >
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        required
                                        value={form.firstName}
                                        onChange={(event) =>
                                            updateField(
                                                "firstName",
                                                event.target.value,
                                            )
                                        }
                                        placeholder="First name"
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className={fieldLabel}
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        required
                                        value={form.lastName}
                                        onChange={(event) =>
                                            updateField(
                                                "lastName",
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Last name"
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className={fieldLabel}
                                    >
                                        Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="password"
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
                                            placeholder="Your password"
                                            className={`${fieldInput} pr-10`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowPassword(
                                                    (value) => !value,
                                                )
                                            }
                                            aria-label={
                                                showPassword
                                                    ? "Hide password"
                                                    : "Show password"
                                            }
                                            className="absolute bottom-3 right-0 inline-flex items-center justify-center text-[#66707c] transition hover:text-foreground"
                                        >
                                            {showPassword ? (
                                                <EyeOff size={20} />
                                            ) : (
                                                <Eye size={20} />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="confirmPassword"
                                        className={fieldLabel}
                                    >
                                        Confirm Password
                                    </label>
                                    <div className="relative">
                                        <input
                                            id="confirmPassword"
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
                                            placeholder="Re-enter password"
                                            className={`${fieldInput} pr-10`}
                                        />
                                        <button
                                            type="button"
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    (value) => !value,
                                                )
                                            }
                                            aria-label={
                                                showConfirmPassword
                                                    ? "Hide confirm password"
                                                    : "Show confirm password"
                                            }
                                            className="absolute bottom-3 right-0 inline-flex items-center justify-center text-[#66707c] transition hover:text-foreground"
                                        >
                                            {showConfirmPassword ? (
                                                <EyeOff size={20} />
                                            ) : (
                                                <Eye size={20} />
                                            )}
                                        </button>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="countryCode"
                                        className={fieldLabel}
                                    >
                                        Country Code
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="countryCode"
                                            required
                                            value={form.countryCode}
                                            onChange={(event) =>
                                                updateField(
                                                    "countryCode",
                                                    event.target.value,
                                                )
                                            }
                                            className={fieldSelect}
                                        >
                                            <option value="">
                                                Select country code
                                            </option>
                                            {COUNTRY_CODE_OPTIONS.map(
                                                (option) => (
                                                    <option
                                                        key={option.label}
                                                        value={option.code}
                                                    >
                                                        {option.label}
                                                    </option>
                                                ),
                                            )}
                                        </select>
                                        <ChevronDown
                                            size={18}
                                            className="pointer-events-none absolute bottom-3.5 right-0 text-[#66707c]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="phoneNumber"
                                        className={fieldLabel}
                                    >
                                        Phone Number
                                    </label>
                                    <input
                                        id="phoneNumber"
                                        type="tel"
                                        required
                                        value={form.phoneNumber}
                                        onChange={(event) =>
                                            updateField(
                                                "phoneNumber",
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Phone number"
                                        className={fieldInput}
                                    />
                                </div>
                            </div>

                            <h2 className="mt-14 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-foreground">
                                Default Address
                            </h2>

                            <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="country"
                                        className={fieldLabel}
                                    >
                                        Country
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="country"
                                            required
                                            value={form.address.country}
                                            onChange={(event) => {
                                                updateAddressField(
                                                    "country",
                                                    event.target.value,
                                                );
                                                updateAddressField("state", "");
                                                updateAddressField("city", "");
                                            }}
                                            className={fieldSelect}
                                        >
                                            <option value="">
                                                Select country
                                            </option>
                                            {countryOptions.map((country) => (
                                                <option
                                                    key={country.code}
                                                    value={country.code}
                                                >
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown
                                            size={18}
                                            className="pointer-events-none absolute bottom-3.5 right-0 text-[#66707c]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="state"
                                        className={fieldLabel}
                                    >
                                        State
                                    </label>
                                    <div className="relative">
                                        <select
                                            id="state"
                                            required
                                            value={form.address.state}
                                            onChange={(event) => {
                                                const nextStateCode =
                                                    event.target.value;
                                                const nextStateName =
                                                    stateOptions.find(
                                                        (option) =>
                                                            option.code ===
                                                            nextStateCode,
                                                    )?.name ?? "";
                                                const cityChoices =
                                                    nextStateCode
                                                        ? getCityOptions(
                                                              form.address
                                                                  .country,
                                                              nextStateCode,
                                                          )
                                                        : [];

                                                updateAddressField(
                                                    "state",
                                                    nextStateCode,
                                                );
                                                updateAddressField(
                                                    "city",
                                                    cityChoices.length === 0
                                                        ? nextStateName
                                                        : "",
                                                );
                                            }}
                                            className={fieldSelect}
                                        >
                                            <option value="">
                                                Select state
                                            </option>
                                            {stateOptions.map((state) => (
                                                <option
                                                    key={state.code}
                                                    value={state.code}
                                                >
                                                    {state.name}
                                                </option>
                                            ))}
                                        </select>
                                        <ChevronDown
                                            size={18}
                                            className="pointer-events-none absolute bottom-3.5 right-0 text-[#66707c]"
                                        />
                                    </div>
                                </div>

                                <div className="sm:col-span-2">
                                    <label
                                        htmlFor="street"
                                        className={fieldLabel}
                                    >
                                        Street
                                    </label>
                                    <input
                                        id="street"
                                        type="text"
                                        required
                                        value={form.address.street}
                                        onChange={(event) =>
                                            updateAddressField(
                                                "street",
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Street address"
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="city"
                                        className={fieldLabel}
                                    >
                                        City
                                    </label>
                                    <div
                                        ref={cityFieldRef}
                                        className="relative"
                                    >
                                        <input
                                            id="city"
                                            type="text"
                                            value={form.address.city}
                                            onChange={(event) => {
                                                updateAddressField(
                                                    "city",
                                                    event.target.value,
                                                );

                                                if (cityOptions.length > 0) {
                                                    setIsCityListOpen(true);
                                                }
                                            }}
                                            onFocus={() => {
                                                if (cityOptions.length > 0) {
                                                    setIsCityListOpen(true);
                                                }
                                            }}
                                            placeholder={
                                                cityOptions.length > 0
                                                    ? "Select or type a city"
                                                    : "Select or type a city"
                                            }
                                            className={`${fieldInput} pr-8`}
                                        />
                                        {cityOptions.length > 0 && (
                                            <button
                                                type="button"
                                                aria-label="Toggle city options"
                                                onClick={() =>
                                                    setIsCityListOpen(
                                                        (previous) => !previous,
                                                    )
                                                }
                                                className="absolute bottom-3 right-0 inline-flex items-center justify-center text-[#66707c] transition hover:text-foreground"
                                            >
                                                <ChevronDown
                                                    size={18}
                                                    className={`transition-transform ${
                                                        isCityListOpen
                                                            ? "rotate-180"
                                                            : ""
                                                    }`}
                                                />
                                            </button>
                                        )}
                                        {isCityListOpen &&
                                            filteredCityOptions.length > 0 && (
                                                <ul className="absolute left-0 right-0 top-full z-20 mt-1 max-h-56 overflow-y-auto border border-[#d8c9a4] bg-white shadow-lg">
                                                    {filteredCityOptions.map(
                                                        (city) => (
                                                            <li key={city.name}>
                                                                <button
                                                                    type="button"
                                                                    onClick={() => {
                                                                        updateAddressField(
                                                                            "city",
                                                                            city.name,
                                                                        );
                                                                        setIsCityListOpen(
                                                                            false,
                                                                        );
                                                                    }}
                                                                    className={`block w-full px-4 py-2 text-left font-[family-name:var(--font-jost)] text-sm transition hover:bg-[#f5f1e6] ${
                                                                        form
                                                                            .address
                                                                            .city ===
                                                                        city.name
                                                                            ? "bg-[#f5f1e6] font-semibold text-foreground"
                                                                            : "text-[#1f242b]"
                                                                    }`}
                                                                >
                                                                    {city.name}
                                                                </button>
                                                            </li>
                                                        ),
                                                    )}
                                                </ul>
                                            )}
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="postalCode"
                                        className={fieldLabel}
                                    >
                                        Postal Code
                                    </label>
                                    <input
                                        id="postalCode"
                                        type="text"
                                        required
                                        value={form.address.postalCode}
                                        onChange={(event) =>
                                            updateAddressField(
                                                "postalCode",
                                                event.target.value,
                                            )
                                        }
                                        placeholder="Postal code"
                                        className={fieldInput}
                                    />
                                </div>
                            </div>

                            {errorMessage && (
                                <p className="mt-7 border border-red-200 bg-red-50 px-4 py-3 font-[family-name:var(--font-jost)] text-sm font-medium text-red-700">
                                    {errorMessage}
                                </p>
                            )}

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-10 w-full bg-[#1f4a37] py-4 font-[family-name:var(--font-jost)] text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-[#173a2b] disabled:opacity-60"
                            >
                                {isSubmitting
                                    ? "Creating Account..."
                                    : "Register"}
                            </button>
                        </form>

                        <p className="mt-7 text-center font-[family-name:var(--font-jost)] text-base font-medium text-[#1f242b]">
                            Already have an account?{" "}
                            <Link
                                href="/login"
                                className="font-bold text-foreground underline underline-offset-4"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>

                    {/* Footer */}
                    <div>
                        <div className="h-px w-full bg-black/10" />
                        <div className="mt-5 flex flex-col items-center gap-3 font-[family-name:var(--font-jost)] text-xs text-[#9a9a9a] sm:flex-row sm:justify-between">
                            <span>© 2025 Aurelia Royale</span>
                            <span className="flex gap-6">
                                <span>Privacy</span>
                                <span>Terms</span>
                                <span>Support</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
