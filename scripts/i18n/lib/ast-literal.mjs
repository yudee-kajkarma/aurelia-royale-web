// scripts/i18n/lib/ast-literal.mjs
import ts from "typescript";

export class NonLiteralError extends Error {}

/**
 * Convert a TypeScript literal expression to a plain JS value.
 *
 * Refuses anything that is not a literal — identifiers, template literals,
 * spreads, calls, computed keys. The 99 blog files contain only literals
 * (verified: zero backticks, zero spreads), so a refusal means something
 * changed and a human must look, rather than content being silently lost.
 */
export function literalToJson(node, ctx) {
    const fail = (what) => {
        const { line } = ctx.sourceFile
            ? ts.getLineAndCharacterOfPosition(ctx.sourceFile, node.getStart(ctx.sourceFile))
            : { line: -1 };
        throw new NonLiteralError(
            `${ctx.file}${line >= 0 ? `:${line + 1}` : ""}: expected a literal but found ${what}`,
        );
    };

    if (ts.isStringLiteral(node)) return node.text;
    if (ts.isNumericLiteral(node)) return Number(node.text);
    if (node.kind === ts.SyntaxKind.TrueKeyword) return true;
    if (node.kind === ts.SyntaxKind.FalseKeyword) return false;
    if (node.kind === ts.SyntaxKind.NullKeyword) return null;

    if (ts.isPrefixUnaryExpression(node)) {
        if (node.operator === ts.SyntaxKind.MinusToken && ts.isNumericLiteral(node.operand)) {
            return -Number(node.operand.text);
        }
        return fail("a unary expression");
    }

    if (ts.isArrayLiteralExpression(node)) {
        return node.elements.map((el) => {
            if (ts.isSpreadElement(el)) return fail("a spread element");
            return literalToJson(el, ctx);
        });
    }

    if (ts.isObjectLiteralExpression(node)) {
        const out = {};
        for (const prop of node.properties) {
            if (!ts.isPropertyAssignment(prop)) {
                return fail(`a ${ts.SyntaxKind[prop.kind]} property`);
            }
            let key;
            if (ts.isIdentifier(prop.name) || ts.isStringLiteral(prop.name)) {
                key = prop.name.text;
            } else {
                return fail("a computed property name");
            }
            out[key] = literalToJson(prop.initializer, ctx);
        }
        return out;
    }

    if (ts.isNoSubstitutionTemplateLiteral(node) || ts.isTemplateExpression(node)) {
        return fail("a template literal");
    }
    if (ts.isIdentifier(node)) return fail(`the identifier ${node.text}`);
    if (ts.isCallExpression(node)) return fail("a function call");

    return fail(`a ${ts.SyntaxKind[node.kind]} node`);
}
