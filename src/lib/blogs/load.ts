import fs from "node:fs/promises";
import path from "node:path";
import { routing, type Locale } from "@/i18n/routing";
import { BLOG_SLUGS } from "./registry";
import type { BlogContent } from "./content";

const CONTENT_ROOT = path.join(process.cwd(), "content/blogs");

async function readContentFile(slug: string, locale: Locale) {
    try {
        const raw = await fs.readFile(
            path.join(CONTENT_ROOT, slug, `${locale}.json`),
            "utf8",
        );
        return JSON.parse(raw) as BlogContent;
    } catch {
        return null;
    }
}

/**
 * Decide which content to serve, given what was found on disk.
 *
 * Pure so it can be tested without depending on which locale files happen to
 * exist — a filesystem-based test of this rule inverts as soon as the real
 * translations land.
 */
export function resolveBlogContent(
    localized: BlogContent | null,
    fallback: BlogContent | null,
    locale: Locale,
): BlogContent | null {
    if (localized) return localized;
    if (locale === routing.defaultLocale) return null;
    return fallback;
}

/**
 * Load one blog's content for one locale.
 *
 * Falls back to English when a locale file is absent — an interrupted or
 * partial translation run must degrade to readable English, never to a 500.
 * Returns null only when the slug is unknown or English itself is missing,
 * which the route turns into a 404.
 */
export async function loadBlogContent(
    slug: string,
    locale: Locale,
): Promise<BlogContent | null> {
    if (!(BLOG_SLUGS as readonly string[]).includes(slug)) return null;

    const localized = await readContentFile(slug, locale);
    const fallback =
        localized || locale === routing.defaultLocale
            ? null
            : await readContentFile(slug, routing.defaultLocale);

    if (!localized && fallback) {
        console.warn(
            `[i18n] missing blog content for ${slug}/${locale}.json — served English`,
        );
    }

    return resolveBlogContent(localized, fallback, locale);
}
