"use client";

import { useState } from "react";
import Link from "next/link";
import { LoaderCircle, Trash2 } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { useWishlist } from "@/providers/WishlistProvider";
import { notifyError } from "@/utils/notify";
import { ProductImage } from "../../components/shared/ProductImage";
import { useTranslation } from "@/utils/i18n";

export default function WishlistPage() {
  const { items, count, totalValue, clearAll, isLoading, removeItem } = useWishlist();
  const { localizeHref } = useTranslation();
  const [isClearing, setIsClearing] = useState(false);
  const [removingProductId, setRemovingProductId] = useState<string | null>(null);
  const isMutating = isClearing || removingProductId !== null;

  async function handleClearAll() {
    setIsClearing(true);

    try {
      await clearAll();
    } catch (error) {
      notifyError(error, "Unable to clear your wishlist.");
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

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Wishlist</p>
            <h1 className="display-font mt-3 text-4xl text-deep sm:text-5xl">Saved Pieces You Love</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
              Keep track of the jewelry you want to revisit, compare, and move into your cart later.
            </p>
          </div>

          {count > 0 ? (
            <button
              type="button"
              onClick={() => void handleClearAll()}
              disabled={isMutating || isLoading}
              className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white disabled:opacity-60"
            >
              {isClearing ? <LoaderCircle size={16} className="animate-spin" /> : <Trash2 size={16} />}
              {isClearing ? "Clearing..." : "Clear Wishlist"}
            </button>
          ) : null}
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_360px]">
          <section className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            {isLoading ? <p className="text-sm font-medium text-foreground/60">Loading wishlist...</p> : null}

            {!isLoading && count === 0 ? (
              <div className="rounded-[28px] border border-dashed border-gold/35 bg-surface px-6 py-12 text-center">
                <h2 className="display-font text-3xl text-deep">Your wishlist is empty</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  Save products from the shop or product details page and they will appear here.
                </p>
                <Link
                  href={localizeHref("/shop")}
                  className="cta-sweep mt-6 inline-flex items-center justify-center border border-deep bg-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep"
                >
                  <span className="relative z-10">Explore Shop</span>
                </Link>
              </div>
            ) : null}

            {count > 0 ? (
              <div className="space-y-5">
                {items.map((item) => (
                  <article
                    key={item.productId}
                    className="grid gap-5 rounded-[28px] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,248,245,0.94)_100%)] p-4 sm:grid-cols-[120px_minmax(0,1fr)_auto] sm:items-center"
                  >
                    <Link href={localizeHref("/shop")} className="overflow-hidden rounded-[20px] border border-gold/15 bg-[linear-gradient(180deg,#f7efe3_0%,#ffffff_100%)] p-3">
                      <ProductImage src={item.thumbnail} alt={item.title} className="h-28 w-full object-contain" />
                    </Link>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">Saved Collection</p>
                      <p className="mt-2 text-xl font-semibold text-deep">{item.title}</p>
                      <p className="mt-2 text-sm text-foreground/55">Saved {new Date(item.addedAt).toLocaleDateString()}</p>
                      {/* <PriceDisplay value={item.price} className="mt-3 block text-2xl font-bold text-gold" /> */}
                    </div>

                    <div className="flex flex-col items-start gap-3 sm:items-end">
                      <Link
                        href={localizeHref("/shop")}
                        className="cta-sweep inline-flex items-center justify-center border border-deep bg-deep px-5 py-3 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep hover:!text-white"
                      >
                        <span className="relative z-10">View Shop</span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => void handleRemoveItem(item.productId)}
                        disabled={isMutating}
                        className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.08em] text-red-700 transition hover:text-red-800 disabled:opacity-60"
                      >
                        {removingProductId === item.productId ? <LoaderCircle size={16} className="animate-spin" /> : <Trash2 size={16} />}
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
                <span>Saved items</span>
                <span className="font-semibold text-deep">{count}</span>
              </div>
              {/* <div className="flex items-center justify-between">
                <span>Total value</span>
                <PriceDisplay value={totalValue} className="font-semibold text-deep" />
              </div> */}
              <div className="flex items-center justify-between">
                <span>Ready to shop</span>
                <span className="font-semibold text-deep">{count > 0 ? "Yes" : "No"}</span>
              </div>
            </div>

            <div className="mt-6 rounded-[24px] border border-gold/20 bg-surface p-4 text-sm leading-7 text-foreground/62">
              Open any saved piece from the shop to review its details and move it into your cart when you are ready.
            </div>

            <div className="mt-6 border-t border-foreground/10 pt-6">
              <Link
                href={localizeHref("/shop")}
                className="cta-sweep inline-flex w-full items-center justify-center border border-deep bg-deep px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep hover:!text-white"
              >
                <span className="relative z-10">Continue Shopping</span>
              </Link>

              <p className="mt-4 text-center text-xs uppercase tracking-[0.14em] text-foreground/42">
                Curate your next Dalia order from your saved favorites
              </p>
            </div>
          </aside>
        </div>
      </main>
    </AuthGuard>
  );
}
