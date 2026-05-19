import { apiClient } from "@/services/http/api-client";
import { getApiErrorMessage } from "@/services/http/api-error";
import type { ApiResponse } from "@/services/auth/auth.types";
import type { ProductsPagination } from "@/services/products/product.types";
import type {
  AdminCartItem,
  AdminCartUserDetails,
  AdminCartUserSummary,
  AdminCartUsersFilters,
  AdminCartUsersResult,
  AdminUserCart,
} from "@/services/cart/admin-cart.types";

type CartUsersEnvelope = ApiResponse<{
  data?: unknown[];
  pagination?: ProductsPagination;
}>;

type UserCartEnvelope = ApiResponse<unknown>;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getStringValue(record: Record<string, unknown>, ...keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "string") {
      return value;
    }
  }

  return "";
}

function getNumberValue(record: Record<string, unknown>, fallback: number, ...keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "number" && !Number.isNaN(value)) {
      return value;
    }

    if (typeof value === "string" && value.trim()) {
      const parsed = Number(value);
      if (!Number.isNaN(parsed)) {
        return parsed;
      }
    }
  }

  return fallback;
}

function getBooleanValue(record: Record<string, unknown>, fallback: boolean, ...keys: string[]) {
  for (const key of keys) {
    const value = record[key];
    if (typeof value === "boolean") {
      return value;
    }
  }

  return fallback;
}

function normalizeCartUserSummary(value: unknown): AdminCartUserSummary | null {
  if (!isRecord(value)) {
    return null;
  }

  const userId = getStringValue(value, "userId", "id");
  if (!userId) {
    return null;
  }

  return {
    userId,
    userName: getStringValue(value, "userName", "username"),
    userEmail: getStringValue(value, "userEmail", "email"),
    userPhone: getStringValue(value, "userPhone", "phone"),
    itemCount: getNumberValue(value, 0, "itemCount", "totalItems"),
    totalAmount: getNumberValue(value, 0, "totalAmount"),
    lastUpdated: getStringValue(value, "lastUpdated", "updatedAt"),
  };
}

function normalizeCartItem(value: unknown): AdminCartItem | null {
  if (!isRecord(value)) {
    return null;
  }

  const productId = getStringValue(value, "productId");
  if (!productId) {
    return null;
  }

  return {
    productId,
    sku: getStringValue(value, "sku"),
    title: getStringValue(value, "title"),
    price: getNumberValue(value, 0, "price"),
    quantity: getNumberValue(value, 0, "quantity"),
    thumbnail: getStringValue(value, "thumbnail"),
    addedAt: getStringValue(value, "addedAt", "createdAt"),
    variantId: getStringValue(value, "variantId") || undefined,
    variantName: getStringValue(value, "variantName") || undefined,
  };
}

function normalizeUserDetails(value: unknown): AdminCartUserDetails | null {
  if (!isRecord(value)) {
    return null;
  }

  const userId = getStringValue(value, "userId", "id");
  const userName = getStringValue(value, "userName", "username", "name");
  const userEmail = getStringValue(value, "userEmail", "email");
  const userPhone = getStringValue(value, "userPhone", "phone");

  if (!userId && !userName && !userEmail && !userPhone) {
    return null;
  }

  return {
    userId,
    userName,
    userEmail,
    userPhone,
  };
}

function normalizeUserCart(value: unknown): AdminUserCart {
  const record = isRecord(value) ? value : {};
  const itemsValue = Array.isArray(record.items) ? record.items : [];

  return {
    id: getStringValue(record, "id", "_id"),
    createdAt: getStringValue(record, "createdAt"),
    updatedAt: getStringValue(record, "updatedAt"),
    isActive: getBooleanValue(record, true, "isActive"),
    items: itemsValue.map(normalizeCartItem).filter((item): item is AdminCartItem => item !== null),
    userDetails: normalizeUserDetails(record.userDetails ?? record.user ?? null),
  };
}

async function getAdminCartUsers(filters: AdminCartUsersFilters = {}): Promise<AdminCartUsersResult> {
  try {
    const params = new URLSearchParams();

    if (filters.page) {
      params.set("page", String(filters.page));
    }

    if (filters.limit) {
      params.set("limit", String(filters.limit));
    }

    if (filters.search) {
      params.set("search", filters.search);
    }

    const query = params.toString();
    const response = await apiClient.get<CartUsersEnvelope>(query ? `/cart/admin/users?${query}` : "/cart/admin/users");
    const payload = response.data.data;

    return {
      users: (payload?.data ?? []).map(normalizeCartUserSummary).filter((item): item is AdminCartUserSummary => item !== null),
      pagination: payload?.pagination ?? null,
    };
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getAdminUserCart(userId: string): Promise<AdminUserCart | null> {
  try {
    const response = await apiClient.get<UserCartEnvelope>(`/cart/admin/user/${userId}`);
    const data = response.data.data;

    if (!data) {
      return null;
    }

    return normalizeUserCart(data);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const adminCartService = {
  getAdminCartUsers,
  getAdminUserCart,
};