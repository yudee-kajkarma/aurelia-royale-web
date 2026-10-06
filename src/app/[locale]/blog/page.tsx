// Server Component — no "use client".
// Reads ?page= and ?category= from searchParams, slices the sorted post list
// and server-renders the correct articles for that page.
// Pagination controls use <Link> (rendered as <a href=…>) so every page is
// reachable by crawlers following ordinary links.

import type { Metadata } from "next";
import Image from "next/image";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { assertLocale } from "@/i18n/locale-guard";
import { localeAlternates, localeUrl } from "@/lib/i18n/paths";
import { BLOGS_DATA } from "@/data/blogs.data";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import BlogFilters from "./BlogFilters";
import { getCategory } from "./blogUtils";

const POSTS_PER_PAGE = 8;

// Slugs whose images are missing — sorted to the end of the list.
const NO_IMAGE_SLUGS = new Set([
  "keep-lab-grown-diamond-jewellery-sparkling",
  "store-diamond-jewellery",
  "prevent-jewellery-scratches",
  "wear-diamond-jewellery-in-shower",
  "swim-wearing-diamond-jewellery",
  "perfume-skincare-diamond-jewellery",
  "check-diamond-jewellery-loose-stones",
  "professional-diamond-jewellery-inspection",
]);

// Deterministic sort: posts with images first (reversed so newest appears
// first), then posts without images (also reversed). This matches the
// original client-side sort exactly.
function getSortedPosts() {
  const withImages = BLOGS_DATA.filter((p) => !NO_IMAGE_SLUGS.has(p.slug)).reverse();
  const withoutImages = BLOGS_DATA.filter((p) => NO_IMAGE_SLUGS.has(p.slug)).reverse();
  return [...withImages, ...withoutImages];
}

// Build the href for a pagination link, preserving any existing category param.
// Deliberately UNPREFIXED: the locale-aware <Link> from "@/i18n/navigation"
// adds the locale prefix itself, so prefixing here too would yield "/es/es/blog/".
function pageHref(page: number, category?: string): string {
  const params = new URLSearchParams();
  if (page > 1) params.set("page", String(page));
  if (category && category !== "All") params.set("category", category);
  const qs = params.toString();
  return qs ? `/blog/?${qs}` : "/blog/";
}

interface PageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ page?: string; category?: string }>;
}

// ---------------------------------------------------------------------------
// Per-page canonical metadata.
// page.tsx receives searchParams; layout.tsx does not — so generateMetadata
// lives here rather than in the layout.
//   /blog/        → canonical: https://www.aureliaroyale.com/blog/
//   /blog/?page=2 → canonical: https://www.aureliaroyale.com/blog/?page=2
// ---------------------------------------------------------------------------
export async function generateMetadata({ params, searchParams }: PageProps): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = assertLocale(raw);
  const { page: pageParam, category: categoryParam } = await searchParams;
  const page = parseInt(pageParam ?? "1", 10) || 1;

  const t = await getTranslations({ locale, namespace: "BlogIndex" });

  const qs = new URLSearchParams();
  if (page > 1) qs.set("page", String(page));
  if (categoryParam && categoryParam !== "All") qs.set("category", categoryParam);
  const qsStr = qs.toString();
  const base = localeUrl(locale, "/blog");
  const canonical = qsStr ? `${base}?${qsStr}` : base;

  const title = page > 1 ? t("titlePaged", { page }) : t("title");

  return {
    title,
    description: t("description"),
    alternates: { canonical, languages: localeAlternates("/blog") },
    robots: { index: true, follow: true },
    openGraph: {
      title,
      description: t("ogDescription"),
      url: canonical,
      siteName: "Aurelia Royale",
      type: "website",
    },
  };
}

