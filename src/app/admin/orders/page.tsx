"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { CheckCheck, Clock3, LayoutGrid, List, LoaderCircle, PackageSearch, Search, ShieldCheck, Truck } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { PriceDisplay } from "@/components/shared/PriceDisplay";
import { ProductImage } from "@/components/shared/ProductImage";
import { adminOrderService } from "@/services/orders/admin-order.service";
import type { AdminOrder, AdminOrdersPagination, AdminOrderStatus } from "@/services/orders/admin-order.types";

type ViewMode = "grid" | "table";
type PendingActionType = "confirm" | "ship" | "verify";

type PendingAction = {
  type: PendingActionType;
  order: AdminOrder;
};

const RECORDS_PER_PAGE = 20;

const ORDER_STATUS_STYLES: Record<AdminOrderStatus, string> = {
  PENDING: "border-amber-200 bg-amber-50 text-amber-700",
  CONFIRMED: "border-sky-200 bg-sky-50 text-sky-700",
  SHIPPED: "border-indigo-200 bg-indigo-50 text-indigo-700",
  DELIVERED: "border-emerald-200 bg-emerald-50 text-emerald-700",
  CANCELLED: "border-rose-200 bg-rose-50 text-rose-700",
};

const PAYMENT_STATUS_STYLES: Record<string, string> = {
  PENDING: "border-amber-200 bg-amber-50 text-amber-700",
  PROCESSING: "border-sky-200 bg-sky-50 text-sky-700",
  PAID: "border-emerald-200 bg-emerald-50 text-emerald-700",
  REFUNDED: "border-zinc-200 bg-zinc-100 text-zinc-700",
  FAILED: "border-rose-200 bg-rose-50 text-rose-700",
};

