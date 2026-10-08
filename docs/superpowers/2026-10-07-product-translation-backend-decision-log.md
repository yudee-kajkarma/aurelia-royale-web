# Product translation (backend) — decision log

Every judgement call made during the subagent-driven execution of
`docs/superpowers/plans/2026-10-07-product-translation-backend.md`, with the
evidence for each, plus the per-task review and verification record.

Preserved here because the working ledger lived in the **backend** repo under
`.superpowers/sdd/`, which is gitignored scratch and was deleted when the run
finished. Without this copy the reasoning behind 24 decisions — several of
which overrode the plan — would not survive.

Read a "Ruling" as: a decision taken rather than interrupting the client,
recorded so it can be reversed on sight if it was the wrong call. Three of
them (Rulings 2, 11, 14) corrected defects in the plan itself; one (Ruling 5)
corrected the controller's own verification method mid-run.

The code lives in `aurelia-royale-backend`, branch `feat/product-translation`.

---

# SDD ledger — plan: D:/Projects/aurelia-jewels/frontend/docs/superpowers/plans/2026-10-07-product-translation-backend.md

Spec: frontend repo, docs/superpowers/specs/2026-10-07-product-content-translation-design.md (read; binding authority)
Work repo: aurelia-royale-backend (D:\Projects\aurelia-jewels\backend), branch feat/product-translation
Branch base: ea5b4b6 (main)

## Setup

- Backend was on `main` with 3 uncommitted files. User chose "stash those".
  Stashed as stash@{0} "pre-existing WIP before product-translation work" —
  package.json (+1), src/scripts/auditProductCertificates.ts (74),
  src/scripts/resetSuperAdminPassword.ts (185). 260 insertions, recoverable
  with `git stash pop`. MUST be restored when this branch is done.
- Branched feat/product-translation from main (never implement on main).
- .superpowers/ added to .gitignore (commit on branch).
- .env confirmed gitignored at .gitignore:15 — safe for Task 5's OpenAI key.

## Pre-flight conflict scan

### Pairs sharing a file or an interface

| Tasks | Produces -> consumes | Finding |
|---|---|---|
| T1, T5, T8 | package.json | Three tasks edit it. T1 adds `test`/`test:watch` + vitest devDep; T5 adds `openai` dep; T8 adds `translate:backfill`. Disjoint keys, sequential. Clean. |
| T2 -> T3 | TARGET_LOCALES, TranslatedField | Names match. Clean. |
| T2 -> T4 | isTargetLocale, TRANSLATABLE_FIELDS | Names match. Clean. |
| T2 -> T6 | srcHash, isStale, TARGET_LOCALES, TRANSLATABLE_FIELDS | Names match. Clean. |
| T2 -> T9 | isTargetLocale | Names match. Clean. |
| T3 -> T4 | Product.translations shape | T4's `ResolvableProduct` is deliberately looser (`Record<string, ...>`) than T3's typed `Partial<Record<TargetLocale, ...>>`. The strict type is assignable to the loose one. Clean, by design — T4 stays testable with plain fixtures. |
| T3 -> T6 | ProductModel + translations | `export const ProductModel` verified present at Product.ts:103. Clean. |
| T5 -> T6 | translateBatch(locale, payload): Promise<Record<string,string>> | Signature matches T6's call site. Clean. |
| T6 -> T7 | ProductTranslationService.syncProduct(id) | Names match. Clean. |
| T6 -> T8 | planFor + ProductTranslationService | T6 exports both; T8 imports both from the same module. Clean. |
| T4 -> T9 | resolveProductForLocale(product, locale) | Names match. Clean. |

### Per-task self-consistency

| Task | Check | Finding |
|---|---|---|
| T1 | include glob vs later test paths | `src/**/*.test.ts` matches every later test (`src/*/__tests__/*.test.ts`). Clean. |
| T2 | test imports vs files created | `../translationFields`, `../../constants/i18n` resolve from `src/utils/__tests__/`. Clean. |
| T3 | test imports vs files touched | `../Product` and `../../utils/translationFields` resolve. `ProductModel` export verified. Clean. |
| T4 | test imports vs files created | `../productLocale` resolves from `src/services/__tests__/`. Clean. |
| T5 | test imports vs files created | `../translation.service` resolves from `src/integrations/__tests__/`. Clean. |
| T6 | test imports vs files created | `../productTranslation.service` resolves. planFor exported separately as the tests require. Clean. |
| T7 | code it edits vs what exists | `createProduct` returns `this.productRepository.create(createData)` with no local var — the plan was corrected in review to capture it first. Verified against source. Clean. |
| T8 | imports vs what exists | `connectDB` verified as `export default` in src/config/db.ts. **dotenv style mismatch — see Ruling 1.** |
| T9 | test imports vs file touched | `readLocale` is a new named export beside `export class ProductController` (verified line 12). Named export alongside a class is fine. Clean. |

