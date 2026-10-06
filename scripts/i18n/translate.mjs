#!/usr/bin/env node
/**
 * Machine translation for next-intl message namespaces AND per-blog content
 * files, with terminology locked to the wording the site already uses.
 *
 *   node scripts/i18n/translate.mjs models
 *   node scripts/i18n/translate.mjs terms "tennis bracelet"
 *   node scripts/i18n/translate.mjs translate <namespace> [--locales nl,fr] [--force] [--dry]
 *   node scripts/i18n/translate.mjs translate blogs/<slug> [--locales nl,fr] [--force] [--dry]
 *   node scripts/i18n/translate.mjs translate blogs --all [--force] [--dry]
 *   node scripts/i18n/translate.mjs check [namespace]
 *   node scripts/i18n/translate.mjs merge <namespace> --after <existingKey>
 *   node scripts/i18n/translate.mjs merge blogs/<slug>
 *
 * Design notes
 * ------------
 * Translation never asks the model to reproduce the JSON tree. The tree is
 * walked locally (scripts/i18n/lib/leaves.mjs), translatable leaves are pulled
 * into a flat {id: string} map, only that map round-trips through the API,
 * and the results are written back to the exact same paths. Structure, key
 * order, `type` discriminators, hrefs, callout themes, etc. therefore cannot
 * drift no matter what the model returns.
 *
 * Two stores:
 *   - namespace mode:  messages/en.json -> messages/<locale>.json
 *                      staged at scripts/i18n/staging/<locale>/<namespace>.json
 *   - blog file mode:  content/blogs/<slug>/en.json -> content/blogs/<slug>/<locale>.json
 *                      staged at scripts/i18n/staging/<locale>/blogs/<slug>.json
 * A target of the form "blogs/<slug>" selects file mode; anything else is a
 * namespace inside messages/*.json.
 *
 * `merge` is a separate, deliberate step — nothing touches messages/*.json or
 * content/blogs/**\/<locale>.json until a human has looked at the staged
 * files. Namespace merges need `--after <key>` to place the key inside the
 * shared messages monolith; per-blog files have no such ordering problem
 * (each blog is its own file) so blog merges need no anchor.
 *
 * No API key is required for `--dry`. `requireKey()` (and therefore any
 * network call) is only reached from `translateBatch()` and from `models` —
 * never from argument parsing, env loading, or the dry-run code path — so
 * `translate <target> --dry` and `translate blogs --all --dry` both run with
 * no OPENAI_API_KEY set at all. This is deliberate: a dry run is documented
 * as free and must be runnable by anyone, including before the API key for
 * the paid run exists.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { collectAll, collectLeaves, setAtPath } from "./lib/leaves.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "../..");
const MESSAGES = path.join(ROOT, "messages");
const BLOGS_DIR = path.join(ROOT, "content/blogs");
const STAGING = path.join(HERE, "staging");
const GLOSSARY_PATH = path.join(HERE, "glossary.json");

const SOURCE_LOCALE = "en";
const TARGET_LOCALES = ["fr", "it", "de", "nl", "es"];
const LOCALE_NAMES = {
    fr: "French",
    it: "Italian",
    de: "German",
    nl: "Dutch",
    es: "Spanish",
};

/* Keys whose values are never sent to the model, and the NON_PROSE value
   shapes, now live in ./lib/leaves.mjs so they are unit-tested in isolation
   (see lib/leaves.test.mjs). collectAll()/collectLeaves() there are the only
   things this file uses to decide what is and isn't sent to the model. */

const BATCH_CHARS = 6000;
const BATCH_ITEMS = 50;
const CONCURRENCY = 4;
const MAX_ATTEMPTS = 3;

/* Review Focus 1: these keys must NEVER reach the model. collectLeaves()
   already filters them out via PROTECTED_KEYS, so under correct code this
   set is always empty — it exists as a hard, fail-the-run assertion against
   a future regression (e.g. someone trims PROTECTED_KEYS), not as the first
   line of defense. */
const REVIEW_FOCUS_1_KEYS = ["theme", "shopHref", "contactHref", "category", "siteName"];

// ---------------------------------------------------------------- utilities

const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

/** messages/*.json in this repo are LF, 2-space, trailing newline. */
const writeMessages = (locale, obj) =>
    fs.writeFileSync(path.join(MESSAGES, `${locale}.json`), JSON.stringify(obj, null, 2) + "\n", "utf8");

/** content/blogs/<slug>/en.json are LF, 2-space, trailing newline — match it. */
const writeBlogLocale = (slug, locale, obj) =>
    fs.writeFileSync(path.join(BLOGS_DIR, slug, `${locale}.json`), JSON.stringify(obj, null, 2) + "\n", "utf8");

