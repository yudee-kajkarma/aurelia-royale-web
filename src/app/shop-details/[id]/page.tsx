import Link from "next/link";
import { notFound } from "next/navigation";
import { getShopProductById, shopProducts } from "@/data/shopProducts";

export function generateStaticParams() {
  return shopProducts.map((product) => ({
    id: product.id,
  }));
}

type ShopDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ShopDetailsByIdPage({ params }: ShopDetailsPageProps) {
  const { id } = await params;
  const product = getShopProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = shopProducts.filter((item) => item.id !== product.id).slice(0, 4);

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
              <h1 className="display-font text-6xl font-semibold uppercase text-white sm:text-7xl">Products Details</h1>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)]">
                Home <span className="text-[var(--gold)]">&gt;</span> <span className="text-white">Shop Details</span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-3 [background:radial-gradient(circle,#0e2230_3px,transparent_4px)] [background-size:22px_100%]" />
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-20 sm:px-8 lg:grid-cols-[1.15fr_1fr]">
        <div className="grid grid-cols-[120px_1fr] gap-4">
          <div className="space-y-4">
            {product.galleryImages.map((imageUrl, index) => (
              <button key={`${product.id}-${index}`} className="block h-24 w-full overflow-hidden border border-black/15 bg-[#0f1420]">
                <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${imageUrl})` }} aria-hidden="true" />
              </button>
            ))}
          </div>

          <div className="h-[640px] border border-black/15 bg-[#0f1420]">
            <div className="h-full w-full bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${product.imageUrl})` }} aria-hidden="true" />
          </div>
        </div>

        <div>
          <p className="text-2xl font-bold text-[var(--gold)]">★★★★★ <span className="ml-3 text-[#8f9195]">| {product.reviews} Review</span></p>
          <h2 className="display-font mt-4 text-xl text-[var(--deep)]">{product.category}</h2>
          <p className="mt-6 text-xl font-semibold text-[var(--deep)]">
            {product.price}.00 <span className="mx-3 text-[var(--gold)]">•</span> <span className="text-[var(--gold)]">{product.inStock ? "IN STOCK" : "OUT OF STOCK"}</span>
          </p>
          <p className="mt-8 max-w-2xl text-[1.1rem] font-semibold leading-10 text-[#8f9195]">{product.description}</p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            <button className="h-16 bg-[#101723] text-xl font-extrabold uppercase tracking-[0.04em] text-white">Add To Cart</button>
            <button className="h-16 bg-[#101723] text-xl font-extrabold uppercase tracking-[0.04em] text-white">Buy Now</button>
          </div>

          <button className="mt-8 text-xl font-extrabold uppercase tracking-[0.06em] text-[#a5a7ab]">♡ Add To Wishlist</button>
          <div className="mt-8 h-1 w-full bg-[#20252f]" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-18 sm:px-8">
        <div className="border border-[#20252f]">
          <div className="flex flex-wrap items-center gap-12 border-b border-[#20252f] px-6 py-6 text-xl font-extrabold uppercase">
            <button className="text-[var(--gold)]">Product Details</button>
            <button className="text-[#a6a7ab]">Additional Information</button>
            <button className="text-[#a6a7ab]">Review (0)</button>
          </div>

          <div className="bg-[#0f1623] px-8 py-12 text-[#8f9195] sm:px-12">
            <h3 className="text-xl font-bold text-white">Why Choose Product?</h3>
            <p className="mt-8 max-w-6xl text-[1.2rem] font-semibold leading-10">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, dolore magna eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute iruremod thats dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p className="mt-8 text-[1.2rem] font-semibold">✻ Creat by cotton fibric with soft and smooth</p>
          </div>
        </div>
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
          {relatedProducts.map((item, index) => (
            <Link key={item.id} href={`/shop-details/${item.id}`} className="relative block border border-black/5 bg-[#f7f7f7] p-4">
              {index === 1 ? (
                <span className="absolute left-4 top-4 bg-[var(--gold)] px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-white">New</span>
              ) : null}
              <div className="h-72 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.imageUrl})` }} aria-hidden="true" />
              <p className="mt-4 text-center text-xl font-semibold text-[var(--deep)]">{item.category}</p>
              <p className="mt-2 text-center text-xl font-bold text-[var(--gold)]">{item.price}.00</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}