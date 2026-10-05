// AST-based detector for untranslated UI copy in .tsx files.
//
// Why this exists: a plain regex over source text (e.g. grepping for
// `"[A-Z]...` quoted literals) only catches strings in expression position —
// JSX attribute values, ternaries, prop values. It is blind to plain JSX
// text content between tags, which has no surrounding quotes at all (e.g.
// `<p>Sign in to see your account details here.</p>`), and to JSX text that
// wraps across multiple lines. Nine hardcoded strings in
// `src/components/layout` survived two rounds of regex-based review in
// Task 4 for exactly this reason before this tool caught them. Parsing the
// real TypeScript/JSX AST and inspecting `JsxText` nodes (plus known
// UI-bearing attributes) finds what regex cannot.
import ts from "typescript";
import fs from "node:fs";
import path from "node:path";

const UI_ATTRS = new Set(["aria-label","placeholder","alt","title","aria-description"]);

// Strings that are NOT translatable copy. Add entries with a reason.
const ALLOW = [
    /^Aurelia Royale$/, // brand name
];

function walkFiles(dir, out = []) {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const p = path.join(dir, e.name);
        if (e.isDirectory()) walkFiles(p, out);
        else if (e.name.endsWith(".tsx")) out.push(p);
    }
    return out;
}

const dirs = process.argv.slice(2);
if (dirs.length === 0) {
    console.error("usage: node scripts/i18n/find-untranslated.mjs <dir> [dir...]");
    process.exit(2);
}

const hits = [];
for (const dir of dirs) {
    for (const file of walkFiles(dir)) {
        const src = fs.readFileSync(file, "utf8").replace(/^﻿/, "");
        const sf = ts.createSourceFile(file, src, ts.ScriptTarget.Latest, true);
        const visit = (node) => {
            if (ts.isJsxText(node)) {
                const t = node.text.replace(/\s+/g, " ").trim();
                // Strip HTML entities first: the raw JsxText for `&amp;` is the
                // literal "&amp;", whose "amp" would otherwise look like a word.
                const words = t.replace(/&[a-zA-Z]+;|&#\d+;/g, "");
                if (words && /[A-Za-z]{2,}/.test(words) && !ALLOW.some((r) => r.test(t))) {
                    const { line } = ts.getLineAndCharacterOfPosition(sf, node.getStart(sf));
                    hits.push({ file, line: line + 1, kind: "jsx-text", text: t });
                }
            }
            if (
                ts.isJsxAttribute(node) &&
                UI_ATTRS.has(node.name.getText(sf)) &&
                node.initializer &&
                ts.isStringLiteral(node.initializer)
            ) {
                const t = node.initializer.text.trim();
                if (t && !ALLOW.some((r) => r.test(t))) {
                    const { line } = ts.getLineAndCharacterOfPosition(sf, node.getStart(sf));
                    hits.push({ file, line: line + 1, kind: "attr", text: t });
                }
            }
            ts.forEachChild(node, visit);
        };
        ts.forEachChild(sf, visit);
    }
}

for (const h of hits) {
    console.log(
        `${path.relative(process.cwd(), h.file)}:${h.line} [${h.kind}] ${JSON.stringify(h.text)}`,
    );
}
console.log(`\n${hits.length} untranslated string(s)`);
process.exit(hits.length === 0 ? 0 : 1);
