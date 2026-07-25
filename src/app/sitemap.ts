import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { getAllProducts } from "@/services/products/product.service";

// Trailing slash to match next.config `trailingSlash: true`.
function url(path: string) {
    const clean = path.replace(/^\/+|\/+$/g, "");
    return clean ? `${SITE_URL}/${clean}/` : `${SITE_URL}/`;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date();

    const staticEntries: MetadataRoute.Sitemap = [
        { url: url("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
        { url: url("/shop"), lastModified: now, changeFrequency: "daily", priority: 0.9 },
        { url: url("/about"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
        { url: url("/contact"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    ];

    let productEntries: MetadataRoute.Sitemap = [];
    try {
        const products = await getAllProducts();
        productEntries = products.map((product) => ({
            url: url(`/shop-details/${product.slug}`),
            lastModified: now,
            changeFrequency: "weekly",
            priority: 0.8,
        }));
    } catch {
        // If the product API is unreachable, still emit a valid sitemap with the
        // static pages rather than failing the whole route.
        productEntries = [];
    }

    return [...staticEntries, ...productEntries];
}