/** Minimal .env reader — the repo has no dotenv dependency. */
function loadEnv() {
    for (const name of [".env.local", ".env"]) {
        const file = path.join(ROOT, name);
        if (!fs.existsSync(file)) continue;
        for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
            const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
            if (!m) continue;
            const value = m[2].replace(/^["']|["']$/g, "");
            if (!process.env[m[1]]) process.env[m[1]] = value;
        }
    }
}

/**
 * Lazy by construction: only called from inside openai() (i.e. from
 * translateBatch, i.e. from a real — non-dry — translate run) and from the
 * `models` command, which inherently needs a key. Nothing on the `--dry`
 * path, argument parsing, or module load calls this.
 */
function requireKey() {
    loadEnv();
    const key = process.env.OPENAI_API_KEY;
    if (!key) {
        console.error(
            "OPENAI_API_KEY is not set.\n" +
                "This command needs a real OpenAI API key (not required for `--dry` runs).\n" +
                "Add it to .env.local in the project root (already covered by the .env* rule in .gitignore):\n" +
                "  OPENAI_API_KEY=sk-...\n" +
                "  OPENAI_MODEL=<model id>            # see `node scripts/i18n/translate.mjs models`"
        );
        process.exit(1);
    }
    return key;
}

/**
 * Resolve a dotted namespace like "BlogsPage.posts.93" to the object that
 * holds it. Top-level namespaces are just the one-segment case, so both
 * commands can treat nested message groups exactly like top-level ones.
 */
function resolveNamespace(root, dotted) {
    const parts = dotted.split(".");
    let parent = root;
    for (const step of parts.slice(0, -1)) {
        if (parent[step] === undefined) return { parent: null, key: null, value: undefined };
        parent = parent[step];
    }
    const key = parts[parts.length - 1];
    return { parent, key, value: parent?.[key] };
}

/** Every leaf path in an object, for shape comparison. */
function keyPaths(value, prefix = "") {
    if (Array.isArray(value)) return value.flatMap((v, i) => keyPaths(v, `${prefix}[${i}]`));
    if (value && typeof value === "object")
        return Object.entries(value).flatMap(([k, v]) => keyPaths(v, prefix ? `${prefix}.${k}` : k));
    return [prefix];
}

async function pool(items, limit, worker) {
    const results = new Array(items.length);
    let cursor = 0;
    const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
        while (cursor < items.length) {
            const i = cursor++;
            results[i] = await worker(items[i], i);
        }
    });
    await Promise.all(runners);
    return results;
}

// ------------------------------------------------------------ target stores

/**
 * A target is either a messages/*.json namespace (anything that does not
 * start with "blogs/") or a per-blog file ("blogs/<slug>"). Both halves of
 * the CLI (translate, merge) resolve the target once, up front, into this
 * shape, so the rest of the logic does not care which store it is talking to.
 */
function resolveTarget(target) {
    if (target.startsWith("blogs/")) {
        const slug = target.slice("blogs/".length);
        if (!slug) throw new Error("usage: translate blogs/<slug>  (or: translate blogs --all)");
        return {
            kind: "blog",
            slug,
            label: `blogs/${slug}`,
            sourcePath: path.join(BLOGS_DIR, slug, "en.json"),
            stagingPath: (locale) => path.join(STAGING, locale, "blogs", `${slug}.json`),
            mergedPath: (locale) => path.join(BLOGS_DIR, slug, `${locale}.json`),
        };
    }
    return {
        kind: "namespace",
        namespace: target,
        label: target,
        stagingPath: (locale) => path.join(STAGING, locale, `${target}.json`),
    };
}

function loadSource(resolved) {
    if (resolved.kind === "blog") {
        if (!fs.existsSync(resolved.sourcePath)) {
            throw new Error(`no such blog source: ${path.relative(ROOT, resolved.sourcePath)}`);
        }
        return readJson(resolved.sourcePath);
    }
    const en = readJson(path.join(MESSAGES, "en.json"));
    const { value } = resolveNamespace(en, resolved.namespace);
    if (!value) throw new Error(`messages/en.json has no namespace "${resolved.namespace}"`);
    return value;
}

// -------------------------------------------------------------- openai calls

async function openai(pathname, body, { method = "POST" } = {}) {
    const key = requireKey();
    const base = process.env.OPENAI_BASE_URL || "https://api.openai.com/v1";
    const res = await fetch(`${base}${pathname}`, {
        method,
        headers: {
            Authorization: `Bearer ${key}`,
            "Content-Type": "application/json",
        },
        body: body ? JSON.stringify(body) : undefined,
    });
    if (!res.ok) {
        const text = await res.text();
        throw new Error(`OpenAI ${res.status} ${res.statusText}: ${text.slice(0, 600)}`);
    }
    return res.json();
}

