import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  clearPendingWishlistProduct,
  getPendingWishlistProduct,
} from "@/services/wishlist/wishlist.pending";
import { wishlistService } from "@/services/wishlist/wishlist.service";
import type { WishlistItem } from "@/services/wishlist/wishlist.types";

type WishlistState = {
  items: WishlistItem[];
  totalValue: number;
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
};

const initialState: WishlistState = {
  items: [],
  totalValue: 0,
  isLoading: false,
  isInitialized: false,
  error: null,
};

function getFallbackTotalValue(items: WishlistItem[]) {
  return items.reduce((total, item) => total + item.price, 0);
}

async function readWishlistPayload() {
  const wishlist = await wishlistService.getWishlist();
  let nextItems = wishlist.items ?? [];
  const pendingProductId = getPendingWishlistProduct();

  if (pendingProductId && !nextItems.some((item) => item.productId === pendingProductId)) {
    try {
      await wishlistService.addWishlistItem(pendingProductId);
    } finally {
      clearPendingWishlistProduct();
    }

    const refreshedWishlist = await wishlistService.getWishlist();
    nextItems = refreshedWishlist.items ?? [];
  } else if (pendingProductId) {
    clearPendingWishlistProduct();
  }

  try {
    const stats = await wishlistService.getWishlistStats();
    return {
      items: nextItems,
      totalValue: stats.totalValue,
    };
  } catch {
    return {
      items: nextItems,
      totalValue: getFallbackTotalValue(nextItems),
    };
  }
}

export const fetchWishlist = createAsyncThunk(
  "wishlist/fetchWishlist",
  async (_, { rejectWithValue }) => {
    try {
      return await readWishlistPayload();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to load wishlist.");
    }
  },
);

export const addWishlistItem = createAsyncThunk(
  "wishlist/addWishlistItem",
  async (productId: string, { rejectWithValue }) => {
    try {
      await wishlistService.addWishlistItem(productId);
      return await readWishlistPayload();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to add wishlist item.");
    }
  },
);

export const removeWishlistItem = createAsyncThunk(
  "wishlist/removeWishlistItem",
  async (productId: string, { rejectWithValue }) => {
    try {
      await wishlistService.removeWishlistItem(productId);
      return await readWishlistPayload();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to remove wishlist item.");
    }
  },
);

export const clearWishlist = createAsyncThunk(
  "wishlist/clearWishlist",
  async (_, { rejectWithValue }) => {
    try {
      await wishlistService.clearWishlist();
      return {
        items: [],
        totalValue: 0,
      };
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to clear wishlist.");
    }
  },
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    resetWishlist(state) {
      state.items = [];
      state.totalValue = 0;
      state.isLoading = false;
      state.isInitialized = true;
      state.error = null;
    },
    clearWishlistError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.items = action.payload.items;
        state.totalValue = action.payload.totalValue;
      })
      .addCase(fetchWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to load wishlist.";
      })
      .addCase(addWishlistItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addWishlistItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.error = null;
        state.items = action.payload.items;
        state.totalValue = action.payload.totalValue;
      })
      .addCase(addWishlistItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to add wishlist item.";
      })
      .addCase(removeWishlistItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeWishlistItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.error = null;
        state.items = action.payload.items;
        state.totalValue = action.payload.totalValue;
      })
      .addCase(removeWishlistItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to remove wishlist item.";
      })
      .addCase(clearWishlist.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(clearWishlist.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.error = null;
        state.items = action.payload.items;
        state.totalValue = action.payload.totalValue;
      })
      .addCase(clearWishlist.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to clear wishlist.";
      });
  },
});

export const { resetWishlist, clearWishlistError } = wishlistSlice.actions;
export const wishlistReducer = wishlistSlice.reducer;