export default async function BlogIndexPage({ params, searchParams }: PageProps) {
  const { locale: raw } = await params;
  const locale = assertLocale(raw);
  setRequestLocale(locale);

  const { page: pageParam, category: categoryParam } = await searchParams;

  const currentPage = Math.max(1, parseInt(pageParam ?? "1", 10) || 1);
  const selectedCategory = categoryParam ?? "All";

  // Filter by category (server-side — drives what articles appear in HTML).
  const allSorted = getSortedPosts();
  const filtered =
    selectedCategory === "All"
      ? allSorted
      : allSorted.filter((p) => getCategory(p) === selectedCategory);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  // Clamp page to valid range.
  const safePage = Math.min(currentPage, totalPages);
  const start = (safePage - 1) * POSTS_PER_PAGE;
  const pagePosts = filtered.slice(start, start + POSTS_PER_PAGE);

  const t = await getTranslations("BlogIndex");
  const tFilters = await getTranslations("blogFilters");
  const tCards = await getTranslations("blogCards");

  // Card bylines are formatted per request locale, exactly as the article page
  // formats `content.datePublished`. BLOGS_DATA.date is a plain ISO calendar
  // date (YYYY-MM-DD) and must never be a pre-formatted English string —
  // interpolating one of those into `byline` shipped "July 16, 2026" to all
  // six locales. `timeZone: "UTC"` pins the rendered day to the calendar date
  // in the data: `new Date("2026-07-16")` is UTC midnight, so formatting it in
  // a behind-UTC server timezone would otherwise print the 15th.
  const dateFormatter = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });

  return (
    <div className="bg-[#efefe8] min-h-screen text-foreground font-jost">
      {/* Hero */}
      <header className="bg-[#153f35] text-[#efefe8] py-24 px-6 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
        <div className="max-w-4xl mx-auto">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t("eyebrow")}
          </span>
          <h1 className="mt-4 font-cormorant text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white uppercase tracking-wide">
            {t("heading")}
          </h1>
          <p className="mt-6 font-jost text-base font-light text-[#efefe8]/70 max-w-xl mx-auto leading-relaxed">
            {t("subheading")}
          </p>
        </div>
      </header>

      {/* Filters (client component — category nav + search) */}
      <BlogFilters selectedCategory={selectedCategory} />

      {/* Article grid — server-rendered with the correct page slice */}
      <main className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
        {pagePosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {pagePosts.map((post) => {
              const category = getCategory(post);
              const title = tCards(`${post.slug}.title`);
              const excerpt = tCards(`${post.slug}.excerpt`);
              return (
                <article
                  key={post.slug}
                  className="flex flex-col h-full bg-white border border-[#e2dfd5] overflow-hidden hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:border-[#153f35]/25 transition-all duration-300 group rounded-md"
                >
                  <div className="relative w-full aspect-[16/7] overflow-hidden bg-[#e8e5dc]/50">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={title}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                        sizes="(max-width: 1280px) 50vw, 640px"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-[#153f35]/30">
                        <BookOpen className="w-8 h-8 mb-1" strokeWidth={1.5} />
                        <span className="text-[10px] uppercase tracking-widest font-semibold">
                          {t("eyebrow")}
                        </span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-[#153f35] text-gold text-[0.6rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                      {tFilters(category)}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <span className="text-[11px] font-light text-[#8a8a8a] mb-1.5">
                      {t("byline", {
                        date: dateFormatter.format(new Date(post.date)),
                      })}
                    </span>
                    <h2 className="font-cormorant text-xl md:text-2xl font-medium leading-snug text-[#153f35] mb-2.5 group-hover:text-gold transition-colors duration-300">
                      <Link href={`/blog/${post.slug}/`}>{title}</Link>
                    </h2>
                    <p className="text-xs font-light leading-relaxed text-[#5a5a5a] mb-5 grow line-clamp-2">
                      {excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}/`}
                      className="inline-block border border-[#153f35]/30 text-[#153f35] hover:text-[#031b16] hover:bg-gold hover:border-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 w-fit rounded"
                    >
                      {t("readArticle")}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-[#e2dfd5] rounded-md">
            <BookOpen className="w-16 h-16 text-[#153f35]/20 mx-auto mb-4" strokeWidth={1} />
            <h3 className="font-cormorant text-2xl text-[#153f35] font-medium">
              {t("noResultsHeading")}
            </h3>
            <p className="text-sm text-[#5a5a5a] font-light mt-2">
              {t("noResultsBody")}
            </p>
          </div>
        )}

        {/* ----------------------------------------------------------------
            Crawlable pagination — every control is a real <a href=…> link.
            A crawler following these links reaches every article without
            executing JavaScript.
        ---------------------------------------------------------------- */}
        {totalPages > 1 && (
          <nav
            aria-label={t("paginationLabel")}
            className="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-[#e2dfd5]"
          >
            {/* Previous */}
            {safePage > 1 ? (
              <Link
                href={pageHref(safePage - 1, selectedCategory)}
                className="p-2 border border-[#e2dfd5] rounded text-[#153f35] hover:bg-[#e8e5dc] transition-all duration-300"
                aria-label={t("previousPage")}
              >
                <ChevronLeft className="w-5 h-5" />
              </Link>
            ) : (
              <span
                className="p-2 border border-[#e2dfd5] rounded text-[#153f35] opacity-30 cursor-default"
                aria-disabled="true"
                aria-label={t("previousPage")}
              >
                <ChevronLeft className="w-5 h-5" />
              </span>
            )}

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <Link
                key={p}
                href={pageHref(p, selectedCategory)}
                aria-current={p === safePage ? "page" : undefined}
                className={`w-10 h-10 flex items-center justify-center border rounded text-xs font-semibold transition-all duration-300 ${
                  p === safePage
                    ? "bg-[#153f35] border-[#153f35] text-[#efefe8] shadow-sm"
                    : "border-[#e2dfd5] text-[#153f35] hover:bg-[#e8e5dc]"
                }`}
              >
                {p}
              </Link>
            ))}

            {/* Next */}
            {safePage < totalPages ? (
              <Link
                href={pageHref(safePage + 1, selectedCategory)}
                className="p-2 border border-[#e2dfd5] rounded text-[#153f35] hover:bg-[#e8e5dc] transition-all duration-300"
                aria-label={t("nextPage")}
              >
                <ChevronRight className="w-5 h-5" />
              </Link>
            ) : (
              <span
                className="p-2 border border-[#e2dfd5] rounded text-[#153f35] opacity-30 cursor-default"
                aria-disabled="true"
                aria-label={t("nextPage")}
              >
                <ChevronRight className="w-5 h-5" />
              </span>
            )}
          </nav>
        )}
      </main>

      <NewsletterSection />
    </div>
  );
}