### Rulings from the scan

Ruling 1: Task 8 specifies `import 'dotenv/config'`, but this repo's house
  style is `import dotenv from "dotenv"; dotenv.config();` (src/server.ts:3-4).
  Use the house style. — Why: Global Constraints bind the plan to existing
  conventions, and a lone divergent import style in one script is noise.
  Cost if wrong: none functionally; both load .env.

## Task log

Task 1: dispatched (haiku; mechanical transcription — plan carries full code). BASE 87062d3.
Task 1: implementer DONE (commit 44efe0f, npm test 1 passed). Concern raised: ESM config warning under CommonJS, claimed harmless.
Task 1: review dispatched (sonnet; diff 87062d3..44efe0f, mostly package-lock).
Task 1: review ❌ — 2 Important (1 plan-mandated). Spec compliance itself ✅.
Task 1: Ruling 2: the reviewer's ESM-warning finding beats the plan text. The plan
  specified `vitest.config.ts`, which under this CommonJS repo emits a reproducible
  Vite deprecation warning on EVERY test run and will hard-break when Vite flips
  configLoader:'native' to default. The sibling frontend repo already solved the
  identical problem with `vitest.config.mts` and no "type":"module" (verified).
  Rename to vitest.config.mts. — Why: the spec is the binding authority and says
  nothing about the extension; the plan's `.ts` was my error, and a warning on
  every run of all 9 tasks is not acceptable noise. Cost if wrong: none — .mts is
  the documented fix and the frontend has run on it for weeks.
Task 1: Ruling 3: adopt the reviewer's tsconfig finding, scoped to Task 1. Verified
  `npx tsc --listFilesOnly` currently pulls src/utils/__tests__/harness.test.ts into
  the build program; `npm run build` would emit tests into dist/ and would FAIL under
  `npm ci --omit=dev` because vitest types vanish. No later task touches tsconfig.json,
  so this is a genuine plan gap, and Task 1 — which establishes the __tests__
  convention — is its right owner. Add "src/**/*.test.ts" to tsconfig exclude.
  — Why: it compounds across all 9 tasks and is a plausible release-blocker.
  Cost if wrong: none; tests are never part of a production build.
Task 1: fix round 1/5 dispatched to original implementer (commit c8d5d1e: vitest.config.ts -> .mts, tsconfig excludes src/**/*.test.ts).
  Controller independently verified end state: .mts present, no "type":"module", tsc --listFilesOnly matches 0 test files,
  npm test prints no configLoader warning, tsc --noEmit exit 0.
Task 1: scoped re-review dispatched (haiku; fix diff 44efe0f..c8d5d1e, 1117 bytes).
Task 1: fix round 1/5 (2 addressed, 0 open; commits 44efe0f..c8d5d1e). Re-review: no new breakage, report accurate.
Task 1: complete (commits 87062d3..c8d5d1e, review clean)
Task 2: dispatched (haiku; plan carries full code — transcription + tests). BASE c8d5d1e.
Task 2: implementer DONE (commit fca4478, npm test 10 passed).
Task 2: DEFECT FOUND BY CONTROLLER, inherited from Task 1. c8d5d1e added vitest.config.mts
  but never committed the DELETION of vitest.config.ts — `git ls-tree c8d5d1e` shows BOTH
  tracked. A fresh clone at c8d5d1e would load the CommonJS-incompatible .ts config and the
  Vite warning Ruling 2 removed would return. The implementer deleted it in the working tree
  but its explicit pathspec omitted the removal. Task 2's commit swept the deletion up, so
  HEAD is correct (only .mts tracked, tree clean).
