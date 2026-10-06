// AST-based gate against locale-unaware programmatic navigation.
//
// Why this exists: `useRouter`, `redirect`, `usePathname` and `Link` from
// "next/navigation" / "next/link" are locale-UNAWARE. A `router.push("/cart")`
// or `redirect("/login")` built from those modules drops the active locale
// prefix, silently bouncing a non-English shopper back onto the English page.
// The project ships locale-aware equivalents from `src/i18n/navigation.ts`
// (built on `next-intl`'s `createNavigation`) that must be used instead for
// every in-scope component. This script parses the real TypeScript/JSX AST
// (the same approach as `scripts/i18n/find-untranslated.mjs`) rather than
// grepping import text, so it is not fooled by renamed imports, multi-name
// import lines, or incidental substring matches.
import ts from "typescript";
import fs from "node:fs";
import path from "node:path";

// Names whose import we care about. `useSearchParams` and `notFound` are
// locale-independent (they don't produce or consume a path) and are
// deliberately NOT in this set — they may keep coming from "next/navigation"
// anywhere in the tree.
const FLAGGED_NAMES = new Set(["useRouter", "redirect", "usePathname", "Link"]);
const FLAGGED_MODULES = new Set(["next/navigation", "next/link"]);

// Known, deliberate exceptions, each with a reason. Keep this list short —
// every entry is a place the gate will NOT catch a regression.
const ALLOW = [
    {
        file: "PageTransition.tsx",
        name: "usePathname",
        reason:
            "Keys page-transition animations on the FULL path including the " +
            "locale prefix, which is what it wants — see the comment in the file.",
    },
];

function isAllowed(filePath, name) {
    const base = path.basename(filePath);
    return ALLOW.some((entry) => entry.file === base && entry.name === name);
}

function walkFiles(dir, out = []) {
    if (!fs.existsSync(dir)) return out;
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
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

    for (const statement of sf.statements) {
        if (!ts.isImportDeclaration(statement)) continue;
        if (!ts.isStringLiteral(statement.moduleSpecifier)) continue;

        const moduleName = statement.moduleSpecifier.text;
        if (!FLAGGED_MODULES.has(moduleName)) continue;

        const clause = statement.importClause;
        if (!clause) continue;

        // Default import, e.g. `import Link from "next/link"`. The module's
        // only default export is the Link component, so any default import
        // from "next/link" IS the flagged name regardless of local alias.
        if (clause.name && moduleName === "next/link") {
            const name = "Link";
            if (!isAllowed(file, name)) {
                const { line } = ts.getLineAndCharacterOfPosition(
                    sf,
                    statement.getStart(sf),
                );
                hits.push({ file, line: line + 1, name });
            }
        }

        // Named imports, e.g. `import { useRouter, useSearchParams } from "next/navigation"`.
        if (clause.namedBindings && ts.isNamedImports(clause.namedBindings)) {
            for (const specifier of clause.namedBindings.elements) {
                const importedName = (specifier.propertyName ?? specifier.name).text;
                if (!FLAGGED_NAMES.has(importedName)) continue;
                if (isAllowed(file, importedName)) continue;

                const { line } = ts.getLineAndCharacterOfPosition(
                    sf,
                    specifier.getStart(sf),
                );
                hits.push({ file, line: line + 1, name: importedName });
            }
        }
    }
}

hits.sort((a, b) => a.file.localeCompare(b.file) || a.line - b.line);

for (const h of hits) {
    console.log(`${path.relative(process.cwd(), h.file)}:${h.line} ${h.name}`);
}
console.log(`\n${hits.length} locale-unaware navigation import(s)`);
process.exit(hits.length === 0 ? 0 : 1);
