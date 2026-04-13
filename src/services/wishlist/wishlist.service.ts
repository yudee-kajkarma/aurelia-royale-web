import axios from "axios";
import { apiClient } from "@/services/http/api-client";
import type { WishlistResponse, WishlistStatsResponse } from "@/services/wishlist/wishlist.types";

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
