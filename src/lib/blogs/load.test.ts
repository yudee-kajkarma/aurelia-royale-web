import { describe, expect, it } from "vitest";
import { loadBlogContent, resolveBlogContent } from "@/lib/blogs/load";
import { BLOG_SLUGS } from "@/lib/blogs/registry";
import type { BlogContent } from "@/lib/blogs/content";

const english = { title: "English title" } as BlogContent;
const dutch = { title: "Nederlandse titel" } as BlogContent;

describe("resolveBlogContent", () => {
    it("prefers the localised file when it exists", () => {
        expect(resolveBlogContent(dutch, english, "nl")).toBe(dutch);
    });

    // Review Focus 2: an interrupted translation run must degrade to English.
    it("falls back to English when the localised file is missing", () => {
        expect(resolveBlogContent(null, english, "nl")).toBe(english);
    });

    it("returns null when English is missing too", () => {
        expect(resolveBlogContent(null, null, "nl")).toBeNull();
    });

    it("never substitutes anything for a missing English file in English", () => {
        expect(resolveBlogContent(null, english, "en")).toBeNull();
    });
});

describe("loadBlogContent", () => {
    it("loads English content for a known slug", async () => {
        const content = await loadBlogContent(BLOG_SLUGS[0], "en");
        expect(content?.title).toBeTruthy();
        expect(Array.isArray(content?.sections)).toBe(true);
    });

    it("returns null for an unknown slug", async () => {
        expect(await loadBlogContent("no-such-blog", "en")).toBeNull();
    });

    it("never throws for any registered slug in any locale", async () => {
        for (const locale of ["en", "fr", "it", "de", "nl", "es"] as const) {
            await expect(
                loadBlogContent(BLOG_SLUGS[0], locale),
            ).resolves.not.toBeNull();
        }
    });
});
