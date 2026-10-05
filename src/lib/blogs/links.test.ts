import { describe, expect, it } from "vitest";
import { isExternalHref, normalizeContentHref } from "@/lib/blogs/links";

describe("normalizeContentHref", () => {
    it("leaves an unprefixed internal path alone", () => {
        expect(normalizeContentHref("/shop/")).toBe("/shop/");
    });

    // Review Focus 3: must not become /es/es/shop/.
    it("strips a locale prefix an author wrongly included", () => {
        expect(normalizeContentHref("/es/shop/")).toBe("/shop/");
        expect(normalizeContentHref("/de/blog/4cs-of-lab-grown-diamonds/")).toBe(
            "/blog/4cs-of-lab-grown-diamonds/",
        );
    });

    it("does not strip a path segment that merely looks like a locale", () => {
        expect(normalizeContentHref("/it-is-a-guide/")).toBe("/it-is-a-guide/");
        expect(normalizeContentHref("/english/")).toBe("/english/");
    });

    it("leaves the English prefix-free default alone", () => {
        expect(normalizeContentHref("/en/shop/")).toBe("/shop/");
    });

    it("leaves anchors and query strings intact", () => {
        expect(normalizeContentHref("/shop/?category=rings")).toBe("/shop/?category=rings");
        expect(normalizeContentHref("#faq")).toBe("#faq");
    });
});

describe("isExternalHref", () => {
    it("recognises external and non-http schemes", () => {
        expect(isExternalHref("https://www.igi.org/")).toBe(true);
        expect(isExternalHref("mailto:hello@aureliaroyale.com")).toBe(true);
        expect(isExternalHref("tel:+441234567890")).toBe(true);
    });

    it("treats internal paths as internal", () => {
        expect(isExternalHref("/shop/")).toBe(false);
        expect(isExternalHref("#faq")).toBe(false);
    });
});
