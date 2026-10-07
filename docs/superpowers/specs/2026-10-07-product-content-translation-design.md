# Product content translation — design

Translate product content into the five non-English locales (fr, it, de, nl,
es) and render it per locale on the listing and detail pages.

Spans **two repositories**: `aurelia-royale-backend` (schema, pipeline, API)
and `aurelia-royale-frontend` (locale threading, vocabulary, rendering, admin
UI). This spec lives in the frontend repo beside
`2026-10-05-i18n-design.md`, which it continues.

## Background

The six-language rollout deliberately left backend product content in English
in every locale, recorded at the time as a scope decision to be revisited as a
separate project with backend work if the client asked. The client has now
asked.

## What the content actually is

Measured against the live catalogue (`/api/products`, 55 products) rather than
assumed:

| Field | Size | Nature | Treatment |
|---|---|---|---|
| `title` | ~80 chars | free prose | AI translation |
| `description` | ~476 chars | free prose | AI translation |
| `details` | ~144 chars | `Stone: Emerald \| Carat: 3 \| …` | **derived, no AI** |
| `category`, `stoneType`, `color`, `shape`, `origin`, `treatment`, `certificate` | 4–15 chars | controlled vocabulary | lookup, translated once |
| `tags` | short | controlled vocabulary | lookup |
| `measurement` | `5mm x 5mm x 2mm` | units | untouched |
| `price`, `sku`, `carat`, `diamondPcs` | — | numeric | untouched |
| `slug` | — | identifier | **stays English**, per the blog ruling |

Two findings shaped the design:

**`details` is fully derivable.** Across six sampled products the same eight
labels appear (`Stone`, `Carat`, `Origin`, `Treatment`, `Pieces`, `Setting`,
`Finish`, `Hallmarked`) and five of the values mirror the structured fields
exactly (`stoneType`, `carat`, `origin`, `treatment`, `diamondPcs`). It needs
no AI: parse, translate each half from the vocabulary, re-render.

**Most "product content" is not prose.** It is a controlled vocabulary of
roughly 100–150 distinct values repeated across 55 products. Translating those
per product would translate "Pear" 55 separate times and let it drift into
different words on different products — the exact failure that produced
`anilla`/`asa`/`argolla`/`reasa` for one concept across the blog corpus and
cost a re-run to correct.

So only `title` and `description` reach the model: 55 x 2 x 5 ≈ 550 short
strings.

## Decisions

Settled with the client before this spec was written:

1. **FAQs are out of scope.** No product FAQ field exists in the system; the
   `FAQSection` component is blog-only. Revisit separately if wanted.
2. **Translation is automatic on save**, not a manual batch or a lazy
   first-visit translation.
3. **Admins can edit translations, and their edits are protected.** A
   re-translation never overwrites a human correction; when the English
   changes, human-edited fields are flagged stale rather than overwritten or
   silently left wrong.
4. **Translations are embedded in the product document**, not a separate
   collection. At 55 products a join on every read buys nothing.

Rejected, and why: writing per-locale JSON files from a build-time CLI (the
blog technique). Those files go stale the moment an admin adds a product, and
"automatic on save" cannot be driven from the frontend at all. The translation
*code* ports over; the storage and delivery must be server-side.

Customer **reviews** are out of scope. They are user-generated, arrive in
whatever language the reviewer wrote, and machine-translating them is a
different decision from translating first-party marketing copy.

## Data model

```ts
type TranslatedField = {
  value:     string;
  source:    "machine" | "human";
  srcHash:   string;    // hash of the English text this was produced from
  updatedAt: Date;
};

// Product gains:
translations: {
  fr?: { title?: TranslatedField; description?: TranslatedField };
  it?: { … };  de?: { … };  nl?: { … };  es?: { … };
}
```

`source` is what protects human edits: the pipeline only ever rewrites fields
marked `machine`.

`srcHash` is `sha256(source.trim())` truncated to 16 hex chars — enough to
make an accidental collision irrelevant at this scale, short enough not to
bloat the document. It records which English text a translation was made
from, so when the English changes its hash changes too, and any translation
whose `srcHash` no longer matches is provably out of date. Machine fields are
refreshed; human fields are kept and flagged.

**Staleness is derived at read time**, never stored. Comparing `srcHash`
against a hash of the current English costs nothing and cannot drift the way a
stored boolean would.

A field with no entry falls back to English. A product is therefore always
coherent — fully English until its translations land, never half-rendered.

## Translation pipeline

The backend has **no queue, cron, or job library** (plain Express 5 +
Mongoose 9). Adding BullMQ and Redis for 55 products and occasional edits
would be infrastructure to run and monitor for no gain.

**Trigger.** After a successful write in `createProduct`/`updateProduct`:

```ts
void translationService.syncProduct(id).catch(logger.error);
```

The admin's save returns immediately and never waits on OpenAI.

**Backfill, which is what makes that safe.** Fire-and-forget has a real
failure mode: a process restart or an OpenAI outage leaves a product silently
English with nothing to retry it. An idempotent sweep finds every product with
missing or stale machine translations and fills them. It covers four cases at
once: the initial 55, crash recovery, API outages, and re-running everything
after a glossary change.

**`syncProduct` is idempotent by construction.** Per locale, per field it
skips when `source === "human"` and skips when an existing translation's
`srcHash` matches the current English. What remains goes in **one call per
locale** — at most five calls per product, not one per field.

**Reuse from the blog pipeline**, which is already proven: index-keyed
payloads (`{"0": "text"}`) so JSON structure never reaches the model; the
per-string-scoped glossary from `9a548d3`; and the validators — shape,
verbatim tokens (IGI/GIA), length band, no straight apostrophes.

