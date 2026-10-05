// scripts/i18n/lib/ast-literal.test.mjs
import { describe, expect, it } from "vitest";
import ts from "typescript";
import { literalToJson, NonLiteralError } from "./ast-literal.mjs";

/** Parse `const x = <expr>` and hand back the initialiser node. */
function parseExpr(code) {
    const sf = ts.createSourceFile(
        "t.ts",
        `const x = ${code}`,
        ts.ScriptTarget.Latest,
        true,
    );
    return sf.statements[0].declarationList.declarations[0].initializer;
}

const toJson = (code) => literalToJson(parseExpr(code), { file: "t.ts" });

describe("literalToJson", () => {
    it("converts strings, numbers, booleans and null", () => {
        expect(toJson('"hello"')).toBe("hello");
        expect(toJson("1200")).toBe(1200);
        expect(toJson("true")).toBe(true);
        expect(toJson("null")).toBe(null);
    });

    it("converts negative numbers", () => {
        expect(toJson("-5")).toBe(-5);
    });

    it("preserves escaped quotes in string content", () => {
        expect(toJson('"He said \\"yes\\" loudly"')).toBe('He said "yes" loudly');
    });

    it("converts nested arrays and objects", () => {
        expect(toJson('[{ type: "paragraph", text: "a" }, { items: ["x"] }]')).toEqual([
            { type: "paragraph", text: "a" },
            { items: ["x"] },
        ]);
    });

    it("accepts quoted object keys", () => {
        expect(toJson('{ "@type": "FAQPage" }')).toEqual({ "@type": "FAQPage" });
    });

    it("refuses an identifier reference", () => {
        expect(() => toJson("{ text: someVariable }")).toThrow(NonLiteralError);
    });

    it("refuses a template literal", () => {
        expect(() => toJson("{ text: `hello` }")).toThrow(NonLiteralError);
    });

    it("refuses a spread", () => {
        expect(() => toJson("[...others]")).toThrow(NonLiteralError);
    });

    it("refuses a function call", () => {
        expect(() => toJson("{ text: build() }")).toThrow(NonLiteralError);
    });

    it("names the offending construct in the error", () => {
        expect(() => toJson("{ text: someVariable }")).toThrow(/someVariable/);
    });
});
