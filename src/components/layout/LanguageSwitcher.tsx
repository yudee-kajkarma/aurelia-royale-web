"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { LOCALE_LABELS } from "@/i18n/locale-labels";

/**
 * Switches locale while staying on the same page. `usePathname` from our
 * navigation helpers returns the path WITHOUT the locale prefix, so passing it
 * straight back to `router.replace` with a new locale is correct.
 */
export function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    return (
        <select
            aria-label="Language"
            value={locale}
            disabled={isPending}
            onChange={(event) => {
                const next = event.target.value as Locale;
                startTransition(() => {
                    router.replace(pathname, { locale: next });
                });
            }}
            className="bg-transparent font-jost text-xs uppercase tracking-[0.2em] text-white outline-none"
        >
            {routing.locales.map((value) => (
                <option key={value} value={value}>
                    {LOCALE_LABELS[value]}
                </option>
            ))}
        </select>
    );
}
