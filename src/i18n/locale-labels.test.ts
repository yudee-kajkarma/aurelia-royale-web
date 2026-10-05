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
