import type { ProductsPagination } from "@/services/products/product.types";

export type AdminCartUserSummary = {
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  itemCount: number;
  totalAmount: number;
  lastUpdated: string;
};

export type AdminCartItem = {
  productId: string;
  sku: string;
  title: string;
  price: number;
  quantity: number;
  thumbnail: string;
  addedAt: string;
  variantId?: string;
  variantName?: string;
};

export type AdminCartUserDetails = {
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
};

export type AdminUserCart = {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  items: AdminCartItem[];
  userDetails: AdminCartUserDetails | null;
};

export type AdminCartUsersResult = {
  users: AdminCartUserSummary[];
  pagination: ProductsPagination | null;
};

export type AdminCartUsersFilters = {
  page?: number;
  limit?: number;
  search?: string;
};