# Six-Language i18n Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Serve the Aurelia Royale storefront in English, French, Italian, German, Dutch and Spanish, with English URLs unchanged and the other five under a locale prefix.

**Architecture:** next-intl 4.x with `localePrefix: "as-needed"` drives routing from `src/i18n/routing.ts`, with locale resolution in `src/proxy.ts` (Next 16's rename of `middleware.ts`). 18 route folders move under `src/app/[locale]/`; `admin` stays outside. Two content stores: UI strings in `messages/<locale>.json` via next-intl, and blog bodies in `content/blogs/<slug>/<locale>.json` loaded on demand by one shared `[locale]/blog/[slug]` route that replaces all 99 hardcoded blog folders. Blog JSON is produced from the existing TSX by a TypeScript-AST extractor and translated by an OpenAI CLI adapted from `D:\Projects\uniglo-diamonds-web\scripts\i18n\translate.mjs`.

**Tech Stack:** Next.js 16.2.2 (App Router), React 19.2.4, TypeScript 5.9.3, Tailwind 4, next-intl 4.13.x, vitest (added by Task 1), TypeScript Compiler API (extraction), OpenAI Chat Completions API.

**Spec:** `docs/superpowers/specs/2026-10-05-i18n-design.md`

## Global Constraints

- Locales are exactly `["en", "fr", "it", "de", "nl", "es"]`; `defaultLocale` is `en`; `localePrefix` is `"as-needed"`; `localeDetection` is `false`. Defined once in `src/i18n/routing.ts` and imported everywhere.
- Next.js 16 renamed `middleware` to `proxy`. The file MUST be `src/proxy.ts`. Never create `src/middleware.ts`.
- `next.config.ts` keeps `trailingSlash: true`. All generated URLs end with `/`.
- `images.unoptimized: true` and the existing `remotePatterns` entry for `ecommerce-application-kajkarma.s3.us-east-1.amazonaws.com` stay unchanged.
- The admin panel (`src/app/admin/**`) is English-only and stays outside `src/app/[locale]/`. It must be excluded from the proxy matcher.
- Backend product content (`title`, `description`, `details`, `tags`) stays English in every locale. Do not add per-locale product fields.
- `PriceDisplay.tsx` is not modified. Prices render as `$1,299.00` in every locale.
- Blog slugs are identical in every locale. Only the locale prefix differs.
- Internal `href` values in content are written WITHOUT a locale prefix (`/shop/`, never `/es/shop/`).
- British spelling in English copy (`colour`, `jewellery`, `prioritise`) — matches all existing content.
- `scripts/i18n/staging/` is gitignored and never committed. `.env.local` is already covered by the existing `.env*` rule in `.gitignore`.
- Commit after every task. Never use `--no-verify`.

## Review Focus

Five failure modes the spec implies that no task's happy-path tests would exercise. Each has a test pinned to the task owning the code.

1. **A `callout` block's `theme` value is sent to the translator** and comes back as `"crème"`, silently breaking the styling of 38 callouts in five languages. `theme`, `shopHref` and `contactHref` must be held back. (Task 11, Step 1)
2. **A locale's blog JSON file is missing** because a translation run was interrupted. The route must fall back to English content, not throw a 500. (Task 7, Step 2)
3. **A content `href` already carries a locale prefix or is external** (`/es/shop/`, `https://igi.org`). It must not become `/es/es/shop/`, and external links must be left alone. (Task 7, Step 6)
4. **An old inbound link arrives locale-prefixed** (`/de/blog/total-carat-weight-diamond-jewellery/`). It must 308 to `/de/blog/total-carat-weight-meaning-diamond-jewellery/`, not 404 and not drop the locale. (Task 14, Step 1)
5. **An unknown locale appears in the URL** (`/pt/about/`). It must 404 cleanly, not render a page full of `[MISSING: …]`. A wrong-CASE locale (`/EN/about/`) is different: next-intl matches locales case-insensitively and redirects to the canonical `/en/about/`, which is the better outcome — it rescues typo'd and legacy URLs instead of 404ing them. (Task 3, Step 1)

---

### Task 1: Test harness

No test runner exists — `package.json` has only `dev`, `build`, `start`, `lint`. Everything downstream depends on this.

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Test: `src/config/site.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `npm test` (single run) and `npm run test:watch`. Vitest resolves the `@/` alias to `./src`, matching `tsconfig.json` `paths`.

- [ ] **Step 1: Install vitest**

```bash
npm install -D vitest
```

- [ ] **Step 2: Create the vitest config**

`tsconfig.json` maps `@/*` to `./src/*`. Vitest does not read tsconfig paths, so alias it explicitly rather than adding another dependency.

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
    test: {
        environment: "node",
        include: ["src/**/*.test.ts", "scripts/**/*.test.mjs"],
    },
});
```

- [ ] **Step 3: Add the test scripts**

In `package.json`, add to `"scripts"`:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 4: Write the failing harness test**

This asserts the alias works, which is the only thing that can actually be wrong about the harness.

```ts
// src/config/site.test.ts
import { describe, expect, it } from "vitest";
import { SITE_NAME, SITE_URL } from "@/config/site";

describe("test harness", () => {
    it("resolves the @/ alias to src", () => {
        expect(SITE_NAME).toBe("Aurelia Royale");
    });

    it("exposes a site URL with no trailing slash", () => {
        expect(SITE_URL.endsWith("/")).toBe(false);
    });
});
```

- [ ] **Step 5: Run the test**

Run: `npm test`
Expected: 2 passed. If the alias is broken the failure is `Cannot find module '@/config/site'`.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json vitest.config.ts src/config/site.test.ts
git commit -m "test: add vitest harness with @/ alias resolution"
```

---

### Task 2: Locale routing core

**Files:**
- Create: `src/i18n/routing.ts`
- Create: `src/i18n/navigation.ts`
- Create: `src/i18n/request.ts`
- Create: `src/proxy.ts`
- Create: `messages/en.json`
- Modify: `next.config.ts`
- Modify: `.gitignore`
- Test: `src/i18n/routing.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `routing` — the `defineRouting` result. `routing.locales` is `readonly ["en","fr","it","de","nl","es"]`, `routing.defaultLocale` is `"en"`.
  - `type Locale = (typeof routing.locales)[number]`.
  - From `src/i18n/navigation.ts`: `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname` — all locale-aware. Every in-scope component imports these instead of `next/link`.

- [ ] **Step 1: Install next-intl**

```bash
npm install next-intl@^4.13.1
```

- [ ] **Step 2: Write the failing routing test**

```ts
// src/i18n/routing.test.ts
import { describe, expect, it } from "vitest";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";

describe("routing config", () => {
    it("declares exactly the six supported locales in order", () => {
        expect(routing.locales).toEqual(["en", "fr", "it", "de", "nl", "es"]);
    });

    it("serves English without a prefix", () => {
        expect(routing.defaultLocale).toBe("en");
        expect(routing.localePrefix).toBe("as-needed");
    });

    it("never auto-detects the locale from the browser", () => {
        expect(routing.localeDetection).toBe(false);
    });

    // Review Focus 5: an unknown locale must not be treated as valid.
    it("rejects unknown and wrong-case locales", () => {
        expect(hasLocale(routing.locales, "pt")).toBe(false);
        expect(hasLocale(routing.locales, "EN")).toBe(false);
        expect(hasLocale(routing.locales, undefined)).toBe(false);
        expect(hasLocale(routing.locales, "es")).toBe(true);
    });
});
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- src/i18n/routing.test.ts`
Expected: FAIL — `Cannot find module '@/i18n/routing'`.

- [ ] **Step 4: Write the routing config**

```ts
// src/i18n/routing.ts
import { defineRouting } from "next-intl/routing";

/**
 * Single source of truth for locales. `localePrefix: "as-needed"` keeps English
 * on its existing unprefixed URLs (/blog/x/) and serves every other locale
 * under a prefix (/es/blog/x/).
 *
 * `localeDetection: false` is deliberate: with detection on, a German-browser
 * visitor hitting / is silently redirected to /de/, which changes what existing
 * English traffic and crawlers see. Language changes only via the switcher.
 */
export const routing = defineRouting({
    locales: ["en", "fr", "it", "de", "nl", "es"],
    defaultLocale: "en",
    localePrefix: "as-needed",
    localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/i18n/routing.test.ts`
Expected: 4 passed.

- [ ] **Step 6: Create the navigation helpers**

```ts
// src/i18n/navigation.ts
import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

/**
 * Locale-aware replacements for next/link and next/navigation. In-scope
 * components MUST import from here, so an internal href written as "/shop/"
 * stays inside the active locale automatically.
 */
export const { Link, redirect, usePathname, useRouter, getPathname } =
    createNavigation(routing);
```

- [ ] **Step 7: Create the request config**

```ts
// src/i18n/request.ts
import { getRequestConfig } from "next-intl/server";
import { hasLocale } from "next-intl";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
    const requested = await requestLocale;
    const locale = hasLocale(routing.locales, requested)
        ? requested
        : routing.defaultLocale;

    const messages = (await import(`../../messages/${locale}.json`)).default;

    return {
        locale,
        messages,

        // A single absent key must never 500 a page. Log it and render a
        // visible marker so `check-i18n` and the crawl can find it.
        onError(error) {
            if (error.code === "MISSING_MESSAGE") {
                console.error(`[i18n] missing translation: ${error.message}`);
            } else {
                throw error;
            }
        },

        getMessageFallback({ namespace, key }) {
            return `[MISSING: ${[namespace, key].filter(Boolean).join(".")}]`;
        },
    };
});
```

- [ ] **Step 8: Create the six message files**

Blog bodies do NOT go in here — only UI strings. Start with one real namespace so the files are valid and non-empty.

```bash
mkdir -p messages
for L in en fr it de nl es; do
  printf '{\n  "Common": {\n    "siteName": "Aurelia Royale"\n  }\n}\n' > "messages/$L.json"
done
```

- [ ] **Step 9: Create the proxy (NOT middleware.ts)**

Next 16 deprecated and renamed `middleware` to `proxy`. The matcher excludes `admin`, which is English-only and lives outside the locale tree — without that exclusion next-intl rewrites `/admin/...` to `/en/admin/...`, which has no route and 404s.

```ts
// src/proxy.ts
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
    // Everything except: api routes, Next internals, files with an extension,
    // sitemap/robots, and the English-only admin panel.
    matcher: [
        "/((?!api|_next|admin|.*\\..*|sitemap.xml|robots.txt).*)",
    ],
};
```

- [ ] **Step 10: Wire the plugin into next.config.ts**

Edit `next.config.ts`: add the import at the top and change the final export. Leave `trailingSlash`, `images` and `redirects` exactly as they are.

```ts
import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
    trailingSlash: true,
    // ... existing images and redirects unchanged ...
};

export default withNextIntl(nextConfig);
```

The plugin reads `trailingSlash` from this config; that is how next-intl learns to normalise trailing slashes in alternate links.

- [ ] **Step 11: Ignore the translation staging directory**

Append to `.gitignore`:

```
# i18n translation staging (local workspace, never committed)
/scripts/i18n/staging/
```

- [ ] **Step 12: Verify the build still compiles**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 13: Commit**

```bash
git add package.json package-lock.json next.config.ts .gitignore messages src/i18n src/proxy.ts
git commit -m "feat(i18n): add next-intl routing, request config and proxy"
```

---

### Task 3: Move the route tree under [locale]

The riskiest mechanical step. Verified by a reusable route smoke script — this is also the `trailingSlash` spike from the spec's phase 0, made load-bearing instead of throwaway.

**Files:**
- Move: 18 folders from `src/app/*` to `src/app/[locale]/*`
- Move: `src/app/page.tsx` to `src/app/[locale]/page.tsx`
- Create: `src/app/fonts.ts`
- Modify: `src/app/layout.tsx`
- Create: `src/app/[locale]/layout.tsx`
- Create: `scripts/smoke-routes.mjs`
- Test: `src/i18n/locale-guard.test.ts`
- Create: `src/i18n/locale-guard.ts`

**Interfaces:**
- Consumes: `routing`, `Locale` from `src/i18n/routing.ts`.
- Produces: `assertLocale(value: string): Locale` from `src/i18n/locale-guard.ts` — returns the locale or calls `notFound()`. `src/app/[locale]/layout.tsx` accepts `params: Promise<{ locale: string }>`.

- [ ] **Step 1: Write the failing locale-guard test**

Covers Review Focus 5: an unknown locale must 404, not render `[MISSING: …]` everywhere.

```ts
// src/i18n/locale-guard.test.ts
import { describe, expect, it, vi } from "vitest";

const notFound = vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
});
vi.mock("next/navigation", () => ({ notFound }));

const { assertLocale } = await import("@/i18n/locale-guard");

describe("assertLocale", () => {
    it("returns supported locales unchanged", () => {
        expect(assertLocale("en")).toBe("en");
        expect(assertLocale("es")).toBe("es");
    });

    it("404s on an unsupported locale", () => {
        expect(() => assertLocale("pt")).toThrow("NEXT_NOT_FOUND");
    });

    it("404s on a wrong-case locale rather than normalising it", () => {
        expect(() => assertLocale("EN")).toThrow("NEXT_NOT_FOUND");
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/i18n/locale-guard.test.ts`
Expected: FAIL — `Cannot find module '@/i18n/locale-guard'`.

- [ ] **Step 3: Write the locale guard**

```ts
// src/i18n/locale-guard.ts
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing, type Locale } from "./routing";

/**
 * Narrow an unvalidated route param to a supported locale, or 404.
 *
 * Without this, an unknown locale renders the whole page tree with every
 * message resolving to "[MISSING: …]" — a soft 200 that crawlers index.
 */