Task 2: Ruling 4: leave the history as-is rather than rewriting c8d5d1e/fca4478. — Why: the
  end state at HEAD is correct and verified, the branch is unpushed and will be reviewed and
  merged as a whole, and rewriting two commits mid-plan to fix attribution risks more than the
  messy history costs. The only residue is that fca4478's message does not mention deleting
  vitest.config.ts. Flagged to the Task 2 reviewer as fact, and will be flagged to the final
  whole-branch review. Cost if wrong: a reader of c8d5d1e in isolation sees a transiently
  broken commit; bisect across that one commit could mislead.
Task 2: Ruling 5: my own verification method was wrong and is now corrected. I confirmed
  Task 1's fix with `ls vitest.config.*` on the WORKING TREE, which showed only .mts and
  hid the uncommitted deletion. The re-reviewer saw the same blind spot from the other side —
  the fix diff showed the .mts addition, and an absent deletion leaves no diff line to notice.
  From here on, per-task verification uses `git ls-tree`/`git show --stat` against the COMMIT,
  never the working tree. Cost if wrong: none; strictly more rigorous.
Task 2: review ✅ spec compliant, task quality Approved, 0 Critical/Important.
Task 2: minor (deferred): isTargetLocale is in the locked contract but has no direct test
  (inherited from my brief). Indirect coverage arrives in Tasks 4 and 9, which both test
  unsupported-locale fallback. Final review should confirm that is enough.
Task 2: minor (deferred): Step 6 report output omitted a CRLF warning the implementer
  disclosed in prose — evidence not quite the complete raw terminal output asked for.
Task 2: minor (deferred): TranslatedField.srcHash property shares a name with the srcHash
  function; unambiguous but slightly noisy at call sites like field.srcHash !== srcHash(x).
Task 2: complete (commits c8d5d1e..fca4478, review clean)
Task 3: dispatched (sonnet; modifies an existing mongoose model at several insertion points —
  integration judgment, not pure transcription). BASE fca4478.
Task 3: implementer DONE (commit 6f6b494, npm test 13/13, tsc exit 0). Ran the new
  git-status-before-staging check: only its own two files pending, nothing swept in.
  Disclosed one deliberate deviation: double quotes instead of the brief's single quotes,
  to match the file's existing convention.
Task 3: review dispatched (sonnet). Gave the reviewer three NAMED risks to check rather
  than open-ended directives: (1) does the Object.fromEntries locale schema actually REJECT
  an unknown locale key, or does mongoose merely strip it silently — the commit message
  claims a typo "cannot silently create a 'fr-FR' branch", which is a strong claim worth
  testing; (2) is translations genuinely optional and not defaulted to {}; (3) does the
  Product interface member's type match what the schema can store, since 4 later tasks
  compile against it.
Task 3: review ✅ spec compliant, Approved. 1 Important (plan-mandated), 1 Minor.
  Reviewer executed the model directly: translations:{"fr-FR":{...}} -> validateSync()
  returns undefined and the key is STRIPPED. No validation, no error. Also confirmed
  absent translations stays undefined (not defaulted to {}), which Task 4 depends on,
  and that the interface type matches schema storage 1:1.
Task 3: Ruling 6: the schema stands; my commit message was wrong, not the code. The DATA
  guarantee the design actually needs — no bogus locale branch is ever persisted — is real
  and verified. What is false is the word "validates": mongoose strips silently. I am not
  rewriting the commit for a word (consistent with Ruling 4). Cost if wrong: a reader trusts
  "validates" and assumes a typo surfaces as an error. Mitigated by Ruling 7.
Task 3: Ruling 7: the real exposure is Phase 2, not this plan. Every write path HERE is a
  closed loop — syncProduct composes `translations.${locale}` from TARGET_LOCALES, so no
  untrusted locale can reach the schema. Phase 2's admin editing endpoint
  (PATCH /admin/products/:id/translations) DOES take a locale from a request body, and the
  schema will silently swallow a bad one, saving nothing and reporting success. Recording in
  the SPEC that that endpoint must reject with isTargetLocale at the API boundary.
  Cost if wrong: none now; prevents a silent no-op bug in Phase 2.
Task 3: Ruling 8: adopt the reviewer's Minor and add a test pinning strip-not-reject.
  It is the one behaviour the design rationale cites and the only one left untested, and it
  guards a plausible future refactor to a mongoose Map, which WOULD persist "fr-FR".
  Cheap and behaviour-documenting. Cost if wrong: one extra test.
