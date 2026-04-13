import Link from "next/link";
import { Hero } from "@/components/home/Hero";
import { BestSellingTabs } from "@/components/home/BestSellingTabs";
import { NewsletterSection } from "@/components/home/NewsletterSection";
import { TestimonialSlider } from "@/components/home/TestimonialSlider";
import { ProductCard } from "@/components/shared/ProductCard";
import { getAllProducts, toProductCardModel } from "@/services/products/product.service";

const categories = [
  {
    name: "Rings",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/ring.webp",
  },
  {
    name: "Necklace Set",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/nacklace.png",
  },
  {
    name: "Earrings",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/ear-ring.webp",
  },
  {
    name: "Bracelets",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/bracelet.webp",
  },
  {
    name: "Watches",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/waches.png",
  },
  {
    name: "Pendant",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/category/webp/necklace.webp",
  },
];

export default async function HomePage() {
  const products = await getAllProducts()
    .then((items) => items.map(toProductCardModel))
    .catch(() => []);

  const featuredProducts = products.slice(0, 4);

  return (
    <>
      <Hero />

      <div className="mx-auto max-w-7xl overflow-x-clip px-4 py-6 sm:px-6 sm:py-10">
        <section className="mt-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--gold)]">Find New-In</p>
          <h2 className="display-font mt-2 text-5xl uppercase text-[var(--deep)] sm:text-6xl">Top Trending</h2>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <Link key={product.id} href={`/shop-details/${product.slug}`} className="block">
                <ProductCard
                  name={product.title}
                  price={product.price}
                  category={product.category}
                  imageUrl={product.imageUrl}
                  compact
                />
              </Link>
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
            {categories.map((category) => (
              <div key={category.name} className="group relative h-56 overflow-hidden bg-[#0d1f1a] sm:h-60">
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${category.imageUrl})` }}
                  aria-hidden="true"
                />
                <div className="absolute inset-0 bg-black/15 transition duration-300 group-hover:bg-black/35" />

                <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex justify-center translate-y-[140%] opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="display-font bg-black/45 px-5 py-2 text-3xl uppercase tracking-[0.08em] text-white backdrop-blur-sm">
                    {category.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <BestSellingTabs products={products} />
      </div>

      <TestimonialSlider />

      <NewsletterSection />

     
    </>
  );
}