export function assertLocale(value: string): Locale {
    if (!hasLocale(routing.locales, value)) {
        notFound();
    }
    return value as Locale;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/i18n/locale-guard.test.ts`
Expected: 3 passed.

- [ ] **Step 5: Move the 18 route folders**

`admin` is the only folder that stays. Use `git mv` so history follows.

```bash
mkdir -p "src/app/[locale]"
for d in about account blog cart checkout contact home login orders payments profile register reset-password shop shop-details tickets verify-otp wishlist; do
  git mv "src/app/$d" "src/app/[locale]/$d"
done
git mv src/app/page.tsx "src/app/[locale]/page.tsx"
```

Verify: `ls src/app` must show only `[locale]`, `admin`, `favicon.ico`, `globals.css`, `icon.png`, `layout.tsx`, `robots.ts`, `sitemap.ts`.

- [ ] **Step 6: Move the fonts into their own module**

The font class names are needed by `[locale]/layout.tsx`, but a layout file may only export a fixed set of names (`default`, `metadata`, `generateMetadata`, `viewport`, `generateViewport`, `revalidate`, `dynamic`, …). Adding `export const fontClassNames` to a layout fails the build with an invalid-export error, so the fonts get their own module.

```ts
// src/app/fonts.ts
import {
    Manrope,
    Playfair_Display,
    Cormorant_Garamond,
    Jost,
} from "next/font/google";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });
const cormorant = Cormorant_Garamond({
    variable: "--font-cormorant",
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});
const jost = Jost({
    variable: "--font-jost",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

export const fontClassNames = `${manrope.variable} ${playfair.variable} ${cormorant.variable} ${jost.variable}`;
```

- [ ] **Step 7: Reduce the root layout**

`src/app/layout.tsx` keeps only `metadataBase`, `viewport` and the global stylesheet. Replace its body with:

```tsx
import type { Metadata, Viewport } from "next";
import { SITE_URL } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
    metadataBase: new URL(SITE_URL),
    robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#ffffff" };

export default function RootLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return children;
}
```

The root layout returns `children` bare: `<html>` and `<body>` move to the locale layout, because `lang` depends on the locale.

- [ ] **Step 8: Create the locale layout**

```tsx
// src/app/[locale]/layout.tsx
import type { Metadata } from "next";
import { ArrowUp } from "lucide-react";
import { Toaster } from "sonner";
import { NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { PageTransition } from "@/components/layout/PageTransition";
import { AuthProvider } from "@/providers/AuthProvider";
import { CartProvider } from "@/providers/CartProvider";
import { WishlistProvider } from "@/providers/WishlistProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";
import { routing } from "@/i18n/routing";
import { assertLocale } from "@/i18n/locale-guard";
import { fontClassNames } from "../fonts";

export const metadata: Metadata = {
    title: {
        default: "Aurelia Royale | Luxury Lab-Grown Diamond Jewelry",
        template: "%s | Aurelia Royale",
    },
    description:
        "Aurelia Royale crafts fine lab-grown diamond jewelry — rings, earrings, necklaces, bracelets and more, designed for timeless elegance and sustainable luxury.",
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale: raw } = await params;
    const locale = assertLocale(raw);

    // Required for static rendering of this subtree.
    setRequestLocale(locale);

    return (
        <html lang={locale} className={`${fontClassNames} h-full antialiased`}>
            <body
                id="top"
                className="min-h-full flex flex-col bg-background text-foreground"
            >
                <JsonLd data={[organizationSchema(), websiteSchema()]} />
                <Toaster
                    position="bottom-right"
                    theme="dark"
                    closeButton
                    expand
                    gap={10}
                    offset={20}
                />
                <NextIntlClientProvider>
                    <AuthProvider>
                        <WishlistProvider>
                            <CartProvider>
                                <Header />
                                <main className="flex-1">
                                    <PageTransition>{children}</PageTransition>
                                </main>
                                <Footer />
                                <a
                                    href="#top"
                                    className="fixed bottom-5 right-5 inline-flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-gold bg-[#d3b442] text-white shadow-xl transition hover:scale-105"
                                >
                                    <ArrowUp size={18} />
                                </a>
                            </CartProvider>
                        </WishlistProvider>
                    </AuthProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
```

- [ ] **Step 9: Write the route smoke script**

This is the `trailingSlash` + `as-needed` verification, reused in Task 15.

```js
// scripts/smoke-routes.mjs
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
```

- [ ] **Step 10: Run the type check and build**

Run: `npx tsc --noEmit && npm run build`
Expected: both succeed. A build failure here almost always means a moved page still imports a sibling by relative path — switch it to the `@/` alias.

- [ ] **Step 11: Run the smoke script against a dev server**

In one terminal: `npm run dev`. In another:

Run: `node scripts/smoke-routes.mjs http://localhost:3000`
Expected: `all routes ok`. This is the point at which `trailingSlash: true` + `localePrefix: "as-needed"` is proven; stop and fix before continuing if any line says FAIL.

- [ ] **Step 12: Commit**

```bash
git add -A
git commit -m "feat(i18n): move public routes under [locale] and split layouts"
```

---

### Task 4: Language switcher and shared chrome strings

**Files:**
- Create: `src/components/layout/LanguageSwitcher.tsx`
- Modify: `src/components/layout/Header.tsx`
- Modify: `src/components/layout/Footer.tsx`
- Modify: `messages/*.json` (all six)
- Test: `src/i18n/locale-labels.test.ts`
- Create: `src/i18n/locale-labels.ts`

**Interfaces:**
- Consumes: `routing`, `Locale`; `usePathname`, `useRouter` from `src/i18n/navigation.ts`.
- Produces: `LOCALE_LABELS: Record<Locale, string>` from `src/i18n/locale-labels.ts` — each language's name in its own language. `<LanguageSwitcher />` renders a `<select>` that preserves the current path across locales.

- [ ] **Step 1: Write the failing locale-labels test**

```ts
// src/i18n/locale-labels.test.ts
import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import { LOCALE_LABELS } from "@/i18n/locale-labels";

describe("LOCALE_LABELS", () => {
    it("labels every supported locale", () => {
        for (const locale of routing.locales) {
            expect(LOCALE_LABELS[locale]).toBeTruthy();
        }
    });

    it("has no labels for locales that are not supported", () => {
        expect(Object.keys(LOCALE_LABELS).sort()).toEqual(
            [...routing.locales].sort(),
        );
    });

    it("names each language in its own language", () => {
        expect(LOCALE_LABELS.de).toBe("Deutsch");
        expect(LOCALE_LABELS.es).toBe("Español");
        expect(LOCALE_LABELS.nl).toBe("Nederlands");
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/i18n/locale-labels.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Write the locale labels**

A switcher listing "German" in English is useless to the German speaker looking for it, so each label is in its own language and is NOT a translatable message.

```ts
// src/i18n/locale-labels.ts
import type { Locale } from "./routing";

export const LOCALE_LABELS: Record<Locale, string> = {
    en: "English",
    fr: "Français",
    it: "Italiano",
    de: "Deutsch",
    nl: "Nederlands",
    es: "Español",
};
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/i18n/locale-labels.test.ts`
Expected: 3 passed.

- [ ] **Step 5: Write the switcher**

```tsx
// src/components/layout/LanguageSwitcher.tsx
"use client";

import { useTransition } from "react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing, type Locale } from "@/i18n/routing";
import { LOCALE_LABELS } from "@/i18n/locale-labels";

/**
 * Switches locale while staying on the same page. `usePathname` from our
 * navigation helpers returns the path WITHOUT the locale prefix, so passing it
 * straight back to `router.replace` with a new locale is correct.
 */
export function LanguageSwitcher() {
    const locale = useLocale() as Locale;
    const pathname = usePathname();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    return (
        <select
            aria-label="Language"
            value={locale}
            disabled={isPending}
            onChange={(event) => {
                const next = event.target.value as Locale;
                startTransition(() => {
                    router.replace(pathname, { locale: next });
                });
            }}
            className="bg-transparent font-jost text-xs uppercase tracking-[0.2em] text-foreground outline-none"
        >
            {routing.locales.map((value) => (
                <option key={value} value={value}>
                    {LOCALE_LABELS[value]}
                </option>
            ))}
        </select>
    );
}
```

- [ ] **Step 6: Add the Header and Footer namespaces to all six message files**

Add to `messages/en.json` (and the same keys to the other five, English values for now — Task 13 translates them):

```json
{
  "Common": {
    "siteName": "Aurelia Royale"
  },
  "Header": {
    "home": "Home",
    "about": "About",
    "shop": "Shop",
    "contact": "Contact",
    "blog": "Blog",
    "openMenu": "Open menu",
    "openProfileMenu": "Open profile menu",
    "openAccountMenu": "Open account menu",
    "wishlist": "Wishlist",
    "shoppingBag": "Shopping bag"
  }
}
```

- [ ] **Step 7: Localise the Header**

In `src/components/layout/Header.tsx`, replace the hardcoded `primaryNavLinks` labels and the `aria-label` strings, swap `next/link` for the locale-aware `Link`, and mount the switcher.

```tsx
// at the top of the file
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { LanguageSwitcher } from "./LanguageSwitcher";

// inside the component, before primaryNavLinks
const t = useTranslations("Header");

const primaryNavLinks: { href: string; label: string }[] = [
    { href: "/", label: t("home") },
    { href: "/about", label: t("about") },
    { href: "/shop", label: t("shop") },
    { href: "/contact", label: t("contact") },
    { href: "/blog", label: t("blog") },
];
```

Replace each `aria-label="Open menu"` with `aria-label={t("openMenu")}`, `aria-label="Wishlist"` with `aria-label={t("wishlist")}`, `aria-label="Shopping bag"` with `aria-label={t("shoppingBag")}`, and the ternary at line ~231 with `isAuthenticated ? t("openProfileMenu") : t("openAccountMenu")`. Render `<LanguageSwitcher />` in the header's utility row.

- [ ] **Step 8: Localise the Footer the same way**

Add a `Footer` namespace to all six message files covering every user-facing string in `src/components/layout/Footer.tsx`, replace the literals with `t(...)` calls, and swap `next/link` for `@/i18n/navigation`'s `Link`.

- [ ] **Step 9: Verify**

Run: `npm test && npx tsc --noEmit && npm run build`
Expected: all pass.

- [ ] **Step 10: Smoke-test the switcher**

With `npm run dev` running, open `http://localhost:3000/about/`, choose Español, and confirm the URL becomes `/es/about/` and the nav labels still render (they will still be English until Task 13 — that is expected; what matters is no `[MISSING:` text).

- [ ] **Step 11: Commit**

```bash
git add -A
git commit -m "feat(i18n): add language switcher and localise header and footer"
```

---

### Task 5: Blog content extractor

Converts 99 `page.tsx` files into `content/blogs/<slug>/en.json`. The hard requirement is that it never silently mangles content: it refuses anything that is not a literal, and every emitted file is proved equal to its source by a round-trip comparison.

**Files:**
- Create: `scripts/i18n/lib/ast-literal.mjs`
- Create: `scripts/i18n/lib/extract-blog.mjs`
- Create: `scripts/i18n/extract-blogs.mjs`
- Create: `scripts/i18n/lib/blog-categories.mjs`
- Create: `scripts/i18n/lib/excluded-slugs.mjs`
- Test: `scripts/i18n/lib/ast-literal.test.mjs`
- Test: `scripts/i18n/lib/extract-blog.test.mjs`

**Interfaces:**
- Consumes: nothing in the app; `typescript` (5.9.3, already a devDependency) and Node's `fs`.
- Produces:
  - `literalToJson(node, ctx)` from `ast-literal.mjs` — converts a TS literal AST node to a plain JS value, throwing `NonLiteralError` with file and line otherwise.
  - `extractBlog(sourceText, { file, slug })` from `extract-blog.mjs` — returns the blog content object described in spec §3.4.
  - `BLOG_CATEGORY_KEYS` from `blog-categories.mjs` — maps each decoded eyebrow string to its `blogCategories` message key.
  - 99 files at `content/blogs/<slug>/en.json`.

- [ ] **Step 1: Write the failing literal-conversion test**

```js
// scripts/i18n/lib/ast-literal.test.mjs
import { describe, expect, it } from "vitest";
import ts from "typescript";
import { literalToJson, NonLiteralError } from "./ast-literal.mjs";

/** Parse `const x = <expr>` and hand back the initialiser node. */
function parseExpr(code) {
    const sf = ts.createSourceFile(
        "t.ts",
        `const x = ${code}`,
        ts.ScriptTarget.Latest,
        true,
    );
    return sf.statements[0].declarationList.declarations[0].initializer;
}

const toJson = (code) => literalToJson(parseExpr(code), { file: "t.ts" });

describe("literalToJson", () => {
    it("converts strings, numbers, booleans and null", () => {
        expect(toJson('"hello"')).toBe("hello");
        expect(toJson("1200")).toBe(1200);
        expect(toJson("true")).toBe(true);
        expect(toJson("null")).toBe(null);
    });

    it("converts negative numbers", () => {
        expect(toJson("-5")).toBe(-5);
    });

    it("preserves escaped quotes in string content", () => {
        expect(toJson('"He said \\"yes\\" loudly"')).toBe('He said "yes" loudly');
    });

    it("converts nested arrays and objects", () => {
        expect(toJson('[{ type: "paragraph", text: "a" }, { items: ["x"] }]')).toEqual([
            { type: "paragraph", text: "a" },
            { items: ["x"] },
        ]);
    });

    it("accepts quoted object keys", () => {
        expect(toJson('{ "@type": "FAQPage" }')).toEqual({ "@type": "FAQPage" });
    });

    it("refuses an identifier reference", () => {
        expect(() => toJson("{ text: someVariable }")).toThrow(NonLiteralError);
    });

    it("refuses a template literal", () => {
        expect(() => toJson("{ text: `hello` }")).toThrow(NonLiteralError);
    });

    it("refuses a spread", () => {
        expect(() => toJson("[...others]")).toThrow(NonLiteralError);
    });

    it("refuses a function call", () => {
        expect(() => toJson("{ text: build() }")).toThrow(NonLiteralError);
    });

    it("names the offending construct in the error", () => {
        expect(() => toJson("{ text: someVariable }")).toThrow(/someVariable/);
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- scripts/i18n/lib/ast-literal.test.mjs`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement the literal converter**

```js
// scripts/i18n/lib/ast-literal.mjs
import ts from "typescript";

export class NonLiteralError extends Error {}

/**
 * Convert a TypeScript literal expression to a plain JS value.
 *
 * Refuses anything that is not a literal — identifiers, template literals,
 * spreads, calls, computed keys. The 99 blog files contain only literals
 * (verified: zero backticks, zero spreads), so a refusal means something
 * changed and a human must look, rather than content being silently lost.
 */
export function literalToJson(node, ctx) {
    const fail = (what) => {
        const { line } = ctx.sourceFile
            ? ts.getLineAndCharacterOfPosition(ctx.sourceFile, node.getStart(ctx.sourceFile))
            : { line: -1 };
        throw new NonLiteralError(
            `${ctx.file}${line >= 0 ? `:${line + 1}` : ""}: expected a literal but found ${what}`,
        );
    };

    if (ts.isStringLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;

    if (ts.isPrefixUnaryExpression(node)) {
        if (node.operator === ts.SyntaxKind.MinusToken && ts.isNumericLiteral(node.operand)) {
            return -Number(node.operand.text);
        }
        return fail("a unary expression");
    }

    if (ts.isArrayLiteralExpression(node)) {
        return node.elements.map((el) => {
            if (ts.isSpreadElement(el)) return fail("a spread element");
            return literalToJson(el, ctx);
        });
    }

    if (ts.isObjectLiteralExpression(node)) {
        const out = {};
        for (const prop of node.properties) {
            if (!ts.isPropertyAssignment(prop)) {
                return fail(`a ${ts.SyntaxKind[prop.kind]} property`);
            }
            let key;
            if (ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name)) {
                key = prop.name.text;
            } else {
                return fail("a computed property name");
            }
            out[key] = literalToJson(prop.initializer, ctx);
        }
        return out;
    }

    if (ts.isNoSubstitutionTemplateLiteral(node) || ts.isTemplateExpression(node)) {
        return fail("a template literal");
    }
    if (ts.isIdentifier(node)) return fail(`the identifier ${node.text}`);
    if (ts.isCallExpression(node)) return fail("a function call");

    return fail(`a ${ts.SyntaxKind[node.kind]} node`);
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- scripts/i18n/lib/ast-literal.test.mjs`
Expected: 10 passed.

- [ ] **Step 5: Create the category map**

Measured from all 99 files: 8 distinct eyebrow strings for 7 real categories. `Certification &amp; Diamond Quality` (3 files) and `Certification and Diamond Quality` (4 files) are the same category written two ways — one with an HTML entity — so both normalise to one key.

```js
// scripts/i18n/lib/blog-categories.mjs

/**
 * Hero eyebrow text -> `blogCategories` message key.
 *
 * Keys are the entity-DECODED eyebrow strings. Counts are from the 99 existing
 * blog files; "Certification & Diamond Quality" and "Certification and Diamond
 * Quality" are the same category written two ways and share a key.
 */
export const BLOG_CATEGORY_KEYS = {
    "Lab-Grown Diamond Education": "labGrownDiamondEducation",        // 67
    "Coloured Stones and Diamonds": "colouredStonesAndDiamonds",      // 10
    "Lab-Grown Diamond Care": "labGrownDiamondCare",                  //  9
    "Certification and Diamond Quality": "certificationAndDiamondQuality", // 4
    "Certification & Diamond Quality": "certificationAndDiamondQuality",    // 3
    "Buying Lab-Grown Diamond Jewellery": "buyingLabGrownDiamondJewellery", // 4
    "Product-Category Guides": "productCategoryGuides",               //  1
    "Jewellery Care and Maintenance": "jewelleryCareAndMaintenance",  //  1
};

/** English display label per key, for `messages/en.json` -> blogCategories. */
export const BLOG_CATEGORY_LABELS = {
    labGrownDiamondEducation: "Lab-Grown Diamond Education",
    colouredStonesAndDiamonds: "Coloured Stones and Diamonds",
    labGrownDiamondCare: "Lab-Grown Diamond Care",
    certificationAndDiamondQuality: "Certification and Diamond Quality",
    buyingLabGrownDiamondJewellery: "Buying Lab-Grown Diamond Jewellery",
    productCategoryGuides: "Product-Category Guides",
    jewelleryCareAndMaintenance: "Jewellery Care and Maintenance",
};
```

- [ ] **Step 6: Write the failing blog-extraction test**

```js
// scripts/i18n/lib/extract-blog.test.mjs
import { describe, expect, it } from "vitest";
import { extractBlog } from "./extract-blog.mjs";

const FIXTURE = `\uFEFFimport React from "react";
import { Metadata } from "next";
import DynamicArticle, { ArticleSection } from "@/components/shared/DynamicArticle";

export const metadata: Metadata = {
  title: "Test Title | Aurelia Royale",
  description: "A test description.",
  alternates: { canonical: "https://www.aureliaroyale.com/blog/test-slug/" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "WebPage", "datePublished": "2026-07-15", "dateModified": "2026-09-10" }
  ]
};

const articleSections: ArticleSection[] = [
  {
    content: [
      { type: "paragraph", text: "Body copy." },
      { type: "callout", title: "Note", text: "Careful.", theme: "cream" }
    ]
  }
];

export default function Blog1Page() {
  return (
    <main>
      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Certification &amp; Diamond Quality
          </span>
          <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
            What Are the 4Cs?
          </h1>
          <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
            Cut, Colour &amp; Carat Explained • Published July 15, 2026
          </p>
        </div>
      </section>
      <DynamicArticle sections={articleSections} />
    </main>
  );
}
`;

const extracted = extractBlog(FIXTURE, { file: "fixture.tsx", slug: "test-slug" });

describe("extractBlog", () => {
    it("takes meta fields from the metadata export", () => {
        expect(extracted.metaTitle).toBe("Test Title | Aurelia Royale");
        expect(extracted.metaDescription).toBe("A test description.");
    });

    it("extracts the article sections verbatim", () => {
        expect(extracted.sections).toEqual([
            {
                content: [
                    { type: "paragraph", text: "Body copy." },
                    { type: "callout", title: "Note", text: "Careful.", theme: "cream" },
                ],
            },
        ]);
    });

    it("reads the h1 as the on-page title", () => {
        expect(extracted.title).toBe("What Are the 4Cs?");
    });

    it("decodes HTML entities in hero text", () => {
        expect(extracted.subtitle).toBe("Cut, Colour & Carat Explained");
    });

    it("maps both spellings of the eyebrow to one category key", () => {
        expect(extracted.category).toBe("certificationAndDiamondQuality");
    });

    it("splits the published date off the subtitle as an ISO date", () => {
        expect(extracted.datePublished).toBe("2026-07-15");
        expect(extracted.dateModified).toBe("2026-09-10");
    });

    it("never emits a canonical URL, which is generated per locale", () => {
        expect(extracted).not.toHaveProperty("canonical");
    });

    it("throws when the eyebrow is not a known category", () => {
        const bad = FIXTURE.replace(
            "Certification &amp; Diamond Quality",
            "Some Brand New Category",
        );
        expect(() => extractBlog(bad, { file: "f.tsx", slug: "s" })).toThrow(
            /Some Brand New Category/,
        );
    });

    it("throws when article content is not a literal", () => {
        const bad = FIXTURE.replace('text: "Body copy."', "text: sharedCopy");
        expect(() => extractBlog(bad, { file: "f.tsx", slug: "s" })).toThrow(
            /sharedCopy/,
        );
    });
});
```

- [ ] **Step 7: Run the test to verify it fails**

Run: `npm test -- scripts/i18n/lib/extract-blog.test.mjs`
Expected: FAIL — module not found.

- [ ] **Step 8: Implement the extractor**

```js
// scripts/i18n/lib/extract-blog.mjs
import ts from "typescript";
import { literalToJson } from "./ast-literal.mjs";
import { BLOG_CATEGORY_KEYS } from "./blog-categories.mjs";

const ENTITIES = {
    "&amp;": "&",
    "&apos;": "'",
    "&quot;": '"',
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " ",
    "&#39;": "'",
};

/** Decode the handful of JSX entities used in hero copy and collapse space. */
function decodeText(raw) {
    return raw
        .replace(/&[a-z]+;|&#\d+;/gi, (m) => ENTITIES[m.toLowerCase()] ?? m)
        .replace(/\s+/g, " ")
        .trim();
}

/** Concatenate the JsxText children of a JSX element. */
function jsxTextOf(element) {
    return decodeText(
        element.children
            .filter((child) => ts.isJsxText(child))
            .map((child) => child.text)
            .join(""),
    );
}

function classNameOf(element) {
    const opening = ts.isJsxElement(element) ? element.openingElement : element;
    for (const attr of opening.attributes.properties) {
        if (
            ts.isJsxAttribute(attr) &&
            attr.name.getText?.() !== undefined &&
            attr.name.escapedText === "className" &&
            attr.initializer &&
            ts.isStringLiteral(attr.initializer)
        ) {
            return attr.initializer.text;
        }
    }
    return "";
}

function tagNameOf(element) {
    const opening = ts.isJsxElement(element) ? element.openingElement : element;
    return opening.tagName.getText?.() ?? "";
}

/** Walk every JsxElement in the file. */
function collectJsxElements(sourceFile) {
    const found = [];
    const visit = (node) => {
        if (ts.isJsxElement(node)) found.push(node);
        ts.forEachChild(node, visit);
    };
    ts.forEachChild(sourceFile, visit);
    return found;
}

/** "Published July 15, 2026" -> "2026-07-15" */
const MONTHS = {
    january: "01", february: "02", march: "03", april: "04",
    may: "05", june: "06", july: "07", august: "08",
    september: "09", october: "10", november: "11", december: "12",
};

export function parseEnglishDate(text) {
    const m = text.match(/([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})/);
    if (!m) return undefined;
    const month = MONTHS[m[1].toLowerCase()];
    if (!month) return undefined;
    return `${m[3]}-${month}-${m[2].padStart(2, "0")}`;
}

/**
 * Pull one blog's translatable content out of its page.tsx.
 *
 * Returns the shape in spec section 3.4. The canonical URL is deliberately NOT
 * extracted: it is generated per locale at render time.
 */
export function extractBlog(sourceText, { file, slug }) {
    const clean = sourceText.replace(/^\uFEFF/, "");
    const sourceFile = ts.createSourceFile(file, clean, ts.ScriptTarget.Latest, true);
    const ctx = { file, sourceFile };

    // --- named declarations -------------------------------------------------
    const decls = {};
    for (const stmt of sourceFile.statements) {
        if (!ts.isVariableStatement(stmt)) continue;
        for (const d of stmt.declarationList.declarations) {
            if (ts.isIdentifier(d.name) && d.initializer) {
                decls[d.name.text] = d.initializer;
            }
        }
    }

    if (!decls.metadata) throw new Error(`${file}: no "metadata" declaration`);
    if (!decls.articleSections) throw new Error(`${file}: no "articleSections" declaration`);

    const metadata = literalToJson(decls.metadata, ctx);
    const sections = literalToJson(decls.articleSections, ctx);
    const schema = decls.schemaMarkup ? literalToJson(decls.schemaMarkup, ctx) : null;

    // --- hero ---------------------------------------------------------------
    const elements = collectJsxElements(sourceFile);
    const eyebrowEl = elements.find(
        (el) => tagNameOf(el) === "span" && classNameOf(el).includes("text-gold"),
    );
    const titleEl = elements.find((el) => tagNameOf(el) === "h1");
    const subtitleEl = elements.find(
        (el) => tagNameOf(el) === "p" && classNameOf(el).includes("tracking-widest"),
    );

    if (!eyebrowEl) throw new Error(`${file}: no hero eyebrow span found`);
    if (!titleEl) throw new Error(`${file}: no <h1> found`);

    // jsxTextOf collects only DIRECT JsxText children, so an <h1> wrapping a
    // nested element would yield "". Fail loudly rather than ship a blank
    // heading in six languages.
    const title = jsxTextOf(titleEl);
    if (!title) {
        throw new Error(
            `${file}: <h1> produced an empty title — it probably contains nested elements and needs a richer hero parser`,
        );
    }

    const eyebrow = jsxTextOf(eyebrowEl);
    const category = BLOG_CATEGORY_KEYS[eyebrow];
    if (!category) {
        throw new Error(
            `${file}: unknown hero category ${JSON.stringify(eyebrow)} — add it to blog-categories.mjs`,
        );
    }

    const heroLine = subtitleEl ? jsxTextOf(subtitleEl) : "";
    const [subtitlePart, datePart] = heroLine.split("•").map((s) => s?.trim() ?? "");

    // --- dates --------------------------------------------------------------
    const webPage = schema?.["@graph"]?.find((n) => n["@type"] === "WebPage");
    const datePublished =
        webPage?.datePublished ?? parseEnglishDate(datePart ?? "") ?? undefined;
    const dateModified = webPage?.dateModified ?? datePublished;

    if (!datePublished) {
        throw new Error(
            `${file}: could not determine datePublished from schema or hero line ${JSON.stringify(heroLine)}`,
        );
    }

    return {
        metaTitle: metadata.title,
        metaDescription: metadata.description,
        category,
        title,
        subtitle: subtitlePart || undefined,
        datePublished,
        dateModified,
        sections,
    };
}
```

- [ ] **Step 9: Run the test to verify it passes**

Run: `npm test -- scripts/i18n/lib/extract-blog.test.mjs`
Expected: 9 passed.

- [ ] **Step 10: Declare the slugs that must not be extracted**

`advantages-of-lab-grown-diamonds` has both a folder AND a permanent redirect
pointing away from it in `next.config.ts` (under the "Content consolidation"
comment). The redirect fires at the edge before routing, so that page is already
unreachable: extracting it would translate six pages nobody can reach and put
six redirecting URLs in the sitemap.

The list lives here as plain data because this is a `.mjs` script and the
TypeScript redirect table does not exist until Task 14 — which then adds a test
asserting the two agree.

```js
// scripts/i18n/lib/excluded-slugs.mjs

/**
 * Blog slugs that are redirect SOURCES in next.config.ts, and so are not
 * servable. Must stay equal to REDIRECTED_AWAY_SLUGS in
 * src/lib/i18n/blogRedirects.ts — Task 14 adds a test that enforces it.
 */
export const EXCLUDED_SLUGS = ["advantages-of-lab-grown-diamonds"];
```

- [ ] **Step 11: Write the extractor CLI with its round-trip gate**

```js
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
```

- [ ] **Step 12: Run the extractor over every servable blog**

Run: `node scripts/i18n/extract-blogs.mjs`
Expected: `extracted 98 blog(s) to content/blogs/<slug>/en.json` — 99 folders minus the one excluded redirect source. If it reports failures, fix the extractor or add the missing category; never hand-edit a blog to make it parse.

- [ ] **Step 13: Sanity-check the output**

```bash
ls content/blogs | wc -l
node -e "const c=require('./content/blogs/4cs-of-lab-grown-diamonds/en.json');console.log(c.title);console.log(c.category);console.log(c.datePublished);console.log('sections:',c.sections.length)"
```

Expected: `98`; the 4Cs title, `labGrownDiamondEducation`, `2026-07-15`, and a non-zero section count.

- [ ] **Step 14: Commit**

```bash
git add scripts/i18n content/blogs
git commit -m "feat(i18n): extract 98 servable blog articles to per-locale JSON"
```

---

### Task 6: Blog JSON-LD generator

Replaces the handwritten `schemaMarkup` in 62 files, where the `FAQPage` duplicates the `faq` block text verbatim.

**Files:**
- Create: `src/lib/i18n/paths.ts`
- Create: `src/lib/blogs/content.ts`
- Create: `src/lib/blogs/schema.ts`
- Test: `src/lib/i18n/paths.test.ts`
- Test: `src/lib/blogs/schema.test.ts`

**Interfaces:**
- Consumes: `SITE_URL`, `SITE_NAME` from `@/config/site`; `ArticleSection`, `FaqItem` from `@/components/shared/DynamicArticle`; `routing`, `Locale` from `@/i18n/routing`.
- Produces:
  - From `src/lib/i18n/paths.ts` — used by blog pages, storefront pages and the sitemap alike:
    - `localePath(locale: Locale, path: string): string` — prefixed, trailing-slashed path.
    - `localeUrl(locale: Locale, path: string): string` — absolute form.
    - `localeAlternates(path: string): Record<Locale, string>` — the hreflang map for `alternates.languages`.
  - `type BlogContent` from `src/lib/blogs/content.ts` — the JSON shape Task 5 emits.
  - `blogPath(slug, locale)`, `blogIndexPath(locale)`, `blogUrl(slug, locale)`, `blogIndexUrl(locale)` from `src/lib/blogs/content.ts`.
  - `collectFaqs(sections: ArticleSection[]): FaqItem[]` from `src/lib/blogs/schema.ts`.
  - `buildBlogSchema(content: BlogContent, slug: string, locale: Locale): object` from `src/lib/blogs/schema.ts`.

- [ ] **Step 1: Write the failing schema test**

FAQs live INSIDE `articleSections` as `type: "faq"` blocks in 98 of 99 files, so the generator scans sections rather than reading a top-level field. That keeps `DynamicArticle` untouched and the FAQ's on-page position exact.

```ts
// src/lib/blogs/schema.test.ts
import { describe, expect, it } from "vitest";
import { buildBlogSchema, collectFaqs } from "@/lib/blogs/schema";
import type { BlogContent } from "@/lib/blogs/content";

const content: BlogContent = {
    metaTitle: "Test Meta Title",
    metaDescription: "Test meta description.",
    category: "labGrownDiamondEducation",
    title: "What Are the 4Cs?",
    subtitle: "Cut, Colour & Carat Explained",
    datePublished: "2026-07-15",
    dateModified: "2026-09-10",
    sections: [
        {
            content: [
                {
                    type: "image",
                    src: "/images/blog/test/hero.jpg",
                    alt: "A diamond",
                    title: "Hero",
                },
                { type: "paragraph", text: "Body." },
            ],
        },
        {
            heading: "FAQs",
            content: [
                {
                    type: "faq",
                    title: "Frequently Asked Questions",
                    items: [
                        { question: "Q1?", answer: "A1." },
                        { question: "Q2?", answer: "A2." },
                    ],
                },
            ],
        },
    ],
};

describe("collectFaqs", () => {
    it("finds FAQ items inside article sections", () => {
        expect(collectFaqs(content.sections)).toEqual([
            { question: "Q1?", answer: "A1." },
            { question: "Q2?", answer: "A2." },
        ]);
    });

    it("returns an empty array when a blog has no FAQ block", () => {
        expect(collectFaqs([{ content: [{ type: "paragraph", text: "x" }] }])).toEqual([]);
    });
});

describe("buildBlogSchema", () => {
    const graphOf = (locale: "en" | "es") =>
        (buildBlogSchema(content, "test-slug", locale) as { "@graph": Array<Record<string, unknown>> })[
            "@graph"
        ];

    const nodeOf = (locale: "en" | "es", type: string) =>
        graphOf(locale).find((n) => n["@type"] === type)!;

    it("emits the seven expected graph nodes", () => {
        expect(graphOf("en").map((n) => n["@type"])).toEqual([
            "Organization",
            "WebSite",
            "ImageObject",
            "WebPage",
            "BlogPosting",
            "BreadcrumbList",
            "FAQPage",
        ]);
    });

    it("builds the FAQPage from the article's own FAQ block", () => {
        const faq = nodeOf("en", "FAQPage") as {
            mainEntity: Array<{ name: string; acceptedAnswer: { text: string } }>;
        };
        expect(faq.mainEntity).toHaveLength(2);
        expect(faq.mainEntity[0].name).toBe("Q1?");
        expect(faq.mainEntity[0].acceptedAnswer.text).toBe("A1.");
    });

    it("omits FAQPage entirely when the blog has no FAQs", () => {
        const noFaq = { ...content, sections: [content.sections[0]] };
        const types = (
            buildBlogSchema(noFaq, "s", "en") as { "@graph": Array<{ "@type": string }> }
        )["@graph"].map((n) => n["@type"]);
        expect(types).not.toContain("FAQPage");
    });

    it("uses unprefixed URLs for English", () => {
        expect(nodeOf("en", "WebPage").url).toBe(
            "https://www.aureliaroyale.com/blog/test-slug/",
        );
    });

    it("uses locale-prefixed URLs for other locales", () => {
        expect(nodeOf("es", "WebPage").url).toBe(
            "https://www.aureliaroyale.com/es/blog/test-slug/",
        );
    });

    it("carries the article dates through to BlogPosting", () => {
        const post = nodeOf("en", "BlogPosting");
        expect(post.datePublished).toBe("2026-07-15");
        expect(post.dateModified).toBe("2026-09-10");
        expect(post.headline).toBe("What Are the 4Cs?");
    });

    it("points the breadcrumb at the locale's own blog index", () => {
        const crumbs = nodeOf("es", "BreadcrumbList") as {
            itemListElement: Array<{ item: string }>;
        };
        expect(crumbs.itemListElement[1].item).toBe(
            "https://www.aureliaroyale.com/es/blog/",
        );
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/lib/blogs/schema.test.ts`
Expected: FAIL — modules not found.

- [ ] **Step 3: Write the failing path-helper test**

Every page in the app needs the same hreflang map, so these helpers are shared rather than blog-specific.

```ts
// src/lib/i18n/paths.test.ts
import { describe, expect, it } from "vitest";
import { localeAlternates, localePath, localeUrl } from "@/lib/i18n/paths";

describe("localePath", () => {
    it("leaves English unprefixed", () => {
        expect(localePath("en", "/about")).toBe("/about/");
        expect(localePath("en", "/")).toBe("/");
    });

    it("prefixes the other locales", () => {
        expect(localePath("es", "/about")).toBe("/es/about/");
        expect(localePath("de", "/blog/x")).toBe("/de/blog/x/");
    });

    it("gives the locale root a single trailing slash", () => {
        expect(localePath("it", "/")).toBe("/it/");
    });

    it("normalises missing and duplicated slashes", () => {
        expect(localePath("fr", "about")).toBe("/fr/about/");
        expect(localePath("fr", "/about/")).toBe("/fr/about/");
    });
});

describe("localeUrl", () => {
    it("is absolute", () => {
        expect(localeUrl("nl", "/about")).toBe("https://www.aureliaroyale.com/nl/about/");
    });
});

describe("localeAlternates", () => {
    it("maps all six locales to their own absolute URL", () => {
        expect(localeAlternates("/about")).toEqual({
            en: "https://www.aureliaroyale.com/about/",
            fr: "https://www.aureliaroyale.com/fr/about/",
            it: "https://www.aureliaroyale.com/it/about/",
            de: "https://www.aureliaroyale.com/de/about/",
            nl: "https://www.aureliaroyale.com/nl/about/",
            es: "https://www.aureliaroyale.com/es/about/",
        });
    });
});
```

- [ ] **Step 4: Implement the shared path helpers**

```ts
// src/lib/i18n/paths.ts
import { SITE_URL } from "@/config/site";
import { routing, type Locale } from "@/i18n/routing";

/** Locale-prefixed path with the trailing slash `trailingSlash: true` requires. */
export function localePath(locale: Locale, path: string): string {
    const clean = path.replace(/^\/+|\/+$/g, "");
    const withSlash = clean === "" ? "/" : `/${clean}/`;
    return locale === routing.defaultLocale ? withSlash : `/${locale}${withSlash}`;
}

export const localeUrl = (locale: Locale, path: string) =>
    `${SITE_URL}${localePath(locale, path)}`;

/**
 * The hreflang map for `alternates.languages`. Spec section 5 requires this on
 * every page, so every page's generateMetadata calls it with its own path.
 */
export function localeAlternates(path: string): Record<Locale, string> {
    return Object.fromEntries(
        routing.locales.map((locale) => [locale, localeUrl(locale, path)]),
    ) as Record<Locale, string>;
}
```

- [ ] **Step 5: Run the path test to verify it passes**

Run: `npm test -- src/lib/i18n/paths.test.ts`
Expected: 7 passed.

- [ ] **Step 6: Define the blog content type and URL helpers**

```ts
// src/lib/blogs/content.ts
import type { ArticleSection } from "@/components/shared/DynamicArticle";
import type { Locale } from "@/i18n/routing";
import { localePath, localeUrl } from "@/lib/i18n/paths";

/** The shape of content/blogs/<slug>/<locale>.json, as emitted by extract-blogs.mjs. */
export type BlogContent = {
    metaTitle: string;
    metaDescription: string;
    /** Key into the `blogCategories` message namespace. */
    category: string;
    title: string;
    subtitle?: string;
    /** ISO date; formatted per locale at render time. */
    datePublished: string;
    dateModified: string;
    sections: ArticleSection[];
};

export const blogPathFor = (slug: string) => `/blog/${slug}`;

export const blogPath = (slug: string, locale: Locale) =>
    localePath(locale, blogPathFor(slug));

export const blogIndexPath = (locale: Locale) => localePath(locale, "/blog");

export const blogUrl = (slug: string, locale: Locale) =>
    localeUrl(locale, blogPathFor(slug));

export const blogIndexUrl = (locale: Locale) => localeUrl(locale, "/blog");
```

- [ ] **Step 7: Implement the schema generator**

```ts
// src/lib/blogs/schema.ts
import type { ArticleSection, FaqItem } from "@/components/shared/DynamicArticle";
import { SITE_NAME, SITE_URL } from "@/config/site";
import type { Locale } from "@/i18n/routing";
import { localeUrl } from "@/lib/i18n/paths";
import { blogIndexUrl, blogUrl, type BlogContent } from "./content";

/**
 * Gather every FAQ item from a blog's own `faq` content blocks.
 *
 * The 99 blogs keep their FAQs inside `articleSections`, so this is the single
 * source for both the rendered accordion and the FAQPage structured data. The
 * old handwritten schemaMarkup duplicated this text in 62 files, which is
 * exactly the drift this removes.
 */
export function collectFaqs(sections: ArticleSection[]): FaqItem[] {
    const out: FaqItem[] = [];
    for (const section of sections) {
        for (const block of section.content) {
            if (block.type === "faq") out.push(...block.items);
        }
    }
    return out;
}

/** First image block in the article, used as the page's primary image. */
function primaryImage(sections: ArticleSection[]) {
    for (const section of sections) {
        for (const block of section.content) {
            if (block.type === "image") return block;
        }
    }
    return undefined;
}

export function buildBlogSchema(
    content: BlogContent,
    slug: string,
    locale: Locale,
): object {
    const pageUrl = blogUrl(slug, locale);
    const homeUrl = localeUrl(locale, "/");
    const image = primaryImage(content.sections);
    const faqs = collectFaqs(content.sections);

    const graph: Array<Record<string, unknown>> = [
        {
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: SITE_NAME,
            url: `${SITE_URL}/`,
        },
        {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: `${SITE_URL}/`,
            name: SITE_NAME,
            publisher: { "@id": `${SITE_URL}/#organization` },
        },
        {
            "@type": "ImageObject",
            "@id": `${pageUrl}#primaryimage`,
            url: image ? `${SITE_URL}${image.src}` : `${SITE_URL}/icon.png`,
            caption: image?.caption ?? image?.alt ?? content.title,
        },
        {
            "@type": "WebPage",
            "@id": `${pageUrl}#webpage`,
            url: pageUrl,
            name: content.title,
            inLanguage: locale,
            isPartOf: { "@id": `${SITE_URL}/#website` },
            primaryImageOfPage: { "@id": `${pageUrl}#primaryimage` },
            breadcrumb: { "@id": `${pageUrl}#breadcrumb` },
            datePublished: content.datePublished,
            dateModified: content.dateModified,
        },
        {
            "@type": "BlogPosting",
            "@id": `${pageUrl}#article`,
            headline: content.title,
            description: content.metaDescription,
            image: { "@id": `${pageUrl}#primaryimage` },
            inLanguage: locale,
            datePublished: content.datePublished,
            dateModified: content.dateModified,
            author: { "@id": `${SITE_URL}/#organization` },
            publisher: { "@id": `${SITE_URL}/#organization` },
            mainEntityOfPage: { "@id": `${pageUrl}#webpage` },
        },
        {
            "@type": "BreadcrumbList",
            "@id": `${pageUrl}#breadcrumb`,
            itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: homeUrl },
                { "@type": "ListItem", position: 2, name: "Blog", item: blogIndexUrl(locale) },
                { "@type": "ListItem", position: 3, name: content.title, item: pageUrl },
            ],
        },
    ];

    if (faqs.length > 0) {
        graph.push({
            "@type": "FAQPage",
            "@id": `${pageUrl}#faq`,
            mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
        });
    }

    return { "@context": "https://schema.org", "@graph": graph };
}
```

- [ ] **Step 8: Run the test to verify it passes**

Run: `npm test -- src/lib/blogs/schema.test.ts`
Expected: 10 passed.

- [ ] **Step 9: Diff the generated schema against the handwritten one**

Before any blog folder is deleted, confirm the generated graph is equivalent to what is live today. Sample across both groups: blogs that have `schemaMarkup` and blogs that do not.

```bash
node -e '
const fs=require("fs");
const slugs=["4cs-of-lab-grown-diamonds","how-are-lab-grown-diamonds-made","store-diamond-jewellery"];
for(const s of slugs){
  const src=fs.readFileSync(`src/app/[locale]/blog/${s}/page.tsx`,"utf8");
  const hasSchema=src.includes("schemaMarkup");
  const c=JSON.parse(fs.readFileSync(`content/blogs/${s}/en.json`,"utf8"));
  const faqs=c.sections.flatMap(x=>x.content).filter(b=>b.type==="faq").flatMap(b=>b.items);
  const inSchema=(src.match(/"@type": "Question"/g)||[]).length;
  console.log(s,"| handwritten schema:",hasSchema,"| schema questions:",inSchema,"| content faqs:",faqs.length);
}'
```

Expected: for blogs with a handwritten `FAQPage`, the schema question count equals the content FAQ count — proving the generated `FAQPage` carries the same questions. Investigate any mismatch before continuing.

- [ ] **Step 10: Commit**

```bash
git add src/lib
git commit -m "feat(i18n): add locale path helpers and generate blog JSON-LD from content"
```

---

### Task 7: Shared blog route

Replaces all 99 blog folders with one route. Owns Review Focus 2 (missing locale file) and Review Focus 3 (href prefixing).

**Files:**
- Create: `src/lib/blogs/registry.ts`
- Create: `src/lib/blogs/load.ts`
- Create: `src/lib/blogs/links.ts`
- Create: `src/app/[locale]/blog/[slug]/page.tsx`
- Modify: `src/components/shared/ArticleInlineContent.tsx`
- Modify: `src/components/shared/DynamicArticle.tsx`
- Test: `src/lib/blogs/load.test.ts`
- Test: `src/lib/blogs/links.test.ts`
- Delete: `src/app/[locale]/blog/<slug>/` × 99

**Interfaces:**
- Consumes: `BlogContent`, `blogPathFor`, `blogUrl` from `src/lib/blogs/content.ts`; `localeAlternates` from `src/lib/i18n/paths.ts`; `buildBlogSchema` from `src/lib/blogs/schema.ts`; `assertLocale` from `src/i18n/locale-guard.ts`; `routing`, `Locale`.
- Produces:
  - `BLOG_SLUGS: readonly string[]` from `src/lib/blogs/registry.ts`.
  - `loadBlogContent(slug: string, locale: Locale): Promise<BlogContent | null>` from `src/lib/blogs/load.ts` — falls back to English when the locale file is absent, returns `null` only when English is absent too.
  - `resolveBlogContent(localized: BlogContent | null, fallback: BlogContent | null, locale: Locale): BlogContent | null` from the same file — the pure fallback decision, so it is testable without depending on which locale files exist.
  - `normalizeContentHref(href: string): string` from `src/lib/blogs/links.ts`.

- [ ] **Step 1: Generate the registry from the extracted content**

```bash
node -e '
const fs=require("fs");
const slugs=fs.readdirSync("content/blogs").sort();
const body=slugs.map(s=>`    ${JSON.stringify(s)},`).join("\n");
fs.mkdirSync("src/lib/blogs",{recursive:true});
fs.writeFileSync("src/lib/blogs/registry.ts",
`// Generated by scripts/i18n/extract-blogs.mjs output; keep alphabetical.
//
// Every slug here is served by the shared [locale]/blog/[slug] route from
// content/blogs/<slug>/<locale>.json. A real folder at
// src/app/[locale]/blog/<slug>/ would win over the catch-all, so no blog may
// have both.
export const BLOG_SLUGS = [
${body}
] as const;

export type BlogSlug = (typeof BLOG_SLUGS)[number];
`);
console.log("wrote",slugs.length,"slugs");'
```

Expected: `wrote 98 slugs` — the servable blogs, excluding the redirect source.

- [ ] **Step 2: Write the failing loader test**

Review Focus 2: an interrupted translation run leaves a locale file missing. That must degrade to English, not 500.

The fallback behaviour is tested as a pure decision, NOT by comparing two real
content files. An assertion like `expect(dutch.title).toBe(english.title)` passes
today only because `nl.json` does not exist yet — it would invert and fail the
moment Task 13 adds real Dutch content, turning a Review Focus guard into a
broken test. So the decision is extracted and tested directly.

```ts
// src/lib/blogs/load.test.ts
import { describe, expect, it } from "vitest";
import { loadBlogContent, resolveBlogContent } from "@/lib/blogs/load";
import { BLOG_SLUGS } from "@/lib/blogs/registry";
import type { BlogContent } from "@/lib/blogs/content";

