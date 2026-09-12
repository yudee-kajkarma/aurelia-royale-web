// Server-compatible component — no "use client".
// Selects 6 related articles deterministically from BLOGS_DATA based on the
// current article's slug so the output is stable across SSR and client
// hydration (no Math.random() at render time).
// All links are plain <a href=…> elements — crawlable without JavaScript.

import Link from "next/link";
import { BLOGS_DATA } from "@/data/blogs.data";

interface RelatedArticlesProps {
  /** The slug of the currently displayed article — excluded from results. */
  currentSlug: string;
  heading?: string;
}

/**
 * Simple deterministic hash so we always pick the same 6 articles for a given
 * slug without needing Math.random().  The selection rotates across the full
 * pool so every article in the collection is discoverable over time.
 */
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (Math.imul(31, h) + slug.charCodeAt(i)) | 0;
  }
  return Math.abs(h);
}

function getRelatedArticles(currentSlug: string, count = 6) {
  const pool = BLOGS_DATA.filter((p) => p.slug !== currentSlug);
  const seed = hashSlug(currentSlug);
  const selected = [];

  for (let i = 0; i < count && i < pool.length; i++) {
    const idx = (seed + i * 17) % pool.length;
    selected.push(pool[idx]);
  }

  return selected;
}

export default function RelatedArticles({
  currentSlug,
  heading = "Related Articles",
}: RelatedArticlesProps) {
  const articles = getRelatedArticles(currentSlug);

  if (!articles.length) return null;

  return (
    <aside
      aria-label="Related articles"
      className="mx-auto max-w-4xl px-6 pb-16 md:pb-24"
    >
      <div className="border-t border-[#e2dfd5] pt-12">
        <h2 className="mb-6 font-cormorant text-2xl md:text-3xl font-semibold leading-tight text-foreground uppercase tracking-wide">
          {heading}
        </h2>

        <ul className="grid gap-3 sm:grid-cols-2">
          {articles.map(({ slug, title }) => (
            <li key={slug}>
              <Link
                href={`/blog/${slug}/`}
                className="group flex items-start gap-3 rounded border border-[#e2dfd5] bg-white px-4 py-3 text-sm font-jost font-light text-[#153f35] transition hover:border-[#153f35]/40 hover:bg-[#f5f3ee] hover:text-[#0a2820]"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                  aria-hidden="true"
                />
                <span className="leading-snug">{title}</span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Back-to-blog — always visible, plain link */}
        <div className="mt-8">
          <Link
            href="/blog/"
            className="inline-flex items-center gap-2 font-jost text-xs font-semibold uppercase tracking-[0.2em] text-[#153f35] underline decoration-[1px] underline-offset-4 hover:text-gold transition-colors duration-200"
          >
            ← Back to all guides
          </Link>
        </div>
      </div>
    </aside>
  );
}
