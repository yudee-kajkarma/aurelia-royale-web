"use client";

import React, { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, BookOpen } from "lucide-react";
import { BLOGS_DATA, BlogPost } from "@/data/blogs.data";
import BLOGS_DATA_ES from "@/data/blogs.data.es.json";
import BLOGS_DATA_FR from "@/data/blogs.data.fr.json";
import BLOGS_DATA_NL from "@/data/blogs.data.nl.json";
import BLOGS_DATA_DE from "@/data/blogs.data.de.json";
import BLOGS_DATA_IT from "@/data/blogs.data.it.json";
import { useTranslation } from "@/utils/i18n";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const POSTS_PER_PAGE = 8;

interface BlogIndexContentProps {
  initialLocale?: string;
}

export function BlogIndexContent({ initialLocale }: BlogIndexContentProps) {
  const { locale: clientLocale, localizeHref, t } = useTranslation();
  
  // Use initialLocale if provided (e.g. from SSR searchParams), otherwise fallback to clientLocale
  const locale = initialLocale || clientLocale;
  const isEs = locale === "es";
  const isFr = locale === "fr";
  const isNl = locale === "nl";
  const isDe = locale === "de";
  const isIt = locale === "it";

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const defaultAll = isIt ? "Tutti" : isDe ? "Alle" : isNl ? "Alles" : isFr ? "Tous" : isEs ? "Todos" : "All";
  const [selectedCategory, setSelectedCategory] = useState(defaultAll);

  useEffect(() => {
    setSelectedCategory(isIt ? "Tutti" : isDe ? "Alle" : isNl ? "Alles" : isFr ? "Tous" : isEs ? "Todos" : "All");
  }, [locale, isEs, isFr, isNl, isDe, isIt]);

  const rawPosts = useMemo(() => {
    if (isIt) return BLOGS_DATA_IT as BlogPost[];
    if (isDe) return BLOGS_DATA_DE as BlogPost[];
    if (isNl) return BLOGS_DATA_NL as BlogPost[];
    if (isFr) return BLOGS_DATA_FR as BlogPost[];
    if (isEs) return BLOGS_DATA_ES as BlogPost[];
    return BLOGS_DATA as BlogPost[];
  }, [isIt, isDe, isNl, isFr, isEs]);

  // 1. Sort posts by date, keeping blogs 92-99 (without images) at the end
  const sortedPosts = useMemo(() => {
    const noImageSlugs = [
      "keep-lab-grown-diamond-jewellery-sparkling",
      "store-diamond-jewellery",
      "prevent-jewellery-scratches",
      "wear-diamond-jewellery-in-shower",
      "swim-wearing-diamond-jewellery",
      "perfume-skincare-diamond-jewellery",
      "check-diamond-jewellery-loose-stones",
      "professional-diamond-jewellery-inspection"
    ];

    const withImages = [...rawPosts].filter(post => !noImageSlugs.includes(post.slug)).reverse();
    const withoutImages = [...rawPosts].filter(post => noImageSlugs.includes(post.slug)).reverse();

    return [...withImages, ...withoutImages];
  }, [rawPosts]);

  // 2. Extract unique categories
  const getCategory = (post: BlogPost) => {
    const slug = post.slug.toLowerCase();
    if (slug.includes("cut") || slug.includes("clarity") || slug.includes("colour") || slug.includes("carat") || slug.includes("4cs")) {
      return isIt ? "Guida ai Diamanti" : isDe ? "Diamanten-Wissen" : isNl ? "Diamant Educatie" : isFr ? "Éducation sur les diamants" : isEs ? "Educación sobre diamantes" : "Diamond Education";
    }
    if (slug.includes("fit") || slug.includes("size") || slug.includes("wrist") || slug.includes("measure")) {
      return isIt ? "Misura e Vestibilità" : isDe ? "Größe & Passform" : isNl ? "Maat & Pasvorm" : isFr ? "Taille & Ajustement" : isEs ? "Tamaño y ajuste" : "Sizing & Fit";
    }
    if (slug.includes("certificate") || slug.includes("igi") || slug.includes("verify") || slug.includes("disclosure")) {
      return isIt ? "Certificazione e Qualità" : isDe ? "Zertifizierung & Qualität" : isNl ? "Certificering & Kwaliteit" : isFr ? "Certification & Qualité" : isEs ? "Certificación y calidad" : "Certification & Quality";
    }
    return isIt ? "Guide all'Acquisto" : isDe ? "Kaufberater" : isNl ? "Koopgidsen" : isFr ? "Guides d'achat" : isEs ? "Guías de compra" : "Buying Guides";
  };

  const categories = isIt
    ? ["Tutti", "Guida ai Diamanti", "Misura e Vestibilità", "Certificazione e Qualità", "Guide all'Acquisto"]
    : isDe
    ? ["Alle", "Diamanten-Wissen", "Größe & Passform", "Zertifizierung & Qualität", "Kaufberater"]
    : isNl
    ? ["Alles", "Diamant Educatie", "Maat & Pasvorm", "Certificering & Kwaliteit", "Koopgidsen"]
    : isFr
    ? ["Tous", "Éducation sur les diamants", "Taille & Ajustement", "Certification & Qualité", "Guides d'achat"]
    : isEs 
    ? ["Todos", "Educación sobre diamantes", "Tamaño y ajuste", "Certificación y calidad", "Guías de compra"]
    : ["All", "Diamond Education", "Sizing & Fit", "Certification & Quality", "Buying Guides"];

  // 3. Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    return sortedPosts.filter((post) => {
      const isAll = selectedCategory === "All" || selectedCategory === "Tutti" || selectedCategory === "Todos" || selectedCategory === "Tous" || selectedCategory === "Alles" || selectedCategory === "Alle";
      const categoryMatch = isAll || getCategory(post) === selectedCategory;
      const searchMatch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [sortedPosts, selectedCategory, searchQuery]);

  // 4. Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-[#efefe8] min-h-screen text-foreground font-jost">
      {/* Hero Banner Header Section */}
      <header className="bg-[#153f35] text-[#efefe8] py-24 px-6 text-center border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="max-w-4xl mx-auto">
          <span className="font-jost text-xs font-semibold uppercase tracking-[0.3em] text-gold">
            {t("blog.journal")}
          </span>
          <h1 className="mt-4 font-cormorant text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white uppercase tracking-wide">
            {t("blog.title")}
          </h1>
          <p className="mt-6 font-jost text-base font-light text-[#efefe8]/70 max-w-xl mx-auto leading-relaxed">
            {t("blog.description")}
          </p>
        </div>
      </header>

      {/* Filter and Search Bar Section */}
      <section className="bg-white border-b border-[#e2dfd5] py-6 sticky top-24 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 rounded ${
                  selectedCategory === cat
                    ? "bg-[#153f35] text-gold"
                    : "bg-[#e8e5dc]/50 text-[#153f35] hover:bg-[#e8e5dc] hover:text-[#153f35]"
                }`}
              >
                {t(`blog.categories.${cat}`) !== `blog.categories.${cat}` ? t(`blog.categories.${cat}`) : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder={t("blog.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#e8e5dc]/40 border border-[#e2dfd5] rounded text-foreground placeholder-[#5a5a5a] focus:outline-none focus:border-[#153f35] focus:bg-white transition-all duration-300"
            />
            <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#5a5a5a]" />
          </div>
        </div>
      </section>

      {/* Blog Cards Grid */}
      <main className="max-w-7xl mx-auto py-16 px-6 sm:px-8 lg:px-12">
        {paginatedPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {paginatedPosts.map((post) => {
              const category = getCategory(post);
              return (
                <article
                  key={post.slug}
                  className="flex flex-col h-full bg-white border border-[#e2dfd5] overflow-hidden hover:shadow-[0_15px_30px_rgba(0,0,0,0.06)] hover:border-[#153f35]/25 transition-all duration-300 group rounded-md"
                >
                  {/* Blog Image */}
                  <div className="relative w-full aspect-[16/7] overflow-hidden bg-[#e8e5dc]/50">
                    {post.image ? (
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                        sizes="(max-w-7xl) 50vw, 100vw"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-[#153f35]/30">
                        <BookOpen className="w-8 h-8 mb-1" strokeWidth={1.5} />
                        <span className="text-[10px] uppercase tracking-widest font-semibold">
                          {t("blog.journal")}
                        </span>
                      </div>
                    )}
                    <span className="absolute top-3 left-3 bg-[#153f35] text-gold text-[0.6rem] font-semibold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                      {category}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    <span className="text-[11px] font-light text-[#8a8a8a] mb-1.5">
                      Aurelia Royale • {post.date}
                    </span>
                    <h2 className="font-cormorant text-xl md:text-2xl font-medium leading-snug text-[#153f35] mb-2.5 group-hover:text-gold transition-colors duration-300">
                      <Link href={localizeHref(`/blog/${post.slug}`)}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-xs font-light leading-relaxed text-[#5a5a5a] mb-5 grow line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={localizeHref(`/blog/${post.slug}`)}
                      className="inline-block border border-[#153f35]/30 text-[#153f35] hover:text-[#031b16] hover:bg-gold hover:border-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 w-fit rounded"
                    >
                      {t("blog.readArticle")}
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
              {t("blog.noArticles")}
            </h3>
            <p className="text-sm text-[#5a5a5a] font-light mt-2">
              {t("blog.noArticlesDesc")}
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav className="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-[#e2dfd5]">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border border-[#e2dfd5] rounded hover:border-[#153f35] hover:text-[#153f35] disabled:opacity-30 disabled:hover:border-[#e2dfd5] disabled:hover:text-foreground transition-all duration-300"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-9 h-9 text-xs font-medium rounded transition-all duration-300 ${
                  currentPage === page
                    ? "bg-[#153f35] text-gold font-semibold shadow-sm"
                    : "bg-white border border-[#e2dfd5] text-foreground hover:border-[#153f35] hover:text-[#153f35]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border border-[#e2dfd5] rounded hover:border-[#153f35] hover:text-[#153f35] disabled:opacity-30 disabled:hover:border-[#e2dfd5] disabled:hover:text-foreground transition-all duration-300"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </nav>
        )}
      </main>

      {/* Footer Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