const english = { title: "English title" } as BlogContent;
const dutch = { title: "Nederlandse titel" } as BlogContent;

describe("resolveBlogContent", () => {
    it("prefers the localised file when it exists", () => {
        expect(resolveBlogContent(dutch, english, "nl")).toBe(dutch);
    });

    // Review Focus 2: an interrupted translation run must degrade to English.
    it("falls back to English when the localised file is missing", () => {
        expect(resolveBlogContent(null, english, "nl")).toBe(english);
    });

    it("returns null when English is missing too", () => {
        expect(resolveBlogContent(null, null, "nl")).toBeNull();
    });

    it("never substitutes anything for a missing English file in English", () => {
        expect(resolveBlogContent(null, english, "en")).toBeNull();
    });
});

describe("loadBlogContent", () => {
    it("loads English content for a known slug", async () => {
        const content = await loadBlogContent(BLOG_SLUGS[0], "en");
        expect(content?.title).toBeTruthy();
        expect(Array.isArray(content?.sections)).toBe(true);
    });

    it("returns null for an unknown slug", async () => {
        expect(await loadBlogContent("no-such-blog", "en")).toBeNull();
    });

    it("never throws for any registered slug in any locale", async () => {
        for (const locale of ["en", "fr", "it", "de", "nl", "es"] as const) {
            await expect(
                loadBlogContent(BLOG_SLUGS[0], locale),
            ).resolves.not.toBeNull();
        }
    });
});
```

- [ ] **Step 3: Run the test to verify it fails**

Run: `npm test -- src/lib/blogs/load.test.ts`
Expected: FAIL — `@/lib/blogs/load` not found.

- [ ] **Step 4: Implement the loader**

```ts
// src/lib/blogs/load.ts
import fs from "node:fs/promises";
import path from "node:path";
import { routing, type Locale } from "@/i18n/routing";
import { BLOG_SLUGS } from "./registry";
import type { BlogContent } from "./content";

