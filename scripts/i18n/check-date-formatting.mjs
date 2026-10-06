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

function walkFiles(dir, out = []) {
    if (!fs.existsSync(dir)) return out;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        if (e.isDirectory() && SKIP_DIR_NAMES.has(e.name)) continue;
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walkFiles(p, out);
        else if (e.name.endsWith(".tsx")) out.push(p);
    }
    return out;
}

const ROOTS = [
    path.join("src", "components"),
    path.join("src", "app", "[locale]"),
];

const files = [];
for (const root of ROOTS) {
    walkFiles(root, files);
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

hits.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

for (const h of hits) {
    console.log(`${path.relative(process.cwd(), h.file)}:${h.line} ${h.text}`);
}
console.log(`\n${hits.length} hardcoded-locale date/number format(s)`);
process.exit(hits.length === 0 ? 0 : 1);
