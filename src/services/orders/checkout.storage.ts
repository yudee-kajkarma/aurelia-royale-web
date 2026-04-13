import type { PendingOrderStatus } from "@/services/orders/order.types";

const PENDING_ORDER_STORAGE_KEY = "dalila.checkout.pending-order";

export function getPendingOrderStatus() {
  if (typeof window === "undefined") {
    return null;
  }

  const rawValue = window.localStorage.getItem(PENDING_ORDER_STORAGE_KEY);

  if (!rawValue) {
    return null;
  }

  try {
    return JSON.parse(rawValue) as PendingOrderStatus;
  } catch {
    window.localStorage.removeItem(PENDING_ORDER_STORAGE_KEY);
    return null;
  }
}

export function setPendingOrderStatus(status: PendingOrderStatus) {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.setItem(PENDING_ORDER_STORAGE_KEY, JSON.stringify(status));
}

export function clearPendingOrderStatus() {
  if (typeof window === "undefined") {
    return;
  }

  window.localStorage.removeItem(PENDING_ORDER_STORAGE_KEY);
}