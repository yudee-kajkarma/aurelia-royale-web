import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Star } from "lucide-react";
// import { DiscountedPrice } from "@/components/shared/DiscountedPrice";
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
    const sortedImages =
        product.images.length > 0
            ? [...product.images].sort(
                  (left, right) => left.position - right.position,
              )
            : [];
    const videoUrl = product.videoUrls?.find(
        (url) => typeof url === "string" && url.trim().length > 0,
    );

    // Gallery order: thumbnail first, then the next 2 images, then the video.
    const galleryItems: Array<
        | { id: string; kind: "image"; src: string }
        | { id: string; kind: "video"; src: string; poster?: string }
    > = [];
    if (product.thumbnail) {
        galleryItems.push({
            id: "thumbnail",
            kind: "image",
            src: product.thumbnail,
        });
    }
    for (const image of sortedImages.slice(0, 2)) {
        galleryItems.push({ id: image._id, kind: "image", src: image.src });
    }
    if (videoUrl) {
        galleryItems.push({
            id: "video",
            kind: "video",
            src: videoUrl,
            poster: product.thumbnail,
        });
    }
    // Fallback so the viewer is never empty (e.g. no thumbnail saved yet).
    if (galleryItems.length === 0 && sortedImages[0]) {
        galleryItems.push({
            id: sortedImages[0]._id,
            kind: "image",
            src: sortedImages[0].src,
        });
    }
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

    // Each row maps an image label/icon to a product field. Rows whose value is
    // missing/blank are filtered out so they never render (per design).
    const productDetails: Array<{
        label: string;
        value: string;
        icon: string;
    }> = [
        {
            label: "Carat",
            value: product.carat ? `${product.carat.toFixed(2)} CT` : "",
            icon: "/icons/diamond-icon.svg",
        },
        {
            label: "Type of Gold",
            value: product.typeOfGold ?? "",
            icon: "/icons/gold-bars-icon.svg",
        },
        {
            label: "Gold Weight",
            value: product.goldWeight ?? "",
            icon: "/icons/gold-weight-icon.svg",
        },
        {
            label: "No. of Diamonds",
            value: product.diamondPcs ? String(product.diamondPcs) : "",
            icon: "/icons/diamonds-count-icon.svg",
        },
        {
            label: "Certificate",
            value: product.certificate ?? "",
            icon: "/icons/cert-icon.svg",
        },
        {
            label: "Measurement",
            value: product.measurement ?? "",
            icon: "/icons/measurement-icon.svg",
        },
        {
            label: "Stock No.",
            value: product.sku ?? "",
            icon: "/icons/stock-tag-icon.svg",
        },
    ].filter((detail) => detail.value.trim().length > 0);

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
                    items={galleryItems}
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
                                                filled ? "currentColor" : "none"
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
                            {/* New Arrival */}
                        </p>
                    )}

                    <p className="font-jost mt-6 flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-gold">
                        <span
                            className="inline-block h-px w-8 bg-gold"
                            aria-hidden="true"
                        />
                        {getProductCategory(product)}
                    </p>

                    <h2 className="font-cormorant mt-3 text-4xl font-medium uppercase tracking-[0.02em] text-deep sm:text-5xl">
                        {product.title}
                    </h2>

                    {/* <div className="mt-6 flex flex-wrap items-baseline gap-x-6 gap-y-3">
                        <DiscountedPrice
                            value={product.price}
                            className="font-cormorant text-3xl font-medium text-deep"
                            originalClassName="text-2xl font-medium text-deep/45 line-through"
                            discountedClassName="text-deep"
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
                    </div> */}

                    <p className="font-jost mt-8 max-w-xl text-[0.95rem] leading-7 text-deep/75">
                        {product.description}
                    </p>

                    {productDetails.length > 0 ? (
                        <div className="mt-12">
                            <h3 className="font-jost text-lg font-medium uppercase tracking-[0.2em] text-deep">
                                Product Details
                            </h3>
                            <div className="mt-3 h-px w-full bg-gold/60 to-transparent" />

                            <dl className="mt-2">
                                {productDetails.map((detail, index) => (
                                    <div key={detail.label}>
                                        {index > 0 ? (
                                            <div className="h-px w-full bg-linear-to-r from-transparent via-deep/15 to-transparent" />
                                        ) : null}
                                        <div className="flex items-center justify-between gap-6 py-3">
                                            <dt className="flex items-center gap-4">
                                                <img
                                                    src={detail.icon}
                                                    alt=""
                                                    aria-hidden="true"
                                                    className="h-6 w-6 shrink-0 object-contain"
                                                />
                                                <span className="font-jost text-[0.95rem] leading-6 text-deep">
                                                    {detail.label}
                                                </span>
                                            </dt>
                                            <dd className="font-jost text-right text-[0.95rem] leading-6 text-deep">
                                                {detail.value}
                                            </dd>
                                        </div>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    ) : null}

                    <ProductPurchasePanel productId={product.id} />

                    <WishlistToggleButton
                        productId={product.id}
                        className="font-jost mt-8 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-deep/60 transition hover:text-gold disabled:opacity-60"
                    />
                </div>
            </section>

            {/* <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 sm:pb-20">
                <ProductDetailsTabs
                    product={product}
                    initialReviews={reviewsData.reviews}
                />
            </section> */}

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
                                    <p className="font-jost mt-2 text-md font-semibold uppercase tracking-[0.04em] text-[#111]">
                                        {item.title}
                                    </p>
                                    {/* <DiscountedPrice
                                        value={item.price}
                                        className="font-jost mt-2 flex text-sm text-[#3b3b3b]"
                                        discountedClassName="text-[#3b3b3b]"
                                    /> */}
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            ) : null}
        </main>
    );
}
