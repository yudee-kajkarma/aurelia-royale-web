// Shared utility — no "use client" directive.
// Importable by both the Server Component (page.tsx) and the
// Client Component (BlogFilters.tsx).

import type { BlogPost } from "@/data/blogs.data";

/**
 * Stable keys into the `blogFilters` message namespace. These are also the
 * literal values used for the `?category=` query parameter, so a shared
 * link (e.g. a Spanish visitor pasting a filtered URL into an English tab)
 * keeps working — the key never changes with the active locale, only its
 * translated label does.
 */
export type BlogCategoryKey =
  | "diamondEducation"
  | "sizingAndFit"
  | "certificationAndQuality"
  | "buyingGuides";

export function getCategory(post: BlogPost): BlogCategoryKey {
  const slug = post.slug.toLowerCase();
  if (
    slug.includes("cut") ||
    slug.includes("clarity") ||
    slug.includes("colour") ||
    slug.includes("carat") ||
    slug.includes("4cs")
  ) {
    return "diamondEducation";
  }
  if (
    slug.includes("fit") ||
    slug.includes("size") ||
    slug.includes("wrist") ||
    slug.includes("measure")
  ) {
    return "sizingAndFit";
  }
  if (
    slug.includes("certificate") ||
    slug.includes("igi") ||
    slug.includes("verify") ||
    slug.includes("disclosure")
  ) {
    return "certificationAndQuality";
  }
  return "buyingGuides";
}
