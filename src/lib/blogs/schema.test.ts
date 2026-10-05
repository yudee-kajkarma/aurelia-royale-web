import { describe, expect, it } from "vitest";
import { buildBlogSchema, collectFaqs } from "@/lib/blogs/schema";
import type { BlogContent } from "@/lib/blogs/content";

const content: BlogContent = {
    metaTitle: "Test Meta Title",
    metaDescription: "Test meta description.",
    category: "labGrownDiamondEducation",
    title: "What Are the 4Cs?",
    subtitle: "Cut, Colour & Carat Explained",
    datePublished: "2026-07-15",
    dateModified: "2026-09-10",
    sections: [
        {
            content: [
                {
                    type: "image",
                    src: "/images/blog/test/hero.jpg",
                    alt: "A diamond",
                    title: "Hero",
                },
                { type: "paragraph", text: "Body." },
            ],
        },
        {
            heading: "FAQs",
            content: [
                {
                    type: "faq",
                    title: "Frequently Asked Questions",
                    items: [
                        { question: "Q1?", answer: "A1." },
                        { question: "Q2?", answer: "A2." },
                    ],
                },
            ],
        },
    ],
};

describe("collectFaqs", () => {
    it("finds FAQ items inside article sections", () => {
        expect(collectFaqs(content.sections)).toEqual([
            { question: "Q1?", answer: "A1." },
            { question: "Q2?", answer: "A2." },
        ]);
    });

    it("returns an empty array when a blog has no FAQ block", () => {
        expect(collectFaqs([{ content: [{ type: "paragraph", text: "x" }] }])).toEqual([]);
    });
});

describe("buildBlogSchema", () => {
    const graphOf = (locale: "en" | "es") =>
        (buildBlogSchema(content, "test-slug", locale) as { "@graph": Array<Record<string, unknown>> })[
            "@graph"
        ];

    const nodeOf = (locale: "en" | "es", type: string) =>
        graphOf(locale).find((n) => n["@type"] === type)!;

    it("emits the seven expected graph nodes", () => {
        expect(graphOf("en").map((n) => n["@type"])).toEqual([
            "Organization",
            "WebSite",
            "ImageObject",
            "WebPage",
            "BlogPosting",
            "BreadcrumbList",
            "FAQPage",
        ]);
    });

    it("builds the FAQPage from the article's own FAQ block", () => {
        const faq = nodeOf("en", "FAQPage") as {
            mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
        };
        expect(faq.mainEntity).toHaveLength(2);
        expect(faq.mainEntity[0].name).toBe("Q1?");
        expect(faq.mainEntity[0].acceptedAnswer.text).toBe("A1.");
    });

    it("omits FAQPage entirely when the blog has no FAQs", () => {
        const noFaq = { ...content, sections: [content.sections[0]] };
        const types = (
            buildBlogSchema(noFaq, "s", "en") as { "@graph": Array<{ "@type": string }> }
        )["@graph"].map((n) => n["@type"]);
        expect(types).not.toContain("FAQPage");
    });

    it("uses unprefixed URLs for English", () => {
        expect(nodeOf("en", "WebPage").url).toBe(
            "https://www.aureliaroyale.com/blog/test-slug/",
        );
    });

    it("uses locale-prefixed URLs for other locales", () => {
        expect(nodeOf("es", "WebPage").url).toBe(
            "https://www.aureliaroyale.com/es/blog/test-slug/",
        );
    });

    it("carries the article dates through to BlogPosting", () => {
        const post = nodeOf("en", "BlogPosting");
        expect(post.datePublished).toBe("2026-07-15");
        expect(post.dateModified).toBe("2026-09-10");
        expect(post.headline).toBe("What Are the 4Cs?");
    });

    it("points the breadcrumb at the locale's own blog index", () => {
        const crumbs = nodeOf("es", "BreadcrumbList") as {
            itemListElement: Array<{ item: string }>;
        };
        expect(crumbs.itemListElement[1].item).toBe(
            "https://www.aureliaroyale.com/es/blog/",
        );
    });
});
