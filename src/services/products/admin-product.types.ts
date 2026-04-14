import type {
  ProductDetail,
  ProductListItem,
  ProductsPagination,
} from "@/services/products/product.types";

export type AdminProductListResult = {
  products: ProductListItem[];
  pagination: ProductsPagination | null;
};

export type AdminProductFilters = {
  search?: string;
  category?: string;
  page?: number;
  limit?: number;
};

export type AdminBulkCreatePayload = {
  products: Array<Record<string, unknown>>;
};

export type AdminProductDetail = ProductDetail;