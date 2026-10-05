import { describe, expect, it, vi } from "vitest";

const notFound = vi.fn(() => {
    throw new Error("NEXT_NOT_FOUND");
});
vi.mock("next/navigation", () => ({ notFound }));

const { assertLocale } = await import("@/i18n/locale-guard");

describe("assertLocale", () => {
    it("returns supported locales unchanged", () => {
        expect(assertLocale("en")).toBe("en");
        expect(assertLocale("es")).toBe("es");
    });

    it("404s on an unsupported locale", () => {
        expect(() => assertLocale("pt")).toThrow("NEXT_NOT_FOUND");
    });

    it("404s on a wrong-case locale rather than normalising it", () => {
        expect(() => assertLocale("EN")).toThrow("NEXT_NOT_FOUND");
    });
});
