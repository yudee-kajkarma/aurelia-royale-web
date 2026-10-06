// scripts/i18n/lib/shape.mjs

/** Every leaf path in an object, dot-joined, arrays indexed. */
export function keyPaths(value, prefix = "") {
    if (Array.isArray(value)) {
        return value.flatMap((item, index) =>
            keyPaths(item, prefix ? `${prefix}.${index}` : String(index)),
        );
    }
    if (value && typeof value === "object") {
        return Object.entries(value).flatMap(([key, child]) =>
            keyPaths(child, prefix ? `${prefix}.${key}` : key),
        );
    }
    return prefix ? [prefix] : [];
}

/** Paths present in `source` but not `target`, and vice versa. */
export function diffShape(source, target) {
    const a = new Set(keyPaths(source));
    const b = new Set(keyPaths(target));
    return {
        missing: [...a].filter((p) => !b.has(p)),
        extra: [...b].filter((p) => !a.has(p)),
    };
}
