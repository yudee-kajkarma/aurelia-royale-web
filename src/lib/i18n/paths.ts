import { SITE_URL } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";

/** Locale-prefixed path with the trailing slash `trailingSlash: true` requires. */
export function localePath(locale: Locale, path: string): string {
    const clean = path.replace(/^\/+|\/+$/g, "");
    const withSlash = clean === "" ? "/" : `/${clean}/`;
    return locale === routing.defaultLocale ? withSlash : `/${locale}${withSlash}`;
}

export const localeUrl = (locale: Locale, path: string) =>
    `${SITE_URL}${localePath(locale, path)}`;

/**
 * The hreflang map for `alternates.languages`. Spec section 5 requires this on
 * every page, so every page's generateMetadata calls it with its own path.
 */
export function localeAlternates(path: string): Record<Locale, string> {
    return Object.fromEntries(
        routing.locales.map((locale) => [locale, localeUrl(locale, path)]),
    ) as Record<Locale, string>;
}
