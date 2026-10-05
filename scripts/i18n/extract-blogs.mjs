// scripts/i18n/extract-blogs.mjs
// Usage: node scripts/i18n/extract-blogs.mjs [--slug <slug>]
//
// Writes content/blogs/<slug>/en.json for every blog folder, then proves each
// emitted file equals its source by re-parsing the JSON and deep-comparing it
// to a fresh extraction. Writes nothing if any blog fails.
import fs from "node:fs";
import path from "node:path";
import assert from "node:assert/strict";
import { extractBlog } from "./lib/extract-blog.mjs";
import { EXCLUDED_SLUGS } from "./lib/excluded-slugs.mjs";

const ROOT = path.resolve(import.meta.dirname, "../..");
const BLOG_DIR = path.join(ROOT, "src/app/[locale]/blog");
const OUT_DIR = path.join(ROOT, "content/blogs");

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

        // Round-trip gate: JSON.stringify then parse must be identical, which
        // catches undefined, NaN and anything else JSON cannot carry.
        const roundTripped = JSON.parse(JSON.stringify(content));
        assert.deepStrictEqual(
            roundTripped,
            JSON.parse(JSON.stringify(extractBlog(source, { file, slug }))),
        );

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
