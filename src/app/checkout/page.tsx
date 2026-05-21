"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CreditCard, ShieldCheck, ShoppingBag, Truck } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { useAuth } from "@/providers/AuthProvider";
import { useCart } from "@/providers/CartProvider";
import { clearPendingOrderStatus, setPendingOrderStatus } from "@/services/orders/checkout.storage";
import { orderService } from "@/services/orders/order.service";
import type { CreateOrderPayload, PaymentMethod } from "@/services/orders/order.types";
import { useDiscount } from "@/services/family/useDiscount";
import { notifyError } from "@/utils/notify";
import { ProductImage } from "../../components/shared/ProductImage";

export default function CheckoutPage() {
  const router = useRouter();
  const { user } = useAuth();
  const { items, count, totalValue, isLoading, refresh } = useCart();
  const { discountPercent } = useDiscount();
  const payableTotal = totalValue * (1 - discountPercent / 100);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("ONLINE");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function buildReturnUrl(result: "success" | "cancel") {
    const url = new URL(`/checkout/status?payment=${result}`, window.location.origin);
    return url.toString();
  }

  function buildOrderPayload(selectedPaymentMethod: PaymentMethod): CreateOrderPayload {
    const payload: CreateOrderPayload = {
      paymentMethod: selectedPaymentMethod,
    };

    if (selectedPaymentMethod === "ONLINE") {
      payload.successUrl = buildReturnUrl("success");
      payload.cancelUrl = buildReturnUrl("cancel");
    }

    return payload;
  }

  async function handlePlaceOrder() {
    if (items.length === 0 || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    clearPendingOrderStatus();

    try {
      const result = await orderService.createOrder(buildOrderPayload(paymentMethod));

      setPendingOrderStatus({
        orderId: result.data.id,
        orderNumber: result.data.orderNumber,
        paymentMethod,
      });

      await refresh().catch(() => undefined);

      if (paymentMethod === "ONLINE") {
        const checkoutUrl = result.checkoutSession?.url;

        if (!checkoutUrl) {
          throw new Error("Missing checkout session URL.");
        }

        const checkoutWindow = window.open(
          checkoutUrl,
          "dalilaStripeCheckout",
          "popup=yes,width=540,height=760,noopener,noreferrer",
        );

        if (!checkoutWindow) {
          throw new Error("Popup was blocked by your browser. Please allow popups and try again.");
        }

        checkoutWindow.focus();
        return;
      }

      router.push("/checkout/status?payment=success");
    } catch (checkoutError) {
      notifyError(checkoutError, "Unable to place this order right now.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Checkout</p>
            <h1 className="display-font mt-3 text-4xl text-deep sm:text-5xl">Review and Place Your Order</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
              Confirm your bag contents and review delivery details before finalizing your Dalia order.
            </p>
          </div>

          <Link
            href="/cart"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
          >
            Back to Cart
          </Link>
        </div>

        <div className="mt-8 grid gap-8 xl:grid-cols-[1fr_380px]">
          <section className="space-y-6 rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            {isLoading ? <p className="text-sm font-medium text-foreground/60">Loading checkout...</p> : null}

            {!isLoading && items.length === 0 ? (
              <div className="rounded-[28px] border border-dashed border-gold/35 bg-surface px-6 py-12 text-center">
                <h2 className="display-font text-3xl text-deep">Nothing to checkout yet</h2>
                <p className="mt-3 text-sm leading-7 text-foreground/65">
                  Add products to your cart before moving to checkout.
                </p>
                <Link
                  href="/shop"
                  className="cta-sweep mt-6 inline-flex items-center justify-center border border-deep bg-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep"
                >
                  <span className="relative z-10">Continue Shopping</span>
                </Link>
              </div>
            ) : null}

            {items.length > 0 ? (
              <>
                <div className="rounded-[28px] border border-foreground/10 bg-surface p-5">
                  <div className="flex items-center gap-3 text-deep">
                    <ShoppingBag className="h-5 w-5" />
                    <h2 className="text-xl font-bold">Order Items</h2>
                  </div>

                  <div className="mt-5 space-y-4">
                    {items.map((item) => (
                      <article
                        key={item.productId}
                        className="grid gap-4 rounded-[24px] border border-foreground/10 bg-white p-4 sm:grid-cols-[92px_minmax(0,1fr)_auto] sm:items-center"
                      >
                        <div className="overflow-hidden rounded-[18px] border border-gold/15 bg-[linear-gradient(180deg,#f7efe3_0%,#ffffff_100%)] p-2">
                          <ProductImage src={item.thumbnail} alt={item.title} className="h-20 w-full object-contain" />
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-deep">{item.title}</h3>
                          <p className="mt-1 text-sm text-foreground/55">SKU {item.sku}</p>
                          <p className="mt-1 text-sm text-foreground/55">Quantity: {item.quantity}</p>
                        </div>

                        <PriceDisplay value={item.price * item.quantity} className="text-lg font-bold text-deep" />
                      </article>
                    ))}
                  </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  <div className="rounded-[28px] border border-foreground/10 bg-surface p-5">
                    <div className="flex items-center gap-3 text-deep">
                      <Truck className="h-5 w-5" />
                      <h2 className="text-xl font-bold">Customer Details</h2>
                    </div>

                    <div className="mt-5 rounded-[22px] border border-foreground/10 bg-white p-4 text-sm leading-7 text-foreground/68">
                      <p className="font-semibold text-deep">{user?.username ?? "Dalia Customer"}</p>
                      <p>{user?.email ?? "No email available"}</p>
                      <p className="mt-3">`addressId` is supported in the order payload interface, but it is optional and is not sent until address selection is added.</p>
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-foreground/10 bg-surface p-5">
                    <div className="flex items-center gap-3 text-deep">
                      <CreditCard className="h-5 w-5" />
                      <h2 className="text-xl font-bold">Payment Method</h2>
                    </div>

                    <div className="mt-5 space-y-3">
                      <label className={`flex cursor-pointer items-start gap-4 rounded-[22px] border px-4 py-4 transition ${paymentMethod === "ONLINE" ? "border-deep bg-white" : "border-foreground/10 bg-white/70 hover:border-gold/45"}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="ONLINE"
                          checked={paymentMethod === "ONLINE"}
                          onChange={() => setPaymentMethod("ONLINE")}
                          className="mt-1 h-4 w-4 border-foreground/20 text-deep"
                        />
                        <div>
                          <p className="font-bold text-deep">Online payment</p>
                          <p className="mt-1 text-sm leading-6 text-foreground/60">A Stripe checkout popup opens after order creation and returns to the status page.</p>
                        </div>
                      </label>
                      <label className={`flex cursor-pointer items-start gap-4 rounded-[22px] border px-4 py-4 transition ${paymentMethod === "COD" ? "border-deep bg-white" : "border-foreground/10 bg-white/70 hover:border-gold/45"}`}>
                        <input
                          type="radio"
                          name="paymentMethod"
                          value="COD"
                          checked={paymentMethod === "COD"}
                          onChange={() => setPaymentMethod("COD")}
                          className="mt-1 h-4 w-4 border-foreground/20 text-deep"
                        />
                        <div>
                          <p className="font-bold text-deep">Cash on delivery</p>
                          <p className="mt-1 text-sm leading-6 text-foreground/60">The order is created immediately and you are redirected to the local success screen.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </>
            ) : null}
          </section>

          <aside className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Order Summary</p>
            <div className="mt-6 space-y-4 text-sm text-foreground/68">
              <div className="flex items-center justify-between">
                <span>Items</span>
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

            <div className="mt-6 rounded-[24px] border border-gold/20 bg-surface p-4">
              <div className="flex items-start gap-3 text-sm leading-6 text-foreground/62">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-deep" />
                <p>
                  The order request is now integrated with `POST /orders`. Online payment opens the returned checkout session in a popup window.
                </p>
              </div>
            </div>

            <div className="mt-6 border-t border-foreground/10 pt-6">
              <div className="flex items-center justify-between text-lg font-bold text-deep">
                <span>Total</span>
                <PriceDisplay value={payableTotal} />
              </div>

              <button
                type="button"
                onClick={() => void handlePlaceOrder()}
                disabled={items.length === 0 || isSubmitting}
                className="cta-sweep mt-6 inline-flex w-full items-center justify-center border border-deep bg-deep px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep disabled:opacity-60 hover:!text-white"
              >
                <span className="relative z-10">
                  {isSubmitting ? "Placing Order..." : paymentMethod === "ONLINE" ? "Place Order and Pay Online" : "Place COD Order"}
                </span>
              </button>

              <p className="mt-4 text-center text-xs uppercase tracking-[0.14em] text-foreground/42 ">
                {paymentMethod === "ONLINE" ? "Popup checkout opens after the order is created" : "Cash on delivery completes inside this website"}
              </p>
            </div>
          </aside>
        </div>
      </main>
    </AuthGuard>
  );
}