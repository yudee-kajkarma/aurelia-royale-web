import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing, type Locale } from "./routing";

/**
 * Narrow an unvalidated route param to a supported locale, or 404.
 *
 * Without this, an unknown locale renders the whole page tree with every
 * message resolving to "[MISSING: …]" — a soft 200 that crawlers index.
 */
export function assertLocale(value: string): Locale {
    if (!hasLocale(routing.locales, value)) {
        notFound();
    }
    return value as Locale;
}
