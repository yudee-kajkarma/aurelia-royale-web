import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { assertLocale } from "@/i18n/locale-guard";
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

// Resolves a backend category value to its translated display label via the
// `shopCategories` namespace, falling back to the raw category (interpolated
// into the namespace's `fallback` entry) for anything outside the curated
// `SHOP_CATEGORY_TILES` set.
async function resolveCategoryLabel(locale: string, category: string) {
    const tCategories = await getTranslations({
        locale,
        namespace: "shopCategories",
    });
    const labelKey = getCategoryLabelKey(category);
    return tCategories.has(labelKey)
        ? tCategories(labelKey)
        : tCategories("fallback", { category });
}

type ShopPageProps = {
    params: Promise<{ locale: string }>;
    searchParams: Promise<{
        page?: string;
        category?: string;
        minPrice?: string;
        maxPrice?: string;
        sort?: string;
    }>;
};

export async function generateMetadata({
    params,
    searchParams,
}: ShopPageProps): Promise<Metadata> {
    const { locale: raw } = await params;
    const locale = assertLocale(raw);
    const sp = await searchParams;
    const category = sp.category;
    const t = await getTranslations({ locale, namespace: "ShopPage" });

    if (category) {
        const label = await resolveCategoryLabel(locale, category);
        return {
            title: t("metaTitleCategory", { category: label }),
            description: t("metaDescriptionCategory", {
                category: label.toLowerCase(),
            }),
            alternates: {
                canonical: `/shop/?category=${encodeURIComponent(category)}`,
            },
        };
    }

    return {
        title: t("metaTitleDefault"),
        description: t("metaDescriptionDefault"),
        alternates: { canonical: "/shop/" },
    };
}

export default async function ShopPage({ params, searchParams }: ShopPageProps) {
    const { locale: raw } = await params;
    const locale = assertLocale(raw);
    const t = await getTranslations("ShopPage");
    const sp = await searchParams;
    const page = Math.max(1, Number(sp.page) || 1);
    const selectedSort = sp.sort ?? "top-rating";
    const filterOptions = await getAllProductFilters();
    const resolvedCategory = resolveCategoryValue(
        sp.category,
        filterOptions.categories,
    );
    const selectedMinPrice = sp.minPrice
        ? Number(sp.minPrice)
        : filterOptions.priceRange.min;
    const selectedMaxPrice = sp.maxPrice
        ? Number(sp.maxPrice)
        : filterOptions.priceRange.max;
    const selectedCategory = resolvedCategory ?? "All";
    const categoryHeadingLabel =
        resolvedCategory && resolvedCategory !== "All"
            ? await resolveCategoryLabel(locale, resolvedCategory)
            : null;

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
                        {categoryHeadingLabel
                            ? t("headingCategory", {
                                  category: categoryHeadingLabel,
                              })
                            : t("headingDefault")}
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
