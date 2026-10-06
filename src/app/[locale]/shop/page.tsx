import type { Metadata } from "next";
import { ShopCatalog } from "@/components/shop/ShopCatalog";
import {
    getCategoryLabelKey,
    getPrimaryShopCategories,
    resolveCategoryValue,
} from "@/services/products/product-category";
import {
    getAllProductFilters,
    getProducts,
    toProductCardModel,
} from "@/services/products/product.service";

// Minimal, non-translated fallback used only at this compile-fix call site
// (this page's own string extraction is owned by a later i18n slice).
// `getCategoryLabelKey` now returns a lowercase message key (e.g.
// "bracelets") instead of the old English display label, so this
// reconstructs the same title-cased text the key previously carried.
function titleCaseCategoryLabel(category: string) {
    const key = getCategoryLabelKey(category);
    return key
        .split(/\s+/)
        .filter(Boolean)
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

type ShopPageProps = {
    searchParams: Promise<{
        page?: string;
        category?: string;
        minPrice?: string;
        maxPrice?: string;
        sort?: string;
    }>;
};

export async function generateMetadata({
    searchParams,
}: ShopPageProps): Promise<Metadata> {
    const params = await searchParams;
    const category = params.category;

    if (category) {
        const label = titleCaseCategoryLabel(category);
        return {
            title: `${label} Jewelry`,
            description: `Shop Aurelia Royale ${label.toLowerCase()} — fine lab-grown diamond ${label.toLowerCase()} crafted for timeless, sustainable elegance.`,
            alternates: {
                canonical: `/shop/?category=${encodeURIComponent(category)}`,
            },
        };
    }

    return {
        title: "Shop Fine Jewelry",
        description:
            "Browse the full Aurelia Royale collection of lab-grown diamond rings, earrings, necklaces, bracelets, pendants and sets.",
        alternates: { canonical: "/shop/" },
    };
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
                        {resolvedCategory && resolvedCategory !== "All"
                            ? `${titleCaseCategoryLabel(resolvedCategory)} Collection`
                            : "Fine Lab-Grown Diamond Jewellery"}
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
