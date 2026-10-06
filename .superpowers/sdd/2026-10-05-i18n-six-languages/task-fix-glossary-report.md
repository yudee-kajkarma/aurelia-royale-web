# Task: Fix glossary avoid-list batch-wide-ban defect

Status: COMPLETE. Branch `feat/i18n-six-languages`, 3 new commits, working tree clean.

## Commits

1. `9a548d3` — fix(i18n): scope glossary avoid-list rules per-string, not per-batch
   - `scripts/i18n/translate.mjs`: removed local `hasTerm`/`hasSourceTerm`/`glossaryFor`/`systemPrompt`.
   - New `scripts/i18n/lib/glossary-prompt.mjs`: `glossaryFor` now takes the per-id request payload and
     only emits a row for the specific string id(s) whose English text contains the term (not "does the
     term appear anywhere in the joined batch"). Rows are worded `for string id(s) N only: when
     translating "X", use "Y", not "Z" (... applies only to the id(s) listed here ...)` — no `(never: "Z")`
     anywhere, and the prompt states once that no rule generalises beyond its named ids.
   - New `scripts/i18n/lib/glossary-prompt.test.mjs`: 9 tests proving (a) a rule is only emitted for ids
     that actually contain the English term, (b) the rendered prompt never contains "never use/emit/output"
     phrasing for an avoid list. `npm test`: 113 → 122 passed.

2. `d3043cc` — content(i18n): re-translate blog/blogCards leaves hit by the bug.
3. `04614b6` — content(i18n): fix four untranslated/inconsistent chrome keys + fr escape bug.

## Step 2 — scan methodology and result

One-off scan: `.superpowers/sdd/2026-10-05-i18n-six-languages/scan-glossary-defect.mjs` (gitignored,
not committed). Compares every blog `en.json` leaf against the same leaf in each of the 5 target
locale files (and `messages/en.json` vs `messages/<locale>.json`), using the exact `collectAll` walker
`translate.mjs` itself uses.

Three rules, refined from the brief's heuristics after manual verification against real content:

- **Rule 1** (contrast→hallmark term): EN leaf matches `/\bcontrasts?\b/`, output contains the locale's
  hallmark term and NOT its contrast term. Fired only for `es` (matches the glossary: only `es`'s
  `hallmark.avoid` list names the Spanish contrast word; `de`'s avoid list names an unrelated word).
- **Rule 2** (fineness/purity/karat→clarity term): EN leaf matches
  `/\b(fineness(?:es)?|purit(?:y|ies)|karats?)\b/` and not `clarity`, output contains the locale's
  clarity-glossary term. Restricted to locales where `glossary.json`'s `clarity` entry actually has an
  `avoid` list (`es`, `fr`, `nl` — derived from the glossary file itself, not hardcoded). Manually
  verified every `it`/`de` candidate the broader regex found: all are correct, natural native usage
  (Italian "purezza", German "Reinheit" both genuinely mean "purity" and are not glossary-banned there),
  so `it`/`de` are excluded as false positives, not defects.
- **Rule 3** (stray "stand"): output contains the literal word "stand", EN leaf does not. Broadened
  beyond "EN leaf contains worn/wearable" — the brief's own named example
  (`perfume-skincare-diamond-jewellery/es.json` `sections.6.heading`) has neither "worn"/"wearable" nor
  "stand" anywhere in that blog's English source at all (confirmed by full-file grep), so a same-leaf or
  same-file "worn/wearable" trigger cannot explain it. Restricted to `es`: every `de`/`fr`/`nl` candidate
  found was manually confirmed to be legitimate native vocabulary ("Stand"/"standhalten" in German,
  "stand"/"tot stand komen" in Dutch, "stand de vente" as valid if imprecise French) — not a defect.

**Result: 200 leaf hits across 66 `<label>/<locale>` pairs** (65 blog-slug/locale pairs across 50 blog
slugs, plus `messages`/`blogCards`/`es`). Rule 1: 57 (es only). Rule 2: 129 (es 108, fr 12, nl 9). Rule 3:
14 (es only). Full list and the raw hit detail: `scan-glossary-defect-hits.json` in the same folder.

(The brief's own sampled estimates — ~59/~121+29+27/~8 — were in the right ballpark; my counts differ
slightly because of the plural-regex fix (`finenesses` wasn't matched by a bare `\bfineness\b`) and
because of the `it`/`de`/`fr`/`de`/`nl` false-positive exclusions above.)

## Step 3 — re-translation

Ran `node scripts/i18n/translate.mjs translate blogs/<slug> --locales <x> --force` for all 50 affected
slugs (grouped by their affected locale(s)) plus `translate blogCards --locales es --force`, all in the
**foreground**, sequentially, in one Bash call (`retranslate-commands.sh`), each with the fixed
`translate.mjs`. All 51 targets completed, **0 errors**, exit code 0. Estimated spend (the script does
not print real billed cost for a non-`--all` run; computed from the same cost formula `translate.mjs`
uses, against the actual logged char counts): **~$0.25**, well under the $3 breaker and under the
expected $0.50.

Reviewed the staged output with a second scan
(`scan-staged-defect.mjs`, reads `scripts/i18n/staging/**` instead of merged content) before merging:
**0 hits for all three rules** in the fresh translations. Merged every target with
`merge blogs/<slug> --locales <x>` / `merge blogCards --after BlogArticle --locales es` (all-or-nothing
shape guard; one `--after blogCategories` anchor mistake on the first attempt put `blogCards` one
position early in `messages/es.json`'s key order — caught by an `en.json` key-order diff check and
corrected by re-running the merge with the correct anchor `BlogArticle` before committing).

## Step 4 — chrome keys (see commit `04614b6` for full rationale)

- **Hero decision: deliberate brand English.** `headingLine1` ("WORN WITH") is literal, untranslated
  English in ALL SIX locales including `nl` itself — reverted `nl.headingLine2` from "INTENTIE." back to
  "INTENTION." to match, rather than translating `headingLine1` everywhere.
- `ProductDetailsTabs.category`: translated to each locale's own already-established house term (found
  via `TicketsPage.categoryLabel`/`ShopByEdition` in the same files): Catégorie/Categoria/Kategorie/
  Categorie/Categoría.
- `CheckoutPage.placeCodOrder`: reworded fr/it/de/es in parallel with the sibling `placeOrderOnline`
  string, swapping the payment-method clause for each locale's own cash-on-delivery term (already used in
  `cashOnDelivery`/`codNotice`) instead of leaving "COD" untranslated. nl was already correct.
- `Header.shop`/`Footer.shop`: picked the noun form for both nl ("Winkel") and es ("Tienda") — matches
  the noun pattern already used by every sibling nav item (home/about/contact/blog) in both languages.
- Two French `\n\n`-as-literal-text leaves in `360-degree-jewellery-product-views/fr.json` fixed to real
  newlines (verified via char codes: was `92,110,92,110` i.e. `\`,`n`,`\`,`n`; now `10,10`).

## Step 5 — verification (all run against the final committed state)

- `npm test`: **122/122 passed** (113 baseline + 9 new).
- `npx tsc --noEmit`: clean (no output).
- `npm run i18n:check`: checked 98 blogs × 6 locales — **0 pending, 0 defects**.
- `npm run i18n:untranslated -- src/components "src/app/[locale]"`: **0**.
- `npm run i18n:check-nav`: **0** locale-unaware navigation imports.
- `npm run i18n:check-dates`: **0** hardcoded-locale date/number formats.
- `npm run build`: **721/721 pages**, exit 0.
- Re-ran `scan-glossary-defect.mjs` against the final merged corpus: **0/0/0 hits** for rules 1/2/3
  (before: 57/129/14).

### Evidence

`check-metal-used-diamond-jewellery` subtitle:
- en: `Hallmarks, Fineness and Plating Explained`
- es: `Sellos oficiales, pureza y chapado: explicación`
- fr: `Poinçons, titres et placage expliqués`
- de: `Stempel, Feingehalt und Beschichtung erklärt`

`perfume-skincare-diamond-jewellery/es.json` `sections.6.heading`:
- en: `Do Not Spray Through a Necklace`
- es (before): `No te rocíes perfume con el collar stand`
- es (after): `No rocíes perfume a través del collar`

## Not done / out of scope (by design)

- `validate()` and `cmdCheck()` in `translate.mjs` still check `avoid` terms without scoping to whether
  the English leaf actually mentions the governing term (a narrower, related but distinct issue from the
  prompt-generation bug Step 1 was scoped to fix). This produces harmless false-positive `[glossary]`
  console warnings during a translate run (e.g. "used 'contraste', expected 'sello'" on a leaf that is
  correctly about contrast) — cosmetic only, does not block merge, and `npm run i18n:check` (which only
  scans `messages/*.json`) still reports 0 defects. Left alone per the task's explicit Step 1 scope.
- No `src/**` app code touched. `PriceDisplay.tsx` untouched. No API key printed or committed.
