import { apiClient } from "@/services/http/api-client";
import { getApiErrorMessage } from "@/services/http/api-error";
import type { ApiResponse } from "@/services/auth/auth.types";
import type { ProductsPagination } from "@/services/products/product.types";
import type {
  AdminUserWishlist,
  AdminWishlistItem,
  AdminWishlistUserDetails,
  AdminWishlistUsersFilters,
  AdminWishlistUserSummary,
  AdminWishlistUsersResult,
} from "@/services/wishlist/admin-wishlist.types";

type WishlistUsersEnvelope = ApiResponse<{
  data?: unknown[];
  pagination?: ProductsPagination;
}>;

type UserWishlistEnvelope = ApiResponse<unknown>;

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

function normalizeWishlistUserSummary(value: unknown): AdminWishlistUserSummary | null {
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
    totalValue: getNumberValue(value, 0, "totalValue"),
    lastUpdated: getStringValue(value, "lastUpdated", "updatedAt"),
  };
}

function normalizeWishlistItem(value: unknown): AdminWishlistItem | null {
  if (!isRecord(value)) {
    return null;
  }

  const productId = getStringValue(value, "productId");
  if (!productId) {
    return null;
  }

  return {
    productId,
    title: getStringValue(value, "title"),
    price: getNumberValue(value, 0, "price"),
    thumbnail: getStringValue(value, "thumbnail"),
    addedAt: getStringValue(value, "addedAt", "createdAt"),
  };
}

function normalizeUserDetails(value: unknown): AdminWishlistUserDetails | null {
  if (!isRecord(value)) {
    return null;
  }

  const userName = getStringValue(value, "userName", "username", "name");
  const userEmail = getStringValue(value, "userEmail", "email");
  const userPhone = getStringValue(value, "userPhone", "phone");

  if (!userName && !userEmail && !userPhone) {
    return null;
  }

  return {
    userName,
    userEmail,
    userPhone,
  };
}

function normalizeUserWishlist(value: unknown): AdminUserWishlist {
  const record = isRecord(value) ? value : {};
  const itemsValue = Array.isArray(record.items) ? record.items : [];

  return {
    id: getStringValue(record, "id", "_id"),
    createdAt: getStringValue(record, "createdAt"),
    updatedAt: getStringValue(record, "updatedAt"),
    isActive: getBooleanValue(record, true, "isActive"),
    items: itemsValue.map(normalizeWishlistItem).filter((item): item is AdminWishlistItem => item !== null),
    userDetails: normalizeUserDetails(record.userDetails ?? record.user ?? null),
  };
}

async function getAdminWishlistUsers(filters: AdminWishlistUsersFilters = {}): Promise<AdminWishlistUsersResult> {
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
    const response = await apiClient.get<WishlistUsersEnvelope>(query ? `/wishlist/admin/users?${query}` : "/wishlist/admin/users");
    const payload = response.data.data;

    return {
      users: (payload?.data ?? []).map(normalizeWishlistUserSummary).filter((item): item is AdminWishlistUserSummary => item !== null),
      pagination: payload?.pagination ?? null,
    };
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getAdminUserWishlist(userId: string): Promise<AdminUserWishlist | null> {
  try {
    const response = await apiClient.get<UserWishlistEnvelope>(`/wishlist/admin/user/${userId}`);
    const data = response.data.data;

    if (!data) {
      return null;
    }

    return normalizeUserWishlist(data);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const adminWishlistService = {
  getAdminWishlistUsers,
  getAdminUserWishlist,
};