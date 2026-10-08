# Product Translation — Frontend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Render product attribute values (`Pear`, `Emerald`, `IGI Certified`) and the `details` spec string in the active locale, so a French product page reads entirely in French instead of a French title above English specifications.

**Architecture:** Attribute values are a controlled vocabulary of ~78 distinct strings repeated across 55 products, so they are translated **once** into a `productAttributes` message namespace and looked up at render time — never per product, and never through the AI. `details` is a `Label: Value | …` string that is parsed and re-rendered from that same vocabulary plus the labels already in `ProductDetailsTabs`. A check script fails when the catalogue grows a value the vocabulary lacks.

**Tech Stack:** Next.js 16.2.2, next-intl 4.14.9, TypeScript, vitest 4.

**Spec:** `docs/superpowers/specs/2026-10-07-product-content-translation-design.md` (sections "What the content actually is" and "Vocabulary lookup").

**Scope:** Frontend only, and only what remains. Locale threading is **already done** (commit `fa6220d`) — titles and descriptions already render translated. This plan covers the vocabulary, `details`, and the gate. Phase 2's admin editing UI is out of scope.

## Global Constraints

- Repo: `aurelia-royale-frontend` (`D:\Projects\aurelia-jewels\frontend`). Separate git repo from the backend — never stage backend paths.
- Locales are exactly `en, fr, it, de, nl, es`. `routing.ts` is the source of truth.
- **Filter values stay English.** They are identifiers submitted back as `?shape=Pear`; only their *display* is translated. A translated value in a query would match nothing and silently return an empty catalogue.
- **An unknown attribute value renders its English verbatim** — never a raw key, never an error, never blank.
- Prices stay `$1,299.00` in all locales (existing ruling).
- Blog slugs and product slugs stay English (existing ruling).
- Model `gpt-6-luna` via `OPENAI_MODEL`; key via `OPENAI_API_KEY` in `.env.local`. **Never print, echo, or commit the key.**
- Commits must use an explicit pathspec; `git add -A` / `git add .` are forbidden.

## Review Focus

Five things the spec implies that no obvious task would otherwise test:

1. **A value containing characters that break a message key** — `Necklace + Earring` is real, live, and in the catalogue today. Slugify must produce a stable ICU-safe key for it. Covered in Task 1.
2. **A value the vocabulary has never seen** — an admin adds shape `Trillion` tomorrow. Must render `Trillion`, not `productAttributes.trillion` and not a thrown error. next-intl throws on a missing key by default, so this needs explicit handling. Covered in Task 1.
3. **A `details` string that does not match the expected shape** — empty, a trailing `|`, a segment with no colon, or a value containing a colon (`Ratio: 1:1`). Must degrade to showing the raw text rather than rendering garbage. Covered in Task 4.
4. **Two spellings of one concept** — `origins` contains BOTH `Lab-grown` and `Labgrown` in live data. Both must resolve, and the gate must not report a false positive for either. Covered in Tasks 1 and 5.
5. **A verbatim token inside a translatable value** — `IGI Certified` must keep `IGI` in every locale; only `Certified` is translated. Covered in Task 2.

---

### Task 1: The vocabulary lookup

**Files:**
- Create: `src/lib/i18n/productAttributes.ts`
- Create: `src/lib/i18n/productAttributes.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `attributeKey(value: string): string` — the normalised message key for an English attribute value.
  - `useAttributeLabel(): (value: string | null | undefined) => string` — a client hook returning a translator that falls back to the English verbatim.
  - `getAttributeLabel(t: AttributeTranslator, value: string | null | undefined): string` — the pure core, testable without React.
  - `type AttributeTranslator = { has: (key: string) => boolean; (key: string): string }`

- [ ] **Step 1: Write the failing test**

Create `src/lib/i18n/productAttributes.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { attributeKey, getAttributeLabel, type AttributeTranslator } from "./productAttributes";

/** Stands in for next-intl's `t`, which is callable and carries `.has()`. */
function translator(dict: Record<string, string>): AttributeTranslator {
  const t = ((key: string) => dict[key] ?? `MISSING:${key}`) as AttributeTranslator;
  t.has = (key: string) => key in dict;
  return t;
}

