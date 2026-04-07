"use client";

import Link from "next/link";
import { useState } from "react";
import { ProductCard } from "@/components/shared/ProductCard";
import { shopProducts } from "@/data/shopProducts";

const tabNames = ["Rings", "Bracelet", "Ear Rings", "Necklace", "Pendant", "Watches"];

const baseProducts = shopProducts;

export function BestSellingTabs() {
  const [activeTab, setActiveTab] = useState(tabNames[0]);
  const products =
    activeTab === "Rings"
      ? baseProducts
      : baseProducts.filter((item) => item.category.toLowerCase() === activeTab.toLowerCase());

  return (
    <section className="mt-24">
      <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Best Selling</p>
      <h2 className="display-font mt-3 text-center text-5xl uppercase text-[var(--deep)]">Graceful Ear Drops</h2>

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
        {products.map((product) => (
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

      <div className="mt-6 flex justify-center">
        <Link href="/shop" className="bg-[var(--deep)] px-10 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#0a2e28]">
          View All
        </Link>
      </div>
    </section>
  );
}
