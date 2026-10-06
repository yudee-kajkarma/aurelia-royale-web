export type RedirectRule = {
    source: string;
    destination: string;
    permanent: boolean;
};

/**
 * Locales that carry a URL prefix — every locale except the default.
 *
 * Hardcoded rather than derived from `routing`, because next.config.ts is
 * evaluated before the app graph exists. The test in localeRedirects.test.ts
 * asserts this stays in sync with routing.locales.
 */
export const PREFIXED_LOCALES = ["fr", "it", "de", "nl", "es"] as const;

/**
 * Expand each redirect into its locale variants.
 *
 * Without this, /de/blog/<old-slug>/ matches no rule and 404s, because the
 * original sources were written for unprefixed English URLs only. 16 rules in,
 * 96 out.
 */
export function withLocaleVariants(rules: RedirectRule[]): RedirectRule[] {
    return rules.flatMap((rule) => [
        rule,
        ...PREFIXED_LOCALES.map((locale) => ({
            source: `/${locale}${rule.source}`,
            destination: `/${locale}${rule.destination}`,
            permanent: rule.permanent,
        })),
    ]);
}
