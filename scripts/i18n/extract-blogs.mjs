// scripts/i18n/extract-blogs.mjs
// Usage: node scripts/i18n/extract-blogs.mjs [--slug <slug>]
//
// Writes content/blogs/<slug>/en.json for every blog folder. Before writing
// anything, every blog must pass four fidelity checks that are independent
// of extractBlog's own parsing/walk logic:
//   - assertStringsAppearInSource     proves extracted ⊆ source (forward)
//   - assertSourceStringsAllExtracted proves source ⊆ extracted, PER BLOCK,
//                                     IN ORDER (reverse + transposition)
//   - assertBlockCountMatchesSource   proves the block count agrees
//   - assertMetadataFaithful          proves title/subtitle/category/dates
//                                     agree with the hero markup, independent
//                                     of the decode table / category map /
//                                     date parser that produced them
// The forward check alone cannot catch truncation (a truncated string is
// still a substring of the correct one) or a dropped field on a block that
// keeps its `type` (the count check only counts blocks). The reverse
// per-block check closes both holes AND catches a string staying in the
// overall pool while moving to the wrong block (transposition), which an
// aggregate multiset cannot: swapping two blocks' text leaves the aggregate
// multiset of strings unchanged. Writes nothing if any blog fails.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { extractBlog } from "./lib/extract-blog.mjs";
import { EXCLUDED_SLUGS } from "./lib/excluded-slugs.mjs";
import { BLOG_CATEGORY_LABELS } from "./lib/blog-categories.mjs";

const ROOT = path.resolve(import.meta.dirname, "../..");
const BLOG_DIR = path.join(ROOT, "src/app/[locale]/blog");
const OUT_DIR = path.join(ROOT, "content/blogs");

/**
 * Three source files (buying-fine-jewellery-as-gift,
 * lab-grown-diamond-vs-cubic-zirconia, lab-grown-diamond-vs-moissanite) spell
 * an en dash or a subscript digit as a `\uXXXX` escape inside a double-quoted
 * TS string literal (e.g. `"Low–moderate"`) instead of typing the glyph
 * directly. TypeScript decodes that correctly, so the EXTRACTED value is
 * right — but the raw source text still literally contains the six ASCII
 * characters `\`, `u`, `2`, `0`, `1`, `3`, not the glyph, so a plain
 * substring search against the untouched source text would wrongly report
 * those strings as missing. Decoding `\uXXXX` escapes in the search haystack
 * (a plain text transform, independent of the TS parser) treats the escape
 * and the glyph as the same character for containment purposes, which is
 * what they are. It cannot hide a genuine drop: nothing here fabricates the
 * dropped text, it only recognises an alternate valid spelling of a
 * character that TS source is allowed to use.
 *
 * Known limitation: this check is a whole-FILE substring search, not
 * positionally scoped to the originating AST node, and this decode widens
 * matching across the whole file too. That is acceptable only because the
 * reverse per-block check below (assertSourceStringsAllExtracted) covers the
 * direction that actually catches drops/truncation/mangling/transposition —
 * writing it down here so it is not "discovered" again.
 */
function decodeUnicodeEscapesForSearch(rawSource) {
    return rawSource.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
    );
}

/** Recursively collect every string leaf in a plain value (objects/arrays),
 *  in the same order `Object.keys` enumerates them — which, for an object
 *  built by `literalToJson`'s `for (const prop of node.properties)` loop, is
 *  exactly the order those properties were declared in source. */
function collectStringLeaves(value, out = []) {
    if (typeof value === "string") {
        out.push(value);
        return out;
    }
    if (Array.isArray(value)) {
        for (const el of value) collectStringLeaves(el, out);
        return out;
    }
    if (value && typeof value === "object") {
        for (const key of Object.keys(value)) collectStringLeaves(value[key], out);
    }
    return out;
}

/** Parse source (stripping the BOM) into a ts.SourceFile. */
function parseSource(source, file) {
    const clean = source.replace(/^\uFEFF/, "");
    return ts.createSourceFile(file, clean, ts.ScriptTarget.Latest, true);
}

/** Locate the `articleSections` variable declaration's initializer. */
function parseArticleSections(source, file, slug) {
    const sourceFile = parseSource(source, file);
    for (const stmt of sourceFile.statements) {
        if (!ts.isVariableStatement(stmt)) continue;
        for (const d of stmt.declarationList.declarations) {
            if (ts.isIdentifier(d.name) && d.name.text === "articleSections" && d.initializer) {
                return d.initializer;
            }
        }
    }
    throw new Error(`${slug}: no "articleSections" declaration found`);
}

