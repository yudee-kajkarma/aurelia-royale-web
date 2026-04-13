import { ShopCatalog } from "@/components/shop/ShopCatalog";
import {
  getAllProductFilters,
  getProducts,
  toProductCardModel,
} from "@/services/products/product.service";

const instagramImages = [
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/1.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/2.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/3.jpeg",
  "https://jewellery-bay-two.vercel.app/assets/our_image/instagram/4.jpeg",
];

type ShopPageProps = {
  searchParams: Promise<{
    page?: string;
    category?: string;
    minPrice?: string;
    maxPrice?: string;
    sort?: string;
  }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const params = await searchParams;
  const page = Math.max(1, Number(params.page) || 1);
  const selectedSort = params.sort ?? "top-rating";
  const filterOptions = await getAllProductFilters();
  const selectedMinPrice = params.minPrice ? Number(params.minPrice) : filterOptions.priceRange.min;
  const selectedMaxPrice = params.maxPrice ? Number(params.maxPrice) : filterOptions.priceRange.max;
  const selectedCategory = params.category ?? "All";

  const result = await getProducts({
    page,
    limit: 8,
    category: params.category,
    priceMin: selectedMinPrice,
    priceMax: selectedMaxPrice,
  }).catch(() => ({
    products: [],
    pagination: {
      currentPage: page,
      totalPages: 1,
      totalRecords: 0,
      recordsPerPage: 8,
      hasNextPage: false,
      hasPrevPage: false,
    },
    appliedFilters: [],
  }));

  const productCards = result.products.map(toProductCardModel);

  const latestProducts = productCards.slice(0, 3);
  const categories = ["All", ...filterOptions.categories];

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

      <ShopCatalog
        products={productCards}
        latestProducts={latestProducts}
        instagramImages={instagramImages}
        categories={categories}
        pagination={result.pagination}
        initialCategory={selectedCategory}
        initialMinPrice={selectedMinPrice}
        initialMaxPrice={selectedMaxPrice}
        minAllowedPrice={filterOptions.priceRange.min}
        maxAllowedPrice={filterOptions.priceRange.max}
        initialSortBy={selectedSort}
      />

    </main>
  );
}
