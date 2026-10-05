// scripts/i18n/extract-blogs.mjs
// Usage: node scripts/i18n/extract-blogs.mjs [--slug <slug>]
//
// Writes content/blogs/<slug>/en.json for every blog folder. Before writing
// anything, every blog must pass two fidelity checks that are independent of
// extractBlog's own parsing/walk logic — see assertStringsAppearInSource and
// assertBlockCountMatchesSource below. Writes nothing if any blog fails.
import fs from "node:fs";
import path from "node:path";
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
 */
function decodeUnicodeEscapesForSearch(rawSource) {
    return rawSource.replace(/\\u([0-9a-fA-F]{4})/g, (_, hex) =>
        String.fromCharCode(parseInt(hex, 16)),
    );
}

/**
 * Verify every string leaf inside `content.sections` (recursing through
 * plain objects and arrays) appears verbatim in the raw source text.
 *
 * `title`, `subtitle` and `category` are deliberately excluded — the first
 * two are entity-decoded by design (`&amp;` -> `&`) and `category` is a
 * derived message key — neither appears verbatim in source. Excluding them
 * is automatic here because this function is only ever handed
 * `content.sections`, not the whole content object.
 *
 * This check shares none of extractBlog's parsing/walk code, so it genuinely
 * detects a dropped, truncated or mangled string rather than re-confirming
 * that extractBlog agrees with itself.
 */
export function assertStringsAppearInSource(content, source, slug) {
    const haystack = decodeUnicodeEscapesForSearch(source);
    const walk = (value) => {
        if (typeof value === "string") {
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
            return;
        }
        if (Array.isArray(value)) {
            for (const el of value) walk(el);
            return;
        }
        if (value && typeof value === "object") {
            for (const key of Object.keys(value)) walk(value[key]);
        }
    };
    walk(content.sections);
}

/**
 * Independently count block objects (any object literal with a `type`
 * property) inside the `articleSections` initializer, by walking the parse
 * tree directly — NOT via literalToJson or extractBlog. It shares the
 * `typescript` parser with the extractor but not the walk, which is the
 * point: a bug in extractBlog's own traversal cannot also hide from this one.
 */
export function assertBlockCountMatchesSource(content, source, file, slug) {
    const clean = source.replace(/^\uFEFF/, "");
    const sourceFile = ts.createSourceFile(file, clean, ts.ScriptTarget.Latest, true);

    let articleSectionsNode = null;
    for (const stmt of sourceFile.statements) {
        if (!ts.isVariableStatement(stmt)) continue;
        for (const d of stmt.declarationList.declarations) {
            if (ts.isIdentifier(d.name) && d.name.text === "articleSections" && d.initializer) {
                articleSectionsNode = d.initializer;
            }
        }
    }
    if (!articleSectionsNode) {
        throw new Error(`${slug}: no "articleSections" declaration found for block-count check`);
    }

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
        // NOT fidelity to the source. The two checks below are what prove
        // that, independently of extractBlog's own parsing/walk code.
        const roundTripped = JSON.parse(JSON.stringify(content));

        assertStringsAppearInSource(roundTripped, source, slug);
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