function model() {
    const m = process.env.OPENAI_MODEL;
    if (!m) {
        console.error(
            "OPENAI_MODEL is not set. Run `node scripts/i18n/translate.mjs models`\n" +
                "to list the model ids your account can actually reach, then add the exact\n" +
                "id to .env.local as OPENAI_MODEL=<id>. There is no default on purpose — a\n" +
                "wrong model name must fail before a paid run, not during one."
        );
        process.exit(1);
    }
    return m;
}

// ------------------------------------------------------------------ prompting

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Whole-word containment. Substring matching would fire "cut" inside "execute"
 * and "carat" inside "caratage", producing bogus glossary rules and warnings.
 */
function hasTerm(text, term) {
    return new RegExp(`(^|[^\\p{L}])${escapeRe(term)}([^\\p{L}]|$)`, "iu").test(text);
}

/**
 * Same, but tolerating a regular English plural. Without this, "retailers" and
 * "suppliers" never match their singular glossary entries and the terminology
 * rules silently fail to apply to most real sentences.
 */
function hasSourceTerm(text, term) {
    return new RegExp(`(^|[^\\p{L}])${escapeRe(term)}s?([^\\p{L}]|$)`, "iu").test(text);
}

function glossaryFor(locale, glossary, sourceText) {
    // Only include terms that actually occur in this batch, so the prompt stays
    // focused instead of carrying dozens of irrelevant rules.
    const rows = [];
    for (const entry of glossary.terms) {
        if (!hasSourceTerm(sourceText, entry.en)) continue;
        const target = entry[locale];
        if (!target) continue;
        const avoid = entry.avoid?.[locale];
        rows.push(
            `- "${entry.en}" -> "${target}"` +
                (avoid?.length ? ` (never: ${avoid.map((a) => `"${a}"`).join(", ")})` : "")
        );
    }
    return rows;
}

function systemPrompt(locale, glossaryRows, keepVerbatim) {
    return [
        `You are a professional translator localising website copy for Aurelia Royale,`,
        `a fine lab-grown diamond jewellery brand, from English into ${LOCALE_NAMES[locale]}.`,
        ``,
        `You receive a JSON object mapping string ids to English strings. Return a JSON`,
        `object with EXACTLY the same ids, where each value is the translation.`,
        `Return nothing but that JSON object.`,
        ``,
        `Rules:`,
        `1. Translate every string. Never merge, split, reorder or drop ids.`,
        `2. Register: professional, warm retail/marketing prose. Match the source`,
        `   tone; do not add enthusiasm, marketing filler, or new claims.`,
        `3. Keep markdown links intact: in "[label](target)" translate only the label`,
        `   text and reproduce "(target)" character for character.`,
        `4. Reproduce verbatim, untranslated: brand names (Aurelia Royale, Aurelia),`,
        `   laboratory names (GIA, IGI, HRD), proper nouns, product codes, prices,`,
        `   measurements, times and dates in numeric form.`,
        `5. Do not translate text inside quotation marks that names a product or SKU.`,
        `6. Preserve the source's typographic characters (curly apostrophes, en dashes).`,
        `7. Never output placeholder text, notes, or explanations.`,
        glossaryRows.length
            ? `\nRequired terminology — use these renderings exactly, including inflected forms:\n${glossaryRows.join("\n")}`
            : ``,
        keepVerbatim.length
            ? `\nThese tokens appear in the source and must appear unchanged in your output:\n${keepVerbatim.map((t) => `- ${t}`).join("\n")}`
            : ``,
    ]
        .filter(Boolean)
        .join("\n");
}

/** Tokens that must survive translation untouched. */
function verbatimTokens(strings) {
    const found = new Set();
    const patterns = [
        /\b[A-Z]{2,5}\d{0,3}\b/g, // GIA, IGI, HRD, B41, SKU-ish
        /\b[A-Z]{1,2}\d{1,2}\s?\d?[A-Z]{2}\b/g, // postcode-shaped tokens
        /\b\d{2}:\d{2}\b/g, // times
    ];
    // Acronyms that legitimately localise (ID -> pièce d'identité, VAT -> TVA)
    // would otherwise flag on every locale, drowning the real signal.
    const STOPWORDS = new Set(["I", "A", "THE", "UK", "AI", "OK", "ID", "VAT", "B2B", "EU"]);
    for (const s of strings) {
        for (const re of patterns) {
            for (const m of s.match(re) || []) {
                if (!STOPWORDS.has(m)) found.add(m);
            }
        }
    }
    return [...found];
}

