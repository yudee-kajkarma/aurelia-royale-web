"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Trash2 } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { ShopPagination } from "@/components/shop/ShopPagination";
import { ShopSelector } from "@/components/shop/ShopSelector";
import type { ProductCardModel, ProductsPagination } from "@/services/products/product.types";

type SideProduct = ProductCardModel;

type ShopCatalogProps = {
  products: ProductCardModel[];
  latestProducts: SideProduct[];
  instagramImages: string[];
  categories: string[];
  pagination: ProductsPagination;
  initialCategory: string;
  initialMinPrice: number;
  initialMaxPrice: number;
  minAllowedPrice: number;
  maxAllowedPrice: number;
  initialSortBy: string;
};

function toNumberPrice(price: string) {
  return Number(price.replace("$", ""));
}

function sortProducts(products: ProductCardModel[], sortBy: string) {
  if (sortBy === "price-low") {
    return [...products].sort((a, b) => toNumberPrice(a.price) - toNumberPrice(b.price));
  }
  if (sortBy === "price-high") {
    return [...products].sort((a, b) => toNumberPrice(b.price) - toNumberPrice(a.price));
  }
  if (sortBy === "name") {
    return [...products].sort((a, b) => a.title.localeCompare(b.title));
  }
  return [...products].sort((a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount);
}

export function ShopCatalog({
  products,
  latestProducts,
  instagramImages,
  categories,
  pagination,
  initialCategory,
  initialMinPrice,
  initialMaxPrice,
  minAllowedPrice,
  maxAllowedPrice,
  initialSortBy,
}: ShopCatalogProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [categoryDraft, setCategoryDraft] = useState(initialCategory);
  const [minDraft, setMinDraft] = useState(String(initialMinPrice));
  const [maxDraft, setMaxDraft] = useState(String(initialMaxPrice));
  const [sortBy, setSortBy] = useState(initialSortBy);

  const visibleProducts = useMemo(() => sortProducts(products, sortBy), [products, sortBy]);
  const activePage = pagination.currentPage;
  const resultStart = pagination.totalRecords === 0 ? 0 : (pagination.currentPage - 1) * pagination.recordsPerPage + 1;
  const resultEnd = Math.min(pagination.currentPage * pagination.recordsPerPage, pagination.totalRecords);

  function updateParams(nextValues: Record<string, string | null>) {
    const nextParams = new URLSearchParams(searchParams.toString());

    Object.entries(nextValues).forEach(([key, value]) => {
      if (!value) {
        nextParams.delete(key);
        return;
      }

      nextParams.set(key, value);
    });

    const query = nextParams.toString();
    router.push(query ? `${pathname}?${query}` : pathname);
  }

  const applyFilters = () => {
    const min = Number(minDraft) || minAllowedPrice;
    const max = Number(maxDraft) || maxAllowedPrice;

    updateParams({
      page: "1",
      category: categoryDraft === "All" ? null : categoryDraft,
      minPrice: String(Math.min(min, max)),
      maxPrice: String(Math.max(min, max)),
      sort: sortBy === "top-rating" ? null : sortBy,
    });
  };

  const clearFilters = () => {
    setCategoryDraft("All");
    setMinDraft(String(minAllowedPrice));
    setMaxDraft(String(maxAllowedPrice));
    setSortBy("top-rating");
    router.push(pathname);
  };

  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-18 sm:px-8 lg:grid-cols-[280px_1fr]">
      <aside>
        <h2 className="display-font text-4xl uppercase text-[var(--deep)]">Filter By</h2>
        <div className="mt-4 h-px bg-black/28" />

        <div className="mt-5">
          <div className="mb-4 flex items-center justify-between text-[var(--deep)]">
            <p className="text-2xl font-semibold uppercase">= Price</p>
            <span className="text-2xl text-black/30">-</span>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            <input
              type="number"
              value={minDraft}
              onChange={(event) => setMinDraft(event.target.value)}
              placeholder="Min Price"
              className="h-11 border border-black/25 bg-white px-3 text-sm font-semibold text-[var(--deep)] outline-none"
            />
            <input
              type="number"
              value={maxDraft}
              onChange={(event) => setMaxDraft(event.target.value)}
              placeholder="Max Price"
              className="h-11 border border-black/25 bg-white px-3 text-sm font-semibold text-[var(--deep)] outline-none"
            />
          </div>

          <div className="mt-4 h-1 bg-[var(--gold)]" />

          <div className="mt-5 flex items-center justify-between gap-4">
            <button onClick={applyFilters} className="bg-[var(--gold)] px-8 py-3 text-sm font-bold uppercase tracking-[0.06em] text-white">
              Apply
            </button>
            <p className="text-base font-bold text-[#8f9195]">Price : ${initialMinPrice} - ${initialMaxPrice}</p>
          </div>

          <button onClick={clearFilters} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase text-[#8f9195]">
            <Trash2 size={14} />
            Clear All
          </button>
        </div>

        <div className="mt-10">
          <h3 className="display-font text-4xl uppercase text-[var(--deep)]">Category</h3>
          <div className="mt-4 h-px bg-black/28" />
          <ShopSelector
            ariaLabel="Filter by category"
            value={categoryDraft}
            onChange={setCategoryDraft}
            options={categories.map((value) => ({ value, label: value }))}
            className="mt-5"
          />
        </div>

        <div className="mt-10">
          <h3 className="display-font text-4xl uppercase text-[var(--deep)]">Latest Products</h3>
          <div className="mt-4 h-px bg-black/28" />
          <div className="mt-5 space-y-5">
            {latestProducts.map((item) => (
              <Link key={item.id} href={`/shop-details/${item.slug}`} className="flex items-center gap-4 border-b border-black/25 pb-4">
                <div
                  className="h-24 w-24 shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-lg font-bold text-[var(--deep)]">{item.title}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#8f9195]">{item.category}</p>
                  <p className="text-2xl font-bold text-[var(--deep)]">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h3 className="display-font text-4xl uppercase text-[var(--deep)]">Instagram</h3>
          <div className="mt-4 h-px bg-black/28" />
          <div className="mt-5 grid grid-cols-2 gap-3">
            {instagramImages.map((imageUrl, index) => (
              <a key={index} href="https://www.instagram.com/" className="group relative block h-32 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${imageUrl})` }}
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <p className="text-sm font-bold uppercase tracking-[0.06em] text-[#8f9195]">
            <span className="mr-2 text-[var(--gold)]">||</span>
            Showing {String(resultStart).padStart(2, "0")} - {String(resultEnd).padStart(2, "0")} Of {String(pagination.totalRecords).padStart(2, "0")} Results
          </p>
          <ShopSelector
            ariaLabel="Sort products"
            value={sortBy}
            onChange={(value) => {
              setSortBy(value);
              updateParams({
                page: "1",
                sort: value === "top-rating" ? null : value,
                category: categoryDraft === "All" ? null : categoryDraft,
                minPrice: minDraft !== String(minAllowedPrice) ? minDraft : null,
                maxPrice: maxDraft !== String(maxAllowedPrice) ? maxDraft : null,
              });
            }}
            options={[
              { value: "top-rating", label: "Sort By Top Rating" },
              { value: "price-low", label: "Sort By Price: Low To High" },
              { value: "price-high", label: "Sort By Price: High To Low" },
              { value: "name", label: "Sort By Name" },
            ]}
            className="w-full max-w-[280px]"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProducts.map((product) => (
            <Link key={product.id} href={`/shop-details/${product.slug}`} className="block">
              <ProductCard
                name={product.title}
                price={product.price}
                category={product.category}
                imageUrl={product.imageUrl}
                compact
              />
            </Link>
          ))}
        </div>

        {visibleProducts.length === 0 ? (
          <div className="mt-8 border border-dashed border-black/15 bg-white px-6 py-10 text-center text-sm font-semibold uppercase tracking-[0.1em] text-[#8f9195]">
            No products match the current filters.
          </div>
        ) : null}

        <ShopPagination
          currentPage={activePage}
          totalPages={pagination.totalPages}
          onPageChange={(page) => updateParams({
            page: String(Math.min(Math.max(1, page), pagination.totalPages)),
            category: categoryDraft === "All" ? null : categoryDraft,
            minPrice: minDraft !== String(minAllowedPrice) ? minDraft : null,
            maxPrice: maxDraft !== String(maxAllowedPrice) ? maxDraft : null,
            sort: sortBy === "top-rating" ? null : sortBy,
          })}
        />
      </div>
    </section>
  );
}