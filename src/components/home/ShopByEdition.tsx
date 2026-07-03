"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ProductImage } from "@/components/shared/ProductImage";
import type { ProductCardModel } from "@/services/products/product.types";

type Edition = {
    id: string;
    tag: string;
    title: string;
    description: string;
};

const EDITIONS: Edition[] = [
    {
        id: "classic",
        tag: "Timeless",
        title: "Classic Edition",
        description:
            "Essential Diamond Jewelry Designed For Daily Brilliance. Timeless Elegance Meets Modern Sustainability.",
    },
    {
        id: "rare",
        tag: "Exclusive",
        title: "Rare Edition",
        description:
            "Masterpieces Featuring Our Most Unique, Individually Grown Stones. Distinctly Rare, Uniquely Yours.",
    },
    {
        id: "limited",
        tag: "Signature",
        title: "Limited Edition",
        description:
            "Curated High-Jewelry Concepts, Strictly Numbered. Once Sold Out, These Diamond Designs Will Never Return.",
    },
];

const ALL_CATEGORY = "ALL";

// Canonical sub-categories shown in the filter row. Matched against each
// product's free-form `category` string with a case-insensitive substring
// test, so "SET" still catches values like "NECKLACE + EARRING (SET)".
const CATEGORIES = [
    ALL_CATEGORY,
    "BRACELET",
    "EARRING",
    "NECKLACE",
    "PENDANT",
    "RING",
    "SET",
] as const;

type ShopByEditionProps = {
    products: ProductCardModel[];
};

export function ShopByEdition({ products }: ShopByEditionProps) {
    const [activeId, setActiveId] = useState(EDITIONS[0].id);
    const [activeCategory, setActiveCategory] = useState<string>(ALL_CATEGORY);

    const activeIndex = Math.max(
        0,
        EDITIONS.findIndex((edition) => edition.id === activeId),
    );

    const categoryProducts = useMemo(() => {
        if (activeCategory === ALL_CATEGORY) return products;
        const needle = activeCategory.toLowerCase();
        return products.filter((product) =>
            product.category?.toLowerCase().includes(needle),
        );
    }, [products, activeCategory]);

    // TODO: replace with edition-specific products once the backend API exists.
    // For now we rotate the existing catalogue so each edition shows a distinct set.
    const visibleProducts = useMemo(() => {
        if (categoryProducts.length === 0) return [];
        const start = (activeIndex * 4) % categoryProducts.length;
        const rotated = [
            ...categoryProducts.slice(start),
            ...categoryProducts.slice(0, start),
        ];
        return rotated.slice(0, 4);
    }, [categoryProducts, activeIndex]);

    return (
        <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10">
            <div className="px-1">
                <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                    <span
                        className="inline-block h-px w-8 bg-gold"
                        aria-hidden="true"
                    />
                    Curated For You
                </p>
                <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                    Shop By Edition
                </h2>
            </div>

            <div
                role="tablist"
                aria-label="Choose a jewelry edition"
                className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6"
            >
                {EDITIONS.map((edition) => {
                    const active = edition.id === activeId;
                    return (
                        <button
                            key={edition.id}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            onClick={() => setActiveId(edition.id)}
                            className={`group flex flex-col items-start border-[1.5px] p-6 text-left transition duration-300 sm:p-7 ${
                                active
                                    ? "border-gold bg-deep"
                                    : "border-deep bg-transparent hover:bg-gold/10 hover:border-gold"
                            }`}
                        >
                            <span
                                className={`font-jost inline-block border px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.25em] transition duration-300 ${
                                    active
                                        ? "border-gold/70 text-gold"
                                        : "border-gold/50 text-gold"
                                }`}
                            >
                                {edition.tag}
                            </span>
                            <h3
                                className={`font-cormorant mt-5 text-3xl font-medium transition duration-300 sm:text-4xl ${
                                    active ? "text-white" : "text-deep"
                                }`}
                            >
                                {edition.title}
                            </h3>
                            <p
                                className={`font-jost mt-3 text-sm leading-relaxed transition duration-300 ${
                                    active ? "text-[#fdce77]" : "text-[#6b6b6b]"
                                }`}
                            >
                                {edition.description}
                            </p>
                        </button>
                    );
                })}
            </div>

            <div
                role="tablist"
                aria-label="Filter by category"
                className="mt-8 flex flex-wrap gap-2.5 sm:gap-3"
            >
                {CATEGORIES.map((category) => {
                    const active = category === activeCategory;
                    return (
                        <button
                            key={category}
                            type="button"
                            role="tab"
                            aria-selected={active}
                            onClick={() => setActiveCategory(category)}
                            className={`font-jost border px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
                                active
                                    ? "border-deep bg-deep text-white"
                                    : "border-deep/15 bg-transparent text-deep/70 hover:border-gold hover:text-deep"
                            }`}
                        >
                            {category}
                        </button>
                    );
                })}
            </div>

            {visibleProducts.length === 0 ? (
                <p className="font-jost mt-12 text-center text-sm text-[#6b6b6b]">
                    No pieces available in this category yet.
                </p>
            ) : null}

            <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                {visibleProducts.map((product) => (
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
                            <p className="font-jost mt-2 text-md font-semibold tracking-[0.04em] text-[#111]">
                                {product.title}
                            </p>
                            {/* <p className="font-jost mt-2 text-sm text-[#3b3b3b]">
                                {product.price}
                            </p> */}
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 flex justify-center">
                <Link
                    href="/shop"
                    className="font-jost inline-flex items-center justify-center bg-deep px-12 py-4 text-sm font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-deep/90"
                >
                    View All Pieces
                </Link>
            </div>
        </section>
    );
}
