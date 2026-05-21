"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Clock3, Package, ReceiptText } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { ProductImage } from "@/components/shared/ProductImage";
import { orderService } from "@/services/orders/order.service";
import type { Order, OrdersPagination } from "@/services/orders/order.types";
import { notifyError } from "@/utils/notify";

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

export default function OrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [pagination, setPagination] = useState<OrdersPagination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadError, setHasLoadError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function loadOrders() {
      setIsLoading(true);

      try {
        const response = await orderService.getOrders();

        if (!isMounted) {
          return;
        }

        setOrders(response.data);
        setPagination(response.pagination);
        setHasLoadError(false);
      } catch (error) {
        if (!isMounted) {
          return;
        }

        setOrders([]);
        setPagination(null);
        setHasLoadError(true);
        notifyError(error, "Unable to load orders right now.");
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    void loadOrders();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthGuard allowedRoles={["USER", "ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-[1480px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-foreground/45">Orders</p>
            <h1 className="display-font mt-3 text-4xl text-deep sm:text-5xl">Your Order History</h1>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-foreground/65">
              Track placed orders, payment status, and shipping progress from one place.
            </p>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center justify-center rounded-full border border-gold/35 bg-white px-5 py-3 text-sm font-bold uppercase tracking-[0.08em] text-deep transition hover:border-deep hover:bg-deep hover:text-white"
          >
            Continue Shopping
          </Link>
        </div>

        <section className="mt-8 rounded-[34px] border border-foreground/10 bg-white/90 p-6 shadow-[0_20px_60px_rgba(55,31,10,0.06)] backdrop-blur-sm sm:p-8">
          {isLoading ? <p className="text-sm font-medium text-foreground/60">Loading orders...</p> : null}
          {!isLoading && hasLoadError ? (
            <div className="rounded-[28px] border border-rose-200 bg-rose-50 px-6 py-8 text-sm text-rose-700">
              We couldn&apos;t load your orders. Please try again.
            </div>
          ) : null}

          {!isLoading && !hasLoadError && orders.length === 0 ? (
            <div className="rounded-[28px] border border-dashed border-gold/35 bg-surface px-6 py-12 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/35 text-deep">
                <ReceiptText className="h-6 w-6" />
              </div>
              <h2 className="display-font mt-5 text-3xl text-deep">No orders yet</h2>
              <p className="mt-3 text-sm leading-7 text-foreground/65">
                Place your first order from the cart or buy directly from a product page.
              </p>
              <Link
                href="/shop"
                className="cta-sweep mt-6 inline-flex items-center justify-center border border-deep bg-deep px-6 py-3 text-sm font-bold uppercase tracking-[0.08em] text-white transition hover:border-gold hover:text-deep focus-visible:border-gold focus-visible:text-deep"
              >
                <span className="relative z-10">Shop Now</span>
              </Link>
            </div>
          ) : null}

          {!isLoading && orders.length > 0 ? (
            <div className="space-y-5">
              {orders.map((order) => (
                <article key={order.id} className="rounded-[28px] border border-foreground/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.94)_0%,rgba(248,248,245,0.94)_100%)] p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.12em] text-foreground/42">{order.orderNumber}</p>
                      <Link href={`/orders/${order.id}`} className="mt-2 block text-2xl font-bold text-deep transition hover:text-gold">
                        Order for {order.totalItems} item{order.totalItems === 1 ? "" : "s"}
                      </Link>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-foreground/58">
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-4 w-4" />
                          {formatOrderDate(order.createdAt)}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <Package className="h-4 w-4" />
                          {order.paymentMethod}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${getOrderStatusClass(order.orderStatus)}`}>
                        {order.orderStatus}
                      </span>
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${getPaymentStatusClass(order.paymentStatus)}`}>
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {order.items.slice(0, 4).map((item, index) => (
                      <div key={`${order.id}-${item.productId}-${item.sku}-${index}`} className="rounded-[22px] border border-foreground/10 bg-white p-3">
                        <div className="overflow-hidden rounded-[18px] border border-gold/15 bg-[linear-gradient(180deg,#fff5ec_0%,#ffffff_100%)] p-2">
                          <ProductImage src={item.thumbnail} alt={item.title} className="h-24 w-full object-contain" />
                        </div>
                        <p className="mt-3 line-clamp-2 text-sm font-bold text-deep">{item.title}</p>
                        <p className="mt-1 text-xs text-foreground/52">{item.variantName || "Default item"} · Qty {item.quantity}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-col gap-3 border-t border-foreground/10 pt-4 text-sm text-foreground/58 sm:flex-row sm:items-center sm:justify-between">
                    <span>
                      Total <PriceDisplay value={order.totalAmount} className="font-semibold text-deep" />
                    </span>
                    <Link href={`/orders/${order.id}`} className="font-bold text-deep transition hover:text-gold">
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {pagination ? (
            <div className="mt-6 border-t border-foreground/10 pt-4 text-sm text-foreground/58">
              Showing page {pagination.currentPage} of {pagination.totalPages} · {pagination.totalRecords} order{pagination.totalRecords === 1 ? "" : "s"}
            </div>
          ) : null}
        </section>
      </main>
    </AuthGuard>
  );
}