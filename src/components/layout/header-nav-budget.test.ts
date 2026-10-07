import { describe, expect, it } from "vitest";

import { routing } from "@/i18n/routing";

// Suffixed because the Italian locale code `it` would shadow vitest's `it`.
import enMessages from "../../../messages/en.json";
import frMessages from "../../../messages/fr.json";
import itMessages from "../../../messages/it.json";
import deMessages from "../../../messages/de.json";
import nlMessages from "../../../messages/nl.json";
import esMessages from "../../../messages/es.json";

const MESSAGES: Record<string, { Header: Record<string, string> }> = {
    en: enMessages,
    fr: frMessages,
    it: itMessages,
    de: deMessages,
    nl: nlMessages,
    es: esMessages,
};

/** The five links rendered in the desktop header, in order. */
const NAV_KEYS = ["home", "about", "shop", "contact", "blog"] as const;

/**
 * Guards the header overflow bug.
 *
 * The desktop nav is a single non-wrapping row sharing one grid row with a
 * centred logo. When the labels grew past the column, the row spilled into
 * the logo's column and the logo <Link> — a later sibling, painted above —
 * swallowed the clicks on the last nav item, so "Blog" stopped working in
 * every non-English locale.
 *
 * MEASURED, not guessed: with the shipped type settings (0.74rem, semibold,
 * uppercase, tracking 0.14em, gap-5) at the 1280px max width, Dutch is the
 * longest locale at 36 characters and renders 535px wide, leaving 80px of
 * clearance before the logo's anchor box. That is ~8 characters of headroom,
 * so the real ceiling is about 44. The limit below keeps a safety margin.
 *
 * If this fails, do not just raise the number — either shorten the
 * translation, or re-measure the header and move the limit with evidence.
 */
const MAX_NAV_CHARS = 40;

describe("header nav label budget", () => {
    it("covers every routing locale", () => {
        expect(Object.keys(MESSAGES).sort()).toEqual([...routing.locales].sort());
    });

    for (const locale of routing.locales) {
        it(`${locale} nav labels fit the desktop header row`, () => {
            const header = MESSAGES[locale].Header;
            const labels = NAV_KEYS.map((key) => header[key]);

            // A missing label would silently shorten the row and hide the bug.
            for (const [index, label] of labels.entries()) {
                expect(label, `Header.${NAV_KEYS[index]} missing in ${locale}`).toBeTruthy();
            }

            expect(labels.join("").length).toBeLessThanOrEqual(MAX_NAV_CHARS);
        });
    }

    it("keeps English the shortest, so English alone never proves the row fits", () => {
        const length = (locale: string) =>
            NAV_KEYS.map((key) => MESSAGES[locale].Header[key]).join("").length;
        const translated = routing.locales
            .filter((locale) => locale !== routing.defaultLocale)
            .map(length);

        expect(Math.min(...translated)).toBeGreaterThan(length(routing.defaultLocale));
    });
});
