import type { Metadata } from "next";

/**
 * Shared by `[locale]/layout.tsx` and `admin/layout.tsx` — the only two
 * layouts that render a document — so the title/description live in one
 * place instead of being duplicated across both.
 */
export const siteMetadata: Metadata = {
    title: {
        default: "Aurelia Royale | Luxury Lab-Grown Diamond Jewelry",
        template: "%s | Aurelia Royale",
    },
    description:
        "Aurelia Royale crafts fine lab-grown diamond jewelry — rings, earrings, necklaces, bracelets and more, designed for timeless elegance and sustainable luxury.",
};
