// Leaf-collection for the translation CLI, extracted so it is unit-testable
// in isolation from anything that touches the network or the filesystem.
//
// The whole safety story for scripts/i18n/translate.mjs rests on this file:
// the JSON tree is never sent to the model. It is walked locally, scalar
// leaves are tagged as translatable or not, and only the translatable values
// round-trip through the API — keyed by path, not by structure. Results are
// written back with setAtPath() at the exact recorded path, so keys, nesting
// and array lengths can never drift no matter what the model returns.

/**
 * Keys whose values are NEVER sent to the model.
 *
 * The first ten are from the uniglo reference script. The last five are
 * Aurelia-specific and load-bearing:
 *   theme       — callout styling ("cream" would come back as "crème" and the
 *                 block loses its styling in five languages)
 *   shopHref    — cta-banner link target, present on 98 of 98 articles
 *   contactHref — cta-banner link target, present on 98 of 98 articles
 *   category    — a blogCategories message KEY, not display text
 *   siteName    — the brand name. Footer renders it via Common.siteName while
 *                 HeaderLogo hardcodes it, so translating the key would show a
 *                 translated brand in the footer and an English one in the
 *                 header, on the same page, in five languages.
 */
export const PROTECTED_KEYS = new Set([
    "type",
    "href",
    "src",
    "url",
    "slug",
    "id",
    "width",
    "height",
    "image",
    "namespace",
    "theme",
    "shopHref",
    "contactHref",
    "category",
    "siteName",
]);

/** Values that are plainly not prose, whatever key they sit under. */
const NON_PROSE = [
    /^https?:\/\//i,
    /^\/[\w\-/.]*$/, // internal path
    /^[\w.-]+@[\w.-]+$/, // email
    /^[\d\s:–\-.,/]+$/, // pure numerics, times, ISO dates
];

export const isProse = (key, value) =>
    typeof value === "string" &&
    value.trim() !== "" &&
    !PROTECTED_KEYS.has(key) &&
    !NON_PROSE.some((re) => re.test(value.trim()));

/**
 * Walk an object collecting every scalar leaf with its path, tagged with
 * whether it is translatable prose. Both halves come from one walk so the dry
 * run can report on each with one path format.
 */
export function collectAll(node, trail = [], key = "", out = []) {
    if (Array.isArray(node)) {
        node.forEach((item, index) => collectAll(item, [...trail, index], key, out));
    } else if (node && typeof node === "object") {
        for (const [k, v] of Object.entries(node)) {
            collectAll(v, [...trail, k], k, out);
        }
    } else if (typeof node === "string") {
        out.push({ path: trail, key, value: node, translatable: isProse(key, node) });
    }
    return out;
}

export const collectLeaves = (node) => collectAll(node).filter((l) => l.translatable);

/** Write a value back at a recorded path. */
export function setAtPath(root, path, value) {
    let cursor = root;
    for (let i = 0; i < path.length - 1; i++) cursor = cursor[path[i]];
    cursor[path[path.length - 1]] = value;
}