async function translateBatch(locale, batch, glossary) {
    const payload = Object.fromEntries(batch.map((l, i) => [String(i), l.value]));
    const joined = batch.map((l) => l.value).join("\n");
    const rows = glossaryFor(locale, glossary, joined);
    const keep = verbatimTokens(batch.map((l) => l.value));

    let lastError;
    for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        try {
            const res = await openai("/chat/completions", {
                model: model(),
                messages: [
                    { role: "system", content: systemPrompt(locale, rows, keep) },
                    { role: "user", content: JSON.stringify(payload) },
                ],
                response_format: { type: "json_object" },
            });

            const raw = res.choices?.[0]?.message?.content ?? "";
            const jsonText = raw.trim().startsWith("{")
                ? raw.trim()
                : raw.slice(raw.indexOf("{"), raw.lastIndexOf("}") + 1);
            const parsed = JSON.parse(jsonText);

            const missing = Object.keys(payload).filter(
                (k) => typeof parsed[k] !== "string" || !parsed[k].trim()
            );
            if (missing.length) {
                throw new Error(`model omitted ids: ${missing.slice(0, 8).join(", ")}`);
            }
            return batch.map((leaf, i) => ({ ...leaf, translated: parsed[String(i)] }));
        } catch (err) {
            lastError = err;
            if (attempt < MAX_ATTEMPTS) {
                await new Promise((r) => setTimeout(r, 800 * attempt));
            }
        }
    }
    throw new Error(`[${locale}] batch failed after ${MAX_ATTEMPTS} attempts: ${lastError.message}`);
}

// ------------------------------------------------------------------ validation

const linkTargets = (s) => [...s.matchAll(/\]\(([^)]+)\)/g)].map((m) => m[1]);

function validate(locale, leaves, source, translated, glossary) {
    const problems = [];

    const srcPaths = keyPaths(source).sort();
    const outPaths = keyPaths(translated).sort();
    if (JSON.stringify(srcPaths) !== JSON.stringify(outPaths)) {
        problems.push({ kind: "shape", detail: "translated tree shape differs from source" });
    }

    for (const leaf of leaves) {
        const where = leaf.path.join(".");
        const src = leaf.value;
        const out = leaf.translated;

        const a = linkTargets(src);
        const b = linkTargets(out);
        if (JSON.stringify(a) !== JSON.stringify(b)) {
            problems.push({
                kind: "link",
                where,
                detail: `link targets changed: ${JSON.stringify(a)} -> ${JSON.stringify(b)}`,
            });
        }

        for (const token of verbatimTokens([src])) {
            if (!out.includes(token)) {
                problems.push({ kind: "token", where, detail: `lost "${token}"` });
            }
        }

        if (out.trim() === src.trim() && src.split(/\s+/).length > 6) {
            problems.push({ kind: "untranslated", where, detail: src.slice(0, 70) });
        }

        // The shipped copy uses curly apostrophes; a straight one is a visible
        // inconsistency in rendered text.
        if (/\p{L}'\p{L}/u.test(out)) {
            problems.push({
                kind: "typography",
                where,
                detail: `straight apostrophe in ${out.match(/\p{L}*'\p{L}*/u)[0]}`,
            });
        }

        for (const entry of glossary.terms) {
            for (const bad of entry.avoid?.[locale] || []) {
                if (hasTerm(out, bad)) {
                    problems.push({
                        kind: "glossary",
                        where,
                        detail: `used "${bad}", expected "${entry[locale]}"`,
                    });
                }
            }
            // Advisory only: the stem test cannot model every inflection, so a
            // hit here means "read this one", not "this is wrong".
            const stem = entry[locale]?.toLowerCase().slice(0, 6);
            if (entry[locale] && hasSourceTerm(src, entry.en) && !out.toLowerCase().includes(stem)) {
                problems.push({
                    kind: "glossary-miss",
                    where,
                    detail: `source has "${entry.en}" but output lacks "${entry[locale]}"`,
                });
            }
        }
    }
    return problems;
}

/** Review Focus 1: never let a protected value slip into the translatable set. */
const reviewFocus1Leaks = (leaves) => leaves.filter((l) => REVIEW_FOCUS_1_KEYS.includes(l.key));

function reportReviewFocus1(label, leaked) {
    console.error(`REVIEW FOCUS 1 FAILURE in ${label}: ${leaked.length} protected value(s) leaked into the translatable set:`);
    for (const l of leaked) console.error(`   ${l.path.join(".")} (key: ${l.key}) = ${JSON.stringify(l.value)}`);
}

// ---------------------------------------------------------- batching/cost estimate

function toBatches(leaves) {
    const batches = [];
    let current = [];
    let size = 0;
    for (const leaf of leaves) {
        if (current.length && (size + leaf.value.length > BATCH_CHARS || current.length >= BATCH_ITEMS)) {
            batches.push(current);
            current = [];
            size = 0;
        }
        current.push(leaf);
        size += leaf.value.length;
    }
    if (current.length) batches.push(current);
    return batches;
}

