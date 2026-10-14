# Product Translation — Backend Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make the product API serve `title` and `description` in fr/it/de/nl/es, translated automatically when an admin saves a product, with human corrections protected.

**Architecture:** Translations are embedded per-field in the product document with provenance (`source`, `srcHash`). A fire-and-forget call after each write translates what is missing or stale; an idempotent backfill script covers the initial catalogue plus any crash or outage. Reads resolve server-side from a `?locale=` param and fall back to English per field, so the API's response shape is unchanged.

**Tech Stack:** TypeScript 5.9 (CommonJS, ES2020), Express 5, Mongoose 9, `openai` SDK, vitest 4 (new to this repo).

**Spec:** `docs/superpowers/specs/2026-10-07-product-content-translation-design.md` (in the **frontend** repo — this plan's work happens in the **backend** repo, `aurelia-royale-backend`).

**Scope:** Backend only. The frontend's vocabulary lookup, `details` rendering and locale threading are a separate plan, written once this API is real. Admin editing UI is phase 2 and is out of scope here — but this plan writes `source` and `srcHash` from the start so phase 2 adds UI over data that already exists.

## Global Constraints

- Repo: `aurelia-royale-backend` (`D:\Projects\aurelia-jewels\backend`). Separate git repo from the frontend — never stage frontend paths.
- Target locales are exactly `["fr","it","de","nl","es"]`. No new languages.
- Model: `gpt-6-luna` via `OPENAI_MODEL`; key via `OPENAI_API_KEY`. Same key value as `frontend/.env.local`. **Never print, echo, or commit the key.**
- `source: "human"` is never overwritten by the pipeline.
- A translation failing validation is **not written** — the field stays absent and falls back to English.
- Module system is CommonJS. Use `import`/`export` TS syntax as the existing files do; do not add `"type": "module"`.
- Services are classes; log via `logger.success(component, method, msg)` / `logger.error(...)`.
- Never block an admin save on OpenAI.

## Review Focus

Five things the spec implies that no obvious task would otherwise test:

1. **A product whose English is empty or whitespace** — must not be sent to the model or stored as a translation. Covered in Task 6.
2. **A locale key that is not one of the five** (`?locale=xx`, `?locale=EN`) — must fall back to English, not throw or return undefined. Covered in Task 9.
3. **Concurrent saves of the same product** — two fire-and-forget syncs racing must not write a translation stamped with the wrong `srcHash`. Covered in Task 6.
4. **OpenAI returning the wrong number of items** or a non-object — must be rejected wholesale rather than written field-by-field. Covered in Task 5.
5. **A product with translations for a field that no longer exists in English** (admin cleared the description) — resolution must not emit stale foreign text for an empty source. Covered in Task 4.

---

### Task 1: Test harness

**Files:**
- Modify: `package.json`
- Create: `vitest.config.ts`
- Create: `src/utils/__tests__/harness.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces: `npm test` runs vitest; `*.test.ts` files anywhere under `src/` are collected.

- [ ] **Step 1: Install vitest**

```bash
npm install --save-dev vitest@^4.1.11
```

vitest 4's `@types/node` peer is `^20 || ^22 || >=24` and optional; this repo has `^25`, which satisfies it. Do not install vitest 5 — its peer is `^22` only and will conflict.

- [ ] **Step 2: Add the config**

Create `vitest.config.ts`:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["src/**/*.test.ts"],
    environment: "node",
  },
});
```

- [ ] **Step 3: Replace the placeholder test script**

In `package.json`, change `"test": "echo \"Error: no test specified\" && exit 1"` to:

```json
"test": "vitest run",
"test:watch": "vitest"
```

- [ ] **Step 4: Write a harness test that proves collection works**

Create `src/utils/__tests__/harness.test.ts`:

```ts
import { describe, expect, it } from "vitest";

describe("test harness", () => {
  it("collects and runs tests under src/", () => {
    expect(1 + 1).toBe(2);
  });
});
```

- [ ] **Step 5: Run it**

Run: `npm test`
Expected: PASS, 1 test.

- [ ] **Step 6: Commit**

```bash
git add package.json package-lock.json vitest.config.ts src/utils/__tests__/harness.test.ts
git commit -m "test: add vitest harness to the backend

No test runner existed here — package.json's test script was the npm
placeholder that exits 1. Product translation needs unit tests for hashing,
staleness, resolution and the idempotency rules, so this establishes the
harness first.

vitest ^4.1.11 deliberately, matching the frontend: vitest 5's @types/node
peer is ^22 only and conflicts with this repo's ^25."
```

---

### Task 2: Locale constants, field types, and hashing

**Files:**
- Create: `src/constants/i18n.ts`
- Create: `src/utils/translationFields.ts`
- Create: `src/utils/__tests__/translationFields.test.ts`

**Interfaces:**
- Consumes: nothing.
- Produces:
  - `TARGET_LOCALES: readonly ["fr","it","de","nl","es"]`, `type TargetLocale`
  - `TRANSLATABLE_FIELDS: readonly ["title","description"]`, `type TranslatableField`
  - `srcHash(source: string): string`
  - `isStale(field: TranslatedField | undefined, currentSource: string): boolean`
  - `type TranslatedField = { value: string; source: "machine" | "human"; srcHash: string; updatedAt: Date }`

- [ ] **Step 1: Write the failing test**

Create `src/utils/__tests__/translationFields.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { srcHash, isStale, type TranslatedField } from "../translationFields";
import { TARGET_LOCALES, TRANSLATABLE_FIELDS } from "../../constants/i18n";

const field = (over: Partial<TranslatedField> = {}): TranslatedField => ({
  value: "Boucles d'oreilles",
  source: "machine",
  srcHash: srcHash("Earrings"),
  updatedAt: new Date(),
  ...over,
});

describe("constants", () => {
  it("targets exactly the five non-English locales the frontend ships", () => {
    expect([...TARGET_LOCALES]).toEqual(["fr", "it", "de", "nl", "es"]);
    expect([...TRANSLATABLE_FIELDS]).toEqual(["title", "description"]);
  });
});

describe("srcHash", () => {
  it("is stable for the same text", () => {
    expect(srcHash("Earrings")).toBe(srcHash("Earrings"));
  });

  it("ignores surrounding whitespace, so a trailing newline is not a content change", () => {
    expect(srcHash("  Earrings\n")).toBe(srcHash("Earrings"));
  });

  it("changes when the text changes", () => {
    expect(srcHash("Earrings")).not.toBe(srcHash("Earring"));
  });

  it("is 16 hex characters", () => {
    expect(srcHash("Earrings")).toMatch(/^[0-9a-f]{16}$/);
  });
});

describe("isStale", () => {
  it("treats a missing field as stale, so it gets translated", () => {
    expect(isStale(undefined, "Earrings")).toBe(true);
  });

  it("is not stale when the hash matches the current English", () => {
    expect(isStale(field(), "Earrings")).toBe(false);
  });

  it("is stale once the English changes", () => {
    expect(isStale(field(), "Gold Earrings")).toBe(true);
  });

  it("is not fooled by whitespace-only edits to the English", () => {
    expect(isStale(field(), "Earrings  ")).toBe(false);
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/utils/__tests__/translationFields.test.ts`
Expected: FAIL — cannot resolve `../translationFields`.

- [ ] **Step 3: Write the constants**

Create `src/constants/i18n.ts`:

```ts
/**
 * Locales this service translates into.
 *
 * The frontend's src/i18n/routing.ts is the source of truth for the site's
 * locale set; this is its non-default half, duplicated because the two live
 * in separate repositories and no test can span them. Adding a language is
 * therefore a two-repo change by definition — update routing.ts there and
 * this constant here.
 */
export const TARGET_LOCALES = ["fr", "it", "de", "nl", "es"] as const;
export type TargetLocale = (typeof TARGET_LOCALES)[number];

/** Product fields that carry free prose and are worth translating. */
export const TRANSLATABLE_FIELDS = ["title", "description"] as const;
export type TranslatableField = (typeof TRANSLATABLE_FIELDS)[number];

export const isTargetLocale = (value: string): value is TargetLocale =>
  (TARGET_LOCALES as readonly string[]).includes(value);
```

- [ ] **Step 4: Write the field helpers**

Create `src/utils/translationFields.ts`:

```ts
import { createHash } from "node:crypto";

export type TranslatedField = {
  value: string;
  source: "machine" | "human";
  /** Hash of the English text this translation was produced from. */
  srcHash: string;
  updatedAt: Date;
};

/**
 * Fingerprint of the English a translation was made from.
 *
 * Trimmed so that re-saving a product with a stray trailing newline does not
 * invalidate every translation. Truncated to 16 hex chars: collisions are
 * irrelevant at catalogue scale and the full digest would bloat every
 * product document by ~1KB across five locales and two fields.
 */
export function srcHash(source: string): string {
  return createHash("sha256").update(source.trim()).digest("hex").slice(0, 16);
}

/**
 * Does this translation still describe the current English?
 *
 * Derived, never stored — a stored boolean would drift the moment someone
 * edited a product through any path that forgot to clear it.
 */
export function isStale(
  field: TranslatedField | undefined,
  currentSource: string,
): boolean {
  if (!field) return true;
  return field.srcHash !== srcHash(currentSource);
}
```

- [ ] **Step 5: Run to verify it passes**

Run: `npx vitest run src/utils/__tests__/translationFields.test.ts`
Expected: PASS, 9 tests.

- [ ] **Step 6: Commit**

```bash
git add src/constants/i18n.ts src/utils/translationFields.ts src/utils/__tests__/translationFields.test.ts
git commit -m "feat(i18n): locale constants, translated-field type and source hashing

srcHash trims before hashing so a stray trailing newline on re-save does not
invalidate every translation, and truncates to 16 hex chars because the full
digest would add ~1KB per product across five locales and two fields.

Staleness is derived from the hash rather than stored: a stored boolean
drifts the first time a product is edited through a path that forgets to
clear it."
```

---

### Task 3: Product schema gains `translations`

**Files:**
- Modify: `src/models/Product.ts`
- Create: `src/models/__tests__/productTranslations.test.ts`

**Interfaces:**
- Consumes: `TARGET_LOCALES`, `TranslatedField` (Task 2).
- Produces: `ProductModel` documents carry `translations?: Record<TargetLocale, { title?: TranslatedField; description?: TranslatedField }>`; the `Product` interface exposes the same.

- [ ] **Step 1: Write the failing test**

Create `src/models/__tests__/productTranslations.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import mongoose from "mongoose";
import { ProductModel } from "../Product";
import { srcHash } from "../../utils/translationFields";

/**
 * Validated in-memory with mongoose's own validator — no database needed,
 * which keeps this runnable in CI without a Mongo instance.
 */
function build(translations: unknown) {
  return new ProductModel({
    _id: new mongoose.Types.ObjectId().toString(),
    title: "Gold Earrings",
    description: "An elegant pair.",
    vendor: "Aurelia Royale",
    category: "Earring",
    stoneType: "Diamond",
    color: "White",
    shape: "Pear",
    carat: 1,
    origin: "Lab-grown",
    treatment: "None",
    availability: true,
    certificate: "IGI Certified",
    measurement: "5mm x 5mm x 2mm",
    details: "Stone: Diamond | Carat: 1",
    diamondPcs: 2,
    sku: "SKU-1",
    price: 100,
    stock: 1,
    translations,
  });
}

describe("Product.translations", () => {
  it("accepts a well-formed translation for a supported locale", () => {
    const doc = build({
      fr: {
        title: {
          value: "Boucles d'oreilles en or",
          source: "machine",
          srcHash: srcHash("Gold Earrings"),
          updatedAt: new Date(),
        },
      },
    });
    expect(doc.validateSync()).toBeUndefined();
    expect(doc.translations?.fr?.title?.value).toBe("Boucles d'oreilles en or");
  });

  it("is optional — a product with no translations is still valid", () => {
    expect(build(undefined).validateSync()).toBeUndefined();
  });

  it("rejects a source outside machine|human", () => {
    const doc = build({
      fr: { title: { value: "x", source: "robot", srcHash: "a".repeat(16), updatedAt: new Date() } },
    });
    expect(doc.validateSync()).toBeDefined();
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/models/__tests__/productTranslations.test.ts`
Expected: FAIL — `translations` is stripped by the schema, so `doc.translations?.fr?.title?.value` is `undefined`.

- [ ] **Step 3: Add the schema**

In `src/models/Product.ts`, above the main product schema definition:

```ts
import { TARGET_LOCALES } from '../constants/i18n';

const translatedFieldSchema = new mongoose.Schema(
  {
    value: { type: String, required: true },
    source: { type: String, required: true, enum: ['machine', 'human'] },
    srcHash: { type: String, required: true },
    updatedAt: { type: Date, required: true, default: Date.now },
  },
  { _id: false },
);

const localeTranslationsSchema = new mongoose.Schema(
  {
    title: { type: translatedFieldSchema, required: false },
    description: { type: translatedFieldSchema, required: false },
  },
  { _id: false },
);

/**
 * One entry per locale. Spelled out rather than a Map so mongoose validates
 * the locale set, and so an unknown locale cannot be written by a typo.
 */
const translationsSchema = new mongoose.Schema(
  Object.fromEntries(
    TARGET_LOCALES.map((locale) => [locale, { type: localeTranslationsSchema, required: false }]),
  ),
  { _id: false },
);
```

Add to the product schema body, after `images`:

```ts
    translations: { type: translationsSchema, required: false },
```

And to the `Product` interface:

```ts
  translations?: Partial<Record<TargetLocale, {
    title?: TranslatedField;
    description?: TranslatedField;
  }>>;
```

importing `TargetLocale` from `../constants/i18n` and `TranslatedField` from `../utils/translationFields`.

- [ ] **Step 4: Run to verify it passes**

Run: `npx vitest run src/models/__tests__/productTranslations.test.ts`
Expected: PASS, 3 tests.

- [ ] **Step 5: Confirm nothing else broke**

Run: `npm test && npx tsc --noEmit`
Expected: all tests pass; no type errors.

- [ ] **Step 6: Commit**

```bash
git add src/models/Product.ts src/models/__tests__/productTranslations.test.ts
git commit -m "feat(i18n): embed per-field product translations in the product document

Locales are spelled out as explicit schema keys rather than a Map so mongoose
validates the locale set and a typo cannot silently create a 'fr-FR' branch
nobody reads.

Optional throughout: a product with no translations is valid and reads as
English, so the catalogue is never half-rendered."
```

---

### Task 4: Resolve a product for a locale

**Files:**
- Create: `src/services/productLocale.ts`
- Create: `src/services/__tests__/productLocale.test.ts`

**Interfaces:**
- Consumes: `isTargetLocale`, `TRANSLATABLE_FIELDS` (Task 2); the `Product` shape (Task 3).
- Produces: `resolveProductForLocale<T extends ResolvableProduct>(product: T, locale: string): T` — returns the product with `title`/`description` replaced by their translation when one exists, English otherwise, and `translations` removed from the result.

- [ ] **Step 1: Write the failing test**

Create `src/services/__tests__/productLocale.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { resolveProductForLocale } from "../productLocale";
import { srcHash } from "../../utils/translationFields";

const base = {
  _id: "p1",
  title: "Gold Earrings",
  description: "An elegant pair.",
  price: 100,
  translations: {
    fr: {
      title: { value: "Boucles d'oreilles en or", source: "machine" as const, srcHash: srcHash("Gold Earrings"), updatedAt: new Date() },
      // description deliberately absent
    },
  },
};

describe("resolveProductForLocale", () => {
  it("uses the translation when one exists", () => {
    expect(resolveProductForLocale(base, "fr").title).toBe("Boucles d'oreilles en or");
  });

  it("falls back to English per field, not per product", () => {
    const out = resolveProductForLocale(base, "fr");
    expect(out.title).toBe("Boucles d'oreilles en or");
    expect(out.description).toBe("An elegant pair."); // no fr description exists
  });

  it("returns English for a locale with no translations at all", () => {
    expect(resolveProductForLocale(base, "de").title).toBe("Gold Earrings");
  });

  it("returns English for the default locale", () => {
    expect(resolveProductForLocale(base, "en").title).toBe("Gold Earrings");
  });

  // Review Focus 2
  it("returns English for an unsupported or malformed locale rather than throwing", () => {
    for (const bad of ["xx", "EN", "fr-FR", "", "../../etc"]) {
      expect(resolveProductForLocale(base, bad).title).toBe("Gold Earrings");
    }
  });

  // Review Focus 5
  it("does not emit a stale translation when the English field has been cleared", () => {
    const cleared = { ...base, description: "" };
    const withFrDesc = {
      ...cleared,
      translations: {
        fr: {
          ...cleared.translations.fr,
          description: { value: "Une jolie paire.", source: "machine" as const, srcHash: srcHash("An elegant pair."), updatedAt: new Date() },
        },
      },
    };
    expect(resolveProductForLocale(withFrDesc, "fr").description).toBe("");
  });

  it("strips the translations blob from what the storefront receives", () => {
    expect("translations" in resolveProductForLocale(base, "fr")).toBe(false);
  });

  it("leaves non-translatable fields untouched", () => {
    expect(resolveProductForLocale(base, "fr").price).toBe(100);
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/services/__tests__/productLocale.test.ts`
Expected: FAIL — cannot resolve `../productLocale`.

- [ ] **Step 3: Implement**

Create `src/services/productLocale.ts`:

```ts
import { isTargetLocale, TRANSLATABLE_FIELDS } from '../constants/i18n';
import type { TranslatedField } from '../utils/translationFields';

type ResolvableProduct = {
  title?: string;
  description?: string;
  translations?: Partial<Record<string, Partial<Record<string, TranslatedField>>>>;
};

/**
 * Swap a product's prose for the requested locale, field by field.
 *
 * Fallback is PER FIELD, not per product: a product with a translated title
 * and an untranslated description shows the French title and the English
 * description, rather than reverting both. That keeps a partially-translated
 * catalogue readable instead of flipping whole products back to English.
 *
 * An unknown locale resolves to English rather than throwing — a bad
 * ?locale= in a crawler's URL should not 500 the catalogue.
 *
 * `translations` is removed from the result so the storefront payload does
 * not carry five locales of text it will never render.
 */
export function resolveProductForLocale<T extends ResolvableProduct>(
  product: T,
  locale: string,
): Omit<T, 'translations'> {
  const { translations, ...rest } = product;
  const resolved = { ...rest } as Record<string, unknown>;

  if (isTargetLocale(locale) && translations) {
    const forLocale = translations[locale];
    if (forLocale) {
      for (const field of TRANSLATABLE_FIELDS) {
        const source = (product as Record<string, unknown>)[field];
        // An empty English field means the admin cleared it; emitting the old
        // translation would leave foreign text describing nothing.
        if (typeof source !== 'string' || source.trim() === '') continue;
        const translated = forLocale[field];
        if (translated?.value) resolved[field] = translated.value;
      }
    }
  }

  return resolved as Omit<T, 'translations'>;
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `npx vitest run src/services/__tests__/productLocale.test.ts`
Expected: PASS, 8 tests.

- [ ] **Step 5: Commit**

```bash
git add src/services/productLocale.ts src/services/__tests__/productLocale.test.ts
git commit -m "feat(i18n): resolve product prose for a locale with per-field fallback

Fallback is per field rather than per product, so a translated title beside
an untranslated description shows both rather than reverting the whole
product to English.

Two cases worth the tests: an unknown ?locale= resolves to English instead of
throwing, because a crawler's bad URL should not 500 the catalogue; and a
cleared English field suppresses its translation, which would otherwise leave
foreign text describing a field that no longer says anything."
```

---

### Task 5: OpenAI translation client

**Files:**
- Create: `src/integrations/translation.service.ts`
- Create: `src/integrations/__tests__/translation.service.test.ts`
- Modify: `package.json` (add `openai`)
- Modify: `.env` (add `OPENAI_API_KEY`, `OPENAI_MODEL`) — **do not commit `.env`**

**Interfaces:**
- Consumes: `TargetLocale` (Task 2).
- Produces: `class TranslationService { translateBatch(locale: TargetLocale, payload: Record<string, string>): Promise<Record<string, string>> }` — throws on any validation failure rather than returning partial results.

- [ ] **Step 1: Install the SDK**

```bash
npm install openai
```

- [ ] **Step 2: Add credentials locally**

Append to `backend/.env` (the same key value as `frontend/.env.local`; `.env` is gitignored — verify with `git check-ignore .env` before writing):

```
OPENAI_API_KEY=<same value as frontend/.env.local>
OPENAI_MODEL=gpt-6-luna
```

The deployed backend needs both set in its own environment too — translation runs at request time, and a missing key there fails silently into English fallback.

- [ ] **Step 3: Write the failing test**

Create `src/integrations/__tests__/translation.service.test.ts`:

```ts
import { describe, expect, it, vi } from "vitest";
import { TranslationService } from "../translation.service";

/** Minimal stand-in for the OpenAI client; no network in tests. */
function clientReturning(content: string) {
  return {
    chat: { completions: { create: vi.fn().mockResolvedValue({ choices: [{ message: { content } }] }) } },
  } as never;
}

describe("TranslationService.translateBatch", () => {
  it("returns the model's values keyed by the same ids it was given", async () => {
    const svc = new TranslationService(clientReturning('{"0":"Boucles","1":"Une paire"}'), "gpt-6-luna");
    await expect(svc.translateBatch("fr", { "0": "Earrings", "1": "A pair" }))
      .resolves.toEqual({ "0": "Boucles", "1": "Une paire" });
  });

  // Review Focus 4
  it("rejects a response missing an id rather than writing a partial result", async () => {
    const svc = new TranslationService(clientReturning('{"0":"Boucles"}'), "gpt-6-luna");
    await expect(svc.translateBatch("fr", { "0": "Earrings", "1": "A pair" })).rejects.toThrow(/missing/i);
  });

  it("rejects extra ids the model invented", async () => {
    const svc = new TranslationService(clientReturning('{"0":"a","1":"b","2":"c"}'), "gpt-6-luna");
    await expect(svc.translateBatch("fr", { "0": "x", "1": "y" })).rejects.toThrow(/unexpected/i);
  });

  it("rejects a non-object response", async () => {
    const svc = new TranslationService(clientReturning('"just a string"'), "gpt-6-luna");
    await expect(svc.translateBatch("fr", { "0": "x" })).rejects.toThrow();
  });

  it("rejects unparseable output instead of storing it", async () => {
    const svc = new TranslationService(clientReturning("not json at all"), "gpt-6-luna");
    await expect(svc.translateBatch("fr", { "0": "x" })).rejects.toThrow();
  });

  it("rejects an empty translation", async () => {
    const svc = new TranslationService(clientReturning('{"0":"   "}'), "gpt-6-luna");
    await expect(svc.translateBatch("fr", { "0": "Earrings" })).rejects.toThrow(/empty/i);
  });

  it("rejects output that lost a verbatim token", async () => {
    const svc = new TranslationService(clientReturning('{"0":"Certifie par le labo"}'), "gpt-6-luna");
    await expect(svc.translateBatch("fr", { "0": "IGI Certified" })).rejects.toThrow(/IGI/);
  });

  it("rejects a wildly out-of-band length", async () => {
    const svc = new TranslationService(clientReturning('{"0":"x"}'), "gpt-6-luna");
    await expect(svc.translateBatch("fr", { "0": "A reasonably long sentence about earrings." }))
      .rejects.toThrow(/length/i);
  });

  it("sends one request for the whole batch, not one per string", async () => {
    const client = clientReturning('{"0":"a","1":"b","2":"c"}');
    const svc = new TranslationService(client, "gpt-6-luna");
    await svc.translateBatch("fr", { "0": "x", "1": "y", "2": "z" });
    expect((client as never as { chat: { completions: { create: { mock: { calls: unknown[] } } } } })
      .chat.completions.create.mock.calls).toHaveLength(1);
  });
});
```

- [ ] **Step 4: Run to verify it fails**

Run: `npx vitest run src/integrations/__tests__/translation.service.test.ts`
Expected: FAIL — cannot resolve `../translation.service`.

- [ ] **Step 5: Implement**

Create `src/integrations/translation.service.ts`:

```ts
import OpenAI from 'openai';
import { logger } from '../utils/logger';
import type { TargetLocale } from '../constants/i18n';

const LOCALE_NAMES: Record<TargetLocale, string> = {
  fr: 'French',
  it: 'Italian',
  de: 'German',
  nl: 'Dutch',
  es: 'Spanish',
};

/** Tokens that must survive translation untouched. */
const VERBATIM = ['IGI', 'GIA', 'Aurelia Royale'];

/** Plausible length band for a translation relative to its source. */
const LENGTH_MIN = 0.5;
const LENGTH_MAX = 2.2;

/**
 * Translates batches of product prose.
 *
 * Payloads are index-keyed maps ({"0": "text"}) rather than the product
 * object, so the document's structure never reaches the model and cannot be
 * reshaped by it — the same guard the blog pipeline uses.
 *
 * Every validator throws rather than returning a partial result. A product
 * field with no translation falls back to English, which is correct; a field
 * with a WRONG translation is a defect nobody will notice. Refusing to write
 * is the safer failure.
 */
export class TranslationService {
  constructor(
    private readonly client: OpenAI = new OpenAI({ apiKey: process.env.OPENAI_API_KEY }),
    private readonly model: string = process.env.OPENAI_MODEL ?? 'gpt-6-luna',
  ) {}

  async translateBatch(
    locale: TargetLocale,
    payload: Record<string, string>,
  ): Promise<Record<string, string>> {
    const ids = Object.keys(payload);
    if (ids.length === 0) return {};

    const response = await this.client.chat.completions.create({
      model: this.model,
      messages: [
        { role: 'system', content: this.systemPrompt(locale) },
        { role: 'user', content: JSON.stringify(payload) },
      ],
      response_format: { type: 'json_object' },
    });

    const raw = response.choices[0]?.message?.content ?? '';
    let parsed: unknown;
    try {
      parsed = JSON.parse(raw);
    } catch {
      throw new Error(`Translation response was not JSON for locale ${locale}`);
    }
    if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
      throw new Error(`Translation response was not an object for locale ${locale}`);
    }

    const out = parsed as Record<string, unknown>;
    for (const id of ids) {
      if (!(id in out)) throw new Error(`Translation missing id ${id} for locale ${locale}`);
    }
    for (const id of Object.keys(out)) {
      if (!(id in payload)) throw new Error(`Translation returned unexpected id ${id} for locale ${locale}`);
    }

    const result: Record<string, string> = {};
    for (const id of ids) {
      const value = out[id];
      if (typeof value !== 'string' || value.trim() === '') {
        throw new Error(`Translation for id ${id} was empty for locale ${locale}`);
      }
      const source = payload[id];
      for (const token of VERBATIM) {
        if (source.includes(token) && !value.includes(token)) {
          throw new Error(`Translation for id ${id} dropped verbatim token ${token}`);
        }
      }
      const ratio = value.length / source.length;
      if (ratio < LENGTH_MIN || ratio > LENGTH_MAX) {
        throw new Error(
          `Translation for id ${id} has implausible length ratio ${ratio.toFixed(2)} for locale ${locale}`,
        );
      }
      result[id] = value;
    }

    logger.success('TranslationService', 'translateBatch', `${ids.length} string(s) -> ${locale}`);
    return result;
  }

  private systemPrompt(locale: TargetLocale): string {
    return [
      `Translate each value from English into ${LOCALE_NAMES[locale]}.`,
      'The input is a JSON object of id -> English string.',
      'Return a JSON object with EXACTLY the same ids and translated values.',
      'Do not add, remove, merge or reorder ids. Do not translate the ids.',
      'This is luxury jewellery retail copy: keep the register formal and concise.',
      `Keep these tokens exactly as written: ${VERBATIM.join(', ')}.`,
      'Keep all numbers, measurements and units unchanged.',
      'Use typographic apostrophes, never straight ones.',
    ].join('\n');
  }
}
```

- [ ] **Step 6: Add the glossary, scoped per string**

The spec calls for the relevant glossary rows to be copied into this repo.
Create `src/constants/translationGlossary.ts` by copying the rows for the
terms that actually appear in product prose from
`frontend/scripts/i18n/glossary.json` — of its 28 terms these are the ones
product titles and descriptions use:

`tennis bracelet`, `tennis necklace`, `clarity`, `cut`, `carat`,
`lab-grown diamond`, `natural diamond`, `engagement ring`, `bridal jewellery`,
`fine jewellery`, `bail`, `bezel`, `pavé`, `huggie`, `station necklace`,
`hallmark`, `grading report`

Keep each row's existing shape (`en`, the five locales, optional `avoid`).
Copy the values verbatim — do not retranslate them, and do not invent rows
for terms that file does not have.

```ts
export type GlossaryTerm = {
  en: string;
  fr?: string; it?: string; de?: string; nl?: string; es?: string;
  avoid?: Partial<Record<string, string[]>>;
};