Task 3: fix round 1/5 (1 addressed, 0 open; commits 6f6b494..df6f2af). Re-review confirmed the
  test genuinely distinguishes strip from reject (dual assertion: no validate error AND
  toObject().translations undefined — cannot pass under a Map refactor). No debug residue.
Task 3: complete (commits fca4478..df6f2af, review clean)
Task 4: dispatched (haiku; pure function, plan carries full code + full test). BASE df6f2af.
Task 4: implementer DONE (commit ed38a2f, 8 new tests; full suite 22/22, tree clean).
Task 4: review dispatched (sonnet) with 4 named risks: (1) is `translations` genuinely
  absent from the result via destructuring-rest rather than set to undefined — `in` and
  JSON.stringify differ, and the storefront payload size depends on it; (2) does the
  empty-English guard read the SOURCE field rather than the translated value; (3) does it
  mutate the input, which would be a real bug since Task 9 maps it over 55 mongoose docs;
  (4) does an unknown locale short-circuit before any access that could throw on
  translations: undefined.
Task 4: review ✅ spec compliant, Approved, 0 Critical/Important. All 4 named risks verified
  against the code: translations genuinely absent via rest-destructuring (not undefined),
  empty-English guard reads the SOURCE field off the caller's object, no mutation of the
  input (safe for Task 9's map over 55 mongoose docs), and isTargetLocale short-circuits
  before any indexing that could throw.
Task 4: minor (deferred): tests cover a cleared field only as "" , not as whitespace-only
  "   ". Implementation handles it (.trim() === ''), so coverage gap not behaviour bug.
Task 4: Ruling 9: resolved the reviewer's first ⚠️ myself. The brief's "Produces" prose says
  the function returns `T`; the shipped signature is `Omit<T, 'translations'>`, which is the
  correct one — stripping the blob is a requirement. The prose was my error. Task 9 must be
  written against `Omit<T,'translations'>`, and I am carrying that into its dispatch rather
  than letting it be rediscovered. Cost if wrong: a Task 9 type error, caught by tsc.
Task 4: Ruling 10: resolved the reviewer's second ⚠️ myself by compiling an assignability
  probe. Task 3's strict `Partial<Record<TargetLocale,{title?,description?}>>` IS assignable
  to Task 4's loose `Partial<Record<string,Partial<Record<string,TranslatedField>>>>` —
  tsc accepts the widening. Note the two types are not yet USED together anywhere, so this
  is proven by construction rather than by the build; Task 9 is where they actually meet,
  and I am carrying it there as a named risk. Cost if wrong: Task 9 fails to compile.
Task 4: complete (commits df6f2af..ed38a2f, review clean)
Task 5: dispatched (sonnet; largest brief at 342 lines — external SDK, validators, and a
  glossary copied across repos. Judgment work, not transcription). BASE ed38a2f.
Task 5: implementer DONE (commit 7d96feb; 11 new tests, 33/33 suite, tsc clean; openai@^7.30.0).
  Controller SECURITY VERIFICATION: 0 key-like strings in any branch commit, .env not tracked,
  no key in any report file. Clean.
  Controller verified "copied verbatim" rather than trusting it: compared all 17 glossary rows
  against frontend/scripts/i18n/glossary.json programmatically — every locale value and every
  avoid list matches, 0 mismatches, no invented rows.
  Implementer dropped the hallmark row's `note` field as a judgment call; verified the
  sense-split caveat ("sello" = the mark, "contraste" = the system) survives in the file's top
  comment at lines 12-14, so nothing load-bearing was lost. Judgment call was correct.
  Implementer disclosed a transient shell hiccup that silently dropped one .env append on the
  first attempt — caught by its own count-verification and fixed. The count check earned its keep.
Task 5: review dispatched (sonnet).
Task 5: review ❌ Needs fixes — 1 Important (plan-mandated), 4 Minor. All 5 named risks checked.
  All-or-nothing contract CONFIRMED (single return after every check; no partial observable).
  Glossary scoping CONFIRMED (cut does not match "executed"; plurals match; empty rule set
  emits no header). Array-vs-object guard CONFIRMED.
Task 5: Ruling 11: the length-ratio band is MY defect and must change. LENGTH_MAX 2.2 rejects
  the glossary's own mandated translations for short terms: cut->Schliff 2.33, cut->
  slijpkwaliteit 4.67, bezel->Zargenfassung 2.60, with huggie->Huggie-Creole passing by 0.03.
  A ratio is simply meaningless on a 3-character source. Fix: apply the ratio band only when
  the source is long enough for a ratio to mean something, and use an absolute growth
  allowance below that. Why it matters beyond theory: the failure mode is a SILENT,
  PERMANENT English fallback on exactly the vocabulary the glossary exists to enforce, with
  no diagnostic — the opposite of the safety the band was added for.
  Scope note, recorded honestly: in THIS plan only `title` (~80 chars) and `description`
  (~476 chars) reach translateBatch, and attribute vocabulary goes through the frontend
  lookup instead — so no short string reaches it today. I am fixing it anyway because the
  guard is wrong on its own terms, a short admin-authored title is possible, and leaving a
  known silent-reject in a validator that later tasks trust is how the blog corpus got its
  defects. Cost if wrong: a slightly looser guard on short strings.
Task 5: minor (deferred): non-string values throw a "was empty" message — misleading for a
  type error. Folded into the fix round since the implementer is in that function anyway.
Task 5: minor (deferred): hasSourceTerm rebuilds its RegExp per (term x payload entry);
  trivial at current sizes.
Task 5: minor (deferred): no error-path logging inside translateBatch. Already covered
  downstream — Task 6's syncProduct catches per locale and logs via logger.error, so a
  rejected batch is visible. No action.
Task 5: minor (deferred): GlossaryTerm keeps `unvalidated` but drops `note`; the same
  literal-shape argument was not applied to both. Inert either way, caveat preserved in the
  file header. No action.
Task 5: fix round 1/5 (2 addressed, 0 open; commits 7d96feb..a9d6d92). Boundary verified clean
  at exactly 24 chars (`<` so 24 takes the ratio branch, 23 the growth branch — no gap/overlap).
  Controller independently confirmed all four previously-rejected glossary cases now pass while
  cut->80-char-paragraph and long-prose->8-chars still fail.
  Note: the re-reviewer's arithmetic was wrong twice (called `bezel` a >=24-char source; called
  slijpkwaliteit 16 chars not 14). Conclusions matched my own direct computation, so the verdict
  stands, but its reasoning is not reliable evidence on its own.