/**
 * Rough, model-agnostic cost estimate for the dry run. A dry run has no
 * OPENAI_MODEL (it may run with no key at all), so this cannot price the
 * actual model that will eventually be used — it exists only as an
 * order-of-magnitude sanity check, not a quote. ~4 chars/token is a standard
 * approximation for Latin-script prose; the per-locale multiplier reflects
 * that the same source leaves are sent once per target locale; output is
 * assumed comparable in length to input. Recalibrate against the real
 * OPENAI_MODEL price list before relying on this for a paid run.
 */
function estimateCost(totalChars, localeCount = TARGET_LOCALES.length) {
    const CHARS_PER_TOKEN = 4;
    const USD_PER_1M_INPUT = 0.15;
    const USD_PER_1M_OUTPUT = 0.6;
    const inputTokens = (totalChars / CHARS_PER_TOKEN) * localeCount;
    const outputTokens = inputTokens; // translated text ~ similar length to source
    const usd = (inputTokens / 1_000_000) * USD_PER_1M_INPUT + (outputTokens / 1_000_000) * USD_PER_1M_OUTPUT;
    return { inputTokens, outputTokens, usd };
}

// -------------------------------------------------------------------- commands

async function cmdModels() {
    requireKey();
    const res = await openai("/models", null, { method: "GET" });
    const ids = res.data.map((m) => m.id).sort();
    console.log(`${ids.length} models available to this key:\n`);
    for (const id of ids) console.log("  " + id);
    console.log(`\nSet the one you want in .env.local:  OPENAI_MODEL=<id>`);
}

/**
 * Show how an English term is currently rendered in each locale, by looking up
 * the same key paths in every message file. Used to author glossary entries
 * from what the site already says rather than from guesswork.
 */
function cmdTerms(term) {
    if (!term) throw new Error('usage: terms "engagement ring"');
    const needle = term.toLowerCase();
    const en = readJson(path.join(MESSAGES, "en.json"));
    const hits = collectLeaves(en).filter((l) => String(l.value).toLowerCase().includes(needle));
    console.log(`"${term}" — ${hits.length} English strings contain it\n`);
    if (!hits.length) return;

    const sample = hits.slice(0, 12);
    for (const locale of TARGET_LOCALES) {
        const msgs = readJson(path.join(MESSAGES, `${locale}.json`));
        const counts = new Map();
        for (const hit of sample) {
            let node = msgs;
            for (const step of hit.path) {
                node = node?.[step];
                if (node === undefined) break;
            }
            if (typeof node !== "string") continue;
            counts.set(node, (counts.get(node) || 0) + 1);
        }
        console.log(`== ${locale}`);
        for (const [text] of [...counts].slice(0, 4)) {
            console.log("   " + text.slice(0, 150));
        }
        console.log();
    }
}

function cmdCheck(namespaceFilter) {
    const glossary = readJson(GLOSSARY_PATH);
    let total = 0;
    for (const locale of TARGET_LOCALES) {
        const msgs = readJson(path.join(MESSAGES, `${locale}.json`));
        const scope = namespaceFilter ? { [namespaceFilter]: msgs[namespaceFilter] } : msgs;
        if (namespaceFilter && !msgs[namespaceFilter]) {
            console.log(`${locale}: namespace ${namespaceFilter} missing`);
            continue;
        }
        const found = [];
        for (const leaf of collectLeaves(scope)) {
            for (const entry of glossary.terms) {
                for (const bad of entry.avoid?.[locale] || []) {
                    if (hasTerm(String(leaf.value), bad)) {
                        found.push(`  ${leaf.path.join(".")}\n     used "${bad}" — house term is "${entry[locale]}"`);
                    }
                }
            }
        }
        total += found.length;
        console.log(`== ${locale}: ${found.length} glossary violation(s)`);
        found.slice(0, 25).forEach((f) => console.log(f));
    }
    console.log(`\ntotal violations: ${total}`);
    if (total) process.exitCode = 1;
}

/**
 * Translate (or dry-run) one resolved target into every requested locale,
 * staging results under scripts/i18n/staging/. Shared by the single-target
 * `translate <target>` command and by the per-blog loop in `translate blogs
 * --all` — both need identical batching, review-focus enforcement and
 * validation, differing only in how much they print per call.
 */
