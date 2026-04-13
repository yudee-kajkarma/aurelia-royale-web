"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductCard } from "@/components/shared/ProductCard";
import type { ProductCardModel } from "@/services/products/product.types";

type BestSellingTabsProps = {
  products: ProductCardModel[];
};

export function BestSellingTabs({ products }: BestSellingTabsProps) {
  const tabNames = useMemo(() => ["All", ...Array.from(new Set(products.map((item) => item.category))).slice(0, 5)], [products]);
  const [activeTab, setActiveTab] = useState(tabNames[0] ?? "All");

  const visibleProducts = activeTab === "All" ? products : products.filter((item) => item.category === activeTab);

  return (
    <section className="mt-24">
      <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Best Selling</p>
      <h2 className="display-font mt-3 text-center text-5xl uppercase text-[var(--deep)]">Signature Collection</h2>

      <div className="mx-auto mt-8 grid w-full max-w-[560px] grid-cols-3 border border-[#1b2f2a] bg-[#04100e] sm:grid-cols-6">
        {tabNames.map((tab) => {
          const active = tab === activeTab;
          return (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={
                active
                  ? "border-r border-[#1b2f2a] border-b border-b-[var(--gold)] bg-[#040d0b] px-2 py-3 text-[11px] font-semibold uppercase tracking-[0.04em] text-white"
                  : "border-r border-[#1b2f2a] border-b border-[#1b2f2a] bg-[#050f0d] px-2 py-3 text-[11px] font-semibold uppercase tracking-[0.04em] text-white/75 transition hover:text-white"
              }
            >
              {tab}
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-10 grid max-w-[780px] gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {visibleProducts.slice(0, 8).map((product) => (
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

      <div className="mt-6 flex justify-center">
        <Link href="/shop" className="bg-[var(--deep)] px-10 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#0a2e28]">
          View All
        </Link>
      </div>
    </section>
  );
}