function formatDateLabel(value: string) {
  if (!value) {
    return "--";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatAddress(order: AdminOrder) {
  const parts = [
    order.shippingAddress.street,
    order.shippingAddress.city,
    order.shippingAddress.state,
    order.shippingAddress.postalCode,
    order.shippingAddress.country,
  ].filter(Boolean);

  return parts.join(", ") || "Address not provided";
}

function getActionCopy(type: PendingActionType) {
  if (type === "confirm") {
    return {
      title: "Confirm order",
      description: "This will move the order from pending to confirmed so the team can continue fulfillment.",
      buttonLabel: "Confirm order",
    };
  }

  if (type === "ship") {
    return {
      title: "Mark as shipped",
      description: "Use this when the order has left the warehouse and is now in transit to the customer.",
      buttonLabel: "Ship order",
    };
  }

  return {
    title: "Verify delivery",
    description: "Enter the delivery OTP shared by the customer to complete the delivery verification step.",
    buttonLabel: "Verify delivery",
  };
}

function ActionModal({
  pendingAction,
  deliveryOtp,
  onDeliveryOtpChange,
  onClose,
  onConfirm,
  submitting,
}: {
  pendingAction: PendingAction;
  deliveryOtp: string;
  onDeliveryOtpChange: (value: string) => void;
  onClose: () => void;
  onConfirm: () => void;
  submitting: boolean;
}) {
  const copy = getActionCopy(pendingAction.type);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(15,23,42,0.42)] px-4 py-8">
      <div className="w-full max-w-md rounded-[28px] border border-foreground/10 bg-white p-6 shadow-[0_32px_90px_rgba(15,23,42,0.24)]">
        <div className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
          Admin order action
        </div>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">{copy.title}</h2>
        <p className="mt-3 text-sm leading-7 text-foreground/65">{copy.description}</p>
        <div className="mt-4 rounded-[22px] border border-foreground/10 bg-surface px-4 py-3">
          <p className="text-xs uppercase tracking-[0.14em] text-foreground/45">Order</p>
          <p className="mt-2 text-sm font-semibold text-foreground">{pendingAction.order.orderNumber}</p>
        </div>

        {pendingAction.type === "verify" ? (
          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-medium text-foreground">Delivery OTP</span>
            <input
              type="text"
              value={deliveryOtp}
              onChange={(event) => onDeliveryOtpChange(event.target.value)}
              placeholder="Enter OTP"
              className="h-12 w-full rounded-xl border border-foreground/12 bg-white px-4 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15"
            />
          </label>
        ) : null}

        <div className="mt-6 flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            disabled={submitting}
            className="inline-flex h-11 items-center justify-center rounded-xl border border-foreground/12 px-4 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-45"
          >
            Close
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={submitting}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-foreground px-4 text-sm font-semibold text-white transition hover:bg-[#0f342c] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitting ? <LoaderCircle className="h-4 w-4 animate-spin" /> : null}
            {copy.buttonLabel}
          </button>
        </div>
      </div>
    </div>,
    document.body,
  );
}

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<AdminOrder[]>([]);
  const [pagination, setPagination] = useState<AdminOrdersPagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [submittingAction, setSubmittingAction] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [pendingAction, setPendingAction] = useState<PendingAction | null>(null);
  const [deliveryOtp, setDeliveryOtp] = useState("");

  useEffect(() => {
    let cancelled = false;

    async function loadOrders() {
      setLoading(true);
      setErrorMessage(null);

      try {
        const result = await adminOrderService.getAdminOrders({
          page: currentPage,
          limit: RECORDS_PER_PAGE,
        });

        if (cancelled) {
          return;
        }

        setOrders(result.orders);
        setPagination(result.pagination);
      } catch (error) {
        if (!cancelled) {
          setOrders([]);
          setPagination(null);
          setErrorMessage(error instanceof Error ? error.message : "Unable to load admin orders.");
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
          setRefreshing(false);
        }
      }
    }

    void loadOrders();

    return () => {
      cancelled = true;
    };
  }, [currentPage, refreshKey]);

  const filteredOrders = useMemo(() => {
    const query = searchValue.trim().toLowerCase();

    if (!query) {
      return orders;
    }

    return orders.filter((order) => {
      const haystack = [
        order.orderNumber,
        order.paymentMethod,
        order.paymentStatus,
        order.orderStatus,
        formatAddress(order),
        ...order.items.map((item) => `${item.title} ${item.sku}`),
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [orders, searchValue]);

  const summary = useMemo(() => {
    return orders.reduce(
      (accumulator, order) => {
        accumulator.total += 1;
        if (order.orderStatus === "PENDING") accumulator.pending += 1;
        if (order.orderStatus === "CONFIRMED") accumulator.confirmed += 1;
        if (order.orderStatus === "SHIPPED") accumulator.shipped += 1;
        if (order.orderStatus === "DELIVERED") accumulator.delivered += 1;
        if (order.orderStatus === "CANCELLED") accumulator.cancelled += 1;
        return accumulator;
      },
      { total: 0, pending: 0, confirmed: 0, shipped: 0, delivered: 0, cancelled: 0 },
    );
  }, [orders]);

  const visibleRange = useMemo(() => {
    if (!pagination || filteredOrders.length === 0) {
      return null;
    }

    const start = (pagination.currentPage - 1) * pagination.recordsPerPage + 1;
    const end = start + filteredOrders.length - 1;

    return { start, end };
  }, [filteredOrders.length, pagination]);

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSearchValue(searchTerm.trim());
  }

  function handleClearSearch() {
    setSearchTerm("");
    setSearchValue("");
  }

  function handleRefresh() {
    setRefreshing(true);
    setRefreshKey((value) => value + 1);
  }

  function handlePageChange(page: number) {
    if (!pagination || page === currentPage || loading || submittingAction) {
      return;
    }

    setCurrentPage(page);
  }

  function openActionModal(type: PendingActionType, order: AdminOrder) {
    setDeliveryOtp("");
    setPendingAction({ type, order });
  }

  function closeActionModal() {
    if (submittingAction) {
      return;
    }

    setPendingAction(null);
    setDeliveryOtp("");
  }

  async function handleConfirmAction() {
    if (!pendingAction) {
      return;
    }

    if (pendingAction.type === "verify" && !deliveryOtp.trim()) {
      setErrorMessage("Delivery OTP is required to verify the order.");
      return;
    }

    setSubmittingAction(true);
    setErrorMessage(null);

    try {
      if (pendingAction.type === "confirm") {
        await adminOrderService.updateAdminOrderStatus(pendingAction.order.id, { status: "CONFIRMED" });
      }

      if (pendingAction.type === "ship") {
        await adminOrderService.shipAdminOrder(pendingAction.order.id);
      }

      if (pendingAction.type === "verify") {
        await adminOrderService.verifyAdminOrderDelivery(pendingAction.order.id, { otp: deliveryOtp.trim() });
      }

      setPendingAction(null);
      setDeliveryOtp("");
      setRefreshing(true);
      setRefreshKey((value) => value + 1);
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to update the order.");
    } finally {
      setSubmittingAction(false);
    }
  }

  function renderActions(order: AdminOrder) {
    return (
      <div className="flex flex-wrap gap-2">
        {order.orderStatus === "PENDING" ? (
          <button
            type="button"
            onClick={() => openActionModal("confirm", order)}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full bg-foreground px-4 text-xs font-semibold uppercase tracking-[0.08em] text-white transition hover:bg-[#0f342c]"
          >
            <ShieldCheck className="h-3.5 w-3.5" />
            Confirm
          </button>
        ) : null}

        {order.orderStatus === "CONFIRMED" ? (
          <button
            type="button"
            onClick={() => openActionModal("ship", order)}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-sky-700 transition hover:bg-sky-100"
          >
            <Truck className="h-3.5 w-3.5" />
            Ship
          </button>
        ) : null}

        {order.orderStatus === "SHIPPED" ? (
          <button
            type="button"
            onClick={() => openActionModal("verify", order)}
            className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 text-xs font-semibold uppercase tracking-[0.08em] text-emerald-700 transition hover:bg-emerald-100"
          >
            <CheckCheck className="h-3.5 w-3.5" />
            Verify
          </button>
        ) : null}
      </div>
    );
  }

  const hasActiveSearch = Boolean(searchTerm || searchValue);

  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-6 py-12 sm:px-8">
        <section className="rounded-[28px] border border-foreground/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold">Admin Orders</p>
              <h1 className="display-font mt-3 text-3xl text-foreground sm:text-4xl">Order Operations Workspace</h1>
              <p className="mt-3 text-sm leading-7 text-foreground/65 sm:text-base">
                Review the latest orders, confirm fulfillment flow, mark shipments, and verify delivered orders from a single admin surface.
              </p>
            </div>

            <div className="flex w-full flex-col gap-3 lg:max-w-[38rem]">
              <form onSubmit={handleSearchSubmit} className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground/45" />
                  <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search order number, item, or address"
                    className="h-12 w-full rounded-xl border border-foreground/12 bg-white px-11 text-sm text-foreground outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/15"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex h-12 items-center justify-center rounded-xl bg-foreground px-5 text-sm font-bold text-white transition hover:bg-[#0f342c]"
                >
                  Search
                </button>

                <button
                  type="button"
                  onClick={handleClearSearch}
                  disabled={!hasActiveSearch}
                  className="inline-flex h-12 items-center justify-center rounded-xl border border-foreground/12 px-5 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Clear
                </button>
              </form>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="inline-flex rounded-full border border-gold/25 bg-gold/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold">
                    {pagination ? `${pagination.totalRecords} total records` : `${orders.length} loaded records`}
                  </div>
                  {pagination && visibleRange ? (
                    <p className="mt-2 text-sm text-foreground/58">
                      Showing {visibleRange.start} to {visibleRange.end} of {pagination.totalRecords}
                    </p>
                  ) : null}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleRefresh}
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-foreground/12 px-4 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold"
                  >
                    {refreshing ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <CheckCheck className="h-4 w-4" />}
                    Refresh
                  </button>

                  <div className="inline-flex items-center gap-1 rounded-full border border-foreground/10 bg-white p-1">
                    <button
                      type="button"
                      onClick={() => setViewMode("grid")}
                      className={viewMode === "grid"
                        ? "inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-white"
                        : "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition hover:bg-surface"
                      }
                      aria-label="Grid view"
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      onClick={() => setViewMode("table")}
                      className={viewMode === "table"
                        ? "inline-flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-white"
                        : "inline-flex h-9 w-9 items-center justify-center rounded-full text-foreground/60 transition hover:bg-surface"
                      }
                      aria-label="Table view"
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
            {[
              ["Total", summary.total],
              ["Pending", summary.pending],
              ["Confirmed", summary.confirmed],
              ["Shipped", summary.shipped],
              ["Delivered", summary.delivered],
              ["Cancelled", summary.cancelled],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[22px] border border-foreground/10 bg-surface px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-foreground/45">{label}</p>
                <p className="mt-2 text-2xl font-semibold text-foreground">{value}</p>
              </div>
            ))}
          </div>

          {errorMessage ? (
            <div className="mt-5 rounded-[22px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          ) : null}

          {loading ? (
            <div className="mt-6 space-y-4">
              {Array.from({ length: 3 }, (_, index) => (
                <div key={index} className="h-48 animate-pulse rounded-[28px] border border-foreground/10 bg-surface" />
              ))}
            </div>
          ) : null}

          {!loading && filteredOrders.length === 0 ? (
            <div className="mt-6 rounded-[28px] border border-dashed border-foreground/10 bg-surface px-6 py-12 text-center">
              <PackageSearch className="mx-auto h-10 w-10 text-foreground/35" />
              <h2 className="mt-4 text-lg font-semibold text-foreground">No orders found</h2>
              <p className="mt-2 text-sm text-foreground/58">Try a different search term or refresh the admin order list.</p>
            </div>
          ) : null}

          {!loading && filteredOrders.length > 0 && viewMode === "grid" ? (
            <div className="mt-6 space-y-4">
              {filteredOrders.map((order) => (
                <article key={order.id} className="overflow-hidden rounded-[28px] border border-foreground/10 bg-white p-5 shadow-sm">
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-foreground/45">{order.orderNumber}</p>
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-xl font-semibold text-foreground">
                        <span>{order.totalItems} item{order.totalItems === 1 ? "" : "s"}</span>
                        <span className="text-foreground/28">/</span>
                        <PriceDisplay value={order.totalAmount} className="text-xl font-semibold text-foreground" />
                      </div>
                      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-foreground/58">
                        <span className="inline-flex items-center gap-1">
                          <Clock3 className="h-4 w-4" />
                          Created {formatDateLabel(order.createdAt)}
                        </span>
                        <span>Updated {formatDateLabel(order.updatedAt)}</span>
                        <span>{order.paymentMethod}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 lg:justify-end">
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${ORDER_STATUS_STYLES[order.orderStatus]}`}>
                        {order.orderStatus}
                      </span>
                      <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${PAYMENT_STATUS_STYLES[order.paymentStatus] ?? "border-zinc-200 bg-zinc-100 text-zinc-700"}`}>
                        {order.paymentStatus}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {order.items.map((item, index) => (
                      <div key={`${order.id}-${item.productId}-${index}`} className="rounded-[22px] border border-foreground/10 bg-surface p-3">
                        <div className="flex h-24 items-center justify-center overflow-hidden rounded-2xl bg-white">
                          <ProductImage src={item.thumbnail} alt={item.title} className="h-full w-full object-contain p-2" />
                        </div>
                        <p className="mt-3 line-clamp-2 text-sm font-semibold text-foreground">{item.title}</p>
                        <p className="mt-1 text-xs text-foreground/58">SKU {item.sku || "--"}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-foreground/58">
                          <PriceDisplay value={item.price} className="font-semibold text-foreground" />
                          <span>Qty {item.quantity}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 grid gap-4 border-t border-foreground/10 pt-4 lg:grid-cols-[1.3fr_0.9fr_auto] lg:items-center">
                    <div>
                      <p className="text-sm font-semibold text-foreground">Shipping address</p>
                      <p className="mt-2 text-sm leading-6 text-foreground/60">{formatAddress(order)}</p>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">Refund status</p>
                      <p className="mt-2 text-sm text-foreground/60">{order.refundStatus}</p>
                    </div>
                    <div className="lg:justify-self-end">{renderActions(order)}</div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}

          {!loading && filteredOrders.length > 0 && viewMode === "table" ? (
            <div className="mt-6 overflow-hidden rounded-[28px] border border-foreground/10 bg-white shadow-sm">
              <div className="overflow-x-auto">
                <table className="min-w-[980px] w-full text-left text-sm">
                  <thead className="bg-surface text-xs font-semibold uppercase tracking-[0.1em] text-foreground/58">
                    <tr>
                      <th className="px-4 py-3">Order</th>
                      <th className="px-4 py-3">Created</th>
                      <th className="px-4 py-3">Items</th>
                      <th className="px-4 py-3">Total</th>
                      <th className="px-4 py-3">Order status</th>
                      <th className="px-4 py-3">Payment</th>
                      <th className="px-4 py-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-foreground/10">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-surface/80">
                        <td className="px-4 py-4">
                          <p className="font-semibold text-foreground">{order.orderNumber}</p>
                          <p className="mt-1 text-xs text-foreground/58">{order.paymentMethod}</p>
                          <p className="mt-1 line-clamp-2 text-xs text-foreground/58">{formatAddress(order)}</p>
                        </td>
                        <td className="px-4 py-4 text-foreground/58">
                          <p>{formatDateLabel(order.createdAt)}</p>
                          <p className="mt-1 text-xs text-foreground/45">Updated {formatDateLabel(order.updatedAt)}</p>
                        </td>
                        <td className="px-4 py-4 text-foreground/58">{order.totalItems}</td>
                        <td className="px-4 py-4">
                          <PriceDisplay value={order.totalAmount} className="font-semibold text-foreground" />
                        </td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${ORDER_STATUS_STYLES[order.orderStatus]}`}>
                            {order.orderStatus}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <span className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-[0.08em] ${PAYMENT_STATUS_STYLES[order.paymentStatus] ?? "border-zinc-200 bg-zinc-100 text-zinc-700"}`}>
                            {order.paymentStatus}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex justify-end">{renderActions(order)}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {!loading && pagination ? (
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-1 text-sm text-foreground/58">
                <p>Page {pagination.currentPage} of {pagination.totalPages}</p>
                <p>{pagination.recordsPerPage || RECORDS_PER_PAGE} per page</p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={!pagination.hasPrevPage || loading || submittingAction}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-foreground/10 px-4 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Prev
                </button>
                <span className="min-w-20 text-center text-sm font-semibold text-foreground">
                  {pagination.currentPage} / {pagination.totalPages}
                </span>
                <button
                  type="button"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={!pagination.hasNextPage || loading || submittingAction}
                  className="inline-flex h-10 items-center justify-center rounded-full border border-foreground/10 px-4 text-sm font-semibold text-foreground transition hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-45"
                >
                  Next
                </button>
              </div>
            </div>
          ) : null}
        </section>

        {pendingAction ? (
          <ActionModal
            pendingAction={pendingAction}
            deliveryOtp={deliveryOtp}
            onDeliveryOtpChange={setDeliveryOtp}
            onClose={closeActionModal}
            onConfirm={() => void handleConfirmAction()}
            submitting={submittingAction}
          />
        ) : null}
      </main>
    </AuthGuard>
  );
}