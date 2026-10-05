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
