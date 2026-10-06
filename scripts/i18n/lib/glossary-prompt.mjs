/**
 * Glossary-row rendering for the translation system prompt.
 *
 * WHY THIS FILE EXISTS (bug history — do not reintroduce)
 * ---------------------------------------------------------------------------
 * A translation request batches up to 50 unrelated strings (~6,000 chars)
 * into one call. The original implementation decided whether a glossary
 * term applied by searching the WHOLE JOINED BATCH for the English term,
 * and then rendered that term's `avoid` list as an unconditional ban, e.g.
 *   - "hallmark" -> "sello" (never: "contraste")
 * That reads to the model as "never output the token 'contraste' anywhere
 * in this response" — not "don't use 'contraste' for the word hallmark".
 * Result: ONE string in a batch that mentioned a jewellery "hallmark"
 * banned the Spanish word "contraste" for up to 49 OTHER, unrelated strings
 * in the same batch — including strings that were legitimately about visual
 * "contrast" and had nothing to do with hallmarks. The model obeyed the
 * (apparent) blanket ban and substituted "sello" instead, producing
 * factually wrong copy that still passed `translate.mjs check` (that check
 * only looks for the presence of avoided words, so output that avoids them
 * "correctly" — for the wrong reason — passes). See
 * .superpowers/sdd/2026-10-05-i18n-six-languages/ for the full incident.
 *
 * THE FIX
 * ---------------------------------------------------------------------------
 * 1. `glossaryFor` is scoped PER STRING, not per joined batch: a term only
 *    produces a row when the term is present in at least one individual
 *    payload string, and the row NAMES which string id(s) it governs.
 * 2. Rows are worded as a scoped instruction ("for string id(s) X, when
 *    translating TERM use Y, not Z — this applies only to those ids") and
 *    never as an unconditional "never use Z" — so a model reading the text
 *    literally has no way to interpret it as an output-wide ban.
 * 3. `systemPrompt` additionally states, once, that every rule below is
 *    scoped to its named ids and must not be generalised.
 */

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Whole-word containment. Substring matching would fire "cut" inside "execute"
 * and "carat" inside "caratage", producing bogus glossary rules and warnings.
 */
export function hasTerm(text, term) {
    return new RegExp(`(^|[^\\p{L}])${escapeRe(term)}([^\\p{L}]|$)`, "iu").test(text);
}

/**
 * Same, but tolerating a regular English plural. Without this, "retailers" and
 * "suppliers" never match their singular glossary entries and the terminology
 * rules silently fail to apply to most real sentences.
 */
export function hasSourceTerm(text, term) {
    return new RegExp(`(^|[^\\p{L}])${escapeRe(term)}s?([^\\p{L}]|$)`, "iu").test(text);
}

/**
 * Builds the "Required terminology" prompt rows for one translation request.
 *
 * `payload` is the same {id: englishString} map sent to the model (so the
 * ids named in a row are exactly the ids the model sees). A term is only
 * included if its English form is present in at least one of those strings,
 * and the row is scoped to precisely the id(s) where it was found — never to
 * "the batch" as a whole. See the file header for why this matters.
 */
export function glossaryFor(locale, glossary, payload) {
    const entries = Object.entries(payload);
    const rows = [];
    for (const entry of glossary.terms) {
        const matchingIds = entries.filter(([, value]) => hasSourceTerm(value, entry.en)).map(([id]) => id);
        if (!matchingIds.length) continue;
        const target = entry[locale];
        if (!target) continue;

        const avoid = entry.avoid?.[locale];
        const idLabel = matchingIds.length === 1 ? `string id ${matchingIds[0]}` : `string ids ${matchingIds.join(", ")}`;
        let row = `- for ${idLabel} only: when translating "${entry.en}", use "${target}"`;
        if (avoid?.length) {
            row +=
                `, not ${avoid.map((a) => `"${a}"`).join(" or ")}` +
                ` (this substitution applies only to the ${idLabel.replace(/^string /, "")} listed here — translate that word normally in any other string)`;
        }
        rows.push(row);
    }
    return rows;
}

export function systemPrompt(locale, localeName, glossaryRows, keepVerbatim) {
    return [
        `You are a professional translator localising website copy for Aurelia Royale,`,
        `a fine lab-grown diamond jewellery brand, from English into ${localeName}.`,
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
            ? `\nRequired terminology for THIS request only. Each rule below is scoped to the exact\n` +
              `string id(s) it names — it is NOT a general ban or requirement for the whole response.\n` +
              `Do not apply any rule's word choice (or its "not ..." alternative) to a string other\n` +
              `than the id(s) named in that rule; translate that word normally everywhere else:\n${glossaryRows.join("\n")}`
            : ``,
        keepVerbatim.length
            ? `\nThese tokens appear in the source and must appear unchanged in your output:\n${keepVerbatim.map((t) => `- ${t}`).join("\n")}`
            : ``,
    ]
        .filter(Boolean)
        .join("\n");
}
