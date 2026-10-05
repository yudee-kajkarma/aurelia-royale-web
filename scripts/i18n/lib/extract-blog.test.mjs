// scripts/i18n/lib/extract-blog.test.mjs
import { describe, expect, it } from "vitest";
import { extractBlog } from "./extract-blog.mjs";

const FIXTURE = `\uFEFFimport React from "react";
import { Metadata } from "next";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

export const metadata: Metadata = {
  title: "Test Title | Aurelia Royale",
  description: "A test description.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/test-slug/" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "datePublished": "2026-07-15", "dateModified": "2026-09-10" }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "Body copy." },
      { type: "callout", title: "Note", text: "Careful.", theme: "cream" }
    ]
  }
];

export default function Blog1Page() {
  return (
    <main>
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Certification &amp; Diamond Quality
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            What Are the 4Cs?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Cut, Colour &amp; Carat Explained • Published July 15, 2026
          </p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
    </main>
  );
}
`;

const extracted = extractBlog(FIXTURE, { file: "fixture.tsx", slug: "test-slug" });

describe("extractBlog", () => {
    it("takes meta fields from the metadata export", () => {
        expect(extracted.metaTitle).toBe("Test Title | Aurelia Royale");
        expect(extracted.metaDescription).toBe("A test description.");
    });

    it("extracts the article sections verbatim", () => {
        expect(extracted.sections).toEqual([
            {
                content: [
                    { type: "paragraph", text: "Body copy." },
                    { type: "callout", title: "Note", text: "Careful.", theme: "cream" },
                ],
            },
        ]);
    });

    it("reads the h1 as the on-page title", () => {
        expect(extracted.title).toBe("What Are the 4Cs?");
    });

    it("decodes HTML entities in hero text", () => {
        expect(extracted.subtitle).toBe("Cut, Colour & Carat Explained");
    });

    it("maps both spellings of the eyebrow to one category key", () => {
        expect(extracted.category).toBe("certificationAndDiamondQuality");
    });

    it("splits the published date off the subtitle as an ISO date", () => {
        expect(extracted.datePublished).toBe("2026-07-15");
        expect(extracted.dateModified).toBe("2026-09-10");
    });

    it("never emits a canonical URL, which is generated per locale", () => {
        expect(extracted).not.toHaveProperty("canonical");
    });

    it("throws when the eyebrow is not a known category", () => {
        const bad = FIXTURE.replace(
            "Certification &amp; Diamond Quality",
            "Some Brand New Category",
        );
        expect(() => extractBlog(bad, { file: "f.tsx", slug: "s" })).toThrow(
            /Some Brand New Category/,
        );
    });

    it("throws when article content is not a literal", () => {
        const bad = FIXTURE.replace('text: "Body copy."', "text: sharedCopy");
        expect(() => extractBlog(bad, { file: "f.tsx", slug: "s" })).toThrow(
            /sharedCopy/,
        );
    });
});
