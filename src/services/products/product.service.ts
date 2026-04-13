import type {
  AllFiltersResponse,
  GetProductsParams,
  ProductCardModel,
  ProductDetail,
  ProductDetailResponse,
  ProductFilterOptions,
  ProductListItem,
  ProductsApiResult,
  ProductsListResponse,
} from "@/services/products/product.types";

const DEFAULT_PAGE_SIZE = 12;

function getApiBaseUrl() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL ?? process.env.API_BASE_URL;

  if (!baseUrl) {
    throw new Error("Missing NEXT_PUBLIC_API_BASE_URL or API_BASE_URL environment variable.");
  }

  return baseUrl.endsWith("/") ? baseUrl : `${baseUrl}/`;
}

function createApiUrl(path: string) {
  return new URL(path.replace(/^\//, ""), getApiBaseUrl()).toString();
}

async function getJson<T>(path: string) {
  const response = await fetch(createApiUrl(path), {
    cache: "no-store",
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Request failed for ${path}: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as T;
}

function toTitleCase(value: string) {
  return value
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
    .join(" ");
}

export function formatProductPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

export function getProductCategory(product: Pick<ProductListItem, "tags"> & Partial<Pick<ProductDetail, "category">>) {
  return product.category || toTitleCase(product.tags[0] ?? "Jewellery");
}

export function toProductCardModel(product: ProductListItem): ProductCardModel {
  return {
    id: product.id,
    slug: product.slug,
    title: product.title,
    category: getProductCategory(product),
    price: formatProductPrice(product.price),
    imageUrl: product.thumbnail,
    rating: product.rating,
    reviewsCount: product.reviews_count,
    available: product.available,
  };
}

export async function getProductsPage(page = 1, limit = DEFAULT_PAGE_SIZE) {
  const response = await getJson<ProductsListResponse>(`/products?page=${page}&limit=${limit}`);

  if (!response) {
    throw new Error("Products endpoint returned no data.");
  }

  return response;
}

export async function getProducts(params: GetProductsParams = {}): Promise<ProductsApiResult> {
  const requestParams = new URLSearchParams();
  const page = params.page ?? 1;
  const limit = params.limit ?? DEFAULT_PAGE_SIZE;

  requestParams.set("page", String(page));
  requestParams.set("limit", String(limit));

  if (params.category) {
    requestParams.set("category", params.category);
  }

  if (params.search) {
    requestParams.set("search", params.search);
  }

  if (params.stoneType) {
    requestParams.set("stoneType", params.stoneType);
  }

  if (params.color) {
    requestParams.set("color", params.color);
  }

  if (params.shape) {
    requestParams.set("shape", params.shape);
  }

  if (params.origin) {
    requestParams.set("origin", params.origin);
  }

  if (params.treatment) {
    requestParams.set("treatment", params.treatment);
  }

  if (params.certificate) {
    requestParams.set("certificate", params.certificate);
  }

  if (params.measurement) {
    requestParams.set("measurement", params.measurement);
  }

  if (params.vendor) {
    requestParams.set("vendor", params.vendor);
  }

  if (params.tags) {
    requestParams.set("tags", Array.isArray(params.tags) ? params.tags.join(",") : params.tags);
  }

  if (params.metal) {
    requestParams.set("metal", Array.isArray(params.metal) ? params.metal.join(",") : params.metal);
  }

  if (params.priceMin !== undefined && params.priceMin !== "") {
    requestParams.set("price_min", String(params.priceMin));
  }

  if (params.priceMax !== undefined && params.priceMax !== "") {
    requestParams.set("price_max", String(params.priceMax));
  }

  if (params.carat !== undefined && params.carat !== "") {
    requestParams.set("carat", String(params.carat));
  }

  if (params.availability !== undefined && params.availability !== "") {
    requestParams.set("availability", String(params.availability));
  }

  const response = await getJson<ProductsListResponse>(`/products?${requestParams.toString()}`);

  if (!response) {
    throw new Error("Products endpoint returned no data.");
  }

  return {
    products: response.data,
    pagination: response.pagination,
    appliedFilters: response.filters.applied,
  };
}

export async function getAllProductFilters(): Promise<ProductFilterOptions> {
  const response = await getJson<AllFiltersResponse>("/products/all-filters");

  if (!response) {
    throw new Error("Product filters endpoint returned no data.");
  }

  return response.data;
}

export async function getAllProducts() {
  const firstPage = await getProductsPage(1, DEFAULT_PAGE_SIZE);

  if (firstPage.pagination.totalPages <= 1) {
    return firstPage.data;
  }

  const remainingPages = await Promise.all(
    Array.from({ length: firstPage.pagination.totalPages - 1 }, (_, index) => getProductsPage(index + 2, DEFAULT_PAGE_SIZE)),
  );

  return firstPage.data.concat(remainingPages.flatMap((page) => page.data));
}

export async function getProductBySlug(slug: string) {
  const response = await getJson<ProductDetailResponse>(`/products/slug/${slug}`);

  if (!response) {
    return null;
  }

  return {
    product: response.data,
    recommendedProducts: response.recommendedProducts,
  };
}