const CONTENT_ROOT = path.join(process.cwd(), "content/blogs");

async function readContentFile(slug: string, locale: Locale) {
    try {
        const raw = await fs.readFile(
            path.join(CONTENT_ROOT, slug, `${locale}.json`),
            "utf8",
        );
        return JSON.parse(raw) as BlogContent;
    } catch {
        return null;
    }
}

/**
 * Decide which content to serve, given what was found on disk.
 *
 * Pure so it can be tested without depending on which locale files happen to
 * exist — a filesystem-based test of this rule inverts as soon as the real
 * translations land.
 */
export function resolveBlogContent(
    localized: BlogContent | null,
    fallback: BlogContent | null,
    locale: Locale,
): BlogContent | null {
    if (localized) return localized;
    if (locale === routing.defaultLocale) return null;
    return fallback;
}

/**
 * Load one blog's content for one locale.
 *
 * Falls back to English when a locale file is absent — an interrupted or
 * partial translation run must degrade to readable English, never to a 500.
 * Returns null only when the slug is unknown or English itself is missing,
 * which the route turns into a 404.
 */
export async function loadBlogContent(
    slug: string,
    locale: Locale,
): Promise<BlogContent | null> {
    if (!(BLOG_SLUGS as readonly string[]).includes(slug)) return null;

    const localized = await readContentFile(slug, locale);
    const fallback =
        localized || locale === routing.defaultLocale
            ? null
            : await readContentFile(slug, routing.defaultLocale);

    if (!localized && fallback) {
        console.warn(
            `[i18n] missing blog content for ${slug}/${locale}.json — served English`,
        );
    }

    return resolveBlogContent(localized, fallback, locale);
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/lib/blogs/load.test.ts`
Expected: 7 passed. The fallback assertions are pure, so they stay valid after Task 13 adds real translations.

- [ ] **Step 6: Write the failing href-normalisation test**

Review Focus 3: with 9,765 paragraphs, an author will eventually write `/es/shop/` or an external URL inside content.

```ts
// src/lib/blogs/links.test.ts
import { describe, expect, it } from "vitest";
import { isExternalHref, normalizeContentHref } from "@/lib/blogs/links";

describe("normalizeContentHref", () => {
    it("leaves an unprefixed internal path alone", () => {
        expect(normalizeContentHref("/shop/")).toBe("/shop/");
    });

    // Review Focus 3: must not become /es/es/shop/.
    it("strips a locale prefix an author wrongly included", () => {
        expect(normalizeContentHref("/es/shop/")).toBe("/shop/");
        expect(normalizeContentHref("/de/blog/4cs-of-lab-grown-diamonds/")).toBe(
            "/blog/4cs-of-lab-grown-diamonds/",
        );
    });

    it("does not strip a path segment that merely looks like a locale", () => {
        expect(normalizeContentHref("/it-is-a-guide/")).toBe("/it-is-a-guide/");
        expect(normalizeContentHref("/english/")).toBe("/english/");
    });

    it("leaves the English prefix-free default alone", () => {
        expect(normalizeContentHref("/en/shop/")).toBe("/shop/");
    });

    it("leaves anchors and query strings intact", () => {
        expect(normalizeContentHref("/shop/?category=rings")).toBe("/shop/?category=rings");
        expect(normalizeContentHref("#faq")).toBe("#faq");
    });
});

describe("isExternalHref", () => {
    it("recognises external and non-http schemes", () => {
        expect(isExternalHref("https://www.igi.org/")).toBe(true);
        expect(isExternalHref("mailto:hello@aureliaroyale.com")).toBe(true);
        expect(isExternalHref("tel:+441234567890")).toBe(true);
    });

    it("treats internal paths as internal", () => {
        expect(isExternalHref("/shop/")).toBe(false);
        expect(isExternalHref("#faq")).toBe(false);
    });
});
```

- [ ] **Step 7: Run the test to verify it fails**

Run: `npm test -- src/lib/blogs/links.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 8: Implement href normalisation**

```ts
// src/lib/blogs/links.ts
import { routing } from "@/i18n/routing";

/** True for anything the locale-aware Link must not touch. */
export function isExternalHref(href: string): boolean {
    return /^[a-z][a-z0-9+.-]*:/i.test(href);
}

/**
 * Strip an accidental locale prefix from a content href.
 *
 * Internal hrefs in content are written WITHOUT a locale prefix; the
 * locale-aware Link adds it. If an author writes "/es/shop/" anyway, the Link
 * would produce "/es/es/shop/". Only an exact locale segment is removed, so
 * "/italian-cut/" and "/english/" are untouched.
 */
export function normalizeContentHref(href: string): string {
    if (isExternalHref(href) || !href.startsWith("/")) return href;

    const match = href.match(/^\/([^/?#]+)(\/.*|\?.*|#.*)?$/);
    if (!match) return href;

    const [, first, rest] = match;
    if ((routing.locales as readonly string[]).includes(first)) {
        return rest && rest.startsWith("/") ? rest : `/${rest ?? ""}`.replace(/^\/\//, "/");
    }
    return href;
}
```

- [ ] **Step 9: Run the test to verify it passes**

Run: `npm test -- src/lib/blogs/links.test.ts`
Expected: 7 passed.

- [ ] **Step 10: Make content links locale-aware**

In `src/components/shared/ArticleInlineContent.tsx`, replace the `next/link` import and route internal hrefs through the normaliser:

```tsx
import { Link } from "@/i18n/navigation";
import { isExternalHref, normalizeContentHref } from "@/lib/blogs/links";
```

Where a part with an `href` is rendered, choose the element by scheme — external links keep a plain `<a>` with `target="_blank" rel="noopener noreferrer"`, internal links use the locale-aware `Link` with the normalised href:

```tsx
if (part.href) {
    element = isExternalHref(part.href) ? (
        <a
            href={part.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold underline decoration-[1px] underline-offset-4 hover:text-foreground"
        >
            {element}
        </a>
    ) : (
        <Link
            href={normalizeContentHref(part.href)}
            className="text-gold underline decoration-[1px] underline-offset-4 hover:text-foreground"
        >
            {element}
        </Link>
    );
}
```

Apply the same change to the `cta-group` and `cta-banner` branches of `src/components/shared/DynamicArticle.tsx`, which also use `next/link` with content-supplied hrefs (`btn.href`, `shopHref`, `contactHref`).

- [ ] **Step 11: Create the shared blog route**

```tsx
// src/app/[locale]/blog/[slug]/page.tsx
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import DynamicArticle from "@/components/shared/DynamicArticle";
import RelatedArticles from "@/components/shared/RelatedArticles";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { routing } from "@/i18n/routing";
import { assertLocale } from "@/i18n/locale-guard";
import { BLOG_SLUGS } from "@/lib/blogs/registry";
import { loadBlogContent } from "@/lib/blogs/load";
import { blogPathFor, blogUrl } from "@/lib/blogs/content";
import { localeAlternates } from "@/lib/i18n/paths";
import { buildBlogSchema } from "@/lib/blogs/schema";

type PageProps = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
    return routing.locales.flatMap((locale) =>
        BLOG_SLUGS.map((slug) => ({ locale, slug })),
    );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: raw, slug } = await params;
    const locale = assertLocale(raw);
    const content = await loadBlogContent(slug, locale);
    if (!content) return {};

    return {
        title: content.metaTitle,
        description: content.metaDescription,
        alternates: {
            canonical: blogUrl(slug, locale),
            languages: localeAlternates(blogPathFor(slug)),
        },
        robots: { index: true, follow: true },
    };
}

export default async function BlogArticlePage({ params }: PageProps) {
    const { locale: raw, slug } = await params;
    const locale = assertLocale(raw);
    setRequestLocale(locale);

    const content = await loadBlogContent(slug, locale);
    if (!content) notFound();

    const tCategories = await getTranslations("blogCategories");
    const published = new Intl.DateTimeFormat(locale, {
        year: "numeric",
        month: "long",
        day: "numeric",
    }).format(new Date(content.datePublished));
    const tBlog = await getTranslations("BlogArticle");

    return (
        <main className="min-h-screen bg-background text-foreground font-sans overflow-x-clip">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(buildBlogSchema(content, slug, locale)),
                }}
            />

            <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#e8e5dc] py-16">
                <div className="mx-auto max-w-4xl px-6 text-center">
                    <span className="font-jost text-xs font-semibold uppercase tracking-[0.25em] text-gold">
                        {tCategories(content.category)}
                    </span>
                    <h1 className="mt-4 font-cormorant text-5xl md:text-6xl font-medium leading-tight text-foreground uppercase tracking-wide">
                        {content.title}
                    </h1>
                    <p className="mt-6 font-jost text-sm font-light uppercase tracking-widest text-[#5a5a5a]">
                        {content.subtitle
                            ? `${content.subtitle} • ${tBlog("published", { date: published })}`
                            : tBlog("published", { date: published })}
                    </p>
                </div>
            </section>

            <DynamicArticle sections={content.sections} />
            <RelatedArticles currentSlug={slug} />
            <NewsletterSection />
        </main>
    );
}
```

- [ ] **Step 12: Generate the blogCategories namespace and add BlogArticle**

`blogCategories` is GENERATED from `BLOG_CATEGORY_LABELS`, not hand-written. The
extractor already fails on any eyebrow missing from that map, so generating the
namespace from the same constant means the 7 key/label pairs have exactly one
source and cannot drift out of step with the extracted `category` values.

```bash
node -e '
const fs=require("fs");
const { BLOG_CATEGORY_LABELS } = await import("./scripts/i18n/lib/blog-categories.mjs");
const extra = {
  published: "Published {date}",
  relatedArticles: "Related Articles",
  backToGuides: "← Back to all guides",
};
for (const l of ["en","fr","it","de","nl","es"]) {
  const f = `messages/${l}.json`;
  const m = JSON.parse(fs.readFileSync(f,"utf8"));
  m.blogCategories = { ...BLOG_CATEGORY_LABELS };
  m.BlogArticle = { ...extra, ...(m.BlogArticle ?? {}) };
  fs.writeFileSync(f, JSON.stringify(m,null,2)+"
");
}
console.log("blogCategories +", Object.keys(BLOG_CATEGORY_LABELS).length, "keys and BlogArticle written for 6 locales");
' --input-type=module
```

Expected: `blogCategories + 7 keys and BlogArticle written for 6 locales`.

- [ ] **Step 13: Delete the 99 blog folders**

All 99 go, including the excluded redirect source — its content was deliberately not extracted, and its redirect in `next.config.ts` keeps the URL working.

The catch-all cannot serve a slug while a real folder exists. Delete in one commit after the route is proven on a single blog first.

```bash
# Prove the shared route on ONE blog before mass deletion.
git rm -r "src/app/[locale]/blog/4cs-of-lab-grown-diamonds"
npm run dev   # then open /blog/4cs-of-lab-grown-diamonds/ and /es/blog/4cs-of-lab-grown-diamonds/
```

Both must render fully, with the hero, article body, FAQs and related articles, and no `[MISSING:` anywhere. Then remove the rest:

```bash
for d in content/blogs/*/; do
  slug=$(basename "$d")
  if [ -d "src/app/[locale]/blog/$slug" ]; then
    git rm -rq "src/app/[locale]/blog/$slug"
  fi
done
ls "src/app/[locale]/blog"
```

Expected remaining entries: `[slug]`, `BlogFilters.tsx`, `blogUtils.ts`, `layout.tsx`, `page.tsx`.

And `npm run build` must report static params for 98 slugs x 6 locales = 588 blog pages.

- [ ] **Step 14: Verify**

Run: `npm test && npx tsc --noEmit && npm run build`
Expected: all pass, and the build reports static params for 98 slugs × 6 locales.

- [ ] **Step 15: Commit**

```bash
git add -A
git commit -m "feat(i18n): serve all blogs from one shared [locale]/blog/[slug] route"
```

---

### Task 8: Blog listing, cards and related articles

**Files:**
- Modify: `src/data/blogs.data.ts`
- Modify: `src/app/[locale]/blog/page.tsx`
- Modify: `src/app/[locale]/blog/BlogFilters.tsx`
- Modify: `src/app/[locale]/blog/blogUtils.ts`
- Modify: `src/components/shared/RelatedArticles.tsx`
- Modify: `messages/*.json`
- Test: `src/data/blogs.data.test.ts`

**Interfaces:**
- Consumes: `BLOG_SLUGS` from `src/lib/blogs/registry.ts`; `blogPath` from `src/lib/blogs/content.ts`.
- Produces: `BLOGS_DATA: BlogPost[]` where `BlogPost` is now `{ slug: string; date: string; image: string }` — `title`, `author` and `excerpt` move to the `blogCards` message namespace keyed by slug.

- [ ] **Step 1: Write the failing data-integrity test**

`blogs.data.ts` holds 99 entries, exactly matching the 99 folders — an earlier
count of 100 was wrong, having also matched the `slug: string;` line of the
`BlogPost` interface. What this test does pin is that the card set tracks the
SERVABLE set: `advantages-of-lab-grown-diamonds` is a redirect source, so it has
no content and must have no card, or `/blog` shows a card whose link 308s away.

```ts
// src/data/blogs.data.test.ts
import { describe, expect, it } from "vitest";
import { BLOGS_DATA } from "@/data/blogs.data";
import { BLOG_SLUGS } from "@/lib/blogs/registry";

describe("BLOGS_DATA", () => {
    it("has one card per registered blog and no orphans", () => {
        expect(BLOGS_DATA.map((p) => p.slug).sort()).toEqual([...BLOG_SLUGS].sort());
    });

    it("has no duplicate slugs", () => {
        const slugs = BLOGS_DATA.map((p) => p.slug);
        expect(new Set(slugs).size).toBe(slugs.length);
    });

    it("no longer carries translatable copy, which lives in messages", () => {
        for (const post of BLOGS_DATA) {
            expect(post).not.toHaveProperty("title");
            expect(post).not.toHaveProperty("excerpt");
            expect(post).not.toHaveProperty("author");
        }
    });

    it("keeps an image and a parseable date for every card", () => {
        for (const post of BLOGS_DATA) {
            expect(post.image).toMatch(/^\//);
            expect(Number.isNaN(new Date(post.date).getTime())).toBe(false);
        }
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/data/blogs.data.test.ts`
Expected: FAIL — the slug sets differ and `title` still exists.

- [ ] **Step 3: Split the card data into code and messages**

```bash
node -e '
const fs=require("fs");
const src=fs.readFileSync("src/data/blogs.data.ts","utf8");
// The file is a literal array; evaluate it after stripping TS syntax.
const body=src.replace(/^\uFEFF/,"").replace(/export interface[\s\S]*?\n}\n/,"")
  .replace("export const BLOGS_DATA: BlogPost[] =","module.exports =");
fs.writeFileSync("/tmp/blogs-eval.cjs",body);
const data=require("/tmp/blogs-eval.cjs");
const registered=new Set(fs.readdirSync("content/blogs"));

const kept=data.filter(p=>registered.has(p.slug));
const dropped=data.filter(p=>!registered.has(p.slug));
console.log("kept",kept.length,"dropped",dropped.map(p=>p.slug));

// 1. Rewrite the data file with only non-translatable fields.
const entries=kept.map(p=>`    { slug: ${JSON.stringify(p.slug)}, date: ${JSON.stringify(p.date)}, image: ${JSON.stringify(p.image)} },`).join("\n");
fs.writeFileSync("src/data/blogs.data.ts",
`// Non-translatable blog card data. Title, author and excerpt live in
// messages/<locale>.json under the "blogCards" namespace, keyed by slug.
export interface BlogPost {
    slug: string;
    /** ISO-parseable publish date, used for sorting and the sitemap. */
    date: string;
    image: string;
}

export const BLOGS_DATA: BlogPost[] = [
${entries}
];
`);

// 2. Merge the copy into every message file under blogCards.
const cards={};
for(const p of kept) cards[p.slug]={title:p.title,author:p.author,excerpt:p.excerpt};
for(const l of ["en","fr","it","de","nl","es"]){
  const f=`messages/${l}.json`;
  const m=JSON.parse(fs.readFileSync(f,"utf8"));
  m.blogCards=cards;
  fs.writeFileSync(f,JSON.stringify(m,null,2)+"\n");
}
console.log("blogCards written for 6 locales");'
```

Expected: `kept 98 dropped [ 'advantages-of-lab-grown-diamonds' ]` — 99 entries in, one dropped because it has a permanent redirect to `are-lab-grown-diamonds-worth-buying` and so was never extracted.

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/data/blogs.data.test.ts`
Expected: 4 passed.

- [ ] **Step 5: Localise the listing page**

`src/app/[locale]/blog/page.tsx` is a server component reading `?page=` and `?category=`. It needs `params` alongside `searchParams`, and card copy from messages. Note that `pageHref` keeps returning an UNPREFIXED path — the locale-aware `Link` adds the prefix, so prefixing here too would produce `/es/es/blog/`.

```tsx
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { assertLocale } from "@/i18n/locale-guard";
import { localeAlternates, localeUrl } from "@/lib/i18n/paths";

interface PageProps {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{ page?: string; category?: string }>;
}

export async function generateMetadata({
    params,
    searchParams,
}: PageProps): Promise<Metadata> {
    const { locale: raw } = await params;
    const locale = assertLocale(raw);
    const { page: pageParam, category: categoryParam } = await searchParams;
    const page = parseInt(pageParam ?? "1", 10) || 1;

    const t = await getTranslations({ locale, namespace: "BlogIndex" });

    const qs = new URLSearchParams();
    if (page > 1) qs.set("page", String(page));
    if (categoryParam && categoryParam !== "All") qs.set("category", categoryParam);
    const qsStr = qs.toString();
    const base = localeUrl(locale, "/blog");
    const canonical = qsStr ? `${base}?${qsStr}` : base;

    return {
        title: page > 1 ? t("titlePaged", { page }) : t("title"),
        description: t("description"),
        alternates: { canonical, languages: localeAlternates("/blog") },
        robots: { index: true, follow: true },
    };
}

export default async function BlogIndexPage({ params, searchParams }: PageProps) {
    const { locale: raw } = await params;
    const locale = assertLocale(raw);
    setRequestLocale(locale);

    const tCards = await getTranslations("blogCards");
    // ... existing pagination and sorting logic unchanged ...
    // Each card renders tCards(`${post.slug}.title`) and
    // tCards(`${post.slug}.excerpt`); the <Link href={`/blog/${post.slug}/`}>
    // comes from @/i18n/navigation and gains the locale prefix itself.
}
```

Add a `BlogIndex` namespace to all six message files with `title`, `titlePaged` (containing `{page}`), `description`, and the listing's own labels (`readMore`, `previous`, `next`, `noResults`).

- [ ] **Step 6: Localise the category filters**

`src/app/[locale]/blog/blogUtils.ts` returns English category names from slug keywords. Change `getCategory` to return a stable key (`diamondEducation`, `sizingAndFit`, `certificationAndQuality`, `buyingGuides`) and have `BlogFilters.tsx` translate it via a `blogFilters` namespace. The `?category=` query value must stay the key, not the translated label, so a shared link works across locales.

- [ ] **Step 7: Localise RelatedArticles**

`src/components/shared/RelatedArticles.tsx` renders titles from `BLOGS_DATA` and two hardcoded strings. It is a server component, so:

```tsx
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function RelatedArticles({ currentSlug }: RelatedArticlesProps) {
    const articles = getRelatedArticles(currentSlug);
    if (!articles.length) return null;

    const tCards = await getTranslations("blogCards");
    const t = await getTranslations("BlogArticle");
    // ... render t("relatedArticles") as the heading, tCards(`${slug}.title`)
    // for each item, and t("backToGuides") for the trailing link.
}
```

Keep `hashSlug` and `getRelatedArticles` exactly as they are — the selection must stay deterministic and identical across locales.

- [ ] **Step 8: Verify**

Run: `npm test && npx tsc --noEmit && npm run build`
Expected: all pass.

- [ ] **Step 9: Smoke-check the listing**

With `npm run dev`, open `/blog/`, `/blog/?page=2`, `/blog/?category=sizingAndFit` and `/es/blog/`. Confirm cards render with titles, pagination works, and no `[MISSING:` appears.

- [ ] **Step 10: Commit**

```bash
git add -A
git commit -m "feat(i18n): localise blog listing, cards and related articles"
```

---

### Task 9: Storefront UI strings

**Files:**
- Modify: `src/app/[locale]/home/page.tsx`, `about/page.tsx`, `contact/page.tsx`, `shop/page.tsx`, `shop-details/[slug]/page.tsx`, `cart/page.tsx`, `checkout/page.tsx`, `checkout/status/page.tsx`
- Modify: `src/components/home/*.tsx` (6 files), `src/components/shop/*.tsx`, `src/components/shared/ProductCard.tsx`
- Modify: `src/services/products/product-category.ts`
- Modify: `messages/*.json`
- Test: `src/services/products/product-category.test.ts`

**Interfaces:**
- Consumes: `getTranslations` / `useTranslations`; `Link` from `src/i18n/navigation.ts`.
- Produces: `SHOP_CATEGORY_TILES` entries keyed by `labelKey: string` instead of `label: string`; `getCategoryLabelKey(category: string): string` replacing `getCategoryDisplayLabel`.

- [ ] **Step 1: Write the failing category-label test**

Product titles stay English, but the category tile labels are frontend-side and from a fixed set, so they localise.

```ts
// src/services/products/product-category.test.ts
import { describe, expect, it } from "vitest";
import {
    SHOP_CATEGORY_TILES,
    getCategoryLabelKey,
} from "@/services/products/product-category";

describe("category label keys", () => {
    it("gives every tile a message key instead of English text", () => {
        for (const tile of SHOP_CATEGORY_TILES) {
            expect(tile).toHaveProperty("labelKey");
            expect(tile).not.toHaveProperty("label");
            expect(tile.labelKey).toMatch(/^[a-z][A-Za-z]*$/);
        }
    });

    it("keeps queryValue untranslated so shared URLs work in every locale", () => {
        for (const tile of SHOP_CATEGORY_TILES) {
            expect(tile.queryValue).toMatch(/^[a-z-]+$/);
        }
    });

    it("resolves a known category through its aliases", () => {
        expect(getCategoryLabelKey("bracelet")).toBe("bracelets");
        expect(getCategoryLabelKey("Bracelets")).toBe("bracelets");
    });

    it("falls back to the raw category for an unknown value", () => {
        expect(getCategoryLabelKey("tiaras")).toBe("tiaras");
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/services/products/product-category.test.ts`
Expected: FAIL — `getCategoryLabelKey` is not exported.

- [ ] **Step 3: Convert the tiles to message keys**

In `src/services/products/product-category.ts`, change the `ShopCategoryTile` type's `label: string` to `labelKey: string`, set each tile's key (`bracelets`, `earrings`, `necklaces`, `rings`, `pendants`, `sets`, …), and replace `getCategoryDisplayLabel` with:

```ts
export function getCategoryLabelKey(category: string): string {
    return getTileByCategory(category)?.labelKey ?? category;
}
```

Add a `shopCategories` namespace to all six message files mapping each key to its English label, plus a `fallback` entry used when a key is unknown.

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- src/services/products/product-category.test.ts`
Expected: 4 passed.

- [ ] **Step 5: Extract the remaining storefront strings**

Work file by file. For each page and component listed in **Files**, add a namespace named after it (`HomePage`, `AboutPage`, `ContactPage`, `ShopPage`, `ProductDetails`, `CartPage`, `CheckoutPage`, `Newsletter`, `Testimonials`, `ProductCard`, …), move every user-facing literal into `messages/en.json` under that namespace, and replace it with `t("key")`. Server components use `await getTranslations("Namespace")`; client components use `useTranslations("Namespace")`.

Cover, in each file: visible text, `aria-label`, `alt`, `placeholder`, `title` attributes, button labels, empty-state copy, and `sonner` toast messages. Swap every `next/link` import for `@/i18n/navigation`.

Leave untouched: product `title`/`description`/`details` from the API, `PriceDisplay`, SKUs, and any value sent to the backend as a query or body field.

Worked example — a client component before:

```tsx
"use client";
import Link from "next/link";

export function ComingSoonSignup() {
    return (
        <div>
            <h3>Coming Soon</h3>
            <p>Join the waitlist to hear when this piece is available.</p>
            <input placeholder="Your email address" aria-label="Email address" />
            <button>Notify Me</button>
            <Link href="/contact">Contact us instead</Link>
        </div>
    );
}
```

and after:

```tsx
"use client";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function ComingSoonSignup() {
    const t = useTranslations("ComingSoon");
    return (
        <div>
            <h3>{t("heading")}</h3>
            <p>{t("body")}</p>
            <input placeholder={t("emailPlaceholder")} aria-label={t("emailLabel")} />
            <button>{t("submit")}</button>
            <Link href="/contact">{t("contactInstead")}</Link>
        </div>
    );
}
```

with `messages/en.json` gaining:

```json
"ComingSoon": {
  "heading": "Coming Soon",
  "body": "Join the waitlist to hear when this piece is available.",
  "emailPlaceholder": "Your email address",
  "emailLabel": "Email address",
  "submit": "Notify Me",
  "contactInstead": "Contact us instead"
}
```

A server component differs only in the two lines at the top: `const t = await getTranslations("ComingSoon");` with the import from `next-intl/server`.

- [ ] **Step 6: Add canonical and hreflang to every storefront page**

Spec section 5 requires `alternates.languages` on every page, not just blog pages. Each storefront page's `generateMetadata` gains the same two lines. Worked example for `src/app/[locale]/about/page.tsx`:

```tsx
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { assertLocale } from "@/i18n/locale-guard";
import { localeAlternates, localeUrl } from "@/lib/i18n/paths";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { locale: raw } = await params;
    const locale = assertLocale(raw);
    const t = await getTranslations({ locale, namespace: "AboutPage" });

    return {
        title: t("metaTitle"),
        description: t("metaDescription"),
        alternates: {
            canonical: localeUrl(locale, "/about"),
            languages: localeAlternates("/about"),
        },
        robots: { index: true, follow: true },
    };
}
```

Apply the same shape to `home` (path `/`), `contact` (`/contact`), `shop` (`/shop`), `blog/page.tsx` (`/blog`) and `shop-details/[slug]` (`/shop-details/<slug>`), each with its own namespace and path. Account and auth pages do not need hreflang — add `robots: { index: false, follow: false }` to those instead, since a locale-prefixed login page should not be indexed six times.

- [ ] **Step 7: Copy the English keys into the other five files**

Keep all six files structurally identical from the start, so `check-i18n` can compare shapes and the translator has a complete source.

```bash
node -e '
const fs=require("fs");
const en=JSON.parse(fs.readFileSync("messages/en.json","utf8"));
for(const l of ["fr","it","de","nl","es"]){
  const f=`messages/${l}.json`;
  const cur=JSON.parse(fs.readFileSync(f,"utf8"));
  // Fill only missing keys; never overwrite an existing translation.
  const fill=(a,b)=>{for(const k of Object.keys(a)){
    if(typeof a[k]==="object"&&a[k]!==null&&!Array.isArray(a[k])){b[k]??={};fill(a[k],b[k]);}
    else if(!(k in b))b[k]=a[k];
  }};
  fill(en,cur);
  fs.writeFileSync(f,JSON.stringify(cur,null,2)+"\n");
}
console.log("filled missing keys in 5 locales");'
```

- [ ] **Step 8: Verify no untranslated strings remain**

Use the AST detector (`scripts/i18n/find-untranslated.mjs`, created in Task 4),
not a grep. Regex over JSX misses two whole classes that bit Task 4: strings in
expression position (ternaries, prop values) and multi-line JSX text, where the
text does not sit between two angle brackets on one line. The detector walks the
TypeScript AST, so it sees `JsxText` nodes and user-facing attribute literals
(`aria-label`, `placeholder`, `alt`, `title`) wherever they appear.

```bash
npm run i18n:untranslated -- src/app/\[locale\] src/components/home src/components/shop src/components/shared
```

Expected: `0 untranslated string(s)`. Every hit is a literal that still needs a
key. Do NOT scan `src/app/admin` — it is English-only by decision.

If a hit is genuinely not translatable copy (a brand name, a product SKU, a
single symbol), add it to the detector's `ALLOW` list with a comment saying why,
rather than leaving the gate failing or weakening the pattern.

- [ ] **Step 9: Verify and commit**

Run: `npm test && npx tsc --noEmit && npm run build`

```bash
git add -A
git commit -m "feat(i18n): extract storefront UI strings to messages"
```

---

### Task 10: Account and auth UI strings

**Files:**
- Modify: `src/app/[locale]/login/page.tsx`, `register/page.tsx`, `verify-otp/page.tsx`, `reset-password/page.tsx`, `profile/page.tsx`, `account/**`, `orders/page.tsx`, `orders/[id]/page.tsx`, `payments/history/page.tsx`, `wishlist/page.tsx`, `tickets/page.tsx`, `tickets/[id]/page.tsx`
- Modify: `src/components/auth/*.tsx`, `src/components/profile/**`, `src/components/wishlist/*.tsx`
- Modify: `src/utils/notify.ts`
- Modify: `messages/*.json`

**Interfaces:**
- Consumes: `useTranslations` / `getTranslations`; `Link`, `redirect`, `useRouter` from `src/i18n/navigation.ts`.
- Produces: namespaces `LoginPage`, `RegisterPage`, `VerifyOtpPage`, `ResetPasswordPage`, `ProfilePage`, `OrdersPage`, `PaymentsPage`, `WishlistPage`, `TicketsPage`, `Validation`, `Toasts`.

- [ ] **Step 1: Extract the form and validation strings**

`register/page.tsx` is 822 lines and `profile/page.tsx` 720, mostly forms — the highest density of user-facing strings in the app. For each file move field labels, placeholders, helper text, button labels, and every validation message into its namespace. Put messages reused across forms (`required`, `invalidEmail`, `passwordTooShort`, `passwordsDoNotMatch`) in the shared `Validation` namespace rather than duplicating them.

- [ ] **Step 2: Localise the toasts**

Every `sonner` call site passes an English string. Move them to the `Toasts` namespace and translate at the call site, where the `t` function is in scope — not inside `src/utils/notify.ts`, which has no React context.

- [ ] **Step 3: Make auth redirects locale-aware**

Any `useRouter().push("/login")` or `redirect("/login")` in these files must import from `@/i18n/navigation`, or a Spanish user gets bounced to the English login page. Check every navigation call:

```bash
grep -rn "from \"next/navigation\"\|from \"next/link\"" src/app/\[locale\] src/components/auth src/components/profile --include='*.tsx' | head -20
```

Expected after the change: only `notFound` and `useSearchParams` still come from `next/navigation` (neither is locale-dependent).

- [ ] **Step 4: Fill the other five locales**

Re-run the fill script from Task 9, Step 6.

- [ ] **Step 5: Verify**

Run: `npm test && npx tsc --noEmit && npm run build`

Then run the AST detector over this task's surface — a grep will not do, for the
reasons in Task 9, Step 8:

```bash
npm run i18n:untranslated -- src/app/\[locale\] src/components/auth src/components/profile src/components/wishlist
```

Expected: `0 untranslated string(s)`.

With `npm run dev`, walk `/es/login/`, `/es/register/` and `/es/profile/`, confirming no `[MISSING:` and that submitting an empty form shows validation messages.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat(i18n): extract account and auth UI strings to messages"
```

---

### Task 11: Translation CLI

Adapts `D:\Projects\uniglo-diamonds-web\scripts\i18n\translate.mjs`. Owns Review Focus 1.

**Files:**
- Create: `scripts/i18n/translate.mjs` (adapted copy)
- Create: `scripts/i18n/glossary.json` (seeded from uniglo, extended)
- Create: `scripts/i18n/lib/leaves.mjs` (extracted from the copy so it is testable)
- Test: `scripts/i18n/lib/leaves.test.mjs`
- Modify: `package.json`

**Interfaces:**
- Consumes: `OPENAI_API_KEY` and `OPENAI_MODEL` from `.env.local`.
- Produces:
  - `PROTECTED_KEYS: Set<string>`, `isProse(key, value): boolean`, `collectAll(node): Leaf[]`, `collectLeaves(node): Leaf[]` from `leaves.mjs`, where `Leaf` is `{ path: (string|number)[], key: string, value: string, translatable: boolean }`.
  - `setAtPath(root, path, value): void` from `leaves.mjs`.
  - CLI commands `models`, `terms`, `check`, `translate`, `merge` — and `translate blogs --all`.

- [ ] **Step 1: Write the failing leaf-collection test**

Review Focus 1 is the first two cases: a `theme` or CTA href reaching the model breaks styling and links in five languages at once.

```js
// scripts/i18n/lib/leaves.test.mjs
import { describe, expect, it } from "vitest";
import { collectAll, collectLeaves, isProse, setAtPath } from "./leaves.mjs";

const blog = {
    metaTitle: "Lab-Grown Diamond 4Cs",
    category: "labGrownDiamondEducation",
    datePublished: "2026-07-15",
    sections: [
        {
            heading: "How They Compare",
            content: [
                {
                    type: "image",
                    src: "/images/blog/x/1.jpg",
                    alt: "A diamond",
                    width: 1600,
                    height: 900,
                    priority: true,
                },
                {
                    type: "callout",
                    title: "Note",
                    text: "Be careful.",
                    theme: "cream",
                },
                {
                    type: "cta-banner",
                    title: "Find Your Balance",
                    subtitle: "Explore our jewellery.",
                    shopHref: "/shop/",
                    contactHref: "/contact/",
                },
                {
                    type: "paragraph",
                    parts: [
                        { text: "Read our ", bold: false },
                        { text: "guide", href: "/blog/guide/" },
                    ],
                },
            ],
        },
    ],
};

const translatableValues = collectLeaves(blog).map((l) => l.value);
const heldBack = collectAll(blog)
    .filter((l) => !l.translatable)
    .map((l) => l.value);

describe("protected keys", () => {
    // Review Focus 1.
    it("never sends a callout theme to the model", () => {
        expect(translatableValues).not.toContain("cream");
        expect(heldBack).toContain("cream");
    });

    it("never sends cta-banner hrefs to the model", () => {
        expect(translatableValues).not.toContain("/shop/");
        expect(translatableValues).not.toContain("/contact/");
    });

    it("never sends block types, image sources or inline hrefs", () => {
        expect(translatableValues).not.toContain("image");
        expect(translatableValues).not.toContain("callout");
        expect(translatableValues).not.toContain("/images/blog/x/1.jpg");
        expect(translatableValues).not.toContain("/blog/guide/");
    });

    it("never sends a category key or an ISO date", () => {
        expect(translatableValues).not.toContain("labGrownDiamondEducation");
        expect(translatableValues).not.toContain("2026-07-15");
    });

    it("does send every piece of real prose", () => {
        expect(translatableValues).toEqual(
            expect.arrayContaining([
                "Lab-Grown Diamond 4Cs",
                "How They Compare",
                "A diamond",
                "Note",
                "Be careful.",
                "Find Your Balance",
                "Explore our jewellery.",
                "Read our ",
                "guide",
            ]),
        );
    });
});

describe("isProse", () => {
    it("rejects protected keys regardless of value", () => {
        expect(isProse("theme", "cream")).toBe(false);
        expect(isProse("shopHref", "/shop/")).toBe(false);
        expect(isProse("category", "labGrownDiamondEducation")).toBe(false);
    });

    it("rejects non-prose values regardless of key", () => {
        expect(isProse("text", "https://www.igi.org/")).toBe(false);
        expect(isProse("text", "/shop/")).toBe(false);
        expect(isProse("text", "hello@aureliaroyale.com")).toBe(false);
        expect(isProse("text", "2026-07-15")).toBe(false);
        expect(isProse("text", "   ")).toBe(false);
    });

    it("accepts ordinary sentences", () => {
        expect(isProse("text", "Cut, colour, clarity and carat weight.")).toBe(true);
    });
});

describe("setAtPath", () => {
    it("writes a value back at its recorded path", () => {
        const target = structuredClone(blog);
        const leaf = collectLeaves(blog).find((l) => l.value === "Be careful.");
        setAtPath(target, leaf.path, "Sois prudent.");
        expect(target.sections[0].content[1].text).toBe("Sois prudent.");
        expect(target.sections[0].content[1].theme).toBe("cream");
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- scripts/i18n/lib/leaves.test.mjs`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement the leaf collector**

```js
// scripts/i18n/lib/leaves.mjs

/**
 * Keys whose values are NEVER sent to the model.
 *
 * The first ten are from the uniglo reference script. The last four are
 * Aurelia-specific and load-bearing:
 *   theme       — callout styling ("cream" would come back as "crème")
 *   shopHref    — cta-banner link target
 *   contactHref — cta-banner link target
 *   category    — a blogCategories message key, not display text
 */
export const PROTECTED_KEYS = new Set([
    "type",
    "href",
    "src",
    "url",
    "slug",
    "id",
    "width",
    "height",
    "image",
    "namespace",
    "theme",
    "shopHref",
    "contactHref",
    "category",
]);

/** Values that are plainly not prose, whatever key they sit under. */
const NON_PROSE = [
    /^https?:\/\//i,
    /^\/[\w\-/.]*$/,          // internal path
    /^[\w.-]+@[\w.-]+$/,      // email
    /^[\d\s:–\-.,/]+$/,       // pure numerics, times, ISO dates
];

export const isProse = (key, value) =>
    typeof value === "string" &&
    value.trim() !== "" &&
    !PROTECTED_KEYS.has(key) &&
    !NON_PROSE.some((re) => re.test(value.trim()));

/**
 * Walk an object collecting every scalar leaf with its path, tagged with
 * whether it is translatable prose. Both halves come from one walk so the dry
 * run can report on each with one path format.
 */
export function collectAll(node, trail = [], key = "", out = []) {
    if (Array.isArray(node)) {
        node.forEach((item, index) => collectAll(item, [...trail, index], key, out));
    } else if (node && typeof node === "object") {
        for (const [k, v] of Object.entries(node)) {
            collectAll(v, [...trail, k], k, out);
        }
    } else if (typeof node === "string") {
        out.push({ path: trail, key, value: node, translatable: isProse(key, node) });
    }
    return out;
}

export const collectLeaves = (node) => collectAll(node).filter((l) => l.translatable);

/** Write a value back at a recorded path. */
export function setAtPath(root, path, value) {
    let cursor = root;
    for (let i = 0; i < path.length - 1; i++) cursor = cursor[path[i]];
    cursor[path[path.length - 1]] = value;
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- scripts/i18n/lib/leaves.test.mjs`
Expected: 9 passed.

- [ ] **Step 5: Copy and adapt the reference script**

```bash
cp "/d/Projects/uniglo-diamonds-web/scripts/i18n/translate.mjs" scripts/i18n/translate.mjs
cp "/d/Projects/uniglo-diamonds-web/scripts/i18n/glossary.json" scripts/i18n/glossary.json
```

Then make these changes to `scripts/i18n/translate.mjs`:

1. Delete its inline `PROTECTED_KEYS`, `NON_PROSE`, `isProse`, `collectAll`, `collectLeaves` and `setAtPath`, and import them from `./lib/leaves.mjs` instead, so the tested copy is the one that runs.
2. Replace `TARGET_LOCALES` and `LOCALE_NAMES` with:
   ```js
   const SOURCE_LOCALE = "en";
   const TARGET_LOCALES = ["fr", "it", "de", "nl", "es"];
   const LOCALE_NAMES = {
       fr: "French", it: "Italian", de: "German", nl: "Dutch", es: "Spanish",
   };
   ```
3. Add file-mode targets alongside namespace mode. A target of the form `blogs/<slug>` reads `content/blogs/<slug>/en.json` and writes `scripts/i18n/staging/<locale>/blogs/<slug>.json`; any other target keeps the existing `messages/*.json` namespace behaviour.
4. Drop the `--after` requirement for blog merges — separate files have no ordering problem. Keep it for `messages/*.json` namespace merges.
5. Add `translate blogs --all`, iterating every directory in `content/blogs/`, skipping blogs already fully staged, and printing per-blog progress plus a running character and estimated-cost tally.
6. Extend the `--dry` output with a hard assertion for Review Focus 1: fail the run if any value under `theme`, `shopHref`, `contactHref` or `category` appears in the translatable set.

- [ ] **Step 6: Extend the glossary**

Add Aurelia's jewellery-construction terms to `scripts/i18n/glossary.json`, in the existing entry format:

```json
{ "en": "bezel", "fr": "serti clos", "it": "montatura a castone", "de": "Zargenfassung", "nl": "kastzetting", "es": "engaste bisel" },
{ "en": "pavé", "fr": "pavage", "it": "pavé", "de": "Pavé", "nl": "pavé", "es": "pavé" },
{ "en": "tennis bracelet", "fr": "bracelet tennis", "it": "bracciale tennis", "de": "Tennisarmband", "nl": "tennisarmband", "es": "pulsera tennis" },
{ "en": "huggie", "fr": "créole huggie", "it": "cerchio huggie", "de": "Huggie-Creole", "nl": "huggie-oorring", "es": "aro huggie" },
{ "en": "station necklace", "fr": "collier à stations", "it": "collana station", "de": "Stationskette", "nl": "station-collier", "es": "collar de estaciones" },
{ "en": "hallmark", "fr": "poinçon", "it": "punzone", "de": "Feingehaltsstempel", "nl": "keurmerk", "es": "contraste" }
```

`IGI` and `GIA` need no entries — the script's `verbatimTokens` already detects and protects uppercase codes.

- [ ] **Step 7: Add the npm scripts**

```json
"i18n:extract": "node scripts/i18n/extract-blogs.mjs",
"i18n:check": "node scripts/i18n/check-i18n.mjs",
"i18n:dry": "node scripts/i18n/translate.mjs translate blogs --all --dry"
```

- [ ] **Step 8: Configure the API key and verify the model**

Create `.env.local` (already gitignored by the `.env*` rule):

```
OPENAI_API_KEY=sk-...
OPENAI_MODEL=<copy an id from the models command>
```

Run: `node scripts/i18n/translate.mjs models`
Expected: a list of model IDs. Copy one into `OPENAI_MODEL`. There is deliberately no default — a wrong model name must fail before a paid run, not during one.

- [ ] **Step 9: Dry-run every blog (free)**

Run: `npm run i18n:dry`
Expected: for each of the 98 blogs, a translatable-string count, a `held back` count, and no assertion failure. Confirm on a blog with a callout that `theme` appears in the held-back breakdown. If the Review Focus 1 assertion fires, fix `PROTECTED_KEYS` — never the content.

- [ ] **Step 10: Commit**

```bash
git add scripts/i18n package.json
git commit -m "feat(i18n): add OpenAI translation CLI adapted from uniglo reference"
```

---

### Task 12: Consistency checker

**Files:**
- Create: `scripts/i18n/check-i18n.mjs`
- Test: `scripts/i18n/lib/shape.test.mjs`
- Create: `scripts/i18n/lib/shape.mjs`

**Interfaces:**
- Consumes: `content/blogs/**`, `messages/*.json`.
- Produces: `keyPaths(value, prefix?): string[]` and `diffShape(a, b): { missing: string[]; extra: string[] }` from `shape.mjs`; a `check-i18n.mjs` CLI exiting non-zero on any problem.

- [ ] **Step 1: Write the failing shape-diff test**

```js
// scripts/i18n/lib/shape.test.mjs
import { describe, expect, it } from "vitest";
import { diffShape, keyPaths } from "./shape.mjs";

describe("keyPaths", () => {
    it("lists every leaf path, including array indices", () => {
        expect(keyPaths({ a: "x", b: { c: "y" }, d: ["p", "q"] })).toEqual([
            "a",
            "b.c",
            "d.0",
            "d.1",
        ]);
    });
});

describe("diffShape", () => {
    it("reports nothing for identical shapes with different text", () => {
        expect(
            diffShape({ t: "Hello", s: [{ h: "A" }] }, { t: "Bonjour", s: [{ h: "B" }] }),
        ).toEqual({ missing: [], extra: [] });
    });

    it("reports a missing key", () => {
        expect(diffShape({ a: "x", b: "y" }, { a: "x" }).missing).toEqual(["b"]);
    });

    it("reports an added key", () => {
        expect(diffShape({ a: "x" }, { a: "x", z: "w" }).extra).toEqual(["z"]);
    });

    it("reports a changed array length as a shape difference", () => {
        const d = diffShape({ items: ["a", "b"] }, { items: ["a"] });
        expect(d.missing).toEqual(["items.1"]);
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- scripts/i18n/lib/shape.test.mjs`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement the shape helpers**

```js
// scripts/i18n/lib/shape.mjs

/** Every leaf path in an object, dot-joined, arrays indexed. */
export function keyPaths(value, prefix = "") {
    if (Array.isArray(value)) {
        return value.flatMap((item, index) =>
            keyPaths(item, prefix ? `${prefix}.${index}` : String(index)),
        );
    }
    if (value && typeof value === "object") {
        return Object.entries(value).flatMap(([key, child]) =>
            keyPaths(child, prefix ? `${prefix}.${key}` : key),
        );
    }
    return prefix ? [prefix] : [];
}

/** Paths present in `source` but not `target`, and vice versa. */
export function diffShape(source, target) {
    const a = new Set(keyPaths(source));
    const b = new Set(keyPaths(target));
    return {
        missing: [...a].filter((p) => !b.has(p)),
        extra: [...b].filter((p) => !a.has(p)),
    };
}
```

- [ ] **Step 4: Run the test to verify it passes**

Run: `npm test -- scripts/i18n/lib/shape.test.mjs`
Expected: 5 passed.

- [ ] **Step 5: Write the checker CLI**

```js
// scripts/i18n/check-i18n.mjs
// Usage: node scripts/i18n/check-i18n.mjs
// Exits non-zero if any locale is incomplete or inconsistent.
import fs from "node:fs";
import path from "node:path";
import { diffShape } from "./lib/shape.mjs";
import { BLOG_CATEGORY_LABELS } from "./lib/blog-categories.mjs";

const ROOT = path.resolve(import.meta.dirname, "../..");
const LOCALES = ["en", "fr", "it", "de", "nl", "es"];
const SOURCE = "en";

const problems = [];
const readJson = (p) => JSON.parse(fs.readFileSync(p, "utf8"));

// --- 1. messages/*.json all share en's shape ---------------------------------
const enMessages = readJson(path.join(ROOT, "messages/en.json"));
for (const locale of LOCALES.filter((l) => l !== SOURCE)) {
    const file = path.join(ROOT, `messages/${locale}.json`);
    if (!fs.existsSync(file)) {
        problems.push(`messages/${locale}.json is missing`);
        continue;
    }
    const { missing, extra } = diffShape(enMessages, readJson(file));
    for (const p of missing) problems.push(`messages/${locale}.json missing key ${p}`);
    for (const p of extra) problems.push(`messages/${locale}.json has extra key ${p}`);
}

// --- 2. every blog has all six locales with identical shape -----------------
const blogsDir = path.join(ROOT, "content/blogs");
const slugs = fs.readdirSync(blogsDir).sort();

for (const slug of slugs) {
    const enFile = path.join(blogsDir, slug, "en.json");
    if (!fs.existsSync(enFile)) {
        problems.push(`${slug}: en.json is missing`);
        continue;
    }
    const source = readJson(enFile);

    // Category must exist in the message namespace.
    if (!BLOG_CATEGORY_LABELS[source.category]) {
        problems.push(`${slug}: unknown category "${source.category}"`);
    }
    if (!enMessages.blogCategories?.[source.category]) {
        problems.push(`${slug}: category "${source.category}" not in blogCategories`);
    }
    if (!enMessages.blogCards?.[slug]) {
        problems.push(`${slug}: no blogCards entry`);
    }

    for (const locale of LOCALES.filter((l) => l !== SOURCE)) {
        const file = path.join(blogsDir, slug, `${locale}.json`);
        if (!fs.existsSync(file)) {
            problems.push(`${slug}: ${locale}.json is missing`);
            continue;
        }
        const { missing, extra } = diffShape(source, readJson(file));
        if (missing.length) problems.push(`${slug}/${locale}: missing ${missing.length} path(s), e.g. ${missing[0]}`);
        if (extra.length) problems.push(`${slug}/${locale}: extra ${extra.length} path(s), e.g. ${extra[0]}`);
    }
}

// --- 3. nothing anywhere contains a missing-message marker ------------------
for (const locale of LOCALES) {
    const file = path.join(ROOT, `messages/${locale}.json`);
    if (fs.existsSync(file) && fs.readFileSync(file, "utf8").includes("[MISSING:")) {
        problems.push(`messages/${locale}.json contains a [MISSING: marker`);
    }
}

console.log(`checked ${slugs.length} blog(s) across ${LOCALES.length} locales`);
if (problems.length) {
    console.error(`\n${problems.length} problem(s):\n`);
    for (const p of problems.slice(0, 50)) console.error(`  ${p}`);
    if (problems.length > 50) console.error(`  … and ${problems.length - 50} more`);
    process.exit(1);
}
console.log("i18n check clean");
```

- [ ] **Step 6: Run the checker**

Run: `npm run i18n:check`
Expected: it reports the five missing locale files per blog. That is correct right now — Task 13 fills them. Confirm it does NOT report missing categories, missing `blogCards` entries, or shape problems in `messages/*.json`.

- [ ] **Step 7: Commit**

```bash
git add scripts/i18n
git commit -m "feat(i18n): add locale consistency checker"
```

---

### Task 13: Run the translations

The one paid, operational task. Not TDD — its gates are the checker and the dry run from earlier tasks.

**Files:**
- Create: `content/blogs/<slug>/{fr,it,de,nl,es}.json` × 99
- Modify: `messages/{fr,it,de,nl,es}.json`

**Interfaces:**
- Consumes: the CLI from Task 11, the checker from Task 12.
- Produces: complete content for all six locales.

- [ ] **Step 1: Dry-run once more and read the cost estimate**

Run: `npm run i18n:dry`
Expected: no assertion failures, and a total character count near 1.67M. Confirm the projected spend before proceeding — this is the only step that costs money.

- [ ] **Step 2: Translate the UI message namespaces first**

Smaller, higher-visibility, and a cheap end-to-end rehearsal of the pipeline.

```bash
node scripts/i18n/translate.mjs translate Header
node scripts/i18n/translate.mjs translate Footer
node scripts/i18n/translate.mjs translate blogCategories
node scripts/i18n/translate.mjs translate blogCards
# …one per namespace added in Tasks 4, 8, 9 and 10
```

- [ ] **Step 3: Review the flagged UI files and merge**

Open each file in `scripts/i18n/staging/<locale>/` that printed a flag and fix it in the staged file — changing only text values, never keys. Then:

```bash
node scripts/i18n/translate.mjs merge Header --after Common
# …once per namespace, using the preceding key as the anchor
```

- [ ] **Step 4: Translate all 98 blogs**

Resumable: finished blogs and locales are skipped, so an interruption costs nothing. Expect this to take a while.

```bash
node scripts/i18n/translate.mjs translate blogs --all
```

- [ ] **Step 5: Fix every flagged blog file**

Per the agreed review policy, clean files ship and flagged files get fixed before merge. Work through the flags: `shape` (re-run that locale with `--force`), `link` (restore the original target), `token` (restore a dropped code such as IGI or a measurement), `untranslated` (a long sentence came back in English), `typography` (straight apostrophe where the site uses a curly one), `glossary` / `glossary-miss` (wrong term for the language).

- [ ] **Step 6: Merge the blog translations**

No `--after` anchor is needed — each blog is its own file.

```bash
for d in content/blogs/*/; do
  node scripts/i18n/translate.mjs merge "blogs/$(basename "$d")"
done
```

- [ ] **Step 7: Run the checker — this must now be clean**

Run: `npm run i18n:check`
Expected: `i18n check clean`. Any missing file means a translation run did not finish; re-run step 4.

- [ ] **Step 8: Verify the build**

Run: `npm test && npx tsc --noEmit && npm run build`
Expected: all pass. The build now renders 99 × 6 static blog pages.

- [ ] **Step 9: Commit**

Content and code together, per the spec's rules.

```bash
git add content messages
git commit -m "feat(i18n): add fr/it/de/nl/es translations for all content"
```

---

### Task 14: SEO wiring

Owns Review Focus 4.

**Files:**
- Create: `src/lib/i18n/localeRedirects.ts`
- Create: `src/lib/i18n/blogRedirects.ts`
- Modify: `next.config.ts`
- Modify: `src/app/sitemap.ts`
- Test: `src/lib/i18n/localeRedirects.test.ts`
- Test: `src/app/sitemap.test.ts`

**Interfaces:**
- Consumes: `routing`; `BLOG_SLUGS`; `BLOGS_DATA`; `localePath`, `blogPath` from `src/lib/blogs/content.ts`.
- Produces:
  - `PREFIXED_LOCALES: readonly string[]` and `withLocaleVariants(rules: RedirectRule[]): RedirectRule[]` from `localeRedirects.ts`, where `RedirectRule` is `{ source: string; destination: string; permanent: boolean }`.
  - `BLOG_REDIRECTS: RedirectRule[]` from `blogRedirects.ts` — the existing 16 rules, moved out of `next.config.ts`.
  - `REDIRECTED_AWAY_SLUGS: readonly string[]` from `blogRedirects.ts` — blog slugs that are redirect sources, so no longer servable.

- [ ] **Step 1: Write the failing redirect test**

Review Focus 4: an old inbound link arriving locale-prefixed must keep its locale.

```ts
// src/lib/i18n/localeRedirects.test.ts
import { describe, expect, it } from "vitest";
import { routing } from "@/i18n/routing";
import { PREFIXED_LOCALES, withLocaleVariants } from "@/lib/i18n/localeRedirects";
import { BLOG_REDIRECTS, REDIRECTED_AWAY_SLUGS } from "@/lib/i18n/blogRedirects";
import { BLOG_SLUGS } from "@/lib/blogs/registry";

describe("PREFIXED_LOCALES", () => {
    it("is every locale except the unprefixed default", () => {
        expect([...PREFIXED_LOCALES].sort()).toEqual(
            routing.locales.filter((l) => l !== routing.defaultLocale).sort(),
        );
    });
});

describe("withLocaleVariants", () => {
    const rules = [
        {
            source: "/blog/old-slug/",
            destination: "/blog/new-slug/",
            permanent: true,
        },
    ];
    const out = withLocaleVariants(rules);

    it("keeps the unprefixed English rule", () => {
        expect(out).toContainEqual({
            source: "/blog/old-slug/",
            destination: "/blog/new-slug/",
            permanent: true,
        });
    });

    // Review Focus 4.
    it("adds a variant per prefixed locale that keeps the locale", () => {
        expect(out).toContainEqual({
            source: "/de/blog/old-slug/",
            destination: "/de/blog/new-slug/",
            permanent: true,
        });
        expect(out).toContainEqual({
            source: "/es/blog/old-slug/",
            destination: "/es/blog/new-slug/",
            permanent: true,
        });
    });

    it("never redirects a prefixed source to an unprefixed destination", () => {
        for (const rule of out) {
            const sourceLocale = rule.source.split("/")[1];
            if ((PREFIXED_LOCALES as readonly string[]).includes(sourceLocale)) {
                expect(rule.destination.startsWith(`/${sourceLocale}/`)).toBe(true);
            }
        }
    });

    it("emits six rules per input rule", () => {
        expect(out).toHaveLength(rules.length * 6);
    });

    it("expands the real redirect table to 96 rules", () => {
        expect(BLOG_REDIRECTS).toHaveLength(16);
        expect(withLocaleVariants(BLOG_REDIRECTS)).toHaveLength(96);
    });

    it("produces no duplicate sources", () => {
        const sources = withLocaleVariants(BLOG_REDIRECTS).map((r) => r.source);
        expect(new Set(sources).size).toBe(sources.length);
    });
});

describe("redirected-away slugs", () => {
    it("matches the extractor's exclusion list", async () => {
        const { EXCLUDED_SLUGS } = await import(
            "../../../scripts/i18n/lib/excluded-slugs.mjs"
        );
        expect([...REDIRECTED_AWAY_SLUGS].sort()).toEqual([...EXCLUDED_SLUGS].sort());
    });

    it("never serves a slug that redirects away", () => {
        for (const slug of REDIRECTED_AWAY_SLUGS) {
            expect(BLOG_SLUGS).not.toContain(slug);
        }
    });

    it("derives the list from the redirect table rather than restating it", () => {
        expect(REDIRECTED_AWAY_SLUGS).toContain("advantages-of-lab-grown-diamonds");
    });
});
```

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test -- src/lib/i18n/localeRedirects.test.ts`
Expected: FAIL — modules not found.

- [ ] **Step 3: Move the redirect table out of next.config.ts**

Create `src/lib/i18n/blogRedirects.ts` holding the 16 existing rules verbatim from `next.config.ts`, keeping each `source`, `destination` and `permanent: true` exactly as they are. Preserve the existing comment headers (`--- Content consolidation redirects ---`, `--- Batch 1: confirmed broken aliases from audit ---`, `--- Batch 2: additional broken links found by full codebase scan ---`) so the provenance of each rule survives the move.

```ts
// src/lib/i18n/blogRedirects.ts
import type { RedirectRule } from "./localeRedirects";

/**
 * Permanent redirects for blog slugs confirmed to return 404. Moved here from
 * next.config.ts so the locale variants can be generated and unit-tested.
 */
export const BLOG_REDIRECTS: RedirectRule[] = [
    // --- Content consolidation redirects ---
    {
        source: "/blog/advantages-of-lab-grown-diamonds/",
        destination: "/blog/are-lab-grown-diamonds-worth-buying/",
        permanent: true,
    },
    // ... the remaining 15 rules, copied verbatim ...
];

/**
 * Blog slugs that are redirect SOURCES, derived so the list cannot drift from
 * the table above. These are never servable, so they carry no content, no
 * registry entry, no listing card and no sitemap entry.
 */
export const REDIRECTED_AWAY_SLUGS: readonly string[] = BLOG_REDIRECTS.flatMap(
    (rule) => {
        const match = rule.source.match(/^\/blog\/([^/]+)\/$/);
        return match ? [match[1]] : [];
    },
);
```

- [ ] **Step 4: Implement the locale expansion**

```ts
// src/lib/i18n/localeRedirects.ts
export type RedirectRule = {
    source: string;
    destination: string;
    permanent: boolean;
};

/**
 * Locales that carry a URL prefix — every locale except the default.
 *
 * Hardcoded rather than derived from `routing`, because next.config.ts is
 * evaluated before the app graph exists. The test in localeRedirects.test.ts
 * asserts this stays in sync with routing.locales.
 */
export const PREFIXED_LOCALES = ["fr", "it", "de", "nl", "es"] as const;

/**
 * Expand each redirect into its locale variants.
 *
 * Without this, /de/blog/<old-slug>/ matches no rule and 404s, because the
 * original sources were written for unprefixed English URLs only. 16 rules in,
 * 96 out.
 */
export function withLocaleVariants(rules: RedirectRule[]): RedirectRule[] {
    return rules.flatMap((rule) => [
        rule,
        ...PREFIXED_LOCALES.map((locale) => ({
            source: `/${locale}${rule.source}`,
            destination: `/${locale}${rule.destination}`,
            permanent: rule.permanent,
        })),
    ]);
}
```

- [ ] **Step 5: Run the test to verify it passes**

Run: `npm test -- src/lib/i18n/localeRedirects.test.ts`
Expected: 10 passed.

- [ ] **Step 6: Wire the generated redirects into next.config.ts**

Use a relative import, not the `@/` alias — the config is loaded outside the app's path resolution.

```ts
import { withLocaleVariants } from "./src/lib/i18n/localeRedirects";
import { BLOG_REDIRECTS } from "./src/lib/i18n/blogRedirects";

const nextConfig: NextConfig = {
    trailingSlash: true,
    images: {
        /* unchanged */
    },
    async redirects() {
        return withLocaleVariants(BLOG_REDIRECTS);
    },
};
```

- [ ] **Step 7: Write the failing sitemap test**

```ts
// src/app/sitemap.test.ts
import { describe, expect, it, vi } from "vitest";

vi.mock("@/services/products/product.service", () => ({
    getAllProducts: async () => [],
}));

const { default: sitemap } = await import("@/app/sitemap");
const entries = await sitemap();

describe("sitemap", () => {
    it("lists every blog article in every locale", () => {
        const urls = new Set(entries.map((e) => e.url));
        expect(urls.has("https://www.aureliaroyale.com/blog/4cs-of-lab-grown-diamonds/")).toBe(true);
        expect(urls.has("https://www.aureliaroyale.com/es/blog/4cs-of-lab-grown-diamonds/")).toBe(true);
        expect(urls.has("https://www.aureliaroyale.com/nl/blog/4cs-of-lab-grown-diamonds/")).toBe(true);
    });

    it("emits 618 non-product entries: (4 static + 1 index + 98 blogs) x 6", () => {
        expect(entries).toHaveLength(618);
    });

    it("gives every entry hreflang alternates for all six locales", () => {
        for (const entry of entries) {
            expect(Object.keys(entry.alternates?.languages ?? {}).sort()).toEqual(
                ["de", "en", "es", "fr", "it", "nl"],
            );
        }
    });

    it("ends every URL with a slash, matching trailingSlash: true", () => {
        for (const entry of entries) {
            expect(entry.url.endsWith("/")).toBe(true);
        }
    });

    it("has no duplicate URLs", () => {
        const urls = entries.map((e) => e.url);
        expect(new Set(urls).size).toBe(urls.length);
    });
});
```

- [ ] **Step 8: Run the test to verify it fails**

Run: `npm test -- src/app/sitemap.test.ts`
Expected: FAIL — the current sitemap emits ~104 single-locale entries with no alternates.

- [ ] **Step 9: Rewrite the sitemap for six locales**

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllProducts } from "@/services/products/product.service";
import { BLOGS_DATA } from "@/data/blogs.data";
import { routing } from "@/i18n/routing";
import { localeAlternates, localeUrl as url } from "@/lib/i18n/paths";

/** hreflang block: the same page in all six locales. */
const languages = localeAlternates;

function parseBlogDate(dateStr: string): Date | undefined {
    if (!dateStr) return undefined;
    const parsed = new Date(dateStr);
    return isNaN(parsed.getTime()) ? undefined : parsed;
}

const STATIC_PAGES = [
    { path: "/", changeFrequency: "weekly" as const, priority: 1, lastModified: new Date("2026-07-25") },
    { path: "/shop", changeFrequency: "daily" as const, priority: 0.9, lastModified: new Date("2026-07-25") },
    { path: "/about", changeFrequency: "monthly" as const, priority: 0.6, lastModified: new Date("2026-07-25") },
    { path: "/contact", changeFrequency: "monthly" as const, priority: 0.6, lastModified: new Date("2026-07-25") },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const latestBlogDate = BLOGS_DATA.reduce<Date | undefined>((latest, post) => {
        const d = parseBlogDate(post.date);
        if (!d) return latest;
        return !latest || d > latest ? d : latest;
    }, undefined);

    const entries: MetadataRoute.Sitemap = [];

    for (const locale of routing.locales) {
        for (const page of STATIC_PAGES) {
            entries.push({
                url: url(locale, page.path),
                lastModified: page.lastModified,
                changeFrequency: page.changeFrequency,
                priority: page.priority,
                alternates: { languages: languages(page.path) },
            });
        }

        entries.push({
            url: url(locale, "/blog"),
            lastModified: latestBlogDate ?? new Date("2026-07-25"),
            changeFrequency: "weekly",
            priority: 0.8,
            alternates: { languages: languages("/blog") },
        });

        for (const post of BLOGS_DATA) {
            const path = `/blog/${post.slug}`;
            entries.push({
                url: url(locale, path),
                lastModified: parseBlogDate(post.date),
                changeFrequency: "monthly",
                priority: 0.7,
                alternates: { languages: languages(path) },
            });
        }
    }

    // Product pages: English only, since product content is not localised.
    try {
        const products = await getAllProducts();
        for (const product of products) {
            const path = `/shop-details/${product.slug}`;
            entries.push({
                url: url("en", path),
                lastModified: new Date("2026-07-25"),
                changeFrequency: "weekly",
                priority: 0.8,
                alternates: { languages: languages(path) },
            });
        }
    } catch {
        // A sitemap covering every static and blog page beats failing the route.
    }

    return entries;
}
```

- [ ] **Step 10: Run the test to verify it passes**

Run: `npm test -- src/app/sitemap.test.ts`
Expected: 5 passed.

- [ ] **Step 11: Verify and commit**

Run: `npm test && npx tsc --noEmit && npm run build`

```bash
git add -A
git commit -m "feat(i18n): locale-aware redirects, hreflang and six-locale sitemap"
```

---

### Task 15: Full verification

**Files:**
- Modify: `scripts/smoke-routes.mjs`
- Create: `scripts/verify-i18n-routes.mjs`

**Interfaces:**
- Consumes: `BLOG_SLUGS`; `BLOG_REDIRECTS`, `withLocaleVariants`; a running server.
- Produces: a crawl report; exit code 0 only when every route and redirect behaves.

- [ ] **Step 1: Write the crawl script**

```js
// scripts/verify-i18n-routes.mjs
// Usage: node scripts/verify-i18n-routes.mjs http://localhost:3000
// Crawls every route in every locale and checks status, <html lang> and hreflang.
import fs from "node:fs";
import path from "node:path";

const base = (process.argv[2] ?? "http://localhost:3000").replace(/\/$/, "");
const ROOT = path.resolve(import.meta.dirname, "..");
const LOCALES = ["en", "fr", "it", "de", "nl", "es"];
const DEFAULT = "en";

const slugs = fs.readdirSync(path.join(ROOT, "content/blogs")).sort();
const staticPaths = ["/", "/about/", "/shop/", "/contact/", "/blog/"];

const prefix = (locale, p) => (locale === DEFAULT ? p : `/${locale}${p}`);

let checked = 0;
const failures = [];

async function check(url, { locale, wantHreflang }) {
    const res = await fetch(url, { redirect: "follow" });
    const html = await res.text();
    checked++;

    if (!res.ok) {
        failures.push(`${url} -> HTTP ${res.status}`);
        return;
    }
    const lang = html.match(/<html[^>]*\slang="([^"]+)"/)?.[1];
    if (lang !== locale) {
        failures.push(`${url} -> <html lang="${lang}"> (want "${locale}")`);
    }
    if (html.includes("[MISSING:")) {
        const key = html.match(/\[MISSING: ([^\]]+)\]/)?.[1];
        failures.push(`${url} -> renders [MISSING: ${key}]`);
    }
    if (wantHreflang) {
        for (const l of LOCALES) {
            if (!html.includes(`hreflang="${l}"`)) {
                failures.push(`${url} -> no hreflang for ${l}`);
                break;
            }
        }
    }
}

