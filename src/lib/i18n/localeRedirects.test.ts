import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import { PREFIXED_LOCALES, withLocaleVariants } from "@/lib/i18n/localeRedirects";
import { BLOG_REDIRECTS, REDIRECTED_AWAY_SLUGS } from "@/lib/i18n/blogRedirects";
import { BLOG_SLUGS } from "@/lib/blogs/registry";

describe("PREFIXED_LOCALES", () => {
    it("is every locale except the unprefixed default", () => {
        expect([...PREFIXED_LOCALES].sort()).toEqual(
            routing.locales.filter((l) => l !== routing.defaultLocale).sort(),
        );
    });
});

describe("withLocaleVariants", () => {
    const rules = [
        {
            source: "/blog/old-slug/",
            destination: "/blog/new-slug/",
            permanent: true,
        },
    ];
    const out = withLocaleVariants(rules);

    it("keeps the unprefixed English rule", () => {
        expect(out).toContainEqual({
            source: "/blog/old-slug/",
            destination: "/blog/new-slug/",
            permanent: true,
        });
    });

    // Review Focus 4.
    it("adds a variant per prefixed locale that keeps the locale", () => {
        expect(out).toContainEqual({
            source: "/de/blog/old-slug/",
            destination: "/de/blog/new-slug/",
            permanent: true,
        });
        expect(out).toContainEqual({
            source: "/es/blog/old-slug/",
            destination: "/es/blog/new-slug/",
            permanent: true,
        });
    });

    it("never redirects a prefixed source to an unprefixed destination", () => {
        for (const rule of out) {
            const sourceLocale = rule.source.split("/")[1];
            if ((PREFIXED_LOCALES as readonly string[]).includes(sourceLocale)) {
                expect(rule.destination.startsWith(`/${sourceLocale}/`)).toBe(true);
            }
        }
    });

    it("emits six rules per input rule", () => {
        expect(out).toHaveLength(rules.length * 6);
    });

    it("expands the real redirect table to 96 rules", () => {
        expect(BLOG_REDIRECTS).toHaveLength(16);
        expect(withLocaleVariants(BLOG_REDIRECTS)).toHaveLength(96);
    });

    it("produces no duplicate sources", () => {
        const sources = withLocaleVariants(BLOG_REDIRECTS).map((r) => r.source);
        expect(new Set(sources).size).toBe(sources.length);
    });
});

describe("redirected-away slugs", () => {
    it("matches the extractor's exclusion list", async () => {
        const { EXCLUDED_SLUGS } = await import(
            "../../../scripts/i18n/lib/excluded-slugs.mjs"
        );
        expect([...REDIRECTED_AWAY_SLUGS].sort()).toEqual([...EXCLUDED_SLUGS].sort());
    });

    it("never serves a slug that redirects away", () => {
        for (const slug of REDIRECTED_AWAY_SLUGS) {
            expect(BLOG_SLUGS).not.toContain(slug);
        }
    });

    it("derives the list from the redirect table rather than restating it", () => {
        expect(REDIRECTED_AWAY_SLUGS).toContain("advantages-of-lab-grown-diamonds");
    });
});
