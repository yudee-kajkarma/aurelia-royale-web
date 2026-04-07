"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Trash2 } from "lucide-react";
import { ProductCard } from "@/components/shared/ProductCard";
import { ShopPagination } from "@/components/shop/ShopPagination";
import { ShopSelector } from "@/components/shop/ShopSelector";

type ShopProduct = {
  id: string;
  name: string;
  price: string;
  category: string;
  imageUrl: string;
};

type SideProduct = {
  name: string;
  price: string;
  imageUrl: string;
};

type ShopCatalogProps = {
  products: ShopProduct[];
  latestProducts: SideProduct[];
  instagramImages: string[];
};

function toNumberPrice(price: string) {
  return Number(price.replace("$", ""));
}

export function ShopCatalog({ products, latestProducts, instagramImages }: ShopCatalogProps) {
  const PAGE_SIZE = 8;
  const categories = useMemo(() => ["All", ...Array.from(new Set(products.map((p) => p.category)))], [products]);

  const [categoryDraft, setCategoryDraft] = useState("All");
  const [minDraft, setMinDraft] = useState("30");
  const [maxDraft, setMaxDraft] = useState("1000");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState(30);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sortBy, setSortBy] = useState("top-rating");
  const [currentPage, setCurrentPage] = useState(1);

  const applyFilters = () => {
    const min = Number(minDraft) || 0;
    const max = Number(maxDraft) || 100000;
    setCategory(categoryDraft);
    setMinPrice(Math.min(min, max));
    setMaxPrice(Math.max(min, max));
    setCurrentPage(1);
  };

  const clearFilters = () => {
    setCategoryDraft("All");
    setCategory("All");
    setMinDraft("30");
    setMaxDraft("1000");
    setMinPrice(30);
    setMaxPrice(1000);
    setSortBy("top-rating");
    setCurrentPage(1);
  };

  const visibleProducts = useMemo(() => {
    const filtered = products.filter((product) => {
      const price = toNumberPrice(product.price);
      const categoryMatch = category === "All" || product.category === category;
      return categoryMatch && price >= minPrice && price <= maxPrice;
    });

    if (sortBy === "price-low") {
      return [...filtered].sort((a, b) => toNumberPrice(a.price) - toNumberPrice(b.price));
    }
    if (sortBy === "price-high") {
      return [...filtered].sort((a, b) => toNumberPrice(b.price) - toNumberPrice(a.price));
    }
    if (sortBy === "name") {
      return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
    }
    return filtered;
  }, [products, category, minPrice, maxPrice, sortBy]);

  const totalPages = Math.max(1, Math.ceil(visibleProducts.length / PAGE_SIZE));
  const activePage = Math.min(currentPage, totalPages);

  const pagedProducts = useMemo(() => {
    const start = (activePage - 1) * PAGE_SIZE;
    return visibleProducts.slice(start, start + PAGE_SIZE);
  }, [visibleProducts, activePage, PAGE_SIZE]);

  const resultStart = visibleProducts.length === 0 ? 0 : (activePage - 1) * PAGE_SIZE + 1;
  const resultEnd = Math.min(activePage * PAGE_SIZE, visibleProducts.length);

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
            <p className="text-base font-bold text-[#8f9195]">Price : ${minPrice} - ${maxPrice}</p>
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
              <div key={item.name} className="flex items-center gap-4 border-b border-black/25 pb-4">
                <div
                  className="h-24 w-24 shrink-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${item.imageUrl})` }}
                  aria-hidden="true"
                />
                <div>
                  <p className="text-lg font-bold text-[var(--deep)]">{item.name}</p>
                  <p className="text-2xl font-bold text-[var(--deep)]">{item.price}</p>
                </div>
              </div>
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
            Showing {String(resultStart).padStart(2, "0")} - {String(resultEnd).padStart(2, "0")} Of {String(visibleProducts.length).padStart(2, "0")} Results
          </p>
          <ShopSelector
            ariaLabel="Sort products"
            value={sortBy}
            onChange={(value) => {
              setSortBy(value);
              setCurrentPage(1);
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
          {pagedProducts.map((product) => (
            <Link key={product.id} href={`/shop-details/${product.id}`} className="block">
              <ProductCard
                name={product.name}
                price={product.price}
                category={product.category}
                imageUrl={product.imageUrl}
                compact
              />
            </Link>
          ))}
        </div>

        <ShopPagination
          currentPage={activePage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(Math.min(Math.max(1, page), totalPages))}
        />
      </div>
    </section>
  );
}