async function translateTarget(resolved, source, opts, glossary, { quiet = false } = {}) {
    const locales = opts.locales ?? TARGET_LOCALES;
    const leaves = collectLeaves(source);
    const chars = leaves.reduce((n, l) => n + l.value.length, 0);
    const heldBack = collectAll(source).filter((l) => !l.translatable);

    // Review Focus 1: hard assertion, dry or real, single target or batch.
    const leaked = reviewFocus1Leaks(leaves);
    if (leaked.length) {
        reportReviewFocus1(resolved.label, leaked);
        throw new Error(
            `Review Focus 1 assertion failed for ${resolved.label} — a protected key leaked into the ` +
                `translatable set. Fix PROTECTED_KEYS in scripts/i18n/lib/leaves.mjs. Content is never the fix.`
        );
    }

    if (!quiet) {
        console.log(
            `${resolved.label}: ${leaves.length} translatable strings, ${chars.toLocaleString()} chars ` +
                `-> ${locales.join(", ")}${opts.dry ? " (DRY RUN)" : ` using ${model()}`}\n`
        );
    }

    if (opts.dry) {
        if (!quiet) {
            // Prove the protection logic without spending anything: everything the
            // walker held back is listed so key leakage is visible at a glance.
            console.log(`held back (never sent to the model): ${heldBack.length}`);
            const bySkipKey = {};
            for (const l of heldBack) bySkipKey[l.key] = (bySkipKey[l.key] || 0) + 1;
            console.log("  " + JSON.stringify(bySkipKey));
            const sampleSkipped = [...new Set(heldBack.map((l) => `${l.key}=${l.value}`))].slice(0, 6);
            console.log("  e.g. " + sampleSkipped.join(", "));
            const rows = glossaryFor(locales[0], glossary, leaves.map((l) => l.value).join("\n"));
            console.log(`\nglossary rules that would apply for ${locales[0]}: ${rows.length}`);
            rows.slice(0, 10).forEach((r) => console.log("  " + r));
            console.log(
                `\nverbatim tokens detected: ${verbatimTokens(leaves.map((l) => l.value)).join(", ") || "none"}`
            );
        }
        return { leaves, chars, heldBack, wrote: [] };
    }

    const batches = toBatches(leaves);
    const wrote = [];

    for (const locale of locales) {
        const outFile = resolved.stagingPath(locale);
        if (fs.existsSync(outFile) && !opts.force) {
            if (!quiet) console.log(`${locale}: staged file exists, skipping (use --force to redo)`);
            continue;
        }

        const done = await pool(batches, CONCURRENCY, (batch) => translateBatch(locale, batch, glossary));
        const flat = done.flat();

        const translated = JSON.parse(JSON.stringify(source));
        for (const leaf of flat) setAtPath(translated, leaf.path, leaf.translated);

        const problems = validate(locale, flat, source, translated, glossary);

        fs.mkdirSync(path.dirname(outFile), { recursive: true });
        fs.writeFileSync(outFile, JSON.stringify(translated, null, 2) + "\n", "utf8");
        wrote.push({ locale, problems });

        if (!quiet) {
            const byKind = problems.reduce((acc, p) => {
                acc[p.kind] = (acc[p.kind] || 0) + 1;
                return acc;
            }, {});
            console.log(
                `${locale}: wrote ${path.relative(ROOT, outFile)} — ` +
                    (problems.length ? `${problems.length} flag(s) ${JSON.stringify(byKind)}` : "clean")
            );
            for (const p of problems.slice(0, 12)) {
                console.log(`   [${p.kind}] ${p.where ?? ""} ${p.detail}`);
            }
            if (problems.length > 12) console.log(`   …${problems.length - 12} more`);
        }
    }

    return { leaves, chars, heldBack, wrote };
}

async function cmdTranslate(target, opts) {
    if (!target) {
        throw new Error("usage: translate <namespace> | translate blogs/<slug> | translate blogs --all");
    }

    if (target === "blogs" && opts.all) {
        return cmdTranslateAllBlogs(opts);
    }
    if (target === "blogs") {
        throw new Error("usage: translate blogs/<slug>  (or: translate blogs --all)");
    }

    const glossary = readJson(GLOSSARY_PATH);
    const resolved = resolveTarget(target);
    const source = loadSource(resolved);

    await translateTarget(resolved, source, opts, glossary);

    if (!opts.dry) {
        const mergeHint =
            resolved.kind === "blog"
                ? `  node scripts/i18n/translate.mjs merge ${resolved.label}`
                : `  node scripts/i18n/translate.mjs merge ${resolved.label} --after <existingKey>`;
        console.log(`\nReview the staged files, then merge with:\n${mergeHint}`);
    }
}

/**
 * `translate blogs --all` — iterate every directory in content/blogs/,
 * skipping blogs already fully staged for every requested locale so an
 * interrupted run resumes without re-spending, and printing per-blog
 * progress plus a running character count and a rough estimated cost.
 */
