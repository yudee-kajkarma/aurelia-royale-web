import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { getAllProducts } from "@/services/products/product.service";
import { BLOGS_DATA } from "@/data/blogs.data";

// Trailing slash to match next.config `trailingSlash: true`.
function url(path: string) {
    const clean = path.replace(/^\/+|\/+$/g, "");
    return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}


function parseBlogDate(dateStr: string): Date | undefined {
    if (!dateStr) return undefined;
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? undefined : parsed;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    // Static pages use fixed dates that reflect when those pages last had
    // meaningful content changes — not the time the sitemap is generated.
    const staticEntries: MetadataRoute.Sitemap = [
        { url: url("/"), lastModified: new Date("2026-07-25"), changeFrequency: "weekly", priority: 1 },
        { url: url("/shop"), lastModified: new Date("2026-07-25"), changeFrequency: "daily", priority: 0.9 },
        { url: url("/about"), lastModified: new Date("2026-07-25"), changeFrequency: "monthly", priority: 0.6 },
        { url: url("/contact"), lastModified: new Date("2026-07-25"), changeFrequency: "monthly", priority: 0.6 },
    ];

    // Blog index — as fresh as the most recently published article.
    const latestBlogDate = BLOGS_DATA.reduce<Date | undefined>((latest, post) => {
        const d = parseBlogDate(post.date);
        if (!d) return latest;
        return !latest || d > latest ? d : latest;
    }, undefined);

    const blogIndexEntry: MetadataRoute.Sitemap = [
        {
            url: url("/blog"),
            lastModified: latestBlogDate ?? new Date("2026-07-25"),
            changeFrequency: "weekly",
            priority: 0.8,
        },
    ];

    // Individual blog articles — one entry per published post.
   
    const blogEntries: MetadataRoute.Sitemap = BLOGS_DATA.map((post) => ({
        url: url(`/blog/${post.slug}`),
        lastModified: parseBlogDate(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.7,
    }));

    // Product pages — fetched from the live API so the sitemap always reflects
    // the current catalogue without requiring a code change.
    let productEntries: MetadataRoute.Sitemap = [];
    try {
        const products = await getAllProducts();
        productEntries = products.map((product) => ({
            url: url(`/shop-details/${product.slug}`),
            lastModified: new Date("2026-07-25"),
            changeFrequency: "weekly" as const,
            priority: 0.8,
        }));
    } catch {
        // If the product API is unreachable at build time, emit a valid sitemap
        // covering all static and blog pages rather than failing the whole route.
        productEntries = [];
    }

    return [...staticEntries, ...blogIndexEntry, ...blogEntries, ...productEntries];
}
