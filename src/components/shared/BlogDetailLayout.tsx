/**
 * BlogDetailLayout
 * ─────────────────────────────────────────────────────────────────────────
 * Wraps every blog detail page in a two-column sticky-sidebar layout.
 *
 * LEFT  (lg+): sticky sidebar — "Get in Touch" card + 10 random articles
 * RIGHT (lg+): scrollable main article content
 *
 * On mobile/tablet (<lg) the sidebar is hidden and content is full width.
 * The CTA banner inside DynamicArticle stays full-width because it is rendered
 * inside the right-column content — we just give it a negative horizontal
 * margin trick via the DynamicArticle cta-banner block itself.
 *
 * Structure:
 *   <main>                        ← page-level, from each blog page.tsx
 *     <section hero />            ← full-width hero band
 *     <BlogDetailLayout>          ← this component
 *       DynamicArticle            ← article content (right column)
 *       RelatedArticles           ← related links (right column, below article)
 *     </BlogDetailLayout>
 *     <NewsletterSection />       ← full-width, outside the layout
 *   </main>
 */



interface BlogDetailLayoutProps {
  /** The slug of the currently displayed article. Used to exclude it from sidebar. */
  currentSlug: string;
  children: React.ReactNode;
}

export default function BlogDetailLayout({
  currentSlug,
  children,
}: BlogDetailLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Two-column grid on desktop */}
      <div className="flex flex-col lg:flex-row gap-10 xl:gap-14 items-start">

        {/* ── LEFT: Sticky Sidebar ── */}
        {/* BlogSidebar placeholder */}

        {/* ── RIGHT: Scrollable Article Content ── */}
        <div className="min-w-0 flex-1">
          {children}
        </div>

      </div>
    </div>
  );
}
