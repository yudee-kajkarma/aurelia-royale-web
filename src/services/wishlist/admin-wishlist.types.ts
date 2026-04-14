import type { ProductsPagination } from "@/services/products/product.types";

export type AdminWishlistUserSummary = {
  userId: string;
  userName: string;
  userEmail: string;
  userPhone: string;
  itemCount: number;
  totalValue: number;
  lastUpdated: string;
};

export type AdminWishlistItem = {
  productId: string;
  title: string;
  price: number;
  thumbnail: string;
  addedAt: string;
};

export type AdminWishlistUserDetails = {
  userName: string;
  userEmail: string;
  userPhone: string;
};

export type AdminUserWishlist = {
  id: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
  items: AdminWishlistItem[];
  userDetails: AdminWishlistUserDetails | null;
};

export type AdminWishlistUsersResult = {
  users: AdminWishlistUserSummary[];
  pagination: ProductsPagination | null;
};

export type AdminWishlistUsersFilters = {
  page?: number;
  limit?: number;
  search?: string;
};