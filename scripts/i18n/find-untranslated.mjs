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

/**
 * Does this literal look like user-facing copy rather than an enum or id?
 *
 * Expression position (ternaries, values inside `{...}`) also holds genuine
 * non-copy: payment-method enums sent to the backend ("ONLINE", "COD"),
 * status values compared with `===` ("success"), CSS values, etc. ALL-CAPS
 * strings are always an enum/id in this codebase, never prose, so they are
 * skipped outright. Otherwise treat it as copy if it starts with a capital
 * letter or contains a space — that is the shape of a sentence or label, not
 * a slug/id/CSS-value (those are lowercase, single "word" tokens like
 * "bracelets" or "red").
 */
function looksLikeCopy(text) {
    if (!/[a-z]/.test(text)) return false; // ALL-CAPS: enum value, e.g. "ONLINE"
    return /^[A-Z]/.test(text) || text.includes(" ");
}

/**
 * True for AST node kinds that mark "we have crossed into a different piece
 * of markup" while walking up from a string literal: a nested JSX
 * element/fragment, its own (unwrapped) attribute, or text. A literal whose
 * walk-up hits one of these before it hits a JsxExpression belongs to THAT
 * inner markup, not to the outer `{...}` the walk started under — e.g. a
 * plain `className="..."` on a `<strong>` nested inside `{items.map(...)}`
 * is not itself in expression position just because the whole `.map()` call
 * is. Without this stop, every literal anywhere inside any `.map()`/ternary
 * callback that returns JSX would spuriously inherit the outer JsxExpression
 * as an "ancestor", including every static className in the callback body.
 */
function isJsxBoundary(node) {
    return (
        ts.isJsxAttribute(node) ||
        ts.isJsxSpreadAttribute(node) ||
        ts.isJsxElement(node) ||
        ts.isJsxSelfClosingElement(node) ||
        ts.isJsxFragment(node) ||
        ts.isJsxOpeningElement(node) ||
        ts.isJsxOpeningFragment(node) ||
        ts.isJsxClosingElement(node) ||
        ts.isJsxClosingFragment(node) ||
        ts.isJsxText(node) ||
        // A `const x = ...;` or `x = "...";` inside a callback that happens
        // to return JSX (e.g. a precomputed className later passed on as
        // `className={x}`) is a separate statement, not a value positioned
        // directly in the `{...}` expression tree — stop here rather than
        // crediting it with whatever JsxExpression encloses the callback.
        ts.isVariableDeclaration(node) ||
        ts.isStatement(node)
    );
}

/**
 * Is this string literal an operand of a `===`/`!==` comparison, e.g.
 * `cat === "All"`? That is an enum/key match, never rendered copy, even when
 * the literal is capitalized or human-readable-looking (e.g. "All", a
 * category key compared before choosing the real translated label via
 * `t(cat)`).
 */
function isComparisonOperand(node) {
    const parent = node.parent;
    return (
        ts.isBinaryExpression(parent) &&
        (parent.operatorToken.kind === ts.SyntaxKind.EqualsEqualsEqualsToken ||
            parent.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsEqualsToken ||
            parent.operatorToken.kind === ts.SyntaxKind.EqualsEqualsToken ||
            parent.operatorToken.kind === ts.SyntaxKind.ExclamationEqualsToken)
    );
}

/**
 * The nearest enclosing JsxExpression, e.g. the `{...}` wrapping
 * `cond ? "a" : "b"`, or null if this node is not inside one (including when
 * it belongs to a different, inner piece of JSX markup — see isJsxBoundary).
 */
function enclosingJsxExpression(node) {
    let current = node.parent;
    while (current) {
        if (ts.isJsxExpression(current)) return current;
        if (isJsxBoundary(current)) return null;
        current = current.parent;
    }
    return null;
}

/**
 * A JsxExpression bound to a JsxAttribute (`attr={...}`) carries that
 * attribute's name; a JsxExpression used as element children (`<p>{...}</p>`)
 * does not. Only a handful of attributes ever hold user-facing text — the
 * same UI_ATTRS the plain-literal attr collector already trusts. A string
 * literal inside `className={cond ? "a" : "b"}`, `href={... : "/shop"}`, or
 * `value={... : "ONLINE"}` is Tailwind/routing/enum data, not copy, no matter
 * how prose-shaped the literal looks (e.g. a class string with spaces like
 * "mt-4 text-lg font-light").
 */
function isNonCopyAttributeExpression(jsxExpr) {
    const parent = jsxExpr.parent;
    return ts.isJsxAttribute(parent) && !UI_ATTRS.has(parent.name.getText());
}

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
            // String literals in EXPRESSION position: ternaries, nullish
            // coalescing, and other values rendered inside `{...}` (JSX
            // children or attribute values). A plain `attr="..."` initializer
            // is a StringLiteral directly on the JsxAttribute with no
            // JsxExpression wrapper, so it is handled above, not here.
            if (ts.isStringLiteral(node) && !isComparisonOperand(node)) {
                const jsxExpr = enclosingJsxExpression(node);
                if (jsxExpr && !isNonCopyAttributeExpression(jsxExpr)) {
                    const t = node.text.trim();
                    if (t && looksLikeCopy(t) && !ALLOW.some((r) => r.test(t))) {
                        const { line } = ts.getLineAndCharacterOfPosition(sf, node.getStart(sf));
                        hits.push({ file, line: line + 1, kind: "jsx-expr", text: t });
                    }
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
