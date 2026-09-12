"use client";

/**
 * BlogPageWrapper — Frontend-only blog detail layout
 *
 * Layout:
 * ┌──────────────────────────────────────────────────┐
 * │   HERO BANNER (full-width, from page.tsx)        │  ← not inside this component
 * ├──────────────────┬───────────────────────────────┤
 * │  LEFT SIDEBAR    │  RIGHT: Article content       │
 * │  (sticky)        │  (scrolls)                    │
 * │  · Get in Touch  │                               │
 * │  · 10 articles   │                               │
 * ├──────────────────┴───────────────────────────────┤
 * │   CTA BANNER (full-width)                        │
 * ├──────────────────────────────────────────────────┤
 * │   RELATED ARTICLES + NEWSLETTER (full-width)     │  ← children
 * └──────────────────────────────────────────────────┘
 *
 * Usage in blog page.tsx:
 *   <BlogPageWrapper sections={articleSections} currentSlug="some-slug">
 *     <RelatedArticles currentSlug="some-slug" />
 *     <NewsletterSection />
 *   </BlogPageWrapper>
 */

import React, { useEffect, useState } from "react";
import Link from "next/link";
import DynamicArticle, { ArticleSection } from "./DynamicArticle";
import { BLOGS_DATA } from "@/data/blogs.data";

// ─── Random articles ────────────────────────────────────────────────────────
function getRandomArticles(currentSlug: string, count = 10) {
  const pool = BLOGS_DATA.filter((b) => b.slug !== currentSlug);
  const seed = Math.floor(Date.now() / 60_000);
  return [...pool]
    .sort((a, b) => {
      const ha = (Math.sin(seed * 9301 + a.slug.length * 49297) + 1) / 2;
      const hb = (Math.sin(seed * 9301 + b.slug.length * 49297) + 1) / 2;
      return ha - hb;
    })
    .slice(0, count);
}

// ─── Sidebar component ───────────────────────────────────────────────────────
function Sidebar({ currentSlug }: { currentSlug: string }) {
  const [articles, setArticles] = useState<typeof BLOGS_DATA>([]);

  useEffect(() => {
    setArticles(getRandomArticles(currentSlug));
  }, [currentSlug]);

  return (
    <div className="flex flex-col gap-5">

      {/* Get in Touch card */}
      <div className="rounded-xl overflow-hidden bg-[#153f35] text-[#efefe8] shadow-lg">
        <div className="h-0.5 bg-gradient-to-r from-gold/0 via-gold to-gold/0" />
        <div className="px-5 pt-5 pb-4">
          <p className="font-jost text-[9px] font-semibold uppercase tracking-[0.35em] text-gold mb-1.5">
            Aurelia Royale
          </p>
          <h3 className="font-cormorant text-[21px] font-medium uppercase tracking-wide leading-tight text-[#efefe8] mb-3">
            Have a Question?
          </h3>
          <p className="font-jost text-[11px] font-light leading-relaxed text-[#efefe8]/70">
            Our team is here to help you find the perfect lab-grown diamond jewellery.
          </p>
        </div>
        <div className="px-5 pb-5 flex flex-col gap-2">
          <Link
            href="/contact/"
            className="block w-full text-center bg-gold text-[#031b16] font-jost text-[10px] font-semibold uppercase tracking-[0.2em] py-3 rounded transition-all duration-300 hover:bg-gold/90 hover:shadow-md active:scale-[0.98]"
          >
            Get in Touch
          </Link>
          <Link
            href="/shop/"
            className="block w-full text-center border border-[#efefe8]/20 text-[#efefe8] font-jost text-[10px] font-semibold uppercase tracking-[0.2em] py-3 rounded transition-all duration-300 hover:bg-[#efefe8]/10 active:scale-[0.98]"
          >
            Explore Collection
          </Link>
        </div>
      </div>

      {/* Other articles */}
      {articles.length > 0 && (
        <div className="rounded-xl overflow-hidden border border-[#e2dfd5] bg-white shadow-sm">
          <div className="px-5 pt-4 pb-2.5 bg-[#f5f3ee] border-b border-[#e2dfd5]">
            <h3 className="font-cormorant text-[14px] font-semibold uppercase tracking-[0.18em] text-[#153f35]">
              Other Articles
            </h3>
          </div>
          <ul className="divide-y divide-[#eeece7] max-h-[500px] overflow-y-auto">
            {articles.map(({ slug, title }) => (
              <li key={slug}>
                <Link
                  href={`/blog/${slug}/`}
                  className="group flex items-start gap-2.5 px-4 py-2.5 transition-colors duration-200 hover:bg-[#f5f3ee]"
                >
                  <span className="mt-[5px] h-1 w-1 shrink-0 rounded-full bg-gold opacity-60 transition-all duration-200 group-hover:opacity-100 group-hover:scale-150" />
                  <span className="font-jost text-[11px] font-light leading-snug text-[#3b3b3b] group-hover:text-[#153f35] transition-colors duration-200">
                    {title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-5 py-3 border-t border-[#e2dfd5] bg-[#fdfcf9]">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-1.5 font-jost text-[9px] font-semibold uppercase tracking-[0.25em] text-[#153f35] hover:text-gold transition-colors duration-200"
            >
              ← All Guides
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main export ─────────────────────────────────────────────────────────────
interface BlogPageWrapperProps {
  sections: ArticleSection[];
  currentSlug: string;
  /** RelatedArticles + NewsletterSection — rendered full-width below CTA */
  children?: React.ReactNode;
}

export default function BlogPageWrapper({
  sections,
  currentSlug,
  children,
}: BlogPageWrapperProps) {
  // Split sections: find last cta-banner
  const ctaBannerIdx = (() => {
    for (let i = sections.length - 1; i >= 0; i--) {
      const section = sections[i];
      if (section.content.some((b) => b.type === "cta-banner")) return i;
    }
    return -1;
  })();

  const mainSections = ctaBannerIdx >= 0 ? sections.slice(0, ctaBannerIdx) : sections;
  const ctaSection = ctaBannerIdx >= 0 ? [sections[ctaBannerIdx]] : [];

  return (
    <>
      {/* ── TWO-COLUMN ZONE: sidebar LEFT + content RIGHT ── */}
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-10 py-6">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8 xl:gap-12">

          {/* LEFT: Sticky sidebar */}
          <aside
            aria-label="Blog sidebar"
            className="hidden lg:block shrink-0 w-[260px] xl:w-[280px] lg:sticky lg:top-8 lg:self-start"
          >
            <Sidebar currentSlug={currentSlug} />
          </aside>

          {/* RIGHT: Scrollable article content */}
          <div className="min-w-0 flex-1">
            <DynamicArticle sections={mainSections} />
          </div>

        </div>
      </div>

      {/* ── FULL-WIDTH: CTA banner ── */}
      {ctaSection.length > 0 && (
        <div className="w-full px-4 sm:px-6 lg:px-10 pb-8">
          <DynamicArticle sections={ctaSection} />
        </div>
      )}

      {/* ── FULL-WIDTH: RelatedArticles + Newsletter ── */}
      {children}
    </>
  );
}
