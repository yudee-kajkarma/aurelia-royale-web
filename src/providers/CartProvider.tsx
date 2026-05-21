"use client";

import { useEffect, useMemo, type ReactNode } from "react";
import { useAuth } from "@/providers/AuthProvider";
import { notifyError } from "@/utils/notify";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addCartItem,
  clearCart,
  fetchCart,
  removeCartItem,
  resetCart,
  updateCartItemQuantity,
} from "@/store/cart/cartSlice";

function CartSync() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isReady } = useAuth();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (!isAuthenticated) {
      dispatch(resetCart());
      return;
    }

    void dispatch(fetchCart())
      .unwrap()
      .catch((error) => notifyError(error, "Unable to load your cart."));
  }, [dispatch, isAuthenticated, isReady]);

  return null;
}

export function CartProvider({ children }: { children: ReactNode }) {
  return (
    <>
      <CartSync />
      {children}
    </>
  );
}

export function useCart() {
  const dispatch = useAppDispatch();
  const { isReady } = useAuth();
  const { cartId, items, isLoading, isInitialized } = useAppSelector((state) => state.cart);

  return useMemo(
    () => ({
      cartId,
      items,
      count: items.reduce((total, item) => total + item.quantity, 0),
      totalValue: items.reduce((total, item) => total + item.price * item.quantity, 0),
      isLoading,
      isReady: isReady && isInitialized,
      async addItem(productId: string, quantity = 1) {
        await dispatch(addCartItem({ productId, quantity })).unwrap();
      },
      async updateItemQuantity(productId: string, quantity: number) {
        await dispatch(updateCartItemQuantity({ productId, quantity })).unwrap();
      },
      async removeItem(productId: string) {
        if (!cartId) {
          return;
        }

        await dispatch(removeCartItem({ cartId, productId })).unwrap();
      },
      async clearAll() {
        await dispatch(clearCart()).unwrap();
      },
      async refresh() {
        await dispatch(fetchCart()).unwrap();
      },
    }),
    [cartId, dispatch, isInitialized, isLoading, isReady, items],
  );
}
