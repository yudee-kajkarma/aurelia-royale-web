import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { getAllProducts, toProductCardModel } from "@/services/products/product.service";

const instagramImages = [
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/1.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/2.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/3.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/4.jpeg",
];

export default async function ShopPage() {
  const productCards = await getAllProducts()
    .then((products) => products.map(toProductCardModel))
    .catch(() => []);

  const latestProducts = productCards.slice(0, 3);

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
              <h1 className="display-font text-6xl font-semibold uppercase text-white sm:text-7xl">Our Products</h1>
              <p className="mt-2 text-sm font-bold uppercase tracking-[0.15em] text-[var(--gold)]">
                Home <span className="text-[var(--gold)]">&gt;</span> <span className="text-white">Our Shop</span>
              </p>
            </div>
          </div>
        </div>
        <div className="h-3 [background:radial-gradient(circle,#0e2230_3px,transparent_4px)] [background-size:22px_100%]" />
      </section>

      <ShopCatalog products={productCards} latestProducts={latestProducts} instagramImages={instagramImages} />

    </main>
  );
}
