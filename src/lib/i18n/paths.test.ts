import { describe, expect, it } from "vitest";
import { localeAlternates, localePath, localeUrl } from "@/lib/i18n/paths";

describe("localePath", () => {
    it("leaves English unprefixed", () => {
        expect(localePath("en", "/about")).toBe("/about/");
        expect(localePath("en", "/")).toBe("/");
    });

    it("prefixes the other locales", () => {
        expect(localePath("es", "/about")).toBe("/es/about/");
        expect(localePath("de", "/blog/x")).toBe("/de/blog/x/");
    });

    it("gives the locale root a single trailing slash", () => {
        expect(localePath("it", "/")).toBe("/it/");
    });

    it("normalises missing and duplicated slashes", () => {
        expect(localePath("fr", "about")).toBe("/fr/about/");
        expect(localePath("fr", "/about/")).toBe("/fr/about/");
    });
});

describe("localeUrl", () => {
    it("is absolute", () => {
        expect(localeUrl("nl", "/about")).toBe("https://www.aureliaroyale.com/nl/about/");
    });
});

describe("localeAlternates", () => {
    it("maps all six locales to their own absolute URL", () => {
        expect(localeAlternates("/about")).toEqual({
            en: "https://www.aureliaroyale.com/about/",
            fr: "https://www.aureliaroyale.com/fr/about/",
            it: "https://www.aureliaroyale.com/it/about/",
            de: "https://www.aureliaroyale.com/de/about/",
            nl: "https://www.aureliaroyale.com/nl/about/",
            es: "https://www.aureliaroyale.com/es/about/",
        });
    });
});
