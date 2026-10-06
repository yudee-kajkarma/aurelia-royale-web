import { describe, expect, it } from "vitest";
import {
    SHOP_CATEGORY_TILES,
    getCategoryLabelKey,
} from "@/services/products/product-category";

describe("category label keys", () => {
    it("gives every tile a message key instead of English text", () => {
        for (const tile of SHOP_CATEGORY_TILES) {
            expect(tile).toHaveProperty("labelKey");
            expect(tile).not.toHaveProperty("label");
            expect(tile.labelKey).toMatch(/^[a-z][A-Za-z]*$/);
        }
    });

    it("keeps queryValue untranslated so shared URLs work in every locale", () => {
        for (const tile of SHOP_CATEGORY_TILES) {
            expect(tile.queryValue).toMatch(/^[a-z-]+$/);
        }
    });

    it("resolves a known category through its aliases", () => {
        expect(getCategoryLabelKey("bracelet")).toBe("bracelets");
        expect(getCategoryLabelKey("Bracelets")).toBe("bracelets");
    });

    it("falls back to the raw category for an unknown value", () => {
        expect(getCategoryLabelKey("tiaras")).toBe("tiaras");
    });
});
