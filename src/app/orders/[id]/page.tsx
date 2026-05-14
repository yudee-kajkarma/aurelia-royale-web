"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { Ban, CreditCard, MapPinHouse, Package } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { ProductImage } from "@/components/shared/ProductImage";
import { orderService } from "@/services/orders/order.service";
import type { Order } from "@/services/orders/order.types";

function formatOrderDate(value: string) {
  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function getOrderStatusClass(status: string) {
  switch (status.toLowerCase()) {
    case "confirmed":
    case "delivered":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "cancelled":
    case "canceled":
      return "bg-rose-50 text-rose-700 border-rose-200";
    default:
      return "bg-amber-50 text-amber-700 border-amber-200";
  }
}

function getPaymentStatusClass(status: string) {
  switch (status.toLowerCase()) {
    case "paid":
      return "bg-emerald-50 text-emerald-700 border-emerald-200";
    case "failed":
      return "bg-rose-50 text-rose-700 border-rose-200";
    default:
      return "bg-zinc-100 text-zinc-700 border-zinc-200";
  }
}

function canCancelOrder(order: Order) {
  const status = order.orderStatus.toLowerCase();
  const blockedStatuses = new Set(["cancelled", "canceled", "delivered", "shipped", "shipping", "out_for_delivery"]);

  return !blockedStatuses.has(status);
}

function canRegeneratePayment(order: Order) {
  const orderStatus = order.orderStatus.toLowerCase();
  const paymentStatus = order.paymentStatus.toLowerCase();
  const isOnlinePayment = order.paymentMethod === "ONLINE";
  const isPendingOrder = orderStatus === "pending";
  const isPaymentSettled = ["paid", "refunded"].includes(paymentStatus);

  return isOnlinePayment && isPendingOrder && !isPaymentSettled;
}

export default function OrderDetailPage() {
  const params = useParams<{ id: string | string[] }>();
  const orderId = typeof params.id === "string" ? params.id : "";
  const [order, setOrder] = useState<Order | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isCancelling, setIsCancelling] = useState(false);
  const [isRegeneratingPayment, setIsRegeneratingPayment] = useState(false);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");
  const paymentStatusPollRef = useRef<ReturnType<typeof setInterval> | null>(null);

  async function refreshOrder(currentOrderId: string, showLoader: boolean) {
    if (showLoader) {
      setIsLoading(true);
    }

    try {
      const response = await orderService.getOrderById(currentOrderId);
      setOrder(response.data);
      setError("");
      return response.data;
    } catch {
      setOrder(null);
      setError("Unable to load this order right now.");
      return null;
    } finally {
      if (showLoader) {
        setIsLoading(false);
      }
    }
  }

  function buildReturnUrl(paymentResult: "success" | "cancel") {
    if (typeof window === "undefined") {
      return `/checkout/status?payment=${paymentResult}`;
    }

    const url = new URL("/checkout/status", window.location.origin);
    url.searchParams.set("payment", paymentResult);
    return url.toString();
  }

  useEffect(() => {
    if (orderId) {
      void refreshOrder(orderId, true);
    }
  }, [orderId]);

  useEffect(() => {
    return () => {
      if (paymentStatusPollRef.current) {
        clearInterval(paymentStatusPollRef.current);
        paymentStatusPollRef.current = null;
      }
    };
  }, []);

  async function handleCancelOrder() {
    if (!order || !canCancelOrder(order) || isCancelling) {
      return;
    }

    setIsCancelling(true);
    setFeedback("");

    try {
      const response = await orderService.cancelOrder(order.id);
      setOrder(response.data);
      setFeedback("Order cancelled successfully.");
    } catch (cancelError) {
      setFeedback(cancelError instanceof Error ? cancelError.message : "Unable to cancel this order right now.");
    } finally {
      setIsCancelling(false);
    }
  }

  async function handleRegeneratePayment() {
    if (!order || !canRegeneratePayment(order) || isRegeneratingPayment) {
      return;
    }

    setIsRegeneratingPayment(true);
    setFeedback("");

    try {
      const response = await orderService.regenerateOrderPayment(order.id, {
        successUrl: buildReturnUrl("success"),
        cancelUrl: buildReturnUrl("cancel"),
      });

      const checkoutUrl = response.data.url;

      if (!checkoutUrl) {
        throw new Error("Missing checkout session URL.");
      }

      const checkoutWindow = window.open(
        checkoutUrl,
        "daliaStripeCheckoutRetry",
        "popup=yes,width=540,height=760,noopener,noreferrer",
      );

      if (!checkoutWindow) {
        setFeedback("Popup was blocked by your browser. Please allow popups and try again.");
        return;
      }

      if (paymentStatusPollRef.current) {
        clearInterval(paymentStatusPollRef.current);
      }

      paymentStatusPollRef.current = setInterval(() => {
        if (!checkoutWindow.closed) {
          return;
        }

        if (paymentStatusPollRef.current) {
          clearInterval(paymentStatusPollRef.current);
          paymentStatusPollRef.current = null;
        }

        void refreshOrder(order.id, false).then((updatedOrder) => {
          if (!updatedOrder) {
            return;
          }

          if (updatedOrder.paymentStatus.toLowerCase() === "paid") {
            setFeedback("Payment completed successfully. Order status has been updated.");
            return;
          }

          setFeedback("Payment was not completed. You can retry payment or cancel this order.");
        });
      }, 1500);
    } catch (paymentError) {
      setFeedback(paymentError instanceof Error ? paymentError.message : "Unable to start payment right now. Please try again.");
    } finally {
      setIsRegeneratingPayment(false);
    }
  }

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <nav className="mb-6 text-sm text-foreground/58">
          <Link href="/orders" className="transition hover:text-deep">Orders</Link>
          <span>{" / "}</span>
          <span className="text-deep">{order?.orderNumber || orderId}</span>
        </nav>

        {isLoading ? <p className="text-sm font-medium text-foreground/60">Loading order...</p> : null}
        {!isLoading && error ? <div className="rounded-[28px] border border-rose-200 bg-rose-50 px-6 py-8 text-sm text-rose-700">{error}</div> : null}

        {!isLoading && order ? (
          <div className="grid gap-8 xl:grid-cols-[1fr_380px]">
            <section className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
              <div className="flex flex-col gap-4 border-b border-foreground/10 pb-6 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/42">{order.orderNumber}</p>
                  <h1 className="display-font mt-3 text-4xl text-deep">Order Details</h1>
                  <p className="mt-3 text-sm text-foreground/58">Placed {formatOrderDate(order.createdAt)}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${getOrderStatusClass(order.orderStatus)}`}>
                    {order.orderStatus}
                  </span>
                  <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${getPaymentStatusClass(order.paymentStatus)}`}>
                    {order.paymentStatus}
                  </span>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                {order.items.map((item, index) => (
                  <article key={`${item.productId}-${item.sku}-${index}`} className="grid gap-5 rounded-[24px] border border-foreground/10 bg-surface p-4 sm:grid-cols-[110px_minmax(0,1fr)_auto] sm:items-center">
                    <div className="overflow-hidden rounded-[20px] border border-gold/15 bg-[linear-gradient(180deg,#fff5ec_0%,#ffffff_100%)] p-3">
                      <ProductImage src={item.thumbnail} alt={item.title} className="h-24 w-full object-contain" />
                    </div>
                    <div>
                      <p className="text-lg font-bold text-deep">{item.title}</p>
                      <p className="mt-1 text-sm text-foreground/55">{item.variantName || "Default item"}</p>
                      <p className="mt-1 text-sm text-foreground/55">SKU: {item.sku || "N/A"}</p>
                      <p className="mt-1 text-sm text-foreground/55">Quantity: {item.quantity}</p>
                    </div>
                    <PriceDisplay value={item.price * item.quantity} className="text-lg font-bold text-deep" />
                  </article>
                ))}
              </div>
            </section>

            <aside className="rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
              <div className="space-y-6">
                <div className="rounded-[26px] border border-foreground/10 bg-surface p-5">
                  <div className="flex items-center gap-3 text-deep">
                    <CreditCard className="h-5 w-5" />
                    <h2 className="text-xl font-bold">Payment</h2>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-foreground/62">
                    <p>Method: <span className="font-semibold text-deep">{order.paymentMethod}</span></p>
                    <p>Status: <span className="font-semibold text-deep">{order.paymentStatus}</span></p>
                    <p>Total: <PriceDisplay value={order.totalAmount} className="font-semibold text-deep" /></p>
                  </div>
                </div>

                <div className="rounded-[26px] border border-foreground/10 bg-surface p-5">
                  <div className="flex items-center gap-3 text-deep">
                    <MapPinHouse className="h-5 w-5" />
                    <h2 className="text-xl font-bold">Shipping Address</h2>
                  </div>
                  {order.shippingAddress ? (
                    <div className="mt-4 text-sm leading-7 text-foreground/62">
                      <p>{order.shippingAddress.street}</p>
                      <p>{order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.postalCode}</p>
                      <p>{order.shippingAddress.country}</p>
                    </div>
                  ) : (
                    <p className="mt-4 text-sm text-foreground/55">No shipping address available.</p>
                  )}
                </div>

                <div className="rounded-[26px] border border-foreground/10 bg-surface p-5">
                  <div className="flex items-center gap-3 text-deep">
                    <Package className="h-5 w-5" />
                    <h2 className="text-xl font-bold">Order Summary</h2>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-foreground/62">
                    <p>Items: <span className="font-semibold text-deep">{order.totalItems}</span></p>
                    <p>Updated: <span className="font-semibold text-deep">{formatOrderDate(order.updatedAt)}</span></p>
                    <p>Refund status: <span className="font-semibold text-deep">{order.refundStatus}</span></p>
                  </div>
                </div>

                {feedback ? <p className="text-sm text-[#8b5f43]">{feedback}</p> : null}

                {canRegeneratePayment(order) ? (
                  <button
                    type="button"
                    onClick={() => void handleRegeneratePayment()}
                    disabled={isRegeneratingPayment || isCancelling}
                    className="cta-sweep inline-flex w-full items-center justify-center gap-2 border border-deep bg-deep px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold focus-visible:border-gold disabled:opacity-60"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      <CreditCard className="h-4 w-4" />
                      {isRegeneratingPayment ? "Opening Payment..." : "Regenerate Payment"}
                    </span>
                  </button>
                ) : null}

                {canCancelOrder(order) ? (
                  <button
                    type="button"
                    onClick={() => void handleCancelOrder()}
                    disabled={isCancelling || isRegeneratingPayment}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-rose-200 px-6 py-4 text-sm font-bold uppercase tracking-[0.08em] text-rose-600 transition hover:bg-rose-600 hover:text-white disabled:opacity-60"
                  >
                    <Ban className="h-4 w-4" />
                    {isCancelling ? "Cancelling..." : "Cancel Order"}
                  </button>
                ) : (
                  <p className="text-sm leading-6 text-foreground/58">
                    This order can no longer be cancelled after it reaches shipped or delivered status.
                  </p>
                )}
              </div>
            </aside>
          </div>
        ) : null}
      </main>
    </AuthGuard>
  );
}