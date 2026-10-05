// scripts/i18n/lib/extract-blog.mjs
import ts from "typescript";
import { literalToJson } from "./ast-literal.mjs";
import { BLOG_CATEGORY_KEYS } from "./blog-categories.mjs";

const ENTITIES = {
    "&amp;": "&",
    "&apos;": "'",
    "&quot;": '"',
    "&lt;": "<",
    "&gt;": ">",
    "&nbsp;": " ",
    "&#39;": "'",
};

/** Decode the handful of JSX entities used in hero copy and collapse space. */
function decodeText(raw) {
    return raw
        .replace(/&[a-z]+;|&#\d+;/gi, (m) => ENTITIES[m.toLowerCase()] ?? m)
        .replace(/\s+/g, " ")
        .trim();
}

/** Concatenate the JsxText children of a JSX element. */
function jsxTextOf(element) {
    return decodeText(
        element.children
            .filter((child) => ts.isJsxText(child))
            .map((child) => child.text)
            .join(""),
    );
}

function classNameOf(element) {
    const opening = ts.isJsxElement(element) ? element.openingElement : element;
    for (const attr of opening.attributes.properties) {
        if (
            ts.isJsxAttribute(attr) &&
            attr.name.getText?.() !== undefined &&
            attr.name.escapedText === "className" &&
            attr.initializer &&
            ts.isStringLiteral(attr.initializer)
        ) {
            return attr.initializer.text;
        }
    }
    return "";
}

function tagNameOf(element) {
    const opening = ts.isJsxElement(element) ? element.openingElement : element;
    return opening.tagName.getText?.() ?? "";
}

/** Walk every JsxElement in the file. */
function collectJsxElements(sourceFile) {
    const found = [];
    const visit = (node) => {
        if (ts.isJsxElement(node)) found.push(node);
        ts.forEachChild(node, visit);
    };
    ts.forEachChild(sourceFile, visit);
    return found;
}

/** "Published July 15, 2026" -> "2026-07-15" */
const MONTHS = {
    january: "01", february: "02", march: "03", april: "04",
    may: "05", june: "06", july: "07", august: "08",
    september: "09", october: "10", november: "11", december: "12",
};

export function parseEnglishDate(text) {
    const m = text.match(/([A-Za-z]+)\s+(\d{1,2}),\s*(\d{4})/);
    if (!m) return undefined;
    const month = MONTHS[m[1].toLowerCase()];
    if (!month) return undefined;
    return `${m[3]}-${month}-${m[2].padStart(2, "0")}`;
}

/**
 * Pull one blog's translatable content out of its page.tsx.
 *
 * Returns the shape in spec section 3.4. The canonical URL is deliberately NOT
 * extracted: it is generated per locale at render time.
 */
export function extractBlog(sourceText, { file, slug }) {
    const clean = sourceText.replace(/^﻿/, "");
    const sourceFile = ts.createSourceFile(file, clean, ts.ScriptTarget.Latest, true);
    const ctx = { file, sourceFile };

    // --- named declarations -------------------------------------------------
    const decls = {};
    for (const stmt of sourceFile.statements) {
        if (!ts.isVariableStatement(stmt)) continue;
        for (const d of stmt.declarationList.declarations) {
            if (ts.isIdentifier(d.name) && d.initializer) {
                decls[d.name.text] = d.initializer;
            }
        }
    }

    if (!decls.metadata) throw new Error(`${file}: no "metadata" declaration`);
    if (!decls.articleSections) throw new Error(`${file}: no "articleSections" declaration`);

    const metadata = literalToJson(decls.metadata, ctx);
    const sections = literalToJson(decls.articleSections, ctx);
    const schema = decls.schemaMarkup ? literalToJson(decls.schemaMarkup, ctx) : null;

    // --- hero ---------------------------------------------------------------
    const elements = collectJsxElements(sourceFile);
    const eyebrowEl = elements.find(
        (el) => tagNameOf(el) === "span" && classNameOf(el).includes("text-gold"),
    );
    const titleEl = elements.find((el) => tagNameOf(el) === "h1");
    const subtitleEl = elements.find(
        (el) => tagNameOf(el) === "p" && classNameOf(el).includes("tracking-widest"),
    );

    if (!eyebrowEl) throw new Error(`${file}: no hero eyebrow span found`);
    if (!titleEl) throw new Error(`${file}: no <h1> found`);

    // jsxTextOf collects only DIRECT JsxText children, so an <h1> wrapping a
    // nested element would yield "". Fail loudly rather than ship a blank
    // heading in six languages.
    const title = jsxTextOf(titleEl);
    if (!title) {
        throw new Error(
            `${file}: <h1> produced an empty title — it probably contains nested elements and needs a richer hero parser`,
        );
    }

    const eyebrow = jsxTextOf(eyebrowEl);
    const category = BLOG_CATEGORY_KEYS[eyebrow];
    if (!category) {
        throw new Error(
            `${file}: unknown hero category ${JSON.stringify(eyebrow)} — add it to blog-categories.mjs`,
        );
    }

    const heroLine = subtitleEl ? jsxTextOf(subtitleEl) : "";
    const [subtitlePart, datePart] = heroLine.split("•").map((s) => s?.trim() ?? "");

    // --- dates --------------------------------------------------------------
    const webPage = schema?.["@graph"]?.find((n) => n["@type"] === "WebPage");
    const datePublished =
        webPage?.datePublished ?? parseEnglishDate(datePart ?? "") ?? undefined;
    const dateModified = webPage?.dateModified ?? datePublished;

    if (!datePublished) {
        throw new Error(
            `${file}: could not determine datePublished from schema or hero line ${JSON.stringify(heroLine)}`,
        );
    }

    return {
        metaTitle: metadata.title,
        metaDescription: metadata.description,
        category,
        title,
        subtitle: subtitlePart || undefined,
        datePublished,
        dateModified,
        sections,
    };
}
