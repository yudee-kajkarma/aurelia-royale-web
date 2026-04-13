"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, RotateCcw, ShoppingBag, XCircle } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { useCart } from "@/providers/CartProvider";
import { clearPendingOrderStatus, getPendingOrderStatus } from "@/services/orders/checkout.storage";

function CheckoutStatusContent() {
  const searchParams = useSearchParams();
  const { refresh } = useCart();
  const paymentResult = searchParams.get("payment") === "cancel" ? "cancel" : "success";
  const pendingOrder = useMemo(() => getPendingOrderStatus(), []);
  const [isSyncing, setIsSyncing] = useState(true);
  const [syncError, setSyncError] = useState("");

  useEffect(() => {
    let isMounted = true;

    async function syncCheckoutState() {
      try {
        await refresh();
      } catch {
        if (isMounted) {
          setSyncError("Order status was updated, but cart synchronization needs another refresh.");
        }
      } finally {
        clearPendingOrderStatus();

        if (isMounted) {
          setIsSyncing(false);
        }
      }
    }

    void syncCheckoutState();

    return () => {
      isMounted = false;
    };
  }, [refresh]);

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto max-w-[980px] px-4 py-10 lg:px-8">
        <section className="overflow-hidden rounded-[36px] border border-[var(--foreground)]/10 bg-white shadow-[0_24px_70px_rgba(55,31,10,0.08)]">
          <div className={`px-6 py-8 text-white sm:px-8 ${paymentResult === "success" ? "bg-[var(--deep)]" : "bg-[#8a2638]"}`}>
            <div className="flex items-center gap-4">
              {paymentResult === "success" ? <CheckCircle2 className="h-10 w-10" /> : <XCircle className="h-10 w-10" />}
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-white/70">Checkout Status</p>
                <h1 className="mt-2 text-3xl font-extrabold tracking-[-0.04em]">
                  {paymentResult === "success" ? "Your order was placed successfully" : "Payment was not completed"}
                </h1>
              </div>
            </div>
          </div>

          <div className="space-y-6 px-6 py-8 sm:px-8">
            <div className="rounded-[28px] border border-[var(--foreground)]/10 bg-[var(--surface)] p-5 text-sm leading-7 text-[var(--foreground)]/68">
              {pendingOrder?.orderNumber ? (
                <p>
                  Order number: <span className="font-bold text-[var(--deep)]">{pendingOrder.orderNumber}</span>
                </p>
              ) : null}
              <p>
                {paymentResult === "success"
                  ? pendingOrder?.paymentMethod === "ONLINE"
                    ? "Payment completed and the website return flow finished successfully."
                    : "Cash on delivery order was created successfully."
                  : "You returned from the payment flow without completing payment. You can retry checkout when ready."}
              </p>
              {isSyncing ? <p className="mt-3 text-[var(--foreground)]/55">Syncing your cart and checkout state...</p> : null}
              {syncError ? <p className="mt-3 text-red-700">{syncError}</p> : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Link
                href="/shop"
                className="cta-sweep inline-flex items-center justify-center gap-2 border border-[var(--deep)] bg-[var(--deep)] px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-[var(--gold)] hover:text-[var(--deep)] focus-visible:border-[var(--gold)] focus-visible:text-[var(--deep)]"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4" />
                  Continue Shopping
                </span>
              </Link>

              <Link
                href={paymentResult === "success" ? "/account" : "/checkout"}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--gold)]/35 px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-[var(--deep)] transition hover:bg-[var(--deep)] hover:text-white"
              >
                <RotateCcw className="h-4 w-4" />
                {paymentResult === "success" ? "View Account" : "Try Checkout Again"}
              </Link>
            </div>
          </div>
        </section>
      </main>
    </AuthGuard>
  );
}

function CheckoutStatusFallback() {
  return (
    <main className="grid min-h-[60vh] place-items-center px-6 py-16 text-center">
      <div>
        <p className="display-font text-3xl text-[var(--foreground)]">Loading checkout status</p>
        <p className="mt-3 text-sm uppercase tracking-[0.2em] text-[var(--foreground)]/65">
          Preparing your order details
        </p>
      </div>
    </main>
  );
}

export default function CheckoutStatusPage() {
  return (
    <Suspense fallback={<CheckoutStatusFallback />}>
      <CheckoutStatusContent />
    </Suspense>
  );
}