describe("attributeKey", () => {
  it("lowercases and hyphenates", () => {
    expect(attributeKey("Pear")).toBe("pear");
    expect(attributeKey("Clarity Enhanced")).toBe("clarity-enhanced");
    expect(attributeKey("IGI Certified")).toBe("igi-certified");
  });

  // Review Focus 1 — this value is live in the catalogue today.
  it("survives punctuation that would break a message key", () => {
    expect(attributeKey("Necklace + Earring")).toBe("necklace-earring");
    expect(attributeKey("Lab-grown")).toBe("lab-grown");
  });

  // Review Focus 4 — both spellings exist in live data and must each resolve.
  it("keeps two real spellings of one concept distinct", () => {
    expect(attributeKey("Lab-grown")).toBe("lab-grown");
    expect(attributeKey("Labgrown")).toBe("labgrown");
  });

  it("collapses repeated and surrounding separators", () => {
    expect(attributeKey("  Heat   Treated  ")).toBe("heat-treated");
  });

  it("is stable regardless of input casing", () => {
    expect(attributeKey("EMERALD")).toBe(attributeKey("emerald"));
  });
});

describe("getAttributeLabel", () => {
  const t = translator({ pear: "Poire", "igi-certified": "Certifié IGI" });

  it("returns the translation when the vocabulary has the value", () => {
    expect(getAttributeLabel(t, "Pear")).toBe("Poire");
  });

  // Review Focus 2 — an admin adds a shape the vocabulary has never seen.
  it("falls back to the English verbatim, never a key and never an error", () => {
    expect(getAttributeLabel(t, "Trillion")).toBe("Trillion");
  });

  it("preserves a verbatim token inside a translated value", () => {
    expect(getAttributeLabel(t, "IGI Certified")).toContain("IGI");
  });

  it("passes empty and nullish values through without inventing text", () => {
    expect(getAttributeLabel(t, "")).toBe("");
    expect(getAttributeLabel(t, null)).toBe("");
    expect(getAttributeLabel(t, undefined)).toBe("");
  });

  it("never returns a raw key, even when the lookup misses", () => {
    expect(getAttributeLabel(t, "Marquise")).not.toContain("MISSING:");
    expect(getAttributeLabel(t, "Marquise")).not.toContain("productAttributes.");
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/lib/i18n/productAttributes.test.ts`
Expected: FAIL — cannot resolve `./productAttributes`.

- [ ] **Step 3: Implement**

Create `src/lib/i18n/productAttributes.ts`:

```ts
"use client";

import { useTranslations } from "next-intl";

/**
 * next-intl's `t` is callable and carries `.has()`. Typed structurally so the
 * pure core below can be tested without React or a message provider.
 */
export type AttributeTranslator = {
  (key: string): string;
  has: (key: string) => boolean;
};

/**
 * Message key for an English attribute value.
 *
 * Normalised because the raw values are not ICU-safe: the catalogue really
 * contains "Necklace + Earring", and a "+" in a message key is asking for
 * trouble. Lowercasing makes the key insensitive to how an admin typed it.
 *
 * Note "Lab-grown" and "Labgrown" are BOTH live values and deliberately map
 * to different keys — they are a data inconsistency to fix in the catalogue,
 * not something this function should paper over by guessing they are the
 * same.
 */
export function attributeKey(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Translate one attribute value, falling back to the English verbatim.
 *
 * The fallback is the point. Attribute values come from the product database,
 * so an admin can introduce one at any time — a new shape, a new treatment —
 * and the vocabulary will not have it until someone adds and translates it.
 * Rendering the English is correct and unremarkable; rendering
 * "productAttributes.trillion" or throwing is not. next-intl throws on a
 * missing key by default, which is why this checks `has` first.
 */
export function getAttributeLabel(
  t: AttributeTranslator,
  value: string | null | undefined,
): string {
  if (!value) return "";
  const key = attributeKey(value);
  if (!key) return value;
  return t.has(key) ? t(key) : value;
}

/** Client-side convenience: `const label = useAttributeLabel(); label(product.shape)` */
export function useAttributeLabel() {
  const t = useTranslations("productAttributes") as unknown as AttributeTranslator;
  return (value: string | null | undefined) => getAttributeLabel(t, value);
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `npx vitest run src/lib/i18n/productAttributes.test.ts`
Expected: PASS, 11 tests.

- [ ] **Step 5: Confirm `t.has` really exists in this next-intl version**

Run: `node -e "console.log(require('./package.json').dependencies['next-intl'])"`
Expected: `^4.14.9`. Then confirm the API by grepping the installed types:
`grep -rn "has(" node_modules/next-intl/dist/types/src/react-client/useTranslations.d.ts node_modules/use-intl/dist/types/src/core/createTranslator.d.ts 2>/dev/null | head -5`
Expected: a `has(key)` member. **If it does not exist in this version, stop and report BLOCKED** — the fallback depends on it, and guessing an alternative silently reintroduces the throw.

- [ ] **Step 6: Commit**

```bash
git add src/lib/i18n/productAttributes.ts src/lib/i18n/productAttributes.test.ts
git commit -F - -- src/lib/i18n/productAttributes.ts src/lib/i18n/productAttributes.test.ts <<'MSG'
feat(i18n): vocabulary lookup for product attribute values

Attribute values are a controlled vocabulary of ~78 strings repeated across
55 products, so they get translated once and looked up, never per product.
Translating them per product is what let one concept become four different
Spanish words across the blog corpus.

The English fallback is load-bearing: values come from the product database,
so an admin can add a shape tomorrow that the vocabulary has never seen.
Rendering the English is correct; rendering "productAttributes.trillion" or
throwing is not — and next-intl throws on a missing key by default, hence the
`has` check.

Keys are normalised because the raw values are not ICU-safe: the catalogue
really contains "Necklace + Earring".
MSG
```

---

### Task 2: Populate and translate the `productAttributes` namespace

**Files:**
- Create: `scripts/i18n/extract-product-attributes.mjs`
- Modify: `messages/en.json` (add the `productAttributes` namespace)
- Modify: `messages/{fr,it,de,nl,es}.json` (translated namespace)

**Interfaces:**
- Consumes: `attributeKey` (Task 1).
- Produces: a `productAttributes` namespace in all six message files, keyed by `attributeKey(value)`.

- [ ] **Step 1: Write the extractor**

Create `scripts/i18n/extract-product-attributes.mjs`:

```js
import fs from "node:fs";
import path from "node:path";

/**
 * Builds the English `productAttributes` namespace from the live catalogue.
 *
 * Only genuinely translatable groups are included. `measurements` are
 * dimension strings ("10mm x 6mm x 3mm") and `vendors` is a brand name —
 * translating either would be wrong, not merely wasteful.
 */
const TRANSLATABLE_GROUPS = [
  "categories",
  "stoneTypes",
  "colors",
  "shapes",
  "origins",
  "treatments",
  "certificates",
  "tags",
];

const attributeKey = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const API = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!API) {
  console.error("NEXT_PUBLIC_API_BASE_URL is not set — cannot reach the catalogue.");
  process.exit(1);
}

const response = await fetch(`${API}/products/all-filters`);
if (!response.ok) {
  console.error(`all-filters returned HTTP ${response.status}`);
  process.exit(1);
}
const payload = await response.json();
const groups = payload.data ?? payload;

const entries = new Map();
for (const group of TRANSLATABLE_GROUPS) {
  for (const value of groups[group] ?? []) {
    const key = attributeKey(String(value));
    if (!key) continue;
    if (entries.has(key) && entries.get(key) !== value) {
      console.error(`key collision: "${entries.get(key)}" and "${value}" both -> ${key}`);
      process.exit(1);
    }
    entries.set(key, value);
  }
}

const sorted = Object.fromEntries([...entries.entries()].sort(([a], [b]) => a.localeCompare(b)));

const messagesPath = path.join(process.cwd(), "messages/en.json");
const messages = JSON.parse(fs.readFileSync(messagesPath, "utf8"));
const existing = messages.productAttributes ?? {};
// Never clobber a key that already exists — a human may have corrected it.
messages.productAttributes = { ...sorted, ...existing };
fs.writeFileSync(messagesPath, `${JSON.stringify(messages, null, 2)}\n`, "utf8");

const added = Object.keys(sorted).filter((k) => !(k in existing));
console.log(`${Object.keys(sorted).length} value(s) in the catalogue; ${added.length} new`);
added.forEach((k) => console.log(`  + ${k} = ${sorted[k]}`));
```

- [ ] **Step 2: Run it and check the output**

Run: `node scripts/i18n/extract-product-attributes.mjs`
Expected: around 78 values, reported as new on the first run. It must NOT report a key collision — if it does, two different English values normalise to the same key and the plan needs revisiting; report that rather than editing the script to ignore it.

Confirm `messages/en.json` gained a `productAttributes` object including `pear`, `emerald`, `igi-certified`, `necklace-earring`, `lab-grown` and `labgrown`.

- [ ] **Step 3: Review the English before spending money translating it**

Run: `node -e "const m=require('./messages/en.json').productAttributes;console.log(Object.keys(m).length);console.log(JSON.stringify(m,null,1))"`

Read it. Every value should be a real attribute a shopper would see. If `tags` has brought in near-duplicates of other groups (`diamond` as both a stoneType and a tag), that is fine — they share one key and one translation, which is the point of a vocabulary.

- [ ] **Step 4: Translate into the five locales**

Run: `node scripts/i18n/translate.mjs translate productAttributes`
then: `node scripts/i18n/translate.mjs merge productAttributes --after Common`

Read the script's own source for the exact command surface if these differ. Cost is roughly 78 × 5 short strings — pennies. **Never print the API key.**

- [ ] **Step 5: Check the translations before trusting them**

Run: `node scripts/i18n/translate.mjs check`
Expected: 0 glossary violations.

Then eyeball the certificates specifically, because they carry verbatim tokens:

```bash
node -e "for(const l of ['en','fr','de','es']){const m=require('./messages/'+l+'.json').productAttributes;console.log(l, m['igi-certified'], '|', m['gia-certified'])}"
```

Every locale must still contain `IGI` and `GIA`. If a locale dropped or translated the acronym, fix that entry by hand and say so in your report — this is Review Focus 5.

- [ ] **Step 6: Commit**

```bash
git add scripts/i18n/extract-product-attributes.mjs messages/en.json messages/fr.json messages/it.json messages/de.json messages/nl.json messages/es.json
git commit -F - -- scripts/i18n/extract-product-attributes.mjs messages/en.json messages/fr.json messages/it.json messages/de.json messages/nl.json messages/es.json <<'MSG'
feat(i18n): translate the product attribute vocabulary

~78 distinct values across the catalogue, translated once rather than per
product. measurements (49 dimension strings) and vendors (a brand name) are
deliberately excluded — translating either would be wrong, not just wasteful.

The extractor refuses to clobber an existing key, so a hand-corrected
translation survives a re-run, and it exits on a key collision rather than
silently merging two different values into one entry.
MSG
```

---

### Task 3: Render attribute values through the lookup

**Files:**
- Modify: `src/components/shop/ProductDetailsTabs.tsx` (the `category`, `stoneType`, `color`, `shape`, `treatment`, `certificate`, `origin` and `tags` render sites)
- Modify: `src/components/shop/ShopCatalog.tsx`
- Modify: `src/components/home/BestSellingTabs.tsx`
- Modify: `src/components/home/ShopByEdition.tsx`

**Interfaces:**
- Consumes: `useAttributeLabel` (Task 1).
- Produces: nothing new.

- [ ] **Step 1: Find every raw attribute render site**

Run:
```bash
grep -rnE "\{product\.(category|stoneType|color|shape|origin|treatment|certificate)\}|\{tag\}" src/components src/app/\[locale\] --include=*.tsx
```

Record the full list in your report. Expect sites in the four files above. **If you find one in a file not listed here, include it and say so** — the list was built by grep and may have missed a differently-named variable.

- [ ] **Step 2: Apply the lookup in `ProductDetailsTabs.tsx`**

It is already a client component. Add the hook near the other hooks:

```tsx
  const attributeLabel = useAttributeLabel();
```

importing `useAttributeLabel` from `@/lib/i18n/productAttributes`. Then wrap each value — for example the shape site becomes:

```tsx
                            {attributeLabel(product.shape)}
```

Apply the same to `product.category`, `product.stoneType`, `product.color`, `product.treatment`, `product.certificate`, `product.origin`, and each rendered `tag`.

**Do not wrap** `product.measurement` (dimensions), `product.vendor` (brand), `product.sku`, `product.carat`, `product.diamondPcs`, or any price.

- [ ] **Step 3: Apply the same in the other three components**

Same hook, same wrapping, only for the attribute fields listed in Step 1. If a component is a server component, use `getTranslations("productAttributes")` plus `getAttributeLabel` instead of the hook — check the `"use client"` directive at the top of each file before choosing, and say in your report which you used for each.

- [ ] **Step 4: Typecheck and test**

Run: `npx tsc --noEmit && npm test`
Expected: tsc clean; the existing suite still green (143 tests before this plan).

- [ ] **Step 5: Verify in a real browser, per locale**

Run `npm run build && npx next start -p 3180`, then:

```bash
curl -s "http://localhost:3180/fr/shop-details/<a-real-slug>/" | grep -oE "Poire|Pear|Émeraude|Emerald" | sort | uniq -c
```

Expected: the French terms present, the English ones absent. Pick a real slug from `curl -s "$NEXT_PUBLIC_API_BASE_URL/products?limit=1" | grep -o '"slug":"[^"]*"'`. Paste what you saw.

- [ ] **Step 6: Commit**

```bash
git add src/components/shop/ProductDetailsTabs.tsx src/components/shop/ShopCatalog.tsx src/components/home/BestSellingTabs.tsx src/components/home/ShopByEdition.tsx
git commit -F - -- src/components/shop/ProductDetailsTabs.tsx src/components/shop/ShopCatalog.tsx src/components/home/BestSellingTabs.tsx src/components/home/ShopByEdition.tsx <<'MSG'
feat(i18n): render product attribute values in the active locale

Labels were already translated; the values beside them were not, so a French
product page read "Forme: Pear". Values now go through the vocabulary lookup,
which falls back to the English verbatim for anything the vocabulary has not
seen yet.

measurement, vendor, sku, carat and diamondPcs are deliberately left alone —
dimensions, a brand name and numbers are not translatable.
MSG
```

---

### Task 4: Parse and render `details`

**Files:**
- Create: `src/lib/products/details.ts`
- Create: `src/lib/products/details.test.ts`
- Modify: `src/components/shop/ProductDetailsTabs.tsx` (the `{product.details}` render at roughly line 343)
- Modify: `messages/{en,fr,it,de,nl,es}.json` (three new `ProductDetailsTabs` label keys)

**Interfaces:**
- Consumes: `getAttributeLabel` (Task 1).
- Produces: `parseDetails(raw: string | null | undefined): DetailPair[]` where `type DetailPair = { label: string; value: string }`.

- [ ] **Step 1: Write the failing test**

Create `src/lib/products/details.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { parseDetails } from "./details";

describe("parseDetails", () => {
  // The real shape, taken from the live catalogue.
  it("splits the real format into label/value pairs", () => {
    const raw = "Stone: Emerald | Carat: 3 | Origin: Australia | Setting: Prong";
    expect(parseDetails(raw)).toEqual([
      { label: "Stone", value: "Emerald" },
      { label: "Carat", value: "3" },
      { label: "Origin", value: "Australia" },
      { label: "Setting", value: "Prong" },
    ]);
  });

  // Review Focus 3 — malformed input must degrade, not explode.
  it("returns nothing for empty or nullish input", () => {
    expect(parseDetails("")).toEqual([]);
    expect(parseDetails("   ")).toEqual([]);
    expect(parseDetails(null)).toEqual([]);
    expect(parseDetails(undefined)).toEqual([]);
  });

  it("ignores empty segments from a trailing or doubled separator", () => {
    expect(parseDetails("Stone: Emerald |  | Carat: 3 |")).toEqual([
      { label: "Stone", value: "Emerald" },
      { label: "Carat", value: "3" },
    ]);
  });

  it("keeps a segment that has no colon, as a value with no label", () => {
    expect(parseDetails("Hallmarked | Carat: 3")).toEqual([
      { label: "", value: "Hallmarked" },
      { label: "Carat", value: "3" },
    ]);
  });

  it("splits on the FIRST colon only, so a value may contain one", () => {
    expect(parseDetails("Ratio: 1:1")).toEqual([{ label: "Ratio", value: "1:1" }]);
  });

  it("trims whitespace around both halves", () => {
    expect(parseDetails("  Stone :   Emerald  ")).toEqual([
      { label: "Stone", value: "Emerald" },
    ]);
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/lib/products/details.test.ts`
Expected: FAIL — cannot resolve `./details`.

- [ ] **Step 3: Implement**

Create `src/lib/products/details.ts`:

```ts
export type DetailPair = { label: string; value: string };

/**
 * Parse the product `details` string into label/value pairs.
 *
 * The backend stores specifications as a single pipe-delimited string —
 * "Stone: Emerald | Carat: 3 | Setting: Prong" — rather than structured
 * fields. Both halves are controlled vocabulary, so parsing it lets each half
 * be translated from the lookup instead of sending the whole string through a
 * translation model.
 *
 * Deliberately forgiving: this is admin-entered free text, so a trailing
 * separator, an empty segment, or a segment with no colon must degrade to
 * something renderable rather than breaking the product page. A segment with
 * no colon becomes a value with no label, which renders as a bare line.
 *
 * Splits on the FIRST colon only, so a value may legitimately contain one.
 */
export function parseDetails(raw: string | null | undefined): DetailPair[] {
  if (!raw || !raw.trim()) return [];

  return raw
    .split("|")
    .map((segment) => segment.trim())
    .filter(Boolean)
    .map((segment) => {
      const colon = segment.indexOf(":");
      if (colon === -1) return { label: "", value: segment };
      return {
        label: segment.slice(0, colon).trim(),
        value: segment.slice(colon + 1).trim(),
      };
    });
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `npx vitest run src/lib/products/details.test.ts`
Expected: PASS, 6 tests.

- [ ] **Step 5: Render the parsed pairs**

In `ProductDetailsTabs.tsx`, replace the raw `{product.details}` paragraph with the parsed, translated list. Labels resolve against the existing `ProductDetailsTabs` namespace where a key exists, falling back to the English label; values resolve through `attributeLabel`.

```tsx
  const detailPairs = parseDetails(product.details);
```

and in the markup, instead of the single `<p>{product.details}</p>`:

```tsx
                      {detailPairs.length > 0 ? (
                          <ul className="font-jost mt-6 grid max-w-4xl gap-x-10 gap-y-2 text-[0.95rem] leading-7 text-deep/75 sm:grid-cols-2">
                              {detailPairs.map((pair, index) => (
                                  <li key={`${pair.label}-${index}`}>
                                      {pair.label ? (
                                          <span className="font-semibold uppercase tracking-[0.18em] text-deep/55">
                                              {t.has(detailLabelKey(pair.label))
                                                  ? t(detailLabelKey(pair.label))
                                                  : pair.label}
                                              {": "}
                                          </span>
                                      ) : null}
                                      {attributeLabel(pair.value)}
                                  </li>
                              ))}
                          </ul>
                      ) : null}
```

Add a small local helper beside the component mapping a `details` label to its existing message key:

```tsx
/** `details` labels reuse the tab's own label keys where one exists. */
const DETAIL_LABEL_KEYS: Record<string, string> = {
  Stone: "stone",
  Carat: "carat",
  Origin: "origin",
  Treatment: "treatment",
  Pieces: "diamondPieces",
  Setting: "setting",
  Finish: "finish",
  Hallmarked: "hallmarked",
};
const detailLabelKey = (label: string) => DETAIL_LABEL_KEYS[label] ?? label;
```

`Setting`, `Finish` and `Hallmarked` have no key yet, and the spec says to add them. Do that now, in the same task, so no `details` label renders in English:

- [ ] **Step 5b: Add the three missing label keys**

Add to `messages/en.json` under `ProductDetailsTabs`:

```json
    "setting": "Setting:",
    "finish": "Finish:",
    "hallmarked": "Hallmarked:"
```

Match the existing entries' style exactly — check whether the neighbouring
keys (`stone`, `colour`, `shape`) include a trailing colon and follow them; if
they do not, drop the colons here too and say so in your report.

Then translate and merge just this namespace:

```
node scripts/i18n/translate.mjs translate ProductDetailsTabs
node scripts/i18n/translate.mjs merge ProductDetailsTabs --after Common
```

That re-translates the namespace's pending keys only — the CLI skips entries
already present in each locale, so the other ~50 keys are untouched. Confirm
that by diffing: `git diff --stat messages/` should show a small change, not a
rewrite of every locale file. If it rewrote everything, stop and report it.

Finally extend `DETAIL_LABEL_KEYS` below with the three new mappings.

- [ ] **Step 6: Typecheck, test, and look at it**

Run: `npx tsc --noEmit && npm test && npm run build`
Expected: all clean.

Then start the server and compare one product page in two locales, pasting both:
```bash
npx next start -p 3181
curl -s "http://localhost:3181/shop-details/<slug>/"    | grep -oE "Stone|Emerald" | sort | uniq -c
curl -s "http://localhost:3181/fr/shop-details/<slug>/" | grep -oE "Pierre|Émeraude|Stone|Emerald" | sort | uniq -c
```

- [ ] **Step 7: Commit**

```bash
git add src/lib/products/details.ts src/lib/products/details.test.ts src/components/shop/ProductDetailsTabs.tsx messages/en.json messages/fr.json messages/it.json messages/de.json messages/nl.json messages/es.json
git commit -F - -- src/lib/products/details.ts src/lib/products/details.test.ts src/components/shop/ProductDetailsTabs.tsx messages/ <<'MSG'
feat(i18n): render the details spec string per locale

The backend stores specifications as one pipe-delimited string rather than
structured fields. Both halves of each pair are controlled vocabulary, so
parsing it lets each be translated from the lookup — no AI involved, and the
same term can never drift between two products.

The parser is deliberately forgiving because this is admin-entered free text:
a trailing separator, an empty segment or a segment with no colon degrades to
something renderable instead of breaking the product page. It splits on the
first colon only, so a value may contain one.
MSG
```

---

### Task 5: The unknown-attribute gate

**Files:**
- Create: `scripts/i18n/check-product-attributes.mjs`
- Modify: `package.json` (add `i18n:check-attributes`)

**Interfaces:**
- Consumes: the `productAttributes` namespace (Task 2), `attributeKey`'s normalisation rule (Task 1 — reimplemented locally in the script, as the other `scripts/i18n/*.mjs` gates are standalone).
- Produces: `npm run i18n:check-attributes`, exit 1 when the catalogue holds a value no locale can render.

- [ ] **Step 1: Write the gate**

Create `scripts/i18n/check-product-attributes.mjs`:

```js
import fs from "node:fs";
import path from "node:path";

/**
 * Fails when the live catalogue contains an attribute value the vocabulary
 * cannot render.
 *
 * Attribute values come from the product database, so an admin can introduce
 * one at any time. The page degrades gracefully — it shows the English — but
 * silently, so without this the catalogue accumulates untranslated values
 * nobody notices. This surfaces them in CI instead of on the storefront.
 */
const TRANSLATABLE_GROUPS = [
  "categories", "stoneTypes", "colors", "shapes",
  "origins", "treatments", "certificates", "tags",
];
const LOCALES = ["en", "fr", "it", "de", "nl", "es"];

const attributeKey = (value) =>
  value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const API = process.env.NEXT_PUBLIC_API_BASE_URL;
if (!API) {
  console.error("NEXT_PUBLIC_API_BASE_URL is not set — cannot reach the catalogue.");
  process.exit(1);
}

const response = await fetch(`${API}/products/all-filters`);
if (!response.ok) {
  console.error(`all-filters returned HTTP ${response.status}`);
  process.exit(1);
}
const groups = (await response.json()).data ?? {};

const wanted = new Map();
for (const group of TRANSLATABLE_GROUPS) {
  for (const value of groups[group] ?? []) {
    const key = attributeKey(String(value));
    if (key) wanted.set(key, String(value));
  }
}

let missing = 0;
for (const locale of LOCALES) {
  const file = path.join(process.cwd(), `messages/${locale}.json`);
  const vocabulary = JSON.parse(fs.readFileSync(file, "utf8")).productAttributes ?? {};
  const absent = [...wanted.entries()].filter(([key]) => !(key in vocabulary));
  if (absent.length) {
    console.log(`== ${locale}: ${absent.length} untranslated attribute value(s)`);
    absent.forEach(([key, value]) => console.log(`   ${key}  ("${value}")`));
    missing += absent.length;
  }
}

console.log(`\n${wanted.size} catalogue value(s); ${missing} missing translation(s)`);
if (missing) {
  console.log("Run: node scripts/i18n/extract-product-attributes.mjs, then translate productAttributes");
  process.exitCode = 1;
}
```

- [ ] **Step 2: Add the npm script**

In `package.json` scripts, beside the other `i18n:` entries:

```json
"i18n:check-attributes": "node scripts/i18n/check-product-attributes.mjs"
```

- [ ] **Step 3: Run it — expect clean**

Run: `npm run i18n:check-attributes`
Expected: `78 catalogue value(s); 0 missing translation(s)`, exit 0. Report the real numbers.

- [ ] **Step 4: Prove it by sabotage — do not skip this**

Three gates in this project's history reported zero while shipping defects, so a gate is not trusted until it has been broken on purpose.

Temporarily delete one key from one locale and confirm the gate fails:

```bash
node -e "const fs=require('fs');const m=JSON.parse(fs.readFileSync('messages/fr.json','utf8'));delete m.productAttributes.pear;fs.writeFileSync('messages/fr.json',JSON.stringify(m,null,2)+'\n')"
npm run i18n:check-attributes; echo "exit=$?"
```

Expected: exit 1, naming `pear ("Pear")` under `fr`. Then restore:

```bash
git checkout -- messages/fr.json
npm run i18n:check-attributes; echo "exit=$?"
```

Expected: exit 0 again, and `git status --porcelain -- messages/` empty. **Paste all of this output in your report.**

- [ ] **Step 5: Commit**

```bash
git add scripts/i18n/check-product-attributes.mjs package.json
git commit -F - -- scripts/i18n/check-product-attributes.mjs package.json <<'MSG'
feat(i18n): gate on attribute values the vocabulary cannot render

Attribute values come from the product database, so an admin can add one at
any time. The page degrades gracefully to English — but silently, so without
a gate the catalogue accumulates untranslated values nobody notices.

Proven by sabotage before being trusted: deleting one key from one locale
fails the gate naming that key and locale, and restoring it passes. Three
gates in this project previously reported zero while shipping defects, which
is why that step is mandatory rather than optional.
MSG
```

---

## Done when

- `npm test` passes and `npx tsc --noEmit` is clean.
- `npm run build` succeeds.
- `npm run i18n:check-attributes` reports 0 missing and exits 0.
- `npm run i18n:check` still reports 0 defects.
- A French product detail page renders a French title, French description, French attribute values and a French `details` list, with `IGI`/`GIA` intact.
- An attribute value absent from the vocabulary renders its English verbatim — not a key, not an error.
- Filter values submitted in a query are still English (`?shape=Pear` still returns products).

## Known follow-ups, deliberately not in this plan

- **`Lab-grown` vs `Labgrown`** both exist in live `origins` data. This plan translates both so neither renders raw, but they are one concept with two spellings and should be normalised in the catalogue. That is a data fix, not a code fix.
- **Cart and wishlist** snapshot `product.title` in English at add-time, so a French shopper sees French on the listing and English in their cart. It is a stored snapshot, so it cannot be fixed by rendering.
