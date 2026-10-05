import { routing } from "@/i18n/routing";

/** True for anything the locale-aware Link must not touch. */
export function isExternalHref(href: string): boolean {
    return /^[a-z][a-z0-9+.-]*:/i.test(href);
}

/**
 * Strip an accidental locale prefix from a content href.
 *
 * Internal hrefs in content are written WITHOUT a locale prefix; the
 * locale-aware Link adds it. If an author writes "/es/shop/" anyway, the Link
 * would produce "/es/es/shop/". Only an exact locale segment is removed, so
 * "/italian-cut/" and "/english/" are untouched.
 */
export function normalizeContentHref(href: string): string {
    if (isExternalHref(href) || !href.startsWith("/")) return href;

    const match = href.match(/^\/([^/?#]+)(\/.*|\?.*|#.*)?$/);
    if (!match) return href;

    const [, first, rest] = match;
    if ((routing.locales as readonly string[]).includes(first)) {
        return rest && rest.startsWith("/") ? rest : `/${rest ?? ""}`.replace(/^\/\//, "/");
    }
    return href;
}