/** True for any object literal carrying a `type` property — the definition
 *  of "one content block" shared by the block-count and per-block checks. */
function isBlockObject(node) {
    return (
        ts.isObjectLiteralExpression(node) &&
        node.properties.some(
            (p) =>
                ts.isPropertyAssignment(p) &&
                ((ts.isIdentifier(p.name) && p.name.text === "type") ||
                    (ts.isStringLiteral(p.name) && p.name.text === "type")),
        )
    );
}

/** True when `node` is a quoted object key (e.g. `"@type"`), i.e. the `name`
 *  of its parent PropertyAssignment — not a value, and excluded everywhere
 *  below that collects string VALUES. */
function isQuotedPropertyKey(node) {
    return Boolean(
        node.parent && ts.isPropertyAssignment(node.parent) && node.parent.name === node,
    );
}

/**
 * Verify every string leaf in `content.sections`, plus `metaTitle` and
 * `metaDescription`, appears verbatim in the raw source text.
 *
 * `title`, `subtitle` and `category` are deliberately excluded here — the
 * first two are entity-decoded by design (`&amp;` -> `&`) and `category` is
 * a derived message key, so none of the three can appear verbatim in source.
 * They are not unchecked, though: assertMetadataFaithful below verifies all
 * three (plus the two dates) against the source independently. `metaTitle`
 * and `metaDescription`, by contrast, are plain literals copied straight off
 * `metadata.title` / `metadata.description` with no decoding or derivation,
 * so they belong in THIS check like everything else.
 *
 * This proves extracted ⊆ source. It shares none of extractBlog's
 * parsing/walk code. See assertSourceStringsAllExtracted for the other
 * direction — this check alone cannot catch truncation.
 */
export function assertStringsAppearInSource(content, source, slug) {
    const haystack = decodeUnicodeEscapesForSearch(source);
    const toCheck = {
        metaTitle: content.metaTitle,
        metaDescription: content.metaDescription,
        sections: content.sections,
    };
    for (const value of collectStringLeaves(toCheck)) {
        // JSON.stringify + strip the surrounding quotes lines the escaping
        // up with how a double-quoted TS string literal appears in the
        // file: `"` -> `\"`, a newline -> `\n`; curly quotes and
        // apostrophes are left alone by JSON.stringify, same as in source.
        const needle = JSON.stringify(value).slice(1, -1);
        if (!haystack.includes(needle)) {
            const preview = value.length > 80 ? `${value.slice(0, 80)}…` : value;
            throw new Error(
                `${slug}: extracted string not found verbatim in source: ${JSON.stringify(preview)}`,
            );
        }
    }
}

/**
 * Build, in document order, one entry per content block — same definition as
 * assertBlockCountMatchesSource (any object literal with a `type` property)
 * — found while walking the `articleSections` subtree. Each entry is the
 * ORDERED list of every string literal (excluding quoted property keys)
 * within that one block's own subtree, including the block's own `type`
 * string, in source order. Once a block root is found, the outer walk does
 * not separately recurse into its children (the inner collection already
 * covers that subtree), so a block's strings are never double-counted or
 * attributed to an enclosing block.
 */
function collectSourceBlocksOrdered(articleSectionsNode) {
    const blocks = [];

    const collectStringsWithin = (node, out) => {
        if (ts.isStringLiteral(node) && !isQuotedPropertyKey(node)) out.push(node.text);
        ts.forEachChild(node, (child) => collectStringsWithin(child, out));
    };

    const visit = (node) => {
        if (isBlockObject(node)) {
            const strings = [];
            collectStringsWithin(node, strings);
            blocks.push(strings);
            return;
        }
        ts.forEachChild(node, visit);
    };
    visit(articleSectionsNode);

    return blocks;
}

