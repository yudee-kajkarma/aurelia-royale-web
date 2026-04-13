"use client";

import { useState } from "react";
import Link from "next/link";
import { LoaderCircle, Minus, Plus, Trash2 } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { useCart } from "@/providers/CartProvider";

export default function CartPage() {
  const { items, count, totalValue, clearAll, isLoading, updateItemQuantity, removeItem } = useCart();
  const [isClearing, setIsClearing] = useState(false);
  const [removingProductId, setRemovingProductId] = useState<string | null>(null);
  const [updatingProductId, setUpdatingProductId] = useState<string | null>(null);

  async function handleClearAll() {
    setIsClearing(true);

    try {
      await clearAll();
    } finally {
      setIsClearing(false);
    }
  }

  async function handleRemoveItem(productId: string) {
    setRemovingProductId(productId);

    try {
      await removeItem(productId);
    } finally {
      setRemovingProductId(null);
    }
  }

  async function handleUpdateQuantity(productId: string, quantity: number) {
    setUpdatingProductId(productId);

    try {
      await updateItemQuantity(productId, quantity);
    } finally {
      setUpdatingProductId(null);
    }
  }

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="overflow-hidden rounded-[28px] border border-[var(--foreground)]/10 bg-white/80 shadow-[0_20px_80px_rgba(3,27,22,0.08)]">
          <div className="bg-[linear-gradient(135deg,#02241d,#0d5c47)] px-8 py-10 text-white sm:px-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">Cart</p>
            <h1 className="display-font mt-4 text-4xl sm:text-5xl">Shopping Bag</h1>
            <p className="mt-4 max-w-2xl text-white/78">Review your selected products before checkout.</p>
          </div>

          <div className="px-8 py-8 sm:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--surface)] p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]/55">Items</p>
                <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">{count}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]/55">Total</p>
                <PriceDisplay value={totalValue} className="mt-2 block text-3xl font-semibold text-[var(--gold)]" />
              </div>
              <button
                type="button"
                onClick={() => void handleClearAll()}
                disabled={count === 0 || isClearing || removingProductId !== null || updatingProductId !== null}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-red-700 disabled:opacity-60"
              >
                {isClearing ? <LoaderCircle size={16} className="animate-spin" /> : <Trash2 size={16} />}
                {isClearing ? "Clearing..." : "Clear Cart"}
              </button>
            </div>

            {isLoading ? <p className="mt-8 text-sm font-semibold text-[var(--foreground)]/70">Loading cart...</p> : null}

            {!isLoading && count === 0 ? (
              <div className="mt-8 rounded-3xl border border-dashed border-[var(--foreground)]/20 bg-white p-10 text-center">
                <p className="display-font text-3xl text-[var(--foreground)]">Your cart is empty</p>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/68">Add products from the shop or product details page and they will appear here.</p>
                <Link href="/shop" className="mt-6 inline-flex rounded-full bg-[var(--deep)] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white">
                  Explore Shop
                </Link>
              </div>
            ) : null}

            {items.length > 0 ? (
              <div className="mt-8 space-y-5">
                {items.map((item) => (
                  <article key={item.productId} className="grid gap-4 rounded-3xl border border-[var(--foreground)]/10 bg-white p-5 shadow-sm md:grid-cols-[140px_1fr_auto] md:items-center">
                    <div className="h-36 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.thumbnail})` }} aria-hidden="true" />
                    <div>
                      <p className="text-xl font-semibold text-[var(--foreground)]">{item.title}</p>
                      <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--foreground)]/55">SKU {item.sku}</p>
                      <PriceDisplay value={item.price} className="mt-3 block text-2xl font-bold text-[var(--gold)]" />
                    </div>
                    <div className="flex flex-col items-start gap-4 md:items-end">
                      <div className="inline-flex items-center overflow-hidden rounded-full border border-[var(--foreground)]/10">
                        <button
                          type="button"
                          onClick={() => void handleUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                          disabled={isClearing || removingProductId !== null || updatingProductId !== null}
                          className="inline-flex h-11 w-11 items-center justify-center bg-[var(--surface)] text-[var(--foreground)] disabled:opacity-60"
                          aria-label={`Decrease quantity for ${item.title}`}
                        >
                          {updatingProductId === item.productId ? <LoaderCircle size={16} className="animate-spin" /> : <Minus size={16} />}
                        </button>
                        <span className="inline-flex h-11 min-w-12 items-center justify-center px-4 text-sm font-bold text-[var(--foreground)]">{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => void handleUpdateQuantity(item.productId, item.quantity + 1)}
                          disabled={isClearing || removingProductId !== null || updatingProductId !== null}
                          className="inline-flex h-11 w-11 items-center justify-center bg-[var(--surface)] text-[var(--foreground)] disabled:opacity-60"
                          aria-label={`Increase quantity for ${item.title}`}
                        >
                          {updatingProductId === item.productId ? <LoaderCircle size={16} className="animate-spin" /> : <Plus size={16} />}
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => void handleRemoveItem(item.productId)}
                        disabled={isClearing || removingProductId !== null || updatingProductId !== null}
                        className="inline-flex items-center gap-2 rounded-full border border-red-200 px-4 py-2 text-sm font-bold uppercase tracking-[0.08em] text-red-700 disabled:opacity-60"
                      >
                        {removingProductId === item.productId ? <LoaderCircle size={15} className="animate-spin" /> : <Trash2 size={15} />}
                        {removingProductId === item.productId ? "Removing..." : "Remove"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      </main>
    </AuthGuard>
  );
}
