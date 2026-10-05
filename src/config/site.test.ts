import { describe, expect, it } from "vitest";
import { SITE_NAME, SITE_URL } from "@/config/site";

describe("test harness", () => {
    it("resolves the @/ alias to src", () => {
        expect(SITE_NAME).toBe("Aurelia Royale");
    });

    it("exposes a site URL with no trailing slash", () => {
        expect(SITE_URL.endsWith("/")).toBe(false);
    });
});
