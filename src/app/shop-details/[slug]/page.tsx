import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { ProductImage } from "@/components/shared/ProductImage";
import { ProductPurchasePanel } from "../../../components/shop/ProductPurchasePanel";
import { WishlistToggleButton } from "@/components/wishlist/WishlistToggleButton";
import { ProductDetailsTabs } from "@/components/shop/ProductDetailsTabs";
import { ProductMediaGallery } from "@/components/shop/ProductMediaGallery";
import {
    getProductBySlug,
    getProductCategory,
    toProductCardModel,
} from "@/services/products/product.service";
import { reviewService } from "@/services/reviews/review.service";

type ShopDetailsPageProps = {
    params: Promise<{ slug: string }>;
};

export default async function ShopDetailsBySlugPage({
    params,
}: ShopDetailsPageProps) {
    const { slug } = await params;
    const response = await getProductBySlug(slug);

    if (!response) {
        notFound();
    }

    const { product, recommendedProducts } = response;
    const reviewsData = await reviewService
        .getPublicReviews(product.id)
        .catch(() => ({
            reviews: [],
            pagination: {
                current: 1,
                total: 1,
                limit: 10,
                totalReviews: product.reviews_count,
            },
        }));
    const galleryImages =
        product.images.length > 0
            ? [...product.images].sort(
                  (left, right) => left.position - right.position,
              )
            : [{ _id: product.id, src: product.thumbnail, position: 1 }];
    const relatedProducts = recommendedProducts
        .map(toProductCardModel)
        .slice(0, 4);
    const reviewCount = reviewsData.pagination.totalReviews;
    const averageRating =
        reviewCount > 0
            ? reviewsData.reviews.reduce(
                  (total, review) => total + review.rating,
                  0,
              ) / reviewCount
            : product.rating;

    const specs = [
        { label: "SKU", value: product.sku },
        { label: "Certificate", value: product.certificate },
        { label: "Origin", value: product.origin },
        { label: "Measurement", value: product.measurement },
    ];

    return (
        <main className="min-h-screen overflow-x-clip bg-background">
            <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#EDE8DF]">
                <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-3 px-6 py-20 sm:py-24 md:py-28">
                    <h1 className="font-cormorant text-5xl font-medium text-deep sm:text-6xl md:text-7xl">
                        Product Details
                    </h1>
                    <p className="font-jost text-xs font-semibold uppercase tracking-[0.28em] text-deep/55">
                        <Link href="/" className="transition hover:text-gold">
                            Home
                        </Link>
                        <span className="mx-2 text-gold">/</span>
                        <Link
                            href="/shop"
                            className="transition hover:text-gold"
                        >
                            Shop
                        </Link>
                        <span className="mx-2 text-gold">/</span>
                        <span className="text-deep">Details</span>
                    </p>
                </div>
            </section>

            <section className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-16 lg:py-24">
                <ProductMediaGallery
                    title={product.title}
                    images={galleryImages.map((image) => ({
                        id: image._id,
                        src: image.src,
                        position: image.position,
                    }))}
                />

                <div>
                    {reviewCount > 0 || averageRating > 0 ? (
                        <div className="flex items-center gap-3">
                            <div
                                className="flex items-center gap-0.5 text-gold"
                                aria-label={`Rated ${averageRating.toFixed(1)} out of 5`}
                            >
                                {Array.from({ length: 5 }).map((_, i) => {
                                    const filled =
                                        i < Math.round(averageRating);
                                    return (
                                        <Star
                                            key={i}
                                            size={16}
                                            fill={
                                                filled
                                                    ? "currentColor"
                                                    : "none"
                                            }
                                            strokeWidth={1.5}
                                        />
                                    );
                                })}
                            </div>
                            <p className="font-jost text-[0.7rem] font-semibold uppercase tracking-[0.24em] text-deep/60">
                                {averageRating.toFixed(1)}
                                <span className="mx-2 text-deep/30">·</span>
                                {reviewCount} Review
                                {reviewCount === 1 ? "" : "s"}
                            </p>
                        </div>
                    ) : (
                        <p className="font-jost text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-gold">
                            New Arrival
                        </p>
                    )}

                    <p className="font-jost mt-6 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-[#6b6b6b]">
                        {getProductCategory(product)}
                        {product.vendor ? (
                            <>
                                <span className="mx-2 text-deep/30">·</span>
                                {product.vendor}
                            </>
                        ) : null}
                    </p>

                    <h2 className="font-cormorant mt-3 text-4xl font-medium uppercase tracking-[0.02em] text-deep sm:text-5xl">
                        {product.title}
                    </h2>

                    <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
                        <PriceDisplay
                            value={product.price}
                            className="font-cormorant text-3xl font-medium text-deep"
                        />
                        <span
                            className={`font-jost inline-flex items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.28em] ${
                                product.available
                                    ? "text-gold"
                                    : "text-red-700/80"
                            }`}
                        >
                            <span
                                className={`inline-block h-1.5 w-1.5 rounded-full ${
                                    product.available
                                        ? "bg-gold"
                                        : "bg-red-700/80"
                                }`}
                                aria-hidden="true"
                            />
                            {product.available ? "In Stock" : "Out of Stock"}
                        </span>
                    </div>

                    <p className="font-jost mt-8 max-w-xl text-[0.95rem] leading-7 text-deep/75">
                        {product.description}
                    </p>

                    <dl className="mt-10 grid gap-6 border-t border-deep/10 pt-8 sm:grid-cols-2">
                        {specs.map((spec) => (
                            <div key={spec.label}>
                                <dt className="font-jost text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-deep/55">
                                    {spec.label}
                                </dt>
                                <dd className="font-jost mt-2 text-sm font-semibold text-deep">
                                    {spec.value || "—"}
                                </dd>
                            </div>
                        ))}
                    </dl>

                    <ProductPurchasePanel productId={product.id} />

                    <WishlistToggleButton
                        productId={product.id}
                        className="font-jost mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-deep/60 transition hover:text-gold disabled:opacity-60"
                    />
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20">
                <ProductDetailsTabs
                    product={product}
                    initialReviews={reviewsData.reviews}
                />
            </section>

            {relatedProducts.length > 0 ? (
                <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 sm:pb-28">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <p className="flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                                <span
                                    className="inline-block h-px w-8 bg-gold"
                                    aria-hidden="true"
                                />
                                Highly Recommend
                            </p>
                            <h2 className="font-cormorant mt-4 text-5xl font-medium text-deep sm:text-6xl">
                                Top Related Products
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
                        {relatedProducts.map((item) => (
                            <Link
                                key={item.id}
                                href={`/shop-details/${item.slug}`}
                                className="group block"
                            >
                                <div className="aspect-square overflow-hidden bg-[#f3eee5]">
                                    <ProductImage
                                        src={item.imageUrl}
                                        alt={item.title}
                                        className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.03]"
                                    />
                                </div>
                                <div className="mt-5">
                                    {item.category ? (
                                        <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-[#6b6b6b]">
                                            {item.category}
                                        </p>
                                    ) : null}
                                    <p className="font-jost mt-2 text-lg font-semibold uppercase tracking-[0.04em] text-[#111]">
                                        {item.title}
                                    </p>
                                    <PriceDisplay
                                        value={item.price}
                                        className="font-jost mt-2 block text-sm text-[#3b3b3b]"
                                    />
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            ) : null}
        </main>
    );
}
