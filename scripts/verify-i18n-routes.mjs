// Usage: node scripts/verify-i18n-routes.mjs http://localhost:3000
//
// Crawls every in-scope route in every one of the six locales against a
// running server and checks:
//   - HTTP 200 (following redirects, since English is unprefixed and
//     trailing-slash normalisation may hop once)
//   - <html lang="..."> matches the locale being requested
//   - a complete hreflang set (all six locales present as alternate links)
//   - no "[MISSING: ...]" marker rendered anywhere in the page
//
// It then separately checks that all 96 locale-expanded blog redirects
// (16 rules x 6 locales, see src/lib/i18n/blogRedirects.ts and
// src/lib/i18n/localeRedirects.ts) each return a 308 to the right
// locale-prefixed destination, with redirect following turned OFF so the
// redirect itself — not its eventual target — is what gets asserted.
//
// "In scope" here matches the static paths smoke-routes.mjs already treats
// as the site's locale-aware shell (/, /about/, /shop/, /contact/, /blog/)
// plus every one of the 98 translated blog articles — i.e. every route that
// actually exists in all six languages. Account/cart/checkout routes require
// session state to render meaningfully and are intentionally out of scope.
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..");
// dynamic import() needs a file:// URL for absolute Windows paths (a bare
// "D:\..." path is parsed as a URL scheme "d:" and rejected).
const importRoot = (p) => pathToFileURL(path.join(ROOT, p)).href;

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const LOCALES = ["en", "fr", "it", "de", "nl", "es"];
const DEFAULT = "en";

const { BLOG_SLUGS } = await import(importRoot("src/lib/blogs/registry.ts"));
const { BLOG_REDIRECTS } = await import(importRoot("src/lib/i18n/blogRedirects.ts"));
const { withLocaleVariants } = await import(importRoot("src/lib/i18n/localeRedirects.ts"));

const staticPaths = ["/", "/about/", "/shop/", "/contact/", "/blog/"];
const blogPaths = BLOG_SLUGS.map((slug) => `/blog/${slug}/`);
const inScopePaths = [...staticPaths, ...blogPaths];

const prefix = (locale, p) => (locale === DEFAULT ? p : `/${locale}${p}`);

let checked = 0;
let missingFound = 0;
const failures = [];

async function checkRoute(url, locale) {
    checked++;
    let res, html;
    try {
        res = await fetch(url, { redirect: "follow" });
        html = await res.text();
    } catch (err) {
        failures.push(`${url} -> fetch error: ${err.message}`);
        return;
    }

    if (!res.ok) {
        failures.push(`${url} -> HTTP ${res.status}`);
        return;
    }

    const lang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1];
    if (lang !== locale) {
        failures.push(`${url} -> <html lang="${lang}"> (want "${locale}")`);
    }

    const missingMatches = html.match(/\[MISSING:[^\]]*\]/g);
    if (missingMatches) {
        missingFound += missingMatches.length;
        failures.push(`${url} -> renders ${missingMatches.length} [MISSING: ...] marker(s), e.g. ${missingMatches[0]}`);
    }

    // Next's metadata API renders the attribute as literal `hrefLang="xx"`
    // (not lowercased) in the served HTML, so match case-insensitively.
    for (const l of LOCALES) {
        const re = new RegExp(`hreflang="${l}"`, "i");
        if (!re.test(html)) {
            failures.push(`${url} -> no hreflang="${l}" link (incomplete hreflang set)`);
        }
    }
}

console.log(
    `crawling ${inScopePaths.length} in-scope route(s) x ${LOCALES.length} locale(s) = ` +
        `${inScopePaths.length * LOCALES.length} page(s) against ${base} ...`
);

for (const locale of LOCALES) {
    for (const p of inScopePaths) {
        await checkRoute(base + prefix(locale, p), locale);
    }
}

console.log(`checked ${checked} page URL(s), ${failures.length} failure(s) so far, ${missingFound} [MISSING: marker(s) found\n`);

// --- Redirects: every one of the 96 locale-expanded rules must 308 to the
// right locale-prefixed destination (Review Focus 4 / spec consequence: a
// locale-prefixed inbound link must redirect WITHIN that locale, never drop
// the prefix).
const expanded = withLocaleVariants(BLOG_REDIRECTS);
let redirectChecked = 0;
const redirectFailures = [];

for (const rule of expanded) {
    const from = base + rule.source;
    redirectChecked++;
    let res;
    try {
        res = await fetch(from, { redirect: "manual" });
    } catch (err) {
        redirectFailures.push(`${from} -> fetch error: ${err.message}`);
        continue;
    }
    const location = res.headers.get("location") ?? "";
    const want = rule.destination;
    const locationPath = (() => {
        try {
            return new URL(location, base).pathname + (location.includes("?") ? location.slice(location.indexOf("?")) : "");
        } catch {
            return location;
        }
    })();
    if (res.status !== 308) {
        redirectFailures.push(`${from} -> HTTP ${res.status} (want 308)`);
    } else if (locationPath !== want && !locationPath.endsWith(want)) {
        redirectFailures.push(`${from} -> 308 to ${location} (want ${want})`);
    }
}

console.log(`checked ${redirectChecked} redirect rule(s), ${redirectFailures.length} failure(s)`);

const allFailures = [...failures, ...redirectFailures];
checked += redirectChecked;

console.log(`\n=== totals: ${checked} URL(s) checked, ${allFailures.length} failure(s), ${missingFound} [MISSING: marker(s) ===`);

if (allFailures.length) {
    console.error(`\n${allFailures.length} failure(s):\n`);
    for (const f of allFailures.slice(0, 60)) console.error(`  ${f}`);
    if (allFailures.length > 60) console.error(`  ...${allFailures.length - 60} more`);
    process.exit(1);
}

console.log("all locales verified");
