import type { MetadataRoute } from "next";
import { getAllProducts } from "@/services/products/product.service";
import { BLOGS_DATA } from "@/data/blogs.data";
import { routing } from "@/i18n/routing";
import { localeAlternates, localeUrl as url } from "@/lib/i18n/paths";

/** hreflang block: the same page in all six locales. */
const languages = localeAlternates;

function parseBlogDate(dateStr: string): Date | undefined {
    if (!dateStr) return undefined;
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? undefined : parsed;
}

// Static pages use fixed dates that reflect when those pages last had
// meaningful content changes — not the time the sitemap is generated.
const STATIC_PAGES = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1, lastModified: new Date("2026-07-25") },
    { path: "/shop", changeFrequency: "daily" as const, priority: 0.9, lastModified: new Date("2026-07-25") },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.6, lastModified: new Date("2026-07-25") },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6, lastModified: new Date("2026-07-25") },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Blog index — as fresh as the most recently published article.
    const latestBlogDate = BLOGS_DATA.reduce<Date | undefined>((latest, post) => {
        const d = parseBlogDate(post.date);
        if (!d) return latest;
        return !latest || d > latest ? d : latest;
    }, undefined);

    const entries: MetadataRoute.Sitemap = [];

    for (const locale of routing.locales) {
        for (const page of STATIC_PAGES) {
            entries.push({
                url: url(locale, page.path),
                lastModified: page.lastModified,
                changeFrequency: page.changeFrequency,
                priority: page.priority,
                alternates: { languages: languages(page.path) },
            });
        }

        entries.push({
            url: url(locale, "/blog"),
            lastModified: latestBlogDate ?? new Date("2026-07-25"),
            changeFrequency: "weekly",
            priority: 0.8,
            alternates: { languages: languages("/blog") },
        });

        for (const post of BLOGS_DATA) {
            const path = `/blog/${post.slug}`;
            entries.push({
                url: url(locale, path),
                lastModified: parseBlogDate(post.date),
                changeFrequency: "monthly",
                priority: 0.7,
                alternates: { languages: languages(path) },
            });
        }
    }

    // Product pages: English only, since product content is not localised.
    try {
        const products = await getAllProducts();
        for (const product of products) {
            const path = `/shop-details/${product.slug}`;
            entries.push({
                url: url("en", path),
                lastModified: new Date("2026-07-25"),
                changeFrequency: "weekly",
                priority: 0.8,
                alternates: { languages: languages(path) },
            });
        }
    } catch {
        // A sitemap covering every static and blog page beats failing the route.
    }

    return entries;
}
