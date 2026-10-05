// scripts/i18n/extract-blogs.mjs
// Usage: node scripts/i18n/extract-blogs.mjs [--slug <slug>]
//
// Writes content/blogs/<slug>/en.json for every blog folder. Before writing
// anything, every blog must pass three fidelity checks that are independent
// of extractBlog's own parsing/walk logic:
//   - assertStringsAppearInSource     proves extracted ⊆ source (forward)
//   - assertSourceStringsAllExtracted proves source ⊆ extracted (reverse)
//   - assertBlockCountMatchesSource   proves the block count agrees
// The forward check alone cannot catch truncation (a truncated string is
// still a substring of the correct one) or a dropped field on a block that
// keeps its `type` (the count check only counts blocks). The reverse
// multiset check closes both holes. Writes nothing if any blog fails.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";
import { extractBlog } from "./lib/extract-blog.mjs";
import { EXCLUDED_SLUGS } from "./lib/excluded-slugs.mjs";

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
 * reverse multiset check below (assertSourceStringsAllExtracted) covers the
 * direction that actually catches drops/truncation/mangling — writing it
 * down here so it is not "discovered" again.
 */
function decodeUnicodeEscapesForSearch(rawSource) {
    return rawSource.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
    );
}

/** Recursively collect every string leaf in a plain value (objects/arrays). */
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

/** Count occurrences of each distinct string — multiplicity matters. */
function toMultiset(strings) {
    const counts = new Map();
    for (const s of strings) counts.set(s, (counts.get(s) ?? 0) + 1);
    return counts;
}

/** Parse source (stripping the BOM) and locate the `articleSections` initializer. */
function parseArticleSections(source, file, slug) {
    const clean = source.replace(/^\uFEFF/, "");
    const sourceFile = ts.createSourceFile(file, clean, ts.ScriptTarget.Latest, true);
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

/**
 * Verify every string leaf in `content.sections`, plus `metaTitle` and
 * `metaDescription`, appears verbatim in the raw source text.
 *
 * `title`, `subtitle` and `category` are deliberately excluded — the first
 * two are entity-decoded by design (`&amp;` -> `&`) and `category` is a
 * derived message key, so none of the three can appear verbatim in source.
 * `metaTitle` and `metaDescription`, by contrast, are plain literals copied
 * straight off `metadata.title` / `metadata.description` with no decoding or
 * derivation, so they belong in this check like everything else.
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
 * Reverse direction of the fidelity proof: assertStringsAppearInSource only
 * proves extracted ⊆ source. A truncated string is still a substring of the
 * correct one, so that check can never catch truncation; and a block that
 * keeps its `type` but loses another field doesn't change the block count,
 * so assertBlockCountMatchesSource can't catch that either. This function
 * proves the missing half: every string LITERAL inside the `articleSections`
 * initializer in source must also appear, with the SAME multiplicity, among
 * the extracted string leaves in `content.sections`. A multiset (not a set)
 * is required — a plain set comparison would let a dropped duplicate hide.
 *
 * Quoted object keys (e.g. `"@type"`) are not values and are excluded by
 * checking whether the StringLiteral is the `name` of its parent
 * PropertyAssignment.
 */
export function assertSourceStringsAllExtracted(content, source, file, slug) {
    const articleSectionsNode = parseArticleSections(source, file, slug);

    const sourceStrings = [];
    const visit = (node) => {
        if (ts.isStringLiteral(node)) {
            const isQuotedKey =
                node.parent && ts.isPropertyAssignment(node.parent) && node.parent.name === node;
            if (!isQuotedKey) sourceStrings.push(node.text);
        }
        ts.forEachChild(node, visit);
    };
    visit(articleSectionsNode);

    const sourceMultiset = toMultiset(sourceStrings);
    const extractedMultiset = toMultiset(collectStringLeaves(content.sections));

    const allKeys = new Set([...sourceMultiset.keys(), ...extractedMultiset.keys()]);
    const diffs = [];
    for (const key of allKeys) {
        const sourceCount = sourceMultiset.get(key) ?? 0;
        const extractedCount = extractedMultiset.get(key) ?? 0;
        if (sourceCount !== extractedCount) diffs.push({ key, sourceCount, extractedCount });
    }

    if (diffs.length) {
        const preview = diffs
            .slice(0, 3)
            .map(({ key, sourceCount, extractedCount }) => {
                const truncated = key.length > 80 ? `${key.slice(0, 80)}…` : key;
                return `${JSON.stringify(truncated)} (source x${sourceCount}, extracted x${extractedCount})`;
            })
            .join("; ");
        throw new Error(
            `${slug}: ${diffs.length} string(s) differ in count between source and extraction — ${preview}`,
        );
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
        if (ts.isObjectLiteralExpression(node)) {
            const hasTypeProp = node.properties.some(
                (p) =>
                    ts.isPropertyAssignment(p) &&
                    ((ts.isIdentifier(p.name) && p.name.text === "type") ||
                        (ts.isStringLiteral(p.name) && p.name.text === "type")),
            );
            if (hasTypeProp) astBlockCount++;
        }
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
            // NOT fidelity to the source. The three checks below are what prove
            // that, independently of extractBlog's own parsing/walk code.
            const roundTripped = JSON.parse(JSON.stringify(content));

            assertStringsAppearInSource(roundTripped, source, slug);
            assertSourceStringsAllExtracted(roundTripped, source, file, slug);
            assertBlockCountMatchesSource(roundTripped, source, file, slug);

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