Task 5: complete (commits ed38a2f..a9d6d92, review clean)
Task 6: dispatched (sonnet; orchestration across mongoose + the translator, concurrency-sensitive
  write semantics). BASE a9d6d92.
Task 6: review ✅ spec compliant, Approved, 0 Critical/Important. All 5 named risks traced safe:
  per-locale try/catch genuinely isolates (catch only logs, loop continues, promise resolves);
  exactly one translateBatch per locale; index correspondence cannot transpose because send and
  write-back walk the same `plan` array with no re-filter between; not-found returns normally.
  Reviewer also noted the try block covers updateOne, so DB write failures are isolated too —
  broader isolation than the brief claimed.
Task 6: Ruling 12: resolved the reviewer's ⚠️ about .lean() myself. Task 3 built translations
  from nested `new mongoose.Schema(...)` subdocuments with NO Map anywhere, so .lean() yields
  plain nested objects matching PlannableProduct. Cost if wrong: planFor would read undefined
  and re-translate everything every run — expensive but not corrupting, and tsc plus the first
  backfill --dry would expose it.
Task 6: minor (deferred): the `typeof source !== 'string'` half of the empty-source guard has
  no test; only the whitespace/empty-string half is covered.
Task 6: minor (deferred): logger's first parameter is named userId but is passed a service
  name. Semantic mismatch inherited from the brief and from existing repo usage. Cosmetic.
Task 6: Ruling 13: keep locales SEQUENTIAL, deferring the reviewer's Promise.allSettled
  suggestion. 275 calls for a full backfill at a few seconds each is ~10-18 minutes for a
  one-off operator script, and sequential avoids rate-limit handling nobody has written.
  Noting for honesty that the sibling i18n work DID parallelise and got 3.3x — but that needed
  explicit proof against cross-locale contamination, which is work this does not need yet.
  Cost if wrong: a slow backfill, visible and easy to revisit.
