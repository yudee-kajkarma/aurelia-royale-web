const PENDING_WISHLIST_PRODUCT_KEY = "dalila.pending-wishlist-product";

export function getPendingWishlistProduct() {
  if (typeof window === "undefined") {
    return null;
  }

  return window.sessionStorage.getItem(PENDING_WISHLIST_PRODUCT_KEY);
}

export function setPendingWishlistProduct(productId: string) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(PENDING_WISHLIST_PRODUCT_KEY, productId);
}

export function clearPendingWishlistProduct() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(PENDING_WISHLIST_PRODUCT_KEY);
}
