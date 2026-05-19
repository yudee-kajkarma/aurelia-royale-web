import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { BestSellingTabs } from "@/components/home/BestSellingTabs";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { ShopByCategory } from "@/components/home/ShopByCategory";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { ProductImage } from "@/components/shared/ProductImage";
import { DiscountedPrice } from "@/components/shared/DiscountedPrice";
import {
    getAllProductFilters,
    getAllProducts,
    toProductCardModel,
} from "@/services/products/product.service";
import {
    getCategoryDisplayLabel,
    getCategoryImage,
    getPrimaryShopCategories,
} from "@/services/products/product-category";

export default async function HomePage() {
    const [products, filterOptions] = await Promise.all([
        getAllProducts()
            .then((items) => items.map(toProductCardModel))
            .catch(() => []),
        getAllProductFilters().catch(() => ({
            categories: [],
            stoneTypes: [],
            colors: [],
            shapes: [],
            origins: [],
            treatments: [],
            certificates: [],
            measurements: [],
            vendors: [],
            tags: [],
            priceRange: { min: 0, max: 0 },
            ratingRange: { min: 0, max: 0 },
            caratRange: { min: 0, max: 0 },
        })),
    ]);

    const featuredProducts = products.slice(0, 4);
    const categoryTiles = getPrimaryShopCategories(
        filterOptions.categories,
    ).map((category) => ({
        name: category,
        label: getCategoryDisplayLabel(category),
        imageUrl: getCategoryImage(category),
    }));

    return (
        <>
            <Hero />

            <div className=" overflow-x-clip ">
                <section className="mx-auto max-w-7xl mt-14 px-4 py-6 sm:px-6 sm:py-10">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                                <span
                                    className="inline-block h-px w-8 bg-gold"
                                    aria-hidden="true"
                                />
                                Find New In
                            </p>
                            <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                                Top Trending
                            </h2>
                        </div>
                        <Link
                            href="/shop"
                            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.28em] text-gold underline decoration-[1px] underline-offset-[6px] transition hover:text-[#a8862c]"
                        >
                            View All Pieces
                            <ArrowRight
                                size={18}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>
                    </div>

                    <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4 lg:gap-6">
                        {featuredProducts.map((product) => (
                            <Link
                                key={product.id}
                                href={`/shop-details/${product.slug}`}
                                className="group block"
                            >
                                <div className="aspect-square overflow-hidden ">
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
                </section>

                <ShopByCategory categories={categoryTiles} />

                <BestSellingTabs
                    products={products}
                    categories={filterOptions.categories}
                />
            </div>

            <TestimonialSlider />

            <NewsletterSection />
        </>
    );
}
