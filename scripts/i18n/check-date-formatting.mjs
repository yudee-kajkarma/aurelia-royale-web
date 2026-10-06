// AST-based gate against locale-unaware date/number formatting.
//
// Why this exists: `someDate.toLocaleDateString()` (no args) and
// `new Intl.DateTimeFormat("en-US", {...})` (a hardcoded locale literal)
// both ignore the active page locale and fall back to either the BROWSER's
// locale or a wrong fixed one. Eight files in this project have now carried
// a wrong-locale date formatter, surviving two rounds of eye-checking. The
// correct form in this codebase is next-intl's `useFormatter()` (client
// components) / `getFormatter()` (server components), or a raw
// `Intl.DateTimeFormat(locale, {...})` call where `locale` is the real
// request locale passed as a variable/expression — never a string literal.
// This script parses the real TypeScript/JSX AST (the same approach as
// `scripts/i18n/find-untranslated.mjs` and `check-locale-navigation.mjs`)
// rather than grepping source text, so it is not fooled by comments,
// multi-line calls, or incidental substring matches.
//
// RULE 2: pre-formatted English dates held in data/source.
// ------------------------------------------------------
// Rule 1 above only inspects date-format CALL sites, and that blind spot
// shipped English dates to five locales for a full release. `blogs.data.ts`
// stored `date: "July 16, 2026"` — a date already formatted, in English, by
// hand — and `[locale]/blog/page.tsx` interpolated it straight into a
// translated byline. There is no formatter call anywhere on that path, so
// Rule 1 reported 0 findings while /es/blog/ and /de/blog/ rendered
// "July 16, 2026" on every card.
//
// A human-readable date can never be localised after the fact, so holding one
// in source is the bug, independent of how it is later rendered. Rule 2
// therefore fails on any string, template or JSX text in `src/**` that
// contains an English month-name date — "July 16, 2026", "16 July 2026" or
// "July 2026". Store the machine-readable date instead (`"2026-07-16"`, which
// this rule deliberately ignores) and format it per locale at render time.
import ts from "typescript";
import fs from "node:fs";
import path from "node:path";

const LOCALE_METHOD_NAMES = new Set([
    "toLocaleDateString",
    "toLocaleString",
    "toLocaleTimeString",
]);

const INTL_CONSTRUCTOR_NAMES = new Set(["DateTimeFormat", "NumberFormat"]);

// Directories to skip even though they fall under a walked root — admin is
// English-only by decision, so wrong-locale formatting there is not a bug.
const SKIP_DIR_NAMES = new Set(["admin"]);

function walkFiles(dir, accept, out = []) {
    if (!fs.existsSync(dir)) return out;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.isDirectory() && SKIP_DIR_NAMES.has(e.name)) continue;
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walkFiles(p, accept, out);
        else if (accept(e.name)) out.push(p);
    }
    return out;
}

const isTsx = (name) => name.endsWith(".tsx");

// Rule 2 has to reach plain `.ts` as well: the date strings that caused this
// rule to exist lived in `src/data/blogs.data.ts`, which renders nothing
// itself and so was never walked for Rule 1. Test files and ambient
// declarations are excluded - neither is ever rendered or shipped, and
// asserting on a formatted English date is legitimate inside a test.
const isTsOrTsxSource = (name) =>
    (name.endsWith(".ts") || name.endsWith(".tsx")) &&
    !name.endsWith(".test.ts") &&
    !name.endsWith(".test.tsx") &&
    !name.endsWith(".d.ts");

const MONTHS =
    "January|February|March|April|May|June|July|August|September|October|November|December";

/**
 * The three shapes an English-formatted date takes in this codebase's copy.
 * Matched as a SUBSTRING, so a date embedded in a sentence ("Updated July
 * 2026") is caught too. None of them can match an ISO date - they all need a
 * spelled-out English month name, which "2026-07-16" does not have, so the
 * machine-readable form (the fix) passes cleanly.
 */
const ENGLISH_DATE_PATTERNS = [
    // String.raw so a single backslash in the pattern reaches RegExp intact.
    new RegExp(String.raw`\b(?:${MONTHS})\s+\d{1,2},\s*\d{4}\b`), // July 16, 2026
    new RegExp(String.raw`\b\d{1,2}\s+(?:${MONTHS})\s+\d{4}\b`), // 16 July 2026
    new RegExp(String.raw`\b(?:${MONTHS})\s+\d{4}\b`), // July 2026
];

function matchEnglishDate(text) {
    for (const re of ENGLISH_DATE_PATTERNS) {
        const m = re.exec(text);
        if (m) return m[0];
    }
    return null;
}