/**
 * Copied from frontend/scripts/i18n/glossary.json. Duplicated because the
 * repos are separate; keep the values identical to that file.
 *
 * Note the hallmark row's es entry is sense-dependent — "sello" is the mark
 * on the piece, "contraste" is the hallmarking system — so its avoid list is
 * safe only while the source term is "hallmark" and not "hallmarking". That
 * caveat is recorded on the frontend row; do not widen the match here.
 */
export const GLOSSARY: GlossaryTerm[] = [ /* copied rows */ ];
```

Add per-string scoping to `TranslationService`. This is the part that must
not be reinvented loosely — the frontend's commit `9a548d3` exists because a
term rule applied across a whole batch rewrote 49 unrelated strings:

```ts
const ESCAPE_RE = /[.*+?^${}()|[\]\\]/g;
const hasSourceTerm = (text: string, term: string) =>
  new RegExp(`(^|[^\\p{L}])${term.replace(ESCAPE_RE, '\\$&')}s?([^\\p{L}]|$)`, 'iu').test(text);

private glossaryRows(locale: TargetLocale, payload: Record<string, string>): string {
  const rows: string[] = [];
  for (const term of GLOSSARY) {
    const target = term[locale];
    if (!target) continue;
    const ids = Object.entries(payload)
      .filter(([, value]) => hasSourceTerm(value, term.en))
      .map(([id]) => id);
    if (ids.length === 0) continue;
    rows.push(`- for id(s) ${ids.join(', ')} only: translate "${term.en}" as "${target}"`);
  }
  return rows.length
    ? `
Required terminology. Each rule applies ONLY to the ids it names; do not generalise it to other ids:
${rows.join('
')}`
    : '';
}
```

Append `this.glossaryRows(locale, payload)` to the system prompt string.

- [ ] **Step 7: Test that a rule never escapes the string it belongs to**

Append to `src/integrations/__tests__/translation.service.test.ts`:

```ts
describe("glossary scoping", () => {
  it("names only the ids whose source actually contains the term", async () => {
    const client = clientReturning('{"0":"Bracelet tennis","1":"Une bague"}');
    const svc = new TranslationService(client, "gpt-6-luna");
    await svc.translateBatch("fr", { "0": "A tennis bracelet", "1": "A ring" });
    const sent = (client as never as { chat: { completions: { create: { mock: { calls: { 0: { messages: { content: string }[] } }[] } } } } })
      .chat.completions.create.mock.calls[0][0].messages[0].content;
    expect(sent).toMatch(/for id\(s\) 0 only/);
    expect(sent).not.toMatch(/for id\(s\) 0, 1/);
  });

  it("emits no terminology block when no source string contains a term", async () => {
    const client = clientReturning('{"0":"Une bague"}');
    const svc = new TranslationService(client, "gpt-6-luna");
    await svc.translateBatch("fr", { "0": "A ring" });
    const sent = (client as never as { chat: { completions: { create: { mock: { calls: { 0: { messages: { content: string }[] } }[] } } } } })
      .chat.completions.create.mock.calls[0][0].messages[0].content;
    expect(sent).not.toMatch(/Required terminology/);
  });
});
```

- [ ] **Step 8: Run to verify it passes**

Run: `npx vitest run src/integrations/__tests__/translation.service.test.ts`
Expected: PASS, 11 tests.

- [ ] **Step 9: Confirm the key was not committed**

Run: `git status --porcelain && git check-ignore -v .env`
Expected: `.env` does NOT appear in status; `check-ignore` confirms it is ignored.

- [ ] **Step 10: Commit**

```bash
git add package.json package-lock.json src/constants/translationGlossary.ts src/integrations/translation.service.ts src/integrations/__tests__/translation.service.test.ts
git commit -m "feat(i18n): OpenAI translation client with validators that refuse partial output

