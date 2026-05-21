"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, X } from "lucide-react";
import { ProductImage } from "@/components/shared/ProductImage";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
// import { DiscountedPrice } from "@/components/shared/DiscountedPrice";
import { ShopPagination } from "@/components/shop/ShopPagination";
import { getCategoryDisplayLabel } from "@/services/products/product-category";
import type {
    ProductCardModel,
    ProductsPagination,
} from "@/services/products/product.types";

type ShopCatalogProps = {
    products: ProductCardModel[];
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
        return [...products].sort(
            (a, b) => toNumberPrice(a.price) - toNumberPrice(b.price),
        );
    }
    if (sortBy === "price-high") {
        return [...products].sort(
            (a, b) => toNumberPrice(b.price) - toNumberPrice(a.price),
        );
    }
    if (sortBy === "name") {
        return [...products].sort((a, b) => a.title.localeCompare(b.title));
    }
    return [...products].sort(
        (a, b) => b.rating - a.rating || b.reviewsCount - a.reviewsCount,
    );
}

export function ShopCatalog({
    products,
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

    const [filterOpen, setFilterOpen] = useState(false);
    const [categoryDraft, setCategoryDraft] = useState(initialCategory);
    const [minDraft, setMinDraft] = useState(String(initialMinPrice));
    const [maxDraft, setMaxDraft] = useState(String(initialMaxPrice));
    const [sortBy] = useState(initialSortBy);

    const visibleProducts = useMemo(
        () => sortProducts(products, sortBy),
        [products, sortBy],
    );

    const resultStart =
        pagination.totalRecords === 0
            ? 0
            : (pagination.currentPage - 1) * pagination.recordsPerPage + 1;
    const resultEnd = Math.min(
        pagination.currentPage * pagination.recordsPerPage,
        pagination.totalRecords,
    );

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

    function applyFilters() {
        const parsedMin = Number(minDraft);
        const parsedMax = Number(maxDraft);
        const min = Number.isFinite(parsedMin) ? parsedMin : minAllowedPrice;
        const max = Number.isFinite(parsedMax) ? parsedMax : maxAllowedPrice;
        const lo = Math.min(min, max);
        const hi = Math.max(min, max);

        setFilterOpen(false);
        updateParams({
            page: "1",
            category: categoryDraft === "All" ? null : categoryDraft,
            minPrice: lo !== minAllowedPrice ? String(lo) : null,
            maxPrice: hi !== maxAllowedPrice ? String(hi) : null,
            sort: sortBy === "top-rating" ? null : sortBy,
        });
    }

    function toggleCategory(value: string) {
        setCategoryDraft((current) => (current === value ? "All" : value));
    }

    const productCategories = categories.filter((c) => c !== "All");

    return (
        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                <p className="font-jost text-sm font-semibold uppercase tracking-[0.2em] text-deep">
                    Showing {String(resultStart).padStart(2, "0")} -{" "}
                    {String(resultEnd).padStart(2, "0")} Of{" "}
                    {String(pagination.totalRecords).padStart(2, "0")} Results
                </p>

                <button
                    type="button"
                    onClick={() => setFilterOpen(true)}
                    className="font-jost inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.28em] text-gold transition hover:text-[#a8862c]"
                >
                    Filter
                    <ChevronDown size={16} strokeWidth={2} />
                </button>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
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
                            <p className="font-jost mt-2 text-md font-semibold uppercase tracking-[0.04em] text-[#111]">
                                {product.title}
                            </p>
                            {/* <DiscountedPrice
                                value={product.price}
                                className="font-jost mt-2 flex text-sm text-[#3b3b3b]"
                                discountedClassName="text-[#3b3b3b]"
                            /> */}
                        </div>
                    </Link>
                ))}
            </div>

            {visibleProducts.length === 0 ? (
                <div className="mt-10 border border-dashed border-deep/15 bg-white/40 px-6 py-10 text-center font-jost text-sm font-semibold uppercase tracking-[0.18em] text-deep/60">
                    No products match the current filters.
                </div>
            ) : null}

            <ShopPagination
                currentPage={pagination.currentPage}
                totalPages={pagination.totalPages}
                onPageChange={(page) =>
                    updateParams({
                        page: String(
                            Math.min(
                                Math.max(1, page),
                                pagination.totalPages,
                            ),
                        ),
                    })
                }
            />

            <AnimatePresence>
                {filterOpen ? (
                    <>
                        <motion.div
                            key="filter-backdrop"
                            className="fixed inset-0 z-40 bg-black/40"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => setFilterOpen(false)}
                        />

                        <motion.aside
                            key="filter-panel"
                            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col overflow-y-auto bg-[#f8f3e7] text-deep"
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{
                                duration: 0.32,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Filter products"
                        >
                            <div className="flex items-center justify-between px-8 pt-8">
                                <h2 className="font-cormorant text-4xl font-medium uppercase tracking-[0.04em] text-deep">
                                    Filter
                                </h2>
                                <button
                                    type="button"
                                    onClick={() => setFilterOpen(false)}
                                    aria-label="Close filter"
                                    className="text-deep transition hover:text-gold"
                                >
                                    <X size={28} strokeWidth={1.5} />
                                </button>
                            </div>

                            <div className="mx-8 mt-3 h-px bg-gold" />

                            <div className="px-8 pb-12 pt-8">
                                <h3 className="font-jost text-base font-semibold uppercase tracking-[0.28em] text-deep">
                                    Product Type
                                </h3>

                                <ul className="mt-6 space-y-4">
                                    {productCategories.map((category) => {
                                        const label =
                                            getCategoryDisplayLabel(category);
                                        const checked =
                                            categoryDraft === category;
                                        return (
                                            <li key={category}>
                                                <label className="flex cursor-pointer items-center gap-4">
                                                    <span
                                                        className={`inline-flex h-6 w-6 shrink-0 items-center justify-center border transition ${
                                                            checked
                                                                ? "border-deep bg-deep text-white"
                                                                : "border-deep/40 bg-transparent text-transparent"
                                                        }`}
                                                        aria-hidden="true"
                                                    >
                                                        <svg
                                                            viewBox="0 0 16 16"
                                                            className="h-3.5 w-3.5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            strokeWidth={2.5}
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                        >
                                                            <polyline points="3 8.5 6.5 12 13 4" />
                                                        </svg>
                                                    </span>
                                                    <input
                                                        type="checkbox"
                                                        className="sr-only"
                                                        checked={checked}
                                                        onChange={() =>
                                                            toggleCategory(
                                                                category,
                                                            )
                                                        }
                                                    />
                                                    <span className="font-jost text-sm font-semibold uppercase tracking-[0.2em] text-deep">
                                                        {label}
                                                    </span>
                                                </label>
                                            </li>
                                        );
                                    })}
                                </ul>

                                <h3 className="font-jost mt-10 text-base font-semibold uppercase tracking-[0.28em] text-deep">
                                    Price
                                </h3>

                                <p className="font-jost mt-3 text-xs uppercase tracking-[0.22em] text-deep/60">
                                    Range: <PriceDisplay value={minAllowedPrice} /> – <PriceDisplay value={maxAllowedPrice} />
                                </p>

                                <div className="mt-4 grid grid-cols-2 gap-3">
                                    <label className="block">
                                        <span className="font-jost text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-deep/55">
                                            Min
                                        </span>
                                        <input
                                            type="number"
                                            inputMode="numeric"
                                            min={minAllowedPrice}
                                            max={maxAllowedPrice}
                                            value={minDraft}
                                            onChange={(event) =>
                                                setMinDraft(event.target.value)
                                            }
                                            placeholder={String(minAllowedPrice)}
                                            className="font-jost mt-1.5 h-12 w-full border border-gold bg-transparent px-3 text-sm font-semibold text-deep placeholder:text-deep/40 focus:outline-none focus:ring-1 focus:ring-gold"
                                        />
                                    </label>
                                    <label className="block">
                                        <span className="font-jost text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-deep/55">
                                            Max
                                        </span>
                                        <input
                                            type="number"
                                            inputMode="numeric"
                                            min={minAllowedPrice}
                                            max={maxAllowedPrice}
                                            value={maxDraft}
                                            onChange={(event) =>
                                                setMaxDraft(event.target.value)
                                            }
                                            placeholder={String(maxAllowedPrice)}
                                            className="font-jost mt-1.5 h-12 w-full border border-gold bg-transparent px-3 text-sm font-semibold text-deep placeholder:text-deep/40 focus:outline-none focus:ring-1 focus:ring-gold"
                                        />
                                    </label>
                                </div>

                                <div className="mt-10 flex justify-center">
                                    <button
                                        type="button"
                                        onClick={applyFilters}
                                        className="font-jost inline-flex items-center justify-center border-2 border-deep bg-deep px-12 py-4 text-xs font-semibold uppercase tracking-[0.32em] text-gold transition hover:bg-[#0a2e28]"
                                    >
                                        View Results
                                    </button>
                                </div>
                            </div>
                        </motion.aside>
                    </>
                ) : null}
            </AnimatePresence>
        </section>
    );
}