// Rule 1 looks at components and routes, the only places a formatter call can
// render something. Rule 2 walks ALL of `src` (minus admin), because a
// pre-formatted date is a defect wherever it is stored.
const CALL_ROOTS = [
    path.join("src", "components"),
    path.join("src", "app", "[locale]"),
];
const LITERAL_ROOTS = ["src"];

const files = [];
for (const root of CALL_ROOTS) {
    walkFiles(root, isTsx, files);
}

const literalFiles = [];
for (const root of LITERAL_ROOTS) {
    walkFiles(root, isTsOrTsxSource, literalFiles);
}

const hits = [];
for (const file of files) {
    const src = fs.readFileSync(file, "utf8").replace(/^﻿/, "");
    const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true);

    const visit = (node) => {
        // `foo.toLocaleDateString()` / `foo.toLocaleDateString("en-US")` etc.
        if (
            ts.isCallExpression(node) &&
            ts.isPropertyAccessExpression(node.expression) &&
            LOCALE_METHOD_NAMES.has(node.expression.name.text)
        ) {
            const args = node.arguments;
            const noArgs = args.length === 0;
            const firstArgIsStringLiteral =
                args.length > 0 && ts.isStringLiteral(args[0]);

            if (noArgs || firstArgIsStringLiteral) {
                const { line } = ts.getLineAndCharacterOfPosition(
                    sf,
                    node.getStart(sf),
                );
                hits.push({
                    file,
                    line: line + 1,
                    text: node.getText(sf).replace(/\s+/g, " ").trim(),
                });
            }
        }

        // `new Intl.DateTimeFormat("en-US", ...)` / `new Intl.NumberFormat("en-IN")`
        if (
            ts.isNewExpression(node) &&
            ts.isPropertyAccessExpression(node.expression) &&
            ts.isIdentifier(node.expression.expression) &&
            node.expression.expression.text === "Intl" &&
            INTL_CONSTRUCTOR_NAMES.has(node.expression.name.text)
        ) {
            const args = node.arguments ?? [];
            const firstArgIsStringLiteral =
                args.length > 0 && ts.isStringLiteral(args[0]);

            if (firstArgIsStringLiteral) {
                const { line } = ts.getLineAndCharacterOfPosition(
                    sf,
                    node.getStart(sf),
                );
                hits.push({
                    file,
                    line: line + 1,
                    text: node.getText(sf).replace(/\s+/g, " ").trim(),
                });
            }
        }

        ts.forEachChild(node, visit);
    };
    ts.forEachChild(sf, visit);
}

// --------------------------------------------------------------------------
// Rule 2: pre-formatted English dates stored as literals.
// Only real text nodes are inspected - string literals, template literals
// (each span of an interpolated one included) and JSX text. Comments are
// trivia and never become nodes, so the warning comment in
// `src/data/blogs.data.ts` that quotes "July 16, 2026" as the thing NOT to do
// is correctly ignored, which a grep-based rule could not manage.
// --------------------------------------------------------------------------
const dateHits = [];
for (const file of literalFiles) {
    const src = fs.readFileSync(file, "utf8").replace(/^﻿/, "");
    const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true);

    const visit = (node) => {
        if (
            ts.isStringLiteral(node) ||
            ts.isNoSubstitutionTemplateLiteral(node) ||
            ts.isTemplateHead(node) ||
            ts.isTemplateMiddle(node) ||
            ts.isTemplateTail(node) ||
            ts.isJsxText(node)
        ) {
            const found = matchEnglishDate(node.text);
            if (found) {
                const { line } = ts.getLineAndCharacterOfPosition(
                    sf,
                    node.getStart(sf),
                );
                dateHits.push({ file, line: line + 1, text: found });
            }
        }
        ts.forEachChild(node, visit);
    };
    ts.forEachChild(sf, visit);
}

const rel = (p) => path.relative(process.cwd(), p);
const byFileThenLine = (a, b) =>
    a.file.localeCompare(b.file) || a.line - b.line;

hits.sort(byFileThenLine);
dateHits.sort(byFileThenLine);

for (const h of hits) {
    console.log(`${rel(h.file)}:${h.line} ${h.text}`);
}
console.log(`
${hits.length} hardcoded-locale date/number format(s)`);

for (const h of dateHits) {
    console.log(
        `${rel(h.file)}:${h.line} pre-formatted English date ${JSON.stringify(h.text)}`,
    );
}
console.log(
    `${dateHits.length} pre-formatted English date string(s) in src/ ` +
        "- store an ISO date and format it per locale at render time",
);

process.exit(hits.length + dateHits.length === 0 ? 0 : 1);
