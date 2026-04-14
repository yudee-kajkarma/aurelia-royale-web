"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { RefreshCw, Search, ShoppingBag, Users } from "lucide-react";
import { AuthGuard } from "@/components/auth/AuthGuard";
import { ProductImage } from "@/components/shared/ProductImage";
import { adminCartService } from "@/services/cart/admin-cart.service";
import type { AdminCartUserSummary, AdminUserCart } from "@/services/cart/admin-cart.types";
import type { ProductsPagination } from "@/services/products/product.types";

const RECORDS_PER_PAGE = 20;

function formatCurrency(value: number) {
  return `$${value.toFixed(2)}`;
}

function formatDateLabel(value: string) {
  if (!value) {
    return "--";
  }

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
}

export default function AdminCartsPage() {
  const [users, setUsers] = useState<AdminCartUserSummary[]>([]);
  const [pagination, setPagination] = useState<ProductsPagination | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [refreshKey, setRefreshKey] = useState(0);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedCart, setSelectedCart] = useState<AdminUserCart | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingCart, setLoadingCart] = useState(false);
  const [refreshing, setRefreshing] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadInitialData() {
      setLoadingUsers(true);
      setErrorMessage(null);

      try {
        const result = await adminCartService.getAdminCartUsers({
          page: currentPage,
          limit: RECORDS_PER_PAGE,
          search: searchValue || undefined,
        });

        if (cancelled) {
          return;
        }

        setUsers(result.users);
        setPagination(result.pagination);

        const nextSelectedUserId = selectedUserId && result.users.some((user) => user.userId === selectedUserId)
          ? selectedUserId
          : result.users[0]?.userId ?? "";

        setSelectedUserId(nextSelectedUserId);

        if (!nextSelectedUserId) {
          setSelectedCart(null);
          return;
        }

        setLoadingCart(true);
        const cart = await adminCartService.getAdminUserCart(nextSelectedUserId);

        if (!cancelled) {
          setSelectedCart(cart);
        }
      } catch (error) {
        if (!cancelled) {
          setUsers([]);
          setPagination(null);
          setSelectedUserId("");
          setSelectedCart(null);
          setErrorMessage(error instanceof Error ? error.message : "Unable to load cart workspace.");
        }
      } finally {
        if (!cancelled) {
          setLoadingUsers(false);
          setLoadingCart(false);
          setRefreshing(false);
        }
      }
    }

    void loadInitialData();

    return () => {
      cancelled = true;
    };
  }, [currentPage, refreshKey, searchValue]);

  const summary = useMemo(() => {
    return users.reduce(
      (accumulator, user) => ({
        userCount: accumulator.userCount + 1,
        itemCount: accumulator.itemCount + user.itemCount,
        totalAmount: accumulator.totalAmount + user.totalAmount,
      }),
      { userCount: 0, itemCount: 0, totalAmount: 0 },
    );
  }, [users]);

  const selectedCartTotal = useMemo(() => {
    if (!selectedCart) {
      return 0;
    }

    return selectedCart.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  }, [selectedCart]);

  async function handleSelectUser(userId: string) {
    if (!userId || userId === selectedUserId) {
      return;
    }

    setLoadingCart(true);
    setSelectedUserId(userId);

    try {
      const cart = await adminCartService.getAdminUserCart(userId);
      setSelectedCart(cart);
    } catch (error) {
      setSelectedCart(null);
      setErrorMessage(error instanceof Error ? error.message : "Unable to load the selected cart.");
    } finally {
      setLoadingCart(false);
    }
  }

  function handleSearchSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setCurrentPage(1);
    setSearchValue(searchTerm.trim());
  }

  function handleClearSearch() {
    setSearchTerm("");
    setSearchValue("");
    setCurrentPage(1);
  }

  function handleRefresh() {
    setRefreshing(true);
    setRefreshKey((value) => value + 1);
  }

  function handlePageChange(page: number) {
    if (page === currentPage || loadingUsers) {
      return;
    }

    setCurrentPage(page);
  }

  const hasActiveSearch = Boolean(searchTerm || searchValue);

  return (
    <AuthGuard allowedRoles={["ADMIN"]}>
      <main className="mx-auto min-h-[70vh] w-full max-w-7xl px-6 py-12 sm:px-8">
        <section className="rounded-[28px] border border-[var(--foreground)]/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold)]">Admin Carts</p>
              <h1 className="display-font mt-3 text-3xl text-[var(--foreground)] sm:text-4xl">Cart Monitoring Workspace</h1>
              <p className="mt-3 text-sm leading-7 text-[var(--foreground)]/65 sm:text-base">
                Review users with active carts, inspect item mixes, and track cart totals in the same admin theme used across the management workspace.
              </p>
            </div>

            <form onSubmit={handleSearchSubmit} className="grid w-full gap-3 lg:max-w-[36rem] lg:grid-cols-[minmax(0,1fr)_auto_auto]">
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--foreground)]/45" />
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search by name, email, or phone"
                  className="h-12 w-full rounded-xl border border-[var(--foreground)]/12 bg-white px-11 text-sm text-[var(--foreground)] outline-none transition focus:border-[var(--gold)] focus:ring-2 focus:ring-[var(--gold)]/15"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-[var(--foreground)] px-5 text-sm font-bold text-white transition hover:bg-[#0f342c]"
              >
                Search
              </button>

              <button
                type="button"
                onClick={handleClearSearch}
                disabled={!hasActiveSearch}
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--foreground)]/12 px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
              >
                Clear
              </button>
            </form>
          </div>

          <div className="mt-5 flex flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
            <div className="grid gap-3 sm:grid-cols-3 xl:min-w-[34rem] xl:flex-1">
              <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Users</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{summary.userCount}</p>
              </div>
              <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Items</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{summary.itemCount}</p>
              </div>
              <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] px-4 py-4">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Cart Value</p>
                <p className="mt-2 text-2xl font-semibold text-[var(--foreground)]">{formatCurrency(summary.totalAmount)}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleRefresh}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-[var(--foreground)]/12 px-5 text-sm font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)]"
            >
              <RefreshCw className={`h-4 w-4 ${refreshing ? "animate-spin" : ""}`} />
              Refresh
            </button>
          </div>

          {errorMessage ? (
            <div className="mt-5 rounded-[22px] border border-red-200 bg-red-50 px-5 py-4 text-sm font-medium text-red-700">
              {errorMessage}
            </div>
          ) : null}
        </section>

        <div className="mt-5 grid gap-6 xl:grid-cols-[380px_minmax(0,1fr)]">
          <section className="rounded-[28px] border border-[var(--foreground)]/10 bg-white p-4 shadow-sm">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-[var(--foreground)]/10 px-1 pb-4">
              <div>
                <p className="text-sm font-semibold text-[var(--foreground)]">Users With Carts</p>
                <p className="mt-1 text-sm text-[var(--foreground)]/60">
                  {pagination ? `Page ${pagination.currentPage} of ${pagination.totalPages}` : "Current cart owners"}
                </p>
              </div>
            </div>

            {loadingUsers ? (
              <div className="space-y-3">
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index} className="h-28 animate-pulse rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)]" />
                ))}
              </div>
            ) : null}

            {!loadingUsers && users.length === 0 ? (
              <div className="rounded-[22px] border border-dashed border-[var(--foreground)]/10 bg-[var(--surface)] px-5 py-10 text-center text-sm text-[var(--foreground)]/60">
                No users with carts matched the current search.
              </div>
            ) : null}

            {!loadingUsers && users.length > 0 ? (
              <div className="space-y-3">
                {users.map((cartUser) => (
                  <button
                    key={cartUser.userId}
                    type="button"
                    onClick={() => void handleSelectUser(cartUser.userId)}
                    className={selectedUserId === cartUser.userId
                      ? "w-full rounded-[22px] border border-[var(--gold)]/45 bg-[var(--gold)]/8 p-4 text-left shadow-sm transition"
                      : "w-full rounded-[22px] border border-[var(--foreground)]/10 bg-white p-4 text-left transition hover:border-[var(--gold)]/40 hover:bg-[var(--surface)]"
                    }
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="truncate text-sm font-semibold text-[var(--foreground)]">{cartUser.userName || "Unknown user"}</p>
                        <p className="mt-1 truncate text-xs text-[var(--foreground)]/58">{cartUser.userEmail || "--"}</p>
                        <p className="mt-1 text-xs text-[var(--foreground)]/58">{cartUser.userPhone || "Phone not provided"}</p>
                      </div>
                      <span className="rounded-full border border-[var(--foreground)]/10 bg-white px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                        {cartUser.itemCount} item{cartUser.itemCount === 1 ? "" : "s"}
                      </span>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3 text-xs text-[var(--foreground)]/58">
                      <span className="font-semibold text-[var(--gold)]">{formatCurrency(cartUser.totalAmount)}</span>
                      <span>Updated {formatDateLabel(cartUser.lastUpdated)}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : null}

            {pagination ? (
              <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--foreground)]/10 px-1 pt-4 text-sm text-[var(--foreground)]/60">
                <span>{pagination.totalRecords} cart user{pagination.totalRecords === 1 ? "" : "s"}</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={!pagination.hasPrevPage || loadingUsers}
                    className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--foreground)]/10 px-4 font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={!pagination.hasNextPage || loadingUsers}
                    className="inline-flex h-10 items-center justify-center rounded-full border border-[var(--foreground)]/10 px-4 font-semibold text-[var(--foreground)] transition hover:border-[var(--gold)] hover:text-[var(--gold)] disabled:cursor-not-allowed disabled:opacity-45"
                  >
                    Next
                  </button>
                </div>
              </div>
            ) : null}
          </section>

          <section className="rounded-[28px] border border-[var(--foreground)]/10 bg-white p-5 shadow-sm">
            {loadingCart ? (
              <div className="space-y-4">
                <div className="h-28 animate-pulse rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)]" />
                {Array.from({ length: 3 }, (_, index) => (
                  <div key={index} className="h-24 animate-pulse rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)]" />
                ))}
              </div>
            ) : null}

            {!loadingCart && !selectedCart ? (
              <div className="flex min-h-[320px] flex-col items-center justify-center rounded-[22px] border border-dashed border-[var(--foreground)]/10 bg-[var(--surface)] px-6 text-center">
                <Users className="h-8 w-8 text-[var(--gold)]" />
                <p className="mt-4 text-sm font-semibold text-[var(--foreground)]">Select a user to inspect their cart.</p>
              </div>
            ) : null}

            {!loadingCart && selectedCart ? (
              <>
                <div className="rounded-[22px] border border-[var(--foreground)]/10 bg-[var(--surface)] p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--foreground)]/45">Cart Overview</p>
                  <h2 className="mt-2 text-2xl font-semibold text-[var(--foreground)]">
                    {selectedCart.userDetails?.userName || "Unknown user"}
                  </h2>
                  <p className="mt-1 text-sm text-[var(--foreground)]/60">{selectedCart.userDetails?.userEmail || "--"}</p>
                  <p className="mt-1 text-sm text-[var(--foreground)]/60">{selectedCart.userDetails?.userPhone || "Phone not provided"}</p>

                  <div className="mt-4 flex flex-wrap gap-3 text-xs text-[var(--foreground)]/58">
                    <span className="rounded-full border border-[var(--foreground)]/10 bg-white px-3 py-1">
                      Updated {formatDateLabel(selectedCart.updatedAt)}
                    </span>
                    <span className="rounded-full border border-[var(--foreground)]/10 bg-white px-3 py-1">
                      {selectedCart.items.length} item{selectedCart.items.length === 1 ? "" : "s"}
                    </span>
                    <span className="rounded-full border border-[var(--foreground)]/10 bg-white px-3 py-1">
                      {selectedCart.isActive ? "Active cart" : "Inactive cart"}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">Cart Items</h3>
                  <span className="rounded-full border border-[var(--foreground)]/10 bg-[var(--surface)] px-3 py-1 text-xs font-semibold text-[var(--foreground)]">
                    Total {formatCurrency(selectedCartTotal)}
                  </span>
                </div>

                {selectedCart.items.length === 0 ? (
                  <div className="mt-4 rounded-[22px] border border-dashed border-[var(--foreground)]/10 bg-[var(--surface)] px-5 py-10 text-center text-sm text-[var(--foreground)]/60">
                    This cart does not contain any items.
                  </div>
                ) : (
                  <div className="mt-4 space-y-3">
                    {selectedCart.items.map((item, index) => (
                      <article
                        key={`${item.productId}-${item.variantId ?? "default"}-${item.addedAt}-${index}`}
                        className="flex items-center gap-4 rounded-[22px] border border-[var(--foreground)]/10 bg-white p-3"
                      >
                        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-[18px] border border-[var(--foreground)]/10 bg-[var(--surface)] p-2">
                          {item.thumbnail ? (
                            <ProductImage src={item.thumbnail} alt={item.title || "Cart product"} className="h-full w-full object-contain" />
                          ) : (
                            <div className="flex h-full w-full items-center justify-center text-[var(--gold)]">
                              <ShoppingBag className="h-5 w-5" />
                            </div>
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-[var(--foreground)]">{item.title || "Untitled product"}</p>
                          <p className="mt-1 text-xs text-[var(--foreground)]/58">Product ID: {item.productId || "--"}</p>
                          <p className="mt-1 text-xs text-[var(--foreground)]/58">SKU: {item.sku || "--"}</p>
                          <p className="mt-1 text-xs text-[var(--foreground)]/58">Variant: {item.variantName || "Default item"}</p>
                          <p className="mt-1 text-xs text-[var(--foreground)]/58">Added {formatDateLabel(item.addedAt)}</p>
                        </div>

                        <div className="text-right text-sm">
                          <p className="text-xs font-medium text-[var(--foreground)]/58">Qty {item.quantity}</p>
                          <p className="mt-1 font-semibold text-[var(--gold)]">{formatCurrency(item.price)}</p>
                        </div>
                      </article>
                    ))}
                  </div>
                )}
              </>
            ) : null}
          </section>
        </div>
      </main>
    </AuthGuard>
  );
}