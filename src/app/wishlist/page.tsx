"use client";

import { useState } from "react";
import Link from "next/link";
import { LoaderCircle, Trash2 } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { useWishlist } from "@/providers/WishlistProvider";

export default function WishlistPage() {
  const { items, count, totalValue, clearAll, isLoading, removeItem } = useWishlist();
  const [isClearing, setIsClearing] = useState(false);
  const [removingProductId, setRemovingProductId] = useState<string | null>(null);

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

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-6xl px-6 py-16 sm:px-8">
        <div className="overflow-hidden rounded-[28px] border border-[var(--foreground)]/10 bg-white/80 shadow-[0_20px_80px_rgba(3,27,22,0.08)]">
          <div className="bg-[linear-gradient(135deg,#02241d,#0d5c47)] px-8 py-10 text-white sm:px-10">
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--gold)]">Wishlist</p>
            <h1 className="display-font mt-4 text-4xl sm:text-5xl">Saved Favorites</h1>
            <p className="mt-4 max-w-2xl text-white/78">Your wishlist keeps track of every product you want to revisit.</p>
          </div>

          <div className="px-8 py-8 sm:px-10">
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-[var(--foreground)]/10 bg-[var(--surface)] p-6">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]/55">Items</p>
                <p className="mt-2 text-3xl font-semibold text-[var(--foreground)]">{count}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-[var(--foreground)]/55">Total Value</p>
                <PriceDisplay value={totalValue} className="mt-2 block text-3xl font-semibold text-[var(--gold)]" />
              </div>
              <button
                type="button"
                onClick={() => void handleClearAll()}
                disabled={count === 0 || isClearing || removingProductId !== null}
                className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-red-700 disabled:opacity-60"
              >
                {isClearing ? <LoaderCircle size={16} className="animate-spin" /> : <Trash2 size={16} />}
                {isClearing ? "Clearing..." : "Clear Wishlist"}
              </button>
            </div>

            {isLoading ? <p className="mt-8 text-sm font-semibold text-[var(--foreground)]/70">Loading wishlist...</p> : null}

            {!isLoading && count === 0 ? (
              <div className="mt-8 rounded-3xl border border-dashed border-[var(--foreground)]/20 bg-white p-10 text-center">
                <p className="display-font text-3xl text-[var(--foreground)]">Your wishlist is empty</p>
                <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/68">Add products from the shop or product details page and they will appear here.</p>
                <Link href="/shop" className="mt-6 inline-flex rounded-full bg-[var(--deep)] px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white">
                  Explore Shop
                </Link>
              </div>
            ) : null}

            {count > 0 ? (
              <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                {items.map((item) => (
                  <article key={item.productId} className="rounded-3xl border border-[var(--foreground)]/10 bg-white p-5 shadow-sm">
                    <Link href={`/shop`} className="block">
                      <div className="h-60 bg-contain bg-center bg-no-repeat" style={{ backgroundImage: `url(${item.thumbnail})` }} aria-hidden="true" />
                    </Link>
                    <p className="mt-4 text-xl font-semibold text-[var(--foreground)]">{item.title}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.15em] text-[var(--foreground)]/55">Saved {new Date(item.addedAt).toLocaleDateString()}</p>
                    <PriceDisplay value={item.price} className="mt-3 block text-2xl font-bold text-[var(--gold)]" />
                    <div className="mt-5 flex gap-3">
                      <Link href="/shop" className="inline-flex flex-1 items-center justify-center rounded-full bg-[var(--deep)] px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white">
                        View Shop
                      </Link>
                      <button
                        type="button"
                        onClick={() => void handleRemoveItem(item.productId)}
                        disabled={isClearing || removingProductId !== null}
                        className="inline-flex items-center justify-center gap-2 rounded-full border border-red-200 px-4 py-3 text-sm font-bold uppercase tracking-[0.08em] text-red-700 disabled:opacity-60"
                      >
                        {removingProductId === item.productId ? <LoaderCircle size={16} className="animate-spin" /> : <Trash2 size={16} />}
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
