import { describe, expect, it } from "vitest";
import { glossaryFor, glossaryViolations, hasSourceTerm, hasTerm, systemPrompt } from "./glossary-prompt.mjs";

// Minimal glossary fixture mirroring the real shape (scripts/i18n/glossary.json):
// a term with an `avoid` list for the locale under test (hallmark/contraste,
// the exact pair involved in the batch-wide-ban incident), plus a second term
// with no avoid list to prove plain required-terminology rows still work.
const glossary = {
    terms: [
        {
            en: "hallmark",
            es: "sello",
            avoid: { es: ["contraste"] },
        },
        {
            en: "carat",
            es: "quilate",
        },
    ],
};

describe("glossaryFor", () => {
    it("emits a row only for the string id(s) that actually contain the English term", () => {
        // "0" is about a jewellery hallmark; "1" is an unrelated string about
        // visual contrast and does NOT contain "hallmark" at all. This is the
        // exact shape of the regression: a batch with one hallmark string and
        // one unrelated contrast string.
        const payload = {
            "0": "Every piece carries a hallmark.",
            "1": "The photo has strong contrast.",
        };
        const rows = glossaryFor("es", glossary, payload);
        expect(rows).toHaveLength(1);
        expect(rows[0]).toContain("string id 0");
        expect(rows[0]).not.toContain("id 1");
        expect(rows[0]).not.toMatch(/\bids\b/); // singular id, not a multi-id list
    });

    it("emits no row at all when the English term is absent from every string", () => {
        const payload = {
            "0": "The photo has strong contrast.",
            "1": "This ring is a limited edition.",
        };
        const rows = glossaryFor("es", glossary, payload);
        expect(rows).toHaveLength(0);
    });

    it("names every matching id when the term occurs in more than one string", () => {
        const payload = {
            "0": "This hallmark is genuine.",
            "1": "Unrelated string.",
            "2": "Another hallmark reference.",
        };
        const rows = glossaryFor("es", glossary, payload);
        expect(rows).toHaveLength(1);
        expect(rows[0]).toContain("string ids 0, 2");
    });

    it("never renders an avoid list as an unconditional ban", () => {
        const payload = { "0": "Every piece carries a hallmark." };
        const rows = glossaryFor("es", glossary, payload);
        expect(rows).toHaveLength(1);
        // The old, buggy phrasing: `(never: "contraste")`.
        expect(rows[0]).not.toMatch(/never/i);
        expect(rows[0]).not.toMatch(/\(never:/i);
        // The row must still carry the term, the house rendering, and the
        // word to avoid, scoped explicitly to "here" / the named id(s).
        expect(rows[0]).toContain('"hallmark"');
        expect(rows[0]).toContain('"sello"');
        expect(rows[0]).toContain('"contraste"');
        expect(rows[0]).toMatch(/only/i);
    });

    it("renders a plain required-terminology row with no avoid list unchanged in shape", () => {
        const payload = { "0": "This is a one-carat diamond." };
        const rows = glossaryFor("es", glossary, payload);
        expect(rows).toHaveLength(1);
        expect(rows[0]).toContain('"carat"');
        expect(rows[0]).toContain('"quilate"');
    });
});

describe("systemPrompt", () => {
    it("does not contain unconditional never-use-X phrasing for a term with an avoid list", () => {
        const payload = { "0": "Every piece carries a hallmark." };
        const rows = glossaryFor("es", glossary, payload);
        const prompt = systemPrompt("es", "Spanish", rows, []);

        expect(prompt).toContain("contraste");
        // The literal old pattern must be gone...
        expect(prompt).not.toMatch(/\(never:/i);
        // ...and nothing in the prompt instructs the model to never emit/use
        // the avoided word as a global rule.
        expect(prompt).not.toMatch(/never\s+(use|emit|output)\s+"?contraste/i);
        // The prompt must instead state the scoping rule explicitly.
        expect(prompt).toMatch(/scoped to the exact/i);
        expect(prompt).toMatch(/string id\(s\)/i);
    });

    it("omits the glossary section entirely when no rows apply", () => {
        const prompt = systemPrompt("es", "Spanish", [], []);
        expect(prompt).not.toMatch(/Required terminology/i);
    });
});

describe("hasTerm / hasSourceTerm", () => {
    it("hasTerm matches whole words only, not substrings", () => {
        expect(hasTerm("a cut diamond", "cut")).toBe(true);
        expect(hasTerm("execute the plan", "cut")).toBe(false);
    });

    it("hasSourceTerm tolerates a regular English plural", () => {
        expect(hasSourceTerm("our retailers", "retailer")).toBe(true);
        expect(hasSourceTerm("our retailer", "retailer")).toBe(true);
        expect(hasSourceTerm("caratage", "carat")).toBe(false);
    });
});

describe("glossaryViolations", () => {
    it("flags a banned rendering when the English leaf really uses the term", () => {
        const v = glossaryViolations("es", glossary, "Every piece carries a hallmark.", "Cada pieza lleva un contraste.");
        expect(v).toEqual([{ en: "hallmark", used: "contraste", house: "sello" }]);
    });

    // The two false positives that actually shipped. `check` reported them as
    // violations with full confidence, and because `check` ENFORCES the
    // glossary rather than validating it, they pressured the next run to
    // replace correct Spanish with wrong Spanish.
    it("does not flag the banned word when the English never uses the term", () => {
        // Prose about visual contrast. "hallmark" appears nowhere in the source,
        // so the hallmark -> sello rule has no business firing.
        expect(
            glossaryViolations("es", glossary, "The photo has strong contrast.", "La foto tiene mucho contraste."),
        ).toEqual([]);
    });

    it("does not flag a correct word that another term happens to ban", () => {
        // Metal FINENESS, where "pureza" is the right Spanish word. The
        // clarity -> claridad row bans "pureza", but "clarity" is absent here.
        const g = { terms: [{ en: "clarity", es: "claridad", avoid: { es: ["pureza", "purezas"] } }] };
        expect(glossaryViolations("es", g, "Hallmarks, fineness and plating explained.", "Sellos, pureza y chapado.")).toEqual([]);
        // ...but it still fires when the English genuinely says clarity.
        expect(glossaryViolations("es", g, "Cut, colour, clarity and carat.", "Talla, color, pureza y quilate.")).toEqual([
            { en: "clarity", used: "pureza", house: "claridad" },
        ]);
    });

    it("matches a plural English source term, like the prompt side does", () => {
        const v = glossaryViolations("es", glossary, "Hallmarks are stamped inside.", "Los contraste van dentro.");
        expect(v).toHaveLength(1);
        expect(v[0].en).toBe("hallmark");
    });

    it("never fires for a term with no avoid list in this locale", () => {
        // "carat" has no avoid list at all, and the hallmark row has none for fr.
        expect(glossaryViolations("es", glossary, "Two carat total weight.", "Dos quilates en total.")).toEqual([]);
        expect(glossaryViolations("fr", glossary, "Every piece carries a hallmark.", "Chaque piece porte un contraste.")).toEqual([]);
    });

    it("reports every distinct banned rendering present in one leaf", () => {
        const g = { terms: [{ en: "clarity", es: "claridad", avoid: { es: ["pureza", "purezas"] } }] };
        const v = glossaryViolations("es", g, "Clarity matters.", "La pureza y las purezas importan.");
        expect(v.map((x) => x.used)).toEqual(["pureza", "purezas"]);
    });
});
