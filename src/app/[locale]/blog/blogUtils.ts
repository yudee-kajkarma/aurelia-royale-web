// Shared utility — no "use client" directive.
// Importable by both the Server Component (page.tsx) and the
// Client Component (BlogFilters.tsx).

import type { BlogPost } from "@/data/blogs.data";

export function getCategory(post: BlogPost): string {
  const slug = post.slug.toLowerCase();
  if (
    slug.includes("cut") ||
    slug.includes("clarity") ||
    slug.includes("colour") ||
    slug.includes("carat") ||
    slug.includes("4cs")
  ) {
    return "Diamond Education";
  }
  if (
    slug.includes("fit") ||
    slug.includes("size") ||
    slug.includes("wrist") ||
    slug.includes("measure")
  ) {
    return "Sizing & Fit";
  }
  if (
    slug.includes("certificate") ||
    slug.includes("igi") ||
    slug.includes("verify") ||
    slug.includes("disclosure")
  ) {
    return "Certification & Quality";
  }
  return "Buying Guides";
}