Payloads are index-keyed maps rather than the product object, so document
structure never reaches the model and cannot be reshaped by it.

Every validator throws instead of returning what it got. A field with no
translation falls back to English, which is correct and visible; a field with
a wrong translation is a defect nobody notices. Refusing to write is the
safer failure, and the blog work showed why — a silently-wrong Spanish term
shipped to 66 files before anyone read it."
```

---

### Task 6: `syncProduct` — idempotency and protection

**Files:**
- Create: `src/services/productTranslation.service.ts`
- Create: `src/services/__tests__/productTranslation.service.test.ts`

**Interfaces:**
- Consumes: `TranslationService.translateBatch` (Task 5); `srcHash`, `isStale` (Task 2); `TARGET_LOCALES`, `TRANSLATABLE_FIELDS` (Task 2).
- Produces: `class ProductTranslationService { planFor(product, locale): { field: TranslatableField; source: string }[]; syncProduct(productId: string): Promise<void> }`

`planFor` is exported separately so the decision logic is testable without a database.

- [ ] **Step 1: Write the failing test**

Create `src/services/__tests__/productTranslation.service.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { planFor } from "../productTranslation.service";
import { srcHash } from "../../utils/translationFields";

const product = (translations: unknown = undefined) => ({
  title: "Gold Earrings",
  description: "An elegant pair.",
  translations,
}) as never;

