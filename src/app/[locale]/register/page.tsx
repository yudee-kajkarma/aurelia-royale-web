"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ChevronDown, Eye, EyeOff } from "lucide-react";
import { Link, useRouter } from "@/i18n/navigation";
import RegisterImg from "@/assets/Register-img.png";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { authService } from "@/services/auth/auth.service";
import type { RegisterRequest } from "@/services/auth/auth.types";
import {
    getCityOptions,
    getCountryOptions,
    getStateOptions,
} from "@/utils/location";
import { notifyError } from "@/utils/notify";

// Labels are translated at render time via RegisterPage.countryCodeOptions.<slug>.
// `code` is the dial code submitted to the backend as `countryCode` — never translate it.
const COUNTRY_CODE_OPTIONS: ReadonlyArray<{ code: string; slug: string }> = [
    { code: "+1", slug: "unitedStates" },
    { code: "+1", slug: "canada" },
    { code: "+52", slug: "mexico" },
    { code: "+54", slug: "argentina" },
    { code: "+591", slug: "bolivia" },
    { code: "+55", slug: "brazil" },
    { code: "+56", slug: "chile" },
    { code: "+57", slug: "colombia" },
    { code: "+506", slug: "costaRica" },
    { code: "+53", slug: "cuba" },
    { code: "+1", slug: "dominicanRepublic" },
    { code: "+593", slug: "ecuador" },
    { code: "+503", slug: "elSalvador" },
    { code: "+502", slug: "guatemala" },
    { code: "+592", slug: "guyana" },
    { code: "+509", slug: "haiti" },
    { code: "+504", slug: "honduras" },
    { code: "+1", slug: "jamaica" },
    { code: "+505", slug: "nicaragua" },
    { code: "+507", slug: "panama" },
    { code: "+595", slug: "paraguay" },
    { code: "+51", slug: "peru" },
    { code: "+1", slug: "puertoRico" },
    { code: "+597", slug: "suriname" },
    { code: "+1", slug: "trinidadAndTobago" },
    { code: "+598", slug: "uruguay" },
    { code: "+58", slug: "venezuela" },
    { code: "+501", slug: "belize" },
    { code: "+43", slug: "austria" },
    { code: "+32", slug: "belgium" },
    { code: "+359", slug: "bulgaria" },
    { code: "+385", slug: "croatia" },
    { code: "+357", slug: "cyprus" },
    { code: "+420", slug: "czechRepublic" },
    { code: "+45", slug: "denmark" },
    { code: "+372", slug: "estonia" },
    { code: "+358", slug: "finland" },
    { code: "+33", slug: "france" },
    { code: "+49", slug: "germany" },
    { code: "+30", slug: "greece" },
    { code: "+36", slug: "hungary" },
    { code: "+354", slug: "iceland" },
    { code: "+353", slug: "ireland" },
    { code: "+39", slug: "italy" },
    { code: "+371", slug: "latvia" },
    { code: "+423", slug: "liechtenstein" },
    { code: "+370", slug: "lithuania" },
    { code: "+352", slug: "luxembourg" },
    { code: "+356", slug: "malta" },
    { code: "+377", slug: "monaco" },
    { code: "+31", slug: "netherlands" },
    { code: "+47", slug: "norway" },
    { code: "+48", slug: "poland" },
    { code: "+351", slug: "portugal" },
    { code: "+40", slug: "romania" },
    { code: "+378", slug: "sanMarino" },
    { code: "+421", slug: "slovakia" },
    { code: "+386", slug: "slovenia" },
    { code: "+34", slug: "spain" },
    { code: "+46", slug: "sweden" },
    { code: "+41", slug: "switzerland" },
    { code: "+44", slug: "unitedKingdom" },
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
    const t = useTranslations("RegisterPage");
    const tValidation = useTranslations("Validation");
    const router = useRouter();
    const [form, setForm] = useState<RegisterRequest>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
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
            toast.error(tValidation("passwordsDoNotMatch"));
            return;
        }

        setIsSubmitting(true);

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
                        src={RegisterImg}
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
                            <Link
                                href="/login"
                                className="bg-white px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-[#2a2a2a] transition hover:text-foreground"
                            >
                                {t("signInTab")}
                            </Link>
                            <span className="bg-[#1f4a37] px-5 py-2.5 font-[family-name:var(--font-jost)] text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                                {t("registerTab")}
                            </span>
                        </div>
                    </div>

                    {/* Main */}
                    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center py-12">
                        <div className="flex items-center gap-3">
                            <span className="h-px w-10 bg-gold" />
                            <p className="font-[family-name:var(--font-jost)] text-xs font-semibold uppercase tracking-[0.3em] text-gold">
                                {t("eyebrow")}
                            </p>
                        </div>

                        <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-6xl font-medium leading-[1.05] text-foreground">
                            {t("title")}
                        </h1>

                        <p className="mt-5 font-[family-name:var(--font-jost)] text-[0.95rem] font-light leading-[1.7] text-[#5a5a5a]">
                            {t("subtitle")}
                        </p>

                        <form className="mt-10" onSubmit={handleSubmit}>
                            <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="username"
                                        className={fieldLabel}
                                    >
                                        {t("usernameLabel")}
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
                                        placeholder={t("usernamePlaceholder")}
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className={fieldLabel}
                                    >
                                        {t("emailLabel")}
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
                                        placeholder={t("emailPlaceholder")}
                                        autoComplete="email"
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="firstName"
                                        className={fieldLabel}
                                    >
                                        {t("firstNameLabel")}
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
                                        placeholder={t("firstNamePlaceholder")}
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="lastName"
                                        className={fieldLabel}
                                    >
                                        {t("lastNameLabel")}
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
                                        placeholder={t("lastNamePlaceholder")}
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className={fieldLabel}
                                    >
                                        {t("passwordLabel")}
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
                                            placeholder={t(
                                                "passwordPlaceholder",
                                            )}
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
                                                    ? t("hidePassword")
                                                    : t("showPassword")
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
                                        {t("confirmPasswordLabel")}
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
                                            placeholder={t(
                                                "confirmPasswordPlaceholder",
                                            )}
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
                                                    ? t(
                                                          "hideConfirmPassword",
                                                      )
                                                    : t(
                                                          "showConfirmPassword",
                                                      )
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
                                        {t("countryCodeLabel")}
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
                                                {t("selectCountryCode")}
                                            </option>
                                            {COUNTRY_CODE_OPTIONS.map(
                                                (option) => (
                                                    <option
                                                        key={option.slug}
                                                        value={option.code}
                                                    >
                                                        {t(
                                                            `countryCodeOptions.${option.slug}`,
                                                        )}
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
                                        {t("phoneNumberLabel")}
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
                                        placeholder={t(
                                            "phoneNumberPlaceholder",
                                        )}
                                        className={fieldInput}
                                    />
                                </div>
                            </div>

                            <h2 className="mt-14 font-[family-name:var(--font-cormorant)] text-3xl font-medium text-foreground">
                                {t("addressHeading")}
                            </h2>

                            <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
                                <div>
                                    <label
                                        htmlFor="country"
                                        className={fieldLabel}
                                    >
                                        {t("countryLabel")}
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
                                                {t("selectCountry")}
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
                                        {t("stateLabel")}
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
                                                {t("selectState")}
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
                                        {t("streetLabel")}
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
                                        placeholder={t("streetPlaceholder")}
                                        className={fieldInput}
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="city"
                                        className={fieldLabel}
                                    >
                                        {t("cityLabel")}
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
                                            placeholder={t("cityPlaceholder")}
                                            className={`${fieldInput} pr-8`}
                                        />
                                        {cityOptions.length > 0 && (
                                            <button
                                                type="button"
                                                aria-label={t(
                                                    "toggleCityOptions",
                                                )}
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
                                        {t("postalCodeLabel")}
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
                                        placeholder={t(
                                            "postalCodePlaceholder",
                                        )}
                                        className={fieldInput}
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-10 w-full bg-[#1f4a37] py-4 font-[family-name:var(--font-jost)] text-sm font-semibold uppercase tracking-[0.2em] text-gold transition hover:bg-[#173a2b] disabled:opacity-60"
                            >
                                {isSubmitting
                                    ? t("submitting")
                                    : t("submit")}
                            </button>
                        </form>

                        <p className="mt-7 text-center font-[family-name:var(--font-jost)] text-base font-medium text-[#1f242b]">
                            {t("haveAccountText")}{" "}
                            <Link
                                href="/login"
                                className="font-bold text-foreground underline underline-offset-4"
                            >
                                {t("signInLink")}
                            </Link>
                        </p>
                    </div>

                    {/* Footer */}
                    <div>
                        <div className="h-px w-full bg-black/10" />
                        <div className="mt-5 flex flex-col items-center gap-3 font-[family-name:var(--font-jost)] text-xs text-[#9a9a9a] sm:flex-row sm:justify-between">
                            <span>{t("copyright")}</span>
                            <span className="flex gap-6">
                                <span>{t("privacy")}</span>
                                <span>{t("terms")}</span>
                                <span>{t("support")}</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
