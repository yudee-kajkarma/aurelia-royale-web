import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/cart/AddToCartButton";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { ProductCard } from "@/components/shared/ProductCard";
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

export default async function ShopDetailsBySlugPage({ params }: ShopDetailsPageProps) {
  const { slug } = await params;
  const response = await getProductBySlug(slug);

  if (!response) {
    notFound();
  }

  const { product, recommendedProducts } = response;
  const reviewsData = await reviewService.getPublicReviews(product.id).catch(() => ({
    reviews: [],
    pagination: {
      current: 1,
      total: 1,
      limit: 10,
      totalReviews: product.reviews_count,
    },
  }));
  const galleryImages = product.images.length > 0 ? [...product.images].sort((left, right) => left.position - right.position) : [{ _id: product.id, src: product.thumbnail, position: 1 }];
  const relatedProducts = recommendedProducts.map(toProductCardModel).slice(0, 4);
  const reviewCount = reviewsData.pagination.totalReviews;
  const averageRating = reviewCount > 0
    ? reviewsData.reviews.reduce((total, review) => total + review.rating, 0) / reviewCount
    : product.rating;

  return (
    <main className="min-h-screen overflow-x-clip bg-[var(--background)]">
      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <div
          className="relative h-[320px] bg-cover bg-center"
          style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/our_image/bg.jpg")' }}
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-black/18" />
          <div className="relative mx-auto flex h-full max-w-7xl items-end px-6 pb-12 sm:px-8">
            <div>
              <h1 className="display-font text-6xl font-semibold uppercase text-white sm:text-7xl">Product Details</h1>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)]">
                Home <span className="text-[var(--gold)]">&gt;</span> <span className="text-white">Shop Details</span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-3 [background:radial-gradient(circle,#0e2230_3px,transparent_4px)] [background-size:22px_100%]" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <ProductMediaGallery
          title={product.title}
          images={galleryImages.map((image) => ({
            id: image._id,
            src: image.src,
            position: image.position,
          }))}
        />

        <div>
          <p className="text-2xl font-bold text-[var(--gold)]">
            {averageRating > 0 ? averageRating.toFixed(1) : "New"}
            <span className="ml-3 text-[#8f9195]">| {reviewCount} Review{reviewCount === 1 ? "" : "s"}</span>
          </p>
          <h2 className="display-font mt-4 text-3xl text-[var(--deep)]">{product.title}</h2>
          <p className="mt-3 text-sm font-bold uppercase tracking-[0.12em] text-[#8f9195]">{getProductCategory(product)} by {product.vendor}</p>
          <p className="mt-6 text-xl font-semibold text-[var(--deep)]">
            <PriceDisplay value={product.price} /> <span className="mx-3 text-[var(--gold)]">•</span> <span className="text-[var(--gold)]">{product.available ? "IN STOCK" : "OUT OF STOCK"}</span>
          </p>
          <p className="mt-8 max-w-2xl text-[1.05rem] font-semibold leading-9 text-[#8f9195]">{product.description}</p>

          <div className="mt-8 grid gap-4 border-y border-black/10 py-6 sm:grid-cols-2">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8f9195]">Sku</p>
              <p className="mt-2 text-base font-semibold text-[var(--deep)]">{product.sku}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8f9195]">Certificate</p>
              <p className="mt-2 text-base font-semibold text-[var(--deep)]">{product.certificate}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8f9195]">Origin</p>
              <p className="mt-2 text-base font-semibold text-[var(--deep)]">{product.origin}</p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#8f9195]">Measurement</p>
              <p className="mt-2 text-base font-semibold text-[var(--deep)]">{product.measurement}</p>
            </div>
          </div>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <AddToCartButton productId={product.id} className="h-16 bg-[#101723] text-xl font-extrabold uppercase tracking-[0.04em] text-white" label="Add To Cart" />
            <AddToCartButton productId={product.id} className="h-16 bg-[#101723] text-xl font-extrabold uppercase tracking-[0.04em] text-white" label="Buy Now" redirectToCart />
          </div>

          <WishlistToggleButton productId={product.id} className="mt-8 inline-flex items-center gap-2 text-xl font-extrabold uppercase tracking-[0.06em] text-[#a5a7ab] transition hover:text-[var(--gold)] disabled:opacity-60" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 sm:px-8">
        <ProductDetailsTabs product={product} initialReviews={reviewsData.reviews} />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 sm:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Highly Recommend</p>
        <h2 className="display-font mt-3 text-center text-3xl uppercase text-[var(--deep)]">Top Related Products</h2>
        <div
          className="mx-auto mt-6 h-5 w-40 bg-contain bg-center bg-no-repeat opacity-45"
          style={{ backgroundImage: 'url("https://jewellery-bay-two.vercel.app/assets/img/shapes/title-shape-2.svg")' }}
          aria-hidden="true"
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((item) => (
            <ProductCard
              key={item.id}
              name={item.title}
              price={item.price}
              productId={item.id}
              href={`/shop-details/${item.slug}`}
              category={item.category}
              imageUrl={item.imageUrl}
              compact
            />
          ))}
        </div>
      </section>
    </main>
  );
}