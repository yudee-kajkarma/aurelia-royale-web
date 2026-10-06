import { describe, expect, it } from "vitest";
import { collectAll, collectLeaves, isProse, setAtPath } from "./leaves.mjs";

const blog = {
    metaTitle: "Lab-Grown Diamond 4Cs",
    category: "labGrownDiamondEducation",
    datePublished: "2026-07-15",
    sections: [
        {
            heading: "How They Compare",
            content: [
                {
                    type: "image",
                    src: "/images/blog/x/1.jpg",
                    alt: "A diamond",
                    width: 1600,
                    height: 900,
                    priority: true,
                },
                {
                    type: "callout",
                    title: "Note",
                    text: "Be careful.",
                    theme: "cream",
                },
                {
                    type: "cta-banner",
                    title: "Find Your Balance",
                    subtitle: "Explore our jewellery.",
                    shopHref: "/shop/",
                    contactHref: "/contact/",
                },
                {
                    type: "paragraph",
                    parts: [
                        { text: "Read our ", bold: false },
                        { text: "guide", href: "/blog/guide/" },
                    ],
                },
            ],
        },
    ],
};

const translatableValues = collectLeaves(blog).map((l) => l.value);
const heldBack = collectAll(blog)
    .filter((l) => !l.translatable)
    .map((l) => l.value);

describe("protected keys", () => {
    // Review Focus 1.
    it("never sends a callout theme to the model", () => {
        expect(translatableValues).not.toContain("cream");
        expect(heldBack).toContain("cream");
    });

    it("never sends cta-banner hrefs to the model", () => {
        expect(translatableValues).not.toContain("/shop/");
        expect(translatableValues).not.toContain("/contact/");
    });

    it("never sends block types, image sources or inline hrefs", () => {
        expect(translatableValues).not.toContain("image");
        expect(translatableValues).not.toContain("callout");
        expect(translatableValues).not.toContain("/images/blog/x/1.jpg");
        expect(translatableValues).not.toContain("/blog/guide/");
    });

    it("never sends a category key or an ISO date", () => {
        expect(translatableValues).not.toContain("labGrownDiamondEducation");
        expect(translatableValues).not.toContain("2026-07-15");
    });

    it("does send every piece of real prose", () => {
        expect(translatableValues).toEqual(
            expect.arrayContaining([
                "Lab-Grown Diamond 4Cs",
                "How They Compare",
                "A diamond",
                "Note",
                "Be careful.",
                "Find Your Balance",
                "Explore our jewellery.",
                "Read our ",
                "guide",
            ]),
        );
    });
});

describe("isProse", () => {
    it("rejects protected keys regardless of value", () => {
        expect(isProse("theme", "cream")).toBe(false);
        expect(isProse("shopHref", "/shop/")).toBe(false);
        expect(isProse("category", "labGrownDiamondEducation")).toBe(false);
    });

    it("rejects non-prose values regardless of key", () => {
        expect(isProse("text", "https://www.igi.org/")).toBe(false);
        expect(isProse("text", "/shop/")).toBe(false);
        expect(isProse("text", "hello@aureliaroyale.com")).toBe(false);
        expect(isProse("text", "2026-07-15")).toBe(false);
        expect(isProse("text", "   ")).toBe(false);
    });

    it("accepts ordinary sentences", () => {
        expect(isProse("text", "Cut, colour, clarity and carat weight.")).toBe(true);
    });
});

describe("setAtPath", () => {
    it("writes a value back at its recorded path", () => {
        const target = structuredClone(blog);
        const leaf = collectLeaves(blog).find((l) => l.value === "Be careful.");
        setAtPath(target, leaf.path, "Sois prudent.");
        expect(target.sections[0].content[1].text).toBe("Sois prudent.");
        expect(target.sections[0].content[1].theme).toBe("cream");
    });
});
