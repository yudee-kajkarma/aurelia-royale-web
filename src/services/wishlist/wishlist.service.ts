import { apiClient } from "@/services/http/api-client";
import { getApiErrorMessage } from "@/services/http/api-error";
import type { WishlistResponse, WishlistStatsResponse } from "@/services/wishlist/wishlist.types";

async function getWishlist() {
  try {
    const response = await apiClient.get<WishlistResponse>("/wishlist");
    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function getWishlistStats() {
  try {
    const response = await apiClient.get<WishlistStatsResponse>("/wishlist/stats");
    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function addWishlistItem(productId: string) {
  try {
    await apiClient.post("/wishlist/add", { productId });
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function removeWishlistItem(productId: string) {
  try {
    await apiClient.delete(`/wishlist/item/${productId}`);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function clearWishlist() {
  try {
    await apiClient.delete("/wishlist/clear");
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const wishlistService = {
  getWishlist,
  getWishlistStats,
  addWishlistItem,
  removeWishlistItem,
  clearWishlist,
};
