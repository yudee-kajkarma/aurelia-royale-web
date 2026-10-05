// scripts/i18n/extract-blogs.test.mjs
import { describe, expect, it } from "vitest";
import {
    assertStringsAppearInSource,
    assertSourceStringsAllExtracted,
    assertBlockCountMatchesSource,
    assertMetadataFaithful,
} from "./extract-blogs.mjs";

const FILE = "fixture.tsx";
const SLUG = "fixture-slug";

// A small but representative source: metadata, a schemaMarkup with both
// dates, a hero (eyebrow span / h1 / tracking-widest p), and an
// articleSections array with four blocks — a long paragraph (long enough to
// make truncation meaningful), two blocks sharing the exact same text
// (duplicate detection), and a callout with both a title and a text field
// (field-drop detection without touching the block count).
const SOURCE = `import React from "react";

export const metadata = {
  title: "A Correct Blog Title",
  description: "A correct blog description.",
};

const schemaMarkup = {
  "@graph": [
    { "@type": "WebPage", "datePublished": "2026-01-01", "dateModified": "2026-01-02" }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "This is a reasonably long piece of paragraph text used for testing truncation detection in the fidelity gate." },
      { type: "paragraph", text: "Repeated phrase" },
      { type: "paragraph", text: "Repeated phrase" },
      { type: "callout", title: "Note", text: "Careful now." }
    ]
  }
];

export default function FixturePage() {
  return (
    <main>
      <span className="text-gold">Lab-Grown Diamond Education</span>
      <h1>An On Page Title Present In Source</h1>
      <p className="tracking-widest">A Subtitle Present In Source • Published January 1, 2026</p>
    </main>
  );
}
`;

// Same as SOURCE, but the <h1> has been shortened — simulates a real-world
// mismatch where the extracted title (still the full, correct value) no
// longer fits within what the source actually contains.
const TRUNCATED_TITLE_SOURCE = SOURCE.replace(
    "<h1>An On Page Title Present In Source</h1>",
    "<h1>An On Page</h1>",
);

// Hand-written to match SOURCE exactly — not derived by running extractBlog,
// so these tests exercise the assert* functions in isolation from the
// extractor they are meant to check.
function correctContent() {
    return {
        metaTitle: "A Correct Blog Title",
        metaDescription: "A correct blog description.",
        category: "labGrownDiamondEducation",
        title: "An On Page Title Present In Source",
        subtitle: "A Subtitle Present In Source",
        datePublished: "2026-01-01",
        dateModified: "2026-01-02",
        sections: [
            {
                content: [
                    {
                        type: "paragraph",
                        text: "This is a reasonably long piece of paragraph text used for testing truncation detection in the fidelity gate.",
                    },
                    { type: "paragraph", text: "Repeated phrase" },
                    { type: "paragraph", text: "Repeated phrase" },
                    { type: "callout", title: "Note", text: "Careful now." },
                ],
            },
        ],
    };
}

// A second, minimal fixture dedicated to the transposition test: two
// same-shaped ("paragraph") blocks with DISTINCT, non-duplicate text, so a
// swap between them is meaningful (swapping two IDENTICAL "Repeated phrase"
// blocks in the fixture above would be a no-op).
const SWAP_SOURCE = `const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "Alpha paragraph text that is clearly distinct." },
      { type: "paragraph", text: "Beta paragraph text that is also clearly distinct." }
    ]
  }
];
`;

function swapBaselineContent() {
    return {
        sections: [
            {
                content: [
                    { type: "paragraph", text: "Alpha paragraph text that is clearly distinct." },
                    { type: "paragraph", text: "Beta paragraph text that is also clearly distinct." },
                ],
            },
        ],
    };
}

const clone = (value) => JSON.parse(JSON.stringify(value));

