"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type CategoryTile = {
    name: string;
    label: string;
    imageUrl: string;
};

type ShopByCategoryProps = {
    categories: CategoryTile[];
};

export function ShopByCategory({ categories }: ShopByCategoryProps) {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);

    const updateScrollState = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;

        const { scrollLeft, scrollWidth, clientWidth } = track;
        setCanScrollLeft(scrollLeft > 4);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
    }, []);

    useEffect(() => {
        updateScrollState();
        const track = trackRef.current;
        if (!track) return;

        track.addEventListener("scroll", updateScrollState, { passive: true });
        window.addEventListener("resize", updateScrollState);
        return () => {
            track.removeEventListener("scroll", updateScrollState);
            window.removeEventListener("resize", updateScrollState);
        };
    }, [updateScrollState, categories.length]);

    function scrollByCards(direction: 1 | -1) {
        const track = trackRef.current;
        if (!track) return;

        const card = track.querySelector<HTMLElement>("[data-category-card]");
        const step = card
            ? card.getBoundingClientRect().width + 24
            : track.clientWidth * 0.8;

        track.scrollBy({ left: step * direction, behavior: "smooth" });
    }

    if (categories.length === 0) {
        return null;
    }

    return (
        <section className="mt-20 py-20 bg-[#EDE8DF]  ">
            <div className="max-w-7xl mx-auto ">
                <div className="mb-12 px-1 ">
                    <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                        <span
                            className="inline-block h-px w-8 bg-gold"
                            aria-hidden="true"
                        />
                        Our Categories
                    </p>
                    <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                        Shop By Category
                    </h2>
                </div>

                <div className="relative">
                    <button
                        type="button"
                        onClick={() => scrollByCards(-1)}
                        aria-label="Scroll categories left"
                        disabled={!canScrollLeft}
                        className="absolute -left-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-gold transition hover:text-white disabled:cursor-not-allowed sm:-left-6 sm:h-12 sm:w-12 lg:-left-10"
                    >
                        <ChevronLeft size={20} strokeWidth={2} />
                    </button>

                    <button
                        type="button"
                        onClick={() => scrollByCards(1)}
                        aria-label="Scroll categories right"
                        disabled={!canScrollRight}
                        className="absolute -right-3 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full text-gold transition hover:text-white disabled:cursor-not-allowed sm:-right-6 sm:h-12 sm:w-12 lg:-right-10"
                    >
                        <ChevronRight size={20} strokeWidth={2} />
                    </button>

                    <div
                        ref={trackRef}
                        className="flex gap-2 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
                    >
                        {categories.map((category) => (
                            <Link
                                key={category.name}
                                href={`/shop?category=${encodeURIComponent(category.name)}`}
                                data-category-card
                                className="group relative block aspect-[3/4] w-[72%] shrink-0 overflow-hidden bg-[#e9e4d8] sm:w-[44%] md:w-[34%] lg:w-[24%]"
                                aria-label={`Shop ${category.label}`}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                                    style={{
                                        backgroundImage: `url(${category.imageUrl})`,
                                    }}
                                    aria-hidden="true"
                                />
                                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/25" />
                                <div className="pointer-events-none absolute inset-x-0 bottom-6 z-10 flex justify-center opacity-0 transition duration-500 group-hover:opacity-100">
                                    <span className="font-cormorant bg-black/45 px-5 py-2 text-2xl uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                                        {category.label}
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