/**
 * Reverse direction of the fidelity proof, as a PER-BLOCK ORDERED comparison
 * rather than an aggregate multiset. assertStringsAppearInSource only proves
 * extracted ⊆ source; it cannot catch truncation (a truncated string is
 * still a substring of the correct one), and assertBlockCountMatchesSource
 * cannot catch a dropped field on a block that keeps its `type`. An earlier
 * version of this function closed both gaps with an aggregate multiset
 * (count-per-distinct-string), which is strictly weaker than this one: a
 * multiset proves no string was gained or lost IN AGGREGATE, but not that
 * each string stayed attached to its original block — swapping `text`
 * between two same-shaped blocks leaves the aggregate multiset completely
 * unchanged. Comparing block-by-block, index-by-index (this function) also
 * implies multiset equality overall, so it strictly subsumes the old check.
 *
 * Quoted object keys (e.g. `"@type"`) are not values and are excluded (see
 * isQuotedPropertyKey).
 */
export function assertSourceStringsAllExtracted(content, source, file, slug) {
    const articleSectionsNode = parseArticleSections(source, file, slug);
    const sourceBlocks = collectSourceBlocksOrdered(articleSectionsNode);
    const extractedBlocks = content.sections
        .flatMap((s) => s.content ?? [])
        .map((block) => collectStringLeaves(block));

    const truncate = (s) =>
        s === undefined ? "<missing>" : s.length > 80 ? `${s.slice(0, 80)}…` : s;

    const blockCount = Math.max(sourceBlocks.length, extractedBlocks.length);
    for (let i = 0; i < blockCount; i++) {
        const sourceStrings = sourceBlocks[i] ?? [];
        const extractedStrings = extractedBlocks[i] ?? [];
        const sameLength = sourceStrings.length === extractedStrings.length;
        const sameValues = sourceStrings.every((s, idx) => s === extractedStrings[idx]);
        if (!sameLength || !sameValues) {
            let diffIndex = 0;
            const maxLen = Math.max(sourceStrings.length, extractedStrings.length);
            while (diffIndex < maxLen && sourceStrings[diffIndex] === extractedStrings[diffIndex]) {
                diffIndex++;
            }
            throw new Error(
                `${slug}: block ${i} strings differ at position ${diffIndex} — source ${JSON.stringify(
                    truncate(sourceStrings[diffIndex]),
                )} vs extracted ${JSON.stringify(truncate(extractedStrings[diffIndex]))}`,
            );
        }
    }
}

/**
 * Independently count block objects (any object literal with a `type`
 * property) inside the `articleSections` initializer, by walking the parse
 * tree directly — NOT via literalToJson or extractBlog. It shares the
 * `typescript` parser with the extractor but not the walk, which is the
 * point: a bug in extractBlog's own traversal cannot also hide from this one.
 */
export function assertBlockCountMatchesSource(content, source, file, slug) {
    const articleSectionsNode = parseArticleSections(source, file, slug);

    let astBlockCount = 0;
    const visit = (node) => {
        if (isBlockObject(node)) astBlockCount++;
        ts.forEachChild(node, visit);
    };
    visit(articleSectionsNode);

    const extractedBlockCount = content.sections.flatMap((s) => s.content ?? []).length;
    if (astBlockCount !== extractedBlockCount) {
        throw new Error(
            `${slug}: block count mismatch — source AST has ${astBlockCount} object(s) with a "type" property but the extracted JSON has ${extractedBlockCount}`,
        );
    }
}

/**
 * Aggressive, entity-agnostic normalisation for comparing hero text (which
 * may be HTML-entity-encoded in source) against already-decoded content
 * values, without depending on the specific decode table that produced
 * them: strip every HTML entity as a whole token, drop every remaining
 * non-alphanumeric character, lowercase what's left.
 *
 * One deliberate exception: `&` (bare, or as the `&amp;` entity) is treated
 * as the word "and" rather than deleted. Two of this corpus's eyebrow
 * categories are the SAME category spelled two ways — "Certification &
 * Diamond Quality" (via `&amp;`) in 3 files and "Certification and Diamond
 * Quality" in 4 files (see blog-categories.mjs) — and naively deleting `&`
 * would normalise those two spellings to DIFFERENT strings
 * ("certificationdiamondquality" vs "certificationanddiamondquality"),
 * producing a false category mismatch for the 3 ampersand files that has
 * nothing to do with any real extraction defect. This was caught by running
 * the literal "strip HTML entities" wording against real content before
 * trusting it — see the Fix round 3 section of the task report.
 */
