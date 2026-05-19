import { apiClient } from "@/services/http/api-client";
import { getApiErrorMessage } from "@/services/http/api-error";
import type { CartResponse } from "@/services/cart/cart.types";

async function getCart() {
  try {
    const response = await apiClient.get<CartResponse>("/cart");
    return response.data.data;
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function addCartItem(productId: string, quantity: number) {
  try {
    await apiClient.post("/cart/add", { productId, quantity });
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function updateCartItem(productId: string, quantity: number) {
  try {
    await apiClient.put(`/cart/item/${productId}`, { quantity });
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function removeCartItem(cartId: string, productId: string) {
  try {
    await apiClient.delete(`/item/${cartId}/${productId}`);
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

async function clearCart() {
  try {
    await apiClient.delete("/cart/clear");
  } catch (error) {
    throw new Error(getApiErrorMessage(error));
  }
}

export const cartService = {
  getCart,
  addCartItem,
  updateCartItem,
  removeCartItem,
  clearCart,
};