for (const locale of LOCALES) {
    for (const p of staticPaths) {
        await check(base + prefix(locale, p), { locale, wantHreflang: p === "/blog/" });
    }
    // Sample three blogs per locale for the full check; the build already
    // rendered all 99 x 6, so this verifies wiring rather than every page.
    for (const slug of [slugs[0], slugs[Math.floor(slugs.length / 2)], slugs.at(-1)]) {
        await check(base + prefix(locale, `/blog/${slug}/`), {
            locale,
            wantHreflang: true,
        });
    }
}

// Redirects must keep their locale (Review Focus 4).
const { BLOG_REDIRECTS } = await import("../src/lib/i18n/blogRedirects.ts").catch(() => ({
    BLOG_REDIRECTS: [],
}));
for (const rule of BLOG_REDIRECTS) {
    for (const locale of LOCALES) {
        const from = base + prefix(locale, rule.source);
        const res = await fetch(from, { redirect: "manual" });
        checked++;
        const location = res.headers.get("location") ?? "";
        const want = prefix(locale, rule.destination);
        if (![301, 308].includes(res.status) || !location.endsWith(want)) {
            failures.push(`${from} -> ${res.status} ${location} (want ${want})`);
        }
    }
}

console.log(`checked ${checked} URL(s)`);
if (failures.length) {
    console.error(`\n${failures.length} failure(s):\n`);
    for (const f of failures.slice(0, 40)) console.error(`  ${f}`);
    process.exit(1);
}
console.log("all locales verified");
```

If importing the `.ts` redirect table from a `.mjs` script proves awkward, read the generated redirect list from `.next/` build output or duplicate the 16 source/destination pairs into a small `.mjs` fixture — the assertion matters more than the import mechanism.

- [ ] **Step 2: Run all four automated gates**

```bash
npm test
npx tsc --noEmit
npm run i18n:check
npm run build
```

Expected: all four clean. `i18n:check` must now print `i18n check clean`.

- [ ] **Step 3: Run the crawl against a production build**

```bash
npm run build && npm run start
# in another terminal:
node scripts/smoke-routes.mjs http://localhost:3000
node scripts/verify-i18n-routes.mjs http://localhost:3000
```

Expected: `all routes ok` and `all locales verified`.

- [ ] **Step 4: Spot-check the highest-traffic articles visually**

Open the three or four articles with the most traffic in all six languages. Confirm: the heading, body and FAQs are in the right language; images load; every internal link stays inside its locale (a Spanish page's links must all start `/es/`); tables and callouts keep their styling (this is where a translated `theme` value would show up); and the published date reads naturally for the language.

- [ ] **Step 5: Confirm the agreed consequences are what you see**

Per spec §8, these are expected, not bugs: English product names inside translated shop pages; English slugs in non-English URLs; `$1,299.00` prices in every locale.

- [ ] **Step 6: Commit and open the pull request**

```bash
git add -A
git commit -m "test(i18n): add six-locale route and redirect verification"
git push -u origin feat/i18n-six-languages
```

---

## Notes for the implementer

- **Never create `src/middleware.ts`.** Next 16 renamed the convention to `proxy`. A `middleware.ts` file may appear to work while being ignored.
- **Never hand-edit a blog's `page.tsx` to make the extractor parse it.** A refusal means the file contains something non-literal; fix the extractor or ask.
- **Never edit `content/blogs/<slug>/{fr,it,de,nl,es}.json` or `messages/{fr,it,de,nl,es}.json` directly for new content.** Use `translate` then `merge`. Direct edits are correct only when fixing an already-merged translation.
- **Never change keys, `type`, `href`, `src` or `theme` values in a staged translation file.** Only text values.
- **Internal hrefs in content carry no locale prefix.** `/shop/`, never `/es/shop/`.
- `scripts/i18n/staging/` and `.env.local` are gitignored. Do not commit either.
