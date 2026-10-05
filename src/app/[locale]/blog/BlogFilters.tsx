"use client";

import { useSearchParams } from "next/navigation";
import { useTranslations } from "next-intl";
import { Search } from "lucide-react";
import { useState, useTransition } from "react";
import { useRouter } from "@/i18n/navigation";
import type { BlogCategoryKey } from "./blogUtils";

// "All" is an internal sentinel only — it is never written to the query
// string (see handleCategoryChange) so it never needs to be shared or
// translated-as-a-value across locales. The four real entries are the stable
// keys from blogUtils.getCategory, also used verbatim as `?category=` values.
const CATEGORY_KEYS = [
  "All",
  "diamondEducation",
  "sizingAndFit",
  "certificationAndQuality",
  "buyingGuides",
] as const;

// ---------------------------------------------------------------------------
// BlogFilters
// ---------------------------------------------------------------------------

interface BlogFiltersProps {
  selectedCategory: string;
}

export default function BlogFilters({ selectedCategory }: BlogFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const t = useTranslations("blogFilters");
  const [searchQuery, setSearchQuery] = useState("");
  const [, startTransition] = useTransition();

  function handleCategoryChange(cat: BlogCategoryKey | "All") {
    const params = new URLSearchParams(searchParams.toString());
    if (cat === "All") {
      params.delete("category");
    } else {
      params.set("category", cat);
    }
    params.delete("page"); // reset to page 1 on category change
    const qs = params.toString();
    startTransition(() => {
      router.push(qs ? `/blog/?${qs}` : "/blog/");
    });
  }

  return (
    <section className="bg-white border-b border-[#e2dfd5] py-6 sticky top-24 z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Category links — each is a real navigation */}
        <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center md:justify-start">
          {CATEGORY_KEYS.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider transition-all duration-300 rounded ${
                selectedCategory === cat
                  ? "bg-[#153f35] text-gold"
                  : "bg-[#e8e5dc]/50 text-[#153f35] hover:bg-[#e8e5dc] hover:text-[#153f35]"
              }`}
            >
              {cat === "All" ? t("all") : t(cat)}
            </button>
          ))}
        </div>

        {/* Search — client-side only, does not affect URL */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder={t("searchPlaceholder")}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-[#e8e5dc]/40 border border-[#e2dfd5] rounded text-foreground placeholder-[#5a5a5a] focus:outline-none focus:border-[#153f35] focus:bg-white transition-all duration-300"
          />
          <Search className="absolute left-3.5 top-3 w-4 h-4 text-[#5a5a5a]" />
          {/* Hidden field so the search value is available to the page via a
              data attribute — the server-rendered articles are not filtered by
              search; filtering happens via client-side JS after hydration */}
          <input type="hidden" data-search-value={searchQuery} />
        </div>
      </div>
    </section>
  );
}