function normalizeForComparison(text) {
    return text
        .replace(/&amp;|&/g, " and ")
        .replace(/&\w+;|&#\d+;/g, "")
        .replace(/[^a-zA-Z0-9]/g, "")
        .toLowerCase();
}

/** Concatenate the direct JsxText children of a JSX element, raw and
 *  undecoded (no entity decoding) — deliberately NOT extractBlog's
 *  `jsxTextOf`, so this check does not share that transform. */
function rawJsxTextOf(element) {
    return element.children
        .filter((child) => ts.isJsxText(child))
        .map((child) => child.text)
        .join("")
        .trim();
}

function classNameOf(element) {
    const opening = ts.isJsxElement(element) ? element.openingElement : element;
    for (const attr of opening.attributes.properties) {
        if (
            ts.isJsxAttribute(attr) &&
            attr.name.escapedText === "className" &&
            attr.initializer &&
            ts.isStringLiteral(attr.initializer)
        ) {
            return attr.initializer.text;
        }
    }
    return "";
}

function tagNameOf(element) {
    const opening = ts.isJsxElement(element) ? element.openingElement : element;
    return opening.tagName.getText ? opening.tagName.getText() : "";
}

/** Locate the hero eyebrow `<span>`, `<h1>` and tracking-widest `<p>`
 *  anywhere in the file, via a fresh AST walk independent of extractBlog's
 *  own hero-finding code. */
function findHeroElements(sourceFile) {
    const elements = [];
    const visit = (node) => {
        if (ts.isJsxElement(node)) elements.push(node);
        ts.forEachChild(node, visit);
    };
    ts.forEachChild(sourceFile, visit);

    return {
        eyebrowEl: elements.find(
            (el) => tagNameOf(el) === "span" && classNameOf(el).includes("text-gold"),
        ),
        titleEl: elements.find((el) => tagNameOf(el) === "h1"),
        subtitleEl: elements.find(
            (el) => tagNameOf(el) === "p" && classNameOf(el).includes("tracking-widest"),
        ),
    };
}

const ISO_DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const MONTH_NAMES = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
];

/** Build the "Month D, YYYY" form of an ISO date from its parts directly —
 *  deliberately NOT reusing extractBlog's `parseEnglishDate` (which goes the
 *  other way and is a different code path anyway), so this check does not
 *  depend on the parser it is meant to verify. */
function englishDateFormOf(isoDate) {
    const [year, month, day] = isoDate.split("-").map(Number);
    return `${MONTH_NAMES[month - 1]} ${day}, ${year}`;
}

/**
 * Verify the five metadata fields that none of the other three checks touch:
 * `title`, `subtitle`, `category`, `datePublished`, `dateModified`. A bug in
 * entity-decoding, the category table lookup, or date parsing would ship
 * silently wrong-but-plausible metadata with every other check green — these
 * are also the fields a reader notices first (the H1 and the published
 * date). Each check below is independent of the transform that produced the
 * value: it does not call decodeText, BLOG_CATEGORY_KEYS or
 * parseEnglishDate, which would only prove those functions agree with
 * themselves.
 */
