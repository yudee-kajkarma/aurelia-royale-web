import { describe, expect, it } from "vitest";
import { BLOGS_DATA } from "@/data/blogs.data";
import { BLOG_SLUGS } from "@/lib/blogs/registry";

describe("BLOGS_DATA", () => {
    it("has one card per registered blog and no orphans", () => {
        expect(BLOGS_DATA.map((p) => p.slug).sort()).toEqual([...BLOG_SLUGS].sort());
    });

    it("has no duplicate slugs", () => {
        const slugs = BLOGS_DATA.map((p) => p.slug);
        expect(new Set(slugs).size).toBe(slugs.length);
    });

    it("no longer carries translatable copy, which lives in messages", () => {
        for (const post of BLOGS_DATA) {
            expect(post).not.toHaveProperty("title");
            expect(post).not.toHaveProperty("excerpt");
            expect(post).not.toHaveProperty("author");
        }
    });

    it("keeps an image and a parseable date for every card", () => {
        for (const post of BLOGS_DATA) {
            expect(post.image).toMatch(/^\//);
            expect(Number.isNaN(new Date(post.date).getTime())).toBe(false);
        }
    });
});