async function cmdTranslateAllBlogs(opts) {
    const glossary = readJson(GLOSSARY_PATH);
    const locales = opts.locales ?? TARGET_LOCALES;
    const slugs = fs
        .readdirSync(BLOGS_DIR, { withFileTypes: true })
        .filter((d) => d.isDirectory())
        .map((d) => d.name)
        .sort();

    console.log(
        `translate blogs --all: ${slugs.length} blogs -> ${locales.join(", ")}` +
            `${opts.dry ? " (DRY RUN)" : ""}\n`
    );

    let totalChars = 0;
    let translatableCount = 0;
    let heldBackCount = 0;
    let doneCount = 0;
    let skippedCount = 0;
    const reviewFocusFailures = [];

    for (let i = 0; i < slugs.length; i++) {
        const slug = slugs[i];
        const progress = `[${i + 1}/${slugs.length}]`;
        const resolved = resolveTarget(`blogs/${slug}`);

        if (!fs.existsSync(resolved.sourcePath)) {
            console.log(`${progress} ${slug}: no en.json — skipping`);
            continue;
        }

        if (!opts.dry && !opts.force && locales.every((l) => fs.existsSync(resolved.stagingPath(l)))) {
            skippedCount++;
            console.log(`${progress} ${slug}: already staged for ${locales.join(", ")} — skipping`);
            continue;
        }

        const source = readJson(resolved.sourcePath);
        let result;
        try {
            result = await translateTarget(resolved, source, opts, glossary, { quiet: true });
        } catch (err) {
            if (/Review Focus 1/.test(err.message)) {
                const leaves = collectLeaves(source);
                reviewFocusFailures.push({ slug, leaked: reviewFocus1Leaks(leaves) });
                console.log(`${progress} ${slug}: REVIEW FOCUS 1 FAILURE — see summary below`);
                continue; // keep scanning the rest for a full picture
            }
            throw err;
        }

        doneCount++;
        totalChars += result.chars;
        translatableCount += result.leaves.length;
        heldBackCount += result.heldBack.length;
        const est = estimateCost(totalChars, locales.length);

        console.log(
            `${progress} ${slug}: ${result.leaves.length} translatable, ${result.heldBack.length} held back, ` +
                `${result.chars.toLocaleString()} chars` +
                ` (running total ${totalChars.toLocaleString()} chars, ~$${est.usd.toFixed(2)} est.)`
        );
    }

    console.log(
        `\n${doneCount} blog(s) processed, ${skippedCount} already staged, ${slugs.length} total.\n` +
            `TOTAL characters: ${totalChars.toLocaleString()} ` +
            `(${translatableCount.toLocaleString()} translatable strings, ${heldBackCount.toLocaleString()} held back)`
    );
    const est = estimateCost(totalChars, locales.length);
    console.log(
        `Estimated cost across ${locales.length} locale(s) (rough order-of-magnitude, ` +
            `~4 chars/token, placeholder $${0.15}/$${0.6} per 1M input/output tokens — recalibrate against ` +
            `the real OPENAI_MODEL price before a paid run): ~$${est.usd.toFixed(2)}`
    );

    if (reviewFocusFailures.length) {
        console.error(`\nREVIEW FOCUS 1: ${reviewFocusFailures.length} blog(s) leaked a protected value:`);
        for (const f of reviewFocusFailures) {
            reportReviewFocus1(f.slug, f.leaked);
        }
        throw new Error("Review Focus 1 assertion failed for one or more blogs — fix PROTECTED_KEYS before any paid run");
    }

    if (!opts.dry) {
        console.log(
            `\nReview the staged files, then merge each blog with:\n` +
                `  node scripts/i18n/translate.mjs merge blogs/<slug>`
        );
    }
}

function mergeNamespace(resolved, locales, anchor) {
    // Default is the five targets; pass --locales en to seed a freshly authored
    // English namespace from staging/en/<namespace>.json first.
    const englishSource = locales.includes(SOURCE_LOCALE)
        ? readJson(path.join(STAGING, SOURCE_LOCALE, `${resolved.namespace}.json`))
        : resolveNamespace(readJson(path.join(MESSAGES, "en.json")), resolved.namespace).value;
    if (!englishSource) throw new Error(`no English source for ${resolved.namespace}`);
    const shape = keyPaths(englishSource).sort();

    for (const locale of locales) {
        const data = readJson(resolved.stagingPath(locale));
        const got = keyPaths(data).sort();
        if (JSON.stringify(got) !== JSON.stringify(shape)) {
            throw new Error(`${locale}: staged shape differs from en — refusing to merge`);
        }
    }

    for (const locale of locales) {
        const file = path.join(MESSAGES, `${locale}.json`);
        const msgs = readJson(file);
        const { parent, key: leafKey } = resolveNamespace(msgs, resolved.namespace);
        if (!parent) throw new Error(`${locale}: parent of "${resolved.namespace}" does not exist`);
        if (!(anchor in parent)) {
            throw new Error(`${locale}: anchor key "${anchor}" not found beside ${resolved.namespace}`);
        }

        const data = readJson(resolved.stagingPath(locale));
        const keys = Object.keys(parent).filter((k) => k !== leafKey);
        const at = keys.indexOf(anchor);
        const ordered = [...keys.slice(0, at + 1), leafKey, ...keys.slice(at + 1)];

        const merged = { ...parent, [leafKey]: data };
        const rebuilt = {};
        for (const k of ordered) rebuilt[k] = merged[k];
        // Mutating the resolved parent in place keeps every ancestor untouched.
        for (const k of Object.keys(parent)) delete parent[k];
        Object.assign(parent, rebuilt);

        writeMessages(locale, msgs);
        console.log(`${locale}: merged ${resolved.namespace} after ${anchor}`);
    }
}