describe("extract-blogs fidelity checks", () => {
    it("a correct content/source pair passes all four checks", () => {
        const content = correctContent();
        expect(() => assertStringsAppearInSource(content, SOURCE, SLUG)).not.toThrow();
        expect(() =>
            assertSourceStringsAllExtracted(content, SOURCE, FILE, SLUG),
        ).not.toThrow();
        expect(() =>
            assertBlockCountMatchesSource(content, SOURCE, FILE, SLUG),
        ).not.toThrow();
        expect(() => assertMetadataFaithful(content, SOURCE, FILE, SLUG)).not.toThrow();
    });

    it("a dropped block fails the block-count check", () => {
        const content = clone(correctContent());
        content.sections[0].content.pop(); // drop the callout block entirely

        expect(() =>
            assertBlockCountMatchesSource(content, SOURCE, FILE, SLUG),
        ).toThrow(/block count mismatch/);
    });

    it("a truncated string fails the per-block check (but not the forward check — this is the hole Fix 1 closed)", () => {
        const content = clone(correctContent());
        const full = content.sections[0].content[0].text;
        content.sections[0].content[0].text = full.slice(0, Math.floor(full.length * 0.6));

        // The forward check cannot catch this: a truncated string is still a
        // substring of the correct one.
        expect(() => assertStringsAppearInSource(content, SOURCE, SLUG)).not.toThrow();

        // The per-block check catches it: block 0's string list no longer
        // matches the source block's string list.
        expect(() =>
            assertSourceStringsAllExtracted(content, SOURCE, FILE, SLUG),
        ).toThrow(/block \d+ strings differ/);
    });

    it("a deleted field on a surviving block fails the per-block check (but not the block-count check)", () => {
        const content = clone(correctContent());
        delete content.sections[0].content[3].text; // callout keeps "type" and "title"

        // Block count is unchanged: the callout still has a `type` property.
        expect(() =>
            assertBlockCountMatchesSource(content, SOURCE, FILE, SLUG),
        ).not.toThrow();

        // But "Careful now." has vanished from block 3's string list.
        expect(() =>
            assertSourceStringsAllExtracted(content, SOURCE, FILE, SLUG),
        ).toThrow(/block \d+ strings differ/);
    });

    it("a dropped duplicate string fails the per-block check", () => {
        const content = clone(correctContent());
        // Source has "Repeated phrase" twice; extraction now only has it once.
        content.sections[0].content[2].text = "Substituted phrase";

        expect(() =>
            assertSourceStringsAllExtracted(content, SOURCE, FILE, SLUG),
        ).toThrow(/block \d+ strings differ/);
    });

    it("two same-shaped blocks with their text SWAPPED fails the per-block check (Gap 2) — would have passed the old aggregate multiset", () => {
        const content = clone(swapBaselineContent());
        const originalFirst = content.sections[0].content[0].text;
        const originalSecond = content.sections[0].content[1].text;
        content.sections[0].content[0].text = originalSecond;
        content.sections[0].content[1].text = originalFirst;

        // Note: the AGGREGATE multiset of strings across the whole blog is
        // unchanged by this mutation — both original strings are still
        // present, each exactly once, just attached to the other block. The
        // old (fix-round-2) assertSourceStringsAllExtracted compared only
        // the aggregate multiset and so would NOT have caught this; only the
        // per-block, index-by-index comparison (this function, since fix
        // round 3) does, because block 0's own string list no longer
        // matches source block 0's string list.
        expect(() =>
            assertSourceStringsAllExtracted(content, SWAP_SOURCE, FILE, SLUG),
        ).toThrow(/block \d+ strings differ/);
    });

    it("a string absent from source fails the forward check", () => {
        const content = clone(correctContent());
        content.sections[0].content[3].title = "This Title Was Never In The Source File";

        expect(() => assertStringsAppearInSource(content, SOURCE, SLUG)).toThrow(
            /not found verbatim in source/,
        );
    });

    it("a metaTitle absent from source fails the forward check (proves Fix 2)", () => {
        const content = clone(correctContent());
        content.metaTitle = "A Title That Does Not Appear Anywhere In Source";

        expect(() => assertStringsAppearInSource(content, SOURCE, SLUG)).toThrow(
            /not found verbatim in source/,
        );
    });

    it("a wrong-but-valid category key fails assertMetadataFaithful", () => {
        const content = clone(correctContent());
        // Valid key, but doesn't match the "Lab-Grown Diamond Education"
        // eyebrow in SOURCE — exactly the case nothing else would catch.
        content.category = "jewelleryCareAndMaintenance";

        expect(() => assertMetadataFaithful(content, SOURCE, FILE, SLUG)).toThrow(
            /does not match source eyebrow/,
        );
    });

    it("a truncated title fails assertMetadataFaithful", () => {
        const content = clone(correctContent()); // title unchanged (full, correct)

        expect(() =>
            assertMetadataFaithful(content, TRUNCATED_TITLE_SOURCE, FILE, SLUG),
        ).toThrow(/does not match source <h1>/);
    });

    it("a datePublished that is well-formed but absent from source fails assertMetadataFaithful", () => {
        const content = clone(correctContent());
        content.datePublished = "2099-12-31"; // valid ISO shape, not in SOURCE at all

        expect(() => assertMetadataFaithful(content, SOURCE, FILE, SLUG)).toThrow(
            /not found in source/,
        );
    });

    it("a dateModified earlier than datePublished fails assertMetadataFaithful", () => {
        const content = clone(correctContent());
        // Both values individually still appear in SOURCE (as the schema's
        // datePublished/dateModified) — just swapped, so each is traceable on
        // its own but the pair is now out of order.
        content.datePublished = "2026-01-02";
        content.dateModified = "2026-01-01";

        expect(() => assertMetadataFaithful(content, SOURCE, FILE, SLUG)).toThrow(
            /is earlier than datePublished/,
        );
    });
});
