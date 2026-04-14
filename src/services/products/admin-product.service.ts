import axios from "axios";
import { apiClient } from "@/services/http/api-client";
import type { ApiResponse } from "@/services/auth/auth.types";
import type {
  ProductDetail,
  ProductListItem,
  ProductsPagination,
} from "@/services/products/product.types";
import type {
  AdminBulkCreatePayload,
  AdminProductDetail,
  AdminProductFilters,
  AdminProductListResult,
} from "@/services/products/admin-product.types";

type ProductListResponse = ApiResponse<ProductListItem[]> & {
  pagination?: ProductsPagination;
};

function getApiErrorMessage(error: unknown) {
  if (axios.isAxiosError(error)) {
    return (
      error.response?.data?.message ??
      error.response?.data?.error ??
      error.message ??
      "Something went wrong."
    );
  }

  if (error instanceof Error) {
    return error.message;
  }

  return "Something went wrong.";
}

function toListResult(responseData: ProductListResponse): AdminProductListResult {
  return {
    products: responseData.data ?? [],
    pagination: responseData.pagination ?? null,
  };
}

async function listAdminProducts(filters: AdminProductFilters = {}): Promise<AdminProductListResult> {
  try {
    const params = new URLSearchParams();

    if (filters.search) {
      params.set("search", filters.search);
    }

    if (filters.category) {
      params.set("category", filters.category);
    }

    if (filters.page) {
      params.set("page", String(filters.page));
    }

    if (filters.limit) {
      params.set("limit", String(filters.limit));
    }

    const query = params.toString();
    const response = await apiClient.get<ProductListResponse>(query ? `/products?${query}` : "/products");

    return toListResult(response.data);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getAdminProduct(productId: string): Promise<AdminProductDetail> {
  try {
    const response = await apiClient.get<ApiResponse<ProductDetail>>(`/products/${productId}`);
    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function createAdminProduct(payload: FormData) {
  try {
    const response = await apiClient.post<ApiResponse<ProductDetail>>("/products/", payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function updateAdminProduct(productId: string, payload: FormData) {
  try {
    const response = await apiClient.put<ApiResponse<ProductDetail>>(`/products/${productId}`, payload, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function deleteAdminProduct(productId: string) {
  try {
    await apiClient.delete(`/products/${productId}`);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function bulkCreateAdminProducts(payload: AdminBulkCreatePayload) {
  try {
    const response = await apiClient.post<ApiResponse<unknown>>("/products/bulk-create", payload);
    return response.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const adminProductService = {
  bulkCreateAdminProducts,
  createAdminProduct,
  deleteAdminProduct,
  getAdminProduct,
  listAdminProducts,
  updateAdminProduct,
};