Task 6: complete (commits a9d6d92..289c829, review clean)
Task 7: dispatched (sonnet; two insertion points in the large existing product.service.ts —
  this is the write path for the whole catalogue, so a bad edit breaks product creation).
  BASE 289c829.
Task 7: review ✅ Approved, 0 Critical/Important. Risks traced: createProduct's await-then-return
  is semantically identical to returning the promise (same value, same identity, same rejection
  propagation); void + synchronously-attached .catch leaves no unhandled-rejection window;
  error.message access matches pervasive existing repo convention; dropping `readonly` is
  consistent with all three sibling collaborator fields and satisfies strictPropertyInitialization.
  Accepted design characteristic confirmed, not a defect: the detached promise outlives the
  request and is lost on a restart — the backfill script is the stated mitigation.
Task 7: minor (deferred): the rationale comment appears only at the createProduct call site,
  not at updateProduct. Mirrors the brief exactly.
Task 7: complete (commits 289c829..5c66ad5, review clean)
Task 8: dispatched (sonnet). Carries Ruling 1 (dotenv house style) explicitly. HARD BOUNDARY
  given to the implementer: --dry ONLY. A real backfill writes to the live product database and
  spends money on OpenAI; that is an operator decision for the user, not something an
  implementation subagent may trigger. BASE 5c66ad5.
Task 8: review ❌ Needs fixes — 1 Important (plan-mandated), 4 Minor.
  Confirmed good: --dry is structurally side-effect-free (returns BEFORE
  `new ProductTranslationService()`, so no OpenAI client is even constructed); both guards
  run before connectDB so a bad invocation never opens a connection; missing-key check guards
  the real run too; no new credential exposure.
Task 8: Ruling 14: --locale is broken on a real run and must be fixed. The flag is validated
  and scopes the DRY COUNT, but the real loop calls syncProduct(id), which hardcodes
  `for (const locale of TARGET_LOCALES)`. So `--dry --locale fr` reports 110 fields and the
  real `--locale fr` then translates 550 — 5x the spend the dry run just promised. A dry run
  that under-reports cost is worse than no dry run, because an operator acts on it. My brief
  wrote it that way; the implementer transcribed it faithfully.
  Fix: give syncProduct an optional locale list defaulting to TARGET_LOCALES, and have the
  script pass its already-computed `locales`. Backwards compatible — Task 7's two callers pass
  one argument and keep all five. Cost if wrong: touches Task 6's file, so the per-locale
  isolation there must be re-verified; the re-review will cover it.
Task 8: minor (deferred): arg() cannot distinguish "flag with no value" from "flag absent",
  and `--product --dry` captures "--dry" as a product id, failing later with a Mongoose
  CastError instead of a clear parsing error. Fails loudly, just unhelpfully.
Task 8: minor (deferred): `product as never` bypasses structural checking on the planFor call
  (inherited from the brief).
Task 8: minor (deferred): real run double-fetches — find().lean() then syncProduct's findById
  per product. Harmless at 55.
Task 8: minor (deferred): tsconfig excludes src/scripts so tsc --noEmit never type-checks this
  file. Pre-existing and shared with 10 other scripts; ts-node type-checks it at run time (no
  --transpile-only). Judged adequate; changing the exclude would affect 10 unrelated scripts.
Task 8: fix round 1/5 (1 addressed, 0 open; commits 91e97f5..385b80d). Task 6's three
  guarantees re-verified intact after the loop-header edit: per-locale try/catch, targeted
  $set, srcHash(item.source). Default parameter correct — one-argument calls still mean all
  five locales. Empty-array hazard judged theoretical (script validates before building).
Task 8: complete (commits 5c66ad5..385b80d, review clean)
Task 9: dispatched (sonnet; final task — touches the public API surface for the whole
  catalogue). BASE 385b80d. Carries Rulings 9 and 10 explicitly.
Task 9: FIRST ATTEMPT FAILED — transient API 500 (server-side), not a task or capability
  failure. Verified it left nothing behind: tree clean, HEAD still 385b80d, 43/43, tsc clean,
  no report written. Re-dispatching from the same BASE with the same model; no escalation,
  because nothing about the task was the problem.
  Noted for the record: before dying, that agent said it was disregarding a system-reminder
  that asks for Bash/sed edits over Read/Edit/Write. That preference comes from the project's
  own AGENTS.md under bypass-permissions mode, so it is a real user instruction rather than
  noise. It made no edits either way. Re-dispatch tells the next agent to stop deliberating
  about the mechanism and just make correct, exact edits.
