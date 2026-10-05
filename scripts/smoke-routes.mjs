// Usage: node scripts/smoke-routes.mjs http://localhost:3000
// Asserts every path resolves and reports the <html lang> it rendered.
const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");

const PATHS = [
    // English keeps its existing unprefixed URLs.
    { path: "/", lang: "en" },
    { path: "/about/", lang: "en" },
    { path: "/shop/", lang: "en" },
    { path: "/blog/", lang: "en" },
    // The other five are prefixed.
    { path: "/es/about/", lang: "es" },
    { path: "/it/about/", lang: "it" },
    { path: "/de/about/", lang: "de" },
    { path: "/nl/about/", lang: "nl" },
    { path: "/fr/about/", lang: "fr" },
    // trailingSlash: true must redirect the unslashed form, not 404 it.
    { path: "/es/about", lang: "es" },
    // Admin stays English and outside the locale tree.
    { path: "/admin/", lang: "en" },
];

// An unknown locale must 404 rather than soft-render.
const EXPECT_404 = ["/pt/about/"];

// Locale CASE is normalised by next-intl's proxy, which matches locales
// case-insensitively and redirects to the canonical form. This is deliberate
// and better than a 404: it rescues typo'd and legacy uppercase URLs and avoids
// duplicate content, while still never rendering a page full of [MISSING: ...].
const EXPECT_REDIRECT = [{ path: "/EN/about/", to: "/en/about/" }];

let failures = 0;

for (const { path, lang } of PATHS) {
    const res = await fetch(base + path, { redirect: "follow" });
    const html = await res.text();
    const got = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1] ?? "(none)";
    const ok = res.ok && got === lang;
    if (!ok) failures++;
    console.log(
        `${ok ? "ok  " : "FAIL"} ${path} -> ${res.status} lang=${got} (want ${lang})`,
    );
}

for (const path of EXPECT_404) {
    const res = await fetch(base + path, { redirect: "follow" });
    const ok = res.status === 404;
    if (!ok) failures++;
    console.log(`${ok ? "ok  " : "FAIL"} ${path} -> ${res.status} (want 404)`);
}

for (const { path, to } of EXPECT_REDIRECT) {
    const res = await fetch(base + path, { redirect: "manual" });
    const location = res.headers.get("location") ?? "";
    const ok = [301, 307, 308].includes(res.status) && location.endsWith(to);
    if (!ok) failures++;
    console.log(
        `${ok ? "ok  " : "FAIL"} ${path} -> ${res.status} ${location} (want redirect to ${to})`,
    );
}

console.log(failures === 0 ? "\nall routes ok" : `\n${failures} failure(s)`);
process.exit(failures === 0 ? 0 : 1);
