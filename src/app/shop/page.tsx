import { Metadata } from "next";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import {
    getPrimaryShopCategories,
    resolveCategoryValue,
} from "@/services/products/product-category";
import {
    getAllProductFilters,
    getProducts,
    toProductCardModel,
} from "@/services/products/product.service";

type ShopPageProps = {
    searchParams: Promise<{
        page?: string;
        category?: string;
        minPrice?: string;
        maxPrice?: string;
        sort?: string;
        locale?: string;
    }>;
};

export const metadataEn: Metadata = {
  title: "Shop Luxury Jewellery - Aurelia Royale",
  description: "Explore our collection of fine lab-grown diamond rings, earrings, necklaces, and bracelets.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/shop/",
  },
};

export const metadataEs: Metadata = {
  title: "Tienda - Aurelia Royale",
  description: "Explore nuestra colección de finos anillos, pendientes, collares y pulseras de diamantes cultivados en laboratorio.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/es/shop/",
  },
};

export const metadataFr: Metadata = {
  title: "Boutique - Aurelia Royale",
  description: "Explorez notre collection de bagues, boucles d'oreilles, colliers et bracelets en diamants de laboratoire.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/fr/shop/",
  },
};

export const metadataDe: Metadata = {
  title: "Luxusschmuck Kaufen - Aurelia Royale",
  description: "Entdecken Sie unsere Kollektion feiner Ringe, Ohrringe, Halsketten und Armbänder mit im Labor gezüchteten Diamanten.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/de/shop/",
  },
};

export const metadataIt: Metadata = {
  title: "Acquista Gioielli di Lusso - Aurelia Royale",
  description: "Esplora la nostra collezione di raffinati anelli, orecchini, collane e bracciali con diamanti coltivati in laboratorio.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/it/shop/",
  },
};

export const metadataNl: Metadata = {
  title: "Luxe Juwelen Shoppen - Aurelia Royale",
  description: "Ontdek onze collectie van fijne ringen, oorbellen, kettingen en armbanden met in het laboratorium gekweekte diamanten.",
  alternates: {
    canonical: "https://www.aureliaroyale.com/nl/shop/",
  },
};

export async function generateMetadata({ searchParams }: ShopPageProps): Promise<Metadata> {
  const params = await searchParams;
  const locale = params.locale;
  if (locale === "it") return metadataIt;
  if (locale === "de") return metadataDe;
  if (locale === "nl") return metadataNl;
  if (locale === "fr") return metadataFr;
  if (locale === "es") return metadataEs;
  return metadataEn;
}

export default async function ShopPage({ searchParams }: ShopPageProps) {
    const params = await searchParams;
    const page = Math.max(1, Number(params.page) || 1);
    const selectedSort = params.sort ?? "top-rating";
    const filterOptions = await getAllProductFilters();
    const resolvedCategory = resolveCategoryValue(
        params.category,
        filterOptions.categories,
    );
    const selectedMinPrice = params.minPrice
        ? Number(params.minPrice)
        : filterOptions.priceRange.min;
    const selectedMaxPrice = params.maxPrice
        ? Number(params.maxPrice)
        : filterOptions.priceRange.max;
    const selectedCategory = resolvedCategory ?? "All";

    const result = await getProducts({
        page,
        limit: 8,
        category: resolvedCategory ?? undefined,
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
    const categories = [
        "All",
        ...getPrimaryShopCategories(filterOptions.categories),
    ];

    return (
        <main className="min-h-screen overflow-x-clip bg-background">
            <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[#EDE8DF]">
                <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-24 sm:py-28 ">
                    <h1 className="font-cormorant text-5xl font-medium text-deep sm:text-6xl md:text-7xl capitalize">
                        SHOP
                    </h1>
                </div>
            </section>

            <ShopCatalog
                products={productCards}
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