Task 9: SECOND ATTEMPT FAILED — 600s stall (no progress), after an API 500 killed the first.
  Unlike the first, this one left usable partial work in the tree: readLocale + its test,
  which I verified pass 4/4. It stalled on the next step, "preparing precise edits" to the
  878-line ProductController with 12 handlers. Diagnosis: the dispatch was too broad, not the
  task too hard — so re-dispatching identically a third time would be the definition of
  forcing the same model to retry without changing anything.
Task 9: the stalled agent made a real discovery worth keeping: ProductController transitively
  imports class-transformer-decorated DTOs, so a test importing it needs `import
  "reflect-metadata"` before that import. server.ts:2 does exactly this for the process, and
  reflect-metadata is a real dependency (^0.2.2). Its fix is correct and house-consistent.
Task 9: Ruling 15: re-scope the remaining work with exact coordinates instead of letting an
  agent explore. Mapped the route table myself: PUBLIC GETs are / (getProducts:245),
  /:id (getProductById:290), /slug/:slug (getProductBySlug:346), plus /categories, /filters,
  /all-filters, /stats. Everything else is behind authenticateToken + requireAdmin.
  So exactly THREE handlers need resolution. Cost if wrong: a public endpoint keeps serving
  English, visible immediately after backfill.
Task 9: Ruling 16: my brief named a "related products" handler that DOES NOT EXIST — no
  related/similar route or controller method anywhere. Dropping it from scope. Conversely the
  brief never named getProductById, which IS public and returns a full product, so it must be
  resolved too. Scope is the three handlers above, not the brief's list.
  Cost if wrong: /:id would serve English while /slug/:slug served French — an inconsistency
  a user could actually hit.
Task 9: confirmed .lean() is absent from all four ProductModel.find() calls in
  ProductRepository (lines 185, 294, 314, 345), so the brief's Step 6 is real work, not a no-op.
Task 9: implementer DONE (commit 739e51d, 47/47, tsc clean). Raised two concerns, both good.
Task 9: Ruling 17: fix recommendedProducts — the implementer was right to flag it and right
  not to decide alone. Verified: the main product IS resolved in all three public handlers
  (lines 257/305/364), but the embedded recommendedProducts map `p.toObject()` straight to
  `doc.title` at lines 315 and 373 with no resolution. So GET /slug/:slug?locale=fr returns a
  FRENCH main product beside ENGLISH recommendation titles — two languages in one response,
  on the product detail page. The spec's goal is "render it per locale on the listing and
  detail pages", and recommendations are part of the detail page. Two one-line changes.
  Cost if wrong: none; it is the same pure resolver already used three lines above.
Task 9: accepted the implementer's second concern as correct, no action: findByCategories
  and search (ProductRepository 294/314) are pre-existing dead code unreachable from any
  route, so adding .lean() there would be change for its own sake.
Task 9: for the reviewer, not a ruling: `readLocale(req.query as any)` appears three times.
  The `as any` is for Express's query typing rather than for the Task 3/Task 4 type question
  I explicitly forbade casting around, but it is still worth a reviewer's judgement.
Task 9: review ✅ Approved, 0 Critical/Important. All 5 named risks clean. Notably risk 5
  resolved as CORRECT rather than a bug: getProducts' query is the one given .lean(), so its
  `p` is already plain and .toObject() would throw; the other two sites feed from untouched
  queries still returning mongoose documents, so they must convert first. The .lean() was
  added only where downstream code was changed to tolerate it. translations is stripped twice
  over on every public path — by the resolver's Omit and again by explicit field literals /
  plainToInstance with excludeExtraneousValues.
Task 9: minor (deferred): readLocale(req.query as any) x3 — ordinary Express ParsedQs friction,
  not a masked bug. Widening readLocale's parameter to `unknown` would drop the cast entirely.
Task 9: minor (deferred): the two recommendedProducts fix lines lack the inline comment every
  other resolution site in the file has.
Task 9: complete (commits 385b80d..4cf2e50, review clean)

