import { ShopCatalog } from "@/components/shop/ShopCatalog";
import { shopProducts } from "@/data/shopProducts";

const products = shopProducts;

const latestProducts = [
  {
    name: "Ear Ring",
    price: "$30.00",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/ear_rings1.png",
  },
  {
    name: "Ear Rings",
    price: "$22.00",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/5.jpeg",
  },
  {
    name: "Bracelate",
    price: "$18.00",
    imageUrl: "https://jewellery-bay-two.vercel.app/assets/our_image/client_products/bracelet1.png",
  },
];

const instagramImages = [
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/1.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/2.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/3.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/4.jpeg",
];

export default function ShopPage() {
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

      <ShopCatalog products={products} latestProducts={latestProducts} instagramImages={instagramImages} />

    </main>
  );
}
