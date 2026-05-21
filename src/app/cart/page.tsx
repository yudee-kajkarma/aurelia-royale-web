"use client";

import { useState } from "react";
import Link from "next/link";
import { LoaderCircle, Minus, Plus, Trash2 } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { useCart } from "@/providers/CartProvider";
import { useDiscount } from "@/services/family/useDiscount";
import { notifyError } from "@/utils/notify";
import { ProductImage } from "../../components/shared/ProductImage";

export default function CartPage() {
  const { items, count, totalValue, clearAll, isLoading, updateItemQuantity, removeItem } = useCart();
  const { discountPercent } = useDiscount();
  const payableTotal = totalValue * (1 - discountPercent / 100);
  const [isClearing, setIsClearing] = useState(false);
  const [removingProductId, setRemovingProductId] = useState<string | null>(null);
  const [updatingProductId, setUpdatingProductId] = useState<string | null>(null);
  const isMutating = isClearing || removingProductId !== null || updatingProductId !== null;

  async function handleClearAll() {
    setIsClearing(true);

    try {
      await clearAll();
    } catch (error) {
      notifyError(error, "Unable to clear your cart.");
    } finally {
      setIsClearing(false);
    }
  }

  async function handleRemoveItem(productId: string) {
    setRemovingProductId(productId);

    try {
      await removeItem(productId);
    } catch (error) {
      notifyError(error, "Unable to remove this item.");
    } finally {
      setRemovingProductId(null);
    }
  }

  async function handleUpdateQuantity(productId: string, quantity: number) {
    setUpdatingProductId(productId);

    try {
      await updateItemQuantity(productId, quantity);
    } catch (error) {
      notifyError(error, "Unable to update the quantity.");
    } finally {
      setUpdatingProductId(null);
    }
  }

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Cart</p>
            <h1 className="display-font mt-3 text-4xl text-deep sm:text-5xl">Your Shopping Bag</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
              Review your selected products, adjust quantities, and continue shopping with the Dalia collection.
            </p>
          </div>

          {items.length > 0 ? (
            <button
              type="button"
              onClick={() => void handleClearAll()}
              disabled={isMutating || isLoading}
              className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white disabled:opacity-60"
            >
              {isClearing ? <LoaderCircle size={16} className="animate-spin" /> : <Trash2 size={16} />}
              {isClearing ? "Clearing..." : "Clear Cart"}
            </button>
          ) : null}
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_360px]">
          <section className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            {isLoading ? <p className="text-sm font-medium text-foreground/60">Loading cart...</p> : null}

            {!isLoading && count === 0 ? (
              <div className="rounded-[28px] border border-dashed border-gold/35 bg-surface px-6 py-12 text-center">
                <h2 className="display-font text-3xl text-deep">Your cart is empty</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  Add a product from the shop or product details page and it will appear here.
                </p>
                <Link
                  href="/shop"
                  className="cta-sweep mt-6 inline-flex items-center justify-center border border-deep bg-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep"
                >
                  <span className="relative z-10">Continue Shopping</span>
                </Link>
              </div>
            ) : null}

            {!isLoading && items.length > 0 ? (
              <div className="space-y-5">
                {items.map((item) => (
                  <article
                    key={item.productId}
                    className="grid gap-5 rounded-[28px] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,248,245,0.94)_100%)] p-4 sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:items-center"
                  >
                    <div className="overflow-hidden rounded-[20px] border border-gold/15 bg-[linear-gradient(180deg,#f7efe3_0%,#ffffff_100%)] p-3">
                      <ProductImage src={item.thumbnail} alt={item.title} className="h-28 w-full object-contain" />
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold text-deep">{item.title}</h2>
                      <p className="mt-1 text-sm text-foreground/55">SKU {item.sku}</p>
                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground/62">
                        <span>Quantity: {item.quantity}</span>
                        <PriceDisplay value={item.price} className="text-lg font-bold text-gold" />
                      </div>
                    </div>

                    <div className="flex flex-col items-start gap-4 sm:items-end">
                      <div className="inline-flex items-center overflow-hidden rounded-full border border-foreground/12 bg-white">
                        <button
                          type="button"
                          onClick={() => void handleUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                          disabled={isMutating}
                          className="inline-flex h-11 w-11 items-center justify-center text-deep transition hover:bg-deep hover:text-white disabled:opacity-60"
                          aria-label={`Decrease quantity for ${item.title}`}
                        >
                          {updatingProductId === item.productId ? <LoaderCircle size={16} className="animate-spin" /> : <Minus size={16} />}
                        </button>
                        <span className="inline-flex h-11 min-w-12 items-center justify-center border-x border-foreground/10 px-4 text-sm font-semibold text-deep">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => void handleUpdateQuantity(item.productId, item.quantity + 1)}
                          disabled={isMutating}
                          className="inline-flex h-11 w-11 items-center justify-center text-deep transition hover:bg-deep hover:text-white disabled:opacity-60"
                          aria-label={`Increase quantity for ${item.title}`}
                        >
                          {updatingProductId === item.productId ? <LoaderCircle size={16} className="animate-spin" /> : <Plus size={16} />}
                        </button>
                      </div>

                      <button
                        type="button"
                        onClick={() => void handleRemoveItem(item.productId)}
                        disabled={isMutating}
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-red-700 transition hover:text-red-800 disabled:opacity-60"
                      >
                        {removingProductId === item.productId ? <LoaderCircle size={15} className="animate-spin" /> : <Trash2 size={15} />}
                        {removingProductId === item.productId ? "Removing..." : "Remove"}
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : null}
          </section>

          <aside className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Summary</p>
            <div className="mt-6 space-y-4 text-sm text-foreground/68">
              <div className="flex items-center justify-between">
                <span>Total items</span>
                <span className="font-semibold text-deep">{count}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Subtotal</span>
                <PriceDisplay value={payableTotal} className="font-semibold text-deep" />
              </div>
              <div className="flex items-center justify-between">
                <span>Shipping</span>
                <span className="font-semibold text-deep">Free</span>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-gold/20 bg-surface p-4 text-sm leading-7 text-foreground/62">
              Your selected pieces are reserved in this bag while you continue exploring the collection.
            </div>

            <div className="mt-6 border-t border-foreground/10 pt-6">
              <div className="flex items-center justify-between text-lg font-bold text-deep">
                <span>Total</span>
                <PriceDisplay value={payableTotal} />
              </div>

              <Link
                href="/checkout"
                className="cta-sweep mt-6 inline-flex w-full items-center justify-center border border-deep bg-deep px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep hover:!text-white"
              >
                <span className="relative z-10">Proceed to Checkout</span>
              </Link>

              <p className="mt-4 text-center text-xs uppercase tracking-[0.14em] text-foreground/42">
                Review shipping and payment details on the next step
              </p>
            </div>
          </aside>
        </div>
      </main>
    </AuthGuard>
  );
}
