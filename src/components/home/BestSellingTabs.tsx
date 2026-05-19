"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/components/shared/ProductImage";
import { DiscountedPrice } from "@/components/shared/DiscountedPrice";
import type { ProductCardModel } from "@/services/products/product.types";

type BestSellingTabsProps = {
    products: ProductCardModel[];
    categories: string[];
};

export function BestSellingTabs({
    products,
    categories,
}: BestSellingTabsProps) {
    const tabNames = useMemo(() => {
        const availableCategories = categories.filter((category) =>
            products.some((item) => item.category === category),
        );
        return ["All", ...availableCategories];
    }, [categories, products]);

    const [activeTab, setActiveTab] = useState(tabNames[0] ?? "All");

    const visibleProducts =
        activeTab === "All"
            ? products
            : products.filter((item) => item.category === activeTab);

    return (
        <section className="mt-24 mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
            <div className="flex flex-wrap items-end justify-between gap-6">
                <div>
                    <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                        <span
                            className="inline-block h-px w-8 bg-gold"
                            aria-hidden="true"
                        />
                        Best Selling
                    </p>
                    <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                        Signature Collection
                    </h2>
                </div>
                <Link
                    href="/shop"
                    className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold underline decoration-[1px] underline-offset-[6px] transition hover:text-[#a8862c]"
                >
                    View All
                    <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                    />
                </Link>
            </div>

            <div
                role="tablist"
                aria-label="Filter products by category"
                className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-b border-deep/15 pb-3 sm:gap-x-12"
            >
                {tabNames.map((tab) => {
                    const active = tab === activeTab;
                    return (
                        <button
                            key={tab}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            onClick={() => setActiveTab(tab)}
                            className={`font-jost relative -mb-3 pb-3 text-[0.78rem] font-semibold uppercase tracking-[0.22em] transition ${
                                active
                                    ? "text-gold after:absolute after:inset-x-0 after:-bottom-px after:h-[2px] after:bg-gold"
                                    : "text-deep/70 hover:text-deep"
                            }`}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                {visibleProducts.slice(0, 8).map((product) => (
                    <Link
                        key={product.id}
                        href={`/shop-details/${product.slug}`}
                        className="group block"
                    >
                        <div className="aspect-square overflow-hidden bg-[#f3eee5]">
                            <ProductImage
                                src={product.imageUrl}
                                alt={product.title}
                                className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                            />
                        </div>
                        <div className="mt-5">
                            {product.category ? (
                                <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#6b6b6b]">
                                    {product.category}
                                </p>
                            ) : null}
                            <p className="font-jost mt-2 text-lg font-semibold uppercase tracking-[0.04em] text-[#111]">
                                {product.title}
                            </p>
                            <DiscountedPrice
                                value={product.price}
                                className="font-jost mt-2 flex text-sm text-[#3b3b3b]"
                                discountedClassName="text-[#3b3b3b]"
                            />
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link
                    href="/shop"
                    className="font-jost inline-flex items-center justify-center border border-deep/40 px-12 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
                >
                    View All Pieces
                </Link>
            </div>
        </section>
    );
}
