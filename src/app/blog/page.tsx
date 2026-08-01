"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Search, BookOpen } from "lucide-react";
import { BLOGS_DATA, BlogPost } from "@/data/blogs.data";
import { NewsletterSection } from "@/components/home/NewsletterSection";

const POSTS_PER_PAGE = 8;

export default function BlogIndexPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

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

    const withImages = [...BLOGS_DATA].filter(post => !noImageSlugs.includes(post.slug)).reverse();
    const withoutImages = [...BLOGS_DATA].filter(post => noImageSlugs.includes(post.slug)).reverse();

    return [...withImages, ...withoutImages];
  }, []);

  // 2. Extract unique categories (optional, parsed from titles/excerpts or custom lists)
  const getCategory = (post: BlogPost) => {
    const slug = post.slug.toLowerCase();
    if (slug.includes("cut") || slug.includes("clarity") || slug.includes("colour") || slug.includes("carat") || slug.includes("4cs")) {
      return "Diamond Education";
    }
    if (slug.includes("fit") || slug.includes("size") || slug.includes("wrist") || slug.includes("measure")) {
      return "Sizing & Fit";
    }
    if (slug.includes("certificate") || slug.includes("igi") || slug.includes("verify") || slug.includes("disclosure")) {
      return "Certification & Quality";
    }
    return "Buying Guides";
  };

  const categories = ["All", "Diamond Education", "Sizing & Fit", "Certification & Quality", "Buying Guides"];

  // 3. Filter posts by category and search query
  const filteredPosts = useMemo(() => {
    setCurrentPage(1); // Reset to page 1 on filter/search change
    return sortedPosts.filter((post) => {
      const categoryMatch = selectedCategory === "All" || getCategory(post) === selectedCategory;
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
            Aurelia Journal
          </span>
          <h1 className="mt-4 font-cormorant text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-white uppercase tracking-wide">
            Guides & Insights
          </h1>
          <p className="mt-6 font-jost text-base font-light text-[#efefe8]/70 max-w-xl mx-auto leading-relaxed">
            Explore our collection of articles, expert guides, and sizing tips to help you select and care for your lab-grown diamond jewellery.
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
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
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
                        <span className="text-[10px] uppercase tracking-widest font-semibold">Aurelia Journal</span>
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
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-xs font-light leading-relaxed text-[#5a5a5a] mb-5 grow line-clamp-2">
                      {post.excerpt}
                    </p>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-block border border-[#153f35]/30 text-[#153f35] hover:text-[#031b16] hover:bg-gold hover:border-gold px-4 py-2 text-[10px] font-semibold uppercase tracking-widest transition-all duration-300 w-fit rounded"
                    >
                      Read Article
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-[#e2dfd5] rounded-md">
            <BookOpen className="w-16 h-16 text-[#153f35]/20 mx-auto mb-4" strokeWidth={1} />
            <h3 className="font-cormorant text-2xl text-[#153f35] font-medium">No Articles Found</h3>
            <p className="text-sm text-[#5a5a5a] font-light mt-2">
              Try adjusting your search terms or selecting a different category.
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <nav className="flex justify-center items-center gap-2 mt-16 pt-8 border-t border-[#e2dfd5]">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 border border-[#e2dfd5] rounded text-[#153f35] hover:bg-[#e8e5dc] disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-300"
              aria-label="Previous page"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`w-10 h-10 border rounded text-xs font-semibold transition-all duration-300 ${
                  currentPage === page
                    ? "bg-[#153f35] border-[#153f35] text-[#efefe8] shadow-sm"
                    : "border-[#e2dfd5] text-[#153f35] hover:bg-[#e8e5dc]"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 border border-[#e2dfd5] rounded text-[#153f35] hover:bg-[#e8e5dc] disabled:opacity-30 disabled:hover:bg-transparent transition-all duration-300"
              aria-label="Next page"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </nav>
        )}
      </main>

      {/* Newsletter Section */}
      <NewsletterSection />
    </div>
  );
}
