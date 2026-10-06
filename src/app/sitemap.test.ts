import { describe, expect, it, vi } from "vitest";

vi.mock("@/services/products/product.service", () => ({
    getAllProducts: async () => [],
}));

const { default: sitemap } = await import("@/app/sitemap");
const entries = await sitemap();

describe("sitemap", () => {
    it("lists every blog article in every locale", () => {
        const urls = new Set(entries.map((e) => e.url));
        expect(urls.has("https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/")).toBe(true);
        expect(urls.has("https://www.aureliaroyale.com/es/blog/4cs-of-lab-grown-diamonds/")).toBe(true);
        expect(urls.has("https://www.aureliaroyale.com/nl/blog/4cs-of-lab-grown-diamonds/")).toBe(true);
    });

    it("emits 618 non-product entries: (4 static + 1 index + 98 blogs) x 6", () => {
        expect(entries).toHaveLength(618);
    });

    it("gives every entry hreflang alternates for all six locales", () => {
        for (const entry of entries) {
            expect(Object.keys(entry.alternates?.languages ?? {}).sort()).toEqual(
                ["de", "en", "es", "fr", "it", "nl"],
            );
        }
    });

    it("ends every URL with a slash, matching trailingSlash: true", () => {
        for (const entry of entries) {
            expect(entry.url.endsWith("/")).toBe(true);
        }
    });

    it("has no duplicate URLs", () => {
        const urls = entries.map((e) => e.url);
        expect(new Set(urls).size).toBe(urls.length);
    });
});