/**
 * Per-blog files have no ordering problem — each locale is its own file
 * (content/blogs/<slug>/<locale>.json), so unlike a messages/*.json namespace
 * there is no shared object to insert a key into, and therefore no anchor
 * key, and no `anchor key not found` failure mode to have in the first place.
 */
function mergeBlog(resolved, locales) {
    if (!fs.existsSync(resolved.sourcePath)) {
        throw new Error(`no English source: ${path.relative(ROOT, resolved.sourcePath)}`);
    }
    const englishSource = readJson(resolved.sourcePath);
    const shape = keyPaths(englishSource).sort();

    for (const locale of locales) {
        const data = readJson(resolved.stagingPath(locale));
        const got = keyPaths(data).sort();
        if (JSON.stringify(got) !== JSON.stringify(shape)) {
            throw new Error(`${locale}: staged shape differs from en — refusing to merge`);
        }
    }

    for (const locale of locales) {
        const data = readJson(resolved.stagingPath(locale));
        writeBlogLocale(resolved.slug, locale, data);
        console.log(`${locale}: merged ${resolved.label} -> ${path.relative(ROOT, resolved.mergedPath(locale))}`);
    }
}

function cmdMerge(target, opts) {
    if (!target) throw new Error("usage: merge <namespace> --after <existingKey>  |  merge blogs/<slug>");
    const resolved = resolveTarget(target);
    const locales = opts.locales ?? TARGET_LOCALES;

    for (const locale of locales) {
        const staged = resolved.stagingPath(locale);
        if (!fs.existsSync(staged)) throw new Error(`missing staged file: ${staged}`);
    }

    if (resolved.kind === "blog") {
        return mergeBlog(resolved, locales);
    }

    if (!opts.after) {
        throw new Error("--after <existingKey> is required for messages/*.json namespaces (controls key placement)");
    }
    return mergeNamespace(resolved, locales, opts.after);
}

// ------------------------------------------------------------------------ main

function parseArgs(argv) {
    const positional = [];
    const opts = {};
    for (let i = 0; i < argv.length; i++) {
        const a = argv[i];
        if (a === "--force") opts.force = true;
        else if (a === "--dry" || a === "--dry-run") opts.dry = true;
        else if (a === "--all") opts.all = true;
        else if (a === "--locales") opts.locales = argv[++i].split(",").map((s) => s.trim());
        else if (a === "--after") opts.after = argv[++i];
        else positional.push(a);
    }
    return { positional, opts };
}

loadEnv(); // before any command reads OPENAI_MODEL / OPENAI_API_KEY — never requires one
const { positional, opts } = parseArgs(process.argv.slice(2));
const [command, arg] = positional;

try {
    switch (command) {
        case "models":
            await cmdModels();
            break;
        case "terms":
            cmdTerms(positional.slice(1).join(" "));
            break;
        case "check":
            cmdCheck(arg);
            break;
        case "translate":
            await cmdTranslate(arg, opts);
            break;
        case "merge":
            cmdMerge(arg, opts);
            break;
        default:
            console.log(
                [
                    "usage:",
                    "  node scripts/i18n/translate.mjs models",
                    '  node scripts/i18n/translate.mjs terms "tennis bracelet"',
                    "  node scripts/i18n/translate.mjs translate <namespace> [--locales nl,fr] [--force] [--dry]",
                    "  node scripts/i18n/translate.mjs translate blogs/<slug> [--locales nl,fr] [--force] [--dry]",
                    "  node scripts/i18n/translate.mjs translate blogs --all [--force] [--dry]",
                    "  node scripts/i18n/translate.mjs check [namespace]",
                    "  node scripts/i18n/translate.mjs merge <namespace> --after <existingKey>",
                    "  node scripts/i18n/translate.mjs merge blogs/<slug>",
                ].join("\n")
            );
    }
} catch (err) {
    console.error("error: " + err.message);
    process.exit(1);
}
