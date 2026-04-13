const PENDING_CART_ITEM_KEY = "dalila.pending-cart-item";

type PendingCartItem = {
  productId: string;
  quantity: number;
};

export function getPendingCartItem() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.sessionStorage.getItem(PENDING_CART_ITEM_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as PendingCartItem;
  } catch {
    window.sessionStorage.removeItem(PENDING_CART_ITEM_KEY);
    return null;
  }
}

export function setPendingCartItem(item: PendingCartItem) {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.setItem(PENDING_CART_ITEM_KEY, JSON.stringify(item));
}

export function clearPendingCartItem() {
  if (typeof window === "undefined") {
    return;
  }

  window.sessionStorage.removeItem(PENDING_CART_ITEM_KEY);
}