**A translation failing a validator is not written.** The field stays absent
and falls back to English. Storing nothing beats storing something wrong.

**Glossary.** It lives in the frontend repo and these are separate repos, but
it matters far less here. What made it critical for blogs was long prose dense
with jewellery terms across 98 articles. Here the high-risk vocabulary —
stone, shape, colour, treatment, certificate — is not AI-translated at all.
Copy the relevant rows into the backend rather than building cross-repo
sharing machinery.

**Target locales in the backend.** The frontend's `routing.ts` is the source
of truth for locales, but these are separate repos, so the backend carries its
own `TARGET_LOCALES = ["fr","it","de","nl","es"]`. This is the same hazard as
`PREFIXED_LOCALES` in `localeRedirects.ts`, which is guarded by a test
asserting it equals `routing.locales` minus the default. That test cannot span
repos, so the backend constant gets a comment naming the frontend file it must
track, and adding a locale becomes a two-repo change by definition.

**Backfill is an npm script**, `npm run translate:backfill`, taking an
optional `--locale` and `--product` filter and a `--dry` flag that reports what
it would call without spending anything. Not an HTTP endpoint: it is an
operator action, it can run for minutes, and it should not be reachable from
the network.

**Cost.** 275 calls for the initial backfill, 5 per subsequent edit; ~$0.05.

## API contract

**Locale is an explicit `?locale=fr` query param**, not `Accept-Language`. The
frontend knows the locale from the route, and an explicit param keeps every
response cacheable by URL rather than varying on a header.

**The API resolves server-side and returns the current shape.** `title` and
`description` come back already resolved, falling back to English per field.
The frontend never sees the `translations` object, so `ProductsListResponse`
and `ProductDetailResponse` keep their types — the change is threading a
locale argument, not reshaping the client.

**Storefront queries project only the active locale.** The listing endpoint
reads all 55 products at once; a naive `find()` would now pull five locales of
text per document on every request.

**Admin endpoints return the raw document** with every locale, since that is
what the editing UI needs. Two shapes, deliberately.

**Filter values stay English.** `?shape=Pear` is an identifier matched against
stored data. If the API translated it, `?shape=Poire` would match nothing and
silently return zero products. `all-filters` keeps returning English values;
the frontend translates them **for display only**, while the submitted value
stays English — the same split already in use between a slug and its title.

Cache keying is free: the locale is in the URL path, so Next already treats
each locale as a distinct entry.

## Admin editing

A panel inside the existing product editor (the admin panel is English-only
and outside the locale tree — unchanged).

Per locale and field it shows the English source, the current translation, a
badge reading **machine** or **edited**, and a staleness warning when
`srcHash` no longer matches. Three actions: save an edit (flips the field to
`human`, re-stamps `srcHash`), revert to machine (drops the human value so the
pipeline refills it), and force re-translate (deliberately overrides
protection, for when a human edit was itself wrong).

One endpoint: `PATCH /admin/products/:id/translations` taking
`{ locale, field, value }`, behind the existing `authenticateToken` +
`requireAdmin` middleware that already guards the product write routes.

This is the largest piece of UI in the project — ten editable fields per
product. The backend protections do not depend on it: `source` and `srcHash`
work from day one, so shipping translations before the editing UI sequences
cleanly with nothing redone.

## Vocabulary lookup

A `productAttributes` namespace in `messages/*.json`, keyed by a normalised
form of the English value (`pear`, `fracture-filled`, `igi-certified`) so keys
stay ICU-safe. Populated once by extracting distinct values from the
catalogue, translated with the existing CLI, committed. Each term is
translated exactly once.

`details` renders from this plus labels: `Stone`, `Carat`, `Origin`,
`Treatment`, `Pieces` already exist in `ProductDetailsTabs`; `Setting`,
`Finish`, `Hallmarked` are added.

**Unknown values.** When an admin invents a value the lookup misses. Two
rules: render the **English verbatim**, never a raw key or an error; and
configure next-intl not to throw on the miss, which is a real implementation
detail rather than a default.

**A check script** in the family of `i18n:check-dates` and `check-nav` fetches
the distinct attribute values from the API and fails if any lack a
translation, so new vocabulary surfaces in CI rather than on the storefront.

## Testing

- **Pure units**: `srcHash` staleness comparison; the protection rule
  (`human` is never overwritten); `details` parsing and re-rendering,
  including a malformed string; vocabulary fallback to English on a miss.
- **Pipeline**: `syncProduct` is idempotent — a second run with unchanged
  English makes zero API calls; a validator failure writes nothing.
- **API**: locale resolution falls back per field; the storefront projection
  excludes other locales; filter values come back English.
- **Gate**: the unknown-attribute check script, proven by deliberate sabotage
  before being trusted — the standing rule from the i18n work, where a gate
  reporting zero while shipping defects happened three times.

## Suggested sequencing

The backend protections do not depend on the admin UI, so this splits cleanly
into two shippable phases:

1. **Translations live** — schema, pipeline, backfill, API locale resolution,
   vocabulary lookup, `details` rendering, the unknown-attribute gate. The
   storefront is fully translated at the end of this; corrections are made by
   editing the English or re-running the backfill.
2. **Admin editing** — the per-locale editing panel and its endpoint. Adds
   human overrides and staleness review.

Phase 1 writes `source` and `srcHash` from the start, so phase 2 adds UI over
data that already exists and nothing is redone.

## Out of scope

FAQs; customer reviews; localised slugs; currency and price formatting (prices
stay `$1,299.00` in all locales per the existing ruling); the admin panel
itself remaining English-only.
