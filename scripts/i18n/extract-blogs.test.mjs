// scripts/i18n/extract-blogs.test.mjs
import { describe, expect, it } from "vitest";
import {
    assertStringsAppearInSource,
    assertSourceStringsAllExtracted,
    assertBlockCountMatchesSource,
} from "./extract-blogs.mjs";

const FILE = "fixture.tsx";
const SLUG = "fixture-slug";

// A small but representative source: a metadata object, and an
// articleSections array with four blocks — a long paragraph (long enough to
// make truncation meaningful), two blocks sharing the exact same text
// (duplicate detection), and a callout with both a title and a text field
// (field-drop detection without touching the block count).
const SOURCE = `const metadata = {
  title: "A Correct Blog Title",
  description: "A correct blog description.",
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
`;

// Hand-written to match SOURCE exactly — not derived by running extractBlog,
// so these tests exercise the three assert* functions in isolation from the
// extractor they are meant to check.
function correctContent() {
    return {
        metaTitle: "A Correct Blog Title",
        metaDescription: "A correct blog description.",
        category: "labGrownDiamondEducation",
        title: "An On-Page Title Not In Source",
        subtitle: "A Subtitle Not In Source",
        datePublished: "2026-01-01",
        dateModified: "2026-01-01",
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

const clone = (value) => JSON.parse(JSON.stringify(value));

describe("extract-blogs fidelity checks", () => {
    it("a correct content/source pair passes all three checks", () => {
        const content = correctContent();
        expect(() => assertStringsAppearInSource(content, SOURCE, SLUG)).not.toThrow();
        expect(() =>
            assertSourceStringsAllExtracted(content, SOURCE, FILE, SLUG),
        ).not.toThrow();
        expect(() =>
            assertBlockCountMatchesSource(content, SOURCE, FILE, SLUG),
        ).not.toThrow();
    });

    it("a dropped block fails the block-count check", () => {
        const content = clone(correctContent());
        content.sections[0].content.pop(); // drop the callout block entirely

        expect(() =>
            assertBlockCountMatchesSource(content, SOURCE, FILE, SLUG),
        ).toThrow(/block count mismatch/);
    });

    it("a truncated string fails the reverse multiset check (but not the forward check — this is the hole Fix 1 closes)", () => {
        const content = clone(correctContent());
        const full = content.sections[0].content[0].text;
        content.sections[0].content[0].text = full.slice(0, Math.floor(full.length * 0.6));

        // The forward check cannot catch this: a truncated string is still a
        // substring of the correct one.
        expect(() => assertStringsAppearInSource(content, SOURCE, SLUG)).not.toThrow();

        // The reverse multiset check catches it: the full-length string from
        // source is now missing from the extracted multiset.
        expect(() =>
            assertSourceStringsAllExtracted(content, SOURCE, FILE, SLUG),
        ).toThrow(/differ in count/);
    });

    it("a deleted field on a surviving block fails the reverse multiset check (but not the block-count check)", () => {
        const content = clone(correctContent());
        delete content.sections[0].content[3].text; // callout keeps "type" and "title"

        // Block count is unchanged: the callout still has a `type` property.
        expect(() =>
            assertBlockCountMatchesSource(content, SOURCE, FILE, SLUG),
        ).not.toThrow();

        // But "Careful now." has vanished from the extracted strings.
        expect(() =>
            assertSourceStringsAllExtracted(content, SOURCE, FILE, SLUG),
        ).toThrow(/differ in count/);
    });

    it("a dropped duplicate string fails the reverse multiset check", () => {
        const content = clone(correctContent());
        // Source has "Repeated phrase" twice; extraction now only has it once.
        content.sections[0].content[2].text = "Substituted phrase";

        expect(() =>
            assertSourceStringsAllExtracted(content, SOURCE, FILE, SLUG),
        ).toThrow(/differ in count/);
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
});