describe("planFor", () => {
  it("plans both fields for a product with no translations", () => {
    expect(planFor(product(), "fr").map((p) => p.field)).toEqual(["title", "description"]);
  });

  it("skips a field whose translation matches the current English", () => {
    const t = { fr: { title: { value: "Boucles", source: "machine", srcHash: srcHash("Gold Earrings"), updatedAt: new Date() } } };
    expect(planFor(product(t), "fr").map((p) => p.field)).toEqual(["description"]);
  });

  it("re-plans a machine field once the English changes", () => {
    const t = { fr: { title: { value: "Boucles", source: "machine", srcHash: srcHash("Old title"), updatedAt: new Date() } } };
    expect(planFor(product(t), "fr").map((p) => p.field)).toContain("title");
  });

  it("never re-plans a human-edited field, even when the English changed", () => {
    const t = { fr: { title: { value: "Boucles corrigees", source: "human", srcHash: srcHash("Old title"), updatedAt: new Date() } } };
    expect(planFor(product(t), "fr").map((p) => p.field)).toEqual(["description"]);
  });

  // Review Focus 1
  it("never plans a field whose English is empty or whitespace", () => {
    const p = { title: "   ", description: "", translations: undefined } as never;
    expect(planFor(p, "fr")).toEqual([]);
  });

  it("carries the exact source text, so the hash stamped later matches what was sent", () => {
    expect(planFor(product(), "fr")[0]).toEqual({ field: "title", source: "Gold Earrings" });
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/services/__tests__/productTranslation.service.test.ts`
Expected: FAIL — cannot resolve `../productTranslation.service`.

- [ ] **Step 3: Implement**

Create `src/services/productTranslation.service.ts`:

```ts
import { ProductModel } from '../models/Product';
import { TranslationService } from '../integrations/translation.service';
import { TARGET_LOCALES, TRANSLATABLE_FIELDS, type TargetLocale, type TranslatableField } from '../constants/i18n';
import { isStale, srcHash, type TranslatedField } from '../utils/translationFields';
import { logger } from '../utils/logger';

type PlanItem = { field: TranslatableField; source: string };

type PlannableProduct = {
  title?: string;
  description?: string;
  translations?: Partial<Record<string, Partial<Record<string, TranslatedField>>>>;
};

/**
 * Which fields of this product still need translating into this locale?
 *
 * Exported separately from syncProduct so the rules can be tested without a
 * database. Two rules do the work:
 *   - a `human` field is never re-planned, which is what makes an admin's
 *     correction survive later edits to the English;
 *   - a field whose stored srcHash matches the current English is already
 *     current, which is what makes re-running the backfill free.
 */
export function planFor(product: PlannableProduct, locale: TargetLocale): PlanItem[] {
  const forLocale = product.translations?.[locale];
  const plan: PlanItem[] = [];

  for (const field of TRANSLATABLE_FIELDS) {
    const source = product[field];
    // Nothing to translate, and an empty string would burn a call to produce
    // an empty translation the validators would then reject.
    if (typeof source !== 'string' || source.trim() === '') continue;

    const existing = forLocale?.[field];
    if (existing?.source === 'human') continue;
    if (!isStale(existing, source)) continue;

    plan.push({ field, source });
  }

  return plan;
}

export class ProductTranslationService {
  constructor(private readonly translator = new TranslationService()) {}

  /**
   * Bring every locale up to date for one product.
   *
   * Writes each locale with a targeted $set keyed by the field path rather
   * than saving the whole document: two syncs for the same product can
   * overlap (an admin saving twice quickly), and a whole-document write would
   * let the slower one clobber the faster one's other fields.
   */
  async syncProduct(productId: string): Promise<void> {
    const product = await ProductModel.findById(productId).lean();
    if (!product) {
      logger.error('ProductTranslationService', 'syncProduct', `Product not found: ${productId}`);
      return;
    }

    for (const locale of TARGET_LOCALES) {
      const plan = planFor(product as PlannableProduct, locale);
      if (plan.length === 0) continue;

      try {
        const payload = Object.fromEntries(plan.map((item, index) => [String(index), item.source]));
        const translated = await this.translator.translateBatch(locale, payload);

        const update: Record<string, TranslatedField> = {};
        plan.forEach((item, index) => {
          update[`translations.${locale}.${item.field}`] = {
            value: translated[String(index)],
            source: 'machine',
            // Hash the text we actually SENT. Hashing the product's current
            // value instead would stamp a concurrent edit's text onto this
            // translation and mark it current when it is not.
            srcHash: srcHash(item.source),
            updatedAt: new Date(),
          };
        });

        await ProductModel.updateOne({ _id: productId }, { $set: update });
        logger.success('ProductTranslationService', 'syncProduct', `${productId} -> ${locale} (${plan.length} field(s))`);
      } catch (error) {
        // One locale failing must not stop the rest; the field simply stays
        // absent and falls back to English until the next sync or backfill.
        logger.error(
          'ProductTranslationService',
          'syncProduct',
          `${productId} -> ${locale} failed: ${(error as Error).message}`,
        );
      }
    }
  }
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `npx vitest run src/services/__tests__/productTranslation.service.test.ts`
Expected: PASS, 6 tests.

- [ ] **Step 5: Commit**

```bash
git add src/services/productTranslation.service.ts src/services/__tests__/productTranslation.service.test.ts
git commit -m "feat(i18n): syncProduct with per-field protection and idempotency

planFor is exported separately so the decision rules are testable without a
database. Two rules carry the design: a human-edited field is never
re-planned, which is what makes an admin's correction survive later edits to
the English; and a field whose srcHash matches the current English is already
current, which is what makes re-running the backfill free.

Two concurrency details worth the comments. Writes use a targeted \$set on the
field path rather than saving the document, so two overlapping syncs cannot
clobber each other's other fields. And the stamped hash is of the text
actually SENT, not the product's current value — hashing the latter would
mark a translation current against text it never saw."
```

---

### Task 7: Translate on save

**Files:**
- Modify: `src/services/product.service.ts` (end of `createProduct`, end of `updateProduct`)

**Interfaces:**
- Consumes: `ProductTranslationService.syncProduct` (Task 6).
- Produces: nothing new.

- [ ] **Step 1: Wire the hook into `createProduct`**

In `src/services/product.service.ts`, add the import:

```ts
import { ProductTranslationService } from './productTranslation.service';
```

Add a field to the class alongside the other collaborators:

```ts
  private readonly translations = new ProductTranslationService();
```

`createProduct` currently ends by returning the repository call directly:

```ts
    return this.productRepository.create(createData);
```

Capture it so the new id is available, then fire the sync:

```ts
    const created = await this.productRepository.create(createData);

    // Fire and forget: the admin's save must never wait on OpenAI, and a
    // translation failure must never fail the save. Anything missed here is
    // picked up by `npm run translate:backfill`, which is why that script is
    // part of the design rather than a convenience.
    void this.translations.syncProduct(String(created._id)).catch((error) => {
      logger.error('ProductService', 'createProduct', `Translation sync failed: ${error.message}`);
    });

    return created;
```

- [ ] **Step 2: Wire the same hook into `updateProduct`**

`updateProduct` already holds its result in `updatedProduct`. Immediately before `return updatedProduct;`:

```ts
    void this.translations.syncProduct(String(productId)).catch((error) => {
      logger.error('ProductService', 'updateProduct', `Translation sync failed: ${error.message}`);
    });
```

- [ ] **Step 3: Typecheck**

Run: `npx tsc --noEmit`
Expected: no errors.

- [ ] **Step 4: Run the suite**

Run: `npm test`
Expected: all tests pass.

- [ ] **Step 5: Commit**

```bash
git add src/services/product.service.ts
git commit -m "feat(i18n): translate a product in the background when it is saved

Fire and forget deliberately: the admin's save must never wait on OpenAI, and
a translation failure must never fail the save.

That leaves a real hole — a process restart or an API outage drops the work
with nothing to retry it. The backfill script closes it, which is why it is
part of the design rather than a convenience."
```

---

### Task 8: Backfill script

**Files:**
- Create: `src/scripts/translateBackfill.ts`
- Modify: `package.json` (add the script entry)

**Interfaces:**
- Consumes: `ProductTranslationService.syncProduct`, `planFor` (Task 6).
- Produces: `npm run translate:backfill [-- --dry] [-- --locale fr] [-- --product <id>]`

- [ ] **Step 1: Write the script**

Create `src/scripts/translateBackfill.ts`, following the existing scripts in that folder:

```ts
import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db';
import { ProductModel } from '../models/Product';
import { ProductTranslationService, planFor } from '../services/productTranslation.service';
import { TARGET_LOCALES, isTargetLocale, type TargetLocale } from '../constants/i18n';
import { logger } from '../utils/logger';

function arg(name: string): string | undefined {
  const index = process.argv.indexOf(`--${name}`);
  return index === -1 ? undefined : process.argv[index + 1];
}

/**
 * Fills in every product translation that is missing or stale.
 *
 * Idempotent, so it is safe to run at any time and costs nothing when there
 * is nothing to do. It is the recovery path for the fire-and-forget sync on
 * save — a process restart or an OpenAI outage leaves work undone with
 * nothing else to retry it — as well as the way the initial catalogue and any
 * post-glossary-change re-run get done.
 *
 * Deliberately a script and not an HTTP endpoint: it is an operator action,
 * it can run for minutes, and it should not be reachable from the network.
 */
async function main() {
  const dry = process.argv.includes('--dry');
  const onlyLocale = arg('locale');
  const onlyProduct = arg('product');

  if (onlyLocale && !isTargetLocale(onlyLocale)) {
    logger.error('backfill', 'main', `Unknown locale "${onlyLocale}". Expected one of: ${TARGET_LOCALES.join(', ')}`);
    process.exit(1);
  }
  if (!process.env.OPENAI_API_KEY) {
    logger.error('backfill', 'main', 'OPENAI_API_KEY is not set in this environment.');
    process.exit(1);
  }

  await connectDB();

  const filter = onlyProduct ? { _id: onlyProduct } : {};
  const products = await ProductModel.find(filter).lean();
  const locales: readonly TargetLocale[] = onlyLocale ? [onlyLocale as TargetLocale] : TARGET_LOCALES;

  let pendingFields = 0;
  let pendingProducts = 0;
  for (const product of products) {
    const total = locales.reduce((sum, locale) => sum + planFor(product as never, locale).length, 0);
    if (total > 0) {
      pendingProducts++;
      pendingFields += total;
    }
  }

  logger.success(
    'backfill',
    'main',
    `${products.length} product(s); ${pendingFields} field(s) pending across ${pendingProducts} product(s)`,
  );

  if (dry) {
    logger.success('backfill', 'main', 'Dry run — no API calls made, nothing written.');
    await mongoose.disconnect();
    return;
  }

  const service = new ProductTranslationService();
  let done = 0;
  for (const product of products) {
    await service.syncProduct(String(product._id));
    done++;
    if (done % 10 === 0) logger.success('backfill', 'main', `${done}/${products.length}`);
  }

  logger.success('backfill', 'main', `Finished ${done} product(s).`);
  await mongoose.disconnect();
}

main().catch((error) => {
  logger.error('backfill', 'main', error.message);
  process.exit(1);
});
```

- [ ] **Step 2: Add the npm script**

In `package.json` scripts:

```json
"translate:backfill": "ts-node src/scripts/translateBackfill.ts"
```

- [ ] **Step 3: Verify the dry run reports without spending**

Run: `npm run translate:backfill -- --dry`
Expected: connects, prints a product count and a pending-field count, says no API calls were made, exits 0. On the untouched catalogue this should report 55 products and 550 pending fields.

- [ ] **Step 4: Verify it refuses a bad locale and a missing key**

Run: `npm run translate:backfill -- --dry --locale xx`
Expected: exits 1 with "Unknown locale".

- [ ] **Step 5: Commit**

```bash
git add src/scripts/translateBackfill.ts package.json
git commit -m "feat(i18n): idempotent backfill script for product translations

The recovery path for the fire-and-forget sync on save: a process restart or
an OpenAI outage leaves work undone with nothing else to retry it. Also how
the initial catalogue gets translated and how a glossary change gets
re-applied.

--dry reports what it would do without spending anything, which doubles as
the check that OPENAI_API_KEY is actually wired up in a given environment.

A script rather than an endpoint on purpose: operator action, runs for
minutes, should not be reachable from the network."
```

---

### Task 9: Serve the locale from the API

**Files:**
- Modify: `src/controller/ProductController.ts`
- Modify: `src/repository/ProductRepository.ts`
- Create: `src/controller/__tests__/localeParam.test.ts`

**Interfaces:**
- Consumes: `resolveProductForLocale` (Task 4); `isTargetLocale` (Task 2).
- Produces: storefront product responses resolved for `?locale=`; admin responses unchanged (raw, with `translations`).

- [ ] **Step 1: Write the failing test for the param reader**

Create `src/controller/__tests__/localeParam.test.ts`:

```ts
import { describe, expect, it } from "vitest";
import { readLocale } from "../ProductController";

describe("readLocale", () => {
  it("accepts each supported locale", () => {
    for (const l of ["fr", "it", "de", "nl", "es"]) expect(readLocale({ locale: l })).toBe(l);
  });

  it("defaults to en when absent", () => {
    expect(readLocale({})).toBe("en");
  });

  // Review Focus 2
  it("falls back to en for anything unsupported rather than throwing", () => {
    for (const bad of ["xx", "EN", "fr-FR", "", "null", "../x"]) {
      expect(readLocale({ locale: bad })).toBe("en");
    }
  });

  it("ignores a repeated param rather than treating the array as a locale", () => {
    expect(readLocale({ locale: ["fr", "de"] as never })).toBe("en");
  });
});
```

- [ ] **Step 2: Run to verify it fails**

Run: `npx vitest run src/controller/__tests__/localeParam.test.ts`
Expected: FAIL — `readLocale` is not exported.

- [ ] **Step 3: Add the param reader**

In `src/controller/ProductController.ts`:

```ts
import { isTargetLocale } from '../constants/i18n';
import { resolveProductForLocale } from '../services/productLocale';

/**
 * Read ?locale= from a query object.
 *
 * Anything unrecognised resolves to English rather than erroring: a bad
 * locale in a crawler's or a user's URL should serve the English catalogue,
 * not a 400. Express gives an array when a param repeats, which is not a
 * locale either.
 */
export function readLocale(query: { locale?: string | string[] }): string {
  const value = query.locale;
  if (typeof value !== 'string') return 'en';
  return isTargetLocale(value) ? value : 'en';
}
```

- [ ] **Step 4: Run to verify it passes**

Run: `npx vitest run src/controller/__tests__/localeParam.test.ts`
Expected: PASS, 4 tests.

- [ ] **Step 5: Apply resolution on the storefront read paths**

In every **public** product handler in `ProductController.ts` — the list, the by-slug detail, and the related-products handler — read the locale and map the result before responding. For a list:

```ts
    const locale = readLocale(req.query);
    const resolved = products.map((product) => resolveProductForLocale(product, locale));
```

and for a single product:

```ts
    const locale = readLocale(req.query);
    const resolved = resolveProductForLocale(product, locale);
```

Do **not** touch the admin handlers behind `authenticateToken` + `requireAdmin`: they must keep returning the raw document including `translations`, because phase 2's editing UI needs it.

- [ ] **Step 6: Keep the listing payload lean**

In `src/repository/ProductRepository.ts`, the storefront list queries (`ProductModel.find(query)` around lines 185 and 294) currently return whole documents. Add `.lean()` where it is absent so `resolveProductForLocale` receives plain objects rather than mongoose documents — spreading a mongoose document copies internals, not fields.

`resolveProductForLocale` already strips `translations` from the response, so the wire payload stays the size it is today. Projecting other locales out at the query level is a possible later optimisation; at 55 products it is not worth the added query complexity now.

- [ ] **Step 7: Verify end to end against a running server**

Run the server locally, then:

```bash
curl -s "http://localhost:3002/api/products?limit=1" | head -c 400
curl -s "http://localhost:3002/api/products?limit=1&locale=fr" | head -c 400
curl -s "http://localhost:3002/api/products?limit=1&locale=xx" | head -c 400
```

Expected: the default and `xx` responses are identical English; `fr` differs only once translations exist (before the backfill runs, all three are identical — that is correct, not a failure). No response contains a `translations` key.

- [ ] **Step 8: Full gates**

Run: `npm test && npx tsc --noEmit`
Expected: all pass.

- [ ] **Step 9: Commit**

```bash
git add src/controller/ProductController.ts src/repository/ProductRepository.ts src/controller/__tests__/localeParam.test.ts
git commit -m "feat(i18n): resolve product prose from ?locale= on the storefront endpoints

An unrecognised locale serves English rather than a 400 — a bad locale in a
crawler's URL should get the catalogue, not an error — and a repeated param,
which Express hands over as an array, is not a locale either.

Admin handlers deliberately keep returning the raw document with
translations: phase 2's editing UI needs them, and the storefront never
should. resolveProductForLocale strips the blob on the public paths, so the
wire payload stays the size it is today.

Filter values are untouched and stay English. They are identifiers matched
against stored data — translating them would make ?shape=Poire match nothing
and silently return an empty catalogue."
```

---

## Done when

- `npm test` passes and `npx tsc --noEmit` is clean.
- `npm run translate:backfill -- --dry` reports 55 products and 550 pending fields.
- After a real backfill, `GET /api/products?locale=fr` returns French titles and descriptions, and `GET /api/products` returns English.
- Saving a product through the admin API produces its translations shortly afterwards without delaying the save.
- No response on a public endpoint contains a `translations` key.
- `.env` is not committed and the key appears in no commit.
