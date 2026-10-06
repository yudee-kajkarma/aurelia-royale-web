// Consistency gate for the six-language i18n rollout.
//
// Why this exists: Tasks 1-11 externalised every English string into
// messages/*.json (x6) and content/blogs/<slug>/en.json (x98). The OpenAI
// translation CLI (scripts/i18n/translate.mjs) that fills in the other five
// locales per blog has been built and dry-run-verified but not yet executed
// against the real API — so today, every blog has only en.json. This script
// is the gate that will prove the eventual translated output is structurally
// sound: same key shape as English everywhere, no unknown blog categories,
// no blog missing a blogCards entry, and no leftover "[MISSING:" placeholder
// text anywhere in a merged locale file.
//
// Two different kinds of problem come out of this today, and they are
// reported separately on purpose:
//   - "pending translation": a non-English content/blogs/<slug>/<locale>.json
//     file does not exist yet. Expected and harmless right now — Task 13 is
//     the translation run that creates these files. Once that run completes,
//     this count should go to zero on its own.
//   - "defect": anything else — a shape mismatch, an unknown category, a
//     missing blogCards entry, a missing messages/<locale>.json file, or a
//     literal "[MISSING:" marker. None of these are expected at any point;
//     a non-zero defect count is always a real bug to fix.
// Burying the (currently large, expected) pending count together with the
// (should-always-be-zero) defect count would make a future regression in the
// 1084 already-translated messages keys invisible in the noise, so they are
// tracked, printed, and gated separately below.
import fs from "node:fs";
import path from "node:path";
import { diffShape } from "./lib/shape.mjs";
import { BLOG_CATEGORY_LABELS } from "./lib/blog-categories.mjs";

const ROOT = path.resolve(import.meta.dirname, "../..");
const LOCALES = ["en", "fr", "it", "de", "nl", "es"];
const SOURCE = "en";

const pending = [];
const defects = [];
const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));
const rel = (p) => path.relative(ROOT, p).split(path.sep).join("/");

// --- 1. messages/*.json all share en's shape ---------------------------------
const enMessagesFile = path.join(ROOT, "messages/en.json");
const enMessages = readJson(enMessagesFile);
for (const locale of LOCALES.filter((l) => l !== SOURCE)) {
    const file = path.join(ROOT, `messages/${locale}.json`);
    if (!fs.existsSync(file)) {
        defects.push(`${rel(file)}: file is missing`);
        continue;
    }
    const { missing, extra } = diffShape(enMessages, readJson(file));
    for (const p of missing) defects.push(`${rel(file)}: missing key ${p}`);
    for (const p of extra) defects.push(`${rel(file)}: extra key ${p}`);
}

// --- 2. every blog has all six locales, each matching en's shape ------------
const blogsDir = path.join(ROOT, "content/blogs");
const slugs = fs.readdirSync(blogsDir).sort();

for (const slug of slugs) {
    const enFile = path.join(blogsDir, slug, "en.json");
    if (!fs.existsSync(enFile)) {
        defects.push(`content/blogs/${slug}: en.json is missing`);
        continue;
    }
    const source = readJson(enFile);

    // Category must be a known key, and that key must exist in the
    // blogCategories message namespace so every locale can render a label.
    if (!BLOG_CATEGORY_LABELS[source.category]) {
        defects.push(`content/blogs/${slug}/en.json: unknown category "${source.category}"`);
    }
    if (!enMessages.blogCategories?.[source.category]) {
        defects.push(
            `content/blogs/${slug}/en.json: category "${source.category}" not in messages/en.json blogCategories`,
        );
    }
    if (!enMessages.blogCards?.[slug]) {
        defects.push(`messages/en.json: no blogCards entry for "${slug}"`);
    }

    for (const locale of LOCALES.filter((l) => l !== SOURCE)) {
        const file = path.join(blogsDir, slug, `${locale}.json`);
        if (!fs.existsSync(file)) {
            pending.push(`content/blogs/${slug}/${locale}.json: not translated yet`);
            continue;
        }
        const { missing, extra } = diffShape(source, readJson(file));
        for (const p of missing)
            defects.push(`content/blogs/${slug}/${locale}.json: missing key ${p}`);
        for (const p of extra)
            defects.push(`content/blogs/${slug}/${locale}.json: extra key ${p}`);
    }
}

// --- 3. nothing anywhere contains a missing-message marker ------------------
for (const locale of LOCALES) {
    const file = path.join(ROOT, `messages/${locale}.json`);
    if (fs.existsSync(file) && fs.readFileSync(file, "utf8").includes("[MISSING:")) {
        defects.push(`${rel(file)}: contains a "[MISSING:" marker`);
    }
}
for (const slug of slugs) {
    for (const locale of LOCALES) {
        const file = path.join(blogsDir, slug, `${locale}.json`);
        if (fs.existsSync(file) && fs.readFileSync(file, "utf8").includes("[MISSING:")) {
            defects.push(`content/blogs/${slug}/${locale}.json: contains a "[MISSING:" marker`);
        }
    }
}

console.log(`checked ${slugs.length} blog(s) across ${LOCALES.length} locale(s)\n`);

console.log(`${pending.length} pending translation(s) (expected until the translation run)`);
for (const p of pending.slice(0, 50)) console.log(`  ${p}`);
if (pending.length > 50) console.log(`  ... and ${pending.length - 50} more`);

console.log(`\n${defects.length} defect(s)`);
for (const d of defects.slice(0, 50)) console.error(`  ${d}`);
if (defects.length > 50) console.error(`  ... and ${defects.length - 50} more`);

const total = pending.length + defects.length;
if (total > 0) {
    console.log(`\n${total} total problem(s): ${pending.length} pending, ${defects.length} defect(s)`);
    process.exit(1);
}
console.log("\ni18n check clean");
