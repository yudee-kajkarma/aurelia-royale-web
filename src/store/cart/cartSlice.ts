import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  clearPendingCartItem,
  getPendingCartItem,
} from "@/services/cart/cart.pending";
import { cartService } from "@/services/cart/cart.service";
import type { CartItem } from "@/services/cart/cart.types";

type CartState = {
  cartId: string | null;
  items: CartItem[];
  isLoading: boolean;
  isInitialized: boolean;
  error: string | null;
};

const initialState: CartState = {
  cartId: null,
  items: [],
  isLoading: false,
  isInitialized: false,
  error: null,
};

function normalizeCartPayload(cartId: string | null, items: CartItem[]) {
  return { cartId, items };
}

async function readCartPayload() {
  const cart = await cartService.getCart();
  let nextItems = cart.items ?? [];
  const pendingItem = getPendingCartItem();

  if (pendingItem) {
    const matchingItem = nextItems.find((item) => item.productId === pendingItem.productId);

    if (matchingItem) {
      try {
        await cartService.updateCartItem(pendingItem.productId, matchingItem.quantity + pendingItem.quantity);
      } finally {
        clearPendingCartItem();
      }

      const refreshedCart = await cartService.getCart();
      nextItems = refreshedCart.items ?? [];
      return normalizeCartPayload(refreshedCart.id, nextItems);
    }

    try {
      await cartService.addCartItem(pendingItem.productId, pendingItem.quantity);
    } finally {
      clearPendingCartItem();
    }

    const refreshedCart = await cartService.getCart();
    nextItems = refreshedCart.items ?? [];
    return normalizeCartPayload(refreshedCart.id, nextItems);
  }

  return normalizeCartPayload(cart.id, nextItems);
}

export const fetchCart = createAsyncThunk(
  "cart/fetchCart",
  async (_, { rejectWithValue }) => {
    try {
      return await readCartPayload();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to load cart.");
    }
  },
);

export const addCartItem = createAsyncThunk(
  "cart/addCartItem",
  async ({ productId, quantity }: { productId: string; quantity: number }, { rejectWithValue }) => {
    try {
      const currentCart = await cartService.getCart();
      const existingItem = currentCart.items.find((item) => item.productId === productId);

      if (existingItem) {
        await cartService.updateCartItem(productId, existingItem.quantity + quantity);
      } else {
        await cartService.addCartItem(productId, quantity);
      }

      return await readCartPayload();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to add cart item.");
    }
  },
);

export const updateCartItemQuantity = createAsyncThunk(
  "cart/updateCartItemQuantity",
  async ({ productId, quantity }: { productId: string; quantity: number }, { rejectWithValue }) => {
    try {
      await cartService.updateCartItem(productId, quantity);
      return await readCartPayload();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to update cart item.");
    }
  },
);

export const removeCartItem = createAsyncThunk(
  "cart/removeCartItem",
  async ({ cartId, productId }: { cartId: string; productId: string }, { rejectWithValue }) => {
    try {
      await cartService.removeCartItem(cartId, productId);
      return await readCartPayload();
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to remove cart item.");
    }
  },
);

export const clearCart = createAsyncThunk(
  "cart/clearCart",
  async (_, { rejectWithValue }) => {
    try {
      await cartService.clearCart();
      return normalizeCartPayload(null, []);
    } catch (error) {
      return rejectWithValue(error instanceof Error ? error.message : "Unable to clear cart.");
    }
  },
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart(state) {
      state.cartId = null;
      state.items = [];
      state.isLoading = false;
      state.isInitialized = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.cartId = action.payload.cartId;
        state.items = action.payload.items;
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to load cart.";
      })
      .addCase(addCartItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.cartId = action.payload.cartId;
        state.items = action.payload.items;
      })
      .addCase(addCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to add cart item.";
      })
      .addCase(updateCartItemQuantity.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.cartId = action.payload.cartId;
        state.items = action.payload.items;
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to update cart item.";
      })
      .addCase(removeCartItem.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeCartItem.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.cartId = action.payload.cartId;
        state.items = action.payload.items;
      })
      .addCase(removeCartItem.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to remove cart item.";
      })
      .addCase(clearCart.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isInitialized = true;
        state.cartId = action.payload.cartId;
        state.items = action.payload.items;
      })
      .addCase(clearCart.rejected, (state, action) => {
        state.isLoading = false;
        state.error = (action.payload as string | undefined) ?? action.error.message ?? "Unable to clear cart.";
      });
  },
});

export const { resetCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