ALL 9 TASKS COMPLETE. Proceeding to the whole-branch review.

## Final whole-branch review (opus) — 1 Critical, 7 Important, 6 Minor

Ruling 18: C1 is real and I reproduced it independently. With OPENAI_API_KEY absent,
  `require('./src/routes/productRoutes')` THROWS OpenAIError at import time; with any dummy
  key it imports fine. The client is a constructor default parameter reached eagerly through
  productRoutes -> ProductController -> ProductService -> ProductTranslationService ->
  TranslationService. So a deployed backend missing the key does not degrade to English —
  the whole API fails to boot: users, cart, orders, webhooks. The spec (lines 167-172)
  promises the opposite, and this is a NEW failure mode the branch introduces. Every test
  injects a stub client, which is exactly why nine task reviews could not see it.
  FIXING in the single fix wave. Cost if wrong: none; lazy construction is strictly safer.

Ruling 19: fix wave scope = C1, I2 (missing apostrophe validator), I3 (+T8-1: --dry must
  report CALLS, which is what spend is measured in, plus reject a `--`-prefixed arg value),
  I4 (glossary `avoid` lists shipped and never used), I5 (bulkUpdateProducts fans out
  unbounded detached syncs), I7 (conditional $set guarding human edits). All six are small and
  surgical. The skill allows ONE fix wave and no second, so everything I intend to fix goes in
  this one.

Ruling 20: I6 (no locale projection on the storefront query) is NOT fixed in this wave;
  recording it as a deliberate spec deviation instead. The spec requires projecting only the
  active locale; the plan substituted `.lean()`, which is hydration, not projection — Task 9
  implemented the plan faithfully and no ruling covered it. Harm is ~150KB per listing request
  fetched and discarded on an endpoint rate-limited to 50/window: real but modest. The fix
  needs locale threaded into ProductRepository.findAll, which is not a one-liner and shares
  plumbing with I8. Cost if wrong: wasted Atlas bandwidth, no correctness impact.

Ruling 21: I8 (free-text ?search= matches English only, so a French shopper searching
  "Boucles" gets zero results) is NOT fixed in this wave either, and is being SURFACED TO THE
  USER rather than buried. It is a genuine user-visible regression this branch introduces —
  before it, display and search were both English and therefore consistent. The fix shares
  I6's locale-threading, so the two should be done together as a small follow-up. Cost if
  wrong: translated shoppers cannot find products by typing what they see. This is the single
  most user-facing item left open and the user should decide it, not me.

## Fix-wave re-review: all 6 addressed. Three residuals adjudicated (no second wave allowed).

Ruling 22: PARKED — `logger.success` at productTranslation.service.ts:114 fires even when F6's
  new guard blocked the write (matchedCount 0). Real: before the fix the filter was just
  {_id}, so success was always accurate; now a legitimately-blocked overwrite still logs
  success, eroding the one signal an operator would use to see the guard working. Parked
  rather than fixed because the blocked path is UNREACHABLE today — no write path sets
  source:'human' until phase 2 — and the process allows one fix wave only. Carrying it into
  the phase-2 plan, where it becomes live the moment admin editing ships.
  Cost if wrong: an operator misreads a no-op as a write. No data impact.

Ruling 23: PARKED — `skipTranslationSync` is a bare trailing positional boolean on
  updateProduct. Verified safe today: only two call sites repo-wide, default false, true only
  from bulk. The risk is a future refactor reordering positional args and silently flipping
  it. Parked as style/future-maintenance, not a present defect.
  Cost if wrong: a later change silently disables save-time sync. Mitigated by the backfill.

Ruling 24: SIGNED OFF — F6's $and means that if one field in a locale's plan is concurrently
  marked human, the whole locale's write is blocked that pass, including a sibling field that
  was still safe. The re-reviewer flagged this as a trade-off nobody had explicitly accepted.
  I accept it: nothing is lost, only delayed to the next sync or backfill, because planFor
  permanently excludes human fields anyway; it fails CLOSED, which matches the service's
  stated philosophy that refusing to write beats writing something wrong; and it is tested.
  Cost if wrong: one extra backfill pass to pick up a delayed sibling field.

FINAL STATE: 19 commits, 54/54 tests, tsc clean, backfill --dry 275 calls / 550 fields /
55 products. Whole-branch review clean after one fix wave.
