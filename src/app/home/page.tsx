import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { BestSellingTabs } from "@/components/home/BestSellingTabs";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { ProductCard } from "@/components/shared/ProductCard";
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
  const categoryTiles = getPrimaryShopCategories(filterOptions.categories).map((category) => ({
    name: category,
    label: getCategoryDisplayLabel(category),
    imageUrl: getCategoryImage(category),
  }));

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-7xl overflow-x-clip px-4 py-6 sm:px-6 sm:py-10">
        <section className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Find New-In</p>
          <h2 className="display-font mt-2 text-5xl uppercase text-[var(--deep)] sm:text-6xl">Top Trending</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.title}
                price={product.price}
                productId={product.id}
                href={`/shop-details/${product.slug}`}
                category={product.category}
                imageUrl={product.imageUrl}
                compact
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <Link href="/shop" className="bg-[var(--deep)] px-10 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:bg-[#0a2e28]">
              View All
            </Link>
          </div>
        </section>

        <section className="mt-20">
          <p className="text-center text-xs font-bold uppercase tracking-[0.35em] text-[var(--gold)]">Our Categories</p>
          <h2 className="display-font mt-3 text-center text-5xl uppercase text-[var(--deep)]">Shop By Category</h2>

          <div className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categoryTiles.map((category) => (
              <Link key={category.name} href={`/shop?category=${encodeURIComponent(category.name)}`} className="group relative block h-56 overflow-hidden bg-[#0d1f1a] sm:h-60">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.imageUrl})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/35" />

                <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex justify-center translate-y-[140%] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="display-font bg-black/45 px-5 py-2 text-3xl uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                    {category.label}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <BestSellingTabs products={products} categories={filterOptions.categories} />
      </div>

      <TestimonialSlider />

      <NewsletterSection />

     
    </>
  );
}
