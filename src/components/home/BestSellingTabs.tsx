"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/components/shared/ProductImage";
import { useTranslation } from "@/utils/i18n";
import type { ProductCardModel } from "@/services/products/product.types";

type BestSellingTabsProps = {
    products: ProductCardModel[];
    categories: string[];
};

export function BestSellingTabs({
    products,
    categories,
}: BestSellingTabsProps) {
    const { t, localizeHref } = useTranslation();
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
                        {t("home.findNewIn")}
                    </p>
                    <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                        {t("home.topTrending")}
                    </h2>
                </div>
                <Link
                    href={localizeHref("/shop")}
                    className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold underline decoration-[1px] underline-offset-[6px] transition hover:text-[#a8862c]"
                >
                    {t("home.viewAllPieces")}
                    <ArrowRight
                        size={18}
                        className="transition group-hover:translate-x-1"
                    />
                </Link>
            </div>

            <div
                role="tablist"
                aria-label="Filter products by category"
                className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3 border-b border-deep/15 pb-3 sm:gap-x-6"
            >
                {tabNames.map((tab, idx) => {
                    const active = tab === activeTab;
                    const displayName = tab === "All" ? t("categories.all") : (t(`categories.${tab.toLowerCase()}`) || tab);
                    return (
                        <div key={tab} className="flex items-center gap-x-4 sm:gap-x-6">
                            {idx > 0 && <span className="text-deep/25 font-light" aria-hidden="true">•</span>}
                            <button
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
                                {displayName}
                            </button>
                        </div>
                    );
                })}
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                {visibleProducts.slice(0, 8).map((product) => (
                    <Link
                        key={product.id}
                        href={localizeHref(`/shop-details/${product.slug}`)}
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
                                    {t(`categories.${product.category.toLowerCase()}`) || product.category}
                                </p>
                            ) : null}
                            <p className="font-jost mt-2 text-md font-semibold tracking-[0.04em] text-[#111]">
                                {product.title}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link
                    href={localizeHref("/shop")}
                    className="font-jost inline-flex items-center justify-center border border-deep/40 px-12 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
                >
                    {t("home.viewAllPieces")}
                </Link>
            </div>
        </section>
    );
}
