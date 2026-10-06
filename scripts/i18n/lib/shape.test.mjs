// scripts/i18n/lib/shape.test.mjs
import { describe, expect, it } from "vitest";
import { diffShape, keyPaths } from "./shape.mjs";

describe("keyPaths", () => {
    it("lists every leaf path, including array indices", () => {
        expect(keyPaths({ a: "x", b: { c: "y" }, d: ["p", "q"] })).toEqual([
            "a",
            "b.c",
            "d.0",
            "d.1",
        ]);
    });
});

describe("diffShape", () => {
    it("reports nothing for identical shapes with different text", () => {
        expect(
            diffShape({ t: "Hello", s: [{ h: "A" }] }, { t: "Bonjour", s: [{ h: "B" }] }),
        ).toEqual({ missing: [], extra: [] });
    });

    it("reports a missing key", () => {
        expect(diffShape({ a: "x", b: "y" }, { a: "x" }).missing).toEqual(["b"]);
    });

    it("reports an added key", () => {
        expect(diffShape({ a: "x" }, { a: "x", z: "w" }).extra).toEqual(["z"]);
    });

    it("reports a changed array length as a shape difference", () => {
        const d = diffShape({ items: ["a", "b"] }, { items: ["a"] });
        expect(d.missing).toEqual(["items.1"]);
    });
});
