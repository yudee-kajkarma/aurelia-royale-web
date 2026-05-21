"use client";

import {
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { Provider } from "react-redux";
import { useAuth } from "@/providers/AuthProvider";
import { notifyError } from "@/utils/notify";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { store } from "@/store/store";
import {
  addWishlistItem,
  clearWishlist,
  fetchWishlist,
  removeWishlistItem,
  resetWishlist,
} from "@/store/wishlist/wishlistSlice";

function WishlistSync() {
  const dispatch = useAppDispatch();
  const { isAuthenticated, isReady } = useAuth();

  useEffect(() => {
    if (!isReady) {
      return;
    }

    if (!isAuthenticated) {
      dispatch(resetWishlist());
      return;
    }

    void dispatch(fetchWishlist())
      .unwrap()
      .catch((error) => notifyError(error, "Unable to load your wishlist."));
  }, [dispatch, isAuthenticated, isReady]);

  return null;
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <WishlistSync />
      {children}
    </Provider>
  );
}

export function useWishlist() {
  const dispatch = useAppDispatch();
  const { isReady } = useAuth();
  const { items, totalValue, isLoading, isInitialized } = useAppSelector((state) => state.wishlist);

  return useMemo(
    () => ({
      items,
      count: items.length,
      totalValue,
      isLoading,
      isReady: isReady && isInitialized,
      isInWishlist(productId: string) {
        return items.some((item) => item.productId === productId);
      },
      async addItem(productId: string) {
        await dispatch(addWishlistItem(productId)).unwrap();
      },
      async removeItem(productId: string) {
        await dispatch(removeWishlistItem(productId)).unwrap();
      },
      async clearAll() {
        await dispatch(clearWishlist()).unwrap();
      },
      async refresh() {
        await dispatch(fetchWishlist()).unwrap();
      },
    }),
    [dispatch, isInitialized, isLoading, isReady, items, totalValue],
  );
}