export function assertMetadataFaithful(content, source, file, slug) {
    const clean = source.replace(/^\uFEFF/, "");
    const sourceFile = parseSource(source, file);
    const { eyebrowEl, titleEl, subtitleEl } = findHeroElements(sourceFile);

    // --- title ---------------------------------------------------------
    if (!titleEl) throw new Error(`${slug}: no <h1> found for metadata fidelity check`);
    const sourceTitleNormalized = normalizeForComparison(rawJsxTextOf(titleEl));
    const contentTitleNormalized = normalizeForComparison(content.title ?? "");
    if (!contentTitleNormalized || !sourceTitleNormalized.includes(contentTitleNormalized)) {
        throw new Error(
            `${slug}: extracted title ${JSON.stringify(content.title)} does not match source <h1> ${JSON.stringify(rawJsxTextOf(titleEl))} after normalisation`,
        );
    }

    // --- subtitle (optional) --------------------------------------------
    if (content.subtitle) {
        if (!subtitleEl) {
            throw new Error(
                `${slug}: content has a subtitle but no tracking-widest <p> was found in source to verify it against`,
            );
        }
        const sourceSubtitleNormalized = normalizeForComparison(rawJsxTextOf(subtitleEl));
        const contentSubtitleNormalized = normalizeForComparison(content.subtitle);
        if (!contentSubtitleNormalized || !sourceSubtitleNormalized.includes(contentSubtitleNormalized)) {
            throw new Error(
                `${slug}: extracted subtitle ${JSON.stringify(content.subtitle)} does not match source hero <p> ${JSON.stringify(rawJsxTextOf(subtitleEl))} after normalisation`,
            );
        }
    }

    // --- category --------------------------------------------------------
    if (!Object.prototype.hasOwnProperty.call(BLOG_CATEGORY_LABELS, content.category)) {
        throw new Error(
            `${slug}: category ${JSON.stringify(content.category)} is not a key of BLOG_CATEGORY_LABELS`,
        );
    }
    if (!eyebrowEl) throw new Error(`${slug}: no hero eyebrow <span> found for metadata fidelity check`);
    const expectedLabelNormalized = normalizeForComparison(BLOG_CATEGORY_LABELS[content.category]);
    const sourceEyebrowNormalized = normalizeForComparison(rawJsxTextOf(eyebrowEl));
    if (expectedLabelNormalized !== sourceEyebrowNormalized) {
        throw new Error(
            `${slug}: category ${JSON.stringify(content.category)} (label ${JSON.stringify(
                BLOG_CATEGORY_LABELS[content.category],
            )}) does not match source eyebrow ${JSON.stringify(rawJsxTextOf(eyebrowEl))}`,
        );
    }

    // --- dates -------------------------------------------------------------
    const assertDateTraceable = (isoDate, label) => {
        if (!ISO_DATE_RE.test(isoDate ?? "")) {
            throw new Error(`${slug}: ${label} ${JSON.stringify(isoDate)} is not a well-formed ISO date (YYYY-MM-DD)`);
        }
        const english = englishDateFormOf(isoDate);
        if (!clean.includes(isoDate) && !clean.includes(english)) {
            throw new Error(
                `${slug}: ${label} ${JSON.stringify(isoDate)} not found in source as an ISO date or as ${JSON.stringify(english)}`,
            );
        }
    };
    assertDateTraceable(content.datePublished, "datePublished");
    assertDateTraceable(content.dateModified, "dateModified");

    if (!(content.dateModified >= content.datePublished)) {
        throw new Error(
            `${slug}: dateModified ${content.dateModified} is earlier than datePublished ${content.datePublished}`,
        );
    }
}

/**
 * CLI entry point. Wrapped in a function — rather than run at module top
 * level — so that `extract-blogs.test.mjs` can import the assert* functions
 * above without re-running the whole extraction/write pipeline (and without
 * risking `process.exit(1)` killing the test process) as a side effect of
 * the import. See the `import.meta.url` guard at the bottom of this file.
 */
function main() {
    const only = process.argv.includes("--slug")
        ? process.argv[process.argv.indexOf("--slug") + 1]
        : null;

    const slugs = fs
        .readdirSync(BLOG_DIR, { withFileTypes: true })
        .filter((e) => e.isDirectory() && !e.name.startsWith("["))
        .map((e) => e.name)
        .filter((s) => !EXCLUDED_SLUGS.includes(s))
        .filter((s) => !only || s === only)
        .sort();

    const results = [];
    const failures = [];

    for (const slug of slugs) {
        const file = path.join(BLOG_DIR, slug, "page.tsx");
        if (!fs.existsSync(file)) continue;
        try {
            const source = fs.readFileSync(file, "utf8");
            const content = extractBlog(source, { file, slug });

            // JSON round-trip: catches undefined, NaN and anything else JSON
            // cannot carry. This alone proves determinism and serialisability —
            // NOT fidelity to the source. The four checks below are what prove
            // that, independently of extractBlog's own parsing/walk code.
            const roundTripped = JSON.parse(JSON.stringify(content));

            assertStringsAppearInSource(roundTripped, source, slug);
            assertSourceStringsAllExtracted(roundTripped, source, file, slug);
            assertBlockCountMatchesSource(roundTripped, source, file, slug);
            assertMetadataFaithful(roundTripped, source, file, slug);

            results.push({ slug, content: roundTripped });
        } catch (error) {
            failures.push({ slug, message: error.message });
        }
    }

    if (failures.length) {
        console.error(`\n${failures.length} blog(s) failed extraction — nothing written:\n`);
        for (const f of failures) console.error(`  ${f.slug}: ${f.message}`);
        process.exit(1);
    }

    for (const { slug, content } of results) {
        const dir = path.join(OUT_DIR, slug);
        fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(
            path.join(dir, "en.json"),
            JSON.stringify(content, null, 2) + "\n",
            "utf8",
        );
    }

    console.log(`extracted ${results.length} blog(s) to content/blogs/<slug>/en.json`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
    main();
}
